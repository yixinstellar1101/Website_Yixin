"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Boxes,
  Bug,
  CheckCircle2,
  Compass,
  Cpu,
  Download,
  FlaskConical,
  Gauge,
  Lightbulb,
  Menu,
  MoreHorizontal,
  Rocket,
  ScanSearch,
  Share2,
  Sparkles,
  Target,
  Upload,
  Users2,
  X,
  type LucideIcon
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import type { ProjectItem } from "@/data/site";
import { ProjectDetailFooterNav } from "@/components/ProjectDetailFooterNav";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";

const detailLinks = [
  { href: "/", label: "ABOUT" },
  { href: "/career", label: "CAREER" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/beyond-work", label: "BEYOND WORK" }
];

type Copilot3DCaseStudyProps = {
  project: ProjectItem;
};

type IconCard = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type MatrixRow = {
  title: string;
  inspect: string;
  failure: string;
  icon: LucideIcon;
};

type JourneyMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      alt: string;
    };

type JourneyStep = {
  label: string;
  icon: LucideIcon;
  media: JourneyMedia;
};

const heroTags = [
  "AI Product",
  "Image-to-3D",
  "Copilot Labs",
  "Quality Evaluation",
  "Launch Activation"
] as const;

const contextCards: IconCard[] = [
  {
    title: "Technology Opportunity",
    body: "Microsoft Research Asia’s Trellis model showed strong potential in image-to-3D and text-to-3D generation, creating an opportunity to bring advanced 3D creation capabilities to a broader audience.",
    icon: Sparkles
  },
  {
    title: "Market Gap",
    body: "Traditional 3D creation requires specialized skills, long production cycles, and post-editing effort. Many existing AI 3D tools still target professional users, leaving a gap for accessible consumer-facing 3D creation.",
    icon: Target
  },
  {
    title: "Product Opportunity",
    body: "Copilot Labs offered a space to turn emerging AI capabilities into experimental user-facing experiences, helping users understand what new AI models can do through lightweight product interactions.",
    icon: FlaskConical
  }
];

const targetUsers: IconCard[] = [
  {
    title: "Interest-driven Creators",
    body: "3D printing enthusiasts, ACG / collectible fans, and original character creators who want to turn personal ideas or images into customized 3D assets.",
    icon: Sparkles
  },
  {
    title: "Efficiency-driven Makers",
    body: "Indie game developers, animation creators, beginner modelers, and small studios who need faster ways to generate characters, props, or scenes for validation and communication.",
    icon: Gauge
  },
  {
    title: "Effect-driven Storytellers",
    body: "Designers, business users, and digital content creators who want quick 3D visuals for presentations, concepts, or creative storytelling.",
    icon: Compass
  }
];

const positioningCards: IconCard[] = [
  {
    title: "Not a professional modeling suite",
    body: "A lightweight entry point for non-expert users.",
    icon: Compass
  },
  {
    title: "Not only a technical demo",
    body: "A product experience with activation, engagement, and quality signals.",
    icon: Activity
  },
  {
    title: "Not just generation",
    body: "A creation loop that supports preview, export, sharing, and future reuse.",
    icon: Boxes
  }
];

const journeySteps: JourneyStep[] = [
  {
    label: "Browse inspiration",
    icon: Compass,
    media: {
      type: "image",
      src: "/projects/Copilot%203D%20user%20journey/Browse%20inspiration.webp",
      alt: "Copilot 3D inspiration browsing screen"
    }
  },
  {
    label: "Upload image",
    icon: Upload,
    media: {
      type: "video",
      src: "/projects/Copilot 3D user journey/Upload image.mov",
      alt: "Copilot 3D upload image flow"
    }
  },
  {
    label: "Generate 3D asset",
    icon: Sparkles,
    media: {
      type: "video",
      src: "/projects/Copilot 3D user journey/Generate 3D asset.mov",
      alt: "Copilot 3D asset generation in progress"
    }
  },
  {
    label: "Preview model",
    icon: ScanSearch,
    media: {
      type: "video",
      src: "/projects/Copilot 3D user journey/Preview model.mov",
      alt: "Copilot 3D model preview"
    }
  },
  {
    label: "Save in My Creations",
    icon: Boxes,
    media: {
      type: "image",
      src: "/projects/Copilot%203D%20user%20journey/Save%20in%20my%20creations.webp",
      alt: "Copilot 3D saved assets view"
    }
  },
  {
    label: "Export model",
    icon: Download,
    media: {
      type: "image",
      src: "/projects/Copilot%203D%20user%20journey/Export%20model.webp",
      alt: "Copilot 3D export model dialog"
    }
  },
  {
    label: "Share result",
    icon: Share2,
    media: {
      type: "image",
      src: "/projects/Copilot%203D%20user%20journey/Share%20result.webp",
      alt: "Copilot 3D share result flow"
    }
  }
];

