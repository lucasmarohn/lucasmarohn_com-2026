import { sanityFetch, urlFor, urlForFile } from "@/sanity/client";

// Types
export interface SanityMedia {
  mediaType: "image" | "video";
  image?: {
    asset: { _ref: string };
    alt?: string;
  };
  video?: {
    asset: { _ref: string };
    poster?: {
      asset: { _ref: string };
    };
  };
}

export interface MediaItem {
  type: "image" | "video";
  url: string;
  alt?: string;
  poster?: string;
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  thumbnailImage?: SanityMedia;
  featuredImage?: SanityMedia;
  images: SanityMedia[];
  liveUrl?: string;
  order: number;
}

export interface ProjectForCard {
  title: string;
  slug: string;
  tags: string[];
  thumbnailImage?: MediaItem;
}

export interface ProjectForDetail {
  title: string;
  slug: string;
  tags: string[];
  description: string;
  featuredImage?: MediaItem;
  images: MediaItem[];
  liveUrl?: string;
}

// Helper to convert Sanity media to MediaItem
function convertMedia(media?: SanityMedia): MediaItem | undefined {
  if (!media) return undefined;

  if (media.mediaType === "image" && media.image) {
    return {
      type: "image",
      url: urlFor(media.image).width(2000).url(),
      alt: media.image.alt,
    };
  }

  if (media.mediaType === "video" && media.video) {
    return {
      type: "video",
      url: urlForFile(media.video),
      poster: media.video.poster
        ? urlFor(media.video.poster).width(2000).url()
        : undefined,
    };
  }

  return undefined;
}

// Queries
const allProjectsQuery = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    tags,
    description,
    thumbnailImage {
      mediaType,
      image {
        asset,
        alt
      },
      video {
        asset,
        poster {
          asset
        }
      }
    },
    featuredImage {
      mediaType,
      image {
        asset,
        alt
      },
      video {
        asset,
        poster {
          asset
        }
      }
    },
    images[] {
      mediaType,
      image {
        asset,
        alt
      },
      video {
        asset,
        poster {
          asset
        }
      }
    },
    liveUrl,
    order
  }
`;

const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    tags,
    description,
    thumbnailImage {
      mediaType,
      image {
        asset,
        alt
      },
      video {
        asset,
        poster {
          asset
        }
      }
    },
    featuredImage {
      mediaType,
      image {
        asset,
        alt
      },
      video {
        asset,
        poster {
          asset
        }
      }
    },
    images[] {
      mediaType,
      image {
        asset,
        alt
      },
      video {
        asset,
        poster {
          asset
        }
      }
    },
    liveUrl,
    order
  }
`;

// Fetch functions
export async function getAllProjects(): Promise<ProjectForCard[]> {
  const projects = await sanityFetch<SanityProject[]>(allProjectsQuery);

  return projects.map((project) => ({
    title: project.title,
    slug: project.slug,
    tags: project.tags || [],
    thumbnailImage: convertMedia(project.thumbnailImage),
  }));
}

export async function getProjectBySlug(slug: string): Promise<ProjectForDetail | null> {
  const project = await sanityFetch<SanityProject | null>(projectBySlugQuery, { slug });

  if (!project) return null;

  return {
    title: project.title,
    slug: project.slug,
    tags: project.tags || [],
    description: project.description || "",
    featuredImage: convertMedia(project.featuredImage),
    images: project.images?.map((media) => convertMedia(media)).filter((m): m is MediaItem => m !== undefined) || [],
    liveUrl: project.liveUrl,
  };
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await sanityFetch<Array<{ slug: string }>>(
    `*[_type == "project"]{ "slug": slug.current }`
  );
  return projects.map((p) => p.slug);
}

export async function getAdjacentProjects(slug: string): Promise<{
  prev: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
}> {
  const projects = await sanityFetch<Array<{ title: string; slug: string }>>(
    `*[_type == "project"] | order(order asc) { title, "slug": slug.current }`
  );

  const index = projects.findIndex((p) => p.slug === slug);

  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export async function getMoreProjects(excludeSlug: string, limit: number = 2): Promise<ProjectForCard[]> {
  const projects = await sanityFetch<SanityProject[]>(
    `*[_type == "project" && slug.current != $excludeSlug] | order(order asc)[0...${limit}] {
      _id,
      title,
      "slug": slug.current,
      tags,
      thumbnailImage {
        mediaType,
        image {
          asset,
          alt
        },
        video {
          asset,
          poster {
            asset
          }
        }
      }
    }`,
    { excludeSlug }
  );

  return projects.map((project) => ({
    title: project.title,
    slug: project.slug,
    tags: project.tags || [],
    thumbnailImage: convertMedia(project.thumbnailImage),
  }));
}
