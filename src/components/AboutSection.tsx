"use client";

import { motion } from "framer-motion";

import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageCopy, type Locale } from "@/data/site";

type AboutSectionProps = {
  locale: Locale;
};

export function AboutSection({ locale }: AboutSectionProps) {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          locale={locale}
          section={pageCopy.about.section}
          title={pageCopy.about.title}
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[34px] border border-white/65 bg-white/40 p-8 shadow-glass backdrop-blur-2xl sm:p-10"
          >
            <div className="space-y-6 text-lg leading-8 text-[rgba(11,34,66,0.72)]">
              {pageCopy.about.body.map((paragraph) => (
                <p key={paragraph.en}>{paragraph[locale]}</p>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[34px] border border-white/65 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(245,240,250,0.62))] p-8 shadow-glass backdrop-blur-2xl sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">
              {pageCopy.about.cardTitle[locale]}
            </p>
            <div className="mt-6 whitespace-pre-line text-xl font-medium leading-8 text-ink">
              {pageCopy.about.education[locale]}
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">
                {pageCopy.about.focusTitle[locale]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pageCopy.about.focuses[locale].map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">
                {pageCopy.about.strengthsTitle[locale]}
              </p>
              <div className="mt-4 space-y-3">
                {pageCopy.about.strengths[locale].map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/70 bg-white/55 px-4 py-4 text-sm font-medium text-[rgba(11,34,66,0.75)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
