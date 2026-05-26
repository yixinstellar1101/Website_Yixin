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
      className={`inline-flex items-center gap-2 rounded-full border border-[rgba(11,34,66,0.12)] bg-white/72 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-white/86 ${className}`}
    >
      Back to Top
      <ArrowUp size={14} />
    </button>
  );
}
