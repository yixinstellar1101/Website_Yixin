"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Menu, MoreHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";

import type { ProjectItem } from "@/data/site";
import { ImageGalleryLightbox } from "@/components/ImageGalleryLightbox";
import { Button } from "@/components/ui/Button";

const detailLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#career", label: "CAREER" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#content", label: "CONTENT" }
];

type InsideOutCaseStudyProps = {
  project: ProjectItem;
  pdfSrc: string | null;
};

type InsideOutSlide = {
  id: string;
  src: string;
  alt: string;
};

const insideOutSlides: InsideOutSlide[] = Array.from({ length: 7 }, (_, index) => ({
  id: String(index),
  src: `/projects/InsideOut/InsideOut-images-${index}.jpg`,
  alt: `Inside Out H5 case study slide ${index}`
}));

const heroSlide = insideOutSlides[0];
const conceptSlides = insideOutSlides.slice(1, 3);
const phoneSlides = insideOutSlides.slice(3, 5);
const resultsSlide = insideOutSlides[5];
const communitySlide = insideOutSlides[6];

function SlideCard({
  slide,
  slideIndex,
  className = "",
  onOpen
}: {
  slide: InsideOutSlide;
  slideIndex: number;
  className?: string;
  onOpen: (index: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(slideIndex)}
      className={`group block w-full cursor-zoom-in overflow-hidden rounded-[26px] border border-white/80 bg-white/76 text-left shadow-[0_20px_64px_rgba(45,36,117,0.10)] backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(128,110,255,0.46)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${className}`}
      aria-label={`Open ${slide.alt}`}
    >
      <img src={slide.src} alt={slide.alt} className="block h-auto w-full object-cover transition duration-500 group-hover:scale-[1.01]" />
    </button>
  );
}

