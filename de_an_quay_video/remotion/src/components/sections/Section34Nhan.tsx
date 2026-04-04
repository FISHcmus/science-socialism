import { memo, type FC } from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile, Video } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, GlassPanel } from "../ds";

;

export const Section34Nhan: FC = memo(() => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 80]);
  const titleBreathe = spring({ frame, fps, config: { damping: 30, stiffness: 40 } });
  const titleScale = interpolate(titleBreathe, [0, 1], [1.03, 1]);

  const beat2LocalFrame = Math.max(0, frame - 360);
  const ringAngle = 0;
  const headerOpacity = interpolate(frame, [90, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const videoOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const citationOpacity = interpolate(frame, [2250, 2310], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Quote in GlassPanel with goldRing — fade + scale entrance
  const quoteSpring = spring({ frame: Math.max(0, frame - 255), fps, config: { damping: 16, stiffness: 70 } });
  const quoteOpacity = interpolate(quoteSpring, [0, 1], [0, 1]);
  const quoteScale = interpolate(quoteSpring, [0, 1], [0.85, 1]);

  // Fan-out from center: 3 cards start overlapped, spread outward
  const cardData = [
    { title: "Ví dụ cụ thể", detail: "Nhóm trưởng phân công 9 thành viên từ nhiều tỉnh thành khác nhau cùng hoàn thành dự án" },
    { title: "Nguyên tắc thực hành", detail: "Bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển" },
    { title: "Hành động từ hôm nay", detail: "Xây dựng đoàn kết từ hành động nhỏ hàng ngày trong học tập và sinh hoạt" },
  ];
  const fanOffsets = [-420, 0, 420];
  const cardStartFrames = [1230, 1692, 1929];
  const cardAnims = cardData.map((_, i) => {
    const s = spring({ frame: Math.max(0, frame - cardStartFrames[i]!), fps, config: { damping: 14, stiffness: 70 } });
    const translateX = interpolate(s, [0, 1], [0, fanOffsets[i]!]);
    const opacity = interpolate(s, [0, 1], [0, 1]);
    const scale = interpolate(s, [0, 1], [0.7, 1]);
    return { translateX, opacity, scale };
  });

  // Zoom-out page-flip
  const PAGE_FLIP = 2160;
  const flipProgress = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page1Scale = interpolate(flipProgress, [0, 1], [1, 0.5]);
  const page1Opacity = interpolate(flipProgress, [0, 0.8], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 65) / 30));

  return (
    <AbsoluteFill>
      {frame < 360 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Tổng kết" subtitle="và liên hệ bản thân" sectionNumber="PHẦN 3.4" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} scale={titleScale} />
        </AbsoluteFill>
      )}

      {frame >= 360 && (
        <AbsoluteFill>
          {/* Top: horizontal video strip */}
          <div style={{ position: "absolute", top: 0, left: 0, width: 1920, height: 360, opacity: videoOpacity, overflow: "hidden", background: "#000" }}>
            <Sequence from={360} layout="none" durationInFrames={2040}>
              <Video src={staticFile('media/T3-4/cnxhkh_mainspeech_nhan.mp4')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Sequence>
            {/* Name label overlay */}
            <div style={{ position: "absolute", bottom: 12, right: 24, background: "rgba(0,0,0,0.55)", borderRadius: 8, padding: "6px 16px" }}>
              <div className="text-[28px] font-sans font-bold" style={{ color: "#fff" }}>Nguyễn Hữu Thiện Nhân</div>
              <div className="text-[20px] font-sans" style={{ color: COLORS.gold }}>Phần 3.4 - Tổng kết</div>
            </div>
          </div>

          {/* Bottom: content area */}
          <div className="flex flex-col overflow-hidden" style={{ position: "absolute", top: 360, left: 0, width: 1920, height: 720, padding: "24px 80px 24px 80px" }}>
            <div className="mb-3" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-1" style={{ textShadow: TEXT_SHADOW }}>PHẦN 3.4</div>
              <h2 className="text-[44px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Tổng kết và liên hệ bản thân</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-2" />
            </div>

            {/* Page 1: GlassPanel quote + fan-out cards */}
            {frame < PAGE_FLIP + 30 && (
              <div style={{ opacity: page1Opacity, transform: `scale(${page1Scale})`, transformOrigin: "center center", flex: 1 }}>
                <div style={{ opacity: quoteOpacity, transform: `scale(${quoteScale})`, marginBottom: 20 }}>
                  <GlassPanel goldRing ringAngle={ringAngle} ringSize={280} goldBorder padding="16px 28px" borderRadius={16}>
                    <div
                      className="italic text-[28px] font-sans leading-normal text-center"
                      style={{ color: COLORS.gold, textShadow: TEXT_SHADOW }}
                    >
                      "Môi trường đại học chính là hình ảnh thu nhỏ của cộng đồng 54 dân tộc cư trú đan xen"
                    </div>
                  </GlassPanel>
                </div>

                <div className="relative flex items-start justify-center" style={{ height: 240 }}>
                  {cardData.map((c, i) => (
                    <div key={i} style={{ position: "absolute", left: "50%", transform: `translateX(calc(-50% + ${cardAnims[i]!.translateX}px)) scale(${cardAnims[i]!.scale})`, opacity: cardAnims[i]!.opacity, width: 380 }}>
                      <GlassPanel goldBorder padding="14px 20px" borderRadius={12}>
                        <div className="text-[30px] font-bold font-sans mb-1 leading-tight" style={{ color: COLORS.white, textShadow: TEXT_SHADOW }}>{c.title}</div>
                        <div className="text-[22px] font-sans leading-snug" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>{c.detail}</div>
                      </GlassPanel>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Page 2: single HCMUS campus image, centered */}
            {frame >= PAGE_FLIP && (
              <div className="flex flex-col items-center justify-center" style={{ flex: 1 }}>
                <div style={{ opacity: img1Opacity }}>
                  <ArtDecoImage
                    src={staticFile('media/T3-4/hcmus_campus.png')}
                    description="Sinh viên ĐHKHTN (HCMUS)"
                    width={800}
                    height={450}
                    ringAngle={ringAngle}
                    sweepProgress={img1Sweep}
                  />
                </div>
                <div className="text-[28px] font-sans mt-4 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW, opacity: img1Opacity }}>
                  Sinh viên Trường ĐH Khoa Học Tự Nhiên - ĐHQG TP.HCM
                </div>
              </div>
            )}

            <div className="mt-auto"><CitationFooter text="GT CNXHKH (2021), Ch.6, I.3a, tr.205-206; Văn kiện ĐH XII, tr.164-165" opacity={citationOpacity} /></div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
});
