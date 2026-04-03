import type { CSSProperties } from "react";
import { COLORS, GLASS, TEXT_SHADOW } from "./tokens";

export interface TimelineItem {
  title: string;
  detail: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  visibleCount?: number;
  itemOpacities?: number[];
  itemTranslateX?: number[];
  dotScales?: number[];
  lineProgress?: number;
}

export function Timeline({
  items,
  visibleCount = items.length,
  itemOpacities,
  itemTranslateX,
  dotScales,
  lineProgress = 1,
}: TimelineProps) {
  const dotSize = 18;
  const lineLeft = dotSize / 2;

  return (
    <div className="relative font-sans" style={{ paddingLeft: dotSize + 24 }}>
      {/* Vertical gold line */}
      <div
        style={{
          position: "absolute",
          left: lineLeft - 1,
          top: dotSize / 2,
          width: 2,
          height: `${lineProgress * 100}%`,
          backgroundColor: COLORS.gold,
          transition: "height 0.3s ease",
        }}
      />

      <div className="flex flex-col gap-5">
        {items.map((item, i) => {
          if (i >= visibleCount) return null;
          const opacity = itemOpacities?.[i] ?? 1;
          const tx = itemTranslateX?.[i] ?? 0;
          const dotScale = dotScales?.[i] ?? 1;

          return (
            <div key={i} className="relative" style={{ opacity, transform: `translateX(${tx}px)` }}>
              {/* Gold dot */}
              <div
                style={{
                  position: "absolute",
                  left: -(dotSize + 24),
                  top: 14,
                  width: dotSize,
                  height: dotSize,
                  borderRadius: "50%",
                  backgroundColor: COLORS.gold,
                  transform: `scale(${dotScale})`,
                  boxShadow: `0 0 8px ${COLORS.gold}40`,
                }}
              />

              {/* Card content */}
              <div
                className="rounded-xl"
                style={{
                  backgroundColor: GLASS.bgColor,
                  border: `3px solid ${GLASS.borderColor}`,
                  borderLeft: `6px solid ${COLORS.gold}`,
                  padding: "16px 28px",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="text-[36px] font-bold leading-tight mb-1"
                  style={{ color: COLORS.white, textShadow: TEXT_SHADOW }}
                >
                  {item.title}
                </div>
                <div
                  className="text-[26px] leading-snug"
                  style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}
                >
                  {item.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