export function InsideOutCaseStudy({ project, pdfSrc }: InsideOutCaseStudyProps) {
  const prefersReducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [progress, setProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);

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
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_16%_18%,rgba(177,132,255,0.24),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(139,102,255,0.22),transparent_22%),linear-gradient(180deg,rgba(106,72,204,0.10),transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[36rem] bg-[radial-gradient(circle_at_14%_82%,rgba(255,202,173,0.30),transparent_28%),radial-gradient(circle_at_84%_88%,rgba(180,204,255,0.32),transparent_30%),radial-gradient(circle_at_72%_58%,rgba(223,201,255,0.22),transparent_26%)]" />

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
                animate={{ scale: compact ? 0.96 : 1, x: compact ? 10 : 0 }}
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
                style={{ width: compact ? compactWidth : undefined, borderRadius: compact ? 999 : 30 }}
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
                          <Link key={item.href} href={item.href} className={navButtonClass(item.href === "/#projects")}>
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
                      animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 360, damping: 28 } }}
                      exit={{ opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.16 } }}
                      className={`absolute right-0 top-[calc(100%+12px)] w-[min(320px,calc(100vw-32px))] rounded-[24px] border border-white/80 bg-[rgba(251,248,244,0.96)] p-3 shadow-[0_28px_60px_rgba(18,31,58,0.16)] backdrop-blur-2xl ${
                        compact ? "" : "lg:hidden"
                      }`}
                    >
                      <div className="grid gap-2">
                        <Link href="/" onClick={() => setOpen(false)} className={navButtonClass(false) + " rounded-full px-4 py-3 text-left"}>
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
                        <Link href="/#contact" onClick={() => setOpen(false)} className={navButtonClass(false) + " rounded-full px-4 py-3 text-left"}>
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

      <div className="mx-auto max-w-[1560px] px-3 pb-14 pt-32 sm:px-5 sm:pt-36 lg:px-8">
        <motion.section
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[34px] border border-white/75 bg-[rgba(255,255,255,0.64)] p-5 shadow-[0_26px_86px_rgba(63,44,153,0.10)] backdrop-blur-2xl sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">
                {project.category.en}
              </p>
              <h1
                className="mt-4 text-[clamp(2.3rem,5vw,4.7rem)] leading-[0.96] text-ink"
                style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
              >
                {project.title.en}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[rgba(11,34,66,0.72)]">
                {project.description.en}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-[rgba(11,34,66,0.12)] bg-white/68 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[rgba(11,34,66,0.7)] backdrop-blur-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[20px] border border-white/70 bg-white/66 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.46)]">Format</p>
                  <p className="mt-2 text-sm font-medium text-ink">Interactive H5</p>
                </div>
                <div className="rounded-[20px] border border-white/70 bg-white/66 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.46)]">Focus</p>
                  <p className="mt-2 text-sm font-medium text-ink">Scenario Flow + Shareability</p>
                </div>
                <div className="rounded-[20px] border border-white/70 bg-white/66 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.46)]">Impact</p>
                  <p className="mt-2 text-sm font-medium text-ink">500K+ Video Views</p>
                </div>
              </div>
            </div>

            <SlideCard slide={heroSlide} slideIndex={Number(heroSlide.id)} onOpen={setActiveSlideIndex} className="self-start" />
          </div>
        </motion.section>

        <div className="mt-10 space-y-10">
          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.60)] p-5 shadow-[0_24px_72px_rgba(63,44,153,0.08)] backdrop-blur-2xl sm:p-7"
          >
            <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.46)]">Campaign Setup</p>
                <h2
                  className="mt-4 text-[clamp(1.9rem,3vw,3rem)] leading-[1.02] text-ink"
                  style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
                >
                  A Clear Entry Surface For The H5 Experience
                </h2>
                <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                  This case study now follows the image order from the project folder, moving from the campaign setup into interaction flow, performance, and community response.
                </p>
                <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                  That sequence keeps the webpage closer to the source material while still turning the exported slides into a more readable product narrative.
                </p>
              </div>
              <div className="grid gap-5">
                {conceptSlides.map((slide) => (
                  <SlideCard
                    key={slide.id}
                    slide={slide}
                    slideIndex={Number(slide.id)}
                    onOpen={setActiveSlideIndex}
                  />
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.60)] p-5 shadow-[0_24px_72px_rgba(63,44,153,0.08)] backdrop-blur-2xl sm:p-7"
          >
            <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.46)]">Performance</p>
                <h2
                  className="mt-4 text-[clamp(1.9rem,3vw,3rem)] leading-[1.02] text-ink"
                  style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
                >
                  Campaign Reach And Distribution Momentum
                </h2>
                <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                  The strongest part of this campaign was not just that users finished the interaction. The H5 created enough curiosity and emotional identification that people reposted results, compared outcomes, and carried the momentum back into video consumption.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="rounded-[18px] border border-white/70 bg-white/72 px-4 py-4 text-sm leading-7 text-[rgba(11,34,66,0.72)]">
                    Scenario-based prompts increased willingness to continue through the whole flow.
                  </div>
                  <div className="rounded-[18px] border border-white/70 bg-white/72 px-4 py-4 text-sm leading-7 text-[rgba(11,34,66,0.72)]">
                    Randomized result copy gave users a reason to replay and share screenshots.
                  </div>
                  <div className="rounded-[18px] border border-white/70 bg-white/72 px-4 py-4 text-sm leading-7 text-[rgba(11,34,66,0.72)]">
                    The campaign helped push related video views past the 500K mark.
                  </div>
                </div>
              </div>
              <SlideCard slide={resultsSlide} slideIndex={Number(resultsSlide.id)} onOpen={setActiveSlideIndex} />
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.60)] p-5 shadow-[0_24px_72px_rgba(63,44,153,0.08)] backdrop-blur-2xl sm:p-7"
          >
            <div className="grid gap-8">
              <div className="max-w-[780px]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.46)]">Phone UI</p>
                <h2
                  className="mt-4 text-[clamp(1.9rem,3vw,3rem)] leading-[1.02] text-ink"
                  style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
                >
                  Phone Screens Presented As Polished Product Moments
                </h2>
                <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                  The exported slides already carry strong mobile compositions, so the webpage treats them as polished showcases. Each image gets enough space to read the UI, the emotional prompts, and the visual rhythm of the interaction.
                </p>
              </div>
              <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
                <SlideCard
                  slide={phoneSlides[0]}
                  slideIndex={Number(phoneSlides[0].id)}
                  onOpen={setActiveSlideIndex}
                  className="h-fit"
                />
                <SlideCard
                  slide={phoneSlides[1]}
                  slideIndex={Number(phoneSlides[1].id)}
                  onOpen={setActiveSlideIndex}
                  className="h-fit"
                />
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.60)] p-5 shadow-[0_24px_72px_rgba(63,44,153,0.08)] backdrop-blur-2xl sm:p-7"
          >
            <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.46)]">Community Response</p>
                <h2
                  className="mt-4 text-[clamp(1.9rem,3vw,3rem)] leading-[1.02] text-ink"
                  style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
                >
                  User Reactions That Extended The Campaign Beyond The First Click
                </h2>
                <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                  The campaign did not stop at the result screen. Comment threads and repost behavior show that users were willing to compare outcomes, quote their emotional labels, and turn the H5 into a lightweight social conversation.
                </p>
                <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                  That kind of reaction is what helped the project travel further: the interaction was simple enough to finish quickly, but specific enough to make people want to share how accurate or surprising their result felt.
                </p>
              </div>
              <div className="grid gap-5">
                <SlideCard slide={communitySlide} slideIndex={Number(communitySlide.id)} onOpen={setActiveSlideIndex} />
              </div>
            </div>
          </motion.section>
        </div>

        <div className="mt-12 text-center">
          {pdfSrc ? (
            <a
              href={pdfSrc}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[rgba(11,34,66,0.62)] underline underline-offset-4 transition hover:text-ink"
            >
              View Full PDF
            </a>
          ) : (
            <span className="text-sm font-medium text-[rgba(11,34,66,0.42)]">View Full PDF</span>
          )}
        </div>
      </div>

      <ImageGalleryLightbox
        images={insideOutSlides}
        activeIndex={activeSlideIndex}
        onClose={() => setActiveSlideIndex(null)}
        onNavigate={setActiveSlideIndex}
      />
    </main>
  );
}
