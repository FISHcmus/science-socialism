import React from "react";
import { GOLD_RING, TEXT_SHADOW } from "./tokens";

export interface CitationFooterProps {
  /** Citation text, e.g. "Giáo trình CNXHKH (2021), Ch.6, I.2b, tr.202-205" */
  text: string;
  opacity?: number;
}

export function CitationFooter({ text, opacity = 1 }: CitationFooterProps) {
  return (
    <div
      className="flex items-center gap-3"
      style={{ opacity, padding: "8px 0" }}
    >
      {/* Thin gold separator line */}
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD_RING.warm}, transparent)`,
        }}
      />
      <div
        className="text-lg text-ds-muted font-sans font-normal italic whitespace-nowrap leading-none"
        style={{ textShadow: TEXT_SHADOW }}
      >
        {text}
      </div>
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD_RING.warm}, transparent)`,
        }}
      />
    </div>
  );
}
