import { memo, type FC } from "react";
import { AbsoluteFill, Sequence, Video, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, CitationFooter, FlowChart } from "../ds";

;

export const Section33YNhu: FC = memo(() => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const clampBoth = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 80]);
  const titleBreathe = spring({ frame, fps, config: { damping: 30, stiffness: 40 } });
  const titleScale = interpolate(titleBreathe, [0, 1], [1.03, 1]);

  const beat2LocalFrame = Math.max(0, frame - 360);
  const ringAngle = 0;
  const headerOpacity = interpolate(frame, [90, 110], [0, 1], clampBoth);
  const videoOpacity = interpolate(frame, [90, 120], [0, 1], clampBoth);
  const citationOpacity = interpolate(frame, [2500, 2560], [0, 1], clampBoth);

  // FlowChart nodes
  const nodes = [
    { label: "CT MTQG 2021-2030", description: "Hỗ trợ đất ở, nhà ở, nước sinh hoạt (Hà Giang, Cao Bằng, Kon Tum)" },
    { label: "Mùa hè xanh - ĐHKHTN", description: "Tình nguyện tại Đồng Tháp, Vĩnh Long. Phổ cập tin học, khảo sát nguồn nước" },
    { label: "Trách nhiệm sinh viên", description: "Mang kiến thức chuyên môn phục vụ cộng đồng, lan tỏa thông tin chính sách" },
  ];

  // Staggered entrance synced to speech
  const nodeStartFrames = [771, 1575, 2229];
  const nodeScales = nodes.map((_, i) => {
    const s = spring({ frame: Math.max(0, frame - nodeStartFrames[i]!), fps, config: { damping: 12, stiffness: 60 } });
    return interpolate(s, [0, 1], [0.5, 1]);
  });
  const nodeOpacities = nodes.map((_, i) => {
    const s = spring({ frame: Math.max(0, frame - nodeStartFrames[i]!), fps, config: { damping: 12, stiffness: 60 } });
    return interpolate(s, [0, 1], [0, 1]);
  });
  const arrowStartFrames = [1525, 2179];
  const arrowOpacities = nodes.slice(1).map((_, i) => {
    return interpolate(frame, [arrowStartFrames[i]!, arrowStartFrames[i]! + 30], [0, 1], clampBoth);
  });
  const visibleNodes = frame < 771 ? 0 : frame < 1575 ? 1 : frame < 2229 ? 2 : 3;

  // Page flip
  const PAGE_FLIP = 1821;
  const page1Opacity = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [1, 0], clampBoth);
  const page1Scale = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [1, 0.85], clampBoth);

  const img1Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], clampBoth);
  const img1Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 65) / 30));
  const img2Opacity = interpolate(frame, [PAGE_FLIP + 90, PAGE_FLIP + 120], [0, 1], clampBoth);
  const img2Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 125) / 30));

  return (
    <AbsoluteFill>
      {frame < 360 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Tuyên truyền chính sách" subtitle="và tình nguyện cộng đồng" sectionNumber="PHẦN 3.3" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} scale={titleScale} />
        </AbsoluteFill>
      )}

      {frame >= 360 && (
        <AbsoluteFill style={{ flexDirection: "column" }}>
          {/* Content — top 600px */}
          <div className="flex flex-col overflow-hidden" style={{ height: 600, padding: "24px 80px 16px 80px" }}>
            <div className="mb-3" style={{ opacity: headerOpacity }}>
              <div className="text-[28px] text-ds-gold font-sans tracking-[4px] mb-1" style={{ textShadow: TEXT_SHADOW }}>PHẦN 3.3</div>
              <h2 className="text-[42px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Tuyên truyền chính sách và tình nguyện cộng đồng</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-2" />
            </div>

            {/* Page 1: Vertical FlowChart */}
            {frame < PAGE_FLIP + 30 && (
              <div className="flex-1" style={{ opacity: page1Opacity, transform: `scale(${page1Scale})`, transformOrigin: "center center" }}>
                <FlowChart
                  nodes={nodes}
                  direction="vertical"
                  visibleNodes={visibleNodes}
                  nodeScales={nodeScales}
                  nodeOpacities={nodeOpacities}
                  arrowOpacities={arrowOpacities}
                />
              </div>
            )}

            {/* Page 2: images */}
            {frame >= PAGE_FLIP && (
              <div className="flex gap-8 items-center justify-center" style={{ flex: 1 }}>
                <div style={{ opacity: img1Opacity }} className="flex flex-col items-center">
                  <ArtDecoImage src={staticFile('media/T3-3/img1.jpg')} description="Bác Hồ với thế hệ trẻ" width={440} height={340} ringAngle={ringAngle} sweepProgress={img1Sweep} />
                  <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Chủ tịch Hồ Chí Minh với thế hệ trẻ các dân tộc</div>
                </div>
                <div style={{ opacity: img2Opacity }} className="flex flex-col items-center">
                  <ArtDecoImage src={staticFile('media/T3-3/img2.jpg')} description="Tình nguyện vùng DTTS" width={440} height={340} ringAngle={ringAngle} sweepProgress={img2Sweep} />
                  <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Tình nguyện viên dạy học cho trẻ em vùng dân tộc thiểu số</div>
                </div>
              </div>
            )}

            <div className="mt-auto"><CitationFooter text="GT CNXHKH (2021), Ch.6, I.3b, tr.210-212; QĐ 1719/QĐ-TTg" opacity={citationOpacity} /></div>
          </div>

          {/* Video strip — bottom 480px */}
          <div style={{ position: "relative", width: 1920, height: 480, background: "#000", opacity: videoOpacity }}>
            <Sequence from={360} layout="none" durationInFrames={2280}>
              <Video
                src={staticFile('media/T3-3/video_y_nhu_cropped.mp4')}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Sequence>
            <div style={{ position: "absolute", bottom: 12, right: 24, background: "rgba(0,0,0,0.6)", padding: "6px 16px", borderRadius: 8 }}>
              <span className="text-[28px] font-sans font-bold" style={{ color: "#F7F3EE" }}>Nguyễn Đình Ý Như</span>
              <span className="text-[22px] font-sans ml-3" style={{ color: "#D4AF37" }}>Phần 3.3</span>
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
});
