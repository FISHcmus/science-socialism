import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, BarChart, GlassPanel } from "../ds";

;

;

export const Section22Phu: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 80]);

  const beat2LocalFrame = Math.max(0, frame - 90);
  const ringAngle = (beat2LocalFrame / fps) * 80;
  const headerOpacity = interpolate(frame, [90, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pipOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const citationOpacity = interpolate(frame, [1200, 1260], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Bar grow entrance: each bar grows with staggered spring
  const barData = [
    { label: "Tôn giáo", value: 16, color: "#D97706" },
    { label: "Tổ chức", value: 43, color: "#B45309" },
    { label: "Chức sắc", value: 57, color: "#92400E" },
    { label: "Cơ sở thờ tự", value: 29, color: "#78350F" },
  ];
  const barProgresses = barData.map((_, i) => {
    const barSpring = spring({ frame: Math.max(0, frame - 150 - i * 60), fps, config: { damping: 14, stiffness: 60 } });
    return interpolate(barSpring, [0, 1], [0, 1]);
  });
  const barOpacities = barData.map((_, i) => {
    return interpolate(frame, [150 + i * 60, 170 + i * 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  });
  const displayValues = [16, 43, 57, 29];

  // GlassPanel cards: fade + scale entrance
  const card1Spring = spring({ frame: Math.max(0, frame - 420), fps, config: { damping: 14, stiffness: 70 } });
  const card1Opacity = interpolate(card1Spring, [0, 1], [0, 1]);
  const card1Scale = interpolate(card1Spring, [0, 1], [0.8, 1]);

  const card2Spring = spring({ frame: Math.max(0, frame - 520), fps, config: { damping: 14, stiffness: 70 } });
  const card2Opacity = interpolate(card2Spring, [0, 1], [0, 1]);
  const card2Scale = interpolate(card2Spring, [0, 1], [0.8, 1]);

  // Dissolve-blur page-flip
  const PAGE_FLIP = 800;
  const page1Opacity = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page1Blur = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [0, 8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 65) / 30));
  const img2Opacity = interpolate(frame, [PAGE_FLIP + 90, PAGE_FLIP + 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 125) / 30));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Đặc điểm tôn giáo" subtitle="ở Việt Nam" sectionNumber="PHẦN 2.2" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "48px 60px 32px 80px" }}>
            <div className="mb-4" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 2.2</div>
              <h2 className="text-[48px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Đặc điểm tôn giáo ở Việt Nam</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-3" />
            </div>

            {/* Page 1: BarChart + GlassPanel cards */}
            {frame < PAGE_FLIP + 30 && (
              <div style={{ opacity: page1Opacity, filter: `blur(${page1Blur}px)` }}>
                <BarChart
                  data={barData}
                  maxHeight={280}
                  showValues={true}
                  suffix="K"
                  barProgresses={barProgresses}
                  barOpacities={barOpacities}
                  displayValues={displayValues}
                />

                <div className="flex gap-4 mt-2">
                  <GlassPanel goldBorder padding="16px 24px" borderRadius={12} style={{ flex: 1, opacity: card1Opacity, transform: `scale(${card1Scale})` }}>
                    <div className="text-[34px] font-bold font-sans mb-1 leading-tight" style={{ color: COLORS.white, textShadow: TEXT_SHADOW }}>Chung sống hòa bình</div>
                    <div className="text-[26px] font-sans leading-snug" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Chưa từng xảy ra xung đột hay chiến tranh tôn giáo</div>
                  </GlassPanel>
                  <GlassPanel goldBorder padding="16px 24px" borderRadius={12} style={{ flex: 1, opacity: card2Opacity, transform: `scale(${card2Scale})` }}>
                    <div className="text-[34px] font-bold font-sans mb-1 leading-tight" style={{ color: COLORS.white, textShadow: TEXT_SHADOW }}>Chính sách nhà nước</div>
                    <div className="text-[26px] font-sans leading-snug" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Tôn trọng tự do tín ngưỡng, bình đẳng trước pháp luật</div>
                  </GlassPanel>
                </div>
              </div>
            )}

            {/* Page 2: images */}
            {frame >= PAGE_FLIP && (
              <div className="flex gap-8">
                <div style={{ opacity: img1Opacity }}><ArtDecoImage description="Ảnh minh họa 1" width={480} height={480} ringAngle={ringAngle} sweepProgress={img1Sweep} /></div>
                <div style={{ opacity: img2Opacity }}><ArtDecoImage description="Ảnh minh họa 2" width={480} height={480} ringAngle={ringAngle} sweepProgress={img2Sweep} /></div>
              </div>
            )}

            <div className="mt-auto"><CitationFooter text="GT CNXHKH (2021), Ch.6, II.2a-b, tr.222-226" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><MemberPiP name="Ngô Văn Phú" sectionLabel="Phần 2.2 - Tôn giáo Việt Nam" ringAngle={ringAngle} src={staticFile('media/T2-2/video_phu.mp4')} /></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
