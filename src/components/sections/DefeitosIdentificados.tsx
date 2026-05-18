import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";

const defeitos = [
  {
    emoji: "🧱",
    nome: "Peça quebrada ou lascada",
    desc: "Fragmentação visível no corpo do bloco ou bloquete.",
  },
  {
    emoji: "📐",
    nome: "Canto quebrado",
    desc: "Quina com ruptura que compromete o encaixe na alvenaria.",
  },
  {
    emoji: "🔍",
    nome: "Trinca / fissura visível",
    desc: "Linha de fratura superficial ou profunda no concreto.",
  },
  {
    emoji: "⚫",
    nome: "Bicheira / falha de preenchimento",
    desc: "Cavidade ou buraco gerado por falta de concreto na prensagem.",
  },
  {
    emoji: "📏",
    nome: "Acabamento ruim na superfície",
    desc: "Irregularidade, ondulação ou textura fora do padrão esperado.",
  },
];

export function DefeitosIdentificados() {
  return (
    <Section tone="light" id="defeitos">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="eyebrow-on-light mb-4">O que a IA detecta</p>
        <h2 className="font-display font-bold italic text-[clamp(1.75rem,3vw,2.25rem)] text-text-light leading-tight">
          A Tandera não apenas reprova — ela aponta o problema.
        </h2>
        <p className="mt-4 font-sans text-[var(--text-body-lg)] text-text-light-muted">
          Sua equipe recebe o tipo de defeito identificado, não só um "bloqueado". Assim age mais rápido.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {defeitos.map((d) => (
          <div
            key={d.nome}
            className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-cloud-border bg-white p-7 shadow-[var(--shadow-sm)]"
          >
            <span className="text-3xl" aria-hidden>{d.emoji}</span>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display font-bold text-[var(--text-h3)] text-text-light leading-snug">
                {d.nome}
              </h3>
              <StatusBadge status="fail" />
            </div>
            <p className="font-sans text-[var(--text-small)] text-text-light-muted leading-relaxed">
              {d.desc}
            </p>
          </div>
        ))}

        {/* Card "mais defeitos" */}
        <div
          className="flex flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)]
                      border-2 border-dashed border-cloud-border p-7 text-center"
        >
          <p className="font-display font-bold text-[var(--text-h3)] text-text-light-muted">
            + outros em evolução
          </p>
          <p className="font-sans text-[var(--text-small)] text-text-light-muted">
            O modelo é treinado continuamente com novos dados da linha.
          </p>
        </div>
      </div>
    </Section>
  );
}
