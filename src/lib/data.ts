// Static project data - will be replaced with Sanity data later

const placeholder = "/images/projects/placeholder.svg";

export interface ProjectData {
  title: string;
  slug: string;
  tags: string[];
  description: string;
  images: string[];
  liveUrl?: string;
}

export const projects: ProjectData[] = [
  {
    title: "Aeon Industrial",
    slug: "aeon-industrial",
    tags: ["Brand identity", "Website"],
    description:
      "A comprehensive brand identity and website design for Aeon Industrial, a leading manufacturer of precision engineering components. The project focused on creating a modern, professional identity that reflects the company's commitment to quality and innovation.",
    images: [placeholder, placeholder, placeholder],
    liveUrl: "https://aeonindustrial.com",
  },
  {
    title: "Execnow",
    slug: "execnow",
    tags: ["Brand identity", "Website", "Development"],
    description:
      "Full brand development and digital platform for Execnow, an executive coaching and leadership development company. The project included brand strategy, visual identity, website design, and custom web development.",
    images: [placeholder, placeholder, placeholder],
    liveUrl: "https://execnow.com",
  },
  {
    title: "1AND1",
    slug: "1and1",
    tags: ["Website design", "Website development"],
    description:
      "Website redesign and development for 1AND1, a creative agency specializing in digital experiences. The project aimed to showcase their portfolio and capabilities through an immersive, modern web experience.",
    images: [placeholder, placeholder, placeholder],
    liveUrl: "https://1and1.agency",
  },
  {
    title: "Spacewalk",
    slug: "spacewalk",
    tags: ["App development"],
    description:
      "A mobile application designed to help remote teams stay connected and collaborate effectively. Spacewalk features real-time communication, project management tools, and integrations with popular productivity platforms.",
    images: [placeholder, placeholder, placeholder],
    liveUrl: "https://spacewalk.app",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getAdjacentProjects(
  slug: string
): { prev: ProjectData | null; next: ProjectData | null } {
  const index = projects.findIndex((project) => project.slug === slug);

  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
