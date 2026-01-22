"use client";

import { motion } from "framer-motion";
import { Navigation, Footer, Container, PageHeader } from "@/components";

// Collaborators data
const collaborators = [
  { name: "John Smith", role: "Strategy" },
  { name: "Sarah Johnson", role: "Development" },
  { name: "Mike Chen", role: "Design" },
  { name: "Emily Davis", role: "Marketing" },
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-base  text-muted-foreground uppercase tracking-wider mb-6">
                  Current Role
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Founder
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lucas Marohn is a self-taught designer and full stack developer
                  from California. His approach to his work is that of a craftsman —
                  endless curiosity, pride in detail, honoring tradition, and
                  nurturing a deep respect for the tools and materials of his trade.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over a decade of experience in digital design and development,
                  he has worked with startups, agencies, and established brands to
                  create memorable digital experiences.
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Background Section */}
        <section className="py-16 md:py-24 border-t border-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-base  text-muted-foreground uppercase tracking-wider mb-6">
                  Background
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Starting as a self-taught designer, Lucas honed his skills through
                  countless projects and constant learning. His journey led him to
                  explore the intersection of design and technology, eventually
                  becoming proficient in full-stack development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, he brings a unique perspective to every project — combining
                  aesthetic sensibility with technical expertise to create solutions
                  that are both beautiful and functional.
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Collaborators Section */}
        <section className="py-16 md:py-24 border-t border-border">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-base  text-muted-foreground uppercase tracking-wider">
                Collaborators
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {collaborators.map((collaborator, index) => (
                <motion.div
                  key={collaborator.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <h3 className="text-base ">{collaborator.name}</h3>
                  <p className="text-base text-muted-foreground">
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
