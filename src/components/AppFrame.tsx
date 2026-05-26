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
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0.18 }}
          animate={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0.08 }}
          transition={{
            duration: prefersReducedMotion ? 0.18 : 0.55,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.84),rgba(242,246,255,0.28)_42%,rgba(248,243,238,0.14)_70%,transparent)]"
        />
      </AnimatePresence>

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: prefersReducedMotion ? 0 : 0.78 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: prefersReducedMotion ? 0 : 0.82 }}
          transition={{
            duration: prefersReducedMotion ? 0.2 : 0.42,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
