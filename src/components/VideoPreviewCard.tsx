"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

type VideoPreviewCardProps = {
  title: string;
  description?: string;
  href: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  className?: string;
};

export function VideoPreviewCard({
  title,
  description,
  href,
  thumbnailSrc,
  thumbnailAlt,
  className = ""
}: VideoPreviewCardProps) {
  return (
    <article
      className={`overflow-hidden rounded-[28px] border border-white/75 bg-[rgba(248,246,242,0.62)] shadow-[0_22px_68px_rgba(26,49,118,0.08)] ${className}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(23,59,120,0.34)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
      >
        <div className="relative aspect-video overflow-hidden bg-[radial-gradient(circle_at_22%_20%,rgba(165,216,255,0.32),transparent_22%),linear-gradient(135deg,#eef6ff,#f9fbff)]">
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt}
            fill
            sizes="(min-width: 1280px) 640px, (min-width: 768px) 50vw, 100vw"
            quality={92}
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,29,56,0.02),rgba(15,29,56,0.28))]" />
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink shadow-[0_14px_32px_rgba(24,48,116,0.12)]">
            <Play size={14} />
            Watch Demo
          </div>
        </div>
        <div className="border-t border-white/65 px-5 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(11,34,66,0.46)]">Video Preview</p>
              <h3
                className="mt-3 text-[1.15rem] leading-7 text-ink"
                style={{ fontFamily: "ABC Ginto Normal Medium, Inter, sans-serif", fontWeight: 500 }}
              >
                {title}
              </h3>
              {description ? (
                <p className="mt-3 text-sm leading-7 text-[rgba(11,34,66,0.72)]">{description}</p>
              ) : null}
            </div>
            <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/88 text-ink shadow-[0_10px_24px_rgba(24,48,116,0.10)] transition duration-300 group-hover:-translate-y-0.5">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
