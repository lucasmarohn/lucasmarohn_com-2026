"use client";

import { motion } from "framer-motion";
import { Container } from "./container";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  fullHeight?: boolean;
  className?: string;
  align?: string;
}

export function PageHeader({
  title,
  subtitle,
  fullHeight = false,
  align = 'end',
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "flex items-end pb-12 md:pb-16 pt-24 md:pt-48 min-h-[40vh]",
        className
      )}
    >
      <Container >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-4 gap-4 border-t">
          {align !== 'start' && <div></div>}
          {align !== 'start' && <div className="hidden lg:block"></div>}
          <div className="">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight"
            >
              {title}
            </motion.h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
