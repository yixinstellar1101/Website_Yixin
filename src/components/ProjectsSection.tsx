"use client";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/ProjectCard";
import { pageCopy, projects, type Locale } from "@/data/site";

type ProjectsSectionProps = {
  locale: Locale;
};

export function ProjectsSection({ locale }: ProjectsSectionProps) {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[rgba(11,34,66,0.48)]">
            {pageCopy.projects.section[locale]}
          </p>
          <h2
            className="mt-6 text-[clamp(3.1rem,7vw,5rem)] font-semibold leading-[0.96] tracking-[-0.025em] text-ink"
            style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
          >
            {locale === "en" ? "Selected Case Studies" : pageCopy.projects.title[locale]}
          </h2>
        </div>

        <div className="mt-14 grid gap-7 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <ProjectCard locale={locale} project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
