import { COLORS, FONT, GRADIENTS, GOLD_RING, TEXT_SHADOW } from "./tokens";

export interface CountUpNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  color?: string;
  size?: number;
  opacity?: number;
  /** Show rotating gold ring around the number */
  goldRing?: boolean;
  /** Ring rotation angle in degrees — compute from useCurrentFrame() */
  ringAngle?: number;
}

export function CountUpNumber({
  value,
  suffix,
  prefix,
  label,
  color = COLORS.gold,
  size = 72,
  opacity = 1,
  goldRing = false,
  ringAngle = 0,
}: CountUpNumberProps) {
  const content = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: FONT,
        opacity,
        gap: "12px",
        padding: "24px",
      }}
    >
      <div
        style={{
          color,
          fontSize: `${size}px`,
          fontWeight: "bold",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          textShadow: TEXT_SHADOW,
        }}
      >
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </div>

      <div
        style={{
          color: COLORS.body,
          fontSize: "22px",
          fontWeight: 400,
          lineHeight: 1.4,
          textShadow: TEXT_SHADOW,
        }}
      >
        {label}
      </div>
    </div>
  );

  if (!goldRing) return content;

  // Wrap in gold ring
  const ringSize = size + 80;
  const borderWidth = 2;
  const borderRadius = 20;

  return (
    <div style={{ position: "relative", width: ringSize, height: ringSize }}>
      {/* Glow */}
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

      {/* Clip */}
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

        {/* Inner plate */}
        <div
          style={{
            position: "absolute",
            inset: borderWidth,
            background: COLORS.darkest,
            borderRadius: borderRadius - 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
