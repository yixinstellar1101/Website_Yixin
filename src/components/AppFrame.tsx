"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type AppFrameProps = {
  children: ReactNode;
};

export function AppFrame({ children }: AppFrameProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={`${pathname}-veil`}
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0.24 }}
          animate={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0.12 }}
          transition={{
            duration: prefersReducedMotion ? 0.18 : 0.48,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.84),rgba(242,246,255,0.28)_42%,rgba(248,243,238,0.14)_70%,transparent)]"
        />
      </AnimatePresence>

      {children}
    </>
  );
}
