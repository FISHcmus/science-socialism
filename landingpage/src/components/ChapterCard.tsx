import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { BookIcon } from "./icons";

type ChapterCardProps = {
  number: number;
  title: string;
  summary?: string;
  onMindmap?: () => void;
  onRead?: () => void;
};

export const ChapterCard: React.FC<ChapterCardProps> = ({ number, title, summary, onMindmap, onRead }) => (
  <div
    className="chevron-corner"
    style={{
      background: COLORS.surfaceWhite,
      border: `1px solid ${COLORS.border}`,
      borderRadius: 2,
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      transition: "border-color 200ms, box-shadow 200ms",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = COLORS.red;
      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = COLORS.border;
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <BookIcon size={18} color={COLORS.red} />
      <span style={{
        fontFamily: FONT.heading,
        fontWeight: 600,
        fontSize: TEXT.label.size,
        textTransform: "uppercase",
        letterSpacing: "3px",
        color: COLORS.gold,
      }}>
        Chương {number}
      </span>
    </div>
    <div className="accent-line" style={{ width: "40%", height: 2 }} />
    <h3 style={{
      fontFamily: FONT.heading,
      fontWeight: 700,
      fontSize: TEXT.body.size,
      lineHeight: TEXT.h3.lineHeight,
      color: COLORS.ink,
      margin: 0,
    }}>
      {title}
    </h3>
    {summary && (
      <p style={{
        fontFamily: FONT.body,
        fontSize: TEXT.small.size,
        color: COLORS.inkSecondary,
        margin: 0,
        lineHeight: 1.5,
      }}>
        {summary}
      </p>
    )}
    <div style={{ display: "flex", gap: 12, marginTop: "auto" }}>
      {onMindmap && (
        <button
          onClick={onMindmap}
          style={{
            fontFamily: FONT.heading,
            fontWeight: 600,
            fontSize: TEXT.label.size,
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: COLORS.gold,
            background: "transparent",
            border: `1px solid ${COLORS.gold}`,
            padding: "6px 12px",
            borderRadius: 2,
            cursor: "pointer",
            transition: "background 200ms, color 200ms",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.gold; e.currentTarget.style.color = COLORS.bg; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = COLORS.gold; }}
        >
          Mindmap
        </button>
      )}
      {onRead && (
        <button
          onClick={onRead}
          style={{
            fontFamily: FONT.heading,
            fontWeight: 600,
            fontSize: TEXT.label.size,
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: COLORS.red,
            background: "transparent",
            border: "none",
            padding: "6px 0",
            cursor: "pointer",
            borderBottom: `1px solid transparent`,
            transition: "border-color 200ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = COLORS.red)}
          onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
        >
          Doc &rarr;
        </button>
      )}
    </div>
  </div>
);
