import { type CSSProperties, type ReactNode } from "react";
import { COLORS, GLASS, GRADIENTS, GOLD_RING } from "./tokens";

export interface GlassPanelProps {
  blur?: number;
  borderRadius?: number;
  padding?: string;
  goldBorder?: boolean;
  /** Show rotating gold ring around the panel */
  goldRing?: boolean;
  /** Ring rotation angle — only used when goldRing=true */
  ringAngle?: number;
  /** Explicit size for the ring wrapper — required when goldRing=true */
  ringSize?: number;
  style?: CSSProperties;
  children?: ReactNode;
}

export function GlassPanel({
  blur = 16,
  borderRadius = 16,
  padding = "24px",
  goldBorder = false,
  goldRing = false,
  ringAngle = 0,
  ringSize,
  style,
  children,
}: GlassPanelProps) {
  const goldGradient = `linear-gradient(135deg, ${GOLD_RING.warm}, ${GOLD_RING.light}, ${GOLD_RING.warm}80, transparent)`;

  const panel = (
    <div
      style={{
        position: "relative",
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        background: GLASS.bgColor,
        border: goldBorder ? "none" : `3px solid ${GLASS.borderColor}`,
        borderRadius,
        padding,
        boxSizing: "border-box",
        boxShadow: [
          "0 8px 32px rgba(0,0,0,0.4)",
          "inset 0 1px 0 rgba(255,255,255,0.06)",
          ...(goldRing ? ["0 0 20px rgba(232, 175, 72, 0.15)"] : []),
        ].join(", "),
        ...style,
      }}
    >
      {goldBorder && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: 3,
            background: goldGradient,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            pointerEvents: "none",
          }}
        />
      )}
      {children}
    </div>
  );

  if (goldRing && ringSize) {
    const borderWidth = 2;

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
            {panel}
          </div>
        </div>
      </div>
    );
  }

  return panel;
}
