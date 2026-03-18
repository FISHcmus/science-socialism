import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, IconGrid, MemberPlaceholder, Overlay } from "../ds";
import type { IconGridItem } from "../ds";

// Beat 1: 0-90     — SectionTitle "Năm đặc trưng ĐĐKTDT"
// Beat 2: 90-2100  — IconGrid with 5 items (3 + 2)
// Beat 3: 2100-2700 — MemberPlaceholder "Châu Nhi" + Overlay

const FEATURES: IconGridItem[] = [
  {
    label: "Tính toàn dân",
    description: "Tập hợp mọi tầng lớp nhân dân không phân biệt dân tộc, tôn giáo, giai cấp",
  },
  {
    label: "Tính mục tiêu",
    description: "Hướng đến lợi ích chung của dân tộc, độc lập - tự do - hạnh phúc",
  },
  {
    label: "Tính tổ chức",
    description: "Thông qua Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội",
  },
  {
    label: "Tính tự nguyện",
    description: "Trên cơ sở tự giác, tự nguyện, bình đẳng giữa các thành viên",
  },
  {
    label: "Tính lâu dài",
    description: "Xây dựng và củng cố qua nhiều thế hệ, kiên định trước mọi thử thách",
  },
];

// First IconGrid: startFrame=110, stagger=30 — 3 items
const GRID1_START = 110;
const GRID1_STAGGER = 30;
const GRID1_ITEMS = FEATURES.slice(0, 3);

// Second IconGrid: startFrame=200, stagger=30 — 2 items
const GRID2_START = 200;
const GRID2_STAGGER = 30;
const GRID2_ITEMS = FEATURES.slice(3, 5);

const MEMBER_SHOW_FROM = 2100;

export const Section12ChauNhi: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: SectionTitle spring animations
  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 120]);

  // Beat 2: header fade-in
  const headerOpacity = interpolate(frame, [90, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Beat 2: per-item scales and opacities for first IconGrid (3 items)
  const grid1Scales = GRID1_ITEMS.map((_, i) => {
    const itemStart = GRID1_START + i * GRID1_STAGGER;
    const localFrame = frame - itemStart;
    if (localFrame < 0) return 0.3;
    const s = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 120 } });
    return interpolate(s, [0, 1], [0.3, 1]);
  });

  const grid1Opacities = GRID1_ITEMS.map((_, i) => {
    const itemStart = GRID1_START + i * GRID1_STAGGER;
    const localFrame = frame - itemStart;
    if (localFrame < 0) return 0;
    const s = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 120 } });
    return interpolate(s, [0, 1], [0, 1]);
  });

  // Beat 2: per-item scales and opacities for second IconGrid (2 items)
  const grid2Scales = GRID2_ITEMS.map((_, i) => {
    const itemStart = GRID2_START + i * GRID2_STAGGER;
    const localFrame = frame - itemStart;
    if (localFrame < 0) return 0.3;
    const s = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 120 } });
    return interpolate(s, [0, 1], [0.3, 1]);
  });

  const grid2Opacities = GRID2_ITEMS.map((_, i) => {
    const itemStart = GRID2_START + i * GRID2_STAGGER;
    const localFrame = frame - itemStart;
    if (localFrame < 0) return 0;
    const s = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 120 } });
    return interpolate(s, [0, 1], [0, 1]);
  });

  // Beat 3: MemberPlaceholder animation
  const memberLocalFrame = Math.max(0, frame - MEMBER_SHOW_FROM);
  const memberSpring = spring({ frame: memberLocalFrame, fps, config: { damping: 18, stiffness: 120 } });
  const memberScale = interpolate(memberSpring, [0, 1], [0.8, 1]);
  const memberOpacity = interpolate(memberSpring, [0, 1], [0, 1]);

  const memberRingAngle = (memberLocalFrame / fps) * 80;

  // Beat 3: Overlay opacity
  const overlayOpacity = interpolate(
    frame,
    [MEMBER_SHOW_FROM, MEMBER_SHOW_FROM + 20],
    [0, 0.65],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

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
            title="Năm đặc trưng ĐĐKTDT"
            subtitle="Đặc trưng của đại đoàn kết toàn dân tộc"
            sectionNumber="PHẦN 1.2"
            opacity={titleOpacity}
            translateY={titleTranslateY}
            accentWidth={titleAccentWidth}
          />
        </AbsoluteFill>
      )}

      {/* Beat 2: IconGrid (frames 90-2100) */}
      {frame >= 90 && frame < 2100 && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "50px 60px",
          }}
        >
          {/* Header */}
          <div
            style={{
              opacity: headerOpacity,
              textAlign: "center",
              marginBottom: 44,
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
              PHẦN 1.2
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
              Năm đặc trưng của đại đoàn kết toàn dân tộc
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

          {/* First row: 3 items */}
          <div style={{ width: "100%", marginBottom: 0 }}>
            <IconGrid
              items={GRID1_ITEMS}
              columns={3}
              itemScales={grid1Scales}
              itemOpacities={grid1Opacities}
            />
          </div>

          {/* Second row: 2 items centered */}
          <div
            style={{
              width: "66.66%",
              marginTop: 20,
            }}
          >
            <IconGrid
              items={GRID2_ITEMS}
              columns={2}
              itemScales={grid2Scales}
              itemOpacities={grid2Opacities}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder "Châu Nhi" + Overlay (frames 2100-2700) */}
      {frame >= MEMBER_SHOW_FROM && (
        <>
          <Overlay direction="bottom" opacity={overlayOpacity} />
          <MemberPlaceholder
            name="Châu Nhi"
            color={MEMBER_COLORS["Châu Nhi"] ?? COLORS.dark}
            opacity={memberOpacity}
            scale={memberScale}
            ringAngle={memberRingAngle}
          />
        </>
      )}
    </AbsoluteFill>
  );
};
