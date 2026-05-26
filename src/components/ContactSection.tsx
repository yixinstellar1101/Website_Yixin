"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, ScrollText } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageCopy, siteConfig, type Locale } from "@/data/site";

type ContactSectionProps = {
  locale: Locale;
};

export function ContactSection({ locale }: ContactSectionProps) {
  const [emailFeedback, setEmailFeedback] = useState<string | null>(null);

  const handleEmailClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setEmailFeedback(`Copied: ${siteConfig.email}`);
    } catch {
      setEmailFeedback(`Email: ${siteConfig.email}`);
    }

    window.location.href = `mailto:${siteConfig.email}`;
    window.setTimeout(() => setEmailFeedback(null), 2400);
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[34px] border border-white/65 bg-[linear-gradient(135deg,rgba(255,255,255,0.68),rgba(239,243,255,0.58))] p-8 shadow-glass backdrop-blur-2xl sm:p-10"
          >
            <SectionHeading
              locale={locale}
              section={pageCopy.contact.section}
              title={pageCopy.contact.title}
              subtitle={pageCopy.contact.subtitle}
            />
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[34px] border border-white/65 bg-white/42 p-8 shadow-glass backdrop-blur-2xl sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.48)]">
              {pageCopy.contact.cardTitle[locale]}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[rgba(11,34,66,0.72)]">
              {pageCopy.contact.cardBody[locale]}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href={`mailto:${siteConfig.email}`}
                onClick={handleEmailClick}
                className="group rounded-[24px] border border-white/70 bg-white/55 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <div className="flex items-center justify-between">
                  <Mail className="text-ink" />
                  <ArrowUpRight className="text-ink transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-5 text-xl font-semibold tracking-normal text-ink">
                  {pageCopy.contact.email[locale]}
                </p>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[24px] border border-white/70 bg-white/55 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <div className="flex items-center justify-between">
                  <Linkedin className="text-ink" />
                  <ArrowUpRight className="text-ink transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-5 text-xl font-semibold tracking-normal text-ink">
                  {pageCopy.contact.linkedin[locale]}
                </p>
              </a>

              <a
                href={siteConfig.resume}
                className="group rounded-[24px] border border-white/70 bg-white/55 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <div className="flex items-center justify-between">
                  <ScrollText className="text-ink" />
                  <ArrowUpRight className="text-ink transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-5 text-xl font-semibold tracking-normal text-ink">
                  {pageCopy.contact.resume[locale]}
                </p>
              </a>
            </div>

            {emailFeedback ? (
              <p className="mt-5 text-sm font-medium text-[rgba(11,34,66,0.64)]">{emailFeedback}</p>
            ) : null}

            {siteConfig.github ? (
              <div className="mt-8">
                <Button href={siteConfig.github} external variant="ghost">
                  <Github size={15} className="mr-2" />
                  {pageCopy.contact.github[locale]}
                </Button>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
