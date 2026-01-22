"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation, Footer, Container } from "@/components";

export default function NotFound() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen flex items-center">
        <Container>
          <div className="py-20">
            <motion.p
              
              className="text-base  text-muted-foreground uppercase tracking-wider mb-4"
            >
              404 Error
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6"
            >
              Page not found
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-md"
            >
              Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            </motion.p>
            <motion.div
            >
              <Link
                href="/"
                className="inline-flex items-center text-base  hover:text-accent transition-colors"
              >
                <svg
                  className="mr-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                Back to home
              </Link>
            </motion.div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
