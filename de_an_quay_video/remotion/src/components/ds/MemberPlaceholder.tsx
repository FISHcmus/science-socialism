import { COLORS, FONT, GRADIENTS, GOLD_RING, TEXT_SHADOW } from "./tokens";

export interface MemberPlaceholderProps {
  name: string;
  color: string;
  opacity?: number;
  scale?: number;
  /** Ring rotation angle in degrees — compute from useCurrentFrame() */
  ringAngle?: number;
}

export function MemberPlaceholder({
  name,
  color,
  opacity = 1,
  scale = 1,
  ringAngle = 0,
}: MemberPlaceholderProps) {
  const monogram = name.charAt(0).toUpperCase();
  const ringSize = 160;
  const borderWidth = 3;
  const borderRadius = ringSize / 2;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONT,
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        gap: "16px",
      }}
    >
      {/* Gold ring monogram circle */}
      <div style={{ position: "relative", width: ringSize, height: ringSize }}>
        {/* Glow layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            filter: "blur(12px)",
            background: GOLD_RING.glow,
            opacity: 0.15,
            borderRadius,
          }}
        />

        {/* Clip layer */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius,
            width: ringSize,
            height: ringSize,
          }}
        >
          {/* Rotating conic gradient */}
          <div
            style={{
              position: "absolute",
              width: "200%",
              height: "200%",
              top: "-50%",
              left: "-50%",
              background: GRADIENTS.goldConic,
              transform: `rotate(${ringAngle}deg)`,
            }}
          />

          {/* Inner plate with monogram */}
          <div
            style={{
              position: "absolute",
              inset: borderWidth,
              background: GRADIENTS.darkRadial,
              borderRadius: borderRadius - 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "72px",
                color: COLORS.lightGold,
                fontWeight: "bold",
                fontFamily: FONT,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {monogram}
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          color: COLORS.white,
          fontSize: "48px",
          fontWeight: "bold",
          lineHeight: 1.2,
          textAlign: "center",
          padding: "0 16px",
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
          textAlign: "center",
          textShadow: TEXT_SHADOW,
        }}
      >
        Video placeholder
      </div>
    </div>
  );
}
