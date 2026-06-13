"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

import { careerItems, pageCopy, type Locale } from "@/data/site";

type CareerTimelineProps = {
  locale: Locale;
};

export function CareerTimeline({ locale }: CareerTimelineProps) {
  return (
    <section id="career" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[rgba(11,34,66,0.48)]">
            {pageCopy.career.section[locale]}
          </p>
          <h2 className="mt-6 text-[clamp(3.4rem,7.5vw,5.5rem)] font-semibold italic leading-[0.95] tracking-[0.012em] text-ink" style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}>
            Work Experience
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="h-[4px] w-24 rounded-full bg-[rgba(11,34,66,0.1)]" />
          </div>
        </div>

        <div className="relative mx-auto mt-24 max-w-[1080px]">
          <div className="absolute left-10 top-0 h-full w-[2px] rounded-full bg-[linear-gradient(to_bottom,rgba(11,34,66,0.048),rgba(11,34,66,0.204),rgba(11,34,66,0.048))] lg:left-1/2" />

          <div className="space-y-20 lg:space-y-28">
            {careerItems.map((item, index) => {
              const isRight = index % 2 === 1;
              const linkHost = item.linkHref
                ? item.linkHref.startsWith("http")
                  ? new URL(item.linkHref).hostname.replace(/^www\./, "")
                  : item.linkHref.startsWith("/projects")
                    ? "portfolio case study"
                    : item.linkHref.replace("/", "")
                : null;
              const contentClass = isRight
                ? "lg:col-start-3 lg:text-left"
                : "lg:col-start-1 lg:text-right";
              const cardLogoSrc = item.id === "microsoft" ? "/logos/copilot.png" : item.logoSrc;
              const cardLogoAlt = item.id === "microsoft" ? "Copilot logo" : item.logoAlt;

              return (
                <motion.article
                  key={item.id}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.62, delay: index * 0.04 }}
                  className="relative grid gap-6 pl-28 lg:grid-cols-[1fr_136px_1fr] lg:pl-0"
                >
                  <div className="absolute left-0 top-2 flex h-24 w-24 items-center justify-center rounded-[28px] bg-white shadow-[0_22px_52px_rgba(28,54,124,0.14)] ring-2 ring-white/90 lg:left-1/2 lg:-translate-x-1/2">
                    <div
                      className={`flex h-[86px] w-[86px] items-center justify-center overflow-hidden rounded-[24px] text-sm font-semibold tracking-normal text-ink ${item.logoClass}`}
                    >
                      <Image
                        src={item.logoSrc}
                        alt={item.logoAlt}
                        width={86}
                        height={86}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className={contentClass}>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.5)]">
                      {item.date}
                    </p>
                    <h3 className="mt-4 whitespace-nowrap text-[clamp(1.75rem,5vw,2.35rem)] font-semibold leading-[1.02] tracking-normal text-ink lg:text-[clamp(1.9rem,3vw,2.35rem)]" style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}>
                      {item.role[locale]}
                    </h3>
                    <p className="mt-3 text-xl leading-8 text-[rgba(11,34,66,0.76)]">
                      {item.organization}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(11,34,66,0.46)]">
                      <MapPin size={13} />
                      {item.location[locale]}
                    </p>
                    {item.description ? (
                      <p className="mt-6 text-base leading-8 text-[rgba(11,34,66,0.74)]">
                        {item.description[locale]}
                      </p>
                    ) : null}

                    {item.linkHref && item.linkLabel && item.linkDescription && linkHost ? (
                      <a
                        href={item.linkHref}
                        target={item.linkHref.startsWith("http") ? "_blank" : undefined}
                        rel={item.linkHref.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-8 block rounded-[24px] border border-[rgba(11,34,66,0.12)] bg-[rgba(255,255,255,0.985)] text-left shadow-[0_24px_58px_rgba(24,49,118,0.14)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
                      >
                        <div className="flex items-center justify-between gap-4 border-b border-[rgba(11,34,66,0.08)] px-5 py-4">
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[rgba(11,34,66,0.06)] bg-white shadow-[0_8px_20px_rgba(24,49,118,0.08)]">
                              <Image
                                src={cardLogoSrc}
                                alt={cardLogoAlt}
                                width={24}
                                height={24}
                                className="h-6 w-6 object-contain"
                              />
                            </div>
                            <p className="truncate text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.62)]">
                              {linkHost}
                            </p>
                          </div>
                          <ArrowUpRight size={18} className="shrink-0 text-ink" />
                        </div>

                        <div className="px-5 py-5">
                          <h4
                            className="text-[1.8rem] font-semibold leading-none tracking-[-0.015em] text-ink"
                            style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
                          >
                            {item.linkLabel}
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-[rgba(11,34,66,0.74)]">
                            {item.linkDescription[locale]}
                          </p>
                        </div>
                      </a>
                    ) : null}
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
