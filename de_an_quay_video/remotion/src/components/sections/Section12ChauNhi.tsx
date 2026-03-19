import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter } from "../ds";

// Beat 1: 0-90   — SectionTitle "Năm đặc trưng cơ bản của dân tộc" (full screen)
// Beat 2: 90-2700 — Content (1440px left) + MemberPiP (480px right)

const CHARACTERISTICS = [
  {
    title: "Cộng đồng lãnh thổ",
    detail: "Vùng đất, trời, biển thuộc chủ quyền quốc gia, là nơi cư trú lâu đời của cộng đồng dân tộc.",
    appearAt: 90,
  },
  {
    title: "Cộng đồng sinh hoạt kinh tế",
    detail: "Đặc trưng quan trọng nhất, là cơ sở liên kết các bộ phận, thành viên trong cộng đồng dân tộc.",
    appearAt: 370,
  },
  {
    title: "Cộng đồng ngôn ngữ",
    detail: "Công cụ giao tiếp chung, phản ánh ý thức tự giác tộc người và là tiêu chí quan trọng để phân biệt dân tộc.",
    appearAt: 650,
  },
  {
    title: "Cộng đồng văn hóa và tâm lý",
    detail: "Yếu tố đặc biệt quan trọng, thể hiện qua văn hóa vật chất và tinh thần, tạo bản sắc riêng mỗi dân tộc.",
    appearAt: 930,
  },
  {
    title: "Có chung một nhà nước",
    detail: "Phân biệt dân tộc quốc gia với dân tộc - tộc người, thể hiện qua tổ chức nhà nước thống nhất.",
    appearAt: 1210,
  },
];


export const Section12ChauNhi: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: SectionTitle animation
  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 80]);

  // Beat 2: shared animation values
  const beat2LocalFrame = Math.max(0, frame - 90);
  const ringAngle = (beat2LocalFrame / fps) * 80;

  const headerOpacity = interpolate(frame, [90, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pipOpacity = interpolate(frame, [90, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const citationOpacity = interpolate(frame, [1800, 1860], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Image animations (appear after all 5 cards)
  const img1Opacity = interpolate(frame, [1500, 1530], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const img1Sweep = Math.max(0, Math.min(1, (frame - 1535) / 30));

  const img2Opacity = interpolate(frame, [1620, 1650], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const img2Sweep = Math.max(0, Math.min(1, (frame - 1655) / 30));

  return (
    <AbsoluteFill>
      {/* Beat 1: SectionTitle (frames 0-90) — full screen */}
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
            title="Năm đặc trưng cơ bản"
            subtitle="của dân tộc"
            sectionNumber="PHẦN 1.2"
            opacity={titleOpacity}
            translateY={titleTranslateY}
            accentWidth={titleAccentWidth}
          />
        </AbsoluteFill>
      )}

      {/* Beat 2: Content (1440px) + MemberPiP (480px) — frames 90-2700 */}
      {frame >= 90 && (
        <AbsoluteFill style={{ display: "flex", flexDirection: "row" }}>
          {/* Left: Content area */}
          <div
            style={{
              width: 1440,
              height: 1080,
              padding: "60px 60px 40px 80px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: 24, opacity: headerOpacity }}>
              <div
                style={{
                  fontSize: 32,
                  color: COLORS.gold,
                  fontFamily: FONT,
                  letterSpacing: 4,
                  marginBottom: 8,
                  textShadow: TEXT_SHADOW,
                }}
              >
                PHẦN 1.2
              </div>
              <h2
                style={{
                  fontSize: 52,
                  color: COLORS.white,
                  fontFamily: FONT,
                  fontWeight: "bold",
                  margin: 0,
                  lineHeight: 1.2,
                  textShadow: TEXT_SHADOW,
                }}
              >
                Năm đặc trưng cơ bản của dân tộc
              </h2>
              <div style={{ width: 100, height: 4, backgroundColor: COLORS.gold, marginTop: 16 }} />
            </div>

            {/* 5 characteristic cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CHARACTERISTICS.map((c, i) => {
                const localFrame = frame - c.appearAt;
                if (localFrame < 0) return null;

                const cardSpring = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 90 } });
                const translateX = interpolate(cardSpring, [0, 1], [-80, 0]);
                const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);

                return (
                  <div
                    key={i}
                    style={{
                      transform: `translateX(${translateX}px)`,
                      opacity: cardOpacity,
                      backgroundColor: "rgba(10, 10, 15, 0.88)",
                      border: `3px solid ${COLORS.gold}`,
                      borderLeft: `6px solid ${COLORS.gold}`,
                      borderRadius: 12,
                      padding: "16px 28px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 34,
                        fontWeight: "bold",
                        color: COLORS.white,
                        fontFamily: FONT,
                        marginBottom: 8,
                        lineHeight: 1.2,
                        textShadow: TEXT_SHADOW,
                      }}
                    >
                      {c.title}
                    </div>
                    <div
                      style={{
                        fontSize: 26,
                        color: COLORS.body,
                        fontFamily: FONT,
                        lineHeight: 1.4,
                        textShadow: TEXT_SHADOW,
                      }}
                    >
                      {c.detail}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 2 images side by side */}
            <div style={{ display: "flex", gap: 40, marginTop: 24 }}>
              <div style={{ opacity: img1Opacity }}>
                <ArtDecoImage
                  description="Ảnh minh họa 1"
                  width={340}
                  height={340}
                  ringAngle={ringAngle}
                  sweepProgress={img1Sweep}
                />
              </div>
              <div style={{ opacity: img2Opacity }}>
                <ArtDecoImage
                  description="Ảnh minh họa 2"
                  width={340}
                  height={340}
                  ringAngle={ringAngle}
                  sweepProgress={img2Sweep}
                />
              </div>
            </div>

            {/* Citation */}
            <div style={{ marginTop: "auto" }}>
              <CitationFooter
                text="Giáo trình CNXHKH (2021), Ch.6, I.1, tr.196-200"
                opacity={citationOpacity}
              />
            </div>
          </div>

          {/* Right: MemberPiP (480px) */}
          <div style={{ opacity: pipOpacity }}>
            <MemberPiP
              name="Nguyễn Hồng Châu Nhi"
              sectionLabel="Phần 1.2 - Năm đặc trưng dân tộc"
              ringAngle={ringAngle}
            />
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
