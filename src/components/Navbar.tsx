"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MoreHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import type { Locale, NavItem } from "@/data/site";

export type PageView = "home" | "about" | "career" | "projects" | "beyond-work" | "contact";

type NavbarProps = {
  locale: Locale;
  navItems: NavItem[];
  letsTalkLabel: string;
  activeView: PageView;
  onNavigate: (view: PageView) => void;
};

const viewFromHref = (href: string): PageView => href.replace("#", "") as PageView;

export function Navbar({
  locale,
  navItems,
  letsTalkLabel,
  activeView,
  onNavigate
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [progress, setProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);

  useEffect(() => {
    const syncViewport = () => setViewportWidth(window.innerWidth);

    syncViewport();
    window.addEventListener("resize", syncViewport);

    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  useEffect(() => {
    if (!open) return;

    const timer = window.setTimeout(() => setOpen(false), 8000);
    return () => window.clearTimeout(timer);
  }, [open, activeView]);

  useEffect(() => {
    const updateScrollState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      setCompact(window.scrollY > 72);
      setProgress(Math.min(1, Math.max(0.04, nextProgress)));
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, [activeView]);

  useEffect(() => {
    if (!compact) {
      setOpen(false);
    }
  }, [compact]);

  const goTo = (view: PageView) => {
    setOpen(false);
    onNavigate(view);
  };

  const navButtonClass = (view: PageView) =>
    `text-xs font-semibold uppercase tracking-[0.2em] transition ${
      activeView === view ? "text-ink" : "text-[rgba(11,34,66,0.58)] hover:text-ink"
    }`;

  const compactWidth = viewportWidth < 640 ? 212 : 252;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed left-0 top-0 z-[60] h-[3px] w-full bg-[rgba(11,34,66,0.08)]">
        <motion.div
          className="h-full origin-left bg-ink"
          animate={{ scaleX: progress }}
          transition={{ duration: 0.16, ease: "easeOut" }}
        />
      </div>

      <div className="mx-auto max-w-[1280px]">
        <div className="relative h-[92px]">
          <motion.div
            className="pointer-events-auto absolute left-1/2 top-0 w-[calc(100vw-32px)] max-w-[1280px] -translate-x-1/2 rounded-[30px] border border-white/80 bg-[rgba(251,248,244,0.82)] shadow-glass backdrop-blur-2xl transition-[width,border-radius] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[calc(100vw-48px)] lg:w-[calc(100vw-64px)]"
            style={{
              width: compact ? compactWidth : undefined,
              borderRadius: compact ? 999 : 30
            }}
          >
            <div className="relative flex h-[72px] items-center overflow-visible px-5">
              <button
                type="button"
                onClick={() => goTo("home")}
                className="shrink-0 text-[1.72rem] font-semibold tracking-[-0.035em] text-ink transition-opacity hover:opacity-80"
                style={{ fontFamily: "ABC Ginto Career, Inter, sans-serif" }}
              >
                Yixin Xia
              </button>

              {!compact ? (
                <>
                  <nav className="mx-5 hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-7">
                    {navItems.map((item) => {
                      const view = viewFromHref(item.href);

                      return (
                        <button
                          key={item.href}
                          type="button"
                          onClick={() => goTo(view)}
                          className={navButtonClass(view)}
                        >
                          {item.label[locale]}
                        </button>
                      );
                    })}
                  </nav>

                  <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
                    <Button onClick={() => goTo("contact")}>{letsTalkLabel}</Button>
                  </div>

                  <div className="ml-auto flex items-center gap-2 lg:hidden">
                    <button
                      type="button"
                      onClick={() => setOpen((current) => !current)}
                      className="rounded-full border border-[rgba(11,34,66,0.12)] bg-white/50 p-[11px] text-ink"
                      aria-label="Toggle menu"
                    >
                      {open ? <X size={17} /> : <Menu size={17} />}
                    </button>
                  </div>
                </>
              ) : (
                <motion.div
                  className="ml-auto flex shrink-0 items-center"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen((current) => !current)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(11,34,66,0.12)] bg-white/78 text-ink transition hover:-translate-y-0.5 hover:bg-white"
                    aria-label="Open navigation"
                  >
                    {open ? <X size={16} /> : <MoreHorizontal size={17} />}
                  </button>
                </motion.div>
              )}
            </div>

            <AnimatePresence>
              {open ? (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 360, damping: 28 }
                  }}
                  exit={{ opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.16 } }}
                  className={`absolute right-0 top-[calc(100%+12px)] w-[min(320px,calc(100vw-32px))] rounded-[24px] border border-white/80 bg-[rgba(251,248,244,0.96)] p-3 shadow-[0_28px_60px_rgba(18,31,58,0.16)] backdrop-blur-2xl ${
                    compact ? "" : "lg:hidden"
                  }`}
                >
                  <div className="grid gap-2">
                    <button
                      type="button"
                      onClick={() => goTo("home")}
                      className={navButtonClass("home") + " rounded-full px-4 py-3 text-left"}
                    >
                      HOME
                    </button>
                    {navItems.map((item) => {
                      const view = viewFromHref(item.href);

                      return (
                        <button
                          key={item.href}
                          type="button"
                          onClick={() => goTo(view)}
                          className={navButtonClass(view) + " rounded-full px-4 py-3 text-left"}
                        >
                          {item.label[locale]}
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      onClick={() => goTo("contact")}
                      className={navButtonClass("contact") + " rounded-full px-4 py-3 text-left"}
                    >
                      {letsTalkLabel}
                    </button>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
