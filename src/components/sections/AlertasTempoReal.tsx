import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { CheckCircle2, Wrench, Wifi } from "lucide-react";

const cards = [
  {
    icon: CheckCircle2,
    titulo: "Sem parar a produção",
    desc: "Câmera posicionada na saída — linha e ciclo não mudam.",
  },
  {
    icon: Wrench,
    titulo: "Sem alterar a máquina",
    desc: "Instalação externa à vibroprensa e à esteira.",
  },
  {
    icon: Wifi,
    titulo: "Acompanhamento remoto",
    desc: "Equipe Tandera monitora a integração de forma remota.",
  },
];

export function AlertasTempoReal() {
  return (
    <Section tone="light" id="alertas">
      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Imagem WhatsApp */}
        <div className="relative flex justify-center">
          <div className="relative max-w-xs w-full rounded-[var(--radius-xl)] overflow-hidden border border-cloud-border shadow-[var(--shadow-lg)]">
            <Image
              src="/img/whatsapp-alerta-real.png"
              alt="Alerta de defeito no WhatsApp enviado pela Tandera"
              width={400}
              height={700}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Texto + cards */}
        <div>
          <p className="eyebrow-on-light mb-4">Alertas em tempo real</p>
          <h2 className="font-display font-bold italic text-[clamp(1.75rem,3vw,2.25rem)] text-text-light leading-tight mb-4">
            Quando o defeito aparece, a equipe sabe na hora.
          </h2>
          <p className="font-sans text-[var(--text-body-lg)] text-text-light-muted leading-relaxed mb-8">
            A Tandera avisa quem pode resolver — sem depender de alguém olhando para a linha.
          </p>

          <ul className="flex flex-col gap-3">
            {cards.map((c) => (
              <li
                key={c.titulo}
                className="flex items-center gap-4 rounded-[var(--radius-lg)]
                           border border-cloud-border bg-white px-5 py-4 shadow-[var(--shadow-sm)]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center
                                rounded-[var(--radius-md)] bg-aqua/10 border border-aqua/25">
                  <c.icon className="h-4 w-4 text-aqua-deep" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <p className="font-display font-bold text-[var(--text-small)] text-text-light">
                    {c.titulo}
                  </p>
                  <p className="font-sans text-[var(--text-caption)] text-text-light-muted leading-relaxed">
                    {c.desc}
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
