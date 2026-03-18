import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import { COLORS, MEMBER_COLORS } from "../../constants";
import { SectionTitle } from "../shared/SectionTitle";
import { IconGrid } from "../shared/IconGrid";
import { MemberPlaceholder } from "../shared/MemberPlaceholder";
import { Overlay } from "../shared/Overlay";

// Total duration: 2700 frames (90s)
// Beat 1: 0-90    — SectionTitle
// Beat 2: 90-2100 — IconGrid two-column layout
// Beat 3: 2100-2700 — MemberPlaceholder + Overlay

const CAMPUS_ITEMS = [
  {
    icon: "🏫",
    label: "Hoạt động Đoàn-Hội",
    description: "Tham gia tổ chức Đoàn, Hội sinh viên",
  },
  {
    icon: "📚",
    label: "Học tập nhóm",
    description: "Hỗ trợ bạn bè học tập",
  },
  {
    icon: "🎭",
    label: "Hoạt động văn hóa",
    description: "Giao lưu văn hóa đa dân tộc",
  },
];

const COMMUNITY_ITEMS = [
  {
    icon: "🌾",
    label: "Tình nguyện",
    description: "Mùa hè xanh, tiếp sức mùa thi",
  },
  {
    icon: "🏘️",
    label: "Cộng đồng",
    description: "Giúp đỡ đồng bào khó khăn",
  },
  {
    icon: "🌐",
    label: "Truyền thông",
    description: "Lan tỏa tinh thần đoàn kết",
  },
];

const Beat2: React.FC = () => {
  const frame = useCurrentFrame();

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
          fontSize: 20,
          letterSpacing: 3,
          fontFamily: "'Times New Roman', 'Noto Serif', Georgia, serif",
          opacity: Math.min(frame / 20, 1),
          marginBottom: 8,
        }}
      >
        PHẦN 3.3 — HOẠT ĐỘNG THỰC TIỄN CỦA SINH VIÊN
      </div>

      {/* Two-column grid — all 6 items ordered left column then right column */}
      <IconGrid
        items={[...CAMPUS_ITEMS, ...COMMUNITY_ITEMS]}
        columns={2}
        startFrame={10}
        stagger={15}
      />
    </AbsoluteFill>
  );
};

const Beat3: React.FC = () => (
  <AbsoluteFill>
    <MemberPlaceholder
      name="Ý Như"
      color={MEMBER_COLORS["Ý Như"] ?? "#2d3748"}
      showFrom={0}
    />
    <Overlay direction="bottom" opacity={0.6} showFrom={0} />
  </AbsoluteFill>
);

export const Section33YNhu: React.FC = () => (
  <AbsoluteFill>
    {/* Beat 1: Section title card */}
    <Sequence from={0} durationInFrames={90}>
      <SectionTitle
        title="Hoạt động thực tiễn"
        subtitle="Sinh viên với xây dựng khối đại đoàn kết"
        sectionNumber="PHẦN 3.3"
      />
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
