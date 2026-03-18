import React from "react";
import { COLORS, FONT, GOLD_RING, GRADIENTS, TEXT_SHADOW } from "./tokens";

export interface MemberVideoPlaceholderProps {
  name: string;
  /** Section label shown below name, e.g. "Phần 1.1 - Cương lĩnh DT" */
  sectionLabel?: string;
  /** Video source URL. Omit = placeholder mode */
  src?: string;
  width: number;
  height: number;
  opacity?: number;
  /** Rotating conic border angle (parent computes) */
  ringAngle?: number;
  /** Border thickness. Default 4 */
  borderWidth?: number;
}

export function MemberVideoPlaceholder({
  name,
  sectionLabel,
  src,
  width,
  height,
  opacity = 1,
  ringAngle = 0,
  borderWidth = 4,
}: MemberVideoPlaceholderProps) {
  const borderRadius = 6;

  return (
    <div style={{ position: "relative", width, height, opacity }}>
      {/* Glow layer */}
      <div
        style={{
          position: "absolute",
          inset: -4,
          filter: "blur(14px)",
          background: GOLD_RING.glow,
          opacity: 0.1,
          borderRadius: borderRadius + 4,
        }}
      />

      {/* Clip container */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius,
          width,
          height,
        }}
      >
        {/* Rotating conic gradient border */}
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
            borderRadius: Math.max(0, borderRadius - 1),
            overflow: "hidden",
            background: GRADIENTS.darkRadial,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          {src ? (
            <video
              src={src}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <>
              <div
                style={{
                  fontSize: 28,
                  color: COLORS.lightGold,
                  fontFamily: FONT,
                  fontWeight: "bold",
                  textShadow: TEXT_SHADOW,
                  lineHeight: 1.2,
                }}
              >
                Chèn video: {name}
              </div>
              {sectionLabel && (
                <div
                  style={{
                    fontSize: 20,
                    color: COLORS.body,
                    fontFamily: FONT,
                    fontWeight: 400,
                    textShadow: TEXT_SHADOW,
                    lineHeight: 1.2,
                  }}
                >
                  {sectionLabel}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
