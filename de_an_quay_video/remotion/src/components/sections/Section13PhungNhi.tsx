import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, FlowChart, MemberPlaceholder, Overlay } from "../ds";
import type { FlowNode } from "../ds";

// Beat 1: 0-90     — SectionTitle "Bốn nguyên tắc xây dựng"
// Beat 2: 90-2100  — FlowChart (vertical) with 4 nodes, startFrame=110, stagger=40
// Beat 3: 2100-2700 — MemberPlaceholder "Phụng Nhi" + Overlay

const PRINCIPLES: FlowNode[] = [
  {
    label: "Xây dựng trên nền tảng lợi ích chung",
    description: "Lấy lợi ích dân tộc, Tổ quốc làm điểm tương đồng để quy tụ mọi người",
  },
  {
    label: "Đoàn kết tự nguyện, bình đẳng",
    description: "Tôn trọng sự khác biệt, không phân biệt đối xử; đoàn kết trên cơ sở tự nguyện",
  },
  {
    label: "Phát huy vai trò của MTTQVN",
    description: "Mặt trận Tổ quốc Việt Nam là tổ chức liên minh chính trị, nòng cốt của khối đại đoàn kết",
  },
  {
    label: "Gắn với mục tiêu xây dựng CNXH",
    description: "Đoàn kết toàn dân tộc nhằm thực hiện thắng lợi sự nghiệp xây dựng và bảo vệ Tổ quốc",
  },
];

const FLOW_START_FRAME = 110;
const FLOW_STAGGER = 40;

export const Section13PhungNhi: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: SectionTitle slide-in spring
  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 120]);

  // Beat 2: FlowChart — per-node scales, opacities, arrowOpacities
  const nodeScales: number[] = PRINCIPLES.map((_, i) => {
    const nodeStart = FLOW_START_FRAME + i * FLOW_STAGGER;
    const localFrame = frame - nodeStart;
    if (localFrame < 0) return 0.5;
    const s = spring({ frame: localFrame, fps, config: { damping: 18, stiffness: 120 } });
    return interpolate(s, [0, 1], [0.5, 1]);
  });

  const nodeOpacities: number[] = PRINCIPLES.map((_, i) => {
    const nodeStart = FLOW_START_FRAME + i * FLOW_STAGGER;
    const localFrame = frame - nodeStart;
    if (localFrame < 0) return 0;
    const s = spring({ frame: localFrame, fps, config: { damping: 18, stiffness: 120 } });
    return interpolate(s, [0, 1], [0, 1]);
  });

  const arrowOpacities: number[] = PRINCIPLES.map((_, i) => {
    const arrowStart = FLOW_START_FRAME + i * FLOW_STAGGER + FLOW_STAGGER / 2;
    const localFrame = frame - arrowStart;
    if (localFrame < 0) return 0;
    const s = spring({ frame: localFrame, fps, config: { damping: 18, stiffness: 120 } });
    return interpolate(s, [0, 1], [0, 1]);
  });

  // Beat 3: MemberPlaceholder + Overlay
  const showFrom = 2100;
  const memberLocalFrame = frame - showFrom;
  const memberSpring =
    memberLocalFrame >= 0
      ? spring({ frame: memberLocalFrame, fps, config: { damping: 18, stiffness: 120 } })
      : 0;
  const memberScale = interpolate(memberSpring, [0, 1], [0.8, 1]);
  const memberOpacity = interpolate(memberSpring, [0, 1], [0, 1]);
  const memberRingAngle = memberLocalFrame >= 0 ? (memberLocalFrame / fps) * 80 : 0;
  const overlayOpacity = frame >= showFrom ? interpolate(memberSpring, [0, 1], [0, 0.65]) : 0;

  return (
    <AbsoluteFill>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <AbsoluteFill
          style={{
            background: `linear-gradient(135deg, ${COLORS.darkest} 0%, ${COLORS.dark} 100%)`,
          }}
        >
          <SectionTitle
            title="Bốn nguyên tắc xây dựng"
            subtitle="Nguyên tắc xây dựng khối đại đoàn kết toàn dân tộc"
            sectionNumber="PHẦN 1.3"
            opacity={titleOpacity}
            translateY={titleTranslateY}
            accentWidth={titleAccentWidth}
          />
        </AbsoluteFill>
      )}

      {/* Beat 2: FlowChart vertical (frames 90-2100) */}
      {frame >= 90 && frame < 2100 && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "50px 60px 40px",
          }}
        >
          {/* Header */}
          <div
            style={{
              opacity: interpolate(frame, [90, 115], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              textAlign: "center",
              marginBottom: 32,
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 3,
                marginBottom: 10,
                textShadow: TEXT_SHADOW,
              }}
            >
              PHẦN 1.3
            </div>
            <h2
              style={{
                fontSize: 48,
                color: COLORS.white,
                fontFamily: FONT,
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1.3,
                textShadow: TEXT_SHADOW,
              }}
            >
              Bốn nguyên tắc xây dựng khối đại đoàn kết
            </h2>
            <div
              style={{
                width: 80,
                height: 3,
                backgroundColor: COLORS.gold,
                margin: "16px auto 0",
              }}
            />
          </div>

          {/* Vertical FlowChart */}
          <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "center" }}>
            <FlowChart
              nodes={PRINCIPLES}
              direction="vertical"
              cycle={false}
              nodeScales={nodeScales}
              nodeOpacities={nodeOpacities}
              arrowOpacities={arrowOpacities}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder "Phụng Nhi" + Overlay (frames 2100-2700) */}
      {frame >= showFrom && (
        <>
          <MemberPlaceholder
            name="Phụng Nhi"
            color={MEMBER_COLORS["Phụng Nhi"] ?? COLORS.dark}
            opacity={memberOpacity}
            scale={memberScale}
            ringAngle={memberRingAngle}
          />
          <Overlay direction="bottom" opacity={overlayOpacity} />
        </>
      )}
    </AbsoluteFill>
  );
};
