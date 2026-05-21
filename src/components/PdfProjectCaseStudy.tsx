"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Menu, MoreHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";

import type { ProjectItem } from "@/data/site";
import { Button } from "@/components/ui/Button";

const detailLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#career", label: "CAREER" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#content", label: "CONTENT" }
];

type PdfProjectCaseStudyProps = {
  project: ProjectItem;
  pdfSrc: string | null;
  videoSrc?: string | null;
};

export function PdfProjectCaseStudy({ project, pdfSrc, videoSrc = null }: PdfProjectCaseStudyProps) {
  const prefersReducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [progress, setProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);

  useEffect(() => {
    const syncViewport = () => setViewportWidth(window.innerWidth);

    syncViewport();
    window.addEventListener("resize", syncViewport);

    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  useEffect(() => {
    if (!open) return;

    const timer = window.setTimeout(() => setOpen(false), 8000);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    const updateScrollState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      setCompact(window.scrollY > 72);
      setProgress(Math.min(1, Math.max(0.04, nextProgress)));
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!compact) {
      setOpen(false);
    }
  }, [compact]);

  const compactWidth = viewportWidth < 640 ? 212 : 252;
  const navButtonClass = (active = false) =>
    `text-xs font-semibold uppercase tracking-[0.2em] transition ${
      active ? "text-ink" : "text-[rgba(11,34,66,0.58)] hover:text-ink"
    }`;

  return (
    <main className="min-h-screen bg-white">
      <div className="fixed inset-x-0 top-0 z-30 px-4 pt-3 sm:px-6 lg:px-8">
        <div className="pointer-events-none fixed left-0 top-0 z-[60] h-[3px] w-full bg-[rgba(11,34,66,0.08)]">
          <motion.div
            className="h-full origin-left bg-ink"
            animate={{ scaleX: progress }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          />
        </div>

        <div className="mx-auto max-w-[1280px]">
          <div className="relative h-[92px]">
            <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 items-center gap-3 sm:gap-4">
              <motion.div
                initial={false}
                animate={{
                  scale: compact ? 0.96 : 1,
                  x: compact ? 10 : 0
                }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 pt-3"
              >
                <Link
                  href="/#projects"
                  aria-label={`Back to ${project.title.en} card`}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(11,34,66,0.1)] bg-white/92 text-ink shadow-[0_12px_30px_rgba(25,48,118,0.12),0_2px_8px_rgba(25,48,118,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <ArrowLeft size={18} />
                </Link>
              </motion.div>

              <motion.div
                className="pointer-events-auto relative w-[calc(100vw-112px)] max-w-[1208px] rounded-[30px] border border-white/80 bg-[rgba(251,248,244,0.82)] shadow-glass backdrop-blur-2xl transition-[width,border-radius] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[calc(100vw-144px)] lg:w-[calc(100vw-196px)]"
                style={{
                  width: compact ? compactWidth : undefined,
                  borderRadius: compact ? 999 : 30
                }}
              >
                <div className="relative flex h-[72px] items-center overflow-visible px-5">
                  <Link
                    href="/"
                    className="shrink-0 text-[1.72rem] font-semibold tracking-[-0.035em] text-ink transition-opacity hover:opacity-80"
                    style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
                  >
                    Yixin Xia
                  </Link>

                  {!compact ? (
                    <>
                      <nav className="mx-5 hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-7">
                        {detailLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={navButtonClass(item.href === "/#projects")}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </nav>

                      <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
                        <Button href="/#contact">LET&apos;S TALK</Button>
                      </div>

                      <div className="ml-auto flex items-center gap-2 lg:hidden">
                        <button
                          type="button"
                          onClick={() => setOpen((current) => !current)}
                          className="rounded-full border border-[rgba(11,34,66,0.12)] bg-white/50 p-[11px] text-ink"
                          aria-label="Toggle menu"
                        >
                          {open ? <X size={17} /> : <Menu size={17} />}
                        </button>
                      </div>
                    </>
                  ) : (
                    <motion.div
                      className="ml-auto flex shrink-0 items-center"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen((current) => !current)}
                        className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(11,34,66,0.12)] bg-white/78 text-ink transition hover:-translate-y-0.5 hover:bg-white"
                        aria-label="Open navigation"
                      >
                        {open ? <X size={16} /> : <MoreHorizontal size={17} />}
                      </button>
                    </motion.div>
                  )}
                </div>

                <AnimatePresence>
                  {open ? (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { type: "spring", stiffness: 360, damping: 28 }
                      }}
                      exit={{ opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.16 } }}
                      className={`absolute right-0 top-[calc(100%+12px)] w-[min(320px,calc(100vw-32px))] rounded-[24px] border border-white/80 bg-[rgba(251,248,244,0.96)] p-3 shadow-[0_28px_60px_rgba(18,31,58,0.16)] backdrop-blur-2xl ${
                        compact ? "" : "lg:hidden"
                      }`}
                    >
                      <div className="grid gap-2">
                        <Link
                          href="/"
                          onClick={() => setOpen(false)}
                          className={navButtonClass(false) + " rounded-full px-4 py-3 text-left"}
                        >
                          HOME
                        </Link>
                        {detailLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={navButtonClass(item.href === "/#projects") + " rounded-full px-4 py-3 text-left"}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          href="/#contact"
                          onClick={() => setOpen(false)}
                          className={navButtonClass(false) + " rounded-full px-4 py-3 text-left"}
                        >
                          LET&apos;S TALK
                        </Link>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.section
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[1560px] px-2 pb-8 pt-32 sm:px-4 sm:pb-10 sm:pt-36 lg:px-6"
      >
        <div className="rounded-[30px] border border-[#e8ecf7] bg-white px-3 py-4 shadow-[0_24px_80px_rgba(29,57,128,0.08)] sm:px-5 sm:py-6 lg:px-6 lg:py-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4 px-1 sm:px-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.45)]">
                {project.category.en}
              </p>
              <h1
                className="mt-3 text-[clamp(2rem,4.6vw,3.8rem)] leading-[0.98] text-ink"
                style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
              >
                {project.title.en}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {videoSrc ? (
                <a
                  href={videoSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[rgba(11,34,66,0.12)] bg-[rgba(248,246,242,0.84)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:bg-white"
                >
                  Open Video
                </a>
              ) : null}
              {pdfSrc ? (
                <a
                  href={pdfSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[rgba(11,34,66,0.12)] bg-[rgba(248,246,242,0.84)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:bg-white"
                >
                  Open PDF
                </a>
              ) : null}
            </div>
          </div>

          {videoSrc ? (
            <div className="mb-6 overflow-hidden rounded-[22px] border border-[rgba(11,34,66,0.08)] bg-[rgba(246,248,252,0.82)] shadow-[0_18px_52px_rgba(23,48,118,0.06)]">
              <video
                src={videoSrc}
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-[#eef2fb] object-contain"
              />
            </div>
          ) : null}

          {pdfSrc ? (
            <div className="overflow-hidden rounded-[22px] border border-[rgba(11,34,66,0.08)] bg-[rgba(246,248,252,0.82)] shadow-[0_18px_52px_rgba(23,48,118,0.06)]">
              <iframe
                src={pdfSrc + "#view=FitH"}
                title={project.title.en + " PDF"}
                className="h-[120vh] w-full bg-white sm:h-[138vh] lg:h-[150vh]"
              />
            </div>
          ) : (
            <div className="rounded-[22px] border border-dashed border-[rgba(11,34,66,0.14)] bg-[rgba(248,246,242,0.74)] px-6 py-16 text-center text-[rgba(11,34,66,0.66)]">
              This case study PDF is not in the project folder yet.
            </div>
          )}
        </div>
      </motion.section>
    </main>
  );
}
