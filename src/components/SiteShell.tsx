import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { navItems, pageCopy, type Locale } from "@/data/site";

type SiteShellProps = {
  children: ReactNode;
  locale?: Locale;
};

export function SiteShell({ children, locale = "en" }: SiteShellProps) {
  return (
    <div className="relative min-h-screen pt-24">
      <Navbar
        locale={locale}
        navItems={navItems}
        letsTalkLabel={pageCopy.letsTalk[locale]}
      />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
