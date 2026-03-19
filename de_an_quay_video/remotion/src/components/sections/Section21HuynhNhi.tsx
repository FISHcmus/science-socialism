import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter } from "../ds";

// Beat 1: 0-90   — SectionTitle "Thực tiễn đoàn kết dân tộc Việt Nam" (full screen)
// Beat 2: 90-1800 — Content (1440px left) + MemberPiP (480px right)
// Total: 1800 frames (60s)

const CARDS = [
  {
    title: "Lợi thế",
    detail: "54 dân tộc cư trú đan xen giúp tăng cường hiểu biết, giao lưu, tạo nền văn hóa thống nhất trong đa dạng.",
    appearAt: 90,
  },
  {
    title: "Thách thức",
    detail: "Dễ nảy sinh mâu thuẫn, hiểu lầm giữa các dân tộc, chênh lệch phát triển giữa các vùng miền.",
    appearAt: 450,
  },
];


export const Section21HuynhNhi: React.FC = () => {
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

  // Quote animation (appears at frame 750)
  const quoteOpacity = interpolate(frame, [750, 780], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const citationOpacity = interpolate(frame, [1200, 1260], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Image animations (appear at frames 950/1070)
  const img1Opacity = interpolate(frame, [950, 980], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const img1Sweep = Math.max(0, Math.min(1, (frame - 985) / 30));

  const img2Opacity = interpolate(frame, [1070, 1100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const img2Sweep = Math.max(0, Math.min(1, (frame - 1105) / 30));

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
            title="Thực tiễn đoàn kết"
            subtitle="dân tộc Việt Nam"
            sectionNumber="PHẦN 2.1"
            opacity={titleOpacity}
            translateY={titleTranslateY}
            accentWidth={titleAccentWidth}
          />
        </AbsoluteFill>
      )}

      {/* Beat 2: Content (1440px) + MemberPiP (480px) — frames 90-1800 */}
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
                PHẦN 2.1
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
                Thực tiễn đoàn kết dân tộc Việt Nam
              </h2>
              <div style={{ width: 100, height: 4, backgroundColor: COLORS.gold, marginTop: 16 }} />
            </div>

            {/* 2 theme cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {CARDS.map((p, i) => {
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

            {/* Quote block */}
            <div style={{
              opacity: quoteOpacity,
              padding: "16px 24px",
              borderLeft: `4px solid ${COLORS.gold}`,
              fontStyle: "italic",
              fontSize: 30,
              color: COLORS.lightGold,
              fontFamily: FONT,
              lineHeight: 1.4,
              textShadow: TEXT_SHADOW,
              marginTop: 20,
            }}>
              "Bao nhiêu lợi ích đều vì dân, bao nhiêu quyền hạn đều của dân"
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
                text="GT CNXHKH (2021), Ch.6, I.3a, tr.205-208; HCM (1949)"
                opacity={citationOpacity}
              />
            </div>
          </div>

          {/* Right: MemberPiP (480px) */}
          <div style={{ opacity: pipOpacity }}>
            <MemberPiP
              name="Bùi Huỳnh Nhi"
              sectionLabel="Phần 2.1 - Thực tiễn đoàn kết"
              ringAngle={ringAngle}
            />
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
