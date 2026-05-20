"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";

import { Pill } from "@/components/ui/Pill";
import type { Locale, ProjectItem } from "@/data/site";

type ProjectCardProps = {
  locale: Locale;
  project: ProjectItem;
};

export function ProjectCard({ locale, project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="overflow-hidden rounded-[30px] border border-white/70 bg-white/48 shadow-glass backdrop-blur-2xl"
    >
      <div className="p-4 sm:p-5">
        <div
          className={`relative overflow-hidden rounded-[24px] border border-white/65 bg-gradient-to-br ${project.gradient} p-5`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1))]" />
          <div className="relative flex min-h-[260px] flex-col justify-between sm:min-h-[320px]">
            <div className="flex items-start justify-between gap-4">
              <Pill className="bg-white/75">{project.date}</Pill>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                <Play size={14} />
                {project.cta[locale]}
              </span>
            </div>

            <div>
              <p className="max-w-lg text-base font-medium leading-7 tracking-normal text-[rgba(11,34,66,0.72)]">
                {project.mediaLabel[locale]}
              </p>
              <div className="mt-5 h-px w-full bg-[rgba(11,34,66,0.12)]" />
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
            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-ink">
              {project.title[locale]}
            </h3>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border border-[rgba(11,34,66,0.12)] bg-white/60 p-3 text-ink transition hover:bg-white/85"
            aria-label={`View ${project.title.en}`}
          >
            <ArrowUpRight size={18} />
          </Link>
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
  );
}
