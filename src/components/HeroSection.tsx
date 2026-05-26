"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ScrollText } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { pageCopy, siteConfig, type Locale } from "@/data/site";

type HeroSectionProps = {
  locale: Locale;
};

function renderHeadline(text: string, italicWord: string) {
  return text.split("\n").map((line, index) => {
    const parts = line.split(italicWord);
    const includesItalic = line.includes(italicWord);

    return (
      <span key={`${line}-${index}`} className="block">
        {parts[0]}
        {includesItalic ? <em className="font-serif italic">{italicWord}</em> : null}
        {parts[1] ?? ""}
      </span>
    );
  });
}

export function HeroSection({ locale }: HeroSectionProps) {
  const [emailFeedback, setEmailFeedback] = useState<string | null>(null);

  const handleEmailClick = async (event: React.MouseEvent<HTMLElement>) => {
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
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-18"
    >
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative py-8 sm:py-12 lg:py-16"
        >
          <Pill>{pageCopy.hero.eyebrow[locale]}</Pill>
          <h1 className="mt-8 max-w-4xl text-[3.2rem] font-semibold leading-[0.95] tracking-normal text-ink sm:text-[4.3rem] lg:text-[5.75rem]">
            {renderHeadline(
              pageCopy.hero.title[locale],
              pageCopy.hero.italicWord[locale]
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgba(11,34,66,0.74)] sm:text-xl">
            {pageCopy.hero.intro[locale]}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/#about">
              <span className="mr-2">{pageCopy.hero.primaryCta[locale]}</span>
              <ArrowRight size={16} />
            </Button>
            <Button href="/projects" variant="secondary">
              {pageCopy.hero.secondaryCta[locale]}
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={siteConfig.linkedin} external variant="ghost">
              <Linkedin size={15} className="mr-2" />
              LinkedIn
            </Button>
            <Button href={`mailto:${siteConfig.email}`} variant="ghost" onClick={handleEmailClick}>
              <Mail size={15} className="mr-2" />
              Email
            </Button>
            {siteConfig.github ? (
              <Button href={siteConfig.github} external variant="ghost">
                <Github size={15} className="mr-2" />
                GitHub
              </Button>
            ) : null}
            <Button href={siteConfig.resume} variant="ghost">
              <ScrollText size={15} className="mr-2" />
              Resume
            </Button>
          </div>
          {emailFeedback ? (
            <p className="mt-4 text-sm font-medium text-[rgba(11,34,66,0.64)]">{emailFeedback}</p>
          ) : null}
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-[36px] border border-white/65 bg-white/45 p-4 shadow-glass backdrop-blur-2xl">
            <div className="overflow-hidden rounded-[28px] bg-[#ccd7ec]">
              <Image
                src={siteConfig.portrait}
                alt="Portrait of Yixin Xia"
                width={1320}
                height={1980}
                className="h-[520px] w-full object-cover object-center sm:h-[640px]"
                priority
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 rounded-[20px] border border-white/60 bg-white/45 px-5 py-4 backdrop-blur-xl">
              <p className="text-sm font-medium leading-6 text-[rgba(11,34,66,0.72)]">
                {pageCopy.hero.portraitCaption[locale]}
              </p>
              <div className="h-10 w-10 rounded-full border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(176,198,255,0.68),rgba(242,205,255,0.82))]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
