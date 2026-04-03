import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, GlassPanel } from "../ds";

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

  // Stat cards: staggered entrance
  const stats = [
    { value: 16, label: "Tôn giáo", suffix: "" },
    { value: 43, label: "Tổ chức tôn giáo", suffix: "" },
    { value: 57000, label: "Chức sắc", suffix: "+" },
    { value: 29000, label: "Cơ sở thờ tự", suffix: "+" },
  ];
  const statSprings = stats.map((_, i) => {
    const s = spring({ frame: Math.max(0, frame - 150 - i * 60), fps, config: { damping: 14, stiffness: 60 } });
    return interpolate(s, [0, 1], [0, 1]);
  });
  const statCountUps = stats.map((st, i) => {
    const localF = Math.max(0, frame - 150 - i * 60);
    const countDuration = 30; // frames to count up
    const progress = Math.min(1, localF / countDuration);
    return Math.round(st.value * progress);
  });

  // GlassPanel cards: fade + scale entrance
  const card1Spring = spring({ frame: Math.max(0, frame - 1020), fps, config: { damping: 14, stiffness: 70 } });
  const card1Opacity = interpolate(card1Spring, [0, 1], [0, 1]);
  const card1Scale = interpolate(card1Spring, [0, 1], [0.8, 1]);

  const card2Spring = spring({ frame: Math.max(0, frame - 1275), fps, config: { damping: 14, stiffness: 70 } });
  const card2Opacity = interpolate(card2Spring, [0, 1], [0, 1]);
  const card2Scale = interpolate(card2Spring, [0, 1], [0.8, 1]);

  // Dissolve-blur page-flip
  const PAGE_FLIP = 1400;
  const page1Opacity = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page1Blur = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [0, 8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 65) / 30));

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
                <div className="grid grid-cols-2 gap-4 mb-2">
                  {stats.map((st, i) => (
                    <GlassPanel key={i} borderRadius={12} padding="20px 24px" style={{ opacity: statSprings[i], transform: `scale(${0.8 + 0.2 * statSprings[i]!})` }}>
                      <div className="flex flex-col items-center text-center">
                        <span className="text-[52px] font-bold font-sans leading-none" style={{ color: COLORS.gold, textShadow: TEXT_SHADOW }}>
                          {statCountUps[i]!.toLocaleString()}{st.suffix}
                        </span>
                        <span className="text-[28px] font-sans mt-2" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>
                          {st.label}
                        </span>
                      </div>
                    </GlassPanel>
                  ))}
                </div>

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

            {/* Page 2: two images side by side */}
            {frame >= PAGE_FLIP && (
              <div className="flex gap-8 items-center justify-center" style={{ flex: 1 }}>
                <div style={{ opacity: img1Opacity }} className="flex flex-col items-center">
                  <ArtDecoImage
                    src={staticFile('media/T2-2/nha_tho_duc_ba.png')}
                    description="Nhà thờ Đức Bà"
                    width={480}
                    height={380}
                    ringAngle={ringAngle}
                    sweepProgress={img1Sweep}
                  />
                  <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Nhà thờ Đức Bà Sài Gòn - Công giáo (tôn giáo du nhập)</div>
                </div>
                <div style={{ opacity: interpolate(frame, [PAGE_FLIP + 60, PAGE_FLIP + 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }} className="flex flex-col items-center">
                  <ArtDecoImage
                    src={staticFile('media/T2-2/toa_thanh_cao_dai.png')}
                    description="Tòa Thánh Cao Đài"
                    width={480}
                    height={380}
                    ringAngle={ringAngle}
                    sweepProgress={Math.max(0, Math.min(1, (frame - PAGE_FLIP - 95) / 30))}
                  />
                  <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Tòa Thánh Cao Đài Tây Ninh - Tôn giáo nội sinh</div>
                </div>
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
