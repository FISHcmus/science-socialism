import { memo, type FC } from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, SplitCompare } from "../ds";

;

export const Section21HuynhNhi: FC = memo(() => {
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
  const accentWidth = interpolate(spring({ frame: Math.max(0, frame - 100), fps, config: { damping: 14, stiffness: 80 } }), [0, 1], [0, 320]);
  const pipOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const citationOpacity = interpolate(frame, [1200, 1260], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Curtain entrance: left slides from -200, right from +200
  const leftSpring = spring({ frame: Math.max(0, frame - 330), fps, config: { damping: 14, stiffness: 70 } });
  const leftOpacity = interpolate(leftSpring, [0, 1], [0, 1]);
  const leftTranslateX = interpolate(leftSpring, [0, 1], [-200, 0]);

  const rightSpring = spring({ frame: Math.max(0, frame - 1110), fps, config: { damping: 14, stiffness: 70 } });
  const rightOpacity = interpolate(rightSpring, [0, 1], [0, 1]);
  const rightTranslateX = interpolate(rightSpring, [0, 1], [200, 0]);

  // Quote fade-in
  const quoteOpacity = interpolate(frame, [840, 880], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Vertical split page-flip: top half up, bottom half down
  const PAGE_FLIP = 1953;
  const flipProgress = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const topTranslateY = interpolate(flipProgress, [0, 1], [0, -540]);
  const bottomTranslateY = interpolate(flipProgress, [0, 1], [0, 540]);
  const page1Opacity = interpolate(flipProgress, [0, 0.8], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 65) / 30));
  const img2Opacity = interpolate(frame, [PAGE_FLIP + 90, PAGE_FLIP + 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 125) / 30));

  return (
    <AbsoluteFill>
      {frame < 360 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Thực tiễn đoàn kết" subtitle="dân tộc Việt Nam" sectionNumber="PHẦN 2.1" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} scale={titleScale} />
        </AbsoluteFill>
      )}

      {frame >= 360 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div style={{ opacity: pipOpacity }}><Sequence from={360} layout="none" durationInFrames={2010}><MemberPiP name="Bùi Huỳnh Nhi" sectionLabel="Phần 2.1 - Thực tiễn đoàn kết" ringAngle={ringAngle} src={staticFile('media/T2-1/video_huynh_nhi.mp4')} /></Sequence></div>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "48px 80px 32px 60px" }}>
            <div className="mb-4" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 2.1</div>
              <h2 className="text-[48px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Thực tiễn đoàn kết dân tộc Việt Nam</h2>
              <div className="h-1 bg-ds-gold mt-3" style={{ width: accentWidth }} />
            </div>

            {/* Page 1: SplitCompare + quote */}
            {frame < PAGE_FLIP + 30 && (
              <div style={{ opacity: page1Opacity, overflow: "hidden" }}>
                <div style={{ transform: `translateY(${topTranslateY}px)` }}>
                  <SplitCompare
                    leftTitle="Lợi thế"
                    leftDetail="54 dân tộc cư trú đan xen, tăng cường hiểu biết, giao lưu văn hóa - kinh tế giữa các dân tộc"
                    leftAccentColor="#16A34A"
                    rightTitle="Thách thức"
                    rightDetail="Dễ nảy sinh mâu thuẫn, chênh lệch phát triển giữa các vùng miền và dân tộc"
                    rightAccentColor="#DC2626"
                    leftOpacity={leftOpacity}
                    leftTranslateX={leftTranslateX}
                    rightOpacity={rightOpacity}
                    rightTranslateX={rightTranslateX}
                  />
                </div>
                <div style={{ transform: `translateY(${bottomTranslateY}px)` }}>
                  <div
                    className="italic text-[30px] font-sans leading-normal mt-5"
                    style={{ opacity: quoteOpacity, padding: "16px 24px", borderLeft: `4px solid ${COLORS.gold}`, color: COLORS.gold, textShadow: TEXT_SHADOW }}
                  >
                    "Bao nhiêu lợi ích đều vì dân, bao nhiêu quyền hạn đều của dân"
                  </div>
                </div>
              </div>
            )}

            {/* Page 2: images */}
            {frame >= PAGE_FLIP && (
              <div className="flex gap-8">
                <div style={{ opacity: img1Opacity }} className="flex flex-col items-center">
                  <ArtDecoImage description="Bác Hồ với DTTS" src={staticFile('media/T2-1/img1.jpg')} width={480} height={420} ringAngle={ringAngle} sweepProgress={img1Sweep} />
                  <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Chủ tịch Hồ Chí Minh thăm đồng bào dân tộc thiểu số</div>
                </div>
                <div style={{ opacity: img2Opacity }} className="flex flex-col items-center">
                  <ArtDecoImage description="SV các dân tộc" src={staticFile('media/T2-1/img2.jpeg')} width={480} height={420} ringAngle={ringAngle} sweepProgress={img2Sweep} />
                  <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Sinh viên các dân tộc giao lưu văn hóa truyền thống</div>
                </div>
              </div>
            )}

            <div className="mt-auto"><CitationFooter text="GT CNXHKH (2021), Ch.6, I.3a, tr.205-208; HCM (1949)" opacity={citationOpacity} /></div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
});
