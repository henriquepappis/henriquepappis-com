"use client";

import { useContent, useLocale } from "@/lib/locale";

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();
  const { ui } = useContent();

  return (
    <div
      role="group"
      aria-label={ui.localeToggleLabel}
      className="inline-flex overflow-hidden rounded-full border border-border font-mono text-xs"
    >
      <button
        type="button"
        onClick={() => setLocale("pt")}
        aria-pressed={locale === "pt"}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "pt"
            ? "bg-accent text-white"
            : "text-muted hover:text-accent"
        }`}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "en"
            ? "bg-accent text-white"
            : "text-muted hover:text-accent"
        }`}
      >
        EN
      </button>
    </div>
  );
}
