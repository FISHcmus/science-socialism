import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter } from "../ds";

const PRINCIPLES = [
  { title: "Tôn trọng quyền tự do tín ngưỡng", detail: "Quyền theo hoặc không theo tôn giáo nào, đây là quyền tự do cơ bản của công dân được pháp luật bảo hộ.", appearAt: 90 },
  { title: "Khắc phục dần ảnh hưởng tiêu cực", detail: "Bằng phát triển kinh tế, nâng cao đời sống vật chất và tinh thần, nâng cao trình độ dân trí cho nhân dân.", appearAt: 540 },
  { title: "Phân biệt mặt tư tưởng và mặt chính trị", detail: "Mặt tư tưởng: không đối kháng, giải quyết bằng tuyên truyền. Mặt chính trị: đối kháng, xử lý bằng pháp luật.", appearAt: 990 },
  { title: "Quan điểm lịch sử cụ thể", detail: "Phân tích vai trò tôn giáo trong từng giai đoạn lịch sử, phát huy giá trị nhân văn, đạo đức tốt đẹp.", appearAt: 1440 },
];

export const Section13PhungNhi: React.FC = () => {
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
  const citationOpacity = interpolate(frame, [1900, 1960], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [1650, 1680], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - 1685) / 30));
  const img2Opacity = interpolate(frame, [1770, 1800], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - 1805) / 30));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Bốn nguyên tắc giải quyết" subtitle="vấn đề tôn giáo" sectionNumber="PHẦN 1.3" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "60px 60px 40px 80px" }}>
            <div className="mb-6" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 1.3</div>
              <h2 className="text-[52px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Bốn nguyên tắc giải quyết vấn đề tôn giáo</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-4" />
            </div>

            <div className="flex flex-col gap-4">
              {PRINCIPLES.map((p, i) => {
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

            <div className="mt-auto"><CitationFooter text="Giáo trình CNXHKH (2021), Ch.6, II.1b, tr.218-221" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><MemberPiP name="Trần Thị Phụng Nhi" sectionLabel="Phần 1.3 - Nguyên tắc tôn giáo" ringAngle={ringAngle} /></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
