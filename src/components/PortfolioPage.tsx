import { AboutSection } from "@/components/AboutSection";
import { ExploreMoreSection } from "@/components/ExploreMoreSection";
import { FooterCta } from "@/components/FooterCta";
import { HeroSection } from "@/components/HeroSection";
import { SiteShell } from "@/components/SiteShell";
import { type Locale } from "@/data/site";

export function PortfolioPage() {
  const locale: Locale = "en";

  return (
    <SiteShell locale={locale}>
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <ExploreMoreSection locale={locale} />
      <FooterCta locale={locale} />
    </SiteShell>
  );
}
