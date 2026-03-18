import React from "react";
import { COLORS, FONT, GOLD_RING, TEXT_SHADOW } from "./tokens";

export interface CitationFooterProps {
  /** Citation text, e.g. "Giáo trình CNXHKH (2021), Ch.6, I.2b, tr.202-205" */
  text: string;
  opacity?: number;
}

export function CitationFooter({ text, opacity = 1 }: CitationFooterProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        opacity,
        padding: "8px 0",
      }}
    >
      {/* Thin gold separator line */}
      <div
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${GOLD_RING.warm}, transparent)`,
        }}
      />
      <div
        style={{
          fontSize: 18,
          color: COLORS.muted,
          fontFamily: FONT,
          fontWeight: 400,
          fontStyle: "italic",
          textShadow: TEXT_SHADOW,
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
      >
        {text}
      </div>
      <div
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${GOLD_RING.warm}, transparent)`,
        }}
      />
    </div>
  );
}
