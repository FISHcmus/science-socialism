import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, FlowChart } from "../ds";

;

export const Section33YNhu: React.FC = () => {
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
  const citationOpacity = interpolate(frame, [1700, 1760], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // FlowChart nodes
  const nodes = [
    { label: "CT MTQG 2021-2030", description: "Hỗ trợ đất ở, nhà ở, nước sinh hoạt (Hà Giang, Cao Bằng, Kon Tum)" },
    { label: "Mùa hè xanh - ĐHKHTN", description: "Tình nguyện tại Đồng Tháp, Vĩnh Long. Phổ cập tin học, khảo sát nguồn nước" },
    { label: "Trách nhiệm sinh viên", description: "Mang kiến thức chuyên môn phục vụ cộng đồng, lan tỏa thông tin chính sách" },
  ];

  // Scale-in with glow entrance: per-node scale + glow
  const nodeScales = nodes.map((_, i) => {
    const s = spring({ frame: Math.max(0, frame - 200 - i * 250), fps, config: { damping: 12, stiffness: 60 } });
    return interpolate(s, [0, 1], [0.5, 1]);
  });
  const nodeOpacities = nodes.map((_, i) => {
    const s = spring({ frame: Math.max(0, frame - 200 - i * 250), fps, config: { damping: 12, stiffness: 60 } });
    return interpolate(s, [0, 1], [0, 1]);
  });
  const arrowOpacities = nodes.slice(1).map((_, i) => {
    return interpolate(frame, [350 + i * 250, 380 + i * 250], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  });
  const visibleNodes = frame < 200 ? 0 : frame < 450 ? 1 : frame < 700 ? 2 : 3;

  // Slide-down page-flip
  const PAGE_FLIP = 1250;
  const flipProgress = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page1TranslateY = interpolate(flipProgress, [0, 1], [0, 600]);
  const page1Opacity = interpolate(flipProgress, [0, 0.7], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 65) / 30));
  const img2Opacity = interpolate(frame, [PAGE_FLIP + 90, PAGE_FLIP + 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 125) / 30));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Tuyên truyền chính sách" subtitle="và tình nguyện cộng đồng" sectionNumber="PHẦN 3.3" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "48px 60px 32px 80px" }}>
            <div className="mb-4" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 3.3</div>
              <h2 className="text-[48px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Tuyên truyền chính sách và tình nguyện cộng đồng</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-3" />
            </div>

            {/* Page 1: FlowChart horizontal */}
            {frame < PAGE_FLIP + 30 && (
              <div style={{ opacity: page1Opacity, transform: `translateY(${page1TranslateY}px)` }}>
                <FlowChart
                  nodes={nodes}
                  direction="horizontal"
                  visibleNodes={visibleNodes}
                  nodeScales={nodeScales}
                  nodeOpacities={nodeOpacities}
                  arrowOpacities={arrowOpacities}
                />
              </div>
            )}

            {/* Page 2: images */}
            {frame >= PAGE_FLIP && (
              <div className="flex gap-8">
                <div style={{ opacity: img1Opacity }}><ArtDecoImage description="Ảnh minh họa 1" src={staticFile('media/T3-3/img1.jpg')} width={480} height={480} ringAngle={ringAngle} sweepProgress={img1Sweep} /></div>
                <div style={{ opacity: img2Opacity }}><ArtDecoImage description="Ảnh minh họa 2" src={staticFile('media/T3-3/img2.jpg')} width={480} height={480} ringAngle={ringAngle} sweepProgress={img2Sweep} /></div>
              </div>
            )}

            <div className="mt-auto"><CitationFooter text="GT CNXHKH (2021), Ch.6, I.3b, tr.210-212; QĐ 1719/QĐ-TTg" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><MemberPiP name="Nguyễn Đình Ý Như" sectionLabel="Phần 3.3 - Tình nguyện cộng đồng" ringAngle={ringAngle} src={staticFile('media/T3-3/video_y_nhu.mp4')} /></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
