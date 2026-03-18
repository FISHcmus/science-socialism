import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, TypewriterText, MemberPlaceholder, Overlay, LowerThird } from "../ds";
import { VietnamMap } from "../shared/VietnamMap";

// Beat 1: 0-90    — SectionTitle "Giới thiệu chủ đề"
// Beat 2: 90-150  — TypewriterText (left) + VietnamMap (right)
// Beat 3: 150-750 — MemberPlaceholder "Nhân" + Overlay + LowerThird

export const NhanIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Beat 1: SectionTitle animation (frames 0-90) ---
  const beat1Spring = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const beat1Opacity = interpolate(beat1Spring, [0, 1], [0, 1]);
  const beat1TranslateY = interpolate(beat1Spring, [0, 1], [40, 0]);
  const beat1AccentWidth = interpolate(beat1Spring, [0, 1], [0, 200]);

  // --- Beat 2: TypewriterText + VietnamMap (frames 90-150) ---
  const beat2Local = frame - 90;
  const beat2Opacity = beat2Local >= 0
    ? interpolate(beat2Local, [0, 20], [0, 1], { extrapolateRight: "clamp" })
    : 0;
  const beat2FadeOut = interpolate(frame, [130, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const beat2Visible = frame >= 90 && frame < 150;
  const beat2CombinedOpacity = beat2Visible ? Math.min(beat2Opacity, beat2FadeOut) : 0;

  const typewriterText =
    "Đại đoàn kết toàn dân tộc là truyền thống quý báu của dân tộc Việt Nam, được Đảng và Nhà nước ta xây dựng và phát huy qua các thời kỳ cách mạng.";
  const typewriterSpeed = 1;
  const typewriterVisibleChars = beat2Local >= 0
    ? Math.min(Math.floor(beat2Local / typewriterSpeed), typewriterText.length)
    : 0;
  const typewriterCursorVisible = beat2Local >= 0
    ? Math.floor(beat2Local / 15) % 2 === 0
    : false;

  // --- Beat 3: MemberPlaceholder + Overlay + LowerThird (frames 150-750) ---
  const memberLocal = frame - 150;
  const memberSpring = spring({
    frame: memberLocal,
    fps,
    config: { damping: 18, stiffness: 120 },
  });
  const memberOpacity = memberLocal >= 0
    ? interpolate(memberLocal, [0, 20], [0, 1], { extrapolateRight: "clamp" })
    : 0;
  const memberScale = interpolate(memberSpring, [0, 1], [0.95, 1]);

  const memberRingAngle = memberLocal >= 0 ? (memberLocal / fps) * 80 : 0;

  const overlayLocal = frame - 150;
  const overlayOpacity = overlayLocal >= 0
    ? interpolate(overlayLocal, [0, 20], [0, 0.65], { extrapolateRight: "clamp" })
    : 0;

  const lowerThirdLocal = frame - 165;
  const lowerThirdSpring = spring({
    frame: lowerThirdLocal >= 0 ? lowerThirdLocal : 0,
    fps,
    config: { damping: 18, stiffness: 120 },
  });
  const lowerThirdOpacity = lowerThirdLocal >= 0
    ? interpolate(lowerThirdLocal, [0, 20], [0, 1], { extrapolateRight: "clamp" })
    : 0;
  const lowerThirdTranslateY = interpolate(lowerThirdSpring, [0, 1], [30, 0]);

  return (
    <AbsoluteFill>
      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <AbsoluteFill
          style={{
            background: "linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SectionTitle
            title="Giới thiệu chủ đề"
            subtitle="Xây dựng khối đại đoàn kết toàn dân tộc"
            sectionNumber="NHÓM 6"
            opacity={beat1Opacity}
            translateY={beat1TranslateY}
            accentWidth={beat1AccentWidth}
          />
        </AbsoluteFill>
      )}

      {/* Beat 2: TypewriterText + VietnamMap (frames 90-150) */}
      {beat2Visible && (
        <AbsoluteFill
          style={{
            opacity: beat2CombinedOpacity,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "60px 80px",
          }}
        >
          {/* Left: text content */}
          <div
            style={{
              flex: 1,
              paddingRight: 60,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 3,
                marginBottom: 24,
                textTransform: "uppercase",
                textShadow: TEXT_SHADOW,
              }}
            >
              Chủ đề 6 - Nhóm 6
            </div>
            <h2
              style={{
                fontSize: 48,
                color: COLORS.white,
                fontFamily: FONT,
                fontWeight: "bold",
                lineHeight: 1.4,
                margin: "0 0 32px 0",
                textShadow: TEXT_SHADOW,
              }}
            >
              Xây dựng khối đại đoàn kết toàn dân tộc
            </h2>
            <TypewriterText
              text={typewriterText}
              visibleChars={typewriterVisibleChars}
              fontSize={24}
              color={COLORS.body}
              showCursor={true}
              cursorVisible={typewriterCursorVisible}
            />
          </div>

          {/* Right: Vietnam map */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <VietnamMap
              highlightProvinces={[]}
              highlightColor={COLORS.vnRed}
              startFrame={90}
              width={380}
              height={680}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder + Overlay + LowerThird (frames 150-750) */}
      {frame >= 150 && (
        <>
          <MemberPlaceholder
            name="Nhân"
            color={MEMBER_COLORS["Nhân"] ?? COLORS.dark}
            opacity={memberOpacity}
            scale={memberScale}
            ringAngle={memberRingAngle}
          />
          <Overlay direction="bottom" opacity={overlayOpacity} />
          <div style={{ position: "absolute", bottom: 60, left: 60 }}>
            <LowerThird
              name="Nhân"
              role="Nhóm trưởng - Giới thiệu chủ đề"
              opacity={lowerThirdOpacity}
              translateY={lowerThirdTranslateY}
            />
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
