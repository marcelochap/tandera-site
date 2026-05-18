import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DetectionBox } from "@/components/ui/DetectionBox";

export function Hero() {
  return (
    <section className="bg-ink text-text-dark overflow-hidden">
      <div className="container-tandera grid items-center gap-12 py-20 md:grid-cols-2 md:py-28 lg:py-32">

        {/* Coluna de texto */}
        <div>
          {/* Pilot badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-[var(--radius-pill)]
                          border border-aqua/30 bg-aqua/8 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua animate-pulse" aria-hidden />
            <span className="font-sans text-[var(--text-caption)] font-medium text-aqua tracking-wide">
              Programa piloto — vagas limitadas
            </span>
          </div>

          <p className="eyebrow mb-4">Visão computacional para o chão de fábrica</p>

          <h1
            className="font-display font-extrabold italic leading-[1.05] tracking-tight
                       text-[clamp(2.25rem,5vw,3.5rem)] text-text-dark"
          >
            Evite que blocos com defeito{" "}
            <span className="text-gradient-brand">cheguem ao cliente.</span>
          </h1>

          <p className="mt-6 max-w-[55ch] font-sans text-[var(--text-body-lg)] text-text-dark-muted leading-relaxed">
            Câmera instalada na linha + inteligência artificial que valida cada peça em tempo real.
            Quando a IA identifica uma falha, sua equipe recebe alerta no WhatsApp — antes que o
            produto ruim saia da fábrica.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/#piloto" variant="primary" size="lg">
              Quero reduzir perdas na minha fábrica
            </Button>
            <Button href="/#como-funciona" variant="secondary" size="lg">
              Ver como funciona
            </Button>
          </div>

          {/* Social proof sutil */}
          <p className="mt-8 font-sans text-[var(--text-small)] text-text-dark-muted">
            Instalação sem parar a produção · Alerta no WhatsApp · Sem alterar a máquina
          </p>
        </div>

        {/* Coluna visual */}
        <div className="glow-halo relative">
          <div
            className="relative overflow-hidden rounded-[var(--radius-xl)]
                        border border-ink-border shadow-[var(--shadow-lg)]"
          >
            <Image
              src="/img/saida-blocos-operador.png"
              alt="Saída de blocos de concreto sendo inspecionados pela câmera da Tandera"
              width={720}
              height={560}
              priority
              className="h-auto w-full object-cover"
            />

            {/* Overlay escuro sutil nas bordas */}
            <div
              className="absolute inset-0 rounded-[var(--radius-xl)]"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 40%, rgba(35,35,35,0.55) 100%)",
              }}
              aria-hidden
            />

            {/* Bounding box de detecção — bloco aprovado */}
            <DetectionBox
              label="bloco · OK 98%"
              status="pass"
              className="left-[15%] top-[20%] h-[40%] w-[35%]"
            />

            {/* Segundo bounding box — segundo bloco */}
            <DetectionBox
              label="bloco · OK 97%"
              status="pass"
              className="left-[55%] top-[30%] h-[38%] w-[33%]"
            />

            {/* HUD — cantos de câmera */}
            <HudCorners />

            {/* Status badge flutuante */}
            <div
              className="absolute bottom-4 left-4 flex items-center gap-2 rounded-[var(--radius-md)]
                          border border-ink-border/80 bg-ink/90 px-3 py-2 backdrop-blur-sm"
              aria-hidden
            >
              <span className="h-2 w-2 rounded-full bg-aqua animate-pulse" />
              <span className="font-sans text-[var(--text-caption)] font-medium text-aqua tracking-wide">
                IA ativa · inspecionando
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/** Cantos de HUD no estilo de visor de câmera */
function HudCorners() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {/* Top-left */}
      <span className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-aqua/50 rounded-tl-sm" />
      {/* Top-right */}
      <span className="absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-aqua/50 rounded-tr-sm" />
      {/* Bottom-left */}
      <span className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-aqua/50 rounded-bl-sm" />
      {/* Bottom-right */}
      <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-aqua/50 rounded-br-sm" />
    </div>
  );
}
