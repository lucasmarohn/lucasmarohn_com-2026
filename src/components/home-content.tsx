"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Navigation, Footer, Container, ProjectCard, ServiceCard } from "@/components";
import type { ProjectForCard } from "@/lib/sanity-queries";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { AccordionHeader } from "@radix-ui/react-accordion";

const services = [
  {
    title: "Brand identity",
    description:
      "We immerse ourselves into an organisation to identify insights across brand, product and technology.",
  },
  {
    title: "Websites",
    description:
      "We build dynamic, distinct brands that transform how businesses connect with their audiences.",
  },
  {
    title: "Apps",
    description:
      "We channel insights into elegant, engaging digital experiences that make the internet a better place.",
  },
];

interface HomeContentProps {
  projects: ProjectForCard[];
}

export function HomeContent({ projects }: HomeContentProps) {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <Container>
            <div className="h-[calc(100vh-var(--nav-height,80px))] flex flex-col justify-between relative gap-8 pb-8">

              <div className="relative w-full grow h-full">
                <Image fill src="/images/home/hero.webp" alt="" className="object-cover" />
              </div>

              <div className="flex justify-between grow">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  onClick={scrollToProjects}
                  className="flex items-center gap-2 text-foreground hover:text-foreground transition-colors grow self-end basis-1"
                >
                  <div className="text-xl">Explore</div>
                  <ArrowDown className="h-5 w-5" />
                </motion.button>

                <div className="grow flex self-end leading-[.8em] font-semibold text-[80px] basis-1">
                  <div className="grow tracking-tight">Selected ventures</div>
                  <div className="text-muted-foreground/80 self-baseline">2026</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="grid grid-cols-2 border-t my-12 py-4">
              <div>About</div>
              <div className="flex flex-col gap-4 max-w-[55ch]">
                <p>Lucas Marohn is a self-taught designer and full stack developer from California. His approach to his work is that of a craftsman — endless curiosity, pride in detail, honoring tradition, and nurturing motivation, discipline, and passion in the next generation of creatives.</p>
                <p>He debuted his first web development tutorial series on YouTube at 12 years old, going on to study cinematography, computer science, and entrepreneurship over 6 years before dropping out of Cal Poly SLO.</p>
                <p>Lucas brings comprehensive and excited expertise about storytelling, design, software development, and data analysis packaged into an iterative, integrated approach.</p>
                <p>He typically engages as a fractional product designer, helping startups establish their brand strategy, build their brand identity, craft delightful digital experiences, and then  define, measure, and improve on key success indicators. </p>
                <p>Lucas recently architected global design systems full-time as a senior designer and senior developer at Universal Music Group, powering 3,000+ online stores that drive $100M+ in annual revenue for musicians around the world. </p>
                <p>He co-founded the app to cure loneliness, Spacewalk. And he is a founding member of various startups and ventures. </p>

                  <div className="flex flex-col border-t border-b my-4 py-2 font-bold md:text-[48px] gap-1">
                  <div className="border-b pb-3">Brand identity</div>
                  <div className="border-b pb-3">Websites</div>
                  <div>Apps</div>
                </div>
              </div>

              
            </div>
          </Container>
        </section>

        {/* Selected Projects Section */}
        <section id="projects" className="py-20 md:py-32">
          <Container>
        
            <div className="grid grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  slug={project.slug}
                  tags={project.tags}
                  image={project.image}
                  index={index}
                />
              ))}
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="grid grid-cols-2 border-t my-12 py-4">
              <div>Services</div>
              <div className="flex flex-col gap-4 max-w-[60ch]">
                  <div className="flex flex-col font-bold md:text-[48px] gap-0 -space-y-3">
                  <div>Art direction</div>
                  <div>Brand identity</div>
                  <div>Websites</div>
                  <div>Mobile apps</div>
                </div>
              </div>

              
            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </>
  );
}
