import { AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, IconGrid, MemberPlaceholder, Overlay } from "../ds";

// Total duration: 2700 frames (90s)
// Beat 1: 0-90    — SectionTitle
// Beat 2: 90-2100 — IconGrid two-column layout
// Beat 3: 2100-2700 — MemberPlaceholder + Overlay

const CAMPUS_ITEMS = [
  {
    label: "Hoạt động Đoàn-Hội",
    description: "Tham gia tổ chức Đoàn, Hội sinh viên",
  },
  {
    label: "Học tập nhóm",
    description: "Hỗ trợ bạn bè học tập",
  },
  {
    label: "Hoạt động văn hóa",
    description: "Giao lưu văn hóa đa dân tộc",
  },
];

const COMMUNITY_ITEMS = [
  {
    label: "Tình nguyện",
    description: "Mùa hè xanh, tiếp sức mùa thi",
  },
  {
    label: "Cộng đồng",
    description: "Giúp đỡ đồng bào khó khăn",
  },
  {
    label: "Truyền thông",
    description: "Lan tỏa tinh thần đoàn kết",
  },
];

const Beat1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({ frame, fps, config: { damping: 20, stiffness: 80 } });
  const titleOpacity =
    frame < 60
      ? interpolate(slideIn, [0, 1], [0, 1])
      : interpolate(frame, [60, 90], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
  const titleTranslateY = interpolate(slideIn, [0, 1], [80, 0]);
  const titleAccentWidth = interpolate(slideIn, [0, 1], [0, 200]);

  return (
    <AbsoluteFill>
      <SectionTitle
        title="Hoạt động thực tiễn"
        subtitle="Sinh viên với xây dựng khối đại đoàn kết"
        sectionNumber="PHẦN 3.3"
        opacity={titleOpacity}
        translateY={titleTranslateY}
        accentWidth={titleAccentWidth}
      />
    </AbsoluteFill>
  );
};

const Beat2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const items = [...CAMPUS_ITEMS, ...COMMUNITY_ITEMS];

  const itemScales = items.map((_, i) => {
    const itemStart = 10 + i * 15;
    const localFrame = frame - itemStart;
    if (localFrame < 0) return 0.3;
    const pop = spring({ frame: localFrame, fps, config: { damping: 12, stiffness: 120 } });
    return interpolate(pop, [0, 1], [0.3, 1]);
  });

  const itemOpacities = items.map((_, i) => {
    const itemStart = 10 + i * 15;
    const localFrame = frame - itemStart;
    if (localFrame < 0) return 0;
    const pop = spring({ frame: localFrame, fps, config: { damping: 12, stiffness: 120 } });
    return interpolate(pop, [0, 1], [0, 1]);
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, rgba(10,22,40,0.4) 0%, rgba(26,54,93,0.4) 100%)`,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 40,
        paddingTop: 60,
      }}
    >
      {/* Section header */}
      <div
        style={{
          color: COLORS.gold,
          fontSize: 24,
          letterSpacing: 3,
          fontFamily: FONT,
          opacity: Math.min(frame / 20, 1),
          marginBottom: 8,
          textShadow: TEXT_SHADOW,
        }}
      >
        PHẦN 3.3 — HOẠT ĐỘNG THỰC TIỄN CỦA SINH VIÊN
      </div>

      {/* Two-column grid — all 6 items ordered left column then right column */}
      <IconGrid
        items={items}
        columns={2}
        itemScales={itemScales}
        itemOpacities={itemOpacities}
      />
    </AbsoluteFill>
  );
};

const Beat3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const memberScale = spring({ frame, fps, config: { damping: 15, stiffness: 100 } });
  const memberOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const memberRingAngle = (frame / fps) * 80;
  const overlayOpacity = interpolate(frame, [0, 20], [0, 0.6], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <MemberPlaceholder
        name="Ý Như"
        color={MEMBER_COLORS["Ý Như"] ?? "#2d3748"}
        opacity={memberOpacity}
        scale={memberScale}
        ringAngle={memberRingAngle}
      />
      <Overlay direction="bottom" opacity={overlayOpacity} />
    </AbsoluteFill>
  );
};

export const Section33YNhu: React.FC = () => (
  <AbsoluteFill>
    {/* Beat 1: Section title card */}
    <Sequence from={0} durationInFrames={90}>
      <Beat1 />
    </Sequence>

    {/* Beat 2: Icon grid */}
    <Sequence from={90} durationInFrames={2010}>
      <Beat2 />
    </Sequence>

    {/* Beat 3: Member placeholder */}
    <Sequence from={2100} durationInFrames={600}>
      <Beat3 />
    </Sequence>
  </AbsoluteFill>
);
