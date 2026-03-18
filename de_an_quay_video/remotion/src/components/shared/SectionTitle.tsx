import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { FONT, COLORS } from "../../constants";

export const SectionTitle: React.FC<{
  title: string;
  subtitle?: string;
  sectionNumber?: string;
}> = ({ title, subtitle, sectionNumber }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animate in during frames 0-60, hold, fade out 60-90
  const slideIn = spring({ frame, fps, config: { damping: 20, stiffness: 80 } });
  const fadeOut = interpolate(frame, [60, 90], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = frame < 60 ? interpolate(slideIn, [0, 1], [0, 1]) : fadeOut;
  const translateY = interpolate(slideIn, [0, 1], [80, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(135deg, rgba(10,22,40,0.4) 0%, rgba(26,54,93,0.4) 100%)`,
      }}
    >
      <div
        style={{
          transform: `translateY(${translateY}px)`,
          opacity,
          textAlign: "center",
          padding: "0 120px",
        }}
      >
        {sectionNumber && (
          <div
            style={{
              fontSize: 24,
              color: COLORS.gold,
              fontFamily: FONT,
              letterSpacing: 4,
              marginBottom: 16,
            }}
          >
            {sectionNumber}
          </div>
        )}
        <h2
          style={{
            fontSize: 56,
            color: COLORS.white,
            fontFamily: FONT,
            fontWeight: "bold",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <div
            style={{
              fontSize: 26,
              color: COLORS.muted,
              fontFamily: FONT,
              marginTop: 20,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
      {/* Gold accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 200,
          width: interpolate(slideIn, [0, 1], [0, 200]),
          height: 3,
          backgroundColor: COLORS.gold,
        }}
      />
    </AbsoluteFill>
  );
};
