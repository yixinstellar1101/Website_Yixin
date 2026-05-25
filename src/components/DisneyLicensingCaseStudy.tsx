"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  Brush,
  ClipboardList,
  Menu,
  MoreHorizontal,
  Package2,
  Palette,
  Search,
  ShoppingBag,
  Sparkles,
  Users2,
  WandSparkles,
  X,
  type LucideIcon
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { ImageGalleryLightbox } from "@/components/ImageGalleryLightbox";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import type { ProjectItem } from "@/data/site";

const detailLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#career", label: "CAREER" },
  { href: "/#projects", label: "PROJECTS" }
];

type DisneyLicensingCaseStudyProps = {
  project: ProjectItem;
};

type Slide = {
  id: string;
  src: string;
  alt: string;
};

type IconCard = {
  title: string;
  body: string;
  icon: LucideIcon;
};

const disneySlides: Slide[] = [
  { id: "05", src: "/projects/DisneyLicensing/disney-page-05.jpg", alt: "Disney market visit sharing" },
  { id: "01", src: "/projects/DisneyLicensing/disney-page-01.jpg", alt: "Disney design POV overview" },
  { id: "02", src: "/projects/DisneyLicensing/disney-page-02.png", alt: "Disney badge design overview" },
  { id: "03", src: "/projects/DisneyLicensing/disney-page-03.png", alt: "Toy Story Fiesta badge overview" },
  { id: "04", src: "/projects/DisneyLicensing/disney-page-04.png", alt: "Pixar badge overview" }
];

const researchSlide = disneySlides[0];
const povSlide = disneySlides[1];
const licensingSlide = disneySlides[2];
const badgeSlides = disneySlides.slice(3, 5);

const heroTags = ["Creative Strategy", "Licensing Design", "Trend Research", "Consumer Products", "Brand Systems"] as const;

const researchPoints = [
  "Tracked emerging retail and lifestyle trends.",
  "Studied color, material, packaging, and display strategies.",
  "Identified trend directions that could connect with Disney IP storytelling."
] as const;

const povPoints = ["Trend references", "Color palettes", "IP assets", "Seasonal themes", "Character expressions", "Product moodboards"] as const;

const licensingPoints = [
  "Badge concepts",
  "Pattern directions",
  "Character poses",
  "Slogan treatments",
  "Graphic composition",
  "Product application references"
] as const;

const badgeFocus = ["Character expression", "Graphic composition", "IP consistency", "Trend relevance", "Merchandise adaptability"] as const;

const applicationAreas = [
  "Apparel",
  "Lifestyle goods",
  "Accessories",
  "Retail merchandise",
  "Offline store displays",
  "Seasonal collections",
  "IP-themed products"
] as const;

const impactCards = [
  { value: "10+", label: "Licensing design packets delivered" },
  { value: "APAC", label: "Cross-region creative and legal collaboration" },
  { value: "Retail", label: "Directions applied to merchandise and store experiences" },
  { value: "100%", label: "Supported on-schedule creative delivery" }
] as const;

const learningCards: IconCard[] = [
  {
    title: "Trend research becomes valuable when it can guide product decisions.",
    body: "A good licensing direction is not only visually appealing — it needs to help product teams understand what to build.",
    icon: Search
  },
  {
    title: "IP design requires both creativity and constraints.",
    body: "Every character pose, phrase, and visual style needs to stay true to the IP while remaining culturally appropriate across regions.",
    icon: Sparkles
  },
  {
    title: "Creative systems scale better than single assets.",
    body: "Badges, patterns, colors, and character rules help vendors produce consistent designs across many product categories.",
    icon: Palette
  }
];

function SlideCard({
  slide,
  slideIndex,
  className = "",
  imageClassName = "",
  onOpen
}: {
  slide: Slide;
  slideIndex: number;
  className?: string;
  imageClassName?: string;
  onOpen: (index: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(slideIndex)}
      className={`group block w-full cursor-zoom-in overflow-hidden rounded-[24px] border border-white/80 bg-white/72 text-left shadow-[0_18px_52px_rgba(24,48,116,0.08)] backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(128,110,255,0.46)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${className}`}
      aria-label={`Open ${slide.alt}`}
    >
      <img
        src={slide.src}
        alt={slide.alt}
        className={`block h-auto w-full object-cover transition duration-500 group-hover:scale-[1.01] ${imageClassName}`}
      />
    </button>
  );
}

