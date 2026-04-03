import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, FlowChart, GlassPanel, TypewriterText } from "../ds";

const PRINCIPLES = [
  { title: "Tôn trọng quyền tự do tín ngưỡng", detail: "Quyền theo hoặc không theo tôn giáo nào, đây là quyền tự do cơ bản của công dân được pháp luật bảo hộ.", appearAt: 90 },
  { title: "Khắc phục dần ảnh hưởng tiêu cực", detail: "Bằng phát triển kinh tế, nâng cao đời sống vật chất và tinh thần, nâng cao trình độ dân trí cho nhân dân.", appearAt: 540 },
  { title: "Phân biệt mặt tư tưởng và mặt chính trị", detail: "Mặt tư tưởng: không đối kháng, giải quyết bằng tuyên truyền. Mặt chính trị: đối kháng, xử lý bằng pháp luật.", appearAt: 990 },
  { title: "Quan điểm lịch sử cụ thể", detail: "Phân tích vai trò tôn giáo trong từng giai đoạn lịch sử, phát huy giá trị nhân văn, đạo đức tốt đẹp.", appearAt: 1440 },
];

export const Section13PhungNhi: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const clampBoth = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

  // Title beat (0-89)
  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 80]);

  // Content beat (90+)
  const beat2LocalFrame = Math.max(0, frame - 90);
  const ringAngle = (beat2LocalFrame / fps) * 80;
  const headerOpacity = interpolate(frame, [90, 110], [0, 1], clampBoth);
  const pipOpacity = interpolate(frame, [90, 120], [0, 1], clampBoth);
  const citationOpacity = interpolate(frame, [1900, 1960], [0, 1], clampBoth);

  // FlowChart node entrance: fade + slide-down, staggered ~450 frames
  const nodeOpacities = PRINCIPLES.map((_, i) => {
    const nodeAppear = 90 + i * 450;
    const s = spring({ frame: Math.max(0, frame - nodeAppear), fps, config: { damping: 16, stiffness: 90 } });
    return interpolate(s, [0, 1], [0, 1]);
  });
  const nodeTranslateYs = PRINCIPLES.map((_, i) => {
    const nodeAppear = 90 + i * 450;
    const s = spring({ frame: Math.max(0, frame - nodeAppear), fps, config: { damping: 16, stiffness: 90 } });
    return interpolate(s, [0, 1], [-20, 0]);
  });

  // Active principle based on frame ranges
  const activePrincipleIndex = frame < 90 ? -1
    : frame < 540 ? 0
    : frame < 990 ? 1
    : frame < 1390 ? 2
    : 3;

  // TypewriterText: compute visibleChars for the active principle's detail
  const activeDetail = activePrincipleIndex >= 0 ? PRINCIPLES[activePrincipleIndex]!.detail : "";
  const principleStartFrames = [90, 540, 990, 1390];
  const localTypingFrame = activePrincipleIndex >= 0
    ? Math.max(0, frame - principleStartFrames[activePrincipleIndex]!)
    : 0;
  const visibleChars = Math.min(activeDetail.length, Math.floor(localTypingFrame / 5));
  const cursorVisible = Math.floor(frame / 15) % 2 === 0;

  // Page-flip transition (scale-down/up)
  const PAGE_FLIP = 1650;
  const page1Scale = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [1, 0.85], clampBoth);
  const page1Opacity = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [1, 0], clampBoth);
  const page2Scale = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0.85, 1], clampBoth);
  const page2Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], clampBoth);

  // Page 2 images
  const img1Opacity = interpolate(frame, [PAGE_FLIP + 60, PAGE_FLIP + 90], [0, 1], clampBoth);
  const img1Sweep = Math.max(0, Math.min(1, (frame - (PAGE_FLIP + 95)) / 30));
  const img2Opacity = interpolate(frame, [PAGE_FLIP + 120, PAGE_FLIP + 150], [0, 1], clampBoth);
  const img2Sweep = Math.max(0, Math.min(1, (frame - (PAGE_FLIP + 155)) / 30));

  // FlowChart nodes (labels only)
  const flowNodes = PRINCIPLES.map(p => ({ label: p.title }));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Bốn nguyên tắc giải quyết" subtitle="vấn đề tôn giáo" sectionNumber="PHẦN 1.3" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "48px 60px 32px 80px" }}>
            <div className="mb-4" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 1.3</div>
              <h2 className="text-[48px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Bốn nguyên tắc giải quyết vấn đề tôn giáo</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-3" />
            </div>

            {/* Page 1: FlowChart + TypewriterText */}
            {frame < PAGE_FLIP + 30 && (
              <div className="flex flex-col gap-6 flex-1" style={{ opacity: page1Opacity, transform: `scale(${page1Scale})`, transformOrigin: "center center" }}>
                {/* Horizontal FlowChart with custom per-node transforms */}
                <div style={{ position: "relative" }}>
                  {/* Invisible FlowChart for layout */}
                  <div style={{ visibility: "hidden" }}>
                    <FlowChart nodes={flowNodes} direction="horizontal" visibleNodes={4} />
                  </div>
                  {/* Visible FlowChart with per-node translateY animation */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
                    <FlowChart
                      nodes={flowNodes}
                      direction="horizontal"
                      visibleNodes={4}
                      nodeOpacities={nodeOpacities}
                    />
                  </div>
                </div>

                {/* GlassPanel with TypewriterText for active principle detail */}
                {activePrincipleIndex >= 0 && (
                  <GlassPanel borderRadius={16} padding="28px 36px" goldBorder>
                    <div className="flex flex-col gap-2">
                      <span className="text-[32px] font-bold text-ds-gold font-sans" style={{ textShadow: TEXT_SHADOW }}>
                        {PRINCIPLES[activePrincipleIndex]!.title}
                      </span>
                      <TypewriterText
                        text={activeDetail}
                        visibleChars={visibleChars}
                        fontSize={28}
                        showCursor={true}
                        cursorVisible={cursorVisible}
                      />
                    </div>
                  </GlassPanel>
                )}
              </div>
            )}

            {/* Page 2: images */}
            {frame >= PAGE_FLIP && (
              <div className="flex flex-col gap-3 flex-1 items-center justify-center" style={{ opacity: page2Opacity, transform: `scale(${page2Scale})`, transformOrigin: "center center" }}>
                <div className="flex gap-8">
                  <div style={{ opacity: img1Opacity }}><ArtDecoImage description="Tự do tín ngưỡng" src={staticFile('media/T1-3/img1_tu_do_tin_nguong.jpg')} width={480} height={480} ringAngle={ringAngle} sweepProgress={img1Sweep} /></div>
                  <div style={{ opacity: img2Opacity }}><ArtDecoImage description="Xuyên tạc tôn giáo" src={staticFile('media/T1-3/img2_xuyen_tac_ton_giao.png')} width={480} height={480} ringAngle={ringAngle} sweepProgress={img2Sweep} /></div>
                </div>
              </div>
            )}

            <div className="mt-auto"><CitationFooter text="Giáo trình CNXHKH (2021), Ch.6, II.1b, tr.218-221" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><MemberPiP name="Trần Thị Phụng Nhi" sectionLabel="Phần 1.3 - Nguyên tắc tôn giáo" ringAngle={ringAngle} src={staticFile('media/T1-3/video_phung_nhi.mp4')} /></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
