import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS } from "../../constants";
import { SectionTitle } from "../shared/SectionTitle";
import { CountUpNumber } from "../shared/CountUpNumber";
import { BarChart } from "../shared/BarChart";
import { MemberPlaceholder } from "../shared/MemberPlaceholder";
import { Overlay } from "../shared/Overlay";
import { LowerThird } from "../shared/LowerThird";

// Beat 1:    0-90   — SectionTitle "Thành tựu & con số", sectionNumber "PHẦN 2.2"
// Beat 2:  90-1200  — Three CountUpNumber side by side + BarChart below
// Beat 3: 1200-1800 — MemberPlaceholder "Phú" + Overlay + LowerThird
// Total: 1800 frames (60s)

const BAR_DATA = [
  { label: "Miền Bắc", value: 85, color: COLORS.teal },
  { label: "Miền Trung", value: 78, color: "#805ad5" },
  { label: "Miền Nam", value: 90, color: COLORS.vnRed },
  { label: "Tây Nguyên", value: 72, color: "#ed8936" },
  { label: "Tây Bắc", value: 68, color: "#4299e1" },
];

export const Section22Phu: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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

  // Title slide-up spring for Beat 2 heading
  const headingLocal = Math.max(0, frame - 90);
  const headingSpring = spring({ frame: headingLocal, fps, config: { damping: 20, stiffness: 80 } });
  const headingY = interpolate(headingSpring, [0, 1], [40, 0]);
  const headingOpacity = interpolate(headingSpring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.navy }}>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <SectionTitle
          title="Thành tựu & con số"
          subtitle="Đoàn kết dân tộc Việt Nam"
          sectionNumber="PHẦN 2.2"
        />
      )}

      {/* Beat 2: CountUpNumbers + BarChart (frames 90-1200) */}
      {beat2Visible && (
        <AbsoluteFill
          style={{
            opacity: beat2Opacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "60px 80px 40px 80px",
            backgroundColor: COLORS.navy,
            gap: 0,
          }}
        >
          {/* Section heading */}
          <div
            style={{
              transform: `translateY(${headingY}px)`,
              opacity: headingOpacity,
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            <div
              style={{
                fontSize: 18,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 4,
                marginBottom: 12,
                textTransform: "uppercase",
              }}
            >
              Số liệu nổi bật
            </div>
            <h2
              style={{
                fontSize: 44,
                color: COLORS.white,
                fontFamily: FONT,
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Việt Nam — Thống nhất trong đa dạng
            </h2>
          </div>

          {/* Three CountUpNumber side by side */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: 80,
              marginBottom: 56,
            }}
          >
            {/* Divider decorations between numbers */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 60,
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(246,173,85,0.1)",
                  border: `2px solid ${COLORS.gold}`,
                  borderRadius: 20,
                  padding: "32px 48px",
                }}
              >
                <CountUpNumber
                  target={54}
                  label="dân tộc"
                  startFrame={120}
                  duration={80}
                  color={COLORS.gold}
                  size={80}
                />
              </div>

              <div
                style={{
                  width: 2,
                  height: 100,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderRadius: 1,
                }}
              />

              <div
                style={{
                  backgroundColor: "rgba(56,178,172,0.1)",
                  border: `2px solid ${COLORS.teal}`,
                  borderRadius: 20,
                  padding: "32px 48px",
                }}
              >
                <CountUpNumber
                  target={63}
                  label="tỉnh thành"
                  startFrame={160}
                  duration={80}
                  color={COLORS.teal}
                  size={80}
                />
              </div>

              <div
                style={{
                  width: 2,
                  height: 100,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderRadius: 1,
                }}
              />

              <div
                style={{
                  backgroundColor: "rgba(218,37,29,0.1)",
                  border: `2px solid ${COLORS.vnRed}`,
                  borderRadius: 20,
                  padding: "32px 48px",
                }}
              >
                <CountUpNumber
                  target={100}
                  suffix="tr"
                  label="dân số"
                  startFrame={200}
                  duration={80}
                  color={COLORS.vnRed}
                  size={80}
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 600,
              height: 2,
              backgroundColor: "rgba(255,255,255,0.1)",
              marginBottom: 32,
            }}
          />

          {/* BarChart for regional unity metrics */}
          <div style={{ width: "100%" }}>
            <div
              style={{
                textAlign: "center",
                fontSize: 18,
                color: COLORS.muted,
                fontFamily: FONT,
                marginBottom: 16,
                letterSpacing: 1,
              }}
            >
              Chỉ số đoàn kết theo vùng miền (%)
            </div>
            <BarChart
              data={BAR_DATA}
              startFrame={280}
              stagger={12}
              maxHeight={220}
              showValues={true}
              suffix="%"
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder + Overlay + LowerThird (frames 1200-1800) */}
      {frame >= 1200 && (
        <>
          <MemberPlaceholder
            name="Phú"
            color={MEMBER_COLORS["Phú"] ?? COLORS.navy}
            showFrom={1200}
          />
          <Overlay direction="bottom" opacity={0.65} showFrom={1200} />
          <LowerThird
            name="Phú"
            role="Thành tựu & con số về đoàn kết dân tộc"
            showFrom={1215}
          />
        </>
      )}
    </AbsoluteFill>
  );
};
