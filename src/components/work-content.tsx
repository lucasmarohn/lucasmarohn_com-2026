"use client";

import { Navigation, Footer, Container, PageHeader, ProjectCard } from "@/components";
import type { ProjectForCard } from "@/lib/sanity-queries";

interface WorkContentProps {
  projects: ProjectForCard[];
}

export function WorkContent({ projects }: WorkContentProps) {
  return (
    <>
      <Navigation />

      <main>
        <PageHeader title="Projects" />

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="space-y-0">
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
      </main>

      <Footer />
    </>
  );
}
