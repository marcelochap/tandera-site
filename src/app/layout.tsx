import type { Metadata } from "next";
import { museomoderno, jost, centuryGothic } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tandera Tech — Controle de qualidade com IA para blocos de concreto",
  description:
    "Câmera + inteligência artificial na linha de produção. Identifique defeitos em blocos e bloquetes em tempo real e receba alertas no WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${museomoderno.variable} ${jost.variable} ${centuryGothic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
