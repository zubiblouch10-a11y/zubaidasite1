import { ImageResponse } from "next/og";

export const alt = "Zubaida Digital — Digital Marketing & Local SEO Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1020 0%, #1b1140 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 34, color: "#22d3ee", letterSpacing: 4 }}>ZUBAIDA DIGITAL</div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, marginTop: 24 }}>
          Local SEO & Digital Marketing Agency
        </div>
        <div style={{ fontSize: 34, color: "#c4b5fd", marginTop: 32 }}>
          Google Maps rankings · Social media · E-commerce growth
        </div>
        <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 48 }}>
          UK · UAE · Saudi Arabia · Pakistan
        </div>
      </div>
    ),
    size
  );
}