const mvpModules: IconCard[] = [
  {
    title: "Image Upload",
    body: "A simple drag-and-drop or click-to-upload entry point.",
    icon: Upload
  },
  {
    title: "3D Preview",
    body: "Interactive rotate, zoom, and texture preview to help users inspect the result.",
    icon: ScanSearch
  },
  {
    title: "My Creations",
    body: "A personal library for generated 3D assets.",
    icon: Boxes
  },
  {
    title: "Export & Share",
    body: "Download and share flows that turn generation results into reusable assets.",
    icon: Share2
  }
];

const roleCards: IconCard[] = [
  {
    title: "Launch Activation",
    body: "Supported growth tracking, launch framing, and early adoption analysis for Copilot 3D on Copilot Labs.",
    icon: Rocket
  },
  {
    title: "Product Storytelling",
    body: "Helped translate image-to-3D capabilities into user-facing narratives, demos, and examples that made the technology easier to understand.",
    icon: Lightbulb
  },
  {
    title: "Quality Evaluation",
    body: "Built a benchmark-based evaluation approach to make generative 3D quality more measurable across asset categories, thresholds, and workflows.",
    icon: BarChart3
  },
  {
    title: "Bad-case Analysis",
    body: "Worked with ML and engineering partners to diagnose whether poor outputs came from input quality, data coverage, model behavior, or pipeline failures.",
    icon: Bug
  }
];

const productDecisions: IconCard[] = [
  {
    title: "1. Start with a low-friction consumer experience",
    body: "Instead of building a professional 3D modeling workflow, the MVP focused on helping non-expert users quickly experience image-to-3D generation.",
    icon: Compass
  },
  {
    title: "2. Prioritize the creation loop",
    body: "The product experience centered on a simple loop: upload image → generate 3D asset → preview → export / share.",
    icon: Activity
  },
  {
    title: "3. Use examples to make the capability legible",
    body: "Because many users do not know what a 3D asset can be used for, product storytelling and demo scenarios helped bridge technical capability and user imagination.",
    icon: Lightbulb
  },
  {
    title: "4. Treat quality as a product problem",
    body: "Generated 3D quality was not only an ML issue. It affected user trust, activation, repeat usage, and whether users wanted to download or share the result.",
    icon: CheckCircle2
  },
  {
    title: "5. Build evaluation into iteration",
    body: "We needed a structured way to compare outputs, identify bad cases, and connect product quality expectations with technical iteration priorities.",
    icon: BarChart3
  }
];

const evaluationRows: MatrixRow[] = [
  {
    title: "Asset Category",
    inspect: "Characters, animals, furniture, objects, props, and scene-like assets.",
    failure: "Category-specific blind spots and unstable output consistency.",
    icon: Boxes
  },
  {
    title: "Shape Completeness",
    inspect: "Whether the generated model preserves the object’s major structure without missing parts or broken geometry.",
    failure: "Missing limbs, collapsed structures, broken geometry.",
    icon: CheckCircle2
  },
  {
    title: "Texture Quality",
    inspect: "Whether the surface details are clear, coherent, and visually aligned with the input.",
    failure: "Muddy textures, stretched surfaces, incoherent details.",
    icon: Sparkles
  },
  {
    title: "Input Alignment",
    inspect: "Whether the generated 3D asset matches the original image’s subject, style, and key visual features.",
    failure: "Wrong subject emphasis, weak style match, missing visual identity.",
    icon: Target
  },
  {
    title: "Visible Artifacts",
    inspect: "Whether the output contains holes, distorted edges, merged shapes, or unnatural geometry.",
    failure: "Holes, merged parts, noisy edges, impossible geometry.",
    icon: Bug
  },
  {
    title: "Usability",
    inspect: "Whether the model is good enough to preview, download, share, or use in a target scenario.",
    failure: "Looks interesting but is not usable in downstream workflows.",
    icon: Gauge
  }
];

const badCaseCards: IconCard[] = [
  {
    title: "Input Quality Issue",
    body: "Some user images were too blurry, cluttered, low-resolution, or ambiguous, making it difficult for the system to identify the main object.",
    icon: Upload
  },
  {
    title: "Pipeline Issue",
    body: "In some cases, the background-removal API cut off parts of the foreground object during preprocessing. The downstream 3D model then received incomplete input, leading to missing geometry in the final asset.",
    icon: Activity
  },
  {
    title: "Data Coverage Issue",
    body: "Fine-grained structures such as hands were harder to generate reliably. When training examples did not sufficiently cover hand poses, viewpoints, and geometry, the model could produce merged or distorted shapes.",
    icon: BarChart3
  },
  {
    title: "Model Limitation",
    body: "Some complex objects revealed limitations in the model’s ability to generate stable geometry, texture, or multi-view consistency, even when input and preprocessing were reasonable.",
    icon: Cpu
  }
];

