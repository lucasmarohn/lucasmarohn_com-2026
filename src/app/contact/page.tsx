import { ContactContent } from "@/components/contact-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lucas Marohn for design and development projects. Based in Portland, OR.",
  openGraph: {
    title: "Contact | Lucas Marohn",
    description:
      "Get in touch with Lucas Marohn for design and development projects.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
