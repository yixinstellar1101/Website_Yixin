"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  Globe2,
  Landmark,
  LayoutPanelTop,
  Menu,
  MoreHorizontal,
  Search,
  Share2,
  Sparkles,
  Upload,
  Users2,
  Wand2,
  X,
  type LucideIcon
} from "lucide-react";
import { useEffect, useState } from "react";

import { ImageGalleryLightbox } from "@/components/ImageGalleryLightbox";
import { ProjectDetailFooterNav } from "@/components/ProjectDetailFooterNav";
import { VideoPreviewCard } from "@/components/VideoPreviewCard";
import { Button } from "@/components/ui/Button";
import type { ProjectItem } from "@/data/site";

const detailLinks = [
  { href: "/", label: "ABOUT" },
  { href: "/career", label: "CAREER" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/beyond-work", label: "BEYOND WORK" }
];

type IconCard = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type MetricCardData = {
  label: string;
  value: string;
  icon: LucideIcon;
};

type StepCard = {
  step: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

const heroTags = [
  "AI MVP",
  "Multi-Agent AI",
  "Cultural Tech",
  "Livestream UX",
  "Human-AI Interaction",
  "0→1 Product Design",
  "Prompt Orchestration",
  "User Validation"
];

const heroMetrics: MetricCardData[] = [
  { label: "Role", value: "OPE Founder / Product Designer", icon: Briefcase },
  { label: "Format", value: "AI Interactive MVP", icon: Bot },
  { label: "Scope", value: "0→1 Product, UX, Prompt, Demo", icon: Wand2 },
  { label: "Validation", value: "100+ User Interactions", icon: Users2 },
  { label: "Focus", value: "Multi-Agent Cultural Engagement", icon: Sparkles }
];

const opportunityCards: IconCard[] = [
  {
    title: "Low Entry Barrier",
    body: "Any object can become the starting point, not only museum-grade artifacts.",
    icon: Upload
  },
  {
    title: "Social Interpretation",
    body: "Multiple AI voices create tension, humor, and perspective instead of one generic answer.",
    icon: Users2
  },
  {
    title: "Live Room Framing",
    body: "The experience borrows from livestream behavior to make cultural discussion feel active and participatory.",
    icon: Activity
  },
  {
    title: "Shareable Moments",
    body: "The product was designed with future sharing loops in mind, including highlight clips, discussion cards, and inviteable rooms.",
    icon: Share2
  }
];

const hypothesisCards: IconCard[] = [
  {
    title: "A personal object as the entry point",
    body: "Users do not need to start from abstract historical knowledge. They start from something they uploaded.",
    icon: Upload
  },
  {
    title: "AI characters with distinct roles",
    body: "The system does not return a single explanation. It creates a cast of interpreters, critics, historians, or playful commentators.",
    icon: Bot
  },
  {
    title: "A livestream-style interaction loop",
    body: "The room creates anticipation, reactions, emotional pacing, and a sense that the discussion is unfolding in real time.",
    icon: Activity
  }
];

const loopSteps: StepCard[] = [
  {
    step: "01",
    title: "Upload",
    body: "The user uploads or captures an object, artwork, or everyday cultural item.",
    icon: Upload
  },
  {
    step: "02",
    title: "Interpret",
    body: "The system identifies the object, extracts cultural angle, and estimates what discussion it can support.",
    icon: Search
  },
  {
    step: "03",
    title: "Frame",
    body: "The object is placed into an exhibition context instead of being left as a raw upload.",
    icon: LayoutPanelTop
  },
  {
    step: "04",
    title: "Generate Gallery",
    body: "Metadata, title, atmosphere, and visual framing turn the upload into a display-worthy exhibit.",
    icon: Sparkles
  },
  {
    step: "05",
    title: "Cast & Discuss",
    body: "AI guests are assigned roles and begin reacting, debating, and guiding the interpretation.",
    icon: Bot
  },
  {
    step: "06",
    title: "Save / Share",
    body: "Rooms can later evolve into saved sessions, highlights, invites, and recurring discovery loops.",
    icon: Share2
  }
];

const orchestrationCards: IconCard[] = [
  {
    title: "Object Understanding",
    body: "Classify the uploaded item and decide whether it should be treated as an artifact, artwork, product, personal object, or ambiguous cultural object.",
    icon: Search
  },
  {
    title: "Scene Framing",
    body: "Generate or select an appropriate visual setting, such as a museum wall, display platform, modern room, or themed exhibition background.",
    icon: LayoutPanelTop
  },
  {
    title: "Character Casting",
    body: "Assign AI guests based on the object's cultural context, historical relevance, aesthetic style, and debate potential.",
    icon: Users2
  },
  {
    title: "Conversation Rules",
    body: "Define how characters open the room, challenge each other, use humor, and keep the interpretation accessible.",
    icon: Bot
  },
  {
    title: "Livestream Behavior",
    body: "Use room-entry moments, emoji reactions, lightweight motion, and guest-arrival framing to make the interaction feel alive.",
    icon: Activity
  },
  {
    title: "Continuity",
    body: "Support saved rooms, resumable conversations, and return moments such as \"you're back, we were just discussing this.\"",
    icon: Share2
  }
];

const experienceCards: IconCard[] = [
  {
    title: "Chatbot Was Too Static",
    body: "The product moved away from plain chatbot answers toward a staged, social format that feels easier to follow and more memorable.",
    icon: Bot
  },
  {
    title: "AI LiveRoom Interface",
    body: "The room combines object framing, speaker identity, reactions, and conversational pacing into something closer to a live show than a single reply.",
    icon: Activity
  },
  {
    title: "Character Profile Cards",
    body: "Each AI guest has a short, legible identity so unfamiliar cultural references become approachable instead of intimidating.",
    icon: Users2
  },
  {
    title: "Extended Social Play",
    body: "Tickets, reactions, and future friend participation create a format that can expand beyond solo discovery into repeatable social engagement.",
    icon: Share2
  }
];

const validationMetrics: IconCard[] = [
  {
    title: "0→1 Solo Build",
    body: "Independently drove the project from concept framing to prototype and MVP demo.",
    icon: Briefcase
  },
  {
    title: "100+ Interactions",
    body: "Collected early activation signals through live event exposure and community testing.",
    icon: Users2
  },
  {
    title: "2 Partnerships",
    body: "Explored pilot directions with cultural partners including Suzhou Museum and Nanjing Science & Technology Museum.",
    icon: Landmark
  },
  {
    title: "Microsoft OPE Event Demo",
    body: "Used the event as a real-world validation moment to test comprehension, resonance, and curiosity.",
    icon: Activity
  }
];

const responsibilityCards: IconCard[] = [
  {
    title: "Product Strategy",
    body: "Defined the opportunity, target behavior, MVP scope, and the broader product direction.",
    icon: Briefcase
  },
  {
    title: "UX & Visual Design",
    body: "Designed the mobile flow, exhibit framing, live room, and presentation logic.",
    icon: LayoutPanelTop
  },
  {
    title: "AI Prompt Design",
    body: "Shaped object interpretation, character role assignment, and multi-agent conversation logic.",
    icon: Bot
  },
  {
    title: "Prototype Development",
    body: "Used Figma MCP, VS Code, and AI coding workflows to move from concept to interactive MVP.",
    icon: Wand2
  },
  {
    title: "Testing & Demo Prep",
    body: "Prepared the prototype for live demo, event validation, and feedback collection.",
    icon: Activity
  },
  {
    title: "Storytelling",
    body: "Built the case study, presentation flow, and product narrative that made the opportunity legible.",
    icon: Sparkles
  }
];

const communityCards: IconCard[] = [
  {
    title: "Feedback As Product Input",
    body: "Early user reactions helped clarify where the format felt novel, where instructions needed to be clearer, and what made people want to keep exploring.",
    icon: Users2
  },
  {
    title: "Community Iteration",
    body: "The strongest feedback pointed toward stronger retention loops, clearer role explanations, and more shareable room outputs.",
    icon: Share2
  }
];

const learningCards: IconCard[] = [
  {
    title: "AI Needs Product Direction",
    body: "The system must know not only what to answer, but how to stage the experience.",
    icon: Bot
  },
  {
    title: "Storytelling Beats Static Content",
    body: "Immersive cultural framing made the experience feel more approachable than traditional one-way explanation.",
    icon: Sparkles
  },
  {
    title: "Everyday Uploads Can Become Shareable Moments",
    body: "The product worked best when ordinary objects turned into surprising live debates that felt worth showing other people.",
    icon: Share2
  },
  {
    title: "Future Value Is In Loops",
    body: "The next stage likely depends on community sharing, recurring characters, and richer social distribution.",
    icon: Globe2
  }
];

const futureCards: IconCard[] = [
  {
    title: "B2B Cultural Tourism",
    body: "Partner with museums and cultural destinations to create interactive AI interpretation formats for visitors.",
    icon: Landmark
  },
  {
    title: "Institution Authoring Tools",
    body: "Let museums and cultural teams configure characters, artifact metadata, tone, and discussion goals.",
    icon: Building2
  },
  {
    title: "Consumer Social Expansion",
    body: "Extend the format beyond institutions into shareable, everyday consumer cultural discovery.",
    icon: Globe2
  },
  {
    title: "Shareable Highlights",
    body: "Generate room summaries, quote cards, and short clips that can circulate on social platforms.",
    icon: Share2
  },
  {
    title: "Multi-User Rooms",
    body: "Let friends join the same artifact discussion and interact with AI guests together.",
    icon: Users2
  },
  {
    title: "Persistent AI Characters",
    body: "Allow users to revisit favorite historians, critics, artists, or fictional guides across rooms.",
    icon: Bot
  },
  {
    title: "Community Gallery",
    body: "Showcase interesting uploaded objects and public rooms to create discovery loops.",
    icon: Sparkles
  },
  {
    title: "Evaluation & Safety",
    body: "Add moderation, factual grounding, and cultural sensitivity controls as the system scales.",
    icon: Activity
  }
];

type CurioSlide = {
  id: string;
  src: string;
  alt: string;
};

type CurioCaseStudyProps = {
  project: ProjectItem;
  videoSrc: string | null;
};

const curioSlides: CurioSlide[] = Array.from({ length: 26 }, (_, index) => {
  const number = index + 1;
  const formatted = String(number).padStart(2, "0");

  return {
    id: formatted,
    src: `/projects/CURIO/Curio%20-%20${formatted}.webp`,
    alt: `Curio slide ${formatted}`
  };
});

const getSlide = (number: number) => curioSlides[number - 1];
const getSlides = (numbers: number[]) => numbers.map((number) => getSlide(number));

const heroSlide = getSlide(2);
const overviewSlides = getSlides([2, 3, 4, 5, 6]);
const opportunitySlides = getSlides([7, 8, 9]);
const hypothesisSlides = getSlides([10]);
const loopSlides = getSlides([11, 12, 13, 14]);
const liveRoomSlides = getSlides([15, 16, 17]);
const validationSlides = getSlides([18, 19]);
const ownershipSlides = getSlides([20, 21]);
const communitySlides = getSlides([22, 23]);
const learningSlides = getSlides([24]);
const futureSlides = getSlides([25, 26]);

function SlideCard({
  slide,
  slideIndex,
  className = "",
  onOpen
}: {
  slide: CurioSlide;
  slideIndex: number;
  className?: string;
  onOpen: (index: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(slideIndex)}
      className={`group relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-[24px] border border-white/80 bg-white/72 text-left shadow-[0_18px_52px_rgba(24,48,116,0.08)] backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(128,110,255,0.46)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${className}`}
      aria-label={`Open ${slide.alt}`}
    >
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        sizes="(min-width: 1024px) 900px, 100vw"
        quality={93}
        className="object-cover transition duration-500 group-hover:scale-[1.01]"
      />
    </button>
  );
}

function SectionHeading({ label, title, body, quote }: { label: string; title: string; body: string; quote?: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.46)]">{label}</p>
      <h2
        className="mt-4 max-w-none text-[clamp(1.9rem,3vw,3rem)] leading-[1.02] text-ink md:text-pretty"
        style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}
      >
        {title}
      </h2>
      <p className="mt-4 max-w-[780px] text-base leading-8 text-[rgba(11,34,66,0.72)]">{body}</p>
      {quote ? (
        <p className="mt-5 max-w-[780px] text-lg leading-8 text-ink/80" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>
          {quote}
        </p>
      ) : null}
    </div>
  );
}

