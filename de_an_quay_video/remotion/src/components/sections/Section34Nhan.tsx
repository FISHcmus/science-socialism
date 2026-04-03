import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, GlassPanel } from "../ds";

;

export const Section34Nhan: React.FC = () => {
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
  const citationOpacity = interpolate(frame, [1800, 1860], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Quote in GlassPanel with goldRing — fade + scale entrance
  const quoteSpring = spring({ frame: Math.max(0, frame - 150), fps, config: { damping: 16, stiffness: 70 } });
  const quoteOpacity = interpolate(quoteSpring, [0, 1], [0, 1]);
  const quoteScale = interpolate(quoteSpring, [0, 1], [0.85, 1]);

  // Fan-out from center: 3 cards start overlapped, spread outward
  const cardData = [
    { title: "Ví dụ cụ thể", detail: "Nhóm trưởng phân công 9 thành viên từ nhiều tỉnh thành khác nhau cùng hoàn thành dự án" },
    { title: "Nguyên tắc thực hành", detail: "Bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển" },
    { title: "Hành động từ hôm nay", detail: "Xây dựng đoàn kết từ hành động nhỏ hàng ngày trong học tập và sinh hoạt" },
  ];
  const fanOffsets = [-380, 0, 380]; // left, center, right
  const cardAnims = cardData.map((_, i) => {
    const s = spring({ frame: Math.max(0, frame - 450 - i * 100), fps, config: { damping: 14, stiffness: 70 } });
    const translateX = interpolate(s, [0, 1], [0, fanOffsets[i]!]);
    const opacity = interpolate(s, [0, 1], [0, 1]);
    const scale = interpolate(s, [0, 1], [0.7, 1]);
    return { translateX, opacity, scale };
  });

  // Zoom-out page-flip
  const PAGE_FLIP = 1350;
  const flipProgress = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page1Scale = interpolate(flipProgress, [0, 1], [1, 0.5]);
  const page1Opacity = interpolate(flipProgress, [0, 0.8], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 65) / 30));
  const img2Opacity = interpolate(frame, [PAGE_FLIP + 90, PAGE_FLIP + 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 125) / 30));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Tổng kết" subtitle="và liên hệ bản thân" sectionNumber="PHẦN 3.4" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "48px 60px 32px 80px" }}>
            <div className="mb-4" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 3.4</div>
              <h2 className="text-[48px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Tổng kết và liên hệ bản thân</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-3" />
            </div>

            {/* Page 1: GlassPanel quote + fan-out cards */}
            {frame < PAGE_FLIP + 30 && (
              <div style={{ opacity: page1Opacity, transform: `scale(${page1Scale})`, transformOrigin: "center center" }}>
                <div style={{ opacity: quoteOpacity, transform: `scale(${quoteScale})`, marginBottom: 32 }}>
                  <GlassPanel goldRing ringAngle={ringAngle} ringSize={320} goldBorder padding="24px 32px" borderRadius={16}>
                    <div
                      className="italic text-[30px] font-sans leading-normal text-center"
                      style={{ color: COLORS.gold, textShadow: TEXT_SHADOW }}
                    >
                      "Môi trường đại học chính là hình ảnh thu nhỏ của cộng đồng 54 dân tộc cư trú đan xen"
                    </div>
                  </GlassPanel>
                </div>

                <div className="relative flex items-start justify-center" style={{ height: 280 }}>
                  {cardData.map((c, i) => (
                    <div key={i} style={{ position: "absolute", left: "50%", transform: `translateX(calc(-50% + ${cardAnims[i]!.translateX}px)) scale(${cardAnims[i]!.scale})`, opacity: cardAnims[i]!.opacity, width: 350 }}>
                      <GlassPanel goldBorder padding="16px 24px" borderRadius={12}>
                        <div className="text-[32px] font-bold font-sans mb-1 leading-tight" style={{ color: COLORS.white, textShadow: TEXT_SHADOW }}>{c.title}</div>
                        <div className="text-[24px] font-sans leading-snug" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>{c.detail}</div>
                      </GlassPanel>
                    </div>
                  ))}
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

            <div className="mt-auto"><CitationFooter text="GT CNXHKH (2021), Ch.6, I.3a, tr.205-206; Văn kiện ĐH XII, tr.164-165" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><MemberPiP name="Nguyễn Hữu Thiện Nhân" sectionLabel="Phần 3.4 - Tổng kết" ringAngle={ringAngle} /></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
