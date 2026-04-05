import React from "react";
import { COLORS, FONT, TEXT, GRADIENTS } from "../tokens";
import { StarIcon } from "./icons";

export const HeroSection: React.FC = () => (
  <section style={{
    position: "relative",
    padding: "128px 80px 96px",
    background: COLORS.bg,
    overflow: "hidden",
  }}>
    {/* Subtle sunburst behind */}
    <div style={{
      position: "absolute",
      top: "-20%",
      right: "-10%",
      width: 600,
      height: 600,
      background: GRADIENTS.radialBurst,
      opacity: 0.06,
      pointerEvents: "none",
    }} />

    <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
      {/* Course code label */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <StarIcon size={14} color={COLORS.gold} />
        <span style={{
          fontFamily: FONT.heading,
          fontWeight: 600,
          fontSize: TEXT.label.size,
          textTransform: "uppercase",
          letterSpacing: "4px",
          color: COLORS.gold,
        }}>
          BAA00103
        </span>
      </div>

      {/* Accent line */}
      <div className="accent-line" style={{ marginBottom: 24 }} />

      {/* Title */}
      <h1 style={{
        fontFamily: FONT.display,
        fontWeight: 700,
        fontSize: TEXT.hero.size,
        lineHeight: TEXT.hero.lineHeight,
        color: COLORS.ink,
        margin: "0 0 16px",
        maxWidth: 800,
      }}>
        Chủ Nghĩa Xã Hội Khoa Học
      </h1>

      {/* Subtitle */}
      <p style={{
        fontFamily: FONT.body,
        fontSize: TEXT.bodyLg.size,
        lineHeight: TEXT.bodyLg.lineHeight,
        color: COLORS.inkSecondary,
        margin: "0 0 32px",
        maxWidth: 600,
      }}>
        Học kỳ 2 - 2025-2026 - 2 tín chỉ<br />
        ĐHKHTN - ĐHQG-HCM
      </p>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: 16 }}>
        <a href="#video" style={{
          fontFamily: FONT.heading,
          fontWeight: 600,
          fontSize: TEXT.small.size,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: COLORS.bg,
          background: COLORS.red,
          padding: "12px 32px",
          textDecoration: "none",
          borderRadius: 2,
          transition: "background 200ms",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.redDeep)}
          onMouseLeave={(e) => (e.currentTarget.style.background = COLORS.red)}
        >
          Xem video
        </a>
        <a href="#resources" style={{
          fontFamily: FONT.heading,
          fontWeight: 600,
          fontSize: TEXT.small.size,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: COLORS.gold,
          background: "transparent",
          border: `2px solid ${COLORS.gold}`,
          padding: "10px 30px",
          textDecoration: "none",
          borderRadius: 2,
          transition: "background 200ms, color 200ms",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.gold; e.currentTarget.style.color = COLORS.bg; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = COLORS.gold; }}
        >
          Tài liệu
        </a>
      </div>
    </div>
  </section>
);
