import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  spring,
  useVideoConfig,
} from "remotion";
import { COLORS, FONT, MEMBER_COLORS, TEXT_SHADOW } from "../../constants";
import {
  SectionTitle,
  FlowChart,
  MemberPlaceholder,
  Overlay,
  LowerThird,
} from "../ds";
import type { FlowNode } from "../ds";

// Beat 1:    0-90   — SectionTitle "Nhận thức đúng đắn", sectionNumber "PHẦN 3.1"
// Beat 2:  90-2100  — FlowChart horizontal cycle showing the learning cycle
// Beat 3: 2100-2700 — MemberPlaceholder + Overlay + LowerThird
// Total: 2700 frames (90s)

const LEARNING_CYCLE_NODES: FlowNode[] = [
  {
    label: "Học tập lý luận",
    description: "Nắm vững chủ nghĩa Mác-Lênin",
  },
  {
    label: "Phân tích thực tiễn",
    description: "Nhận diện thách thức",
  },
  {
    label: "Hình thành nhận thức",
    description: "Tư duy đúng đắn",
  },
  {
    label: "Hành động đoàn kết",
    description: "Thực hiện trong đời sống",
  },
];

export const Section31QuynhNhu: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── Beat 1: SectionTitle (frames 0-90) ──
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);

  // ── Beat 2 envelope (frames 90-2100) ──
  const beat2Local = frame - 90;
  const beat2FadeIn =
    beat2Local >= 0
      ? interpolate(beat2Local, [0, 20], [0, 1], { extrapolateRight: "clamp" })
      : 0;
  const beat2FadeOut = interpolate(frame, [2060, 2100], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const beat2Opacity = frame >= 90 && frame < 2100 ? Math.min(beat2FadeIn, beat2FadeOut) : 0;
  const beat2Visible = frame >= 90 && frame < 2100;

  // Heading animation
  const headingLocal = Math.max(0, frame - 90);
  const headingSpring = spring({
    frame: headingLocal,
    fps,
    config: { damping: 20, stiffness: 80 },
  });
  const headingY = interpolate(headingSpring, [0, 1], [40, 0]);
  const headingOpacity = interpolate(headingSpring, [0, 1], [0, 1]);

  // Subtitle paragraph fades in after heading
  const subtitleLocal = Math.max(0, frame - 180);
  const subtitleOpacity = interpolate(subtitleLocal, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Bottom quote annotation
  const quoteOpacity =
    frame > 400
      ? interpolate(frame - 400, [0, 30], [0, 1], { extrapolateRight: "clamp" })
      : 0;

  // ── FlowChart: per-node arrays ──
  const nodeScales = LEARNING_CYCLE_NODES.map((_, i) => {
    const nodeStart = 150 + i * 25;
    const localFrame = frame - nodeStart;
    if (localFrame < 0) return 0.5;
    const s = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 100 } });
    return interpolate(s, [0, 1], [0.5, 1]);
  });

  const nodeOpacities = LEARNING_CYCLE_NODES.map((_, i) => {
    const nodeStart = 150 + i * 25;
    const localFrame = frame - nodeStart;
    if (localFrame < 0) return 0;
    const s = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 100 } });
    return interpolate(s, [0, 1], [0, 1]);
  });

  const arrowOpacities = LEARNING_CYCLE_NODES.map((_, i) => {
    const arrowStart = 150 + i * 25 + 15;
    const localFrame = frame - arrowStart;
    if (localFrame < 0) return 0;
    const s = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 100 } });
    return interpolate(s, [0, 1], [0, 1]);
  });

  // ── Beat 3: MemberPlaceholder + Overlay + LowerThird ──
  const memberLocal = Math.max(0, frame - 2100);
  const memberSpring = spring({
    frame: memberLocal,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const memberScale = interpolate(memberSpring, [0, 1], [0.85, 1]);
  const memberOpacity = interpolate(memberSpring, [0, 1], [0, 1]);
  const memberRingAngle = (memberLocal / fps) * 80;

  const overlayLocal = Math.max(0, frame - 2100);
  const overlaySpring = spring({
    frame: overlayLocal,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const overlayOpacity = interpolate(overlaySpring, [0, 1], [0, 0.65]);

  const lowerThirdLocal = Math.max(0, frame - 2115);
  const lowerThirdSpring = spring({
    frame: lowerThirdLocal,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const lowerThirdTranslateY = interpolate(lowerThirdSpring, [0, 1], [40, 0]);
  const lowerThirdOpacity = interpolate(lowerThirdSpring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <AbsoluteFill
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)",
          }}
        >
          <SectionTitle
            title="Nhận thức đúng đắn"
            subtitle="Về đại đoàn kết toàn dân tộc"
            sectionNumber="PHẦN 3.1"
            opacity={titleOpacity}
            translateY={titleTranslateY}
          />
        </AbsoluteFill>
      )}

      {/* Beat 2: FlowChart cycle (frames 90-2100) */}
      {beat2Visible && (
        <AbsoluteFill
          style={{
            opacity: beat2Opacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
            gap: 40,
          }}
        >
          {/* Heading */}
          <div
            style={{
              transform: `translateY(${headingY}px)`,
              opacity: headingOpacity,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 4,
                marginBottom: 12,
                textTransform: "uppercase",
                textShadow: TEXT_SHADOW,
              }}
            >
              Chu trình học tập
            </div>
            <h2
              style={{
                fontSize: 50,
                color: COLORS.white,
                fontFamily: FONT,
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1.3,
                textShadow: TEXT_SHADOW,
              }}
            >
              Xây dựng nhận thức đúng đắn về đại đoàn kết
            </h2>
          </div>

          {/* Subtitle */}
          <div
            style={{
              opacity: subtitleOpacity,
              fontSize: 26,
              color: COLORS.body,
              fontFamily: FONT,
              textAlign: "center",
              maxWidth: 900,
              lineHeight: 1.5,
              textShadow: TEXT_SHADOW,
            }}
          >
            Nhận thức đúng đắn là nền tảng để sinh viên thực hành đoàn kết một cách chủ động và có hiệu quả trong môi trường học tập và cuộc sống.
          </div>

          {/* FlowChart — horizontal cycle */}
          <div style={{ width: "100%", marginTop: 20 }}>
            <FlowChart
              nodes={LEARNING_CYCLE_NODES}
              direction="horizontal"
              cycle={true}
              nodeScales={nodeScales}
              nodeOpacities={nodeOpacities}
              arrowOpacities={arrowOpacities}
            />
          </div>

          {/* Bottom annotation */}
          <div
            style={{
              opacity: quoteOpacity,
              fontSize: 22,
              color: COLORS.gold,
              fontFamily: FONT,
              letterSpacing: 1,
              textAlign: "center",
              textShadow: TEXT_SHADOW,
              borderTop: `3px solid rgba(246,173,85,0.3)`,
              paddingTop: 20,
              maxWidth: 800,
            }}
          >
            "Học phải đi đôi với hành" — Tư tưởng Hồ Chí Minh
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder + Overlay + LowerThird (frames 2100-2700) */}
      {frame >= 2100 && (
        <>
          <MemberPlaceholder
            name="Quỳnh Như"
            color={MEMBER_COLORS["Quỳnh Như"] ?? COLORS.dark}
            opacity={memberOpacity}
            scale={memberScale}
            ringAngle={memberRingAngle}
          />
          <Overlay direction="bottom" opacity={overlayOpacity} />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              transform: `translateY(${lowerThirdTranslateY}px)`,
              opacity: lowerThirdOpacity,
            }}
          >
            <LowerThird
              name="Quỳnh Như"
              role="Nhận thức đúng đắn về đại đoàn kết"
            />
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
