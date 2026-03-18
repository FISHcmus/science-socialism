import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { FONT, COLORS } from "../../constants";

export interface IconGridItem {
  icon: string;
  label: string;
  description?: string;
}

export const IconGrid: React.FC<{
  items: IconGridItem[];
  columns?: number;
  startFrame?: number;
  stagger?: number; // frames between each item appearing
}> = ({ items, columns = 3, startFrame = 0, stagger = 10 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 40,
        padding: "0 80px",
        maxWidth: 1600,
      }}
    >
      {items.map((item, i) => {
        const itemStart = startFrame + i * stagger;
        const localFrame = frame - itemStart;
        if (localFrame < 0) return <div key={i} />;

        const pop = spring({ frame: localFrame, fps, config: { damping: 12, stiffness: 120 } });
        const scale = interpolate(pop, [0, 1], [0.3, 1]);
        const opacity = interpolate(pop, [0, 1], [0, 1]);

        return (
          <div
            key={i}
            style={{
              textAlign: "center",
              transform: `scale(${scale})`,
              opacity,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 16,
              padding: 32,
              border: `1px solid rgba(255,255,255,0.1)`,
            }}
          >
            <div style={{ fontSize: 56, marginBottom: 12 }}>{item.icon}</div>
            <div
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: COLORS.white,
                fontFamily: FONT,
                marginBottom: 8,
              }}
            >
              {item.label}
            </div>
            {item.description && (
              <div
                style={{
                  fontSize: 16,
                  color: COLORS.muted,
                  fontFamily: FONT,
                  lineHeight: 1.4,
                }}
              >
                {item.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
