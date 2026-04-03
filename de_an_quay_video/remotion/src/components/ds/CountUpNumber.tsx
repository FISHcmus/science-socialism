import { COLORS, GRADIENTS, GOLD_RING, TEXT_SHADOW } from "./tokens";

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
      className="flex flex-col items-center justify-center text-center font-sans gap-3 p-6"
      style={{ opacity }}
    >
      <div
        className="font-bold leading-none tracking-tight"
        style={{
          color,
          fontSize: `${size}px`,
          letterSpacing: "-0.02em",
          textShadow: TEXT_SHADOW,
        }}
      >
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </div>

      <div
        className="text-ds-body text-[22px] font-normal leading-normal"
        style={{ textShadow: TEXT_SHADOW }}
      >
        {label}
      </div>
    </div>
  );

  if (!goldRing) return content;

  const ringSize = size + 80;
  const borderWidth = 2;
  const borderRadius = 20;

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
          className="absolute flex items-center justify-center bg-ds-darkest"
          style={{
            inset: borderWidth,
            borderRadius: borderRadius - 1,
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
