import { sanityFetch, urlFor } from "@/sanity/client";

// Types
export interface SanityProject {
  _id: string;
  title: string;
  slug: string;
  tags: string[];
  description: string;
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
  image?: string;
}

export interface ProjectForDetail {
  title: string;
  slug: string;
  tags: string[];
  description: string;
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
    image: project.images?.[0]
      ? urlFor(project.images[0]).width(1200).height(750).url()
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
    images: project.images?.map((img) =>
      urlFor(img).width(1600).height(1000).url()
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
