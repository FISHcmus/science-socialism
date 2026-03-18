import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT } from "../../constants";

// Total duration: 900 frames (30s)
// Frames 0-300:   "Cảm ơn thầy/cô đã theo dõi" springs in, gold accent line
// Frames 300-600: Group name + all 9 member names fade in
// Frames 600-900: Everything fades to black

const MEMBERS = [
  "Nhân",
  "Bùi Huỳnh Nhi",
  "Đào Thục Nhi",
  "Nguyễn Hồng Châu Nhi",
  "Trần Thị Phụng Nhi",
  "Hoàng Thị Tố Như",
  "Nguyễn Đình Ý Như",
  "Nguyễn Phạm Quỳnh Như",
  "Ngô Văn Phú",
];

export const Conclusion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Phase 1 (0-300): Thank-you text springs in ---
  const thankYouSpring = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 60 },
  });
  const thankYouTranslateY = interpolate(thankYouSpring, [0, 1], [80, 0]);
  const thankYouOpacity = interpolate(thankYouSpring, [0, 1], [0, 1]);

  // Gold accent line width expands as spring resolves
  const accentWidth = interpolate(thankYouSpring, [0, 1], [0, 320]);

  // --- Phase 2 (300-600): Group info fades in ---
  const groupFade = interpolate(frame, [300, 380], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Member names stagger — each appears 12 frames after the previous
  const memberOpacities = MEMBERS.map((_, i) => {
    const memberStart = 360 + i * 20;
    return interpolate(frame, [memberStart, memberStart + 20], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  });

  // --- Phase 3 (600-900): Global fade to black ---
  const globalOpacity = interpolate(frame, [600, 880], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        opacity: globalOpacity,
      }}
    >
      {/* Thank-you text */}
      <div
        style={{
          transform: `translateY(${thankYouTranslateY}px)`,
          opacity: thankYouOpacity,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        <h1
          style={{
            fontSize: 64,
            color: COLORS.white,
            fontFamily: FONT,
            fontWeight: "bold",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          Cảm ơn thầy/cô đã theo dõi
        </h1>
      </div>

      {/* Gold accent line */}
      <div
        style={{
          width: accentWidth,
          height: 3,
          backgroundColor: COLORS.gold,
          borderRadius: 2,
          marginBottom: 48,
        }}
      />

      {/* Group info — fades in during phase 2 */}
      <div
        style={{
          opacity: groupFade,
          textAlign: "center",
          marginBottom: 32,
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: COLORS.gold,
            fontFamily: FONT,
            fontWeight: "bold",
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          Nhóm 6 - CNXHKH
        </div>
        <div
          style={{
            fontSize: 18,
            color: COLORS.muted,
            fontFamily: FONT,
            letterSpacing: 1,
          }}
        >
          BAA00103 — Chủ nghĩa xã hội khoa học
        </div>
      </div>

      {/* Member names grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px 48px",
          textAlign: "center",
        }}
      >
        {MEMBERS.map((name, i) => (
          <div
            key={name}
            style={{
              opacity: memberOpacities[i],
              fontSize: 20,
              color: COLORS.white,
              fontFamily: FONT,
              padding: "6px 12px",
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
