"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Pill } from "@/components/ui/Pill";
import type { Locale, ProjectItem } from "@/data/site";

type ProjectCardProps = {
  locale: Locale;
  project: ProjectItem;
};

export function ProjectCard({ locale, project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
      aria-label={`View ${project.title.en}`}
    >
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="overflow-hidden rounded-[30px] border border-white/70 bg-white/48 shadow-glass backdrop-blur-2xl"
      >
        <div className="p-4 sm:p-5">
        <div
          className={`relative overflow-hidden rounded-[24px] border border-white/65 bg-gradient-to-br ${project.gradient}`}
        >
          <div className="absolute inset-0 bg-[rgba(241,239,235,0.75)]" />
          <div className="absolute inset-0">
            {project.coverType === "video" ? (
              <video
                src={project.coverSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
              />
            ) : (
              <img
                src={project.coverSrc}
                alt={project.title.en}
                className="h-full w-full object-contain"
              />
            )}
          </div>
          <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0))]" />
          <div className="relative aspect-[16/9]">
            <div className="absolute right-4 top-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/82 text-ink shadow-[0_8px_24px_rgba(11,34,66,0.08)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={17} />
              </span>
            </div>
          </div>
        </div>
      </div>


        <div className="p-6 pt-2 sm:p-8 sm:pt-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.52)]">
              {project.category[locale]}
            </p>
            <h3
              className="mt-4 text-3xl leading-tight tracking-normal text-ink"
              style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}
            >
              {project.title[locale]}
            </h3>
          </div>
          <span className="rounded-full border border-[rgba(11,34,66,0.12)] bg-white/60 p-3 text-ink transition group-hover:bg-white/85">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <p className="mt-5 text-base leading-8 text-[rgba(11,34,66,0.72)]">
          {project.description[locale]}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
        </div>
      </motion.article>
    </Link>
  );
}
