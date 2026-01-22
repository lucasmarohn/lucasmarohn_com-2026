"use client";

import { motion } from "framer-motion";
import { Navigation, Footer, Container, PageHeader } from "@/components";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/lucasmarohn" },
  { label: "LinkedIn", href: "https://linkedin.com/in/lucasmarohn" },
];

export function ContactContent() {
  return (
    <>
      <Navigation />

      <main>
        <PageHeader title="Get in touch" />

        {/* Contact Info Section */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-base  text-muted-foreground uppercase tracking-wider">
                  Email
                </h2>
                <a
                  href="mailto:lucas@lucasmarohn.com"
                  className="block text-2xl md:text-3xl font-semibold tracking-tight hover:text-accent transition-colors"
                >
                  lucas@lucasmarohn.com
                </a>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-base  text-muted-foreground uppercase tracking-wider">
                  Location
                </h2>
                <p className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Portland, OR
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Social Links Section */}
        <section className="py-16 md:py-24 border-t border-border">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-base  text-muted-foreground uppercase tracking-wider">
                Social
              </h2>
            </motion.div>

            <div className="flex flex-wrap gap-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-xl md:text-2xl  hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 border-t border-border">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
                Interested in working together? I&apos;m always open to discussing new
                projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
