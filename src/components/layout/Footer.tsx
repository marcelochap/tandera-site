import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#defeitos",      label: "Defeitos identificados" },
  { href: "#alertas",       label: "Alertas WhatsApp" },
  { href: "#piloto",        label: "Programa Piloto" },
];

export function Footer() {
  return (
    <footer className="bg-ink-deep text-text-dark border-t border-ink-border">
      <div className="container-tandera py-14">

        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <Link href="/" aria-label="Tandera Tech — início">
              <Image
                src="/logo/tandera-lockup-dark.png"
                alt="Tandera Tech"
                width={130}
                height={28}
              />
            </Link>
            <p className="mt-4 font-sans text-[var(--text-small)] text-text-dark-muted leading-relaxed max-w-[28ch]">
              Câmera e inteligência artificial para controle de qualidade de blocos e bloquetes de concreto.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 font-sans text-[var(--text-caption)] font-medium uppercase tracking-widest text-text-dark-muted">
              Navegação
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-[var(--text-small)] text-text-dark-muted
                               transition-colors hover:text-aqua"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="mb-4 font-sans text-[var(--text-caption)] font-medium uppercase tracking-widest text-text-dark-muted">
              Contato
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  className="font-sans text-[var(--text-small)] text-text-dark-muted transition-colors hover:text-aqua"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@tandera.tech"
                  className="font-sans text-[var(--text-small)] text-text-dark-muted transition-colors hover:text-aqua"
                >
                  contato@tandera.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-12 border-t border-ink-border pt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[var(--text-caption)] text-text-dark-muted">
            © {new Date().getFullYear()} Tandera Tech. Todos os direitos reservados.
          </p>
          <p className="font-sans text-[var(--text-caption)] text-text-dark-muted">
            Tecnologia industrial. Feito no Brasil.
          </p>
        </div>

      </div>
    </footer>
  );
}
