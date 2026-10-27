import { AboutContent } from "@/components/about-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lucas Marohn is a senior product designer and full stack developer from California, building high-craft, AI-enabled products for over a decade.",
  openGraph: {
    title: "About | Lucas Marohn",
    description:
      "Lucas Marohn is a senior product designer and full stack developer from California, building high-craft, AI-enabled products.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
