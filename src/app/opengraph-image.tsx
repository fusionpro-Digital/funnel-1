import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * The link-preview image for the whole site (Open Graph; X falls back to it
 * too). Generated once at build time. It mirrors the hero: the Geist lead
 * line over the italic Playfair accent, on the same violet-washed black.
 */

export const alt =
  "FusionPro — Turn More Interest Into Qualified Sales Conversations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [geistBold, playfairItalic, logomark] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/Geist-Bold.ttf")),
    readFile(
      join(process.cwd(), "src/assets/fonts/PlayfairDisplay-SemiBoldItalic.ttf"),
    ),
    readFile(join(process.cwd(), "public/Logomark.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logomark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          background: "linear-gradient(180deg, #0a0413 0%, #050109 100%)",
          color: "#ffffff",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -320,
            left: 250,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(124,58,237,0.42) 0%, rgba(124,58,237,0) 68%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img>; next/image has no meaning here */}
          <img src={logoSrc} width={50} height={52} alt="" />
          <span style={{ fontSize: 38, fontWeight: 700, letterSpacing: -1 }}>
            FusionPro
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 21,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Done-for-you growth systems for B2B &amp; B2C companies
          </span>
          <span
            style={{
              marginTop: 22,
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Turn More Interest Into
          </span>
          <span
            style={{
              fontFamily: "Playfair Display",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: 72,
              lineHeight: 1.15,
              color: "#a855f7",
            }}
          >
            Qualified Sales Conversations.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(255,255,255,0.62)",
          }}
        >
          <span>fusionprodigital.com</span>
          <span>Design · Capture · Convert · Automate</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
        {
          name: "Playfair Display",
          data: playfairItalic,
          weight: 600,
          style: "italic",
        },
      ],
    },
  );
}
