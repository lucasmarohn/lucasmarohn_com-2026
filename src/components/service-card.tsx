"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "p-6 md:p-8 rounded-xl border border-border bg-card",
        className
      )}
    >
      <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-3">
        {title}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
