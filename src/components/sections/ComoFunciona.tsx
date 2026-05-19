import { Section } from "@/components/ui/Section";
import { Camera, Cpu, Smartphone } from "lucide-react";

const passos = [
  {
    icon: Camera,
    titulo: "A câmera capta",
    desc: "Filma cada peça na saída da máquina, sem alterar o fluxo da linha.",
  },
  {
    icon: Cpu,
    titulo: "A IA valida",
    desc: "Analisa cada imagem e detecta trinca, bicheira, canto quebrado e mais.",
  },
  {
    icon: Smartphone,
    titulo: "A equipe é avisada",
    desc: "Aprovado ou reprovado na hora — operador, encarregado e gestor avisados em segundos.",
  },
];

export function ComoFunciona() {
  return (
    <Section tone="dark" id="como-funciona">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="eyebrow mb-4">Como funciona</p>
        <h2 className="font-display font-bold italic text-[clamp(1.75rem,3vw,2.25rem)] text-text-dark leading-tight">
          Da máquina ao veredito em segundos.
        </h2>
        <p className="mt-4 font-sans text-[var(--text-body-lg)] text-text-dark-muted">
          Três etapas simples. Sem parar a produção. Sem alterar a máquina.
        </p>
      </div>

      <ol className="grid gap-6 md:grid-cols-3">
        {passos.map((p, i) => (
          <li
            key={p.titulo}
            className="relative rounded-[var(--radius-lg)] border border-ink-border bg-ink-raised p-8"
          >
            {/* Linha conectora entre cards (desktop) */}
            {i < passos.length - 1 && (
              <span
                className="hidden md:block absolute top-12 -right-3 w-6 h-px bg-ink-border z-10"
                aria-hidden
              />
            )}

            <span className="font-display font-bold italic text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-aqua">
              {String(i + 1).padStart(2, "0")}
            </span>

            <p.icon
              className="mt-4 h-6 w-6 text-aqua"
              strokeWidth={1.75}
              aria-hidden
            />

            <h3 className="mt-4 font-display font-bold text-[var(--text-h3)] text-text-dark">
              {p.titulo}
            </h3>
            <p className="mt-2 font-sans text-[var(--text-body)] text-text-dark-muted leading-relaxed">
              {p.desc}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
