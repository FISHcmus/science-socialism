import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, ArtDecoImage, MemberPiP, CitationFooter } from "../ds";

const PRINCIPLES = [
  {
    title: "Các dân tộc hoàn toàn bình đẳng",
    detail: "Mọi dân tộc đều có quyền và nghĩa vụ ngang nhau trên mọi lĩnh vực, không phân biệt lớn nhỏ, trình độ phát triển.",
    image: "Đồng bào các dân tộc thiểu số Việt Nam",
    appearAt: 90,
  },
  {
    title: "Các dân tộc có quyền tự quyết",
    detail: "Quyền tự quyết định chế độ chính trị, con đường phát triển của mình. HCM: con đường cách mạng vô sản.",
    image: "Trích dẫn Hồ Chí Minh về con đường cách mạng",
    appearAt: 690,
  },
  {
    title: "Liên hiệp công nhân tất cả các dân tộc",
    detail: "Gắn kết chặt chẽ giải phóng dân tộc với giải phóng giai cấp, phản ánh bản chất quốc tế của phong trào công nhân.",
    image: "Đoàn kết công nhân - nông dân các dân tộc",
    appearAt: 1290,
  },
];

export const Section11ThucNhi: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleAccentWidth = interpolate(titleSpring, [0, 1], [0, 80]);

  const beat2LocalFrame = Math.max(0, frame - 90);
  const ringAngle = (beat2LocalFrame / fps) * 80;

  const headerOpacity = interpolate(frame, [90, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pipOpacity = interpolate(frame, [90, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const citationOpacity = interpolate(frame, [1800, 1860], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const img1Opacity = interpolate(frame, [1500, 1530], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const img1Sweep = Math.max(0, Math.min(1, (frame - 1535) / 30));

  const img2Opacity = interpolate(frame, [1620, 1650], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const img2Sweep = Math.max(0, Math.min(1, (frame - 1655) / 30));

  return (
    <AbsoluteFill>
      {frame < 90 && (
        <AbsoluteFill
          className="flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}
        >
          <SectionTitle
            title="Cương lĩnh dân tộc"
            subtitle="của chủ nghĩa Mác - Lênin"
            sectionNumber="PHẦN 1.1"
            opacity={titleOpacity}
            translateY={titleTranslateY}
            accentWidth={titleAccentWidth}
          />
        </AbsoluteFill>
      )}

      {frame >= 90 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          <div
            className="flex flex-col overflow-hidden"
            style={{ width: 1440, height: 1080, padding: "60px 60px 40px 80px" }}
          >
            <div className="mb-6" style={{ opacity: headerOpacity }}>
              <div
                className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-2"
                style={{ textShadow: TEXT_SHADOW }}
              >
                PHẦN 1.1
              </div>
              <h2
                className="text-[52px] text-ds-white font-sans font-bold m-0 leading-tight"
                style={{ textShadow: TEXT_SHADOW }}
              >
                Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin
              </h2>
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
                  <div
                    key={i}
                    className="rounded-xl"
                    style={{
                      transform: `translateX(${translateX}px)`,
                      opacity: cardOpacity,
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: `3px solid ${COLORS.gold}`,
                      borderLeft: `6px solid ${COLORS.gold}`,
                      padding: "20px 32px",
                    }}
                  >
                    <div
                      className="text-[38px] font-bold text-ds-white font-sans mb-2 leading-tight"
                      style={{ textShadow: TEXT_SHADOW }}
                    >
                      {p.title}
                    </div>
                    <div
                      className="text-[28px] text-ds-body font-sans leading-normal"
                      style={{ textShadow: TEXT_SHADOW }}
                    >
                      {p.detail}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-10 mt-6">
              <div style={{ opacity: img1Opacity }}>
                <ArtDecoImage description="Ảnh minh họa 1" width={340} height={340} ringAngle={ringAngle} sweepProgress={img1Sweep} />
              </div>
              <div style={{ opacity: img2Opacity }}>
                <ArtDecoImage description="Ảnh minh họa 2" width={340} height={340} ringAngle={ringAngle} sweepProgress={img2Sweep} />
              </div>
            </div>

            <div className="mt-auto">
              <CitationFooter text="Giáo trình CNXHKH (2021), Ch.6, I.2b, tr.202-205" opacity={citationOpacity} />
            </div>
          </div>

          <div style={{ opacity: pipOpacity }}>
            <MemberPiP name="Đào Thục Nhi" sectionLabel="Phần 1.1 - Cương lĩnh dân tộc" ringAngle={ringAngle} />
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