function InfoCard({ title, body, icon: Icon }: IconCard) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-[24px] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,250,255,0.92))] p-5 shadow-[0_18px_44px_rgba(24,48,116,0.06)]"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-white text-ink shadow-[0_8px_18px_rgba(24,48,116,0.08)]">
          <Icon size={18} />
        </span>
      </div>
      <h3
        className="mt-4 text-[1.08rem] leading-6 text-ink"
        style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}
      >
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[rgba(11,34,66,0.72)]">{body}</p>
    </motion.article>
  );
}

function MetricPanel({ label, value, icon: Icon }: MetricCardData) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex min-h-[128px] flex-col items-center justify-center rounded-[22px] border border-white/74 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,250,255,0.92))] p-5 text-center shadow-[0_16px_38px_rgba(24,48,116,0.06)]"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-white text-ink shadow-[0_8px_18px_rgba(24,48,116,0.08)]">
        <Icon size={18} />
      </span>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.46)]">{label}</p>
      <p
        className="mt-4 max-w-[18ch] text-center text-[1rem] leading-7 text-ink"
        style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}
      >
        {value}
      </p>
    </motion.div>
  );
}

function FlowSteps({ steps }: { steps: StepCard[] }) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-white/76 bg-white/70 shadow-[0_18px_52px_rgba(24,48,116,0.07)]">
      <div className="border-b border-[rgba(11,34,66,0.08)] px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.48)]">
        Product Loop
      </div>
      <div className="space-y-3 p-5">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.step}>
              <motion.div
                whileHover={{ y: -3 }}
                className="flex flex-col gap-4 rounded-[22px] border border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,250,255,0.92))] p-5 shadow-[0_12px_30px_rgba(24,48,116,0.06)] md:flex-row md:items-center"
              >
                <div className="flex items-center gap-3 md:min-w-[230px] md:pr-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/80 bg-white text-ink shadow-[0_8px_18px_rgba(24,48,116,0.08)]">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.46)]">{step.step}</p>
                    <p className="mt-1 text-[1.06rem] leading-6 text-ink" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>
                      {step.title}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-[rgba(11,34,66,0.72)] md:flex-1 md:self-center">{step.body}</p>
              </motion.div>
              {index < steps.length - 1 ? (
                <div className="flex justify-center py-2 text-[rgba(11,34,66,0.28)]">
                  <ArrowRight size={16} className="rotate-90" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function VisualGrid({
  slides,
  onOpen,
  columns = "md:grid-cols-2",
  featured = []
}: {
  slides: CurioSlide[];
  onOpen: (index: number) => void;
  columns?: string;
  featured?: number[];
}) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {slides.map((slide, index) => (
        <SlideCard
          key={slide.id}
          slide={slide}
          slideIndex={Number(slide.id) - 1}
          onOpen={onOpen}
          className={featured.includes(index) ? "md:col-span-2" : ""}
        />
      ))}
    </div>
  );
}

