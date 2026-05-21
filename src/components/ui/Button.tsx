import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
};

const variants = {
  primary:
    "bg-ink text-white shadow-[0_20px_45px_rgba(11,34,66,0.18)] hover:-translate-y-0.5 hover:bg-[#091d39]",
  secondary:
    "border border-white/60 bg-white/60 text-ink backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/80",
  ghost:
    "border border-[rgba(11,34,66,0.12)] bg-white/30 text-ink backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/50"
};

function Base({
  children,
  variant = "primary",
  className = ""
}: Pick<ButtonProps, "children" | "variant" | "className">) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  external,
  onClick
}: ButtonProps) {
  if (!href) {
    return (
      <button
        type="button"
        onClick={onClick as MouseEventHandler<HTMLButtonElement>}
        className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 ${variants[variant]} ${className ?? ""}`}
      >
        {children}
      </button>
    );
  }

  const isNativeAnchor = href.startsWith("mailto:") || href.startsWith("tel:");

  if (external || isNativeAnchor) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        <Base variant={variant} className={className}>
          {children}
        </Base>
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick as MouseEventHandler<HTMLAnchorElement>}>
      <Base variant={variant} className={className}>
        {children}
      </Base>
    </Link>
  );
}
