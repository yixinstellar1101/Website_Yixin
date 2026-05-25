"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { AboutSection } from "@/components/AboutSection";
import { CareerTimeline } from "@/components/CareerTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar, type PageView } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { navItems, pageCopy, type Locale } from "@/data/site";

const views: PageView[] = ["home", "about", "career", "projects", "contact"];

const viewFromHash = (hash: string): PageView => {
  const normalized = hash.replace("#", "") as PageView;
  return views.includes(normalized) ? normalized : "home";
};

export function PortfolioPage() {
  const locale: Locale = "en";
  const [activeView, setActiveView] = useState<PageView>("home");

  useEffect(() => {
    setActiveView(viewFromHash(window.location.hash));

    const syncHash = () => setActiveView(viewFromHash(window.location.hash));
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const navigateTo = (view: PageView) => {
    if (view === "about") {
      setActiveView("home");
      window.history.pushState(null, "", "#about");
      window.setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return;
    }

    setActiveView(view);
    window.history.pushState(null, "", view === "home" ? "/" : `#${view}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
