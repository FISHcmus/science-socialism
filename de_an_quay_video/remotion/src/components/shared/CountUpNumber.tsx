import { interpolate, useCurrentFrame } from "remotion";
import { FONT, COLORS } from "../../constants";

export const CountUpNumber: React.FC<{
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  startFrame?: number;
  duration?: number;
  color?: string;
  size?: number;
}> = ({
  target,
  suffix = "",
  prefix = "",
  label,
  startFrame = 0,
  duration = 60,
  color = COLORS.gold,
  size = 72,
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  if (localFrame < 0) return null;

  const progress = interpolate(localFrame, [0, duration], [0, 1], {
    extrapolateRight: "clamp",
  });
  // Ease out cubic
  const eased = 1 - Math.pow(1 - progress, 3);
  const current = Math.round(target * eased);

  const opacity = interpolate(localFrame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{ textAlign: "center", opacity }}>
      <div
        style={{
          fontSize: size,
          fontWeight: "bold",
          color,
          fontFamily: FONT,
          lineHeight: 1,
        }}
      >
        {prefix}{current.toLocaleString()}{suffix}
      </div>
      <div
        style={{
          fontSize: 22,
          color: COLORS.muted,
          fontFamily: FONT,
          marginTop: 8,
        }}
      >
        {label}
      </div>
    </div>
  );
};
