import { AboutContent } from "@/components/about-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lucas Marohn is a self-taught designer and full stack developer from California with over a decade of experience in digital design and development.",
  openGraph: {
    title: "About | Lucas Marohn",
    description:
      "Lucas Marohn is a self-taught designer and full stack developer from California.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
