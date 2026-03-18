import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS } from "../../constants";
import { SectionTitle } from "../shared/SectionTitle";
import { TypewriterText } from "../shared/TypewriterText";
import { VietnamMap } from "../shared/VietnamMap";
import { MemberPlaceholder } from "../shared/MemberPlaceholder";
import { Overlay } from "../shared/Overlay";
import { LowerThird } from "../shared/LowerThird";

// Beat 1:  0-90    — SectionTitle "Thực tiễn đoàn kết dân tộc", sectionNumber "PHẦN 2.1"
// Beat 2:  90-1200 — Left: VietnamMap highlighted. Right: TypewriterText about 54 dân tộc
// Beat 3: 1200-1800 — MemberPlaceholder "Huỳnh Nhi" + Overlay + LowerThird
// Total: 1800 frames (60s)

export const Section21HuynhNhi: React.FC = () => {
  const frame = useCurrentFrame();

  // Beat 2 envelope
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

  return (
    <AbsoluteFill>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <SectionTitle
          title="Thực tiễn đoàn kết dân tộc"
          subtitle="Tại Việt Nam"
          sectionNumber="PHẦN 2.1"
        />
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
                fontSize: 16,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 2,
                marginBottom: 16,
                textTransform: "uppercase",
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
                fontSize: 20,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Thực tiễn đoàn kết
            </div>

            <h2
              style={{
                fontSize: 40,
                color: COLORS.white,
                fontFamily: FONT,
                fontWeight: "bold",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              Quốc gia đa dân tộc
            </h2>

            <TypewriterText
              text="Việt Nam là quốc gia đa dân tộc với 54 dân tộc anh em cùng sinh sống. Truyền thống đoàn kết được hun đúc qua hàng nghìn năm lịch sử dựng nước và giữ nước."
              startFrame={110}
              speed={2}
              fontSize={26}
              color={COLORS.muted}
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
                      backgroundColor: "rgba(246,173,85,0.1)",
                      border: `1px solid ${COLORS.gold}`,
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
                        fontSize: 16,
                        color: COLORS.muted,
                        fontFamily: FONT,
                        marginTop: 6,
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
            color={MEMBER_COLORS["Huỳnh Nhi"] ?? COLORS.navy}
            showFrom={1200}
          />
          <Overlay direction="bottom" opacity={0.65} showFrom={1200} />
          <LowerThird
            name="Huỳnh Nhi"
            role="Thực tiễn đoàn kết dân tộc ở Việt Nam"
            showFrom={1215}
          />
        </>
      )}
    </AbsoluteFill>
  );
};
