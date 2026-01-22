"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Navigation, Footer, Container } from "@/components";
import type { ProjectForDetail } from "@/lib/sanity-queries";

interface ProjectContentProps {
  project: ProjectForDetail;
  prev: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
}

export function ProjectContent({ project, prev, next }: ProjectContentProps) {
  return (
    <>
      <Navigation />

      <main>
        {/* Project Header */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16">
          <Container>
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-base  text-muted-foreground uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8"
            >
              {project.title}
            </motion.h1>

            {/* Live URL */}
            {project.liveUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base  hover:text-accent transition-colors"
                >
                  Visit site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            )}
          </Container>
        </section>

        {/* Project Description */}
        <section className="pb-12 md:pb-16">
          <Container>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
            >
              {project.description}
            </motion.p>
          </Container>
        </section>

        {/* Project Images */}
        {project.images.length > 0 && (
          <section className="pb-16 md:pb-24">
            <Container>
              <div className="space-y-8">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Next/Previous Navigation */}
        <section className="py-16 md:py-24 border-t border-border">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Previous Project */}
              {prev ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/work/${prev.slug}`}
                    className="group flex items-center gap-4"
                  >
                    <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <div>
                      <p className="text-base text-muted-foreground mb-1">Previous</p>
                      <p className="text-lg  group-hover:text-accent transition-colors">
                        {prev.title}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ) : (
                <div />
              )}

              {/* Next Project */}
              {next && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="md:text-right"
                >
                  <Link
                    href={`/work/${next.slug}`}
                    className="group inline-flex items-center gap-4 flex-row-reverse md:flex-row"
                  >
                    <div>
                      <p className="text-base text-muted-foreground mb-1">Next</p>
                      <p className="text-lg  group-hover:text-accent transition-colors">
                        {next.title}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </Link>
                </motion.div>
              )}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
