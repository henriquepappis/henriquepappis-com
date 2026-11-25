import { ImageResponse } from "next/og";
import { content } from "@/data/content";

export const ogSize = { width: 1200, height: 630 };

export function renderOgCard() {
  const { profile } = content.pt;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#f5f5f5",
          padding: "72px 88px",
          borderLeft: "16px solid #5578c9",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#9ca3af" }}>
          {profile.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 44, color: "#5578c9" }}>
            Desenvolvedor PHP Sênior
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#9ca3af" }}>
            Laravel · APIs REST · Liderança Técnica · Cloud
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#f5f5f5" }}>
          henriquepappis.com
        </div>
      </div>
    ),
    ogSize,
  );
}
