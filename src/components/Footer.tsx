import { pageCopy, type Locale } from "@/data/site";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 rounded-[28px] border border-white/60 bg-white/35 px-6 py-5 text-center shadow-glass backdrop-blur-2xl sm:flex-row sm:text-left">
        <p className="text-sm text-[rgba(11,34,66,0.62)]">{pageCopy.footer[locale]}</p>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(11,34,66,0.44)]">
          Yixin Xia
        </p>
      </div>
    </footer>
  );
}
