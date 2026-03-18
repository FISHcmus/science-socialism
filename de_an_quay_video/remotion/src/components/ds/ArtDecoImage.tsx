import React from "react";
import { COLORS, FONT, GOLD_RING, GRADIENTS, TEXT_SHADOW } from "./tokens";

export interface ArtDecoImageProps {
  src?: string;
  description: string;
  width: number;
  height: number;
  ringAngle?: number;
  opacity?: number;
  borderWidth?: number;
  sweepProgress?: number;
  borderRadius?: number;
}


export function ArtDecoImage({
  src,
  description,
  width,
  height,
  ringAngle = 0,
  opacity = 1,
  borderWidth = 5,
  sweepProgress = 0,
  borderRadius = 4,
}: ArtDecoImageProps) {
  const sweepX = -150 + sweepProgress * 400; // -150% to +250%

  return (
    <div style={{ position: "relative", width, height, opacity }}>
      {/* Glow layer */}
      <div
        style={{
          position: "absolute",
          inset: -4,
          filter: "blur(12px)",
          background: GOLD_RING.glow,
          opacity: 0.12,
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
        {/* Rotating conic gradient */}
        <div
          style={{
            position: "absolute",
            width: "300%",
            height: "300%",
            top: "-100%",
            left: "-100%",
            background: GRADIENTS.goldConic,
            transform: `rotate(${ringAngle}deg)`,
          }}
        />

        {/* Sweep layer */}
        {sweepProgress > 0 && sweepProgress < 1 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "60%",
                height: "100%",
                background:
                  "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 70%, transparent 100%)",
                transform: `translateX(${sweepX}%)`,
              }}
            />
          </div>
        )}

        {/* Inner plate */}
        <div
          style={{
            position: "absolute",
            inset: borderWidth,
            borderRadius: Math.max(0, borderRadius - 1),
            overflow: "hidden",
            background: GRADIENTS.darkRadial,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {src ? (
            <img
              src={src}
              alt={description}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "16px",
                color: COLORS.body,
                fontSize: 28,
                fontFamily: FONT,
                fontWeight: 400,
                textShadow: TEXT_SHADOW,
                lineHeight: 1.4,
              }}
            >
              Chèn ảnh: {description}
            </div>
          )}
        </div>
      </div>


    </div>
  );
}
