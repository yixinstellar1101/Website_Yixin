"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { careerItems, pageCopy, type Locale } from "@/data/site";

type CareerTimelineProps = {
  locale: Locale;
};

export function CareerTimeline({ locale }: CareerTimelineProps) {
  return (
    <section id="career" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          locale={locale}
          section={pageCopy.career.section}
          title={pageCopy.career.title}
          subtitle={pageCopy.career.subtitle}
        />

        <div className="relative mx-auto mt-28 max-w-[1080px]">
          <div className="absolute left-10 top-0 h-full w-px bg-[linear-gradient(to_bottom,rgba(11,34,66,0.04),rgba(11,34,66,0.16),rgba(11,34,66,0.04))] md:left-1/2" />

          <div className="space-y-20 md:space-y-28">
            {careerItems.map((item, index) => {
              const isRight = index % 2 === 1;
              const contentClass = isRight
                ? "md:col-start-3 md:text-left"
                : "md:col-start-1 md:text-right";

              return (
                <motion.article
                  key={item.id}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.62, delay: index * 0.04 }}
                  className="relative grid gap-6 pl-28 md:grid-cols-[1fr_136px_1fr] md:pl-0"
                >
                  <div className="absolute left-0 top-3 flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/80 bg-white/74 shadow-float backdrop-blur-xl md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-[20px] text-sm font-semibold tracking-normal text-ink ${item.logoClass}`}
                    >
                      <Image
                        src={item.logoSrc}
                        alt={item.logoAlt}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className={contentClass}>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">
                      {item.date}
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-ink sm:text-4xl">
                      {item.role[locale]}
                    </h3>
                    <p className="mt-3 text-xl leading-8 text-[rgba(11,34,66,0.72)]">
                      {item.organization}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(11,34,66,0.44)]">
                      <MapPin size={13} />
                      {item.location[locale]}
                    </p>
                    <p className="mt-6 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                      {item.description[locale]}
                    </p>

                    <a
                      href={item.linkHref}
                      target={item.linkHref.startsWith("http") ? "_blank" : undefined}
                      rel={item.linkHref.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-8 block rounded-[22px] border border-[rgba(11,34,66,0.1)] bg-white/58 p-5 text-left shadow-float backdrop-blur-xl transition duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.52)]">
                            {item.linkLabel}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-[rgba(11,34,66,0.7)]">
                            {item.linkDescription[locale]}
                          </p>
                        </div>
                        <ArrowUpRight size={18} className="mt-1 shrink-0 text-ink" />
                      </div>
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
