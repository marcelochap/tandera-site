import { Button } from "@/components/ui/Button";

export function ProgramaPiloto() {
  return (
    <section className="bg-ink-deep text-text-dark" id="piloto">
      <div className="container-tandera py-20 md:py-28">

        {/* Glow central */}
        <div className="relative text-center">
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            <div
              style={{
                width: "600px",
                height: "300px",
                background: "radial-gradient(ellipse, rgba(30,255,215,0.12) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>

          <p className="eyebrow mb-5 relative">Programa Piloto Tandera</p>

          <h2 className="relative font-display font-bold italic leading-tight
                         text-[clamp(1.75rem,3.5vw,2.5rem)] text-text-dark max-w-3xl mx-auto mb-6">
            Seja uma das primeiras fábricas a usar IA no controle de qualidade do concreto.
          </h2>

          <p className="relative font-sans text-[var(--text-body-lg)] text-text-dark-muted
                         max-w-2xl mx-auto leading-relaxed mb-4">
            A Tandera está selecionando fábricas para validar a tecnologia em produção real — com condição especial e acompanhamento próximo.
          </p>

          <p className="relative font-sans text-[var(--text-small)] text-aqua mb-10">
            Vagas limitadas para o ciclo atual de validação.
          </p>

          {/* CTA */}
          <div className="relative flex flex-wrap items-center justify-center gap-4">
            <Button
              href="https://wa.me/5500000000000?text=Olá,%20quero%20participar%20do%20Programa%20Piloto%20Tandera"
              variant="primary"
              size="lg"
            >
              Quero participar do piloto
            </Button>
            <Button href="#como-funciona" variant="secondary" size="lg">
              Ver como funciona
            </Button>
          </div>

          {/* Detalhes do piloto */}
          <div className="relative mt-16 grid gap-6 sm:grid-cols-3 text-left max-w-3xl mx-auto">
            {[
              { label: "Condição especial", desc: "Acesso ao sistema com custo reduzido durante a validação." },
              { label: "Suporte próximo", desc: "Equipe Tandera acompanha de perto cada etapa do piloto." },
              { label: "Sem risco", desc: "Instalação não invasiva, sem alterar sua linha de produção." },
            ].map((item) => (
              <div key={item.label} className="rounded-[var(--radius-lg)] border border-ink-border bg-ink-raised p-6">
                <p className="font-sans font-medium text-aqua text-[var(--text-small)] mb-1">{item.label}</p>
                <p className="font-sans text-[var(--text-small)] text-text-dark-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
