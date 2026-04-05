import React from "react";
import { COLORS, FONT, TEXT, GRADIENTS } from "../tokens";

type TheaterEmbedProps = {
  videoUrl?: string;
  title?: string;
  subtitle?: string;
};

export const TheaterEmbed: React.FC<TheaterEmbedProps> = ({
  videoUrl = "https://drive.google.com/file/d/1JqfDnTKEI41kRsSwRm-i_9Vue395mwPY/preview",
  title = "Chủ đề 6: Xây dựng khối đại đoàn kết toàn dân tộc",
  subtitle = "Nhóm 7 - BAA00103 - HK2 2025-2026",
}) => (
  <section style={{
    background: GRADIENTS.theater,
    padding: "96px 80px",
  }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: 32 }}>
        <span style={{
          fontFamily: FONT.heading,
          fontWeight: 600,
          fontSize: TEXT.small.size,
          textTransform: "uppercase",
          letterSpacing: "4px",
          color: COLORS.gold,
        }}>
          Phan 05
        </span>
        <div style={{
          height: 3,
          background: GRADIENTS.goldFade,
          transform: "skewX(-20deg)",
          width: "30%",
          margin: "8px 0 16px",
        }} />
        <h2 style={{
          fontFamily: FONT.display,
          fontWeight: 700,
          fontSize: TEXT.display.size,
          lineHeight: TEXT.display.lineHeight,
          color: COLORS.bg,
          margin: 0,
        }}>
          Video thuyết trình
        </h2>
      </div>

      {/* Video frame with Art Deco gold border */}
      <div className="chevron-corner" style={{
        border: `2px solid ${COLORS.gold}`,
        borderRadius: 2,
        overflow: "hidden",
        maxWidth: 960,
        aspectRatio: "16/9",
        background: COLORS.black,
      }}>
        <iframe
          src={videoUrl}
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Caption */}
      <div style={{ maxWidth: 960, marginTop: 24 }}>
        <p style={{
          fontFamily: FONT.body,
          fontSize: TEXT.bodyLg.size,
          color: COLORS.gold,
          margin: "0 0 4px",
        }}>
          {title}
        </p>
        <p style={{
          fontFamily: FONT.body,
          fontSize: TEXT.small.size,
          color: "rgba(250,250,247,0.5)",
          margin: 0,
        }}>
          {subtitle}
        </p>
      </div>
    </div>
  </section>
);
