import { Section } from "@/components/ui/Section";
import { CheckCircle2, Wrench, Wifi, MessageCircle } from "lucide-react";

const cards = [
  {
    icon: CheckCircle2,
    titulo: "Sem parar a produção",
    desc: "A câmera é posicionada para acompanhar a saída da peça. A linha não para, o ciclo não muda.",
  },
  {
    icon: Wrench,
    titulo: "Sem alterar a máquina",
    desc: "Nenhuma modificação na vibroprensa ou na esteira. A instalação é externa ao equipamento.",
  },
  {
    icon: Wifi,
    titulo: "Acompanhamento remoto",
    desc: "A equipe Tandera monitora a integração de forma remota durante o período de validação.",
  },
  {
    icon: MessageCircle,
    titulo: "Até 5 números de WhatsApp",
    desc: "Operador, encarregado e gestores recebem alertas diretamente no celular, sem app adicional.",
  },
];

export function InstalacaoSemParar() {
  return (
    <Section tone="light" id="instalacao">
      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Texto */}
        <div>
          <p className="eyebrow-on-light mb-4">Instalação simples</p>
          <h2 className="font-display font-bold italic text-[clamp(1.75rem,3vw,2.25rem)] text-text-light leading-tight mb-6">
            A câmera acompanha sua linha. A produção continua.
          </h2>
          <p className="font-sans text-[var(--text-body-lg)] text-text-light-muted leading-relaxed">
            A principal dúvida de quem conhece a Tandera é: <strong className="text-text-light font-medium">"vai parar minha produção?"</strong>.
            A resposta é não. A instalação é não invasiva e acontece enquanto a fábrica opera.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.titulo}
              className="rounded-[var(--radius-lg)] border border-cloud-border bg-white p-6 shadow-[var(--shadow-sm)]"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center
                              rounded-[var(--radius-md)] bg-aqua/10 border border-aqua/25">
                <c.icon className="h-4 w-4 text-aqua-deep" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mb-1 font-display font-bold text-[var(--text-small)] text-text-light">
                {c.titulo}
              </h3>
              <p className="font-sans text-[var(--text-small)] text-text-light-muted leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
