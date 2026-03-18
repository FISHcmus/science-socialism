import { interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { FONT, COLORS } from "../../constants";

export const LowerThird: React.FC<{
  name: string;
  role: string;
  showFrom?: number;
}> = ({ name, role, showFrom = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - showFrom;

  if (localFrame < 0) return null;

  const slideUp = spring({ frame: localFrame, fps, config: { damping: 18, stiffness: 100 } });
  const translateY = interpolate(slideUp, [0, 1], [60, 0]);
  const opacity = interpolate(localFrame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 60,
        left: 60,
        transform: `translateY(${translateY}px)`,
        opacity,
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 4,
          height: 60,
          backgroundColor: COLORS.gold,
          borderRadius: 2,
        }}
      />
      <div>
        <div
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: COLORS.white,
            fontFamily: FONT,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 20,
            color: COLORS.muted,
            fontFamily: FONT,
          }}
        >
          {role}
        </div>
      </div>
    </div>
  );
};
