"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content } from "@/data/content";
import type { Locale } from "@/data/types";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");

  useEffect(() => {
    document.documentElement.lang = content[locale].htmlLang;
    document.title = content[locale].pageTitle;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}

export function useContent() {
  const { locale } = useLocale();
  return content[locale];
}
