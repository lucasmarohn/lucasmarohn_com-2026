"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navigation, Footer, Container, ProjectCard } from "@/components";
import type { ProjectForDetail, ProjectForCard } from "@/lib/sanity-queries";

interface ProjectContentProps {
  project: ProjectForDetail;
  moreProjects: ProjectForCard[];
}

export function ProjectContent({ project, moreProjects }: ProjectContentProps) {
  return (
    <>
      <Navigation />

      <main>
        {/* Project Header */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 min-h-[50vh] flex items-end">
          <Container>
            <div className="grid gap-4 md:grid-cols-2 items-baseline border-t py-4">
              <div className="flex flex-col max-md:-space-y-1 md:flex-row items-baseline">
                <div className="w-full text-foreground">01</div>
                <div className="flex flex-wrap items-end w-full ">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className="text-foreground tracking-normal"
                    >
                      {i === 0 ? tag.trim() : ", " + tag.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-5xl lg:text-7xl font-semibold tracking-tighter">
                {project.title}
              </h1>

            
            </div>
          </Container>
        </section>

        

        {project.featuredImage && <section>
          <Container>
            <div className="w-full aspect-video relative">
              <Image src={project.featuredImage} fill alt="" className="object-cover" />
            </div>
          </Container>
        </section>}

        <section className="pb-12 md:pb-16 mt-16 md:mt-36">
          <Container>
            <div className="border-t pt-4 grid gap-4 md:grid-cols-2">
              <p>Project Information</p>
              <div className="flex flex-col gap-4">
                <p
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
                >
                  {project.description}
                </p>

                {project.liveUrl && <div className="group gap-2 flex items-end underline underline-offset-6 hover:no-underline">
                  <Link href={project.liveUrl} target="_blank">View live project</Link>
                  <div className=""><ArrowUpRight className="text-foreground group-hover:-translate-y-1/6 group-hover:translate-x-1/6 transition-transform duration-300 stroke-[1.5] ease-out" /></div>
                </div>}
              </div>
            </div>
          </Container>
        </section>

        {project.images.length > 0 && (
          <section className="pb-16 md:pb-24">
            <Container>
              <div className="gap-4 grid md:grid-cols-2">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square overflow-hidden bg-muted"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* More Projects */}
        {moreProjects.length > 0 && (
          <section className="py-16 md:py-24">
            <Container>
              <div className="grid md:grid-cols-2 gap-4 border-t pt-4">
                <div>More projects</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {moreProjects.map((project, index) => (
                    <ProjectCard
                      key={project.slug}
                      title={project.title}
                      slug={project.slug}
                      tags={project.tags}
                      thumbnailImage={project.thumbnailImage}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
