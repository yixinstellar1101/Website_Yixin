"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  Compass,
  FileText,
  Filter,
  LayoutGrid,
  Layers3,
  MapPinned,
  Menu,
  MoreHorizontal,
  Network,
  NotebookPen,
  PanelsTopLeft,
  Route,
  SearchCheck,
  ShipWheel,
  Sparkles,
  Users2,
  Wrench,
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
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#beyond-work", label: "BEYOND WORK" }
];

type ShipbuildingDigitalTwinCaseStudyProps = {
  project: ProjectItem;
  pdfSrc: string | null;
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

const unitySlides: Slide[] = Array.from({ length: 12 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    id: number,
    src: `/projects/Unity_Projects/unity-${number}.jpg`,
    alt: `Shipbuilding digital twin slide ${number}`
  };
});

const heroSlide = unitySlides[0];
const contextSlides = unitySlides.slice(1, 4);
const workflowSlides = unitySlides.slice(4, 7);
const architectureSlides = unitySlides.slice(7, 10);
const systemSlides = unitySlides.slice(10, 12);

const heroTags = ["Enterprise PM", "Digital Twin", "3D Workflow", "PRD", "B2B Product"] as const;

const contextCards: IconCard[] = [
  {
    title: "Scattered Records",
    body: "Data lived across drawings, spreadsheets, and offline documents.",
    icon: FileText
  },
  {
    title: "Manual Cross-checking",
    body: "Teams had to compare 2D drawings, 3D models, and records manually.",
    icon: SearchCheck
  },
  {
    title: "Limited Annotation",
    body: "Traditional tools made precision issue marking and maintenance updates difficult.",
    icon: NotebookPen
  }
];

const userCards: IconCard[] = [
  {
    title: "Management Users",
    body: "Need a high-level view of shipbuilding progress across platforms, docks, and construction areas.",
    icon: Building2
  },
  {
    title: "Operations Users",
    body: "Need to inspect precision issues, update records, and coordinate daily maintenance tasks.",
    icon: Wrench
  },
  {
    title: "Engineering / Technical Users",
    body: "Need to reference ship model structures, locate segments, and connect precision data with spatial context.",
    icon: Layers3
  }
];

const directionCards: IconCard[] = [
  {
    title: "Dockyard Layer",
    body: "Show construction progress across platforms and docks.",
    icon: MapPinned
  },
  {
    title: "Ship Model Layer",
    body: "Make precision information easier to understand in spatial context.",
    icon: ShipWheel
  },
  {
    title: "Data Layer",
    body: "Support inspection records, annotation, updates, and maintenance workflows.",
    icon: FileText
  }
];

const workflowSteps = [
  { label: "Enter through role-based access", icon: Users2 },
  { label: "View dockyard-level progress", icon: MapPinned },
  { label: "Navigate to ship blocks or construction areas", icon: Layers3 },
  { label: "Inspect precision annotations inside the 3D model", icon: SearchCheck },
  { label: "Review linked data records", icon: FileText },
  { label: "Update status or maintenance information", icon: NotebookPen },
  { label: "Return to overview with context preserved", icon: Route }
] as const;

const roleCards: IconCard[] = [
  {
    title: "Product Definition",
    body: "Translated ambiguous client needs into prioritized workflows for progress tracking, ship-block navigation, precision annotation, and data maintenance.",
    icon: Compass
  },
  {
    title: "PRD & Workflow Design",
    body: "Delivered product specs and user flows that clarified how dockyard, ship model, and data views should connect.",
    icon: FileText
  },
  {
    title: "Prototype Design",
    body: "Created high-fidelity screens to make the 3D workflow inspectable, navigable, and usable for client review.",
    icon: PanelsTopLeft
  },
  {
    title: "Component System",
    body: "Built a reusable component library for enterprise screens, including filters, tables, popups, panels, and 3D preview modules.",
    icon: LayoutGrid
  },
  {
    title: "Client Iteration",
    body: "Supported client feedback loops and internal review, helping the PoC move into the development roadmap.",
    icon: Network
  }
];

