import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
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

  const beat2LocalFrame = Math.max(0, frame - 90);
  const ringAngle = (beat2LocalFrame / fps) * 80;
  const headerOpacity = interpolate(frame, [90, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pipOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const citationOpacity = interpolate(frame, [1700, 1760], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // AlertCard data with variants
  const alerts: Array<{ title: string; detail: string; variant: "warning" | "danger" | "success"; appearAt: number }> = [
    { title: "4 dấu hiệu tin giả", detail: "Tiêu đề giật gân | Thiếu nguồn | Ảnh/video cắt ghép | Quy chụp nhóm dân tộc/tôn giáo", variant: "warning", appearAt: 150 },
    { title: "Ví dụ thực tế: Đắk Lắk", detail: "Thông tin bịa đặt về quan hệ dân tộc ở Tây Nguyên, gây hoang mang dư luận", variant: "danger", appearAt: 400 },
    { title: "Cách kiểm chứng thông tin", detail: "Đối chiếu nhiều nguồn, Google Image/TinEye kiểm tra ảnh, chia sẻ đính chính khi phát hiện tin giả", variant: "success", appearAt: 650 },
  ];

  // Shake-in from right: translateX 300->0 with overshoot spring
  const alertAnims = alerts.map((a, i) => {
    const s = spring({ frame: Math.max(0, frame - a.appearAt), fps, config: { damping: 8, stiffness: 80, overshootClamping: false } });
    const translateX = interpolate(s, [0, 1], [300, 0]);
    const opacity = interpolate(s, [0, 0.3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const scale = interpolate(s, [0, 1], [0.9, 1]);
    return { translateX, opacity, scale };
  });

  // Horizontal flip page-flip
  const PAGE_FLIP = 1250;
  const flipProgress = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page1RotateY = interpolate(flipProgress, [0, 1], [0, 90]);
  const page1Opacity = interpolate(flipProgress, [0, 0.5], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const page2RotateY = interpolate(frame, [PAGE_FLIP + 15, PAGE_FLIP + 45], [-90, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 65) / 30));
  const img2Opacity = interpolate(frame, [PAGE_FLIP + 90, PAGE_FLIP + 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - PAGE_FLIP - 125) / 30));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Nhận diện thông tin sai lệch" subtitle="trên mạng xã hội" sectionNumber="PHẦN 3.2" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "48px 60px 32px 80px" }}>
            <div className="mb-4" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 3.2</div>
              <h2 className="text-[48px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Nhận diện thông tin sai lệch trên MXH</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-3" />
            </div>

            {/* Page 1: AlertCards */}
            {frame < PAGE_FLIP + 30 && (
              <div className="flex flex-col gap-4" style={{ opacity: page1Opacity, transform: `perspective(1200px) rotateY(${page1RotateY}deg)`, transformOrigin: "left center" }}>
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
              <div className="flex gap-8" style={{ transform: `perspective(1200px) rotateY(${page2RotateY}deg)`, transformOrigin: "left center" }}>
                <div style={{ opacity: img1Opacity }}><ArtDecoImage description="Ảnh minh họa 1" src={staticFile('media/T3-2/img1.webp')} width={480} height={480} ringAngle={ringAngle} sweepProgress={img1Sweep} /></div>
                <div style={{ opacity: img2Opacity }}><ArtDecoImage description="Ảnh minh họa 2" src={staticFile('media/T3-2/img2.webp')} width={480} height={480} ringAngle={ringAngle} sweepProgress={img2Sweep} /></div>
              </div>
            )}

            <div className="mt-auto"><CitationFooter text="Báo Nhân Dân (2025), vụ tin giả Đắk Lắk" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><MemberPiP name="Hoàng Thị Tố Như" sectionLabel="Phần 3.2 - Nhận diện tin giả" ringAngle={ringAngle} src={staticFile('media/T3-2/video_to_nhu.mp4')} /></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
