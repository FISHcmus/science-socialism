import { memo } from "react";
import { COLORS, GRADIENTS, GOLD_RING, TEXT_SHADOW } from "./tokens";

export interface MemberPlaceholderProps {
  name: string;
  color: string;
  opacity?: number;
  scale?: number;
  /** Ring rotation angle in degrees — compute from useCurrentFrame() */
  ringAngle?: number;
}

export const MemberPlaceholder = memo(function MemberPlaceholder({
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
      className="absolute inset-0 flex flex-col items-center justify-center font-sans gap-4"
      style={{
        backgroundColor: color,
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      {/* Gold ring monogram circle */}
      <div className="relative" style={{ width: ringSize, height: ringSize }}>
        {/* Glow layer */}
        <div
          className="absolute inset-0"
          style={{
            filter: "blur(12px)",
            background: GOLD_RING.glow,
            opacity: 0.15,
            borderRadius,
          }}
        />

        {/* Clip layer */}
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

          {/* Inner plate with monogram */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              inset: borderWidth,
              background: GRADIENTS.lightRadial,
              borderRadius: borderRadius - 1,
            }}
          >
            <span
              className="text-[72px] text-ds-light-gold font-bold font-sans leading-none select-none"
            >
              {monogram}
            </span>
          </div>
        </div>
      </div>

      <div
        className="text-ds-white text-5xl font-bold leading-tight text-center px-4"
        style={{ textShadow: TEXT_SHADOW }}
      >
        {name}
      </div>

      <div
        className="text-ds-body text-2xl font-normal text-center"
        style={{ textShadow: TEXT_SHADOW }}
      >
        Video placeholder
      </div>
    </div>
  );
});
