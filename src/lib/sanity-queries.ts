import { sanityFetch, urlFor } from "@/sanity/client";

// Types
export interface SanityProject {
  _id: string;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  thumbnailImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  featuredImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  images: Array<{
    asset: { _ref: string };
    alt?: string;
  }>;
  liveUrl?: string;
  order: number;
}

export interface ProjectForCard {
  title: string;
  slug: string;
  tags: string[];
  thumbnailImage?: string;
}

export interface ProjectForDetail {
  title: string;
  slug: string;
  tags: string[];
  description: string;
  featuredImage?: string;
  images: string[];
  liveUrl?: string;
}

// Queries
const allProjectsQuery = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    tags,
    description,
    thumbnailImage,
    featuredImage,
    images,
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
    thumbnailImage,
    featuredImage,
    images,
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
    thumbnailImage: project.thumbnailImage
      ? urlFor(project.thumbnailImage).width(1600).url()
      : undefined,
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
    featuredImage: project.featuredImage
      ? urlFor(project.featuredImage).width(2400).url()
      : undefined,
    images: project.images?.map((img) =>
      urlFor(img).width(2000).url()
    ) || [],
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
      thumbnailImage
    }`,
    { excludeSlug }
  );

  return projects.map((project) => ({
    title: project.title,
    slug: project.slug,
    tags: project.tags || [],
    thumbnailImage: project.thumbnailImage
      ? urlFor(project.thumbnailImage).width(1600).url()
      : undefined,
  }));
}
