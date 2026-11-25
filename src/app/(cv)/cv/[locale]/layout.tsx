import { notFound } from "next/navigation";
import { content } from "@/data/content";
import "../../../globals.css";

export default async function CvRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (locale !== "pt" && locale !== "en") notFound();

  return (
    <html lang={content[locale].htmlLang}>
      <body>{children}</body>
    </html>
  );
}
