import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#defeitos",      label: "Defeitos identificados" },
  { href: "/#piloto",        label: "Programa Piloto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-border/60 bg-ink/85 backdrop-blur-md">
      <nav className="container-tandera flex h-16 items-center justify-between">
        <Link href="/" aria-label="Tandera Tech — página inicial">
          <Image
            src="/logo/tandera-lockup-light.png"
            alt="Tandera Tech"
            width={140}
            height={30}
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-sans text-[var(--text-small)] text-text-dark-muted
                           transition-colors duration-[var(--dur-base)] hover:text-aqua"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Button href="/#piloto" variant="primary" className="hidden md:inline-flex">
          Quero reduzir perdas
        </Button>

        {/* Mobile menu (client component) */}
        <MobileMenu />
      </nav>
    </header>
  );
}
