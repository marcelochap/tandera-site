import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MachineScrollSection } from "@/components/sections/MachineScrollSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MachineScrollSection />
        {/* Próximas seções serão adicionadas nas fases seguintes */}
      </main>
    </>
  );
}
