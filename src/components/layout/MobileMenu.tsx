"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#piloto",        label: "Programa Piloto" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="flex md:hidden items-center justify-center p-2 text-text-dark
                   hover:text-aqua transition-colors focus-visible:outline-2
                   focus-visible:outline-aqua focus-visible:outline-offset-2"
      >
        <Menu size={24} strokeWidth={1.75} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink-deep md:hidden">
          <div className="flex h-16 items-center justify-end px-6">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="p-2 text-text-dark hover:text-aqua transition-colors
                         focus-visible:outline-2 focus-visible:outline-aqua focus-visible:outline-offset-2"
            >
              <X size={24} strokeWidth={1.75} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-2xl text-text-dark hover:text-aqua transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Button
              href="/api/whatsapp?text=Olá, quero reduzir perdas na minha fábrica com a Tandera"
              variant="primary"
              size="lg"
              className="mt-4"
              onClick={() => setOpen(false)}
            >
              Quero reduzir perdas
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
