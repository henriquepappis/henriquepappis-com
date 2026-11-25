"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LocaleToggle } from "@/components/LocaleToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useContent } from "@/lib/locale";

export function Header() {
  const { ui } = useContent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          onClick={() => setIsMenuOpen(false)}
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
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={ui.nav.toggleMenu}
            className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground transition-colors hover:text-accent sm:hidden"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-border px-6 py-4 sm:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md px-2 py-2 font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:bg-border/40 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
