import { memo, type CSSProperties, type ReactNode } from "react";
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

export const GlassPanel = memo(function GlassPanel({
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
      className="relative box-border"
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        background: GLASS.bgColor,
        border: goldBorder ? "none" : `3px solid ${GLASS.borderColor}`,
        borderRadius,
        padding,
        boxShadow: [
          "0 4px 24px rgba(0,0,0,0.06)",
          "0 1px 2px rgba(0,0,0,0.04)",
          ...(goldRing ? ["0 0 20px rgba(217, 119, 6, 0.12)"] : []),
        ].join(", "),
        ...style,
      }}
    >
      {goldBorder && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "inherit",
            padding: 3,
            background: goldGradient,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          }}
        />
      )}
      {children}
    </div>
  );

  if (goldRing && ringSize) {
    const borderWidth = 2;

    return (
      <div className="relative" style={{ width: ringSize, height: ringSize }}>
        {/* Glow */}
        <div
          className="absolute inset-0"
          style={{
            filter: "blur(12px)",
            background: GOLD_RING.glow,
            opacity: 0.15,
            borderRadius,
          }}
        />

        {/* Clip */}
        <div
          className="relative overflow-hidden"
          style={{ borderRadius, width: ringSize, height: ringSize }}
        >
          {/* Rotating conic gradient */}
          <div
            className="absolute"
            style={{
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
            className="absolute flex items-center justify-center"
            style={{
              inset: borderWidth,
              background: COLORS.darkest,
              borderRadius: borderRadius - 1,
            }}
          >
            {panel}
          </div>
        </div>
      </div>
    );
  }

  return panel;
});
