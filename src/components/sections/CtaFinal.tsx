import { Button } from "@/components/ui/Button";

export function CtaFinal() {
  return (
    <section className="bg-ink text-text-dark">
      <div className="container-tandera py-20 md:py-28 text-center">

        <div className="relative inline-block w-full max-w-2xl mx-auto">
          {/* Glow de fundo */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            <div
              style={{
                width: "500px",
                height: "200px",
                background: "radial-gradient(ellipse, rgba(30,255,215,0.15) 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />
          </div>

          <h2 className="relative font-display font-bold italic leading-tight
                         text-[clamp(1.75rem,3.5vw,2.5rem)] text-text-dark mb-5">
            Pronto para testar IA no controle de qualidade da sua fábrica?
          </h2>

          <p className="relative font-sans text-[var(--text-body-lg)] text-text-dark-muted
                         max-w-xl mx-auto leading-relaxed mb-10">
            Participe do Programa Piloto Tandera e veja como a visão computacional pode ajudar
            sua equipe a identificar defeitos antes que eles cheguem ao cliente.
          </p>

          <div className="relative flex flex-wrap items-center justify-center gap-4">
            <Button
              href="https://wa.me/5500000000000?text=Olá,%20quero%20reduzir%20perdas%20na%20minha%20fábrica%20com%20a%20Tandera"
              variant="primary"
              size="lg"
            >
              Quero reduzir perdas na minha fábrica
            </Button>
            <Button
              href="https://wa.me/5500000000000?text=Olá,%20quero%20falar%20com%20a%20Tandera"
              variant="secondary"
              size="lg"
            >
              Falar com a Tandera
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
