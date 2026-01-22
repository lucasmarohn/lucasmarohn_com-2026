import { WorkContent } from "@/components/work-content";
import { getAllProjects } from "@/lib/sanity-queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Lucas Marohn including brand identity, website design, and app development.",
  openGraph: {
    title: "Work | Lucas Marohn",
    description:
      "Selected projects by Lucas Marohn including brand identity, website design, and app development.",
  },
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function WorkPage() {
  const projects = await getAllProjects();

  return <WorkContent projects={projects} />;
}