const decisionCards: IconCard[] = [
  {
    title: "1. Use 3D navigation as the organizing backbone",
    body: "The product flow was anchored around spatial navigation rather than flat tables alone, helping users reason about precision issues inside the ship model.",
    icon: ShipWheel
  },
  {
    title: "2. Preserve orientation across layers",
    body: "The interface provided continuous orientation cues as users moved from dockyard overview to model structure and contextual popups.",
    icon: Compass
  },
  {
    title: "3. Connect data records to spatial objects",
    body: "Instead of separating records from the model, precision and maintenance data were linked to ship blocks, segments, and inspection points.",
    icon: Network
  },
  {
    title: "4. Keep enterprise screens readable",
    body: "Dense tables, filters, and annotation panels were treated as product surfaces, not document pages, so users could inspect data without leaving the workflow.",
    icon: PanelsTopLeft
  },
  {
    title: "5. Design for industrial reuse",
    body: "The PoC was structured to extend beyond shipbuilding into other industrial scenarios that rely on spatial inspection, model-linked records, and precision control.",
    icon: Sparkles
  }
];

const architectureCards: IconCard[] = [
  {
    title: "Dockyard View",
    body: "Users can filter by ship block and date to locate construction progress. The map auto-navigates and highlights relevant areas.",
    icon: MapPinned
  },
  {
    title: "Ship Model View",
    body: "Users can navigate the model through a structure tree and apply filters to narrow the view. Precision markings appear directly on the 3D model, while contextual popups reveal key details.",
    icon: Layers3
  },
  {
    title: "Data View",
    body: "Users can view current construction stages, inspect 3D markup previews, and manage editable maintenance records.",
    icon: FileText
  }
];

const interactionCards: IconCard[] = [
  {
    title: "Global Context",
    body: "Users start from a dockyard-level view to understand where work is happening.",
    icon: MapPinned
  },
  {
    title: "Structure Tree",
    body: "Users navigate ship segments through a hierarchy that mirrors the model structure.",
    icon: Layers3
  },
  {
    title: "Contextual Popups",
    body: "Users inspect details without leaving the current spatial view.",
    icon: PanelsTopLeft
  },
  {
    title: "Filters & Highlights",
    body: "Users narrow the model by ship block, date, or status and see relevant areas highlighted.",
    icon: Filter
  },
  {
    title: "3D Markup Preview",
    body: "Users can inspect precision annotations directly in the model environment.",
    icon: SearchCheck
  }
];

const deliverables = [
  {
    value: "6",
    label: "Product Specs",
    body: "Clarified user flows, feature requirements, and product behavior for the PoC."
  },
  {
    value: "30+",
    label: "High-fidelity Screens",
    body: "Translated industrial workflows into readable desktop product interfaces."
  },
  {
    value: "1",
    label: "Reusable Component Library",
    body: "Standardized enterprise UI patterns for tables, filters, popups, and model-linked controls."
  },
  {
    value: "Client Review",
    label: "Materials",
    body: "Helped communicate the PoC direction across Unity, client, and engineering stakeholders."
  }
] as const;

const impactMetrics = [
  { value: "~40%", label: "Reduced manual cross-checking across 2D drawings and Excel records" },
  { value: "6", label: "Product specs delivered" },
  { value: "30+", label: "High-fidelity prototype screens" },
  { value: "1", label: "Reusable enterprise component system" }
] as const;

const nextStepCards: IconCard[] = [
  {
    title: "Scenario Expansion",
    body: "Adapt the workflow beyond shipbuilding to other industrial environments with complex spatial assets.",
    icon: Sparkles
  },
  {
    title: "Data Traceability",
    body: "Strengthen the connection between model objects, inspection history, and maintenance records.",
    icon: Network
  },
  {
    title: "Precision Control",
    body: "Improve annotation, comparison, and review flows for more complex inspection tasks.",
    icon: CheckCircle2
  },
  {
    title: "Operational Collaboration",
    body: "Support cross-role collaboration between management, operations, and engineering users.",
    icon: Users2
  }
];

