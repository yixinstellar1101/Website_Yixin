import { ArrowUpRight, Mail, MessageCircle, ScrollText } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { pageCopy, siteConfig, type Locale } from "@/data/site";

type FooterCtaProps = {
  locale: Locale;
};

export function FooterCta({ locale }: FooterCtaProps) {
  return (
    <section id="contact" className="px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[34px] border border-white/72 bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(242,246,255,0.7),rgba(249,242,238,0.68))] p-6 shadow-glass backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(11,34,66,0.48)]">
                {pageCopy.contact.section[locale]}
              </p>
              <h2
                className="mt-5 text-[clamp(2.1rem,4vw,3.6rem)] leading-[1] tracking-[-0.03em] text-ink"
                style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
              >
                {pageCopy.contact.title[locale]}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[rgba(11,34,66,0.72)]">
                If something here resonates, let&apos;s talk.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group rounded-[24px] border border-white/75 bg-white/68 p-5 shadow-[0_16px_40px_rgba(24,48,116,0.06)] transition hover:-translate-y-1 hover:bg-white/82"
              >
                <div className="flex items-center justify-between gap-3">
                  <Mail className="text-ink" size={19} />
                  <ArrowUpRight className="text-ink transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={17} />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.48)]">
                  Email
                </p>
                <p className="mt-2 text-sm leading-6 text-[rgba(11,34,66,0.74)]">
                  {siteConfig.email}
                </p>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[24px] border border-white/75 bg-white/68 p-5 shadow-[0_16px_40px_rgba(24,48,116,0.06)] transition hover:-translate-y-1 hover:bg-white/82"
              >
                <div className="flex items-center justify-between gap-3">
                  <MessageCircle className="text-ink" size={19} />
                  <ArrowUpRight className="text-ink transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={17} />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.48)]">
                  LinkedIn
                </p>
                <p className="mt-2 text-sm leading-6 text-[rgba(11,34,66,0.74)]">
                  Reach out directly
                </p>
              </a>

              <a
                href={siteConfig.resume}
                className="group rounded-[24px] border border-white/75 bg-white/68 p-5 shadow-[0_16px_40px_rgba(24,48,116,0.06)] transition hover:-translate-y-1 hover:bg-white/82"
              >
                <div className="flex items-center justify-between gap-3">
                  <ScrollText className="text-ink" size={19} />
                  <ArrowUpRight className="text-ink transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={17} />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.48)]">
                  Resume
                </p>
                <p className="mt-2 text-sm leading-6 text-[rgba(11,34,66,0.74)]">
                  Full background
                </p>
              </a>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact">Let&apos;s Talk</Button>
            <Button href="/projects" variant="secondary">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
