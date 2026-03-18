import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS } from "../../constants";
import { SectionTitle } from "../shared/SectionTitle";
import { TypewriterText } from "../shared/TypewriterText";
import { MemberPlaceholder } from "../shared/MemberPlaceholder";
import { Overlay } from "../shared/Overlay";

// Beat 1: 0-90     — SectionTitle "Ba nguyên tắc cơ bản"
// Beat 2: 90-2100  — Three principle cards appearing sequentially
// Beat 3: 2100-2700 — MemberPlaceholder "Thục Nhi" + Overlay

const PRINCIPLES = [
  {
    icon: "💪",
    title: "Đoàn kết là sức mạnh",
    description: "Tập hợp mọi lực lượng có thể tập hợp",
    detail: "Đoàn kết toàn dân tộc là nguồn gốc sức mạnh và là nhân tố quyết định mọi thắng lợi của cách mạng Việt Nam.",
    appearAt: 90,
  },
  {
    icon: "🌾",
    title: "Lấy liên minh công-nông-trí thức làm nền tảng",
    description: "Cơ sở vững chắc cho khối đại đoàn kết",
    detail: "Liên minh giai cấp công nhân, nông dân và tầng lớp trí thức là nền tảng của Mặt trận dân tộc thống nhất.",
    appearAt: 690,
  },
  {
    icon: "🤝",
    title: "Đoàn kết lâu dài, chặt chẽ, đoàn kết thật sự",
    description: "Không phải đoàn kết hình thức",
    detail: "Đoàn kết phải xuất phát từ lợi ích chung, được xây dựng trên nền tảng có lý, có tình, bền vững qua thời gian.",
    appearAt: 1290,
  },
];

interface PrincipleCardProps {
  icon: string;
  title: string;
  description: string;
  detail: string;
  appearAt: number;
  accentColor: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({
  icon,
  title,
  description,
  detail,
  appearAt,
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - appearAt;

  if (localFrame < 0) return null;

  const cardSpring = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 90 } });
  const translateX = interpolate(cardSpring, [0, 1], [-80, 0]);
  const opacity = interpolate(cardSpring, [0, 1], [0, 1]);

  return (
    <div
      style={{
        transform: `translateX(${translateX}px)`,
        opacity,
        backgroundColor: "rgba(255,255,255,0.06)",
        border: `2px solid ${COLORS.gold}`,
        borderLeft: `6px solid ${accentColor}`,
        borderRadius: 16,
        padding: "28px 36px",
        marginBottom: 28,
        display: "flex",
        alignItems: "flex-start",
        gap: 24,
      }}
    >
      <div style={{ fontSize: 52, flexShrink: 0, lineHeight: 1 }}>{icon}</div>
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
            color: COLORS.gold,
            fontFamily: FONT,
            marginBottom: 10,
            fontStyle: "italic",
          }}
        >
          {description}
        </div>
        <TypewriterText
          text={detail}
          startFrame={appearAt + 15}
          speed={2}
          fontSize={17}
          color={COLORS.muted}
          showCursor={false}
        />
      </div>
    </div>
  );
};

export const Section11ThucNhi: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.navy }}>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <SectionTitle
          title="Ba nguyên tắc cơ bản"
          subtitle="của đại đoàn kết dân tộc"
          sectionNumber="PHẦN 1.1"
        />
      )}

      {/* Beat 2: Principle cards (frames 90-2100) */}
      {frame >= 90 && frame < 2100 && (
        <AbsoluteFill
          style={{
            padding: "60px 100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {/* Header */}
          <div
            style={{
              marginBottom: 40,
              opacity: interpolate(frame, [90, 110], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              style={{
                fontSize: 20,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 3,
                marginBottom: 10,
              }}
            >
              PHẦN 1.1
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
              Ba nguyên tắc cơ bản của đại đoàn kết dân tộc
            </h2>
            <div
              style={{
                width: 80,
                height: 3,
                backgroundColor: COLORS.gold,
                marginTop: 16,
              }}
            />
          </div>

          {/* Cards */}
          {PRINCIPLES.map((p, i) => (
            <PrincipleCard
              key={i}
              icon={p.icon}
              title={p.title}
              description={p.description}
              detail={p.detail}
              appearAt={p.appearAt}
              accentColor={COLORS.gold}
            />
          ))}
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder "Thục Nhi" + Overlay (frames 2100-2700) */}
      {frame >= 2100 && (
        <>
          <MemberPlaceholder
            name="Thục Nhi"
            color={MEMBER_COLORS["Thục Nhi"] ?? COLORS.navyLight}
            showFrom={2100}
          />
          <Overlay direction="bottom" opacity={0.65} showFrom={2100} />
        </>
      )}
    </AbsoluteFill>
  );
};
