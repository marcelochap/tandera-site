import { Section } from "@/components/ui/Section";
import { AlertTriangle, Clock, ThumbsDown } from "lucide-react";

const dores = [
  {
    icon: AlertTriangle,
    title: "A inspeção manual é amostral",
    text: "O operador não consegue checar cada peça que sai da máquina. Defeitos passam batido — e só aparecem depois.",
  },
  {
    icon: Clock,
    title: "O defeito se repete por horas",
    text: "Sem alerta em tempo real, o problema pode continuar por toda uma produção antes de alguém perceber.",
  },
  {
    icon: ThumbsDown,
    title: "O cliente encontra antes de você",
    text: "Reclamação de obra é pior do que refugo interno — gera devolução, retrabalho e perda de reputação.",
  },
];

export function Problema() {
  return (
    <Section tone="light" id="problema">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="eyebrow-on-light mb-4">O custo do controle manual</p>
        <h2 className="font-display font-bold italic text-[clamp(1.75rem,3vw,2.25rem)] text-text-light leading-tight">
          Não espere o cliente encontrar o defeito primeiro.
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {dores.map((d) => (
          <div
            key={d.title}
            className="rounded-[var(--radius-lg)] border border-cloud-border bg-white p-8 shadow-[var(--shadow-sm)]"
          >
            <d.icon
              className="mb-4 h-7 w-7 text-aqua-deep"
              strokeWidth={1.75}
              aria-hidden
            />
            <h3 className="mb-2 font-display font-bold text-[var(--text-h3)] text-text-light">
              {d.title}
            </h3>
            <p className="font-sans text-[var(--text-body)] text-text-light-muted leading-relaxed">
              {d.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
