import "dotenv/config";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rm0qh5v7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // You'll need a write token
});

const projects = [
  {
    _type: "project",
    title: "Aeon Industrial",
    slug: { _type: "slug", current: "aeon-industrial" },
    tags: ["Brand identity", "Website"],
    description:
      "A comprehensive brand identity and website design for Aeon Industrial, a leading manufacturer of precision engineering components. The project focused on creating a modern, professional identity that reflects the company's commitment to quality and innovation.",
    liveUrl: "https://aeonindustrial.com",
    order: 1,
  },
  {
    _type: "project",
    title: "Execnow",
    slug: { _type: "slug", current: "execnow" },
    tags: ["Brand identity", "Website", "Development"],
    description:
      "Full brand development and digital platform for Execnow, an executive coaching and leadership development company. The project included brand strategy, visual identity, website design, and custom web development.",
    liveUrl: "https://execnow.com",
    order: 2,
  },
  {
    _type: "project",
    title: "1AND1",
    slug: { _type: "slug", current: "1and1" },
    tags: ["Website design", "Website development"],
    description:
      "Website redesign and development for 1AND1, a creative agency specializing in digital experiences. The project aimed to showcase their portfolio and capabilities through an immersive, modern web experience.",
    liveUrl: "https://1and1.agency",
    order: 3,
  },
  {
    _type: "project",
    title: "Spacewalk",
    slug: { _type: "slug", current: "spacewalk" },
    tags: ["App development"],
    description:
      "A mobile application designed to help remote teams stay connected and collaborate effectively. Spacewalk features real-time communication, project management tools, and integrations with popular productivity platforms.",
    liveUrl: "https://spacewalk.app",
    order: 4,
  },
];

const siteSettings = {
  _type: "siteSettings",
  _id: "siteSettings",
  email: "lucas@lucasmarohn.com",
  location: "Portland, OR",
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/lucasmarohn" },
    { platform: "linkedin", url: "https://linkedin.com/in/lucasmarohn" },
  ],
};

async function seed() {
  console.log("Seeding Sanity database...\n");

  // Create site settings
  console.log("Creating site settings...");
  await client.createOrReplace(siteSettings);
  console.log("✓ Site settings created\n");

  // Create projects
  console.log("Creating projects...");
  for (const project of projects) {
    const result = await client.create(project);
    console.log(`✓ Created: ${project.title} (${result._id})`);
  }

  console.log("\n✅ Seeding complete!");
  console.log("\nNext steps:");
  console.log("1. Go to /studio to add images to each project");
  console.log("2. Update any descriptions or details as needed");
}

seed().catch(console.error);
