import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gaurav Dhingra — Senior QA Engineer / SDET";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#f6f3ea",
          backgroundImage:
            "radial-gradient(circle at 18% 12%, rgba(182,139,69,0.25), transparent 55%), radial-gradient(circle at 88% 8%, rgba(15,118,110,0.2), transparent 50%)",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#0f766e",
            }}
          >
            Senior QA Engineer / SDET
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 84,
              fontWeight: 600,
              color: "#16202f",
              letterSpacing: -2,
            }}
          >
            Gaurav Dhingra
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.4,
              maxWidth: 900,
              color: "#40556f",
            }}
          >
            AI-assisted quality systems for fintech platforms where failure is expensive.
          </div>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {[
            { value: "100+", label: "components" },
            { value: "25+", label: "teams" },
            { value: "<1%", label: "flake rate" },
          ].map((metric) => (
            <div
              key={metric.label}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 20,
                border: "2px solid rgba(22,32,47,0.12)",
                backgroundColor: "rgba(255,255,255,0.6)",
                padding: "20px 28px",
              }}
            >
              <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#16202f" }}>
                {metric.value}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 4,
                  fontSize: 18,
                  color: "#627086",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
