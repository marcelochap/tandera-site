type Status = "pass" | "fail" | "warn";

const map: Record<Status, { label: string; dot: string; text: string }> = {
  pass: { label: "Aprovado",  dot: "bg-pass",  text: "text-pass" },
  fail: { label: "Reprovado", dot: "bg-fail",  text: "text-fail" },
  warn: { label: "Revisar",   dot: "bg-warn",  text: "text-warn" },
};

export function StatusBadge({ status }: { status: Status }) {
  const s = map[status];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-ink-border
                  bg-ink-raised px-3 py-1 font-sans text-[var(--text-caption)] font-medium uppercase
                  tracking-wide ${s.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden />
      {s.label}
    </span>
  );
}
