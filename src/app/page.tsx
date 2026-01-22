import { HomeContent } from "@/components/home-content";
import { getAllProjects } from "@/lib/sanity-queries";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Home() {
  const projects = await getAllProjects();

  return <HomeContent projects={projects} />;
}
