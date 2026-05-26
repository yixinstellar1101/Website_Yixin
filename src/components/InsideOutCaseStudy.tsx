"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  Film,
  Menu,
  MessageCircleHeart,
  MoreHorizontal,
  MousePointerClick,
  Share2,
  Shuffle,
  Sparkles,
  Wand2,
  X
} from "lucide-react";
import { useEffect, useState } from "react";

import { ImageGalleryLightbox } from "@/components/ImageGalleryLightbox";
import { ProjectDetailFooterNav } from "@/components/ProjectDetailFooterNav";
import { Button } from "@/components/ui/Button";
import type { ProjectItem } from "@/data/site";

const detailLinks = [
  { href: "/", label: "ABOUT" },
  { href: "/career", label: "CAREER" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/beyond-work", label: "BEYOND WORK" }
];

type InsideOutCaseStudyProps = {
  project: ProjectItem;
};

type InsideOutSlide = {
  id: string;
  src: string;
  alt: string;
};

const insideOutSlides: InsideOutSlide[] = Array.from({ length: 7 }, (_, index) => ({
  id: String(index),
  src: `/projects/InsideOut/InsideOut-images-${index}.webp`,
  alt: `Inside Out H5 case study slide ${index + 1}`
}));

const heroSlide = insideOutSlides[0];
const opportunitySlide = insideOutSlides[1];
const journeySlides = [insideOutSlides[2], insideOutSlides[3]];
const interactionSlides = [insideOutSlides[3], insideOutSlides[4], insideOutSlides[5]];
const resultSlides = [insideOutSlides[4], insideOutSlides[5]];
const impactSlide = insideOutSlides[6];

const heroTags = [
  "UI/UX Design",
  "Interactive H5",
  "Campaign Design",
  "User Engagement",
  "Gamified Experience"
];

const opportunityCards = [
  {
    title: "Shorter Flow",
    body: "Reduced unnecessary steps to lower drop-off and keep users moving toward the result."
  },
  {
    title: "Localized Copy",
    body: "Rewrote questions and result language to feel closer to local users and fandom culture."
  },
  {
    title: "Shareable Result",
    body: "Designed the final card as a social asset instead of a disposable end screen."
  }
];

const journeySteps = [
  "Enter the H5 experience",
  "Answer scenario-based emotion questions",
  "Move through a simplified branching flow",
  "Receive a randomized personality result",
  "Save or share the result card"
];

const interactionDecisions = [
  {
    icon: MousePointerClick,
    title: "Scenario-based Questions",
    body: "Movie scenes and emotion situations made each choice feel quick, intuitive, and immersive."
  },
  {
    icon: Sparkles,
    title: "Keyword-driven Choices",
    body: "Localized emotion keywords helped the interaction feel easier to understand and more relatable."
  },
  {
    icon: Shuffle,
    title: "Randomized Result Cards",
    body: "Mixed main-emotion outcomes with varied copy and visuals to encourage replay and comparison."
  },
  {
    icon: Film,
    title: "Mobile-first Layout",
    body: "Every screen was optimized for vertical reading, social capture, and quick mobile completion."
  }
];

const impactMetrics = [
  { value: "10K+", label: "Likes" },
  { value: "2,490", label: "Shares" },
  { value: "1,383", label: "Comments" },
  { value: "500K+", label: "Video views" }
];

const supportingMetrics = [
  { value: "12.3%", label: "Share conversion rate" },
  { value: "14.7%", label: "Engagement rate" },
  { value: "22.6%", label: "Share-to-like ratio" }
];

const learnings = [
  {
    title: "Campaign products need a fast emotional hook.",
    body: "Users joined more willingly when the interaction quickly connected to a familiar character, scene, or feeling."
  },
  {
    title: "A result page is also a growth surface.",
    body: "For H5 campaigns, the final card needs to support sharing, comparison, and replay instead of just closure."
  },
  {
    title: "Localization drives resonance.",
    body: "Small wording shifts in labels, prompts, and emotional framing meaningfully improved user connection."
  }
];

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
      className={`group relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-[28px] border border-white/80 bg-white/78 text-left shadow-[0_24px_72px_rgba(45,36,117,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(128,110,255,0.46)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${className}`}
      aria-label={`Open ${slide.alt}`}
    >
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        sizes="(min-width: 1024px) 900px, 100vw"
        quality={92}
        className="object-cover transition duration-500 group-hover:scale-[1.01]"
      />
    </button>
  );
}

