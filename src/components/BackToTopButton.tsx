"use client";

import { ArrowUp } from "lucide-react";

type BackToTopButtonProps = {
  className?: string;
};

export function BackToTopButton({ className = "" }: BackToTopButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/80 ${className}`}
    >
      Back to Top
      <ArrowUp size={14} />
    </button>
  );
}
