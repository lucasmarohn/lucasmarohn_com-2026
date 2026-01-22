import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getAdjacentProjects,
  getAllProjectSlugs,
} from "@/lib/sanity-queries";
import { ProjectContent } from "@/components/project-content";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Revalidate every 60 seconds
export const revalidate = 60;

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = await getAdjacentProjects(slug);

  return (
    <ProjectContent
      project={project}
      prev={prev}
      next={next}
    />
  );
}
