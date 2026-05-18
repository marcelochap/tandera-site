import Link from "next/link";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  href?: string;
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium " +
  "transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] " +
  "focus-visible:outline-2 focus-visible:outline-aqua focus-visible:outline-offset-2 " +
  "rounded-[var(--radius-pill)] cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-aqua text-ink hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-aqua-soft)]",
  secondary:
    "border border-ink-border text-text-dark hover:border-aqua hover:text-aqua",
  ghost: "text-text-dark hover:text-aqua",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[var(--text-small)]",
  lg: "px-7 py-3.5 text-[var(--text-body)]",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  onClick,
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const cls = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
