import { ogSize, renderOgCard } from "@/lib/og-card";

export const alt = "Henrique Pappis · Desenvolvedor PHP Sênior";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard();
}
