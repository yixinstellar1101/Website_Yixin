import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { Copilot3DCaseStudy } from "@/components/Copilot3DCaseStudy";
import { CurioCaseStudy } from "@/components/CurioCaseStudy";
import { DisneyLicensingCaseStudy } from "@/components/DisneyLicensingCaseStudy";
import { InsideOutCaseStudy } from "@/components/InsideOutCaseStudy";
import { ShipbuildingDigitalTwinCaseStudy } from "@/components/ShipbuildingDigitalTwinCaseStudy";
import { XiaohongshuCaseStudy } from "@/components/XiaohongshuCaseStudy";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { getProjectBySlug } from "@/data/site";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  if (project.slug === "xiaohongshu") {
    return <XiaohongshuCaseStudy project={project} />;
  }

  if (project.slug === "copilot-3d") {
    return <Copilot3DCaseStudy project={project} />;
  }

  if (project.slug === "curio") {
    return (
      <CurioCaseStudy
        project={project}
        videoSrc="https://youtu.be/FVQatjoiDss?si=PnKBZHfrpXgh3271"
      />
    );
  }

  if (project.slug === "inside-out-h5") {
    return <InsideOutCaseStudy project={project} />;
  }

  if (project.slug === "disney-spring-sketchbook") {
    return <DisneyLicensingCaseStudy project={project} />;
  }

  if (project.slug === "shipyard-digital-twin") {
    return <ShipbuildingDigitalTwinCaseStudy project={project} />;
  }

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1040px]">
        <div className="rounded-[32px] border border-white/70 bg-white/45 p-6 shadow-glass backdrop-blur-2xl sm:p-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(11,34,66,0.68)] transition hover:text-ink"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div
            className={`mt-8 overflow-hidden rounded-[30px] border border-white/70 bg-gradient-to-br ${project.gradient} p-6 sm:p-8`}
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_400px] lg:items-center">
              <div>
                <div className="flex flex-wrap gap-3">
                  <Pill>{project.date}</Pill>
                  <Pill>{project.category.en}</Pill>
                </div>
                <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal text-ink sm:text-6xl">
                  {project.title.en}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[rgba(11,34,66,0.74)]">
                  {project.overview.en}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Pill key={tag} className="bg-white/68">
                      {tag}
                    </Pill>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-white/75 bg-white/60 shadow-[0_24px_70px_rgba(255,255,255,0.28)]">
                <div className="relative aspect-[4/3]">
                  <ZoomableImage
                    src={project.coverSrc}
                    alt={project.title.en}
                    className="h-full"
                    imgClassName="h-full w-full object-cover"
                  />
                </div>
                <div className="border-t border-white/60 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.48)]">
                    Project Snapshot
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[rgba(11,34,66,0.72)]">
                    {project.mediaLabel.en}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[26px] border border-white/65 bg-white/55 p-6 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(11,34,66,0.48)]">
                Overview
              </p>
              <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                {project.description.en}
              </p>
            </article>
            <article className="rounded-[26px] border border-white/65 bg-white/55 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(11,34,66,0.48)]">
                Problem
              </p>
              <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                {project.problem.en}
              </p>
            </article>
            <article className="rounded-[26px] border border-white/65 bg-white/55 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(11,34,66,0.48)]">
                My role
              </p>
              <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                {project.role.en}
              </p>
            </article>
          </div>

          <article className="mt-6 rounded-[26px] border border-white/65 bg-white/55 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(11,34,66,0.48)]">
              Product decisions
            </p>
            <div className="mt-4 space-y-3">
              {project.decisions.en.map((decision) => (
                <p
                  key={decision}
                  className="rounded-[18px] border border-white/60 bg-white/65 px-4 py-4 text-base leading-7 text-[rgba(11,34,66,0.72)]"
                >
                  {decision}
                </p>
              ))}
            </div>
          </article>

          <article className="mt-6 rounded-[26px] border border-white/65 bg-white/55 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(11,34,66,0.48)]">
              Impact
            </p>
            <p className="mt-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
              {project.impact.en}
            </p>
          </article>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/">Back Home</Button>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,34,66,0.12)] bg-white/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition hover:bg-white/80"
            >
              Resume
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
