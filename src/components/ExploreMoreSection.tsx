import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";

import { Pill } from "@/components/ui/Pill";
import { careerItems, type Locale } from "@/data/site";

const ClientAutoplayVideo = dynamic(
  () => import("@/components/ClientAutoplayVideo").then((mod) => mod.ClientAutoplayVideo),
  { ssr: false }
);

type ExploreMoreSectionProps = {
  locale: Locale;
};

const featuredProjectMedia = [
  {
    type: "video" as const,
    src: "/projects/copilot-3d-cover-video.mp4",
    poster: "/projects/copilot-3d-cover.webp",
    alt: "Copilot 3D video preview"
  },
  {
    type: "image" as const,
    src: "/projects/curio-cover.webp",
    alt: "Curio project preview"
  },
  {
    type: "image" as const,
    src: "/projects/unity-cover.webp",
    alt: "Shipbuilding digital twin preview"
  }
];

const careerPreviewItems = careerItems.slice(0, 3);

const beyondWorkPreviewImages = [
  "/Beyond Work/迪士尼志愿者地球日和pride活动和其他照片/地球日/earth2.webp",
  "/Beyond Work/Microsoft AI Asia GIVE & Xinhua Education Foundation/give1.webp",
  "/Beyond Work/Graduation/Graduation1.webp"
];

type ExploreCardProps = {
  href: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  children: React.ReactNode;
};

function ExploreCard({
  href,
  label,
  title,
  description,
  cta,
  children
}: ExploreCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[34px] border border-white/72 bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(244,246,255,0.68),rgba(250,244,239,0.64))] p-5 shadow-glass backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_72px_rgba(24,48,116,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent sm:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">
        {label}
      </p>
      <h3
        className="mt-4 text-[clamp(1.6rem,2.5vw,2.2rem)] leading-[1.05] text-ink"
        style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
      >
        {title}
      </h3>
      <p className="mt-4 max-w-[32rem] text-sm leading-7 text-[rgba(11,34,66,0.72)] sm:text-[0.98rem]">
        {description}
      </p>

      <div className="mt-6 flex-1">{children}</div>

      <div className="mt-6 flex items-center justify-between rounded-[22px] border border-white/72 bg-white/62 px-4 py-4 shadow-[0_12px_30px_rgba(24,48,116,0.05)]">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
          {cta}
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(11,34,66,0.1)] bg-white/78 text-ink transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-white">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}

export function ExploreMoreSection({ locale }: ExploreMoreSectionProps) {
  return (
    <section className="px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pb-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-4xl text-center">
          <Pill>CONTINUE EXPLORING</Pill>
          <h2
            className="mt-6 text-[clamp(2.15rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em] text-ink"
            style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}
          >
            Explore the work behind the story.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[rgba(11,34,66,0.7)]">
            Dive into selected projects, career highlights, and the moments that shaped how I build.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <ExploreCard
            href="/projects"
            label="FEATURED PROJECTS"
            title="Selected AI and interaction case studies."
            description="From Copilot 3D to cultural AI experiences, explore the product thinking, prototypes, and launch stories behind the work."
            cta="View Projects"
          >
            <div className="grid gap-3">
              {featuredProjectMedia.map((item, index) => (
                <div
                  key={item.src}
                  className={`relative overflow-hidden rounded-[22px] border border-white/78 bg-[rgba(238,243,255,0.9)] ${
                    index === 0 ? "h-[166px] sm:h-[182px]" : "h-[126px] sm:h-[136px]"
                  }`}
                >
                  {item.type === "video" ? (
                    <>
                      <Image
                        src={item.poster}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 360px, 100vw"
                        quality={92}
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                      <ClientAutoplayVideo
                        src={item.src}
                        poster={item.poster}
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                    </>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, 100vw"
                      quality={92}
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                </div>
              ))}
            </div>
          </ExploreCard>

          <ExploreCard
            href="/career"
            label="CAREER HIGHLIGHTS"
            title="A product path across AI, design, and creative technology."
            description="A quick look at the teams, roles, and product environments that shaped my work."
            cta="View Career"
          >
            <div className="space-y-3">
              {careerPreviewItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-white/74 bg-white/68 px-4 py-4 shadow-[0_12px_30px_rgba(24,48,116,0.05)] transition duration-300 group-hover:bg-white/76"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[12px] shadow-[0_10px_24px_rgba(24,48,116,0.08)]">
                      <Image
                        src={item.logoSrc}
                        alt={item.logoAlt}
                        width={44}
                        height={44}
                        className="h-11 w-11 object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,34,66,0.48)]">
                          {item.date}
                        </p>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(11,34,66,0.42)]">
                          {item.location[locale]}
                        </p>
                      </div>
                      <p className="mt-3 text-lg leading-7 text-ink">{item.role[locale]}</p>
                      <p className="mt-1 text-sm leading-6 text-[rgba(11,34,66,0.68)]">{item.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ExploreCard>

          <ExploreCard
            href="/beyond-work"
            label="BEYOND WORK"
            title="The people, communities, and creative moments beyond the work."
            description="A lighter archive of mentorship, community events, and personal milestones."
            cta="View Beyond Work"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="relative min-h-[220px] overflow-hidden rounded-[24px] border border-white/76 bg-white/70">
                <Image
                  src={beyondWorkPreviewImages[0]}
                  alt="Beyond work preview"
                  fill
                  sizes="(min-width: 1024px) 220px, 50vw"
                  quality={88}
                  className="object-cover object-left transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="grid gap-3">
                {beyondWorkPreviewImages.slice(1).map((src) => (
                  <div
                    key={src}
                    className="relative min-h-[104px] overflow-hidden rounded-[22px] border border-white/76 bg-white/70"
                  >
                    <Image
                      src={src}
                      alt="Beyond work preview"
                      fill
                      sizes="(min-width: 1024px) 180px, 50vw"
                      quality={88}
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ))}
                <div className="rounded-[22px] border border-dashed border-[rgba(11,34,66,0.12)] bg-[rgba(255,255,255,0.58)] px-4 py-4 text-sm leading-7 text-[rgba(11,34,66,0.68)]">
                  Mentorship, team culture, volunteering, and milestones that shaped how I work with people.
                </div>
              </div>
            </div>
          </ExploreCard>
        </div>
      </div>
    </section>
  );
}
