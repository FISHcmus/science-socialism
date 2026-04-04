import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, IconGrid } from "../ds";
import type { IconGridItem } from "../ds";

const CHARACTERISTICS = [
  { title: "Cộng đồng lãnh thổ", detail: "Vùng đất, trời, biển thuộc chủ quyền quốc gia, là nơi cư trú lâu đời của cộng đồng dân tộc.", appearAt: 771 },
  { title: "Cộng đồng sinh hoạt kinh tế", detail: "Đặc trưng quan trọng nhất, là cơ sở liên kết các bộ phận, thành viên trong cộng đồng dân tộc.", appearAt: 1098 },
  { title: "Cộng đồng ngôn ngữ", detail: "Công cụ giao tiếp chung, phản ánh ý thức tự giác tộc người và là tiêu chí quan trọng để phân biệt dân tộc.", appearAt: 1287 },
  { title: "Cộng đồng văn hóa và tâm lý", detail: "Yếu tố đặc biệt quan trọng, thể hiện qua văn hóa vật chất và tinh thần, tạo bản sắc riêng mỗi dân tộc.", appearAt: 1476 },
  { title: "Có chung một nhà nước", detail: "Phân biệt dân tộc quốc gia với dân tộc - tộc người, thể hiện qua tổ chức nhà nước thống nhất.", appearAt: 1779 },
];

export const Section12ChauNhi: React.FC = () => {
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

  // Page transition: rotate-fade
  const PAGE_FLIP = 1410;
  const page1Rotate = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [0, -3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page1Opacity = interpolate(frame, [PAGE_FLIP, PAGE_FLIP + 30], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page2Rotate = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [3, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const page2Opacity = interpolate(frame, [PAGE_FLIP + 30, PAGE_FLIP + 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [2520, 2550], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - 2555) / 30));
  const img2Opacity = interpolate(frame, [2700, 2730], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - 2735) / 30));

  // Map CHARACTERISTICS to IconGridItem format
  const page1Items: IconGridItem[] = CHARACTERISTICS.slice(0, 3).map(c => ({ label: c.title, description: c.detail }));
  const page2Items: IconGridItem[] = CHARACTERISTICS.slice(3).map(c => ({ label: c.title, description: c.detail }));

  // Scale-bounce animation: 0 -> 1.15 -> 1.0
  const computeScaleBounce = (appearAt: number) => {
    const localFrame = frame - appearAt;
    if (localFrame < 0) return { scale: 0, opacity: 0 };
    const s = spring({ frame: localFrame, fps, config: { damping: 12, stiffness: 120 } });
    const scale = interpolate(s, [0, 0.7, 1], [0, 1.15, 1]);
    const opacity = interpolate(s, [0, 0.3], [0, 1], { extrapolateRight: "clamp" });
    return { scale, opacity };
  };

  // Page 1: items 0-2
  const page1Animations = CHARACTERISTICS.slice(0, 3).map(c => computeScaleBounce(c.appearAt));
  const page1Scales = page1Animations.map(a => a.scale);
  const page1Opacities = page1Animations.map(a => a.opacity);
  const page1VisibleCount = page1Animations.filter(a => a.opacity > 0).length;

  // Page 2: items 3-4
  const page2Animations = CHARACTERISTICS.slice(3).map(c => computeScaleBounce(c.appearAt));
  const page2Scales = page2Animations.map(a => a.scale);
  const page2Opacities = page2Animations.map(a => a.opacity);
  const page2VisibleCount = page2Animations.filter(a => a.opacity > 0).length;

  return (
    <AbsoluteFill>
      {frame < 360 && (
        <AbsoluteFill
          className="flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}
        >
          <SectionTitle title="Năm đặc trưng cơ bản" subtitle="của dân tộc" sectionNumber="PHẦN 1.2" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 360 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div style={{ opacity: pipOpacity }}><Sequence from={360} layout="none" durationInFrames={2670}><MemberPiP name="Nguyễn Hồng Châu Nhi" sectionLabel="Phần 1.2 - Năm đặc trưng dân tộc" ringAngle={ringAngle} src={staticFile('media/T1-2/video_chau_nhi.mp4')} /></Sequence></div>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "48px 80px 32px 60px" }}>
            <div className="mb-4" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 1.2</div>
              <h2 className="text-[48px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Năm đặc trưng cơ bản của dân tộc</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-3" />
            </div>

            {/* Page 1: IconGrid 3 columns for items 0-2 */}
            {frame < PAGE_FLIP + 30 && (
              <div style={{ opacity: page1Opacity, transform: `rotate(${page1Rotate}deg)`, transformOrigin: "center center", flex: 1, display: "flex", alignItems: "flex-start" }}>
                <IconGrid
                  items={page1Items}
                  columns={3}
                  visibleCount={page1VisibleCount}
                  itemScales={page1Scales}
                  itemOpacities={page1Opacities}
                />
              </div>
            )}

            {/* Page 2: IconGrid 2 columns for items 3-4 + images */}
            {frame >= PAGE_FLIP && (
              <div style={{ opacity: page2Opacity, transform: `rotate(${page2Rotate}deg)`, transformOrigin: "center center", flex: 1 }} className="flex flex-col gap-4">
                <IconGrid
                  items={page2Items}
                  columns={2}
                  visibleCount={page2VisibleCount}
                  itemScales={page2Scales}
                  itemOpacities={page2Opacities}
                />

                <div className="flex gap-8 mt-4">
                  <div style={{ opacity: img1Opacity }} className="flex flex-col items-center">
                    <ArtDecoImage description="54 dân tộc anh em" src={staticFile('media/T1-2/img1_54_dan_toc.jpg')} width={400} height={360} ringAngle={ringAngle} sweepProgress={img1Sweep} />
                    <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>Đại diện 54 dân tộc anh em trong đại gia đình Việt Nam</div>
                  </div>
                  <div style={{ opacity: img2Opacity }} className="flex flex-col items-center">
                    <ArtDecoImage description="Cộng đồng lãnh thổ" src={staticFile('media/T1-2/img2_ban_do_vn.jpeg')} width={400} height={360} ringAngle={ringAngle} sweepProgress={img2Sweep} />
                    <div className="text-[24px] font-sans mt-3 text-center" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>"Một tấc bản đồ, vạn tấc quê hương" - Cộng đồng lãnh thổ Việt Nam</div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-auto"><CitationFooter text="Giáo trình CNXHKH (2021), Ch.6, I.1, tr.196-200" opacity={citationOpacity} /></div>
          </div>

        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
