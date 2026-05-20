import type { Locale } from "@/data/site";

type SectionHeadingProps = {
  locale: Locale;
  section: Record<Locale, string>;
  title: Record<Locale, string>;
  subtitle?: Record<Locale, string>;
};

export function SectionHeading({
  locale,
  section,
  title,
  subtitle
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[rgba(11,34,66,0.5)]">
        {section[locale]}
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
        {title[locale]}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[rgba(11,34,66,0.68)]">
          {subtitle[locale]}
        </p>
      ) : null}
    </div>
  );
}
