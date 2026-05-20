type PillProps = {
  children: string;
  className?: string;
};

export function Pill({ children, className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex rounded-full border border-[rgba(11,34,66,0.12)] bg-white/55 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[rgba(11,34,66,0.68)] backdrop-blur-xl ${className}`}
    >
      {children}
    </span>
  );
}
