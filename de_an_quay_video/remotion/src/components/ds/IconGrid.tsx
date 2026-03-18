import { COLORS, FONT, TEXT_SHADOW } from "./tokens";
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

export function IconGrid({
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
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "20px",
        fontFamily: FONT,
        width: "100%",
      }}
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
                style={{
                  color: COLORS.white,
                  fontSize: "28px",
                  fontWeight: "bold",
                  lineHeight: 1.3,
                  textShadow: TEXT_SHADOW,
                }}
              >
                {item.label}
              </span>
              {item.description && (
                <span
                  style={{
                    color: COLORS.body,
                    fontSize: "22px",
                    lineHeight: 1.6,
                    textShadow: TEXT_SHADOW,
                  }}
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
}
