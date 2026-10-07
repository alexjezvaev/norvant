import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#2d3686",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          Safety footwear & workwear
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              lineHeight: 1.3,
              maxWidth: 900,
              opacity: 0.95,
            }}
          >
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}