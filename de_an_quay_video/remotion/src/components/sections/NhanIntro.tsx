import { memo, type FC } from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, spring, useVideoConfig, Video, staticFile } from "remotion";
import { COLORS, TEXT_SHADOW } from "../../constants";
import { SectionTitle, TypewriterText } from "../ds";
import { VietnamMap } from "../shared/VietnamMap";

export const NhanIntro: FC = memo(() => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Beat 1: SectionTitle animation (frames 0-90) ---
  const beat1Spring = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const beat1Opacity = interpolate(beat1Spring, [0, 1], [0, 1]);
  const beat1TranslateY = interpolate(beat1Spring, [0, 1], [40, 0]);
  const beat1AccentWidth = interpolate(beat1Spring, [0, 1], [0, 200]);
  const beat1Breathe = spring({ frame, fps, config: { damping: 30, stiffness: 40 } });
  const beat1Scale = interpolate(beat1Breathe, [0, 1], [1.03, 1]);

  // --- Beat 2: TypewriterText + VietnamMap (frames 90-150) ---
  const beat2Local = frame - 90;
  const beat2Opacity = beat2Local >= 0
    ? interpolate(beat2Local, [0, 20], [0, 1], { extrapolateRight: "clamp" })
    : 0;
  const beat2FadeOut = interpolate(frame, [330, 360], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const beat2Visible = frame >= 90 && frame < 360;
  const beat2CombinedOpacity = beat2Visible ? Math.min(beat2Opacity, beat2FadeOut) : 0;

  const typewriterText =
    "Đại đoàn kết toàn dân tộc là truyền thống quý báu của dân tộc Việt Nam, được Đảng và Nhà nước ta xây dựng và phát huy qua các thời kỳ cách mạng.";
  const typewriterSpeed = 1;
  const typewriterVisibleChars = beat2Local >= 0
    ? Math.min(Math.floor(beat2Local / typewriterSpeed), typewriterText.length)
    : 0;
  const typewriterCursorVisible = beat2Local >= 0
    ? Math.floor(beat2Local / 15) % 2 === 0
    : false;

  // --- Beat 3: Content cards + Video (frames 360-960) ---
  const videoOpacity = frame >= 360
    ? interpolate(frame - 360, [0, 20], [0, 1], { extrapolateRight: "clamp" })
    : 0;

  // Per-element entrance synced to intro speech transcript
  const makeEntrance = (appearAt: number) => {
    const s = spring({
      frame: Math.max(0, frame - appearAt),
      fps,
      config: { damping: 14, stiffness: 70 },
    });
    return {
      opacity: interpolate(s, [0, 1], [0, 1]),
      translateY: interpolate(s, [0, 1], [30, 0]),
    };
  };

  const headerAnim = makeEntrance(456);
  const bullet1Anim = makeEntrance(681);
  const bullet2Anim = makeEntrance(795);
  const bullet3Anim = makeEntrance(849);
  const membersAnim = makeEntrance(900);

  return (
    <AbsoluteFill>
      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <AbsoluteFill
          className="flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(247,243,238,0.97) 0%, rgba(237,232,224,0.95) 100%)" }}
        >
          <SectionTitle
            title="Giới thiệu chủ đề"
            subtitle="Xây dựng khối đại đoàn kết toàn dân tộc"
            sectionNumber="NHÓM 7"
            opacity={beat1Opacity}
            translateY={beat1TranslateY}
            accentWidth={beat1AccentWidth}
            scale={beat1Scale}
          />
        </AbsoluteFill>
      )}

      {/* Beat 2: TypewriterText + VietnamMap (frames 90-150) */}
      {beat2Visible && (
        <AbsoluteFill
          className="items-center justify-between"
          style={{
            opacity: beat2CombinedOpacity,
            flexDirection: "row",
            padding: "60px 80px",
          }}
        >
          {/* Left: text content */}
          <div className="flex-1 pr-[60px] flex flex-col justify-center">
            <div
              className="text-2xl text-ds-gold font-sans tracking-[3px] mb-6 uppercase"
              style={{ textShadow: TEXT_SHADOW }}
            >
              Chủ đề 6 - Nhóm 7
            </div>
            <h2
              className="text-5xl text-ds-white font-sans font-bold leading-normal m-0 mb-8"
              style={{ textShadow: TEXT_SHADOW }}
            >
              Xây dựng khối đại đoàn kết toàn dân tộc
            </h2>
            <TypewriterText
              text={typewriterText}
              visibleChars={typewriterVisibleChars}
              fontSize={24}
              color={COLORS.body}
              showCursor={true}
              cursorVisible={typewriterCursorVisible}
            />
          </div>

          {/* Right: Vietnam map */}
          <div className="shrink-0 flex items-center justify-center">
            <VietnamMap
              highlightProvinces={[]}
              highlightColor={COLORS.vnRed}
              startFrame={90}
              width={380}
              height={680}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: Content cards + Video (frames 360-750) */}
      {frame >= 360 && (
        <AbsoluteFill style={{ flexDirection: "row" }}>
          {/* Left: content cards — progressive entrance synced to speech */}
          <div className="flex flex-col justify-center" style={{ width: 960, height: 1080, padding: "60px 60px 60px 80px" }}>
            <div style={{ opacity: headerAnim.opacity, transform: `translateY(${headerAnim.translateY}px)` }}>
              <div
                className="text-[32px] text-ds-gold font-sans tracking-[4px] mb-3 uppercase"
                style={{ textShadow: TEXT_SHADOW }}
              >
                Chủ đề 6 - Nhóm 7
              </div>
              <h2
                className="text-[44px] text-ds-white font-sans font-bold leading-tight m-0 mb-3"
                style={{ textShadow: TEXT_SHADOW }}
              >
                Trách nhiệm của sinh viên trong việc góp phần xây dựng khối đại đoàn kết toàn dân tộc
              </h2>
              <div className="text-[26px] font-sans mb-6" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>
                GVHD: TS. Phạm Thị Đoạt
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <div style={{ opacity: bullet1Anim.opacity, transform: `translateY(${bullet1Anim.translateY}px)` }}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-ds-gold shrink-0" />
                  <div className="text-[30px] font-sans" style={{ color: COLORS.white, textShadow: TEXT_SHADOW }}>Phần 1: Cơ sở lý luận (35%)</div>
                </div>
              </div>
              <div style={{ opacity: bullet2Anim.opacity, transform: `translateY(${bullet2Anim.translateY}px)` }}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-ds-gold shrink-0" />
                  <div className="text-[30px] font-sans" style={{ color: COLORS.white, textShadow: TEXT_SHADOW }}>Phần 2: Thực tiễn Việt Nam (14%)</div>
                </div>
              </div>
              <div style={{ opacity: bullet3Anim.opacity, transform: `translateY(${bullet3Anim.translateY}px)` }}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-ds-gold shrink-0" />
                  <div className="text-[30px] font-sans" style={{ color: COLORS.white, textShadow: TEXT_SHADOW }}>Phần 3: Trách nhiệm sinh viên (50%)</div>
                </div>
              </div>
            </div>

            <div style={{ opacity: membersAnim.opacity, transform: `translateY(${membersAnim.translateY}px)` }}>
              <div className="text-[24px] font-sans leading-relaxed" style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}>
                <span style={{ color: COLORS.gold, fontWeight: "bold" }}>Nguyễn Hữu Thiện Nhân</span> · Đào Thục Nhi · Nguyễn Hồng Châu Nhi · Trần Thị Phụng Nhi · Bùi Huỳnh Nhi · Hoàng Thị Tố Như · Nguyễn Đình Ý Như · Nguyễn Phạm Quỳnh Như · Ngô Văn Phú
              </div>
            </div>
          </div>

          {/* Right: horizontal video (contained) + name label */}
          <div className="flex flex-col items-center justify-center" style={{ width: 960, height: 1080, opacity: videoOpacity, background: "#000" }}>
            <Sequence from={360} layout="none" durationInFrames={600}>
              <Video src={staticFile('media/T3-4/cnxhkh_intro_nhan.mp4')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Sequence>
            <div style={{ position: "absolute", bottom: 60, background: "rgba(0,0,0,0.55)", borderRadius: 8, padding: "8px 20px" }}>
              <div className="text-[28px] font-sans font-bold" style={{ color: "#fff" }}>Nhân</div>
              <div className="text-[20px] font-sans" style={{ color: COLORS.gold }}>Nhóm trưởng - Giới thiệu chủ đề</div>
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
});
