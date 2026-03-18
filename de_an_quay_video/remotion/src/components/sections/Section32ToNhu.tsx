import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS, TEXT_SHADOW } from "../../constants";
import {
  SectionTitle,
  FlowChart,
  MemberPlaceholder,
  Overlay,
  LowerThird,
} from "../ds";
import type { FlowNode } from "../ds";

// Beat 1:    0-90   — SectionTitle "Rèn luyện phẩm chất", sectionNumber "PHẦN 3.2"
// Beat 2:  90-2100  — FlowChart vertical (funnel) showing qualities to cultivate
// Beat 3: 2100-2700 — MemberPlaceholder "Tố Như" + Overlay + LowerThird
// Total: 2700 frames (90s)

const QUALITY_NODES: FlowNode[] = [
  {
    label: "Rèn luyện đạo đức",
    description: "Tu dưỡng phẩm chất cá nhân",
  },
  {
    label: "Tinh thần hợp tác",
    description: "Làm việc nhóm, tôn trọng khác biệt",
  },
  {
    label: "Ý thức cộng đồng",
    description: "Quan tâm lợi ích tập thể",
  },
  {
    label: "Bản lĩnh chính trị",
    description: "Kiên định lập trường đúng đắn",
  },
];

export const Section32ToNhu: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── Beat 1: SectionTitle ──────────────────────────────────────────────────
  const titleSpring = spring({ frame, fps, config: { damping: 20, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);

  // ── Beat 2 envelope ───────────────────────────────────────────────────────
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

  // ── FlowChart: per-node arrays (startFrame=150, stagger=30) ───────────────
  const flowStartFrame = 150;
  const flowStagger = 30;

  const nodeScales = QUALITY_NODES.map((_, i) => {
    const nodeLocal = Math.max(0, frame - (flowStartFrame + i * flowStagger));
    const s = spring({ frame: nodeLocal, fps, config: { damping: 18, stiffness: 90 } });
    return interpolate(s, [0, 1], [0.7, 1]);
  });

  const nodeOpacities = QUALITY_NODES.map((_, i) => {
    const nodeLocal = Math.max(0, frame - (flowStartFrame + i * flowStagger));
    return interpolate(nodeLocal, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  });

  const arrowOpacities = QUALITY_NODES.map((_, i) => {
    // Arrow between node i and node i+1 appears with node i+1
    const arrowLocal = Math.max(0, frame - (flowStartFrame + (i + 1) * flowStagger));
    return interpolate(arrowLocal, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  });

  // ── Beat 3: MemberPlaceholder / Overlay / LowerThird ─────────────────────
  const showFrom = 2100;
  const memberLocal = Math.max(0, frame - showFrom);
  const memberOpacity = interpolate(memberLocal, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const memberRingAngle = (memberLocal / fps) * 80;
  const memberScaleSpring = spring({ frame: memberLocal, fps, config: { damping: 20, stiffness: 80 } });
  const memberScale = interpolate(memberScaleSpring, [0, 1], [0.9, 1]);

  const overlayLocal = Math.max(0, frame - showFrom);
  const overlayOpacity = interpolate(overlayLocal, [0, 30], [0, 0.65], { extrapolateRight: "clamp" });

  const lowerThirdShowFrom = 2115;
  const lowerThirdLocal = Math.max(0, frame - lowerThirdShowFrom);
  const lowerThirdOpacity = interpolate(lowerThirdLocal, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const lowerThirdTranslateY = interpolate(
    spring({ frame: lowerThirdLocal, fps, config: { damping: 20, stiffness: 80 } }),
    [0, 1],
    [20, 0]
  );

  return (
    <AbsoluteFill>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <AbsoluteFill
          style={{
            background: "linear-gradient(135deg, rgba(10,10,30,0.95) 0%, rgba(20,20,50,0.95) 100%)",
          }}
        >
          <SectionTitle
            title="Rèn luyện phẩm chất"
            subtitle="Đoàn kết trong thực tiễn sinh viên"
            sectionNumber="PHẦN 3.2"
            opacity={titleOpacity}
            translateY={titleTranslateY}
          />
        </AbsoluteFill>
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
              borderRight: "3px solid rgba(255,255,255,0.15)",
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
                  fontSize: 22,
                  color: COLORS.gold,
                  fontFamily: FONT,
                  letterSpacing: 4,
                  marginBottom: 16,
                  textTransform: "uppercase",
                  textShadow: TEXT_SHADOW,
                }}
              >
                Phẩm chất cốt lõi
              </div>
              <h2
                style={{
                  fontSize: 42,
                  color: COLORS.white,
                  fontFamily: FONT,
                  fontWeight: "bold",
                  lineHeight: 1.4,
                  margin: "0 0 24px 0",
                  textShadow: TEXT_SHADOW,
                }}
              >
                Rèn luyện phẩm chất đoàn kết
              </h2>
              <div
                style={{
                  fontSize: 24,
                  color: COLORS.body,
                  fontFamily: FONT,
                  lineHeight: 1.6,
                  textShadow: TEXT_SHADOW,
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
                  backgroundColor: "rgba(10, 10, 15, 0.85)",
                  border: `3px solid ${COLORS.gold}`,
                  borderRadius: 16,
                  padding: "20px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: COLORS.gold,
                    fontFamily: FONT,
                    lineHeight: 1.3,
                    textShadow: TEXT_SHADOW,
                  }}
                >
                  Sinh viên đoàn kết
                </div>
                <div
                  style={{
                    fontSize: 22,
                    color: COLORS.body,
                    fontFamily: FONT,
                    marginTop: 6,
                    textShadow: TEXT_SHADOW,
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
                  backgroundColor: COLORS.gold,
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  fontSize: 22,
                  color: COLORS.gold,
                  fontFamily: FONT,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  textShadow: TEXT_SHADOW,
                }}
              >
                Từng bước rèn luyện
              </div>
              <div
                style={{
                  width: 40,
                  height: 2,
                  backgroundColor: COLORS.gold,
                  borderRadius: 1,
                }}
              />
            </div>

            {/* Vertical FlowChart */}
            <FlowChart
              nodes={QUALITY_NODES}
              direction="vertical"
              cycle={false}
              nodeScales={nodeScales}
              nodeOpacities={nodeOpacities}
              arrowOpacities={arrowOpacities}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder + Overlay + LowerThird (frames 2100-2700) */}
      {frame >= 2100 && (
        <>
          <MemberPlaceholder
            name="Tố Như"
            color={MEMBER_COLORS["Tố Như"] ?? COLORS.dark}
            opacity={memberOpacity}
            scale={memberScale}
            ringAngle={memberRingAngle}
          />
          <Overlay direction="bottom" opacity={overlayOpacity} />
          <div
            style={{
              position: "absolute",
              bottom: 80,
              left: 60,
            }}
          >
            <LowerThird
              name="Tố Như"
              role="Rèn luyện phẩm chất đoàn kết"
              opacity={lowerThirdOpacity}
              translateY={lowerThirdTranslateY}
            />
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
