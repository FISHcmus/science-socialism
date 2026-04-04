import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, AlertCard } from "../ds";

;

export const Section32ToNhu: React.FC = () => {
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
  const citationOpacity = interpolate(frame, [2500, 2560], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // AlertCard data with variants
  const alerts: Array<{ title: string; detail: string; variant: "warning" | "danger" | "success"; appearAt: number }> = [
    { title: "4 dấu hiệu tin giả", detail: "Tiêu đề giật gân | Thiếu nguồn | Ảnh/video cắt ghép | Quy chụp nhóm dân tộc/tôn giáo", variant: "warning", appearAt: 936 },
    { title: "Ví dụ thực tế: Đắk Lắk", detail: "Thông tin bịa đặt về quan hệ dân tộc ở Tây Nguyên, gây hoang mang dư luận", variant: "danger", appearAt: 1680 },
    { title: "Cách kiểm chứng thông tin", detail: "Đối chiếu nhiều nguồn, Google Image/TinEye kiểm tra ảnh, chia sẻ đính chính khi phát hiện tin giả", variant: "success", appearAt: 1857 },
  ];

  // Shake-in from right: translateX 300->0 with overshoot spring
  const alertAnims = alerts.map((a) => {
    const s = spring({ frame: Math.max(0, frame - a.appearAt), fps, config: { damping: 8, stiffness: 80, overshootClamping: false } });
    const translateX = interpolate(s, [0, 1], [300, 0]);
    const opacity = interpolate(s, [0, 0.3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const scale = interpolate(s, [0, 1], [0.9, 1]);
    return { translateX, opacity, scale };
  });

  // Page flip
  const PAGE_FLIP = 2100;
  const page1Opacity = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page1Blur = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [0, 8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img2Opacity = interpolate(frame, [PAGE_FLIP + 90, PAGE_FLIP + 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 125) / 30));

  return (
    <AbsoluteFill>
      {frame < 360 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Nhận diện thông tin sai lệch" subtitle="trên mạng xã hội" sectionNumber="PHẦN 3.2" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 360 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "48px 60px 32px 80px" }}>
            <div className="mb-4" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 3.2</div>
              <h2 className="text-[48px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Nhận diện thông tin sai lệch trên MXH</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-3" />
            </div>

            {/* Page 1: AlertCards */}
            {frame < PAGE_FLIP + 30 && (
              <div className="flex flex-col gap-4" style={{ opacity: page1Opacity, filter: `blur(${page1Blur}px)` }}>
                {alerts.map((a, i) => (
                  <AlertCard
                    key={i}
                    title={a.title}
                    detail={a.detail}
                    variant={a.variant}
                    opacity={alertAnims[i]!.opacity}
                    translateX={alertAnims[i]!.translateX}
                    scale={alertAnims[i]!.scale}
                  />
                ))}
              </div>
            )}

            {/* Page 2: images */}
            {frame >= PAGE_FLIP && (
              <div className="flex items-center justify-center" style={{ flex: 1 }}>
                <div style={{ opacity: img2Opacity }} className="flex flex-col items-center">
                  <ArtDecoImage src={staticFile('media/T3-2/img2.webp')} description="Tin giả dân tộc" width={600} height={440} ringAngle={ringAngle} sweepProgress={img2Sweep} />
                  <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Tin giả lợi dụng vấn đề dân tộc để chia rẽ đoàn kết</div>
                </div>
              </div>
            )}

            <div className="mt-auto"><CitationFooter text="Báo Nhân Dân (2025), vụ tin giả Đắk Lắk" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><Sequence from={360} layout="none" durationInFrames={2160}><MemberPiP name="Hoàng Thị Tố Như" sectionLabel="Phần 3.2 - Nhận diện tin giả" ringAngle={ringAngle} src={staticFile('media/T3-2/video_to_nhu.mp4')} /></Sequence></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
