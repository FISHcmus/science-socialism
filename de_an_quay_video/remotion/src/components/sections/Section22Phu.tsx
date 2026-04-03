import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter, CountUpNumber } from "../ds";

const STATS = [
  { value: 16, suffix: "", label: "tôn giáo" },
  { value: 43, suffix: "", label: "tổ chức" },
  { value: 57, suffix: "K", label: "chức sắc" },
  { value: 29, suffix: "K+", label: "cơ sở thờ tự" },
];

const CARDS = [
  { title: "Chung sống hòa bình", detail: "Các tôn giáo chung sống hòa bình, chưa từng xảy ra xung đột hay chiến tranh tôn giáo tại Việt Nam.", appearAt: 300 },
  { title: "Chính sách nhà nước", detail: "Tôn trọng tự do tín ngưỡng, bình đẳng trước pháp luật. Nghiêm cấm lợi dụng tín ngưỡng gây chia rẽ, xâm phạm an ninh.", appearAt: 600 },
];

export const Section22Phu: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 80]);

  const beat2LocalFrame = Math.max(0, frame - 90);
  const ringAngle = (beat2LocalFrame / fps) * 80;
  const headerOpacity = interpolate(frame, [90, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const statsOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pipOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const citationOpacity = interpolate(frame, [1200, 1260], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const img1Opacity = interpolate(frame, [850, 880], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img1Sweep = Math.max(0, Math.min(1, (frame - 885) / 30));
  const img2Opacity = interpolate(frame, [970, 1000], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const img2Sweep = Math.max(0, Math.min(1, (frame - 1005) / 30));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill className="flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}>
          <SectionTitle title="Đặc điểm tôn giáo" subtitle="ở Việt Nam" sectionNumber="PHẦN 2.2" opacity={titleOpacity} translateY={titleTranslateY} accentWidth={titleAccentWidth} />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div className="flex flex-col overflow-hidden" style={{ width: 1440, height: 1080, padding: "60px 60px 40px 80px" }}>
            <div className="mb-6" style={{ opacity: headerOpacity }}>
              <div className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2" style={{ textShadow: TEXT_SHADOW }}>PHẦN 2.2</div>
              <h2 className="text-[52px] text-ds-white font-sans font-bold m-0 leading-tight" style={{ textShadow: TEXT_SHADOW }}>Đặc điểm tôn giáo ở Việt Nam</h2>
              <div className="w-[100px] h-1 bg-ds-gold mt-4" />
            </div>

            {/* Statistics row */}
            <div className="flex gap-8 mb-6" style={{ opacity: statsOpacity }}>
              {STATS.map((s, i) => (
                <div key={i} className="flex-1 text-center rounded-[10px]" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", border: `2px solid ${COLORS.gold}`, padding: "16px 20px" }}>
                  <CountUpNumber value={s.value} suffix={s.suffix} label={s.label} size={44} />
                </div>
              ))}
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

            <div className="mt-auto"><CitationFooter text="GT CNXHKH (2021), Ch.6, II.2a-b, tr.222-226" opacity={citationOpacity} /></div>
          </div>
          <div style={{ opacity: pipOpacity }}><MemberPiP name="Ngô Văn Phú" sectionLabel="Phần 2.2 - Tôn giáo Việt Nam" ringAngle={ringAngle} /></div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
