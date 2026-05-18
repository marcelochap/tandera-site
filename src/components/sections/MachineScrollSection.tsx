"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 240;

const steps = [
  {
    number: "01",
    eyebrow: "Linha de produção",
    title: "Produção automatizada de blocos de concreto.",
    text: "A máquina inicia o ciclo produtivo com precisão, controle e repetibilidade industrial.",
  },
  {
    number: "02",
    eyebrow: "Vibroprensagem",
    title: "Concreto moldado com força controlada.",
    text: "Cada ciclo forma as peças com estabilidade dimensional e acabamento uniforme.",
  },
  {
    number: "03",
    eyebrow: "Saída da máquina",
    title: "As peças avançam pela linha em fluxo contínuo.",
    text: "A produção não para — cada lote sai da máquina pronto para a próxima etapa.",
  },
  {
    number: "04",
    eyebrow: "Câmera Tandera",
    title: "A câmera acompanha cada peça ao sair.",
    text: "Posicionada na linha, a câmera captura a imagem da peça no exato momento em que ela sai da máquina.",
  },
  {
    number: "05",
    eyebrow: "Inteligência artificial",
    title: "A IA analisa o acabamento em milissegundos.",
    text: "O modelo de visão computacional inspeciona cada peça — trinca, bicheira, canto quebrado, superfície irregular.",
  },
  {
    number: "06",
    eyebrow: "Defeito identificado",
    title: "A Tandera não apenas reprova — ela aponta o problema.",
    text: "O sistema identifica o tipo de defeito e registra a imagem, permitindo que a equipe aja imediatamente.",
  },
  {
    number: "07",
    eyebrow: "Alerta em tempo real",
    title: "Quando a IA identifica uma falha, a equipe é avisada na hora.",
    text: "O alerta chega no WhatsApp do operador, encarregado e gestor. Da máquina ao celular em segundos.",
  },
  {
    number: "08",
    eyebrow: "Qualidade garantida",
    title: "Nenhum bloco com defeito chega ao cliente.",
    text: "Com a Tandera na linha, sua fábrica controla a qualidade em tempo real — e protege sua reputação.",
  },
];

function getFramePath(index: number): string {
  return `/scroll-machine/frame_${String(index).padStart(4, "0")}.webp`;
}

export function MachineScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(1);

  const [activeStep, setActiveStep] = useState(0);
  const [loaded, setLoaded] = useState(false);

  /* Pré-carrega todos os frames */
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          imagesRef.current = images;
          setLoaded(true);
          drawFrame(1);
        }
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = images;
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function drawFrame(frameIndex: number) {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex - 1];
    if (!canvas || !ctx || !img?.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    /* Cover: preenche o canvas mantendo proporção */
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = w / h;
    let dw: number, dh: number, ox: number, oy: number;

    if (imgRatio > canvasRatio) {
      dh = h; dw = h * imgRatio;
      ox = (w - dw) / 2; oy = 0;
    } else {
      dw = w; dh = w / imgRatio;
      ox = 0; oy = (h - dh) / 2;
    }

    ctx.drawImage(img, ox, oy, dw, dh);
  }

  useEffect(() => {
    if (!loaded) return;

    function onScroll() {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(Math.abs(rect.top) / scrollable, 0), 1);

      const targetFrame = Math.min(FRAME_COUNT, Math.max(1, Math.ceil(progress * FRAME_COUNT)));
      const stepIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));

      currentFrameRef.current = targetFrame;
      setActiveStep(stepIndex);
      requestAnimationFrame(() => drawFrame(currentFrameRef.current));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  const step = steps[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink-deep text-white"
      style={{ height: "800vh" }}
      aria-label="Como a Tandera funciona na linha de produção"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Canvas: fundo de vídeo por scroll */}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />

        {/* Overlay gradiente */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,26,26,0.88) 0%, rgba(26,26,26,0.55) 55%, rgba(26,26,26,0.15) 100%)",
          }}
          aria-hidden
        />

        {/* Conteúdo textual */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container-tandera">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <p className="eyebrow mb-4 transition-opacity duration-500">
                {step.eyebrow}
              </p>

              {/* Número */}
              <p
                className="mb-3 font-display font-bold italic leading-none text-aqua"
                style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
                aria-hidden
              >
                {step.number}
              </p>

              {/* Título */}
              <h2
                className="mb-5 font-display font-bold italic leading-tight text-text-dark"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                {step.title}
              </h2>

              {/* Texto */}
              <p className="max-w-xl font-sans text-[var(--text-body-lg)] leading-relaxed text-text-dark-muted">
                {step.text}
              </p>

              {/* CTA no último step */}
              {activeStep === steps.length - 1 && (
                <a
                  href="#piloto"
                  className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-pill)]
                             bg-aqua px-7 py-3.5 font-sans font-medium text-ink
                             transition-all duration-[var(--dur-base)] hover:-translate-y-0.5
                             hover:shadow-[var(--shadow-glow-aqua-soft)]"
                >
                  Quero reduzir perdas na minha fábrica
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Indicadores de progresso (dots) */}
        <div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2"
          aria-hidden
        >
          {steps.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeStep ? "2.5rem" : "1rem",
                height: "0.375rem",
                backgroundColor: i === activeStep ? "#1effd7" : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