const technicalCards: IconCard[] = [
  {
    title: "API Quality",
    body: "For a background-removal API, quality meant whether the foreground object was preserved completely and consistently across different image categories.",
    icon: Sparkles
  },
  {
    title: "Latency",
    body: "AI generation time affects completion rate and user patience, so the experience needed clear progress states and asynchronous handling.",
    icon: Gauge
  },
  {
    title: "Reliability",
    body: "Failures, timeouts, and incomplete outputs needed to be monitored because they directly affected user trust.",
    icon: CheckCircle2
  },
  {
    title: "Downstream Impact",
    body: "A preprocessing improvement mattered only if it improved final 3D output quality, not just the intermediate mask.",
    icon: ArrowRight
  },
  {
    title: "Tradeoffs",
    body: "API selection required balancing output quality, speed, cost, integration effort, scalability, and privacy requirements.",
    icon: Compass
  }
];

const metricCards = [
  {
    value: "~28%",
    label: "Labs unique user growth",
    detail: "Post-launch increase in Copilot Labs audience reach",
    accent: "from-sky-300/60 via-sky-200/25 to-transparent"
  },
  {
    value: "90K+",
    label: "3D assets generated",
    detail: "Within the first week after GA",
    accent: "from-cyan-300/55 via-cyan-200/20 to-transparent"
  },
  {
    value: "68K+",
    label: "Unique visitors since launch",
    detail: "Strong top-of-funnel discovery and curiosity",
    accent: "from-indigo-300/55 via-indigo-200/20 to-transparent"
  },
  {
    value: "35K+",
    label: "Engaged users",
    detail: "Creating, recreating, or downloading assets",
    accent: "from-violet-300/55 via-violet-200/20 to-transparent"
  }
] as const;

const funnelCards: IconCard[] = [
  {
    title: "Traffic",
    body: "Visits, impressions, unique visitors, and entry points into Copilot Labs.",
    icon: Activity
  },
  {
    title: "Activation",
    body: "Users who clicked create, uploaded an image, started generation, and completed generation.",
    icon: Rocket
  },
  {
    title: "Engagement",
    body: "Assets generated, repeat generation, engaged users, and average models created.",
    icon: Sparkles
  },
  {
    title: "Output Usage",
    body: "Downloads, shares, recreations, and interactions with My Creations.",
    icon: Share2
  },
  {
    title: "Quality",
    body: "Generation success rate, bad-case rate, category-level scores, and user feedback themes.",
    icon: BarChart3
  }
];

const impactCards = [
  "Created a clearer product narrative for image-to-3D generation, helping users understand what 3D assets are and why they matter.",
  "Helped establish a more structured quality evaluation loop for generative 3D outputs, supporting future model and pipeline iteration.",
  "Connected product expectations with technical diagnosis, making bad-case discussions more actionable across PM, ML, and engineering teams."
] as const;

const nextSteps: IconCard[] = [
  {
    title: "Model Quality First",
    body: "Improve high-priority asset categories by enriching training data, refining pipeline steps, and reducing common bad cases.",
    icon: Cpu
  },
  {
    title: "Better Sharing & Reuse",
    body: "Strengthen share links, social previews, multi-format export, and My Creations flows to encourage users to reuse and spread their outputs.",
    icon: Share2
  },
  {
    title: "Templates & Guided Creation",
    body: "Introduce style templates, use-case prompts, and inspiration examples to help users understand what to create.",
    icon: Lightbulb
  },
  {
    title: "Toward 3D Workflows",
    body: "Explore asset variation, modular composition, consistent style generation, and dynamic 3D assets as future creative workflows.",
    icon: Boxes
  }
];

const learnings: IconCard[] = [
  {
    title: "AI productization is not just model deployment.",
    body: "A model capability becomes a product only when users can understand it, try it, trust it, and find a reason to come back.",
    icon: Rocket
  },
  {
    title: "Quality is a product decision.",
    body: "For generative AI products, PMs need to define what “good enough” means for the product stage, target user, and use case.",
    icon: CheckCircle2
  },
  {
    title: "Bad outputs need system-level diagnosis.",
    body: "A poor result can come from user input, preprocessing APIs, training data gaps, model limitations, or pipeline failures.",
    icon: Bug
  },
  {
    title: "Evaluation frameworks create team alignment.",
    body: "Structured benchmarks help product, ML, design, and engineering teams discuss quality in a shared language.",
    icon: BarChart3
  },
  {
    title: "Early AI products need both wonder and trust.",
    body: "Users may try an AI product because it feels magical, but they return only if the output is reliable and useful.",
    icon: Sparkles
  }
];