function SectionHeader({
  label,
  title,
  body,
  maxWidth = "max-w-[760px]"
}: {
  label: string;
  title: string;
  body: string;
  maxWidth?: string;
}) {
  return (
    <div className={maxWidth}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.46)]">{label}</p>
      <h2
        className="mt-4 text-[clamp(2rem,3vw,3.2rem)] leading-[0.98] text-ink"
        style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
      >
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">{body}</p>
    </div>
  );
}

export function InsideOutCaseStudy({ project }: InsideOutCaseStudyProps) {
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
                  href="/projects"
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
                          <Link key={item.href} href={item.href} className={navButtonClass(item.href === "/projects")}>
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
                        {detailLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={navButtonClass(item.href === "/projects") + " rounded-full px-4 py-3 text-left"}
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
          <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">
                UI/UX · INTERACTIVE CAMPAIGN · USER ENGAGEMENT
              </p>
              <h1
                className="mt-4 text-[clamp(2.5rem,5.2vw,4.95rem)] leading-[0.94] text-ink"
                style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
              >
                <span className="block">Inside Out 2 -</span>
                <span className="block">Interactive Emotion H5 Experience</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[rgba(11,34,66,0.78)]">
                Designed an interactive H5 campaign experience for Disney&apos;s Inside Out 2, using immersive scenario questions, localized copywriting, and randomized result cards to increase user engagement and social sharing.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-[rgba(11,34,66,0.12)] bg-white/68 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[rgba(11,34,66,0.7)] backdrop-blur-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-[24px] border border-white/70 bg-white/72 p-5 shadow-[0_18px_44px_rgba(52,40,120,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.46)]">Project Snapshot</p>
                <p className="mt-3 text-base leading-8 text-[rgba(11,34,66,0.74)]">
                  A mobile-first personality test experience turning movie emotions into shareable user stories.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[18px] border border-[rgba(11,34,66,0.08)] bg-[rgba(250,248,255,0.75)] px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.44)]">Overview</p>
                    <p className="mt-2 text-sm leading-7 text-[rgba(11,34,66,0.72)]">
                      Planned the user flow, designed the interaction, and wrote copy focused on immersion, emotional resonance, and shareability.
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-[rgba(11,34,66,0.08)] bg-[rgba(250,248,255,0.75)] px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.44)]">Format</p>
                    <p className="mt-2 text-sm leading-7 text-[rgba(11,34,66,0.72)]">
                      A lightweight mobile campaign loop from entry question to result card and social sharing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <SlideCard slide={heroSlide} slideIndex={Number(heroSlide.id)} onOpen={setActiveSlideIndex} className="self-start" />
            </div>
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
            <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
              <div>
                <SectionHeader
                  label="Opportunity"
                  title="Simplify the flow, localize the copy, and make the result worth sharing."
                  body="Competitive analysis showed that many personality-test H5 experiences had long flows, weak emotional payoff, and generic result pages. The opportunity was to make the experience shorter, more localized, and more visually rewarding, helping users quickly enter the Inside Out world and feel that the final result reflected their own personality."
                  maxWidth="max-w-[620px]"
                />
                <div className="mt-6 grid gap-3">
                  {opportunityCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[20px] border border-white/70 bg-white/72 px-5 py-5 shadow-[0_16px_40px_rgba(52,40,120,0.06)]"
                    >
                      <p className="text-lg font-semibold text-ink">{card.title}</p>
                      <p className="mt-2 text-sm leading-7 text-[rgba(11,34,66,0.7)]">{card.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <SlideCard slide={opportunitySlide} slideIndex={Number(opportunitySlide.id)} onOpen={setActiveSlideIndex} />
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.60)] p-5 shadow-[0_24px_72px_rgba(63,44,153,0.08)] backdrop-blur-2xl sm:p-7"
          >
            <SectionHeader
              label="User Journey"
              title="A tree-style flow that feels like a short story, not a form."
              body="The interaction flow was designed as a tree-style journey: users answered a series of emotion-based scenario questions, and each choice guided them toward a personalized result. Familiar movie scenes and emotion keywords made the path feel intuitive while keeping the experience fast enough for mobile participation."
            />
            <div className="mt-8 grid gap-8 xl:grid-cols-[0.42fr_0.58fr] xl:items-start">
              <div className="rounded-[28px] border border-white/75 bg-white/74 p-5 shadow-[0_18px_48px_rgba(52,40,120,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.46)]">Journey Steps</p>
                <div className="mt-5 space-y-4">
                  {journeySteps.map((step, index) => (
                    <div key={step} className="flex items-start gap-4 rounded-[18px] border border-[rgba(11,34,66,0.08)] bg-[rgba(250,248,255,0.78)] px-4 py-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-sm font-semibold text-ink shadow-[0_8px_22px_rgba(31,45,96,0.12)]">
                        {index + 1}
                      </div>
                      <p className="pt-1 text-sm leading-7 text-[rgba(11,34,66,0.72)]">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-[18px] border border-dashed border-[rgba(11,34,66,0.14)] bg-[rgba(255,255,255,0.56)] px-4 py-4 text-sm leading-7 text-[rgba(11,34,66,0.74)]">
                  The goal was to make the test feel like a small story, not a form.
                </div>
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                {journeySlides.map((slide) => (
                  <SlideCard key={slide.id} slide={slide} slideIndex={Number(slide.id)} onOpen={setActiveSlideIndex} />
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
            <div className="grid gap-8 xl:grid-cols-[0.44fr_0.56fr] xl:items-start">
              <div>
                <SectionHeader
                  label="Interaction Design"
                  title="Use scenes, keywords, and randomness to keep the interaction lively."
                  body="The H5 used movie stills, IP characters, emotional keywords, and lightweight decision points to keep users engaged from question to result. The design work focused on making each choice readable, emotionally loaded, and fast enough for mobile completion."
                  maxWidth="max-w-[620px]"
                />
                <div className="mt-6 grid gap-3">
                  {interactionDecisions.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[20px] border border-white/70 bg-white/72 px-5 py-5 shadow-[0_16px_40px_rgba(52,40,120,0.06)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(242,238,255,0.92)] text-ink shadow-[0_10px_24px_rgba(31,45,96,0.12)]">
                            <Icon size={18} />
                          </div>
                          <p className="text-lg font-semibold text-ink">{item.title}</p>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-[rgba(11,34,66,0.7)]">{item.body}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="grid gap-5">
                <SlideCard
                  slide={interactionSlides[0]}
                  slideIndex={Number(interactionSlides[0].id)}
                  onOpen={setActiveSlideIndex}
                />
                <div className="grid gap-5 md:grid-cols-2">
                  <SlideCard
                    slide={interactionSlides[1]}
                    slideIndex={Number(interactionSlides[1].id)}
                    onOpen={setActiveSlideIndex}
                  />
                  <SlideCard
                    slide={interactionSlides[2]}
                    slideIndex={Number(interactionSlides[2].id)}
                    onOpen={setActiveSlideIndex}
                  />
                </div>
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
            <div className="grid gap-8 xl:grid-cols-[0.4fr_0.6fr] xl:items-center">
              <div>
                <SectionHeader
                  label="Result Display"
                  title="Design the result page like a social object."
                  body="The final result cards combined a character, emotion label, short personality description, supporting keywords, and a QR code to drive continued participation. To increase replay value, the design mixed fixed emotion categories with randomized copy variations so users could test again and compare results with friends."
                  maxWidth="max-w-[590px]"
                />
                <div className="mt-6 rounded-[22px] border border-white/70 bg-white/74 p-5 shadow-[0_18px_48px_rgba(52,40,120,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.46)]">Result Logic</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Main emotion", "Personality label", "Emotional keywords", "Shareable visual card"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex rounded-full border border-[rgba(11,34,66,0.1)] bg-[rgba(248,246,255,0.86)] px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[rgba(11,34,66,0.72)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {resultSlides.map((slide) => (
                  <SlideCard key={slide.id} slide={slide} slideIndex={Number(slide.id)} onOpen={setActiveSlideIndex} />
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
            <div className="grid gap-8 xl:grid-cols-[0.44fr_0.56fr] xl:items-center">
              <div>
                <SectionHeader
                  label="Impact"
                  title="Strong engagement made the campaign travel beyond the first click."
                  body="The campaign generated strong social engagement and organic discussion across video and community platforms. Users shared results, compared emotion labels, and turned the H5 into a lightweight conversation object that kept spreading after the initial test."
                  maxWidth="max-w-[620px]"
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {impactMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[20px] border border-white/70 bg-white/74 px-5 py-5 shadow-[0_16px_40px_rgba(52,40,120,0.06)]"
                    >
                      <p className="text-[2rem] font-semibold leading-none text-ink">{metric.value}</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.48)]">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {supportingMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[18px] border border-[rgba(11,34,66,0.08)] bg-[rgba(250,248,255,0.78)] px-4 py-4 text-center"
                    >
                      <p className="text-lg font-semibold text-ink">{metric.value}</p>
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(11,34,66,0.48)]">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-[18px] border border-dashed border-[rgba(11,34,66,0.14)] bg-[rgba(255,255,255,0.56)] px-4 py-4 text-sm leading-7 text-[rgba(11,34,66,0.74)]">
                  The experience sparked user-generated discussion, with audiences sharing results, comparing emotion labels, and spreading the campaign through organic word of mouth.
                </div>
              </div>
              <SlideCard slide={impactSlide} slideIndex={Number(impactSlide.id)} onOpen={setActiveSlideIndex} />
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.60)] p-5 shadow-[0_24px_72px_rgba(63,44,153,0.08)] backdrop-blur-2xl sm:p-7"
          >
            <div className="grid gap-8 xl:grid-cols-[0.4fr_0.6fr] xl:items-start">
              <div>
                <SectionHeader
                  label="What I Learned"
                  title="Campaign interaction design works best when the ending becomes a new beginning."
                  body="This project clarified that a campaign result page is not the end of the experience. It is where emotional payoff, identity expression, and social spread meet. The more the final card feels personal and easy to repost, the more likely the interaction is to keep traveling through the audience."
                  maxWidth="max-w-[600px]"
                />
                <div className="mt-6 space-y-3">
                  {learnings.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[20px] border border-white/70 bg-white/74 px-5 py-5 shadow-[0_16px_40px_rgba(52,40,120,0.06)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[rgba(242,238,255,0.92)] text-ink shadow-[0_10px_24px_rgba(31,45,96,0.12)]">
                          <MessageCircleHeart size={18} />
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-ink">{item.title}</p>
                          <p className="mt-2 text-sm leading-7 text-[rgba(11,34,66,0.7)]">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-5">
                <SlideCard slide={impactSlide} slideIndex={Number(impactSlide.id)} onOpen={setActiveSlideIndex} />
                <div className="rounded-[24px] border border-white/70 bg-white/74 p-5 shadow-[0_16px_40px_rgba(52,40,120,0.06)]">
                  <div className="flex items-start gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(242,238,255,0.92)] text-ink shadow-[0_10px_24px_rgba(31,45,96,0.12)]">
                      <Wand2 size={18} />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-ink">Why this mattered</p>
                      <p className="mt-2 text-sm leading-7 text-[rgba(11,34,66,0.7)]">
                        Small interaction choices such as copy tone, visual payoff, and result variability can meaningfully change how far a campaign travels.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/70 bg-white/74 p-5 shadow-[0_16px_40px_rgba(52,40,120,0.06)]">
                  <div className="flex items-start gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(242,238,255,0.92)] text-ink shadow-[0_10px_24px_rgba(31,45,96,0.12)]">
                      <Share2 size={18} />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-ink">Growth takeaway</p>
                      <p className="mt-2 text-sm leading-7 text-[rgba(11,34,66,0.7)]">
                        A result page can function as both emotional reward and distribution surface when it is specific enough to compare and easy enough to repost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

      </div>

      <div className="mx-auto max-w-[1280px] px-4 pb-16 sm:px-6 lg:px-8">
        <ProjectDetailFooterNav />
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
