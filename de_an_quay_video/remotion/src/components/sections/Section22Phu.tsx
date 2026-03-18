import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, FONT, MEMBER_COLORS, TEXT_SHADOW } from "../../constants";
import {
  SectionTitle,
  CountUpNumber,
  BarChart,
  MemberPlaceholder,
  Overlay,
  LowerThird,
} from "../ds";
import type { BarData } from "../ds";

// Beat 1:    0-90   — SectionTitle "Thành tựu & con số", sectionNumber "PHẦN 2.2"
// Beat 2:  90-1200  — Three CountUpNumber side by side + BarChart below
// Beat 3: 1200-1800 — MemberPlaceholder "Phú" + Overlay + LowerThird
// Total: 1800 frames (60s)

const BAR_DATA: BarData[] = [
  { label: "Miền Bắc", value: 85 },
  { label: "Miền Trung", value: 78 },
  { label: "Miền Nam", value: 90 },
  { label: "Tây Nguyên", value: 72 },
  { label: "Tây Bắc", value: 68 },
];

export const Section22Phu: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── Beat 1: SectionTitle spring ──────────────────────────────────────────
  const titleSpring = spring({ frame, fps, config: { damping: 20, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);

  // ── Beat 2 envelope ──────────────────────────────────────────────────────
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

  // Beat 2 section heading spring
  const headingLocal = Math.max(0, frame - 90);
  const headingSpring = spring({ frame: headingLocal, fps, config: { damping: 20, stiffness: 80 } });
  const headingY = interpolate(headingSpring, [0, 1], [40, 0]);
  const headingOpacity = interpolate(headingSpring, [0, 1], [0, 1]);

  // ── CountUpNumber 1: 54 dân tộc (startFrame=120, duration=80) ────────────
  const count1Local = frame - 120;
  const count1Progress = interpolate(count1Local, [0, 80], [0, 1], { extrapolateRight: "clamp" });
  const count1Eased = 1 - Math.pow(1 - Math.max(0, count1Progress), 3);
  const count1Value = Math.round(54 * count1Eased);
  const count1Opacity = interpolate(count1Local, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // ── CountUpNumber 2: 63 tỉnh thành (startFrame=160, duration=80) ─────────
  const count2Local = frame - 160;
  const count2Progress = interpolate(count2Local, [0, 80], [0, 1], { extrapolateRight: "clamp" });
  const count2Eased = 1 - Math.pow(1 - Math.max(0, count2Progress), 3);
  const count2Value = Math.round(63 * count2Eased);
  const count2Opacity = interpolate(count2Local, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // ── CountUpNumber 3: 100 tr dân số (startFrame=200, duration=80) ─────────
  const count3Local = frame - 200;
  const count3Progress = interpolate(count3Local, [0, 80], [0, 1], { extrapolateRight: "clamp" });
  const count3Eased = 1 - Math.pow(1 - Math.max(0, count3Progress), 3);
  const count3Value = Math.round(100 * count3Eased);
  const count3Opacity = interpolate(count3Local, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // ── BarChart: startFrame=280, stagger=12 ─────────────────────────────────
  const barProgresses = BAR_DATA.map((_, i) => {
    const barStart = 280 + i * 12;
    const localFrame = frame - barStart;
    if (localFrame < 0) return 0;
    return spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 80 } });
  });
  const barOpacities = BAR_DATA.map((_, i) => {
    const barStart = 280 + i * 12;
    const localFrame = frame - barStart;
    if (localFrame < 0) return 0;
    return interpolate(localFrame, [0, 10], [0, 1], { extrapolateRight: "clamp" });
  });
  const displayValues = BAR_DATA.map((bar, i) => Math.round(bar.value * (barProgresses[i] ?? 0)));

  // ── CountUpNumber ring angle (shared across all 3) ───────────────────────
  const countRingAngle = (frame / fps) * 60;

  // ── Beat 3: MemberPlaceholder / Overlay / LowerThird ─────────────────────
  const showFrom = 1200;
  const memberLocal = frame - showFrom;

  const memberSpring = spring({
    frame: Math.max(0, memberLocal),
    fps,
    config: { damping: 20, stiffness: 80 },
  });
  const memberScale = interpolate(memberSpring, [0, 1], [0.8, 1]);
  const memberOpacity = interpolate(Math.max(0, memberLocal), [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const memberRingAngle = (Math.max(0, memberLocal) / fps) * 80;

  const overlayOpacity =
    frame >= showFrom
      ? interpolate(memberLocal, [0, 20], [0, 0.65], { extrapolateRight: "clamp" })
      : 0;

  const lowerThirdLocal = frame - 1215;
  const lowerThirdSpring = spring({
    frame: Math.max(0, lowerThirdLocal),
    fps,
    config: { damping: 20, stiffness: 80 },
  });
  const lowerThirdTranslateY = interpolate(lowerThirdSpring, [0, 1], [40, 0]);
  const lowerThirdOpacity = interpolate(Math.max(0, lowerThirdLocal), [0, 15], [0, 1], {
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
            title="Thành tựu & con số"
            subtitle="Đoàn kết dân tộc Việt Nam"
            sectionNumber="PHẦN 2.2"
            opacity={titleOpacity}
            translateY={titleTranslateY}
          />
        </AbsoluteFill>
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
                fontSize: 24,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 4,
                marginBottom: 12,
                textTransform: "uppercase",
                textShadow: TEXT_SHADOW,
              }}
            >
              Số liệu nổi bật
            </div>
            <h2
              style={{
                fontSize: 50,
                color: COLORS.white,
                fontFamily: FONT,
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1.2,
                textShadow: TEXT_SHADOW,
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 60,
              }}
            >
              <CountUpNumber
                value={count1Value}
                label="dân tộc"
                color={COLORS.gold}
                size={80}
                opacity={count1Opacity}
                goldRing
                ringAngle={countRingAngle}
              />

              <CountUpNumber
                value={count2Value}
                label="tỉnh thành"
                color={COLORS.warmGold}
                size={80}
                opacity={count2Opacity}
                goldRing
                ringAngle={countRingAngle + 120}
              />

              <CountUpNumber
                value={count3Value}
                suffix="tr"
                label="dân số"
                color={COLORS.lightGold}
                size={80}
                opacity={count3Opacity}
                goldRing
                ringAngle={countRingAngle + 240}
              />
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
                fontSize: 22,
                color: COLORS.body,
                fontFamily: FONT,
                marginBottom: 16,
                letterSpacing: 1,
                textShadow: TEXT_SHADOW,
              }}
            >
              Chỉ số đoàn kết theo vùng miền (%)
            </div>
            <BarChart
              data={BAR_DATA}
              maxHeight={220}
              showValues={true}
              suffix="%"
              barProgresses={barProgresses}
              barOpacities={barOpacities}
              displayValues={displayValues}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder + Overlay + LowerThird (frames 1200-1800) */}
      {frame >= 1200 && (
        <>
          <MemberPlaceholder
            name="Phú"
            color={MEMBER_COLORS["Phú"] ?? COLORS.dark}
            opacity={memberOpacity}
            scale={memberScale}
            ringAngle={memberRingAngle}
          />
          <Overlay direction="bottom" opacity={overlayOpacity} />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              transform: `translateY(${lowerThirdTranslateY}px)`,
            }}
          >
            <LowerThird
              name="Phú"
              role="Thành tựu & con số về đoàn kết dân tộc"
              opacity={lowerThirdOpacity}
              translateY={0}
            />
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