function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  icon: Icon,
  centered = false
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  icon: LucideIcon;
  centered?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-[30px] border border-white/75 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_72px_rgba(25,47,110,0.07)] backdrop-blur-2xl sm:p-7 ${className}`}
    >
      <div className={centered ? "mx-auto max-w-[980px] text-center" : "max-w-[1120px]"}>
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
        {intro ? <p className={`mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)] ${centered ? "mx-auto max-w-[900px]" : "max-w-[920px]"}`}>{intro}</p> : null}
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

function MetricCard({ value, label, detail, accent }: (typeof metricCards)[number]) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative overflow-hidden rounded-[24px] border border-white/78 bg-[rgba(255,255,255,0.72)] p-6 shadow-[0_18px_52px_rgba(24,48,116,0.08)]"
    >
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accent}`} />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.46)]">Live Signal</p>
          <span className="inline-flex rounded-full border border-[rgba(11,34,66,0.1)] bg-white/78 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[rgba(11,34,66,0.62)]">GA</span>
        </div>
        <p className="mt-6 text-[clamp(2.4rem,4vw,3.6rem)] leading-none tracking-[-0.04em] text-ink" style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}>
          {value}
        </p>
        <p className="mt-3 text-base leading-7 text-ink">{label}</p>
        <p className="mt-3 text-sm leading-6 text-[rgba(11,34,66,0.64)]">{detail}</p>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-[rgba(11,34,66,0.06)]">
          <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,#173b78,#63b4ff)]" />
        </div>
      </div>
    </motion.article>
  );
}

