"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageCopy, type Locale } from "@/data/site";

type NotesSectionProps = {
  locale: Locale;
};

export function NotesSection({ locale }: NotesSectionProps) {
  return (
    <section id="content" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          locale={locale}
          section={pageCopy.notes.section}
          title={pageCopy.notes.title}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pageCopy.notes.items.map((item, index) => (
            <motion.div
              key={item.en}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="rounded-[30px] border border-white/65 bg-white/42 p-7 shadow-glass backdrop-blur-2xl"
            >
              <div className="mb-8 h-36 rounded-[22px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,188,154,0.38),transparent_30%),radial-gradient(circle_at_80%_25%,rgba(180,208,255,0.45),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(241,238,251,0.68))]" />
              <h3 className="text-2xl font-semibold tracking-normal text-ink">
                {item[locale]}
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.26em] text-[rgba(11,34,66,0.46)]">
                {pageCopy.notes.comingSoon[locale]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
