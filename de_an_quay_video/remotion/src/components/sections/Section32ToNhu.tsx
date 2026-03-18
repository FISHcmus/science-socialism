import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS } from "../../constants";
import { SectionTitle } from "../shared/SectionTitle";
import { FlowChart } from "../shared/FlowChart";
import type { FlowNode } from "../shared/FlowChart";
import { MemberPlaceholder } from "../shared/MemberPlaceholder";
import { Overlay } from "../shared/Overlay";
import { LowerThird } from "../shared/LowerThird";

// Beat 1:    0-90   — SectionTitle "Rèn luyện phẩm chất", sectionNumber "PHẦN 3.2"
// Beat 2:  90-2100  — FlowChart vertical (funnel) showing qualities to cultivate
// Beat 3: 2100-2700 — MemberPlaceholder "Tố Như" + Overlay + LowerThird
// Total: 2700 frames (90s)

const QUALITY_NODES: FlowNode[] = [
  {
    icon: "🏋️",
    label: "Rèn luyện đạo đức",
    description: "Tu dưỡng phẩm chất cá nhân",
  },
  {
    icon: "🤝",
    label: "Tinh thần hợp tác",
    description: "Làm việc nhóm, tôn trọng khác biệt",
  },
  {
    icon: "🌍",
    label: "Ý thức cộng đồng",
    description: "Quan tâm lợi ích tập thể",
  },
  {
    icon: "💪",
    label: "Bản lĩnh chính trị",
    description: "Kiên định lập trường đúng đắn",
  },
];

export const Section32ToNhu: React.FC = () => {
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

  // Funnel label fades in after heading
  const funnelLabelLocal = Math.max(0, frame - 200);
  const funnelLabelOpacity = interpolate(funnelLabelLocal, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Final result box appears after all nodes
  const resultLocal = Math.max(0, frame - 700);
  const resultOpacity = interpolate(resultLocal, [0, 40], [0, 1], {
    extrapolateRight: "clamp",
  });
  const resultScale = interpolate(
    spring({ frame: resultLocal, fps, config: { damping: 14, stiffness: 90 } }),
    [0, 1],
    [0.8, 1]
  );

  return (
    <AbsoluteFill>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <SectionTitle
          title="Rèn luyện phẩm chất"
          subtitle="Đoàn kết trong thực tiễn sinh viên"
          sectionNumber="PHẦN 3.2"
        />
      )}

      {/* Beat 2: Vertical FlowChart funnel (frames 90-2100) */}
      {beat2Visible && (
        <AbsoluteFill
          style={{
            opacity: beat2Opacity,
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            gap: 0,
          }}
        >
          {/* Left column: heading + description */}
          <div
            style={{
              flex: "0 0 400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "60px 50px 60px 70px",
              borderRight: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                transform: `translateY(${headingY}px)`,
                opacity: headingOpacity,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  color: COLORS.gold,
                  fontFamily: FONT,
                  letterSpacing: 4,
                  marginBottom: 16,
                  textTransform: "uppercase",
                }}
              >
                Phẩm chất cốt lõi
              </div>
              <h2
                style={{
                  fontSize: 36,
                  color: COLORS.white,
                  fontFamily: FONT,
                  fontWeight: "bold",
                  lineHeight: 1.4,
                  margin: "0 0 24px 0",
                }}
              >
                Rèn luyện phẩm chất đoàn kết
              </h2>
              <div
                style={{
                  fontSize: 19,
                  color: COLORS.muted,
                  fontFamily: FONT,
                  lineHeight: 1.6,
                }}
              >
                Sinh viên cần tự giác rèn luyện các phẩm chất để trở thành nhân tố tích cực trong việc xây dựng khối đại đoàn kết toàn dân tộc.
              </div>
            </div>

            {/* Result box */}
            {frame > 700 && (
              <div
                style={{
                  opacity: resultOpacity,
                  transform: `scale(${resultScale})`,
                  marginTop: 36,
                  backgroundColor: "rgba(246,173,85,0.12)",
                  border: `2px solid ${COLORS.gold}`,
                  borderRadius: 16,
                  padding: "20px 24px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>🌟</div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: COLORS.gold,
                    fontFamily: FONT,
                    lineHeight: 1.3,
                  }}
                >
                  Sinh viên đoàn kết
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: COLORS.muted,
                    fontFamily: FONT,
                    marginTop: 6,
                  }}
                >
                  Xây dựng tương lai đất nước
                </div>
              </div>
            )}
          </div>

          {/* Right column: funnel label + vertical FlowChart */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 60px",
            }}
          >
            {/* Funnel header */}
            <div
              style={{
                opacity: funnelLabelOpacity,
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 2,
                  backgroundColor: COLORS.teal,
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  fontSize: 16,
                  color: COLORS.teal,
                  fontFamily: FONT,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                Từng bước rèn luyện
              </div>
              <div
                style={{
                  width: 40,
                  height: 2,
                  backgroundColor: COLORS.teal,
                  borderRadius: 1,
                }}
              />
            </div>

            {/* Vertical FlowChart */}
            <FlowChart
              nodes={QUALITY_NODES}
              direction="vertical"
              startFrame={150}
              stagger={30}
              cycle={false}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder + Overlay + LowerThird (frames 2100-2700) */}
      {frame >= 2100 && (
        <>
          <MemberPlaceholder
            name="Tố Như"
            color={MEMBER_COLORS["Tố Như"] ?? COLORS.navy}
            showFrom={2100}
          />
          <Overlay direction="bottom" opacity={0.65} showFrom={2100} />
          <LowerThird
            name="Tố Như"
            role="Rèn luyện phẩm chất đoàn kết"
            showFrom={2115}
          />
        </>
      )}
    </AbsoluteFill>
  );
};
