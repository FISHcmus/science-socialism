import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter } from "../ds";

const CARDS = [
  { title: "Ví dụ cụ thể", detail: "Nhóm trưởng bài thuyết trình phân công 9 thành viên từ nhiều tỉnh thành, mỗi người đóng góp phù hợp khả năng và thế mạnh riêng.", appearAt: 300 },
  { title: "Nguyên tắc thực hành", detail: "Bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển. Giúp đỡ bạn học yếu hơn, tôn trọng sự khác biệt vùng miền.", appearAt: 700 },
  { title: "Hành động từ hôm nay", detail: "Xây dựng đoàn kết từ hành động nhỏ hàng ngày, cùng hướng đến mục tiêu chung là học tập và phát triển bản thân.", appearAt: 1100 },
];

export const Section34Nhan: React.FC = () => {
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
  const quoteOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const citationOpacity = interpolate(frame, [1800, 1860], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [1500, 1530], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - 1535) / 30));
  const img2Opacity = interpolate(frame, [1620, 1650], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - 1655) / 30));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Tổng kết" subtitle="và liên hệ bản thân" sectionNumber="PHẦN 3.4" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "60px 60px 40px 80px" }}>
            <div className="mb-6" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 3.4</div>
              <h2 className="text-[52px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Tổng kết và liên hệ bản thân</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-4" />
            </div>

            {/* Quote block */}
            <div
              className="italic text-[32px] text-ds-light-gold font-sans leading-normal mb-5"
              style={{ opacity: quoteOpacity, padding: "16px 24px", borderLeft: `4px solid ${COLORS.gold}`, textShadow: TEXT_SHADOW }}
            >
              "Môi trường đại học chính là hình ảnh thu nhỏ của cộng đồng 54 dân tộc cư trú đan xen"
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

            <div className="mt-auto"><CitationFooter text="GT CNXHKH (2021), Ch.6, I.3a, tr.205-206; Văn kiện ĐH XII, tr.164-165" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><MemberPiP name="Nguyễn Hữu Thiện Nhân" sectionLabel="Phần 3.4 - Tổng kết" ringAngle={ringAngle} /></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
