import { COLORS, FONT, TEXT_SHADOW } from "./tokens";
import { GlassPanel } from "./GlassPanel";

export interface LowerThirdProps {
  name: string;
  role: string;
  opacity?: number;
  translateY?: number;
}

export function LowerThird({
  name,
  role,
  opacity = 1,
  translateY = 0,
}: LowerThirdProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "stretch",
        gap: "16px",
        fontFamily: FONT,
        opacity,
        transform: `translateY(${translateY}px)`,
        padding: "12px 0",
      }}
    >
      {/* Gold left accent bar with glow */}
      <div
        style={{
          width: "4px",
          height: "60px",
          backgroundColor: COLORS.gold,
          borderRadius: "2px",
          flexShrink: 0,
          boxShadow: "0 0 8px rgba(232, 175, 72, 0.3)",
        }}
      />

      {/* Text block in dark glass */}
      <GlassPanel padding="12px 20px" borderRadius={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4px",
          }}
        >
          <div
            style={{
              color: COLORS.gold,
              fontSize: "32px",
              fontWeight: "bold",
              lineHeight: 1.2,
              textShadow: TEXT_SHADOW,
            }}
          >
            {name}
          </div>
          <div
            style={{
              color: COLORS.body,
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: 1.3,
              textShadow: TEXT_SHADOW,
            }}
          >
            {role}
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
