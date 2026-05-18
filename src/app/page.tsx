import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { DefeitosIdentificados } from "@/components/sections/DefeitosIdentificados";
import { AlertasTempoReal } from "@/components/sections/AlertasTempoReal";
import { InstalacaoSemParar } from "@/components/sections/InstalacaoSemParar";
import { ProgramaPiloto } from "@/components/sections/ProgramaPiloto";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <ComoFunciona />
        <DefeitosIdentificados />
        <AlertasTempoReal />
        <InstalacaoSemParar />
        <ProgramaPiloto />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
