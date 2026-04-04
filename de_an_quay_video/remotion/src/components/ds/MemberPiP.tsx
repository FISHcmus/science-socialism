import React, { memo } from "react";
import { OffthreadVideo } from "remotion";
import { COLORS, GOLD_RING, GRADIENTS, TEXT_SHADOW } from "./tokens";

export interface MemberPiPProps {
  name: string;
  sectionLabel?: string;
  /** Video source URL. Omit = placeholder mode */
  src?: string;
  /** Rotating conic border angle (parent computes) */
  ringAngle?: number;
  opacity?: number;
  /** Border thickness. Default 3 */
  borderWidth?: number;
  /** Video object-fit. Default "cover" */
  objectFit?: "cover" | "contain";
}

export const MemberPiP = memo(function MemberPiP({
  name,
  sectionLabel,
  src,
  ringAngle = 0,
  opacity = 1,
  borderWidth = 3,
  objectFit = "cover",
}: MemberPiPProps) {
  const width = 480;
  const height = 1080;
  const borderRadius = 10;
  const videoHeight = 840;

  return (
    <div
      className="flex flex-col items-center shrink-0"
      style={{ width, height, opacity }}
    >
      {/* Video area with gold ring border */}
      <div className="relative" style={{ width: 440, height: videoHeight }}>
        {/* Glow */}
        <div
          className="absolute"
          style={{
            inset: -3,
            filter: "blur(10px)",
            background: GOLD_RING.glow,
            opacity: 0.1,
            borderRadius: borderRadius + 3,
          }}
        />

        {/* Clip container */}
        <div
          className="relative overflow-hidden"
          style={{ borderRadius, width: 440, height: videoHeight }}
        >
          {/* Rotating conic gradient border */}
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
              <OffthreadVideo
                src={src}
                className="w-full h-full block"
                style={{ objectFit }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 gap-4">
                <div
                  className="text-[32px] text-ds-light-gold font-sans font-bold leading-snug"
                  style={{ textShadow: TEXT_SHADOW }}
                >
                  Chèn video
                </div>
                <div
                  className="text-[28px] text-ds-body font-sans font-normal leading-snug"
                  style={{ textShadow: TEXT_SHADOW }}
                >
                  {name}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Name + section label below video */}
      <div className="mt-6 text-center flex flex-col gap-2">
        <div
          className="text-[32px] text-ds-white font-sans font-bold leading-tight"
          style={{ textShadow: TEXT_SHADOW }}
        >
          {name}
        </div>
        {sectionLabel && (
          <div
            className="text-2xl text-ds-muted font-sans font-normal leading-tight"
            style={{ textShadow: TEXT_SHADOW }}
          >
            {sectionLabel}
          </div>
        )}
      </div>
    </div>
  );
});
