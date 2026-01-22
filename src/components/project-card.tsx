"use client";

import { TransitionLink } from "./transition-link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  slug: string;
  tags: string[];
  thumbnailImage?: string;
  index?: number;
  className?: string;
}

export function ProjectCard({
  title,
  slug,
  tags,
  thumbnailImage,
  index = 0,
  className,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group", className)}
    >
      <TransitionLink href={`/work/${slug}`} className="block">
        <div className="py-4 flex flex-col leading-tight tracking-normal">
          <div>0{index + 1}</div>
          <div className="flex gap-1 items-end">
            <h3>{title}</h3>
            <div className="overflow-hidden"><ArrowUpRight className="-translate-x-full translate-y-full group-hover:translate-0 transition-transform duration-300 stroke-[1.5] ease-out" /></div>
          </div>
          <p className="text-muted-foreground">{tags.map((tag,i) => i === 0 ? tag : ", " + tag)}</p>
        </div>

        {/* Image */}
        {thumbnailImage && (
          <div className="relative aspect-video overflow-hidden bg-muted mb-8 md:mb-10">
            <Image
              src={thumbnailImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}
      </TransitionLink>
    </motion.div>
  );
}
