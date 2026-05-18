interface DetectionBoxProps {
  label: string;
  className?: string;
  status?: "pass" | "fail";
}

const statusColor: Record<string, string> = {
  pass: "border-aqua text-aqua bg-ink",
  fail: "border-fail text-fail bg-ink",
};

export function DetectionBox({ label, className = "", status = "pass" }: DetectionBoxProps) {
  const colors = statusColor[status];
  const borderColor = status === "pass" ? "border-aqua" : "border-fail";

  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      {/* Cantos em "L" */}
      <span className={`absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 ${borderColor}`} />
      <span className={`absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 ${borderColor}`} />
      <span className={`absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 ${borderColor}`} />
      <span className={`absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 ${borderColor}`} />
      {/* Label */}
      <span
        className={`absolute -top-7 left-0 rounded-[var(--radius-sm)] px-2 py-0.5
                    font-sans text-[var(--text-caption)] font-medium ${colors}`}
      >
        {label}
      </span>
    </div>
  );
}
