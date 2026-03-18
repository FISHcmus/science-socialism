import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS } from "../../constants";
import { SectionTitle } from "../shared/SectionTitle";
import { FlowChart } from "../shared/FlowChart";
import type { FlowNode } from "../shared/FlowChart";
import { MemberPlaceholder } from "../shared/MemberPlaceholder";
import { Overlay } from "../shared/Overlay";
import { LowerThird } from "../shared/LowerThird";

// Beat 1:    0-90   — SectionTitle "Nhận thức đúng đắn", sectionNumber "PHẦN 3.1"
// Beat 2:  90-2100  — FlowChart horizontal cycle showing the learning cycle
// Beat 3: 2100-2700 — MemberPlaceholder "Quỳnh Như" + Overlay + LowerThird
// Total: 2700 frames (90s)

const LEARNING_CYCLE_NODES: FlowNode[] = [
  {
    icon: "📖",
    label: "Học tập lý luận",
    description: "Nắm vững chủ nghĩa Mác-Lênin",
  },
  {
    icon: "🔍",
    label: "Phân tích thực tiễn",
    description: "Nhận diện thách thức",
  },
  {
    icon: "💡",
    label: "Hình thành nhận thức",
    description: "Tư duy đúng đắn",
  },
  {
    icon: "🎯",
    label: "Hành động đoàn kết",
    description: "Thực hiện trong đời sống",
  },
];

export const Section31QuynhNhu: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 2 envelope
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
  const headingSpring = spring({ frame: headingLocal, fps, config: { damping: 20, stiffness: 80 } });
  const headingY = interpolate(headingSpring, [0, 1], [40, 0]);
  const headingOpacity = interpolate(headingSpring, [0, 1], [0, 1]);

  // Subtitle paragraph fades in after heading
  const subtitleLocal = Math.max(0, frame - 180);
  const subtitleOpacity = interpolate(subtitleLocal, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.navy }}>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <SectionTitle
          title="Nhận thức đúng đắn"
          subtitle="Về đại đoàn kết toàn dân tộc"
          sectionNumber="PHẦN 3.1"
        />
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
            backgroundColor: COLORS.navy,
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
                fontSize: 18,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 4,
                marginBottom: 12,
                textTransform: "uppercase",
              }}
            >
              Chu trình học tập
            </div>
            <h2
              style={{
                fontSize: 44,
                color: COLORS.white,
                fontFamily: FONT,
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Xây dựng nhận thức đúng đắn về đại đoàn kết
            </h2>
          </div>

          {/* Subtitle */}
          <div
            style={{
              opacity: subtitleOpacity,
              fontSize: 22,
              color: COLORS.muted,
              fontFamily: FONT,
              textAlign: "center",
              maxWidth: 900,
              lineHeight: 1.5,
            }}
          >
            Nhận thức đúng đắn là nền tảng để sinh viên thực hành đoàn kết một cách chủ động và có hiệu quả trong môi trường học tập và cuộc sống.
          </div>

          {/* FlowChart — horizontal cycle */}
          <div style={{ width: "100%", marginTop: 20 }}>
            <FlowChart
              nodes={LEARNING_CYCLE_NODES}
              direction="horizontal"
              startFrame={150}
              stagger={25}
              cycle={true}
            />
          </div>

          {/* Bottom annotation */}
          {frame > 400 && (
            <div
              style={{
                opacity: interpolate(frame - 400, [0, 30], [0, 1], { extrapolateRight: "clamp" }),
                fontSize: 18,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 1,
                textAlign: "center",
                borderTop: `1px solid rgba(246,173,85,0.3)`,
                paddingTop: 20,
                maxWidth: 800,
              }}
            >
              "Học phải đi đôi với hành" — Tư tưởng Hồ Chí Minh
            </div>
          )}
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder + Overlay + LowerThird (frames 2100-2700) */}
      {frame >= 2100 && (
        <>
          <MemberPlaceholder
            name="Quỳnh Như"
            color={MEMBER_COLORS["Quỳnh Như"] ?? COLORS.navy}
            showFrom={2100}
          />
          <Overlay direction="bottom" opacity={0.65} showFrom={2100} />
          <LowerThird
            name="Quỳnh Như"
            role="Nhận thức đúng đắn về đại đoàn kết"
            showFrom={2115}
          />
        </>
      )}
    </AbsoluteFill>
  );
};
