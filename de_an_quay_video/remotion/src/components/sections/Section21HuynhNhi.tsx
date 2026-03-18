import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, TypewriterText, MemberPlaceholder, Overlay, LowerThird } from "../ds";
import { VietnamMap } from "../shared/VietnamMap";

// Beat 1:  0-90    — SectionTitle "Thực tiễn đoàn kết dân tộc", sectionNumber "PHẦN 2.1"
// Beat 2:  90-1200 — Left: VietnamMap highlighted. Right: TypewriterText about 54 dân tộc
// Beat 3: 1200-1800 — MemberPlaceholder "Huỳnh Nhi" + Overlay + LowerThird
// Total: 1800 frames (60s)

export const Section21HuynhNhi: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Beat 1: SectionTitle animation values ---
  const titleSlideIn = spring({
    frame,
    fps,
    from: 40,
    to: 0,
    config: { damping: 18, stiffness: 100 },
  });
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // --- Beat 2 envelope ---
  const beat2Local = frame - 90;
  const beat2FadeIn =
    beat2Local >= 0
      ? interpolate(beat2Local, [0, 20], [0, 1], { extrapolateRight: "clamp" })
      : 0;
  const beat2FadeOut = interpolate(frame, [1160, 1200], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const beat2Opacity = frame >= 90 && frame < 1200 ? Math.min(beat2FadeIn, beat2FadeOut) : 0;
  const beat2Visible = frame >= 90 && frame < 1200;

  // --- Beat 2: TypewriterText values ---
  const typewriterText =
    "Việt Nam là quốc gia đa dân tộc với 54 dân tộc anh em cùng sinh sống. Truyền thống đoàn kết được hun đúc qua hàng nghìn năm lịch sử dựng nước và giữ nước.";
  const visibleChars = Math.min(Math.floor((frame - 110) / 2), typewriterText.length);
  const cursorVisible = frame % 30 < 15;

  // --- Beat 3: MemberPlaceholder animation values ---
  const showFrom = 1200;
  const memberScale = spring({
    frame: Math.max(frame - showFrom, 0),
    fps,
    from: 0.85,
    to: 1,
    config: { damping: 20, stiffness: 120 },
  });
  const memberOpacity = interpolate(frame, [showFrom, showFrom + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const memberRingAngle = (Math.max(frame - showFrom, 0) / fps) * 80;

  // --- Beat 3: Overlay opacity ---
  const overlayBaseOpacity = interpolate(frame, [showFrom, showFrom + 20], [0, 0.65], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Beat 3: LowerThird animation values ---
  const lowerThirdShowFrom = 1215;
  const lowerThirdTranslateY = spring({
    frame: Math.max(frame - lowerThirdShowFrom, 0),
    fps,
    from: 40,
    to: 0,
    config: { damping: 18, stiffness: 100 },
  });
  const lowerThirdOpacity = interpolate(frame, [lowerThirdShowFrom, lowerThirdShowFrom + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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
            title="Thực tiễn đoàn kết dân tộc"
            subtitle="Tại Việt Nam"
            sectionNumber="PHẦN 2.1"
            opacity={titleOpacity}
            translateY={titleSlideIn}
            accentWidth={interpolate(frame, [10, 60], [0, 80], { extrapolateRight: "clamp" })}
          />
        </AbsoluteFill>
      )}

      {/* Beat 2: VietnamMap (left) + TypewriterText (right) (frames 90-1200) */}
      {beat2Visible && (
        <AbsoluteFill
          style={{
            opacity: beat2Opacity,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "60px 80px",
          }}
        >
          {/* Left: Vietnam map with major city provinces highlighted */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 22,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 2,
                marginBottom: 16,
                textTransform: "uppercase",
                textShadow: TEXT_SHADOW,
              }}
            >
              Bản đồ Việt Nam
            </div>
            <VietnamMap
              highlightProvinces={[
                "Ho Chi Minh City",
                "Ha Noi",
                "Da Nang",
                "Hue",
                "Can Tho",
              ]}
              highlightColor={COLORS.vnRed}
              startFrame={90}
              width={360}
              height={640}
            />
          </div>

          {/* Right: text content */}
          <div
            style={{
              flex: 1,
              paddingLeft: 60,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 32,
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 3,
                textTransform: "uppercase",
                textShadow: TEXT_SHADOW,
              }}
            >
              Thực tiễn đoàn kết
            </div>

            <h2
              style={{
                fontSize: 46,
                color: COLORS.white,
                fontFamily: FONT,
                fontWeight: "bold",
                lineHeight: 1.4,
                margin: 0,
                textShadow: TEXT_SHADOW,
              }}
            >
              Quốc gia đa dân tộc
            </h2>

            <TypewriterText
              text={typewriterText}
              visibleChars={visibleChars}
              fontSize={26}
              color={COLORS.body}
              showCursor
              cursorVisible={cursorVisible}
            />

            {/* Highlight stats box */}
            <div
              style={{
                display: "flex",
                gap: 40,
                marginTop: 20,
              }}
            >
              {[
                { number: "54", label: "dân tộc anh em" },
                { number: "4000+", label: "năm lịch sử" },
                { number: "63", label: "tỉnh thành" },
              ].map((stat, i) => {
                const statDelay = 300 + i * 60;
                const statLocal = frame - statDelay;
                const statOpacity =
                  statLocal > 0
                    ? interpolate(statLocal, [0, 20], [0, 1], { extrapolateRight: "clamp" })
                    : 0;
                return (
                  <div
                    key={i}
                    style={{
                      opacity: statOpacity,
                      textAlign: "center",
                      backgroundColor: "rgba(10, 10, 15, 0.85)",
                      border: `3px solid ${COLORS.gold}`,
                      borderRadius: 12,
                      padding: "16px 24px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 36,
                        fontWeight: "bold",
                        color: COLORS.gold,
                        fontFamily: FONT,
                        lineHeight: 1,
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      style={{
                        fontSize: 22,
                        color: COLORS.body,
                        fontFamily: FONT,
                        marginTop: 6,
                        textShadow: TEXT_SHADOW,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder + Overlay + LowerThird (frames 1200-1800) */}
      {frame >= 1200 && (
        <>
          <MemberPlaceholder
            name="Huỳnh Nhi"
            color={MEMBER_COLORS["Huỳnh Nhi"] ?? COLORS.dark}
            opacity={memberOpacity}
            scale={memberScale}
            ringAngle={memberRingAngle}
          />
          <Overlay direction="bottom" opacity={overlayBaseOpacity} />
          <div style={{ position: "absolute", bottom: 60, left: 60 }}>
            <LowerThird
              name="Huỳnh Nhi"
              role="Thực tiễn đoàn kết dân tộc ở Việt Nam"
              opacity={lowerThirdOpacity}
              translateY={lowerThirdTranslateY}
            />
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
