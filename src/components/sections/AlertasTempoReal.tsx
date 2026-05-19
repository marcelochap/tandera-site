import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Zap, Users, Clock } from "lucide-react";

const bullets = [
  {
    icon: Zap,
    title: "Alerta imediato",
    text: "Da câmera ao WhatsApp em poucos segundos — antes que a próxima peça saia da máquina.",
  },
  {
    icon: Users,
    title: "Até 5 números",
    text: "Operador, encarregado e gestor avisados ao mesmo tempo. Sem telefone fixo, sem grito de chão de fábrica.",
  },
  {
    icon: Clock,
    title: "Histórico completo",
    text: "Cada alerta fica registrado no painel com foto, tipo de defeito, horário e lote de produção.",
  },
];

export function AlertasTempoReal() {
  return (
    <Section tone="dark" id="alertas">
      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Imagem WhatsApp */}
        <div className="glow-halo relative flex justify-center">
          <div className="relative max-w-xs w-full rounded-[var(--radius-xl)] overflow-hidden border border-ink-border shadow-[var(--shadow-lg)]">
            <Image
              src="/img/whatsapp-alerta-real.png"
              alt="Alerta de defeito no WhatsApp enviado pela Tandera em tempo real"
              width={400}
              height={700}
              className="h-auto w-full"
            />
            {/* Badge "tempo real" */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-[var(--radius-pill)]
                            bg-aqua/15 border border-aqua/40 px-3 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua animate-pulse" aria-hidden />
              <span className="font-sans text-[var(--text-caption)] font-medium text-aqua tracking-wide">
                tempo real
              </span>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div>
          <p className="eyebrow mb-4">Alertas em tempo real</p>
          <h2 className="font-display font-bold italic text-[clamp(1.75rem,3vw,2.25rem)] text-text-dark leading-tight mb-6">
            Quando o defeito aparece, a equipe sabe na hora.
          </h2>
          <p className="font-sans text-[var(--text-body-lg)] text-text-dark-muted leading-relaxed mb-10">
            A Tandera avisa quem pode resolver — sem depender de alguém olhando para a linha.
          </p>

          <ul className="flex flex-col gap-6">
            {bullets.map((b) => (
              <li key={b.title} className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center
                                rounded-[var(--radius-md)] bg-aqua/10 border border-aqua/20">
                  <b.icon className="h-4 w-4 text-aqua" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <p className="font-sans font-medium text-text-dark">{b.title}</p>
                  <p className="mt-1 font-sans text-[var(--text-small)] text-text-dark-muted leading-relaxed">
                    {b.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </Section>
  );
}
