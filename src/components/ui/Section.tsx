import { clsx } from "clsx";

interface SectionProps {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
  id?: string;
}

export function Section({ children, tone = "dark", className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-16 md:py-24",
        tone === "dark"
          ? "bg-ink text-text-dark"
          : "bg-mist text-text-light",
        className,
      )}
    >
      <div className="container-tandera">{children}</div>
    </section>
  );
}
