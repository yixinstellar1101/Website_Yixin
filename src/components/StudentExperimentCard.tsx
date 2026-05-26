"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Pill } from "@/components/ui/Pill";
import type { StudentExperimentItem } from "@/data/site";

type StudentExperimentCardProps = {
  project: StudentExperimentItem;
  priority?: boolean;
};

export function StudentExperimentCard({
  project,
  priority = false
}: StudentExperimentCardProps) {
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
      whileHover={{ y: -8, scale: 1.01, boxShadow: "0 28px 80px rgba(29,57,128,0.12)" }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[30px] border border-white/80 bg-white/52 shadow-[0_24px_64px_rgba(31,54,124,0.08)] backdrop-blur-2xl transition-colors duration-300 group-hover:bg-white/64 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
      aria-label={`View ${project.title}`}
    >
      <div className="p-4 sm:p-5">
        <div
          className={`relative overflow-hidden rounded-[24px] border border-white/65 bg-gradient-to-br ${project.gradient}`}
        >
          <div className="absolute inset-0 bg-[rgba(247,245,241,0.84)]" />
          <div className="absolute inset-0">
            <Image
              src={project.coverSrc}
              alt={project.title}
              fill
              sizes="(min-width: 1280px) 360px, (min-width: 768px) 33vw, 100vw"
              quality={90}
              priority={priority}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(255,255,255,0))]" />
          <div className="relative aspect-[16/10]" />
        </div>
      </div>

      <div className="flex h-full flex-1 flex-col border-t border-white/70 bg-[rgba(255,255,255,0.72)] p-6 pt-4 sm:p-7 sm:pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.52)]">
              {project.category}
            </p>
            <h3
              className="mt-4 text-[1.95rem] leading-tight tracking-normal text-ink"
              style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}
            >
              {project.title}
            </h3>
          </div>
          <span className="rounded-full border border-[rgba(11,34,66,0.12)] bg-white/68 p-3 text-ink transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:shadow-[0_12px_28px_rgba(24,48,116,0.12)]">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <p className="mt-5 text-base leading-8 text-[rgba(11,34,66,0.72)]">
          {project.description}
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
