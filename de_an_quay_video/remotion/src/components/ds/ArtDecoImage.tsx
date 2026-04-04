import React, { memo } from "react";
import { COLORS, GRADIENTS, GOLD_RING, TEXT_SHADOW } from "./tokens";

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

export const ArtDecoImage = memo(function ArtDecoImage({
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
  const sweepX = -150 + sweepProgress * 400;

  return (
    <div className="relative" style={{ width, height, opacity }}>
      {/* Glow layer */}
      <div
        className="absolute"
        style={{
          inset: -4,
          filter: "blur(12px)",
          background: GOLD_RING.glow,
          opacity: 0.12,
          borderRadius: borderRadius + 4,
        }}
      />

      {/* Clip container */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius, width, height }}
      >
        {/* Rotating conic gradient */}
        <div
          className="absolute"
          style={{
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
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: "60%",
                background:
                  "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 70%, transparent 100%)",
                transform: `translateX(${sweepX}%)`,
              }}
            />
          </div>
        )}

        {/* Inner plate */}
        <div
          className="absolute flex items-center justify-center overflow-hidden"
          style={{
            inset: borderWidth,
            borderRadius: Math.max(0, borderRadius - 1),
            background: GRADIENTS.lightRadial,
          }}
        >
          {src ? (
            <img
              src={src}
              alt={description}
              className="w-full h-full object-cover block"
            />
          ) : (
            <div
              className="flex items-center justify-center text-center p-4 text-ds-body text-[28px] font-sans font-normal leading-normal"
              style={{ textShadow: TEXT_SHADOW }}
            >
              Chèn ảnh: {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
