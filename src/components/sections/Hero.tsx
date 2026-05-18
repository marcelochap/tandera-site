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

          <p className="mt-8 font-sans text-[var(--text-small)] text-text-dark-muted">
            Instalação sem parar a produção · Alerta no WhatsApp · Sem alterar a máquina
          </p>
        </div>

        {/* Coluna visual — vídeo em loop */}
        <div className="glow-halo relative">
          <div
            className="relative overflow-hidden rounded-[var(--radius-xl)]
                        border border-ink-border shadow-[var(--shadow-lg)]"
          >
            {/* Vídeo da máquina Poyatos em loop */}
            <video
              src="/video/poyatos-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Máquina Poyatos produzindo blocos de concreto — câmera Tandera em operação"
              className="h-auto w-full object-cover"
              style={{ aspectRatio: "4 / 3" }}
            />

            {/* Overlay: escurece as bordas para o bounding box se destacar */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 35%, rgba(26,26,26,0.5) 100%)",
              }}
              aria-hidden
            />

            {/* Scan line — linha que varre verticalmente em loop */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-aqua/60"
              style={{
                boxShadow: "0 0 8px 1px rgba(30,255,215,0.5)",
                animation: "scan-line 3s linear infinite",
              }}
              aria-hidden
            />

            {/* Bounding box centralizado nos blocos */}
            <DetectionBox
              label="bloco · OK 98%"
              status="pass"
              className="left-[8%] top-[18%] h-[60%] w-[72%]"
            />

            {/* HUD — cantos de câmera */}
            <HudCorners />

            {/* Timestamp de câmera (canto superior direito) */}
            <div
              className="absolute right-3 top-3 font-sans text-[0.65rem] font-medium
                          text-aqua/70 tracking-wider tabular-nums"
              aria-hidden
            >
              REC ● {new Date().toLocaleDateString("pt-BR")}
            </div>

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

      {/* Keyframe da scan line */}
      <style>{`
        @keyframes scan-line {
          0%   { top: 0%; opacity: 1; }
          90%  { top: 100%; opacity: 0.6; }
          100% { top: 0%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="scan-line"] { animation: none; display: none; }
        }
      `}</style>
    </section>
  );
}

function HudCorners() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <span className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-aqua/50 rounded-tl-sm" />
      <span className="absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-aqua/50 rounded-tr-sm" />
      <span className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-aqua/50 rounded-bl-sm" />
      <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-aqua/50 rounded-br-sm" />
    </div>
  );
}
