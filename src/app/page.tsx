import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Próximas seções serão adicionadas nas fases seguintes */}
      </main>
    </>
  );
}
