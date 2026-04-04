import { memo } from "react";
import { TEXT_SHADOW } from "./tokens";
import { GlassPanel } from "./GlassPanel";

export interface IconGridItem {
  label: string;
  description?: string;
}

export interface IconGridProps {
  items: IconGridItem[];
  columns?: number;
  visibleCount?: number;
  itemScale?: number;
  itemOpacity?: number;
  itemScales?: number[];
  itemOpacities?: number[];
}

export const IconGrid = memo(function IconGrid({
  items,
  columns = 3,
  visibleCount = items.length,
  itemScale = 1,
  itemOpacity = 1,
  itemScales,
  itemOpacities,
}: IconGridProps) {
  return (
    <div
      className="grid gap-5 font-sans w-full"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {items.map((item, index) => {
        const s = itemScales?.[index] ?? itemScale;
        const o = itemOpacities?.[index] ?? itemOpacity;
        return (
          <div
            key={index}
            style={{
              display: index < visibleCount ? "flex" : "none",
              transform: `scale(${s})`,
              opacity: o,
            }}
          >
            <GlassPanel
              padding="32px"
              borderRadius={16}
              goldBorder
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                textAlign: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <span
                className="text-ds-white text-[28px] font-bold leading-snug"
                style={{ textShadow: TEXT_SHADOW }}
              >
                {item.label}
              </span>
              {item.description && (
                <span
                  className="text-ds-body text-[22px] leading-relaxed"
                  style={{ textShadow: TEXT_SHADOW }}
                >
                  {item.description}
                </span>
              )}
            </GlassPanel>
          </div>
        );
      })}
    </div>
  );
});
