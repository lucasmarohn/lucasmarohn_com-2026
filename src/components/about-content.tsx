"use client";

import { motion } from "framer-motion";
import { Navigation, Footer, Container, PageHeader } from "@/components";
import Image from "next/image";

// Collaborators data
const collaborators = [
  { name: "Nermin Kuckovic", role: "Co-founder", image: "/images/about/nermin.avif" },
  { name: "Don Mupasi", role: "3D Motion Designer", image: "/images/about/don.avif" },
  { name: "Nico Dewet", role: "3D Motion Designer", image: "/images/about/nico.avif" },
  { name: "Kahlil Dumas", role: "Partner, Execnow", image: "/images/about/kahlil.avif" },
];

export function AboutContent() {
  return (
    <>
      <Navigation />

      <main>
        <PageHeader title="Profile" />

        {/* Current Role Section */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="gap-4 border-t pt-4 w-full lg:gap-8 grid md:grid-cols-[1fr_.5fr_50%] lg:grid-cols-[1fr_1fr_1fr]">
              
              <div className="">
                <h2 className="text-lg lg:text-xl text-foreground tracking-normal">
                  Founder
                </h2>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex flex-col">
                  <div>Lucas Marohn</div>
                  <div className="text-muted-foreground/80">Design & Code</div>
                </div>
              </div>

              <div className="w-full aspect-square relative basis-50">
                  <Image src="/images/about/lucas.avif" fill alt="" className="object-cover" />
                </div>
              </div>

          </Container>
        </section>

        <section className="">
          <Container>
            <div className="flex flex-col leading-tight tracking-tighter border-t pt-4 pb-36 lg:text-[40px] font-medium">
              <div>Execnow — Founding Designer, CTO</div>
              <div>Spacewalk — Founding Designer, Partner</div>
              <div>Really Cool Ads — Partner, Co-founder</div>
            </div>
          </Container>
        </section>
        
        {/* Collaborators Section */}
        <section className="py-16 md:py-24 border-t border-border">
          <Container>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {collaborators.map((collaborator, index) => (
                <motion.div
                  key={collaborator.name}
                  className="space-y-0"
                >
                  <div className="mb-2 aspect-square relative w-full bg-neutral-100">
                    <Image src={collaborator.image} alt="" fill  className="object-cover" />
                  </div>
                  <h3 className="text-lg">{collaborator.name}</h3>
                  <p className="text-lg text-muted-foreground">
                    {collaborator.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