const learnings: IconCard[] = [
  {
    title: "Enterprise products need workflow clarity before interface polish.",
    body: "When the domain is complex, the first PM task is to define how users move from problem to action.",
    icon: Route
  },
  {
    title: "3D is not just visualization.",
    body: "In industrial products, 3D becomes valuable when it connects spatial context with operational data and decision-making.",
    icon: ShipWheel
  },
  {
    title: "Dense data needs product surfaces.",
    body: "Tables, filters, annotations, and records need to be designed as part of the workflow, not treated as supporting documents.",
    icon: LayoutGrid
  },
  {
    title: "PoCs need both imagination and implementation logic.",
    body: "A strong prototype should help clients see the future product, while helping engineering understand the path to build it.",
    icon: Sparkles
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

function NarrativeGrid({ slides, onOpen }: { slides: Slide[]; onOpen: (index: number) => void }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {slides.map((slide, index) => {
        const featured = index === 0 || index === slides.length - 1;

        return (
          <SlideCard
            key={slide.id}
            slide={slide}
            slideIndex={Number(slide.id) - 1}
            onOpen={onOpen}
            className={featured ? "md:col-span-2" : ""}
          />
        );
      })}
    </div>
  );
}

function FeaturedThenPairGrid({ slides, onOpen }: { slides: Slide[]; onOpen: (index: number) => void }) {
  if (slides.length !== 3) {
    return <NarrativeGrid slides={slides} onOpen={onOpen} />;
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <SlideCard
        slide={slides[0]}
        slideIndex={Number(slides[0].id) - 1}
        onOpen={onOpen}
        className="lg:col-span-2 lg:aspect-[16/8.7]"
        imageClassName="lg:h-full"
      />
      <SlideCard
        slide={slides[1]}
        slideIndex={Number(slides[1].id) - 1}
        onOpen={onOpen}
        className="lg:aspect-[16/10.4]"
        imageClassName="lg:h-full"
      />
      <SlideCard
        slide={slides[2]}
        slideIndex={Number(slides[2].id) - 1}
        onOpen={onOpen}
        className="lg:aspect-[16/10.4]"
        imageClassName="lg:h-full"
      />
    </div>
  );
}

function PairThenFeaturedGrid({ slides, onOpen }: { slides: Slide[]; onOpen: (index: number) => void }) {
  if (slides.length !== 3) {
    return <NarrativeGrid slides={slides} onOpen={onOpen} />;
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <SlideCard
        slide={slides[0]}
        slideIndex={Number(slides[0].id) - 1}
        onOpen={onOpen}
        className="lg:aspect-[16/10.2]"
        imageClassName="lg:h-full"
      />
      <SlideCard
        slide={slides[1]}
        slideIndex={Number(slides[1].id) - 1}
        onOpen={onOpen}
        className="lg:aspect-[16/10.2]"
        imageClassName="lg:h-full"
      />
      <SlideCard
        slide={slides[2]}
        slideIndex={Number(slides[2].id) - 1}
        onOpen={onOpen}
        className="lg:col-span-2 lg:aspect-[16/8.8]"
        imageClassName="lg:h-full"
      />
    </div>
  );
}

function Section({
  eyebrow,
  title,
  intro,
  icon: Icon,
  children,
  centered = false
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  icon: LucideIcon;
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
    >
      <div className={centered ? "mx-auto max-w-[980px] text-center" : "max-w-[1080px]"}>
        <div className={`flex items-center gap-3 ${centered ? "justify-center" : "justify-start"}`}>
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
        {intro ? <p className={`mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)] ${centered ? "mx-auto max-w-[920px]" : "max-w-[920px]"}`}>{intro}</p> : null}
      </div>
      <div className="mt-7">{children}</div>
    </motion.section>
  );
}

function InfoCard({ title, body, icon: Icon }: IconCard) {
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

export function ShipbuildingDigitalTwinCaseStudy({ project, pdfSrc }: ShipbuildingDigitalTwinCaseStudyProps) {
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_16%_18%,rgba(171,226,220,0.24),transparent_24%),radial-gradient(circle_at_84%_14%,rgba(145,196,255,0.18),transparent_22%),linear-gradient(180deg,rgba(138,214,206,0.10),transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38rem] bg-[radial-gradient(circle_at_14%_82%,rgba(255,202,173,0.32),transparent_28%),radial-gradient(circle_at_84%_88%,rgba(180,204,255,0.34),transparent_30%),radial-gradient(circle_at_72%_58%,rgba(223,201,255,0.22),transparent_26%)]" />

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
        <motion.section initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }} whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="rounded-[34px] border border-white/75 bg-[rgba(255,255,255,0.62)] p-5 shadow-[0_26px_86px_rgba(27,51,120,0.09)] backdrop-blur-2xl sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.26fr)_minmax(0,0.74fr)] lg:items-start xl:grid-cols-[minmax(0,1.32fr)_minmax(0,0.68fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">ENTERPRISE PRODUCT · 3D WORKFLOW · DIGITAL TWIN</p>
              <h1 className="mt-4 text-balance text-[clamp(2.1rem,3.8vw,4.15rem)] leading-[0.95] tracking-[-0.045em] text-ink" style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}>
                Shipbuilding Digital Twin — Precision Management PoC
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[rgba(11,34,66,0.72)]">Defined product workflows and prototypes for a 3D-enabled shipyard precision management system, helping teams track progress, inspect issues, and maintain operational data in one spatial interface.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <Pill key={tag} className="bg-white/68">{tag}</Pill>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[20px] border border-white/70 bg-white/64 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.46)]">Format</p>
                  <p className="mt-2 text-sm font-medium text-ink">Enterprise PoC</p>
                </div>
                <div className="rounded-[20px] border border-white/70 bg-white/64 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.46)]">Focus</p>
                  <p className="mt-2 text-sm font-medium text-ink">3D Workflow + Precision Tracking</p>
                </div>
                <div className="rounded-[20px] border border-white/70 bg-white/64 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.46)]">Impact</p>
                  <p className="mt-2 text-sm font-medium text-ink">~40% Less Manual Cross-checking</p>
                </div>
              </div>
            </div>

            <SlideCard
              slide={heroSlide}
              slideIndex={0}
              onOpen={setActiveSlideIndex}
              className="self-start lg:mt-20 xl:mt-24"
            />
          </div>
        </motion.section>

        <div className="mt-10 space-y-10">
          <Section eyebrow="Overview" title="Transforming Fragmented Shipyard Coordination Into One Spatial Workflow" intro="This project explored how a shipyard precision management process could be transformed from fragmented drawings, spreadsheets, and offline records into one spatial product workflow." icon={ShipWheel}>
            <div className="grid gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-start">
              <div className="space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                <p>The PoC used a 3D-enabled digital twin interface to connect dockyard context, ship model structure, and operational data. Instead of forcing users to cross-check 2D drawings, Excel sheets, and separate model views manually, the product helped teams inspect progress, annotate precision issues, and manage maintenance records in one environment.</p>
                <p>My work focused on translating ambiguous client needs into product workflows, PRDs, high-fidelity prototypes, and a reusable component system for future industrial scenarios.</p>
              </div>
              <div className="lg:pt-8">
                <FeaturedThenPairGrid slides={contextSlides} onOpen={setActiveSlideIndex} />
              </div>
            </div>
          </Section>

          <Section eyebrow="Context" title="Bringing Fragmented Shipyard Coordination Into One Spatial Product Flow" intro="Shipbuilding precision management requires teams to coordinate construction progress, precision inspection, model references, and maintenance records across multiple sources." icon={Layers3}>
            <div className="space-y-6">
              <p className="max-w-[980px] text-base leading-8 text-[rgba(11,34,66,0.72)]">Before the PoC, critical information was scattered across 2D drawings, Excel sheets, offline notes, and separate 3D model views. This made it difficult for teams to understand the full picture, locate issues, and act on operational data efficiently. The product opportunity was to make this fragmented coordination visible inside one operational workflow.</p>
              <div className="grid gap-5 md:grid-cols-3">
                {contextCards.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </Section>

          <Section eyebrow="Client Request" title="A Practical Tool, Not A Visualization Demo" icon={Building2}>
            <div className="grid gap-6 lg:grid-cols-[0.5fr_0.5fr] lg:items-start">
              <div className="rounded-[24px] border border-white/72 bg-white/68 p-6 text-[1.15rem] leading-9 text-ink shadow-[0_14px_42px_rgba(26,49,118,0.06)]">
                “We need a 3D-enabled precision management system that helps teams track shipbuilding progress, inspect precision issues, and maintain operational data in one unified environment.”
              </div>
              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Client", "CSSC SWS"],
                    ["Location", "Shanghai"],
                    ["Duration", "5 months"],
                    ["Year", "2025"]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[20px] border border-white/72 bg-white/66 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.46)]">{label}</p>
                      <p className="mt-2 text-sm font-medium text-ink">{value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-base leading-8 text-[rgba(11,34,66,0.72)]">The client needed a practical tool for operational teams, not just a visualization demo. The system had to connect spatial inspection, progress tracking, and data maintenance into a workflow that could support daily industrial use.</p>
              </div>
            </div>
          </Section>

          <Section eyebrow="Users" title="Different Users, Different Levels Of Detail" intro="The product needed to support different users who interact with shipyard information at different levels of detail." icon={Users2}>
            <div className="space-y-6">
              <div className="grid gap-5 md:grid-cols-3">
                {userCards.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
              <div className="rounded-[24px] border border-white/72 bg-white/68 p-5 text-base leading-8 text-[rgba(11,34,66,0.72)]">The key product challenge was not only visualizing a ship model, but designing a workflow that allowed different users to move between overview, structure, and detail without losing context.</div>
            </div>
          </Section>

          <Section eyebrow="Problem" title="Reducing Manual Cross-checking Across Models, Records, And Drawings" icon={SearchCheck}>
            <div className="space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
              <h3 className="text-[1.95rem] leading-[1.02] tracking-[-0.03em] text-ink" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>
                How might we help shipyard teams understand progress, precision issues, and maintenance data across drawings, models, and records without manual cross-checking?
              </h3>
              <p>The existing workflow created three major friction points: information was scattered, spatial context was hard to maintain, and precision records were difficult to inspect or update directly inside the model environment.</p>
              <p>The product needed to convert disconnected industrial data into a readable, navigable, and editable product surface.</p>
            </div>
          </Section>

          <Section eyebrow="Product Direction" title="Use 3D Navigation As The Backbone Of Precision Management" intro="The product direction was to use 3D navigation as the backbone of precision management." icon={Compass}>
            <div className="space-y-6">
              <p className="max-w-[980px] text-base leading-8 text-[rgba(11,34,66,0.72)]">Instead of treating the 3D model as a static visual layer, the interface used it as the organizing structure for operational data. Users could move from dockyard overview to ship model structure to detailed data records while keeping spatial context.</p>
              <div className="grid gap-5 md:grid-cols-3">
                {directionCards.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </Section>

          <Section eyebrow="MVP Workflow" title="Three Information Layers, One Continuous Workflow" intro="The PoC connected three information layers into one continuous workflow." icon={Route}>
            <div className="space-y-8">
              <div className="overflow-hidden rounded-[26px] border border-white/76 bg-white/70 shadow-[0_18px_52px_rgba(24,48,116,0.07)]">
                <div className="border-b border-[rgba(11,34,66,0.08)] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.48)]">Workflow</div>
                <div className="grid gap-4 p-5 xl:grid-cols-[repeat(7,minmax(0,1fr))] xl:items-center">
                  {workflowSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.label} className="flex items-center gap-3 xl:contents">
                        <motion.div whileHover={{ y: -4 }} className="flex min-h-[140px] flex-1 flex-col justify-between rounded-[22px] border border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,250,255,0.92))] p-4 shadow-[0_12px_30px_rgba(24,48,116,0.06)] xl:min-h-[186px]">
                          <div className="flex items-center justify-between gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-white text-ink shadow-[0_8px_18px_rgba(24,48,116,0.08)]"><Icon size={18} /></span>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.46)]">0{index + 1}</span>
                          </div>
                          <p className="mt-6 text-base leading-6 text-ink" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>{step.label}</p>
                        </motion.div>
                        {index < workflowSteps.length - 1 ? <div className="hidden xl:flex items-center justify-center text-[rgba(11,34,66,0.36)]"><ArrowRight size={18} /></div> : null}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-[24px] border border-dashed border-[rgba(11,34,66,0.16)] bg-white/56 p-5 text-sm leading-7 text-[rgba(11,34,66,0.72)]">Dockyard overview → Ship model navigation → Precision annotation → Data record maintenance</div>
              <PairThenFeaturedGrid slides={workflowSlides} onOpen={setActiveSlideIndex} />
            </div>
          </Section>

          <Section eyebrow="My Role" title="Turning Ambiguous Client Needs Into Product Logic" icon={NotebookPen}>
            <div className="space-y-6">
              <p className="max-w-[980px] text-base leading-8 text-[rgba(11,34,66,0.72)]">I joined the project at an early stage, when the team only had a technical agreement and an initial PoC direction. My role was to translate fragmented client needs into clear product scope, workflows, and interface prototypes.</p>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                {roleCards.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </Section>

          <Section eyebrow="Product Decisions" title="Using Spatial Workflow To Organize Operational Complexity" icon={CheckCircle2}>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {decisionCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Information Architecture" title="Dockyard Context, Ship Model Structure, And Operational Data" icon={Layers3}>
            <div className="space-y-6">
              <p className="max-w-[980px] text-base leading-8 text-[rgba(11,34,66,0.72)]">The interface organized industrial information around three connected layers: dockyard context, ship model structure, and operational data.</p>
              <div className="grid gap-5 md:grid-cols-3">
                {architectureCards.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
              <FeaturedThenPairGrid slides={architectureSlides} onOpen={setActiveSlideIndex} />
            </div>
          </Section>

          <Section eyebrow="Interaction Design" title="Helping Users Move Between Overview And Detail Without Losing Context" icon={Activity}>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {interactionCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Interface System" title="Enterprise Screens As Readable Product Surfaces" intro="Because the workflow involved dense industrial data, the interface needed to make tables, filters, annotations, and 3D previews legible on desktop." icon={LayoutGrid}>
            <div className="space-y-6">
              <p className="max-w-[980px] text-base leading-8 text-[rgba(11,34,66,0.72)]">I designed reusable screen patterns and components to keep the product consistent across views. The component library helped standardize dense enterprise interactions and made the PoC easier to extend across future industrial workflows.</p>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {[
                  "Data tables",
                  "Filters",
                  "Status tags",
                  "Popups",
                  "Side panels",
                  "3D preview cards",
                  "Annotation controls",
                  "Record editing modules"
                ].map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/72 bg-white/68 px-4 py-4 text-sm font-medium text-ink shadow-[0_12px_30px_rgba(24,48,116,0.05)]">{item}</div>
                ))}
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                {systemSlides.map((slide) => (
                  <SlideCard key={slide.id} slide={slide} slideIndex={Number(slide.id) - 1} onOpen={setActiveSlideIndex} />
                ))}
              </div>
            </div>
          </Section>

          <Section eyebrow="Deliverables" title="Specs, Screens, And A Reusable Enterprise System" icon={FileText} centered>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {deliverables.map((item) => (
                <motion.article key={item.label} whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 260, damping: 22 }} className="rounded-[24px] border border-white/78 bg-[rgba(255,255,255,0.72)] p-6 shadow-[0_18px_52px_rgba(24,48,116,0.08)]">
                  <p className="text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.04em] text-ink" style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}>{item.value}</p>
                  <p className="mt-3 text-base leading-7 text-ink">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-[rgba(11,34,66,0.64)]">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </Section>

          <Section eyebrow="Impact" title="A Clearer Product Direction For Precision Management" icon={BarChart3} centered>
            <div className="space-y-6">
              <div className="mx-auto max-w-[980px] rounded-[24px] border border-white/72 bg-white/68 p-6 text-lg leading-8 text-ink shadow-[0_14px_42px_rgba(26,49,118,0.06)]">The PoC clarified how a digital twin product could reduce manual cross-checking, improve traceability, and create a more coherent working model for precision management.</div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {impactMetrics.map((item) => (
                  <motion.article key={item.label} whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 260, damping: 22 }} className="rounded-[24px] border border-white/78 bg-[rgba(255,255,255,0.72)] p-6 shadow-[0_18px_52px_rgba(24,48,116,0.08)]">
                    <p className="text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-[-0.04em] text-ink" style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}>{item.value}</p>
                    <p className="mt-3 text-sm leading-6 text-[rgba(11,34,66,0.68)]">{item.label}</p>
                  </motion.article>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-3 text-sm leading-7 text-[rgba(11,34,66,0.72)]">
                <div className="rounded-[20px] border border-white/72 bg-white/68 p-5">Moved the PoC through Unity internal review and into the development roadmap.</div>
                <div className="rounded-[20px] border border-white/72 bg-white/68 p-5">Created a clearer operational logic for shipyard precision management.</div>
                <div className="rounded-[20px] border border-white/72 bg-white/68 p-5">Helped translate client needs and technical constraints into a more grounded product direction.</div>
              </div>
            </div>
          </Section>

          <Section eyebrow="Next Design Direction" title="From Shipbuilding To Broader Industrial Scenarios" icon={Sparkles}>
            <div className="space-y-6">
              <p className="max-w-[980px] text-base leading-8 text-[rgba(11,34,66,0.72)]">The next step is to adapt this workflow to other industrial scenarios that rely on spatial inspection, model-linked records, and precision control.</p>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {nextStepCards.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </Section>

          <Section eyebrow="What I Learned" title="Product Lessons From An Industrial 3D PoC" icon={Sparkles}>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {learnings.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Reflection" title="Why This Workflow Matters More Than The Model Alone" icon={Compass} centered>
            <div className="mx-auto max-w-[980px] space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
              <p>This project taught me how to turn an ambiguous enterprise request into a structured product workflow.</p>
              <p>The most important PM lesson was that digital twin products are not valuable simply because they visualize 3D models. They become valuable when they connect spatial context, operational records, and user actions into one coherent workflow.</p>
              <p>For me, this project strengthened my ability to define product scope in an unfamiliar industrial domain, translate client needs into product logic, and design interfaces that make complex workflows easier to inspect, navigate, and maintain.</p>
            </div>
          </Section>
        </div>

        {pdfSrc ? (
          <div className="mt-10 text-center">
            <a href={pdfSrc} target="_blank" rel="noreferrer" className="text-sm font-medium text-[rgba(11,34,66,0.62)] underline underline-offset-4 transition hover:text-ink">
              View Full PDF
            </a>
          </div>
        ) : null}
      </div>

      <ImageGalleryLightbox images={unitySlides} activeIndex={activeSlideIndex} onClose={() => setActiveSlideIndex(null)} onNavigate={setActiveSlideIndex} />
    </main>
  );
}
