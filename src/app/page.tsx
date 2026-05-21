import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { AlertasTempoReal } from "@/components/sections/AlertasTempoReal";
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
        <AlertasTempoReal />
        <ProgramaPiloto />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
