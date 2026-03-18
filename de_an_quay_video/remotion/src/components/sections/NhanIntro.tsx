import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS } from "../../constants";
import { SectionTitle } from "../shared/SectionTitle";
import { TypewriterText } from "../shared/TypewriterText";
import { VietnamMap } from "../shared/VietnamMap";
import { MemberPlaceholder } from "../shared/MemberPlaceholder";
import { Overlay } from "../shared/Overlay";
import { LowerThird } from "../shared/LowerThird";

// Beat 1: 0-90    — SectionTitle "Giới thiệu chủ đề"
// Beat 2: 90-150  — TypewriterText (left) + VietnamMap (right)
// Beat 3: 150-750 — MemberPlaceholder "Nhân" + Overlay + LowerThird

export const NhanIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 2 fade-in
  const beat2Local = frame - 90;
  const beat2Opacity = beat2Local >= 0
    ? interpolate(beat2Local, [0, 20], [0, 1], { extrapolateRight: "clamp" })
    : 0;
  const beat2FadeOut = interpolate(frame, [130, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const beat2Visible = frame >= 90 && frame < 150;

  return (
    <AbsoluteFill>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <SectionTitle
          title="Giới thiệu chủ đề"
          subtitle="Xây dựng khối đại đoàn kết toàn dân tộc"
          sectionNumber="NHÓM 6"
        />
      )}

      {/* Beat 2: TypewriterText + VietnamMap (frames 90-150) */}
      {beat2Visible && (
        <AbsoluteFill
          style={{
            opacity: beat2Visible ? Math.min(beat2Opacity, beat2FadeOut) : 0,
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
                fontSize: 20,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 3,
                marginBottom: 24,
                textTransform: "uppercase",
              }}
            >
              Chủ đề 6 - Nhóm 6
            </div>
            <h2
              style={{
                fontSize: 42,
                color: COLORS.white,
                fontFamily: FONT,
                fontWeight: "bold",
                lineHeight: 1.4,
                margin: "0 0 32px 0",
              }}
            >
              Xây dựng khối đại đoàn kết toàn dân tộc
            </h2>
            <TypewriterText
              text="Đại đoàn kết toàn dân tộc là truyền thống quý báu của dân tộc Việt Nam, được Đảng và Nhà nước ta xây dựng và phát huy qua các thời kỳ cách mạng."
              startFrame={90}
              speed={1}
              fontSize={24}
              color={COLORS.muted}
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
            color={MEMBER_COLORS["Nhân"] ?? COLORS.navyLight}
            showFrom={150}
          />
          <Overlay direction="bottom" opacity={0.65} showFrom={150} />
          <LowerThird
            name="Nhân"
            role="Nhóm trưởng - Giới thiệu chủ đề"
            showFrom={165}
          />
        </>
      )}
    </AbsoluteFill>
  );
};
