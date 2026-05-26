"use client";

import { motion } from "framer-motion";

import { StudentExperimentCard } from "@/components/StudentExperimentCard";
import { pageCopy, studentExperiments, type Locale } from "@/data/site";

type StudentExperimentsSectionProps = {
  locale: Locale;
};

export function StudentExperimentsSection({
  locale
}: StudentExperimentsSectionProps) {
  return (
    <section className="px-4 pb-20 pt-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[rgba(11,34,66,0.48)]">
            {pageCopy.studentExperiments.section[locale]}
          </p>
          <h2
            className="mt-6 text-[clamp(2.5rem,5.8vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.025em] text-ink"
            style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
          >
            {pageCopy.studentExperiments.title[locale]}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[rgba(11,34,66,0.68)] sm:text-lg">
            {pageCopy.studentExperiments.subtitle[locale]}
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {studentExperiments.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="h-full"
            >
              <StudentExperimentCard project={project} priority={index === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
