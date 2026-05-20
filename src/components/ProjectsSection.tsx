"use client";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageCopy, projects, type Locale } from "@/data/site";

type ProjectsSectionProps = {
  locale: Locale;
};

export function ProjectsSection({ locale }: ProjectsSectionProps) {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          locale={locale}
          section={pageCopy.projects.section}
          title={pageCopy.projects.title}
          subtitle={pageCopy.projects.subtitle}
        />
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
