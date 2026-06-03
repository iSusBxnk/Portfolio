import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Chayakorn Phukhiao — Frontend Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

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
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          Chayakorn Phukhiao
        </div>
        <div style={{ fontSize: 40, color: "#5eead4", marginTop: 16 }}>
          Frontend Developer
        </div>
        <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 24, maxWidth: 900 }}>
          Accessible, high-performance web experiences with Next.js, React &amp; TypeScript.
        </div>
      </div>
    ),
    { ...size },
  )
}
