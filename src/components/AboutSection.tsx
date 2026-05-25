"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Pill } from "@/components/ui/Pill";
import { pageCopy, type Locale } from "@/data/site";

type AboutSectionProps = {
  locale: Locale;
};

const educationEntries = {
  en: [
    {
      years: "2021 - 2025",
      logoSrc: "/SJTU.png",
      school: "Shanghai Jiao Tong University",
      program: "B.A. Visual Communication Design",
      detail: "Information & Interaction",
      meta: "GPA: 3.9/4.0"
    },
    {
      years: "2023 - 2024",
      logoSrc: "/PolyU_Logo.svg.png",
      school: "The Hong Kong Polytechnic University",
      program: "Exchange, Interactive Media",
      detail: "School of Design",
      meta: ""
    }
  ],
  zh: [
    {
      years: "2021 - 2025",
      logoSrc: "/SJTU.png",
      school: "上海交通大学",
      program: "视觉传达设计学士",
      detail: "信息与交互方向",
      meta: "GPA: 3.9/4.0"
    },
    {
      years: "2023 - 2024",
      logoSrc: "/PolyU_Logo.svg.png",
      school: "香港理工大学",
      program: "交换项目 · 交互媒体",
      detail: "设计学院",
      meta: ""
    }
  ]
} as const;

export function AboutSection({ locale }: AboutSectionProps) {
  const schools = educationEntries[locale];

  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[rgba(11,34,66,0.5)]">
            {pageCopy.about.section[locale]}
          </p>
          <h2
            className="mt-5 text-[clamp(2.7rem,5.4vw,4.55rem)] leading-[1.1] tracking-[-0.028em] text-ink"
            style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}
          >
            {pageCopy.about.title[locale]}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[34px] border border-white/65 bg-white/40 p-8 shadow-glass backdrop-blur-2xl sm:p-10"
          >
            <div className="space-y-8 text-[1.04rem] leading-10 text-[rgba(11,34,66,0.72)] sm:text-[1.08rem]">
              {pageCopy.about.body.map((paragraph) => (
                <p key={paragraph.en}>{paragraph[locale]}</p>
              ))}
            </div>

            <div className="mt-10 rounded-[26px] border border-white/72 bg-[linear-gradient(135deg,rgba(255,255,255,0.84),rgba(247,242,250,0.68))] p-6 shadow-[0_16px_42px_rgba(17,35,82,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">
                {pageCopy.about.focusTitle[locale]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {pageCopy.about.focuses[locale].map((item) => (
                  <Pill key={item} className="bg-white/82">
                    {item}
                  </Pill>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[34px] border border-white/65 bg-[linear-gradient(135deg,rgba(255,255,255,0.76),rgba(245,240,250,0.62))] p-8 shadow-glass backdrop-blur-2xl sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">
              {pageCopy.about.cardTitle[locale]}
            </p>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">
                {pageCopy.about.education[locale]}
              </p>
              <div className="relative mt-5 space-y-8 before:absolute before:bottom-6 before:left-[0.76rem] before:top-8 before:w-px before:bg-[linear-gradient(180deg,rgba(11,34,66,0.18),rgba(11,34,66,0.08))]">
                {schools.map((school, index) => (
                  <div key={school.school} className="relative pl-8">
                    <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(255,255,255,0.88)] shadow-[0_10px_22px_rgba(17,35,82,0.08)]">
                      <div className="h-3.5 w-3.5 rounded-full bg-ink ring-[4px] ring-[rgba(255,255,255,0.9)]" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.58)]">
                      {school.years}
                    </p>
                    <div className="mt-4 flex items-start gap-4 rounded-[24px] border border-white/70 bg-white/62 px-4 py-4 shadow-[0_16px_42px_rgba(17,35,82,0.06)]">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[16px] bg-white ring-1 ring-[rgba(11,34,66,0.08)]">
                        <Image
                          src={school.logoSrc}
                          alt={school.school}
                          width={56}
                          height={56}
                          className="h-11 w-11 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-[1.45rem] font-semibold leading-8 text-ink">
                          {school.school}
                        </h3>
                        <p className="mt-1 text-[1.02rem] font-medium leading-7 text-[rgba(11,34,66,0.78)]">
                          {school.program}
                        </p>
                        <p className="text-[0.98rem] leading-7 text-[rgba(11,34,66,0.72)]">
                          {school.detail}
                        </p>
                        {school.meta ? (
                          <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[rgba(11,34,66,0.52)]">
                            {school.meta}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
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
