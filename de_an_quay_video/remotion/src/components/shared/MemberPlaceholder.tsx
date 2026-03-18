import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { FONT, COLORS } from "../../constants";

export const MemberPlaceholder: React.FC<{
  name: string;
  color: string;
  showFrom?: number;
}> = ({ name, color, showFrom = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - showFrom;
  if (localFrame < 0) return null;

  const scale = spring({ frame: localFrame, fps, config: { damping: 15, stiffness: 100 } });
  const opacity = interpolate(localFrame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: color,
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 120, marginBottom: 20 }}>🐷</div>
        <div
          style={{
            fontSize: 48,
            color: COLORS.white,
            fontFamily: FONT,
            fontWeight: "bold",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 20,
            color: COLORS.muted,
            fontFamily: FONT,
            marginTop: 12,
          }}
        >
          Video placeholder - thay bằng clip thực tế
        </div>
      </div>
    </AbsoluteFill>
  );
};