function BulletCloud({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Pill key={item} className="bg-white/72">
          {item}
        </Pill>
      ))}
    </div>
  );
}

function Section({
  eyebrow,
  title,
  intro,
  icon: Icon,
  children
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
    >
      <div className="max-w-[1080px]">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/80 bg-white/78 text-ink shadow-[0_10px_28px_rgba(24,48,116,0.08)]">
            <Icon size={17} />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.46)]">{eyebrow}</p>
        </div>
        <h2
          className="mt-4 text-balance text-[clamp(1.82rem,3vw,3.2rem)] leading-[1.02] tracking-[-0.035em] text-ink"
          style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}
        >
          {title}
        </h2>
        {intro ? <p className="mt-4 max-w-[920px] text-base leading-8 text-[rgba(11,34,66,0.72)]">{intro}</p> : null}
      </div>
      <div className="mt-7">{children}</div>
    </motion.section>
  );
}

function LearningCard({ title, body, icon: Icon }: IconCard) {
  return (
    <motion.article
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group rounded-[22px] border border-white/72 bg-white/68 p-5 shadow-[0_14px_42px_rgba(26,49,118,0.06)]"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,248,255,0.88))] text-ink shadow-[0_10px_24px_rgba(26,49,118,0.08)] transition group-hover:scale-105">
          <Icon size={18} />
        </span>
        <h3 className="text-lg leading-tight text-ink" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>
          {title}
        </h3>
      </div>
      <p className="mt-4 text-sm leading-7 text-[rgba(11,34,66,0.72)]">{body}</p>
    </motion.article>
  );
}

