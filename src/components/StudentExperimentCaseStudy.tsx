"use client";
import { motion } from "framer-motion";

import { CaseStudyNavbar } from "@/components/CaseStudyNavbar";
import { Footer } from "@/components/Footer";
import { ProjectDetailFooterNav } from "@/components/ProjectDetailFooterNav";
import { VideoPreviewCard } from "@/components/VideoPreviewCard";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { ZoomableImage } from "@/components/ZoomableImage";
import type { StudentExperimentItem } from "@/data/site";

type StudentExperimentCaseStudyProps = {
  project: StudentExperimentItem;
};

export function StudentExperimentCaseStudy({
  project
}: StudentExperimentCaseStudyProps) {
  const primaryVideo = project.videoLinks[0];
  const secondaryVideos = project.videoLinks.slice(1);

  return (
    <div className="relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_10%_18%,rgba(255,214,189,0.38),transparent_26%),radial-gradient(circle_at_88%_12%,rgba(184,214,255,0.34),transparent_30%),radial-gradient(circle_at_60%_56%,rgba(224,206,255,0.24),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42rem] bg-[radial-gradient(circle_at_14%_82%,rgba(255,202,173,0.34),transparent_28%),radial-gradient(circle_at_84%_88%,rgba(180,204,255,0.36),transparent_30%),radial-gradient(circle_at_72%_58%,rgba(223,201,255,0.24),transparent_26%)]" />
      <CaseStudyNavbar
        backHref="/projects"
        backLabel={`Back to ${project.title} projects`}
        activeHref="/projects"
      />

      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[34px] border border-white/75 bg-white/58 p-5 shadow-[0_26px_86px_rgba(27,51,120,0.08)] backdrop-blur-2xl sm:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
              <div>
                <div className="flex flex-wrap gap-3">
                  <Pill>{project.category}</Pill>
                  <Pill className="bg-white/72">Student Experiment</Pill>
                </div>
                <h1
                  className="mt-6 text-[clamp(2.2rem,4.6vw,4.35rem)] leading-[0.95] tracking-[-0.04em] text-ink"
                  style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
                >
                  {project.heroTitle}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[rgba(11,34,66,0.72)]">
                  {project.heroSubtitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Pill key={tag} className="bg-white/68">
                      {tag}
                    </Pill>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={primaryVideo.href} external>
                    {primaryVideo.label}
                  </Button>
                  {secondaryVideos.map((video) => (
                    <Button key={video.href} href={video.href} external variant="secondary">
                      {video.label}
                    </Button>
                  ))}
                </div>
              </div>

              <VideoPreviewCard
                title={primaryVideo.title}
                description={primaryVideo.description}
                href={primaryVideo.href}
                thumbnailSrc={project.coverSrc}
                thumbnailAlt={project.title}
                embedSrc={primaryVideo.embedSrc}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px] space-y-8">
          {project.sections.map((section, index) => (
            <motion.article
              key={`${project.slug}-${section.eyebrow}-${index}`}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.52, delay: index * 0.03 }}
              className="rounded-[30px] border border-white/72 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_20px_64px_rgba(25,47,110,0.06)] backdrop-blur-2xl sm:p-7"
            >
              <div
                className={`grid gap-8 ${section.imageSrc ? "lg:grid-cols-[0.42fr_0.58fr] lg:items-start" : ""}`}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.46)]">
                    {section.eyebrow}
                  </p>
                  <h2
                    className="mt-4 text-[clamp(1.9rem,3vw,3rem)] leading-[1.02] text-ink"
                    style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}
                  >
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-[rgba(11,34,66,0.72)]">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {section.bullets.map((bullet) => (
                        <Pill key={bullet} className="bg-white/78">
                          {bullet}
                        </Pill>
                      ))}
                    </div>
                  ) : null}
                </div>

                {section.imageSrc ? (
                  <div className="overflow-hidden rounded-[26px] border border-white/76 bg-white/72 shadow-[0_18px_52px_rgba(24,48,116,0.07)]">
                    <div className="relative bg-[rgba(248,246,242,0.72)]">
                      <ZoomableImage
                        src={section.imageSrc}
                        alt={section.imageAlt ?? section.title}
                        imgClassName="block h-auto w-full object-cover"
                      />
                    </div>
                    {section.imageCaption ? (
                      <div className="border-t border-white/65 px-5 py-4">
                        <p className="text-sm leading-7 text-[rgba(11,34,66,0.7)]">
                          {section.imageCaption}
                        </p>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}

          <div className="rounded-[30px] border border-white/72 bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_20px_64px_rgba(25,47,110,0.06)] backdrop-blur-2xl sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.46)]">
              Cover Frame
            </p>
            <h2
              className="mt-4 text-[clamp(1.9rem,3vw,3rem)] leading-[1.02] text-ink"
              style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}
            >
              Final Visual Frame
            </h2>
            <div className="mt-6 overflow-hidden rounded-[26px] border border-white/76 bg-white/72 shadow-[0_18px_52px_rgba(24,48,116,0.07)]">
              <div className="relative">
                <ZoomableImage
                  src={project.coverSrc}
                  alt={project.title}
                  imgClassName="block h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          <ProjectDetailFooterNav />
        </div>
      </section>

      <Footer locale="en" />
    </div>
  );
}
