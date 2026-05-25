"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import type { Locale, ProjectItem } from "@/data/site";

type ProjectCardProps = {
  locale: Locale;
  project: ProjectItem;
  priority?: boolean;
};

export function ProjectCard({ locale, project, priority = false }: ProjectCardProps) {
  const router = useRouter();

  return (
    <motion.article
      role="link"
      tabIndex={0}
      onClick={() => router.push(`/projects/${project.slug}`)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          router.push(`/projects/${project.slug}`);
        }
      }}
      whileHover={{ y: -10, scale: 1.012, boxShadow: "0 32px 88px rgba(29,57,128,0.14)" }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[30px] border border-white/82 bg-white/56 shadow-[0_26px_72px_rgba(31,54,124,0.09)] backdrop-blur-2xl transition-colors duration-300 group-hover:bg-white/64 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
      aria-label={`View ${project.title.en}`}
    >
        <div className="p-4 sm:p-5">
        <div
          className={`relative overflow-hidden rounded-[24px] border border-white/65 bg-gradient-to-br ${project.gradient}`}
        >
          <div className="absolute inset-0 bg-[rgba(247,245,241,0.84)]" />
          <div className="absolute inset-0">
            <Image
              src={project.coverSrc}
              alt={project.title.en}
              fill
              sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw"
              quality={92}
              priority={priority}
              className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0))]" />
          {project.externalHref ? (
            <div className="absolute bottom-4 left-4 z-10">
              <a
                href={project.externalHref}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-full border border-white/82 bg-[rgba(255,255,255,0.9)] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink shadow-[0_14px_32px_rgba(24,48,116,0.14)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
              >
                {project.externalLabel?.[locale] ?? "Open Live"}
                <ArrowUpRight size={15} />
              </a>
            </div>
          ) : null}
          <div className="relative aspect-[16/9]" />
        </div>
      </div>


        <div className="flex h-full flex-1 flex-col border-t border-white/70 bg-[rgba(255,255,255,0.72)] p-6 pt-4 sm:p-8 sm:pt-5">
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
          <span className="rounded-full border border-[rgba(11,34,66,0.12)] bg-white/68 p-3 text-ink transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:shadow-[0_12px_28px_rgba(24,48,116,0.12)]">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <p className="mt-5 text-base leading-8 text-[rgba(11,34,66,0.72)]">
          {project.description[locale]}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>

        </div>
      </motion.article>
  );
}
