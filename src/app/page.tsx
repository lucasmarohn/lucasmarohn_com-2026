import { HomeContent } from "@/components/home-content";
import { JsonLd } from "@/components/json-ld";
import { getAllProjects } from "@/lib/sanity-queries";
import { siteUrl, siteName, siteDescription, socialProfiles } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personId = `${siteUrl}/#lucas`;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Lucas Marohn",
      url: siteUrl,
      image: `${siteUrl}/images/lucas-marohn.jpg`,
      jobTitle: "Senior Product Designer",
      description: siteDescription,
      email: "lucas@lucasmarohn.com",
      sameAs: socialProfiles,
      knowsAbout: [
        "Product Design",
        "Design Systems",
        "Brand Identity",
        "Full Stack Development",
        "AI-Enabled Products",
        "Next.js",
        "TypeScript",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: siteName,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": personId },
      primaryImageOfPage: `${siteUrl}/images/og.jpg`,
    },
  ],
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <>
      <JsonLd data={graph} />
      <HomeContent projects={projects} />
    </>
  );
}