export function DisneyLicensingCaseStudy({ project }: DisneyLicensingCaseStudyProps) {
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
    if (!compact) setOpen(false);
  }, [compact]);

  const compactWidth = viewportWidth < 640 ? 212 : 252;
  const navButtonClass = (active = false) =>
    `text-xs font-semibold uppercase tracking-[0.2em] transition ${
      active ? "text-ink" : "text-[rgba(11,34,66,0.58)] hover:text-ink"
    }`;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_16%_18%,rgba(255,216,182,0.28),transparent_24%),radial-gradient(circle_at_84%_14%,rgba(255,199,209,0.2),transparent_22%),linear-gradient(180deg,rgba(255,203,155,0.1),transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38rem] bg-[radial-gradient(circle_at_14%_82%,rgba(255,214,182,0.34),transparent_28%),radial-gradient(circle_at_84%_88%,rgba(255,231,176,0.28),transparent_30%),radial-gradient(circle_at_72%_58%,rgba(255,196,216,0.22),transparent_26%)]" />

      <div className="fixed inset-x-0 top-0 z-30 px-4 pt-3 sm:px-6 lg:px-8">
        <div className="pointer-events-none fixed left-0 top-0 z-[60] h-[3px] w-full bg-[rgba(11,34,66,0.08)]">
          <motion.div className="h-full origin-left bg-ink" animate={{ scaleX: progress }} transition={{ duration: 0.16, ease: "easeOut" }} />
        </div>

        <div className="mx-auto max-w-[1280px]">
          <div className="relative h-[92px]">
            <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 items-center gap-3 sm:gap-4">
              <motion.div initial={false} animate={{ scale: compact ? 0.96 : 1, x: compact ? 10 : 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="shrink-0 pt-3">
                <Link href="/#projects" aria-label={`Back to ${project.title.en} card`} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(11,34,66,0.1)] bg-white/92 text-ink shadow-[0_12px_30px_rgba(25,48,118,0.12),0_2px_8px_rgba(25,48,118,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white">
                  <ArrowLeft size={18} />
                </Link>
              </motion.div>

              <motion.div className="pointer-events-auto relative w-[calc(100vw-112px)] max-w-[1208px] rounded-[30px] border border-white/80 bg-[rgba(251,248,244,0.82)] shadow-glass backdrop-blur-2xl transition-[width,border-radius] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[calc(100vw-144px)] lg:w-[calc(100vw-196px)]" style={{ width: compact ? compactWidth : undefined, borderRadius: compact ? 999 : 30 }}>
                <div className="relative flex h-[72px] items-center overflow-visible px-5">
                  <Link href="/" className="shrink-0 text-[1.72rem] font-semibold tracking-[-0.035em] text-ink transition-opacity hover:opacity-80" style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}>
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
                        <button type="button" onClick={() => setOpen((current) => !current)} className="rounded-full border border-[rgba(11,34,66,0.12)] bg-white/50 p-[11px] text-ink" aria-label="Toggle menu">
                          {open ? <X size={17} /> : <Menu size={17} />}
                        </button>
                      </div>
                    </>
                  ) : (
                    <motion.div className="ml-auto flex shrink-0 items-center" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.18, ease: "easeOut" }}>
                      <button type="button" onClick={() => setOpen((current) => !current)} className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(11,34,66,0.12)] bg-white/78 text-ink transition hover:-translate-y-0.5 hover:bg-white" aria-label="Open navigation">
                        {open ? <X size={16} /> : <MoreHorizontal size={17} />}
                      </button>
                    </motion.div>
                  )}
                </div>

                <AnimatePresence>
                  {open ? (
                    <motion.div initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 360, damping: 28 } }} exit={{ opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.16 } }} className={`absolute right-0 top-[calc(100%+12px)] w-[min(320px,calc(100vw-32px))] rounded-[24px] border border-white/80 bg-[rgba(251,248,244,0.96)] p-3 shadow-[0_28px_60px_rgba(18,31,58,0.16)] backdrop-blur-2xl ${compact ? "" : "lg:hidden"}`}>
                      <div className="grid gap-2">
                        <Link href="/" onClick={() => setOpen(false)} className={navButtonClass(false) + " rounded-full px-4 py-3 text-left"}>HOME</Link>
                        {detailLinks.map((item) => (
                          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={navButtonClass(item.href === "/#projects") + " rounded-full px-4 py-3 text-left"}>
                            {item.label}
                          </Link>
                        ))}
                        <Link href="/#contact" onClick={() => setOpen(false)} className={navButtonClass(false) + " rounded-full px-4 py-3 text-left"}>LET&apos;S TALK</Link>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1480px] px-3 pb-14 pt-32 sm:px-5 sm:pt-36 lg:px-8">
        <motion.section
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[34px] border border-white/75 bg-[rgba(255,255,255,0.62)] p-5 shadow-[0_26px_86px_rgba(27,51,120,0.09)] backdrop-blur-2xl sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">CREATIVE STRATEGY · LICENSING DESIGN · CONSUMER PRODUCTS</p>
              <h1 className="mt-4 text-balance text-[clamp(2.08rem,3.8vw,4.05rem)] leading-[0.95] tracking-[-0.045em] text-ink" style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}>
                Disney Licensing — From Trend Research to Retail Design Direction
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[rgba(11,34,66,0.72)]">Developed design licensing directions for Disney consumer products by translating market trends, IP storytelling, and regional feedback into merchandise-ready creative systems.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <Pill key={tag} className="bg-white/68">{tag}</Pill>
                ))}
              </div>
              <div className="mt-8 rounded-[22px] border border-white/72 bg-white/64 p-5 shadow-[0_14px_42px_rgba(26,49,118,0.06)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.46)]">Project Snapshot</p>
                <p className="mt-3 text-base leading-8 text-[rgba(11,34,66,0.76)]">Turning market signals and Disney IP assets into licensing-ready design directions for retail merchandise.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/80 bg-white/72 shadow-[0_24px_70px_rgba(255,255,255,0.28)]">
              <img src={project.coverSrc} alt={project.title.en} className="block h-auto w-full object-cover" />
            </div>
          </div>
        </motion.section>

        <div className="mt-10 space-y-10">
          <Section eyebrow="Overview" title="From Trend Signals To Merchandise-ready Creative Systems" icon={ClipboardList}>
            <div className="max-w-[980px] space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
              <p>As a Creative Designer Intern at Disney, I worked on design licensing materials for consumer products across IP themes, seasonal campaigns, and regional product needs.</p>
              <p>My work covered market trend research, Design POV development, badge and pattern direction, vendor feedback, and cross-functional review with product, creative, regional, and legal teams across APAC.</p>
            </div>
          </Section>

          <Section eyebrow="Research" title="Reading Consumer Trends Before Defining The Visual Direction" intro="The licensing process started with market research." icon={Search}>
            <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-base leading-8 text-[rgba(11,34,66,0.72)]">I looked at retail displays, seasonal campaigns, product packaging, color palettes, materials, and emerging visual styles across lifestyle, fashion, toys, and consumer goods.</p>
                <p className="text-base leading-8 text-[rgba(11,34,66,0.72)]">These research inputs helped identify which trends could meaningfully connect with Disney and Pixar IP — not just visually, but also through product format, audience fit, and retail context.</p>
                <BulletCloud items={researchPoints} />
              </div>
              <SlideCard slide={researchSlide} slideIndex={0} onOpen={setActiveSlideIndex} />
            </div>
          </Section>

          <Section eyebrow="Design POV" title="From Trend References To A Shared Creative Point Of View" icon={WandSparkles}>
            <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-base leading-8 text-[rgba(11,34,66,0.72)]">After the initial research, each direction was shaped into a Design POV: a visual moodboard that combined market references, Pinterest-style inspiration, Disney or Pixar IP assets, color systems, and potential product expressions.</p>
                <p className="text-base leading-8 text-[rgba(11,34,66,0.72)]">The Design POV helped align the internal team before moving into more detailed licensing components such as badges, patterns, character poses, slogans, and product applications.</p>
                <BulletCloud items={povPoints} />
              </div>
              <SlideCard slide={povSlide} slideIndex={1} onOpen={setActiveSlideIndex} />
            </div>
          </Section>

          <Section eyebrow="Licensing System" title="Building Visual Systems That Product Teams And Vendors Can Use" icon={Palette}>
            <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-base leading-8 text-[rgba(11,34,66,0.72)]">Once a Design POV was aligned, the direction was translated into licensing-ready visual components. These included badge concepts, pattern directions, character compositions, slogan treatments, and graphic systems.</p>
                <p className="text-base leading-8 text-[rgba(11,34,66,0.72)]">The goal was not to create final production artwork myself, but to define the creative direction clearly enough for product teams and vendors to develop high-fidelity merchandise designs consistently.</p>
                <BulletCloud items={licensingPoints} />
              </div>
              <SlideCard slide={licensingSlide} slideIndex={2} onOpen={setActiveSlideIndex} />
            </div>
          </Section>

          <Section eyebrow="Badge & Pattern" title="Turning Character Worlds Into Repeatable Product Graphics" icon={Brush}>
            <div className="space-y-6">
              <div className="max-w-[980px] space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                <p>For badge and pattern directions, I explored how character personality, IP tone, seasonal themes, and market trends could come together in a flexible graphic system.</p>
                <p>The work involved defining the overall visual mood, selecting suitable character moments, shaping composition references, and giving feedback on vendor-developed iterations.</p>
              </div>
              <BulletCloud items={badgeFocus} />
              <div className="grid gap-4 lg:grid-cols-2">
                {badgeSlides.map((slide, index) => (
                  <SlideCard key={slide.id} slide={slide} slideIndex={index + 3} onOpen={setActiveSlideIndex} className="h-full" />
                ))}
              </div>
            </div>
          </Section>

          <Section eyebrow="Collaboration" title="Aligning Creative Direction Across Product, Vendor, Regional, And Legal Teams" icon={Users2}>
            <div className="space-y-6">
              <div className="max-w-[980px] space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                <p>Licensing design required close collaboration across multiple teams. Product teams used the licensing direction to plan merchandise. Vendors translated the direction into production-ready artwork. Regional and legal reviewers helped ensure that character actions, slogans, and visual expressions were inclusive and appropriate across markets.</p>
                <p>This process taught me that IP design is not only about visual creativity — it also requires cultural sensitivity, brand consistency, and operational clarity.</p>
              </div>
              <div className="rounded-[26px] border border-white/76 bg-white/70 p-5 shadow-[0_18px_52px_rgba(24,48,116,0.07)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.48)]">Collaboration Flow</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm leading-7 text-ink">
                  {[
                    "Market research",
                    "Design POV",
                    "Internal creative review",
                    "Licensing assets",
                    "Vendor production",
                    "Regional / legal review",
                    "Product application"
                  ].map((step, index, arr) => (
                    <div key={step} className="contents">
                      <span className="rounded-full border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,248,255,0.9))] px-4 py-2 shadow-[0_10px_24px_rgba(26,49,118,0.08)]">{step}</span>
                      {index < arr.length - 1 ? <span className="text-[rgba(11,34,66,0.34)]">→</span> : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section eyebrow="Product Application" title="From Licensing Direction To Retail Merchandise" icon={ShoppingBag}>
            <div className="space-y-6">
              <div className="max-w-[980px] space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                <p>The licensing materials supported downstream product development across apparel, lifestyle goods, accessories, and retail merchandise.</p>
                <p>Some of the visual directions were applied to offline retail displays and merchandise in regional markets, including Korea, where the design direction appeared in store applications and consumer product touchpoints.</p>
              </div>
              <BulletCloud items={applicationAreas} />
              <div className="rounded-[28px] border border-white/76 bg-[linear-gradient(135deg,rgba(255,248,240,0.9),rgba(255,255,255,0.72))] p-6 shadow-[0_18px_52px_rgba(24,48,116,0.07)]">
                <div className="grid gap-5 md:grid-cols-3">
                  <div className="rounded-[22px] border border-white/80 bg-white/70 p-5">
                    <Package2 className="text-ink" size={20} />
                    <p className="mt-4 text-lg text-ink" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>Merchandise-ready directions</p>
                    <p className="mt-2 text-sm leading-7 text-[rgba(11,34,66,0.72)]">Clear visual systems made it easier for vendors and product teams to move from creative direction into real product surfaces.</p>
                  </div>
                  <div className="rounded-[22px] border border-white/80 bg-white/70 p-5">
                    <ShoppingBag className="text-ink" size={20} />
                    <p className="mt-4 text-lg text-ink" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>Retail-aware storytelling</p>
                    <p className="mt-2 text-sm leading-7 text-[rgba(11,34,66,0.72)]">Each direction considered where the product would appear: apparel, accessories, displays, gifting, and seasonal merchandise.</p>
                  </div>
                  <div className="rounded-[22px] border border-white/80 bg-white/70 p-5">
                    <Sparkles className="text-ink" size={20} />
                    <p className="mt-4 text-lg text-ink" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>IP-consistent expression</p>
                    <p className="mt-2 text-sm leading-7 text-[rgba(11,34,66,0.72)]">The system needed to feel fresh for consumers while staying aligned with Disney and Pixar character worlds.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section eyebrow="Impact" title="Turning Research And IP Storytelling Into Product-facing Outputs" icon={BarChart3}>
            <div className="space-y-6">
              <p className="max-w-[980px] text-base leading-8 text-[rgba(11,34,66,0.72)]">Delivered 10+ licensing design packets that helped translate Disney and Pixar IP into consumer-ready merchandise concepts.</p>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {impactCards.map((metric) => (
                  <article key={metric.label} className="rounded-[22px] border border-white/72 bg-white/68 p-5 text-center shadow-[0_14px_42px_rgba(26,49,118,0.06)]">
                    <p className="text-[clamp(2rem,3vw,3rem)] leading-none tracking-[-0.05em] text-ink" style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}>{metric.value}</p>
                    <p className="mt-3 text-sm leading-7 text-[rgba(11,34,66,0.72)]">{metric.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </Section>

          <Section eyebrow="Learnings" title="What This Project Taught Me About Creative Systems" icon={Sparkles}>
            <div className="grid gap-5 md:grid-cols-3">
              {learningCards.map((card) => (
                <LearningCard key={card.title} {...card} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Reflection" title="Licensing Design As A Bridge Between Research, IP Storytelling, And Retail Execution" icon={Package2}>
            <div className="max-w-[980px] space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
              <p>This project helped me understand how consumer product design moves from market signals to creative direction, and then into real merchandise applications.</p>
              <p>The biggest lesson I took away is that licensing design is a bridge between trend research, IP storytelling, product strategy, and regional execution. A strong design system does not just look good — it gives product and vendor teams a clear direction to build from.</p>
            </div>
          </Section>
        </div>
      </div>

      <ImageGalleryLightbox images={disneySlides.map((slide) => ({ src: slide.src, alt: slide.alt }))} activeIndex={activeSlideIndex} onClose={() => setActiveSlideIndex(null)} onNavigate={setActiveSlideIndex} />
    </main>
  );
}
