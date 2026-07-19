"use client";

import { LocaleToggle } from "@/components/LocaleToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useContent } from "@/lib/locale";

export function Header() {
  const { ui } = useContent();

  const navLinks = [
    { href: "#sobre", label: ui.nav.about },
    { href: "#experiencia", label: ui.nav.experience },
    { href: "#formacao", label: ui.nav.education },
    { href: "#projetos", label: ui.nav.projects },
    { href: "#stack", label: ui.nav.stack },
    { href: "#contato", label: ui.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#topo"
          className="font-mono text-sm font-medium tracking-tight text-foreground/80 transition-colors hover:text-accent"
        >
          HP
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
