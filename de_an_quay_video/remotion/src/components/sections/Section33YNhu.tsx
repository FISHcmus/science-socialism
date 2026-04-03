import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter } from "../ds";

const CARDS = [
  { title: "Tuyên truyền chính sách dân tộc", detail: "Đồng bào DTTS vùng sâu vùng xa chưa nắm rõ các chương trình hỗ trợ. CT MTQG 2021-2030: hỗ trợ đất ở, nhà ở, nước sinh hoạt tại Hà Giang, Cao Bằng, Kon Tum.", appearAt: 90 },
  { title: "Mùa hè xanh - ĐHKHTN", detail: "Tình nguyện tại Đồng Tháp, Vĩnh Long, vùng DTTS. Phổ cập tin học, hướng dẫn Internet, khảo sát nguồn nước, xử lý rác thải.", appearAt: 600 },
  { title: "Trách nhiệm sinh viên", detail: "Mang kiến thức chuyên môn phục vụ cộng đồng, lan tỏa thông tin chính sách qua mạng xã hội hoặc các đợt tình nguyện.", appearAt: 1050 },
];

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

  const img1Opacity = interpolate(frame, [1400, 1430], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - 1435) / 30));
  const img2Opacity = interpolate(frame, [1520, 1550], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - 1555) / 30));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Tuyên truyền chính sách" subtitle="và tình nguyện cộng đồng" sectionNumber="PHẦN 3.3" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "60px 60px 40px 80px" }}>
            <div className="mb-6" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 3.3</div>
              <h2 className="text-[52px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Tuyên truyền chính sách và tình nguyện cộng đồng</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-4" />
            </div>

            <div className="flex flex-col gap-4">
              {CARDS.map((p, i) => {
                const localFrame = frame - p.appearAt;
                if (localFrame < 0) return null;
                const cardSpring = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 90 } });
                const translateX = interpolate(cardSpring, [0, 1], [-80, 0]);
                const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);
                return (
                  <div key={i} className="rounded-xl" style={{ transform: `translateX(${translateX}px)`, opacity: cardOpacity, backgroundColor: "rgba(255, 255, 255, 0.95)", border: `3px solid ${COLORS.gold}`, borderLeft: `6px solid ${COLORS.gold}`, padding: "20px 32px" }}>
                    <div className="text-[38px] font-bold text-ds-white font-sans mb-2 leading-tight" style={{ textShadow: TEXT_SHADOW }}>{p.title}</div>
                    <div className="text-[28px] text-ds-body font-sans leading-normal" style={{ textShadow: TEXT_SHADOW }}>{p.detail}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-10 mt-6">
              <div style={{ opacity: img1Opacity }}><ArtDecoImage description="Ảnh minh họa 1" width={340} height={340} ringAngle={ringAngle} sweepProgress={img1Sweep} /></div>
              <div style={{ opacity: img2Opacity }}><ArtDecoImage description="Ảnh minh họa 2" width={340} height={340} ringAngle={ringAngle} sweepProgress={img2Sweep} /></div>
            </div>

            <div className="mt-auto"><CitationFooter text="GT CNXHKH (2021), Ch.6, I.3b, tr.210-212; QĐ 1719/QĐ-TTg" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><MemberPiP name="Nguyễn Đình Ý Như" sectionLabel="Phần 3.3 - Tình nguyện cộng đồng" ringAngle={ringAngle} /></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
