import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter } from "../ds";

const CARDS = [
  { title: "Lợi thế", detail: "54 dân tộc cư trú đan xen giúp tăng cường hiểu biết, giao lưu, tạo nền văn hóa thống nhất trong đa dạng.", appearAt: 90 },
  { title: "Thách thức", detail: "Dễ nảy sinh mâu thuẫn, hiểu lầm giữa các dân tộc, chênh lệch phát triển giữa các vùng miền.", appearAt: 450 },
];

export const Section21HuynhNhi: React.FC = () => {
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
  const quoteOpacity = interpolate(frame, [750, 780], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const citationOpacity = interpolate(frame, [1200, 1260], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [950, 980], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - 985) / 30));
  const img2Opacity = interpolate(frame, [1070, 1100], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - 1105) / 30));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Thực tiễn đoàn kết" subtitle="dân tộc Việt Nam" sectionNumber="PHẦN 2.1" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "60px 60px 40px 80px" }}>
            <div className="mb-6" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 2.1</div>
              <h2 className="text-[52px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Thực tiễn đoàn kết dân tộc Việt Nam</h2>
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

            {/* Quote block */}
            <div
              className="italic text-[30px] text-ds-light-gold font-sans leading-normal mt-5"
              style={{
                opacity: quoteOpacity,
                padding: "16px 24px",
                borderLeft: `4px solid ${COLORS.gold}`,
                textShadow: TEXT_SHADOW,
              }}
            >
              "Bao nhiêu lợi ích đều vì dân, bao nhiêu quyền hạn đều của dân"
            </div>

            <div className="flex gap-10 mt-6">
              <div style={{ opacity: img1Opacity }}><ArtDecoImage description="Ảnh minh họa 1" width={340} height={340} ringAngle={ringAngle} sweepProgress={img1Sweep} /></div>
              <div style={{ opacity: img2Opacity }}><ArtDecoImage description="Ảnh minh họa 2" width={340} height={340} ringAngle={ringAngle} sweepProgress={img2Sweep} /></div>
            </div>

            <div className="mt-auto"><CitationFooter text="GT CNXHKH (2021), Ch.6, I.3a, tr.205-208; HCM (1949)" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><MemberPiP name="Bùi Huỳnh Nhi" sectionLabel="Phần 2.1 - Thực tiễn đoàn kết" ringAngle={ringAngle} /></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
