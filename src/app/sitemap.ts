import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/sanity-queries";
import { siteUrl } from "@/lib/site";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  let projectRoutes: MetadataRoute.Sitemap = [];
  try {
    const slugs = await getAllProjectSlugs();
    projectRoutes = slugs.map((slug) => ({
      url: `${siteUrl}/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch {
    // Keep the static routes in the sitemap if Sanity is unreachable at build time.
  }

  return [...staticRoutes, ...projectRoutes];
}
