import { memo, type FC } from "react";
import { AbsoluteFill, Sequence, Video, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, CitationFooter, FlowChart, GlassPanel, TypewriterText } from "../ds";

const PRINCIPLES = [
  { title: "Tôn trọng quyền tự do tín ngưỡng", detail: "Quyền theo hoặc không theo tôn giáo nào, đây là quyền tự do cơ bản của công dân được pháp luật bảo hộ.", appearAt: 942 },
  { title: "Khắc phục dần ảnh hưởng tiêu cực", detail: "Bằng phát triển kinh tế, nâng cao đời sống vật chất và tinh thần, nâng cao trình độ dân trí cho nhân dân.", appearAt: 1515 },
  { title: "Phân biệt mặt tư tưởng và mặt chính trị", detail: "Mặt tư tưởng: không đối kháng, giải quyết bằng tuyên truyền. Mặt chính trị: đối kháng, xử lý bằng pháp luật.", appearAt: 1779 },
  { title: "Quan điểm lịch sử cụ thể", detail: "Phân tích vai trò tôn giáo trong từng giai đoạn lịch sử, phát huy giá trị nhân văn, đạo đức tốt đẹp.", appearAt: 2682 },
];

export const Section13PhungNhi: FC = memo(() => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const clampBoth = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

  // Title beat (0-89)
  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 80]);
  const titleBreathe = spring({ frame, fps, config: { damping: 30, stiffness: 40 } });
  const titleScale = interpolate(titleBreathe, [0, 1], [1.03, 1]);

  // Content beat (90+)
  const beat2LocalFrame = Math.max(0, frame - 360);
  const ringAngle = 0;
  const headerOpacity = interpolate(frame, [90, 110], [0, 1], clampBoth);
  const videoOpacity = interpolate(frame, [90, 120], [0, 1], clampBoth);
  const citationOpacity = interpolate(frame, [1900, 1960], [0, 1], clampBoth);

  // FlowChart node entrance
  const nodeOpacities = PRINCIPLES.map((_, i) => {
    const nodeAppear = 90 + i * 450;
    const s = spring({ frame: Math.max(0, frame - nodeAppear), fps, config: { damping: 16, stiffness: 90 } });
    return interpolate(s, [0, 1], [0, 1]);
  });

  // Active principle based on principleStartFrames
  const activePrincipleIndex = frame < 670 ? -1
    : frame < 1250 ? 0
    : frame < 1510 ? 1
    : frame < 2410 ? 2
    : 3;

  // TypewriterText
  const activeDetail = activePrincipleIndex >= 0 ? PRINCIPLES[activePrincipleIndex]!.detail : "";
  const principleStartFrames = [670, 1250, 1510, 2410];
  const localTypingFrame = activePrincipleIndex >= 0
    ? Math.max(0, frame - principleStartFrames[activePrincipleIndex]!)
    : 0;
  const visibleChars = Math.min(activeDetail.length, Math.floor(localTypingFrame / 5));
  const typingDone = visibleChars >= activeDetail.length;
  const cursorVisible = !typingDone && Math.floor(frame / 15) % 2 === 0;

  // Page-flip transition
  const PAGE_FLIP = 2610;
  const page1Scale = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [1, 0.85], clampBoth);
  const page1Opacity = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [1, 0], clampBoth);
  const page2Scale = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0.85, 1], clampBoth);
  const page2Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], clampBoth);

  const img1Opacity = interpolate(frame, [PAGE_FLIP + 60, PAGE_FLIP + 90], [0, 1], clampBoth);
  const img1Sweep = Math.max(0, Math.min(1, (frame - (PAGE_FLIP + 95)) / 30));
  const img2Opacity = interpolate(frame, [PAGE_FLIP + 120, PAGE_FLIP + 150], [0, 1], clampBoth);
  const img2Sweep = Math.max(0, Math.min(1, (frame - (PAGE_FLIP + 155)) / 30));

  const flowNodes = PRINCIPLES.map(p => ({ label: p.title }));

  return (
    <AbsoluteFill>
      {frame < 360 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Bốn nguyên tắc giải quyết" subtitle="vấn đề tôn giáo" sectionNumber="PHẦN 1.3" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} scale={titleScale} />
        </AbsoluteFill>
      )}

      {frame >= 360 && (
        <AbsoluteFill style={{ flexDirection: "column" }}>
          {/* Content — top 600px */}
          <div className="flex flex-col overflow-hidden" style={{ height: 600, padding: "24px 80px 16px 80px" }}>
            <div className="mb-3" style={{ opacity: headerOpacity }}>
              <div className="text-[28px] text-ds-gold font-sans tracking-[4px] mb-1" style={{ textShadow: TEXT_SHADOW }}>PHẦN 1.3</div>
              <h2 className="text-[42px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Bốn nguyên tắc giải quyết vấn đề tôn giáo</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-2" />
            </div>

            {/* Page 1: FlowChart + TypewriterText */}
            {frame < PAGE_FLIP + 30 && (
              <div className="flex flex-col gap-4 flex-1" style={{ opacity: page1Opacity, transform: `scale(${page1Scale})`, transformOrigin: "center center" }}>
                <FlowChart nodes={flowNodes} direction="horizontal" visibleNodes={4} nodeOpacities={nodeOpacities} />

                {activePrincipleIndex >= 0 && (
                  <GlassPanel borderRadius={16} padding="20px 28px" goldBorder>
                    <div className="flex flex-col gap-1">
                      <span className="text-[30px] font-bold text-ds-gold font-sans" style={{ textShadow: TEXT_SHADOW }}>
                        {PRINCIPLES[activePrincipleIndex]!.title}
                      </span>
                      <TypewriterText text={activeDetail} visibleChars={visibleChars} fontSize={26} showCursor={true} cursorVisible={cursorVisible} />
                    </div>
                  </GlassPanel>
                )}
              </div>
            )}

            {/* Page 2: images */}
            {frame >= PAGE_FLIP && (
              <div className="flex gap-8 flex-1 items-center justify-center" style={{ opacity: page2Opacity, transform: `scale(${page2Scale})`, transformOrigin: "center center" }}>
                <div style={{ opacity: img1Opacity }} className="flex flex-col items-center">
                  <ArtDecoImage description="Tự do tín ngưỡng" src={staticFile('media/T1-3/img1_tu_do_tin_nguong.jpg')} width={400} height={360} ringAngle={ringAngle} sweepProgress={img1Sweep} />
                  <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Thủ tướng gặp gỡ chức sắc tôn giáo tại Hội nghị Xây dựng và Bảo vệ Tổ quốc (2022)</div>
                </div>
                <div style={{ opacity: img2Opacity }} className="flex flex-col items-center">
                  <ArtDecoImage description="Tin giả tôn giáo" src={staticFile('media/T1-3/img2_xuyen_tac_ton_giao.png')} width={400} height={360} ringAngle={ringAngle} sweepProgress={img2Sweep} />
                  <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Nhận diện tin giả xuyên tạc chính sách tôn giáo</div>
                </div>
              </div>
            )}

            <div className="mt-auto"><CitationFooter text="Giáo trình CNXHKH (2021), Ch.6, II.1b, tr.218-221" opacity={citationOpacity} /></div>
          </div>

          {/* Video strip — bottom 480px */}
          <div style={{ position: "relative", width: 1920, height: 480, background: "#000", opacity: videoOpacity }}>
            <Sequence from={360} layout="none" durationInFrames={2760}>
              <Video src={staticFile('media/T1-3/video_phung_nhi_cropped.mp4')} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </Sequence>
            <div style={{ position: "absolute", bottom: 12, right: 24, background: "rgba(0,0,0,0.6)", padding: "6px 16px", borderRadius: 8 }}>
              <span className="text-[28px] font-sans font-bold" style={{ color: "#F7F3EE" }}>Trần Thị Phụng Nhi</span>
              <span className="text-[22px] font-sans ml-3" style={{ color: "#D4AF37" }}>Phần 1.3</span>
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
});
