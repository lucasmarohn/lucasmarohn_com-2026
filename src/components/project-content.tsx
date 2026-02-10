"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock, Eye, EyeOff } from "lucide-react";
import { Navigation, Footer, Container, ProjectCard } from "@/components";
import type { ProjectForDetail, ProjectForCard } from "@/lib/sanity-queries";

interface ProjectContentProps {
  project: ProjectForDetail;
  moreProjects: ProjectForCard[];
}

function PasswordGate() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setError(true);
  }

  return (
    <div className="w-full aspect-video relative bg-muted border border-border flex items-center justify-center">
      <div className="w-full max-w-md px-6 max-md:py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5">
            <Lock className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="text-center space-y-1">
            <p className="text-foreground">
              This project is under NDA
            </p>
            <p className="text-muted-foreground">
              Enter the password to view this case study
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full space-y-3">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (submitted) {
                    setError(true);
                  }
                }}
                placeholder="Password"
                className={`w-full h-10 px-3 pr-10 bg-background border rounded-md outline-none transition-colors placeholder:text-muted-foreground ${
                  error
                    ? "border-destructive focus:border-destructive"
                    : "border-input focus:border-foreground"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {error && (
              <p className="text-destructive">
                Incorrect password. Please try again.
              </p>
            )}
            <button
              type="submit"
              className="w-full h-10 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
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

        {project.passwordProtected ? (
          <>
            <section>
              <Container>
                <PasswordGate />
              </Container>
            </section>

            <section className="py-16 md:py-24" />
          </>
        ) : (
          <>
            {project.featuredImage && (
              <section>
                <Container>
                  <div className="w-full aspect-video relative">
                    {project.featuredImage.type === "image" ? (
                      <Image
                        src={project.featuredImage.url}
                        fill
                        alt={project.featuredImage.alt || ""}
                        className="object-cover"
                      />
                    ) : (
                      <video
                        src={project.featuredImage.url}
                        poster={project.featuredImage.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </Container>
              </section>
            )}

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
                    {project.images.map((media, index) => (
                      <motion.div
                        key={index}
                        className="relative aspect-square overflow-hidden bg-muted"
                      >
                        {media.type === "image" ? (
                          <Image
                            src={media.url}
                            alt={media.alt || `${project.title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <video
                            src={media.url}
                            poster={media.poster}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </Container>
              </section>
            )}
          </>
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
