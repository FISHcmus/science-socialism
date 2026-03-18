import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter } from "../ds";

// Beat 1: 0-90   — SectionTitle "Cương lĩnh dân tộc của CN Mác - Lênin" (full screen)
// Beat 2: 90-2700 — Content (720px left) + MemberPiP (240px right)

const PRINCIPLES = [
  {
    title: "Các dân tộc hoàn toàn bình đẳng",
    detail: "Mọi dân tộc đều có quyền và nghĩa vụ ngang nhau trên mọi lĩnh vực, không phân biệt lớn nhỏ, trình độ phát triển.",
    image: "Đồng bào các dân tộc thiểu số Việt Nam",
    appearAt: 90,
  },
  {
    title: "Các dân tộc có quyền tự quyết",
    detail: "Quyền tự quyết định chế độ chính trị, con đường phát triển của mình. HCM: con đường cách mạng vô sản.",
    image: "Trích dẫn Hồ Chí Minh về con đường cách mạng",
    appearAt: 690,
  },
  {
    title: "Liên hiệp công nhân tất cả các dân tộc",
    detail: "Gắn kết chặt chẽ giải phóng dân tộc với giải phóng giai cấp, phản ánh bản chất quốc tế của phong trào công nhân.",
    image: "Đoàn kết công nhân - nông dân các dân tộc",
    appearAt: 1290,
  },
];


export const Section11ThucNhi: React.FC = () => {
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

  // Image animations (appear after all 3 cards)
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
            title="Cương lĩnh dân tộc"
            subtitle="của chủ nghĩa Mác - Lênin"
            sectionNumber="PHẦN 1.1"
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
                PHẦN 1.1
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
                Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin
              </h2>
              <div style={{ width: 100, height: 4, backgroundColor: COLORS.gold, marginTop: 16 }} />
            </div>

            {/* 3 principle cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {PRINCIPLES.map((p, i) => {
                const localFrame = frame - p.appearAt;
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
                      padding: "20px 32px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 38,
                        fontWeight: "bold",
                        color: COLORS.white,
                        fontFamily: FONT,
                        marginBottom: 8,
                        lineHeight: 1.2,
                        textShadow: TEXT_SHADOW,
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: 28,
                        color: COLORS.body,
                        fontFamily: FONT,
                        lineHeight: 1.4,
                        textShadow: TEXT_SHADOW,
                      }}
                    >
                      {p.detail}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 2 images stacked */}
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
                text="Giáo trình CNXHKH (2021), Ch.6, I.2b, tr.202-205"
                opacity={citationOpacity}
              />
            </div>
          </div>

          {/* Right: MemberPiP (480px) */}
          <div style={{ opacity: pipOpacity }}>
            <MemberPiP
              name="Đào Thục Nhi"
              sectionLabel="Phần 1.1 - Cương lĩnh dân tộc"
              ringAngle={ringAngle}
            />
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};;
