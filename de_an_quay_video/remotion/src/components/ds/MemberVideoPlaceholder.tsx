import React from "react";
import { COLORS, GOLD_RING, GRADIENTS, TEXT_SHADOW } from "./tokens";

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
    <div className="relative" style={{ width, height, opacity }}>
      {/* Glow layer */}
      <div
        className="absolute"
        style={{
          inset: -4,
          filter: "blur(14px)",
          background: GOLD_RING.glow,
          opacity: 0.1,
          borderRadius: borderRadius + 4,
        }}
      />

      {/* Clip container */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius, width, height }}
      >
        {/* Rotating conic gradient border */}
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
          className="absolute flex flex-col items-center justify-center gap-3 overflow-hidden"
          style={{
            inset: borderWidth,
            borderRadius: Math.max(0, borderRadius - 1),
            background: GRADIENTS.lightRadial,
          }}
        >
          {src ? (
            <video
              src={src}
              className="w-full h-full object-cover block"
            />
          ) : (
            <>
              <div
                className="text-[28px] text-ds-light-gold font-sans font-bold leading-tight"
                style={{ textShadow: TEXT_SHADOW }}
              >
                Chèn video: {name}
              </div>
              {sectionLabel && (
                <div
                  className="text-xl text-ds-body font-sans font-normal leading-tight"
                  style={{ textShadow: TEXT_SHADOW }}
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
