import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, Timeline } from "../ds";

;
;
;

export const Section31QuynhNhu: React.FC = () => {
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

  // Timeline items
  const timelineItems = [
    { title: "Giao lưu HSSV DTTS (Cần Thơ, 5/2025)", detail: "Biểu diễn văn nghệ, thi cắm trại, đốt lửa trại — tăng cường hiểu biết giữa các dân tộc" },
    { title: "Chủ động tìm hiểu đa dạng văn hóa", detail: "Học hỏi phong tục, tập quán, ngôn ngữ của các dân tộc anh em trong cộng đồng" },
    { title: "Giữ bản sắc nhưng không khép kín", detail: "Trở thành cầu nối văn hóa, lan tỏa giá trị tốt đẹp của mỗi dân tộc" },
  ];

  // Cascade-down entrance: staggered translateY + opacity
  const itemOpacities = timelineItems.map((_, i) => {
    const s = spring({ frame: Math.max(0, frame - 200 - i * 200), fps, config: { damping: 14, stiffness: 70 } });
    return interpolate(s, [0, 1], [0, 1]);
  });
  const itemTranslateX = timelineItems.map((_, i) => {
    const s = spring({ frame: Math.max(0, frame - 200 - i * 200), fps, config: { damping: 14, stiffness: 70 } });
    return interpolate(s, [0, 1], [-40, 0]);
  });
  const dotScales = timelineItems.map((_, i) => {
    const s = spring({ frame: Math.max(0, frame - 180 - i * 200), fps, config: { damping: 12, stiffness: 100 } });
    return interpolate(s, [0, 1], [0, 1]);
  });
  const lineProgress = interpolate(frame, [150, 750], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const visibleCount = frame < 200 ? 0 : frame < 400 ? 1 : frame < 600 ? 2 : 3;

  // Page curl page-flip
  const PAGE_FLIP = 1150;
  const flipProgress = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page1Opacity = interpolate(flipProgress, [0, 0.8], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page1SkewY = interpolate(flipProgress, [0, 1], [0, -5]);
  const page1Scale = interpolate(flipProgress, [0, 1], [1, 0.95]);

  const img1Opacity = interpolate(frame, [1500, 1530], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - 1535) / 30));
  const img2Opacity = interpolate(frame, [1620, 1650], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - 1655) / 30));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Nhận thức đúng đắn" subtitle="Giao lưu văn hóa dân tộc" sectionNumber="PHẦN 3.1" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "48px 60px 32px 80px" }}>
            <div className="mb-4" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 3.1</div>
              <h2 className="text-[48px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Giao lưu văn hóa dân tộc</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-3" />
            </div>

            {/* Page 1: Timeline */}
            {frame < PAGE_FLIP + 30 && (
              <div style={{ opacity: page1Opacity, transform: `skewY(${page1SkewY}deg) scale(${page1Scale})`, transformOrigin: "top left" }}>
                <Timeline
                  items={timelineItems}
                  visibleCount={visibleCount}
                  itemOpacities={itemOpacities}
                  itemTranslateX={itemTranslateX}
                  dotScales={dotScales}
                  lineProgress={lineProgress}
                />
              </div>
            )}

            {/* Page 2: images */}
            {frame >= PAGE_FLIP && (
              <div className="flex gap-8">
                <div style={{ opacity: img1Opacity }}><ArtDecoImage description="Ảnh minh họa 1" width={480} height={480} ringAngle={ringAngle} sweepProgress={img1Sweep} /></div>
                <div style={{ opacity: img2Opacity }}><ArtDecoImage description="Ảnh minh họa 2" width={480} height={480} ringAngle={ringAngle} sweepProgress={img2Sweep} /></div>
              </div>
            )}

            <div className="mt-auto"><CitationFooter text="GT CNXHKH (2021), Ch.6, I.1, tr.198; Bộ VHTTDL (2025)" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><MemberPiP name="Nguyễn Phạm Quỳnh Như" sectionLabel="Phần 3.1 - Giao lưu văn hóa" ringAngle={ringAngle} src={staticFile('media/T3-1/video_quynh_nhu.mp4')} /></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
