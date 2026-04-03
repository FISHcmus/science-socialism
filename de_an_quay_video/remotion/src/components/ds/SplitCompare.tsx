import type { CSSProperties } from "react";
import { COLORS, GLASS, TEXT_SHADOW } from "./tokens";

export interface SplitCompareProps {
  leftTitle: string;
  leftDetail: string;
  leftAccentColor?: string;
  rightTitle: string;
  rightDetail: string;
  rightAccentColor?: string;
  leftOpacity?: number;
  leftTranslateX?: number;
  rightOpacity?: number;
  rightTranslateX?: number;
}

export function SplitCompare({
  leftTitle,
  leftDetail,
  leftAccentColor = "#16A34A",
  rightTitle,
  rightDetail,
  rightAccentColor = "#B91C1C",
  leftOpacity = 1,
  leftTranslateX = 0,
  rightOpacity = 1,
  rightTranslateX = 0,
}: SplitCompareProps) {
  const panelStyle = (accentColor: string): CSSProperties => ({
    backgroundColor: GLASS.bgColor,
    border: `3px solid ${GLASS.borderColor}`,
    borderLeft: `8px solid ${accentColor}`,
    borderRadius: 16,
    padding: "24px 28px",
    flex: 1,
    backdropFilter: `blur(16px)`,
    WebkitBackdropFilter: `blur(16px)`,
    boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
  });

  return (
    <div className="flex gap-6 w-full font-sans" style={{ flexDirection: "row" }}>
      <div
        style={{
          ...panelStyle(leftAccentColor),
          opacity: leftOpacity,
          transform: `translateX(${leftTranslateX}px)`,
        }}
      >
        <div
          className="text-[36px] font-bold leading-tight mb-2"
          style={{ color: COLORS.white, textShadow: TEXT_SHADOW }}
        >
          {leftTitle}
        </div>
        <div
          className="text-[26px] leading-snug"
          style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}
        >
          {leftDetail}
        </div>
      </div>

      <div
        style={{
          ...panelStyle(rightAccentColor),
          opacity: rightOpacity,
          transform: `translateX(${rightTranslateX}px)`,
        }}
      >
        <div
          className="text-[36px] font-bold leading-tight mb-2"
          style={{ color: COLORS.white, textShadow: TEXT_SHADOW }}
        >
          {rightTitle}
        </div>
        <div
          className="text-[26px] leading-snug"
          style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}
        >
          {rightDetail}
        </div>
      </div>
    </div>
  );
}
