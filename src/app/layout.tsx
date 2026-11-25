import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeScript } from "@/components/ThemeScript";
import { LocaleProvider } from "@/lib/locale";
import { content } from "@/data/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://henriquepappis.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: content.pt.pageTitle,
  description: content.pt.pageDescription,
  alternates: {
    canonical: siteUrl,
    languages: {
      "pt-BR": siteUrl,
      en: siteUrl,
    },
  },
  openGraph: {
    title: content.pt.pageTitle,
    description: content.pt.pageDescription,
    url: siteUrl,
    siteName: content.pt.profile.name,
    locale: "pt_BR",
    alternateLocale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: content.pt.pageTitle,
    description: content.pt.pageDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <LocaleProvider>{children}</LocaleProvider>
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "d075f992c2cf4473a120e95a75c91fb1"}'
        />
      </body>
    </html>
  );
}
