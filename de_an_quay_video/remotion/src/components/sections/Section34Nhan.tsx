import { AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS } from "../../constants";
import { SectionTitle } from "../shared/SectionTitle";
import { MemberPlaceholder } from "../shared/MemberPlaceholder";
import { Overlay } from "../shared/Overlay";

// Total duration: 2700 frames (90s)
// Beat 1: 0-90      — SectionTitle
// Beat 2: 90-2100   — 3 summary cards stacked vertically, staggered ~400 frames each
// Beat 3: 2100-2700 — MemberPlaceholder + Overlay

interface SummaryCardProps {
  icon: string;
  title: string;
  description: string;
  appearAtFrame: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  icon,
  title,
  description,
  appearAtFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - appearAtFrame;
  if (localFrame < 0) return null;

  const pop = spring({
    frame: localFrame,
    fps,
    config: { damping: 18, stiffness: 80 },
  });

  const translateY = interpolate(pop, [0, 1], [60, 0]);
  const opacity = interpolate(pop, [0, 1], [0, 1]);

  return (
    <div
      style={{
        transform: `translateY(${translateY}px)`,
        opacity,
        backgroundColor: "rgba(255,255,255,0.06)",
        borderLeft: `5px solid ${COLORS.gold}`,
        borderRadius: 12,
        padding: "28px 36px",
        display: "flex",
        alignItems: "flex-start",
        gap: 24,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ fontSize: 48, flexShrink: 0, lineHeight: 1 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: COLORS.white,
            fontFamily: FONT,
            marginBottom: 8,
            lineHeight: 1.3,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 18,
            color: COLORS.muted,
            fontFamily: FONT,
            lineHeight: 1.5,
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

const Beat2: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, rgba(10,22,40,0.4) 0%, rgba(26,54,93,0.4) 100%)`,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "60px 160px",
        gap: 36,
      }}
    >
      {/* Heading */}
      <div
        style={{
          color: COLORS.gold,
          fontSize: 20,
          letterSpacing: 3,
          fontFamily: FONT,
          opacity: Math.min(frame / 20, 1),
          marginBottom: 8,
          alignSelf: "flex-start",
        }}
      >
        PHẦN 3.4 — TỔNG KẾT & LIÊN HỆ BẢN THÂN
      </div>

      {/* Card 1 — appears at frame 20 */}
      <SummaryCard
        icon="🎓"
        title="Lý luận → Thực tiễn"
        description="Nắm vững lý luận Mác-Lênin về đại đoàn kết để vận dụng vào thực tiễn"
        appearAtFrame={20}
      />

      {/* Card 2 — appears at frame 420 (~14s offset) */}
      <SummaryCard
        icon="🤝"
        title="Cá nhân → Tập thể"
        description="Từ rèn luyện bản thân đến đóng góp cho cộng đồng, xã hội"
        appearAtFrame={420}
      />

      {/* Card 3 — appears at frame 820 (~27s offset) */}
      <SummaryCard
        icon="🇻🇳"
        title="Sinh viên → Đất nước"
        description="Thế hệ trẻ có vai trò then chốt trong xây dựng khối đại đoàn kết"
        appearAtFrame={820}
      />
    </AbsoluteFill>
  );
};

const Beat3: React.FC = () => (
  <AbsoluteFill>
    <MemberPlaceholder
      name="Nhân"
      color={MEMBER_COLORS["Nhân"] ?? "#1a365d"}
      showFrom={0}
    />
    <Overlay direction="bottom" opacity={0.6} showFrom={0} />
  </AbsoluteFill>
);

export const Section34Nhan: React.FC = () => (
  <AbsoluteFill>
    {/* Beat 1: Section title card */}
    <Sequence from={0} durationInFrames={90}>
      <SectionTitle
        title="Tổng kết & liên hệ"
        subtitle="Từ lý luận đến hành động của sinh viên"
        sectionNumber="PHẦN 3.4"
      />
    </Sequence>

    {/* Beat 2: Summary cards */}
    <Sequence from={90} durationInFrames={2010}>
      <Beat2 />
    </Sequence>

    {/* Beat 3: Member placeholder */}
    <Sequence from={2100} durationInFrames={600}>
      <Beat3 />
    </Sequence>
  </AbsoluteFill>
);
