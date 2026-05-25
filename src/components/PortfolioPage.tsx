"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { AboutSection } from "@/components/AboutSection";
import { BeyondWorkSection } from "@/components/BeyondWorkSection";
import { CareerTimeline } from "@/components/CareerTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar, type PageView } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { navItems, pageCopy, type Locale } from "@/data/site";

const views: PageView[] = ["home", "about", "career", "projects", "beyond-work", "contact"];

const viewFromHash = (hash: string): PageView => {
  const normalized = hash.replace("#", "") as PageView;
  return views.includes(normalized) ? normalized : "home";
};

export function PortfolioPage() {
  const locale: Locale = "en";
  const [activeView, setActiveView] = useState<PageView>("home");
  const pendingAnchorRef = useRef<"about" | "beyond-work" | null>(null);

  useEffect(() => {
    const initialView = viewFromHash(window.location.hash);
    setActiveView(initialView);

    if (initialView === "about" || initialView === "beyond-work") {
      pendingAnchorRef.current = initialView;
    }

    const syncHash = () => {
      const nextView = viewFromHash(window.location.hash);
      setActiveView(nextView);

      if (nextView === "about" || nextView === "beyond-work") {
        pendingAnchorRef.current = nextView;
      }
    };

    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const navigateTo = (view: PageView) => {
    if (view === "about" || view === "beyond-work") {
      pendingAnchorRef.current = view;
      setActiveView(view);
      window.history.pushState(null, "", `#${view}`);
      return;
    }

    pendingAnchorRef.current = null;
    setActiveView(view);
    window.history.pushState(null, "", view === "home" ? "/" : `#${view}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const targetId = pendingAnchorRef.current;
    if (!targetId) return;

    let attempts = 0;
    let timeoutId = 0;

    const scrollWhenReady = () => {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        pendingAnchorRef.current = null;
        return;
      }

      if (attempts < 18) {
        attempts += 1;
        timeoutId = window.setTimeout(scrollWhenReady, 40);
      }
    };

    timeoutId = window.setTimeout(scrollWhenReady, 40);

    return () => window.clearTimeout(timeoutId);
  }, [activeView]);

  const renderView = () => {
    switch (activeView) {
      case "career":
        return <CareerTimeline locale={locale} />;
      case "projects":
        return <ProjectsSection locale={locale} />;
      case "contact":
        return <ContactSection locale={locale} />;
      default:
        return (
          <>
            <HeroSection locale={locale} onNavigate={navigateTo} />
            <AboutSection locale={locale} />
            <BeyondWorkSection />
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen pt-24">
      <Navbar
        locale={locale}
        navItems={navItems}
        activeView={activeView}
        letsTalkLabel={pageCopy.letsTalk[locale]}
        onNavigate={navigateTo}
      />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.36, ease: "easeOut" }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
