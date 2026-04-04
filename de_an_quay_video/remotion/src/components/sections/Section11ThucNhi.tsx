import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, FlowChart } from "../ds";
import type { FlowNode } from "../ds";

const PRINCIPLES = [
  {
    title: "Các dân tộc hoàn toàn bình đẳng",
    detail: "Mọi dân tộc đều có quyền và nghĩa vụ ngang nhau trên mọi lĩnh vực",
    appearAt: 519,
  },
  {
    title: "Các dân tộc có quyền tự quyết",
    detail: "Quyền tự quyết định chế độ chính trị, con đường phát triển. HCM: CMVS",
    appearAt: 1056,
  },
  {
    title: "Liên hiệp công nhân tất cả các dân tộc",
    detail: "Gắn kết giải phóng dân tộc với giải phóng giai cấp",
    appearAt: 1617,
  },
];

export const Section11ThucNhi: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 80]);

  const beat2LocalFrame = Math.max(0, frame - 360);
  const ringAngle = 0;

  const headerOpacity = interpolate(frame, [90, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pipOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const citationOpacity = interpolate(frame, [1800, 1860], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // FlowChart nodes
  const flowNodes: FlowNode[] = PRINCIPLES.map((p) => ({
    label: p.title,
    description: p.detail,
  }));

  // Per-node scale pop-in (0.7 -> 1.0) and opacity (0 -> 1), staggered ~300 frames apart
  const nodeScales = PRINCIPLES.map((p) => {
    const localFrame = frame - p.appearAt;
    if (localFrame < 0) return 0.7;
    const s = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 90 } });
    return interpolate(s, [0, 1], [0.7, 1]);
  });

  const nodeOpacities = PRINCIPLES.map((p) => {
    const localFrame = frame - p.appearAt;
    if (localFrame < 0) return 0;
    const s = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 90 } });
    return interpolate(s, [0, 1], [0, 1]);
  });

  const arrowOpacities = PRINCIPLES.slice(1).map((p) => {
    const localFrame = frame - p.appearAt;
    if (localFrame < 0) return 0;
    const s = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 90 } });
    return interpolate(s, [0, 1], [0, 1]);
  });

  // Count visible nodes for FlowChart
  const visibleNodes = PRINCIPLES.filter((p) => frame >= p.appearAt).length;

  // Page flip: horizontal wipe
  const PAGE_FLIP = 2160;
  const page1TranslateX = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [0, -1440], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page1Opacity = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page2TranslateX = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [1440, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 65) / 30));
  const img2Opacity = interpolate(frame, [PAGE_FLIP + 90, PAGE_FLIP + 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 125) / 30));

  return (
    <AbsoluteFill>
      {frame < 360 && (
        <AbsoluteFill
          className="flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}
        >
          <SectionTitle
            title="Cương lĩnh dân tộc"
            subtitle="của chủ nghĩa Mác - Lênin"
            sectionNumber="PHẦN 1.1"
            opacity={titleOpacity}
            translateY={titleTranslateY}
            accentWidth={titleAccentWidth}
          />
        </AbsoluteFill>
      )}

      {frame >= 360 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div
            className="flex flex-col overflow-hidden"
            style={{ width: 1440, height: 1080, padding: "48px 60px 32px 80px", position: "relative" }}
          >
            <div className="mb-4" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 1.1</div>
              <h2 className="text-[48px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-3" />
            </div>

            {/* Page 1: FlowChart vertical */}
            {frame < PAGE_FLIP + 30 && (
              <div style={{ opacity: page1Opacity, transform: `translateX(${page1TranslateX}px)`, flex: 1, display: "flex", alignItems: "center" }}>
                <FlowChart
                  nodes={flowNodes}
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
              <div className="flex gap-8" style={{ transform: `translateX(${page2TranslateX}px)`, flex: 1, alignItems: "center" }}>
                <div style={{ opacity: img1Opacity }} className="flex flex-col items-center">
                  <ArtDecoImage description="V.I. Lênin" src={staticFile('media/T1-1/img1.jpg')} width={480} height={440} ringAngle={ringAngle} sweepProgress={img1Sweep} />
                  <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>V.I. Lênin - Tác giả cương lĩnh dân tộc trong chủ nghĩa Mác-Lênin</div>
                </div>
                <div style={{ opacity: img2Opacity }} className="flex flex-col items-center">
                  <ArtDecoImage description="Báo L'Humanité" src={staticFile('media/T1-1/img2.jpg')} width={480} height={440} ringAngle={ringAngle} sweepProgress={img2Sweep} />
                  <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Báo L'Humanité (Pháp) - Cơ quan ngôn luận phong trào cộng sản quốc tế</div>
                </div>
              </div>
            )}

            <div className="mt-auto">
              <CitationFooter text="Giáo trình CNXHKH (2021), Ch.6, I.2b, tr.202-205" opacity={citationOpacity} />
            </div>
          </div>

          <div style={{ opacity: pipOpacity }}>
            <Sequence from={360} layout="none" durationInFrames={2250}>
              <MemberPiP name="Đào Thục Nhi" sectionLabel="Phần 1.1 - Cương lĩnh dân tộc" ringAngle={ringAngle} src={staticFile('media/T1-1/video_thuc_nhi.mp4')} />
            </Sequence>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
