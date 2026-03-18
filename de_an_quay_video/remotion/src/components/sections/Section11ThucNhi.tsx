import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, TypewriterText, MemberPlaceholder, Overlay } from "../ds";

// Beat 1: 0-90     — SectionTitle "Ba nguyên tắc cơ bản"
// Beat 2: 90-2100  — Three principle cards appearing sequentially
// Beat 3: 2100-2700 — MemberPlaceholder "Thục Nhi" + Overlay

const PRINCIPLES = [
  {
    title: "Đoàn kết là sức mạnh",
    description: "Tập hợp mọi lực lượng có thể tập hợp",
    detail: "Đoàn kết toàn dân tộc là nguồn gốc sức mạnh và là nhân tố quyết định mọi thắng lợi của cách mạng Việt Nam.",
    appearAt: 90,
  },
  {
    title: "Lấy liên minh công-nông-trí thức làm nền tảng",
    description: "Cơ sở vững chắc cho khối đại đoàn kết",
    detail: "Liên minh giai cấp công nhân, nông dân và tầng lớp trí thức là nền tảng của Mặt trận dân tộc thống nhất.",
    appearAt: 690,
  },
  {
    title: "Đoàn kết lâu dài, chặt chẽ, đoàn kết thật sự",
    description: "Không phải đoàn kết hình thức",
    detail: "Đoàn kết phải xuất phát từ lợi ích chung, được xây dựng trên nền tảng có lý, có tình, bền vững qua thời gian.",
    appearAt: 1290,
  },
];

interface PrincipleCardProps {
  title: string;
  description: string;
  detail: string;
  appearAt: number;
  accentColor: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({
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

  const typeStartFrame = appearAt + 15;
  const speed = 2;
  const visibleChars = Math.min(Math.floor((frame - typeStartFrame) / speed), detail.length);
  const cursorVisible = frame % 30 < 15;

  return (
    <div
      style={{
        transform: `translateX(${translateX}px)`,
        opacity,
        backgroundColor: "rgba(10, 10, 15, 0.88)",
        border: `3px solid ${COLORS.gold}`,
        borderLeft: `6px solid ${accentColor}`,
        borderRadius: 16,
        padding: "32px 40px",
        marginBottom: 28,
        display: "flex",
        alignItems: "flex-start",
        gap: 24,
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: COLORS.white,
            fontFamily: FONT,
            marginBottom: 10,
            lineHeight: 1.3,
            textShadow: TEXT_SHADOW,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 22,
            color: COLORS.gold,
            fontFamily: FONT,
            marginBottom: 12,
            fontStyle: "italic",
            textShadow: TEXT_SHADOW,
          }}
        >
          {description}
        </div>
        <TypewriterText
          text={detail}
          visibleChars={visibleChars}
          fontSize={24}
          color={COLORS.body}
          showCursor={false}
          cursorVisible={cursorVisible}
        />
      </div>
    </div>
  );
};

export const Section11ThucNhi: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: SectionTitle animation values
  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 80]);

  // Beat 3: MemberPlaceholder animation values (showFrom=2100)
  const memberLocalFrame = Math.max(0, frame - 2100);
  const memberScale = spring({ frame: memberLocalFrame, fps, config: { damping: 16, stiffness: 80 } });
  const memberOpacity = interpolate(memberLocalFrame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const memberRingAngle = (memberLocalFrame / fps) * 80;

  // Beat 3: Overlay opacity
  const overlayOpacity = interpolate(frame, [2100, 2120], [0, 0.65], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <AbsoluteFill
          style={{
            background: "linear-gradient(135deg, rgba(10,20,40,0.95) 0%, rgba(20,40,80,0.9) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SectionTitle
            title="Ba nguyên tắc cơ bản"
            subtitle="của đại đoàn kết dân tộc"
            sectionNumber="PHẦN 1.1"
            opacity={titleOpacity}
            translateY={titleTranslateY}
            accentWidth={titleAccentWidth}
          />
        </AbsoluteFill>
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
                fontSize: 24,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 3,
                marginBottom: 10,
                textShadow: TEXT_SHADOW,
              }}
            >
              PHẦN 1.1
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
          <Overlay direction="bottom" opacity={overlayOpacity} />
          <MemberPlaceholder
            name="Thục Nhi"
            color={MEMBER_COLORS["Thục Nhi"] ?? COLORS.dark}
            opacity={memberOpacity}
            scale={memberScale}
            ringAngle={memberRingAngle}
          />
        </>
      )}
    </AbsoluteFill>
  );
};
