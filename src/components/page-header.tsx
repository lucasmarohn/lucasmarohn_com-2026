"use client";

import { motion } from "framer-motion";
import { Container } from "./container";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  fullHeight?: boolean;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  fullHeight = false,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "flex items-end pb-12 md:pb-16 pt-24 md:pt-28",
        fullHeight ? "min-h-screen" : "min-h-[25vh]",
        className
      )}
    >
      <Container>
        <div className="max-w-3xl">
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base  text-muted-foreground uppercase tracking-wider mb-4"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            {title}
          </motion.h1>
        </div>
      </Container>
    </section>
  );
}