function OverviewVisuals({ slides, onOpen }: { slides: CurioSlide[]; onOpen: (index: number) => void }) {
  const [first, ...rest] = slides;

  return (
    <div className="space-y-4">
      <SlideCard slide={first} slideIndex={Number(first.id) - 1} onOpen={onOpen} />
      <div className="grid gap-4 md:grid-cols-2">
        {rest.map((slide) => (
          <SlideCard key={slide.id} slide={slide} slideIndex={Number(slide.id) - 1} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

function EqualHeightStack({ slides, onOpen }: { slides: CurioSlide[]; onOpen: (index: number) => void }) {
  return (
    <div className="grid gap-4">
      {slides.map((slide) => (
        <button
          key={slide.id}
          type="button"
          onClick={() => onOpen(Number(slide.id) - 1)}
          className="group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-[24px] border border-white/80 bg-white/72 text-left shadow-[0_18px_52px_rgba(24,48,116,0.08)] backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(128,110,255,0.46)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
          aria-label={`Open ${slide.alt}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            quality={93}
            className="object-cover transition duration-500 group-hover:scale-[1.01]"
          />
        </button>
      ))}
    </div>
  );
}

export function CurioCaseStudy({ project, videoSrc }: CurioCaseStudyProps) {
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_10%_18%,rgba(255,214,189,0.38),transparent_26%),radial-gradient(circle_at_88%_12%,rgba(184,214,255,0.34),transparent_30%),radial-gradient(circle_at_60%_56%,rgba(224,206,255,0.24),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42rem] bg-[radial-gradient(circle_at_14%_82%,rgba(255,202,173,0.34),transparent_28%),radial-gradient(circle_at_84%_88%,rgba(180,204,255,0.36),transparent_30%),radial-gradient(circle_at_72%_58%,rgba(223,201,255,0.24),transparent_26%)]" />
      <div className="fixed inset-x-0 top-0 z-30 px-4 pt-3 sm:px-6 lg:px-8">
        <div className="pointer-events-none fixed left-0 top-0 z-[60] h-[3px] w-full bg-[rgba(11,34,66,0.08)]">
          <motion.div className="h-full origin-left bg-ink" animate={{ scaleX: progress }} transition={{ duration: 0.16, ease: "easeOut" }} />
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
                      className={`absolute right-0 top-[calc(100%+12px)] w-[min(320px,calc(100vw-32px))] rounded-[24px] border border-white/80 bg-[rgba(251,248,244,0.96)] p-3 shadow-[0_28px_60px_rgba(18,31,58,0.16)] backdrop-blur-2xl ${compact ? "" : "lg:hidden"}`}
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

      <div className="mx-auto max-w-[1480px] px-3 pb-14 pt-32 sm:px-5 sm:pt-36 lg:px-8">
        <motion.section
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[34px] border border-white/75 bg-[rgba(255,255,255,0.62)] p-5 shadow-[0_26px_86px_rgba(27,51,120,0.09)] backdrop-blur-2xl sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
            <div className="max-w-[760px]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">AI MVP · CULTURAL TECH · OPE</p>
              <h1
                className="mt-4 text-[clamp(2.2rem,3.55vw,4.25rem)] leading-[0.93] tracking-[-0.045em] text-ink xl:whitespace-nowrap"
                style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
              >
                Curio - Multi-Agent Cultural Livestream
              </h1>
              <p className="mt-5 max-w-2xl text-xl leading-8 text-ink/86">
                An AI-native cultural experience that turns everyday objects and artifacts into live, multi-agent conversations.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(11,34,66,0.72)]">
                Curio was my Microsoft OPE project, built under the One Person Entrepreneur model. I independently framed, designed, prototyped, and shipped an interactive MVP that lets users upload an object, place it into a virtual exhibition scene, and watch AI characters debate, explain, and react to it in a livestream-style room.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[rgba(11,34,66,0.72)]">
                The project explored a core product question: <strong>can cultural learning feel less like static content consumption and more like a social, playful, and participatory live experience?</strong>
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
              {project.externalHref ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={project.externalHref} external>
                    {project.externalLabel?.en ?? "Try Curio Demo"}
                  </Button>
                </div>
              ) : null}
            </div>

            <div className="mt-24 lg:mt-28 lg:self-end xl:mt-32">
              {videoSrc ? (
                <VideoPreviewCard
                  title="Curio Demo Walkthrough"
                  description="Watch the lightweight external demo instead of loading the original local MP4 directly on the page."
                  href={videoSrc}
                  thumbnailSrc={project.coverSrc}
                  thumbnailAlt="Curio demo preview thumbnail"
                  embedSrc="https://www.youtube-nocookie.com/embed/FVQatjoiDss?rel=0"
                />
              ) : (
                <SlideCard slide={heroSlide} slideIndex={Number(heroSlide.id) - 1} onOpen={setActiveSlideIndex} className="rounded-none border-0 shadow-none" />
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {heroMetrics.map((metric) => (
              <MetricPanel key={metric.label} {...metric} />
            ))}
          </div>
        </motion.section>

        <div className="mt-10 space-y-10">
          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
          >
            <SectionHeading
              label="OVERVIEW"
              title="Turning Cultural Artifacts Into Live AI Discussions"
              body={'Curio started from a simple observation: museums and cultural content often rely on one-way explanation, while younger users are more engaged by formats that feel conversational, social, and alive. Instead of asking users to read a static artifact description, Curio lets them upload any object - a painting, souvenir, everyday item, or cultural artifact - and transforms it into the center of a live AI discussion. Multiple AI characters take on different interpretive roles, react to the object, debate its meaning, and invite the user to join the conversation. The product reframes cultural interpretation from "read an explanation" to "enter a live room where culture is being discussed."'}
              quote="From static interpretation to participatory cultural storytelling."
            />
            <div className="mt-8">
              <OverviewVisuals slides={overviewSlides} onOpen={setActiveSlideIndex} />
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
          >
            <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
              <div>
                <SectionHeading
                  label="PRODUCT OPPORTUNITY"
                  title="Cultural Learning Has A Format Problem"
                  body="The challenge was not only how to generate more information about artifacts. The harder question was how to make cultural interpretation feel approachable, memorable, and emotionally engaging. Traditional cultural experiences often assume that users already have context or motivation. Curio targets the opposite case: users may not know what an object is, why it matters, or why they should care. The product therefore needed to create an immediate entry point, a clear scene, and a reason to stay."
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {opportunityCards.map((card) => (
                    <InfoCard key={card.title} {...card} />
                  ))}
                </div>
              </div>
              <VisualGrid slides={opportunitySlides} onOpen={setActiveSlideIndex} columns="md:grid-cols-1" />
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
          >
            <SectionHeading
              label="PRODUCT HYPOTHESIS"
              title="If Culture Feels Like A Live Conversation, Users Will Be More Willing To Explore It"
              body={'The MVP tested whether users would engage more deeply with cultural content when the experience had three ingredients. This direction came directly from early product discussions around object recognition, scene generation, role assignment, character behavior, livestream atmosphere, and prompt structure. The project moved from "identify an artifact" toward "orchestrate a cultural room around it."'}
            />
            <div className="mt-7 grid gap-4 lg:grid-cols-[0.56fr_0.44fr] lg:items-start">
              <div className="grid gap-4 md:grid-cols-3">
                {hypothesisCards.map((card, index) => (
                  <motion.div key={card.title} initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }} whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.35 }}>
                    <InfoCard {...card} />
                  </motion.div>
                ))}
              </div>
              <VisualGrid slides={hypothesisSlides} onOpen={setActiveSlideIndex} columns="md:grid-cols-1" />
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
          >
            <SectionHeading
              label="PRODUCT LOOP"
              title="Upload, Frame, Cast, And Orchestrate The Conversation"
              body="I designed Curio around a simple loop that could be understood quickly by first-time users. The goal was to make the system legible from the very first action while still giving the AI enough structure to create curation, atmosphere, and a sense of progression."
            />
            <div className="mt-8 space-y-8">
              <FlowSteps steps={loopSteps} />
              <VisualGrid slides={loopSlides} onOpen={setActiveSlideIndex} columns="md:grid-cols-2" />
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
          >
            <SectionHeading
              label="AI LIVEROOM / AI ORCHESTRATION"
              title="Making AI Interpretation Feel Like A Room, Not A Response"
              body="The interface was intentionally designed to avoid the feeling of a chatbot answer. Instead, Curio presents the uploaded object as the center of a staged cultural room, where AI guests have roles, reactions, and reasons to speak. This is also where the product logic mattered most: object understanding, scene framing, character casting, conversation rules, room pacing, and continuity all needed to work together so the experience felt alive rather than random."
            />
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {experienceCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[0.54fr_0.46fr] lg:items-start">
              <EqualHeightStack slides={liveRoomSlides} onOpen={setActiveSlideIndex} />
              <div className="grid gap-3">
                {orchestrationCards.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
          >
            <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
              <div>
                <SectionHeading
                  label="VALIDATION"
                  title="Shipping An MVP To Test Demand, Resonance, And Next Steps"
                  body="The goal was not to stop at a speculative concept deck. I pushed Curio toward a working MVP that users could actually try, react to, and critique. The prototype was shown at Microsoft's OPE event, where users scanned the QR code, entered the experience, and reacted in real time. This section is the proof that the project moved beyond concept framing into real validation."
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {validationMetrics.map((card) => (
                    <InfoCard key={card.title} {...card} />
                  ))}
                </div>
              </div>
              <VisualGrid slides={validationSlides} onOpen={setActiveSlideIndex} columns="md:grid-cols-1" />
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
          >
            <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
              <div>
                <SectionHeading
                  label="OPE OWNERSHIP"
                  title="Operating As A One-Person Product Team"
                  body="As a Microsoft OPE project, Curio required me to operate across product strategy, UX design, visual storytelling, AI prompt design, prototype development, testing, and demo preparation. I was responsible for turning a broad cultural-tech direction into a concrete MVP and making both the product value and technical feasibility legible."
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {responsibilityCards.map((card) => (
                    <InfoCard key={card.title} {...card} />
                  ))}
                </div>
              </div>
              <VisualGrid slides={ownershipSlides} onOpen={setActiveSlideIndex} columns="md:grid-cols-1" />
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
          >
            <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
              <div>
                <SectionHeading
                  label="USER COMMUNITY"
                  title="User Community & Feedback Iteration"
                  body="After the MVP was in people's hands, the next layer of learning came from community reaction and feedback iteration. This part of the process clarified how people interpreted the concept, which parts felt most novel, and where future versions would need better explanation, stronger retention loops, and more social outputs."
                />
                <div className="mt-6 grid gap-3">
                  {communityCards.map((card) => (
                    <InfoCard key={card.title} {...card} />
                  ))}
                </div>
              </div>
              <VisualGrid slides={communitySlides} onOpen={setActiveSlideIndex} columns="md:grid-cols-1" />
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
          >
            <SectionHeading
              label="LEARNINGS"
              title="What The MVP Clarified"
              body="Curio validated that multi-agent AI can make cultural content feel more accessible and emotionally engaging, but it also revealed that AI cultural products need stronger product scaffolding than a simple chat interface. The product value came from orchestration: the object, scene, cast, tone, and conversation rules had to work together to create a repeatable format for cultural discovery."
            />
            <div className="mt-8">
              <VisualGrid slides={learningSlides} onOpen={setActiveSlideIndex} columns="md:grid-cols-1" />
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {learningCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7"
          >
            <SectionHeading
              label="BUSINESS & FUTURE DIRECTIONS"
              title="From MVP To Scalable Cultural AI Platform"
              body="The next version of Curio would expand from a single-room MVP into a broader cultural AI platform. The opportunity is not just a one-off demo - it could grow into a B2B cultural tourism tool, an institution-facing authoring system, and a consumer social product built around shareable cultural conversations."
            />
            <div className="mt-8 grid gap-8 lg:grid-cols-[0.52fr_0.48fr] lg:items-start">
              <VisualGrid slides={futureSlides} onOpen={setActiveSlideIndex} columns="md:grid-cols-1" />
              <div className="grid gap-3 sm:grid-cols-2">
                {futureCards.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </motion.section>
        </div>

      </div>

      <div className="mx-auto max-w-[1280px] px-4 pb-16 sm:px-6 lg:px-8">
        <ProjectDetailFooterNav />
      </div>

      <ImageGalleryLightbox
        images={curioSlides}
        activeIndex={activeSlideIndex}
        onClose={() => setActiveSlideIndex(null)}
        onNavigate={setActiveSlideIndex}
      />
    </main>
  );
}