function MatrixTable() {
  return (
    <div className="overflow-hidden rounded-[26px] border border-white/76 bg-white/70 shadow-[0_18px_52px_rgba(24,48,116,0.07)]">
      <div className="grid gap-px bg-[rgba(11,34,66,0.08)] md:grid-cols-[1.1fr_1.5fr_1.1fr]">
        <div className="bg-[rgba(246,249,255,0.96)] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.5)]">Benchmark Dimension</div>
        <div className="bg-[rgba(246,249,255,0.96)] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.5)]">What We Checked</div>
        <div className="bg-[rgba(246,249,255,0.96)] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.5)]">Failure Signal</div>
        {evaluationRows.map((row) => {
          const Icon = row.icon;
          return (
            <div key={row.title} className="contents">
              <div className="bg-white/92 px-5 py-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/82 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,248,255,0.88))] text-ink shadow-[0_10px_24px_rgba(26,49,118,0.06)]">
                    <Icon size={16} />
                  </span>
                  <p className="text-base leading-tight text-ink" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>{row.title}</p>
                </div>
              </div>
              <div className="bg-white/88 px-5 py-5 text-sm leading-7 text-[rgba(11,34,66,0.72)]">{row.inspect}</div>
              <div className="bg-white/92 px-5 py-5 text-sm leading-7 text-[rgba(11,34,66,0.72)]">{row.failure}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function JourneyConnector() {
  return (
    <div className="flex items-center justify-center px-1 py-2">
      <div className="relative h-px w-12 bg-[linear-gradient(90deg,rgba(151,171,202,0.22),rgba(86,116,173,0.64),rgba(151,171,202,0.16))]">
        <span className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-[rgba(130,158,211,0.78)] shadow-[0_6px_16px_rgba(34,63,123,0.12)]" />
        <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-[2px] rotate-45 border-r border-t border-[rgba(58,90,152,0.82)] bg-[rgba(255,255,255,0.92)] shadow-[0_4px_12px_rgba(34,63,123,0.08)]" />
      </div>
    </div>
  );
}

function JourneyLightbox({
  activeIndex,
  onClose,
  onNavigate,
  prefersReducedMotion
}: {
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  prefersReducedMotion: boolean;
}) {
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft" && activeIndex > 0) {
        onNavigate(activeIndex - 1);
      }

      if (event.key === "ArrowRight" && activeIndex < journeySteps.length - 1) {
        onNavigate(activeIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [activeIndex, onClose, onNavigate]);

  if (activeIndex === null) {
    return null;
  }

  const step = journeySteps[activeIndex];
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < journeySteps.length - 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[90] overflow-y-auto bg-[rgba(8,12,24,0.78)] p-4 sm:p-6 lg:p-10"
      >
        <div className="flex min-h-full items-center justify-center py-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="relative mx-auto my-6 w-full max-w-[1560px] overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.05)] shadow-[0_30px_90px_rgba(0,0,0,0.38)]"
          >
            {canGoPrev ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNavigate(activeIndex - 1);
                }}
                className="group/prev absolute left-0 top-0 z-10 h-full w-1/2 focus-visible:outline-none"
                aria-label="Previous journey step"
              >
                <span className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-[rgba(255,255,255,0.10)] text-white opacity-0 transition hover:bg-[rgba(255,255,255,0.16)] group-hover/prev:opacity-100 focus-visible:opacity-100">
                  <ArrowLeft size={20} />
                </span>
              </button>
            ) : null}

            {canGoNext ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNavigate(activeIndex + 1);
                }}
                className="group/next absolute right-0 top-0 z-10 h-full w-1/2 focus-visible:outline-none"
                aria-label="Next journey step"
              >
                <span className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-[rgba(255,255,255,0.10)] text-white opacity-0 transition hover:bg-[rgba(255,255,255,0.16)] group-hover/next:opacity-100 focus-visible:opacity-100">
                  <ArrowRight size={20} />
                </span>
              </button>
            ) : null}

            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-[rgba(255,255,255,0.10)] text-white transition hover:bg-[rgba(255,255,255,0.16)]"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>

            <div className="border-b border-white/10 px-5 py-4 text-white/86 sm:px-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/56">User Journey Step 0{activeIndex + 1}</p>
              <p className="mt-2 text-lg" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>{step.label}</p>
            </div>

            <div className="bg-[linear-gradient(180deg,rgba(10,16,30,0.74),rgba(22,34,58,0.64))]">
              {step.media.type === "video" ? (
                <video
                  src={step.media.src}
                  aria-label={step.media.alt}
                  controls
                  autoPlay={!prefersReducedMotion}
                  muted
                  loop={!prefersReducedMotion}
                  playsInline
                  preload="metadata"
                  className="block max-h-[78vh] w-full object-contain"
                />
              ) : (
                <div className="relative min-h-[44vh]">
                  <Image
                    src={step.media.src}
                    alt={step.media.alt}
                    fill
                    sizes="100vw"
                    quality={95}
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Copilot3DCaseStudy({ project }: Copilot3DCaseStudyProps) {
  const prefersReducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [progress, setProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState<number | null>(null);
  const [journeyProgress, setJourneyProgress] = useState(0);
  const [journeyCanScroll, setJourneyCanScroll] = useState(false);
  const journeyScrollRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const node = journeyScrollRef.current;
    if (!node) return;

    const syncJourneyProgress = () => {
      const maxScrollLeft = node.scrollWidth - node.clientWidth;
      setJourneyCanScroll(maxScrollLeft > 12);
      setJourneyProgress(maxScrollLeft > 0 ? node.scrollLeft / maxScrollLeft : 0);
    };

    syncJourneyProgress();
    node.addEventListener("scroll", syncJourneyProgress, { passive: true });
    window.addEventListener("resize", syncJourneyProgress);

    return () => {
      node.removeEventListener("scroll", syncJourneyProgress);
      window.removeEventListener("resize", syncJourneyProgress);
    };
  }, []);

  const compactWidth = viewportWidth < 640 ? 212 : 252;
  const navButtonClass = (active = false) =>
    `text-xs font-semibold uppercase tracking-[0.2em] transition ${
      active ? "text-ink" : "text-[rgba(11,34,66,0.58)] hover:text-ink"
    }`;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[48rem] bg-[radial-gradient(circle_at_16%_18%,rgba(142,208,255,0.24),transparent_24%),radial-gradient(circle_at_84%_14%,rgba(132,160,255,0.18),transparent_22%),linear-gradient(180deg,rgba(126,201,255,0.10),transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38rem] bg-[radial-gradient(circle_at_14%_82%,rgba(255,202,173,0.34),transparent_28%),radial-gradient(circle_at_84%_88%,rgba(180,204,255,0.38),transparent_30%),radial-gradient(circle_at_72%_58%,rgba(223,201,255,0.26),transparent_26%)]" />

      <div className="fixed inset-x-0 top-0 z-30 px-4 pt-3 sm:px-6 lg:px-8">
        <div className="pointer-events-none fixed left-0 top-0 z-[60] h-[3px] w-full bg-[rgba(11,34,66,0.08)]">
          <motion.div className="h-full origin-left bg-ink" animate={{ scaleX: progress }} transition={{ duration: 0.16, ease: "easeOut" }} />
        </div>

        <div className="mx-auto max-w-[1280px]">
          <div className="relative h-[92px]">
            <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 items-center gap-3 sm:gap-4">
              <motion.div initial={false} animate={{ scale: compact ? 0.96 : 1, x: compact ? 10 : 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="shrink-0 pt-3">
                <Link href="/projects" aria-label={`Back to ${project.title.en} card`} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(11,34,66,0.1)] bg-white/92 text-ink shadow-[0_12px_30px_rgba(25,48,118,0.12),0_2px_8px_rgba(25,48,118,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white">
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
                          <Link key={item.href} href={item.href} className={navButtonClass(item.href === "/projects")}>
                            {item.label}
                          </Link>
                        ))}
                      </nav>
                      <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
                        <Button href="/contact">LET&apos;S TALK</Button>
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
                        {detailLinks.map((item) => (
                          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={navButtonClass(item.href === "/projects") + " rounded-full px-4 py-3 text-left"}>
                            {item.label}
                          </Link>
                        ))}
                        <Link href="/contact" onClick={() => setOpen(false)} className={navButtonClass(false) + " rounded-full px-4 py-3 text-left"}>LET&apos;S TALK</Link>
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
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div className="max-w-[760px]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">2025 · AI PRODUCTIZATION · IMAGE-TO-3D · QUALITY EVALUATION</p>
              <h1 className="mt-4 text-balance text-[clamp(2.3rem,4.6vw,4.85rem)] leading-[0.94] tracking-[-0.045em] text-ink xl:max-w-none" style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}>
                Copilot 3D — Productizing Image-to-3D AI
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[rgba(11,34,66,0.72)]">Turning early image-to-3D research into a consumer-facing Copilot Labs experience through launch activation, product storytelling, and benchmark-based quality evaluation.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <Pill key={tag} className="bg-white/68">{tag}</Pill>
                ))}
              </div>

              {project.externalHref ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={project.externalHref} external>
                    {project.externalLabel?.en ?? "Try Copilot 3D"}
                  </Button>
                </div>
              ) : null}
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/75 bg-[rgba(248,246,242,0.62)] shadow-[0_22px_68px_rgba(26,49,118,0.08)]">
              <video
                src={project.coverSrc}
                poster={project.coverPosterSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-[#eef6ff] object-contain"
              />
              <div className="border-t border-white/65 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.46)]">Project Snapshot</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(11,34,66,0.74)]">Productizing MSRA’s image-to-3D capability for broader consumer adoption on Copilot Labs.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[26px] border border-white/65 bg-white/58 p-6 shadow-[0_18px_52px_rgba(27,51,120,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(11,34,66,0.48)]">Overview</p>
            <div className="mt-4 space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
              <p>Copilot 3D is an image-to-3D generation product launched on Copilot Labs, enabling users to turn images into interactive, downloadable 3D assets.</p>
              <p>The project explored how Microsoft’s emerging 3D generation research could become a user-facing consumer AI experience: easy to understand, simple to try, and measurable through real user engagement.</p>
              <p>I contributed to launch activation, product storytelling, growth tracking, benchmark-based quality evaluation, and bad-case analysis across product, ML, and engineering partners.</p>
            </div>
          </article>
          <article className="rounded-[26px] border border-white/65 bg-white/58 p-6 shadow-[0_18px_52px_rgba(27,51,120,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(11,34,66,0.48)]">Problem</p>
            <h3 className="mt-4 text-[1.95rem] leading-[1.02] tracking-[-0.03em] text-ink" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>
              How might we help non-expert users understand, try, and trust image-to-3D generation before it becomes a mature professional tool?
            </h3>
            <div className="mt-4 space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
              <p>The core product challenge was not only whether the model could generate 3D assets. It was whether users could understand what image-to-3D means, complete a simple creation flow, trust the output quality, and imagine how the result could be used.</p>
              <p>For early AI products, technical novelty alone is not enough. The product needs a clear user entry point, a realistic quality bar, and a feedback loop that helps the team improve over time.</p>
            </div>
          </article>
          <article className="rounded-[26px] border border-white/65 bg-white/58 p-6 shadow-[0_18px_52px_rgba(27,51,120,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(11,34,66,0.48)]">My Role</p>
            <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">I contributed across launch activation, product storytelling, quality evaluation, and technical bad-case analysis.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Launch activation",
                "Product storytelling",
                "Quality evaluation",
                "Bad-case analysis",
                "Cross-functional collaboration"
              ].map((tag) => (
                <Pill key={tag} className="bg-white/74">{tag}</Pill>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-10 space-y-10">
          <Section eyebrow="Context" title="Why This Product" icon={Lightbulb}>
            <div className="grid gap-5 lg:grid-cols-3">
              {contextCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Target Users" title="Three Early User Groups" intro="We looked at three early user groups with different motivations for 3D creation." icon={Users2}>
            <div className="grid gap-5 lg:grid-cols-3">
              {targetUsers.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Product Positioning" title="A Low-friction Consumer AI Experience" intro="We positioned Copilot 3D as a low-friction consumer AI experience, not a professional 3D modeling tool." icon={Compass}>
            <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
              <div className="rounded-[24px] border border-white/72 bg-white/68 p-5 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                <p>If positioned as a professional tool, users would expect advanced editing, precision controls, industrial-level output quality, and a complete production workflow.</p>
                <p className="mt-4">For Copilot Labs, the stronger MVP direction was to reduce the barrier to first-time 3D creation: help users upload an image, generate a 3D asset, preview it, and understand what it could become.</p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {positioningCards.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </Section>

          <Section eyebrow="MVP Experience" title="A Simple Creation Loop" intro="The MVP focused on helping users complete a simple image-to-3D creation loop while keeping the experience understandable and low-friction." icon={Activity}>
            <div className="space-y-8">
              <div className="overflow-hidden rounded-[26px] border border-white/76 bg-white/70 shadow-[0_18px_52px_rgba(24,48,116,0.07)]">
                <div className="border-b border-[rgba(11,34,66,0.08)] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.48)]">User Journey</div>
                <div
                  ref={journeyScrollRef}
                  className="flex gap-2 overflow-x-auto px-5 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {journeySteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.label} className="flex shrink-0 items-center">
                        <motion.article
                          whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          className="flex min-h-[290px] w-[258px] flex-col rounded-[24px] border border-white/82 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,248,255,0.92))] p-4 shadow-[0_16px_38px_rgba(24,48,116,0.08)]"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-white text-ink shadow-[0_8px_18px_rgba(24,48,116,0.08)]"><Icon size={18} /></span>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.46)]">0{index + 1}</span>
                          </div>

                          <button
                            type="button"
                            onClick={() => setActiveJourneyIndex(index)}
                            className="group relative mt-4 flex flex-1 cursor-zoom-in overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.86)] bg-[linear-gradient(180deg,rgba(240,246,255,0.9),rgba(231,239,252,0.78))] text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.88)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(23,59,120,0.34)]"
                            aria-label={`Open ${step.label}`}
                          >
                            {step.media.type === "video" ? (
                              <video
                                src={step.media.src}
                                aria-label={step.media.alt}
                                autoPlay={!prefersReducedMotion}
                                muted
                                loop={!prefersReducedMotion}
                                playsInline
                                preload="metadata"
                                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                              />
                            ) : (
                              <Image
                                src={step.media.src}
                                alt={step.media.alt}
                                fill
                                sizes="258px"
                                quality={95}
                                className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                              />
                            )}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.82))]" />
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,32,63,0),rgba(17,32,63,0.08))] opacity-0 transition group-hover:opacity-100" />
                          </button>

                          <p className="mt-4 text-base leading-6 text-ink" style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}>{step.label}</p>
                        </motion.article>
                        {index < journeySteps.length - 1 ? <JourneyConnector /> : null}
                      </div>
                    );
                  })}
                </div>
                <div className="border-t border-[rgba(11,34,66,0.08)] px-5 pb-5 pt-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.44)]">
                      {journeyCanScroll ? "Scroll right to explore the full journey" : "Tap any step to enlarge"}
                    </p>
                    <p className="text-xs text-[rgba(11,34,66,0.5)]">{Math.round(journeyProgress * 100)}%</p>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[rgba(11,34,66,0.08)]">
                    <motion.div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#f3d7d4,#e7b8b4)]"
                      animate={{ width: `${journeyCanScroll ? Math.max(14, journeyProgress * 100) : 100}%` }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
                <div className="rounded-[24px] border border-dashed border-[rgba(11,34,66,0.16)] bg-white/56 p-5 text-sm leading-7 text-[rgba(11,34,66,0.72)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.48)]">PRD MVP Scope</p>
                  <p className="mt-4">Image to 3D, Model Preview, Export Model, Login, User Permissions, My Creations, Generation in Progress, Share Model, Homepage Inspiration, and Daily Generation Limit.</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {mvpModules.map((card) => (
                    <InfoCard key={card.title} {...card} />
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section eyebrow="My Role" title="Launch Activation To Technical Diagnosis" icon={Rocket}>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {roleCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Product Decisions" title="Five Decisions That Framed The MVP" icon={CheckCircle2}>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {productDecisions.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Quality Evaluation Framework" title="Turning Subjective 3D Quality Into A Benchmark Matrix" intro="For AI-generated 3D assets, quality is subjective and multi-dimensional. A model might look good from one angle but fail on geometry, texture, input alignment, or usability." icon={BarChart3} centered>
            <div className="space-y-6">
              <p className="mx-auto max-w-[980px] text-center text-base leading-8 text-[rgba(11,34,66,0.72)]">To make quality easier to evaluate, we built a benchmark-based approach that translated subjective product expectations into measurable criteria.</p>
              <div className="mx-auto max-w-[1220px]">
                <MatrixTable />
              </div>
              <div className="mx-auto max-w-[1080px] rounded-[24px] border border-white/72 bg-white/68 p-5 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                The framework helped the team move from “this output looks bad” to a more actionable diagnosis: which asset category failed, which quality dimension failed, and whether the next iteration should focus on input guidance, data coverage, model behavior, or pipeline fixes.
              </div>
            </div>
          </Section>

          <Section eyebrow="Bad Case Analysis" title="Diagnosing Where Poor Outputs Came From" intro="Not every poor output came from the core 3D generation model. Some issues were introduced earlier in the pipeline, while others reflected data coverage gaps or model limitations." icon={Bug}>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {badCaseCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
            <div className="mt-6 rounded-[24px] border border-white/72 bg-white/68 p-5 text-base leading-8 text-[rgba(11,34,66,0.72)]">
              This changed how I evaluated AI product quality. Instead of asking only whether the model was good or bad, I learned to ask where in the pipeline the quality issue was introduced, how it affected downstream user experience, and what metric or benchmark could validate improvement.
            </div>
          </Section>

          <Section eyebrow="Technical Product Thinking" title="Understanding The System Behind The UX" intro="As a PM, I did not need to build the model myself, but I needed to understand how technical components shaped user experience." icon={Cpu}>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {technicalCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Launch Metrics" title="Signals From Early GA Adoption" intro="After GA, we looked at adoption and engagement across the user funnel: traffic, activation, generation, engaged usage, and output reuse." icon={BarChart3} centered>
            <div className="space-y-6">
              <div className="grid gap-5 lg:grid-cols-[1.15fr_1.05fr]">
                <MetricCard {...metricCards[0]} />
                <MetricCard {...metricCards[1]} />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <MetricCard {...metricCards[2]} />
                <MetricCard {...metricCards[3]} />
              </div>
              <p className="mx-auto max-w-[980px] text-center text-base leading-8 text-[rgba(11,34,66,0.72)]">The launch data suggested that Copilot 3D was not only attracting curiosity, but also driving core product actions. Users were entering the generation flow, creating assets, and engaging with the output beyond a simple page visit.</p>
            </div>
          </Section>

          <Section eyebrow="How I Read The Data" title="A PM Funnel For Early Labs Products" icon={Activity}>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {funnelCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
            <div className="mt-6 rounded-[24px] border border-white/72 bg-white/68 p-5 text-base leading-8 text-[rgba(11,34,66,0.72)]">
              For early Labs products, I would not optimize for monetization first. I would first validate whether users understand the capability, complete the core loop, engage with the output, and show signs of repeat use or sharing.
            </div>
          </Section>

          <Section eyebrow="Impact" title="From Launch Story To Iteration Loop" icon={Rocket}>
            <div className="space-y-6">
              <div className="rounded-[24px] border border-white/72 bg-white/68 p-6 text-lg leading-8 text-ink shadow-[0_14px_42px_rgba(26,49,118,0.06)]">Supported Copilot 3D’s early launch adoption, helping drive ~28% Labs UU growth and 90K+ 3D assets generated within one week of launch.</div>
              <div className="grid gap-5 md:grid-cols-3">
                {impactCards.map((item) => (
                  <article key={item} className="rounded-[22px] border border-white/72 bg-white/68 p-5 text-sm leading-7 text-[rgba(11,34,66,0.72)] shadow-[0_14px_42px_rgba(26,49,118,0.06)]">{item}</article>
                ))}
              </div>
            </div>
          </Section>

          <Section eyebrow="Next Steps" title="Where The Product Could Go Next" icon={ArrowRight}>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {nextSteps.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </Section>

          <Section eyebrow="What I Learned" title="PM Lessons From Productizing AI 3D" icon={Sparkles}>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {learnings.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Reflection" title="Why This Project Mattered" icon={Lightbulb} centered>
            <div className="mx-auto max-w-[980px] space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
              <p>Copilot 3D taught me how to think about AI products as systems: user expectations, product positioning, technical uncertainty, quality evaluation, and launch metrics all shape whether a model capability becomes a real product experience.</p>
              <p>The biggest PM lesson I took away is that AI PMs create value by translating ambiguous model capabilities and subjective output quality into user-facing experiences, measurable evaluation signals, and technical iteration priorities.</p>
            </div>
          </Section>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 pb-16 sm:px-6 lg:px-8">
        <ProjectDetailFooterNav />
      </div>

      <JourneyLightbox
        activeIndex={activeJourneyIndex}
        onClose={() => setActiveJourneyIndex(null)}
        onNavigate={setActiveJourneyIndex}
        prefersReducedMotion={!!prefersReducedMotion}
      />
    </main>
  );
}
