import { memo, type FC } from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  spring,
  useVideoConfig,
} from "remotion";
import { COLORS, TEXT_SHADOW } from "../constants";

export const TitleCard: FC = memo(() => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Per-element entrance synced to staggered timing
  const makeEntrance = (appearAt: number, config = { damping: 16, stiffness: 80 }) => {
    const s = spring({ frame: Math.max(0, frame - appearAt), fps, config });
    return {
      opacity: interpolate(s, [0, 1], [0, 1]),
      translateY: interpolate(s, [0, 1], [40, 0]),
    };
  };

  // Gold accent line sweep
  const makeAccent = (appearAt: number, maxWidth: number) => {
    const s = spring({ frame: Math.max(0, frame - appearAt), fps, config: { damping: 12, stiffness: 100 } });
    return {
      width: interpolate(s, [0, 1], [0, maxWidth]),
      opacity: interpolate(s, [0, 1], [0, 1]),
    };
  };

  // Cinematic breathing: slight scale-down settle
  const breathe = spring({ frame, fps, config: { damping: 30, stiffness: 40 } });
  const breatheScale = interpolate(breathe, [0, 1], [1.03, 1]);

  // Staggered elements
  const topAccent = makeAccent(0, 120);
  const labelAnim = makeEntrance(5);
  const line1Anim = makeEntrance(15);
  const line2Anim = makeEntrance(25);
  const line3Anim = makeEntrance(35);
  const bottomAccent = makeAccent(45, 80);
  const membersAnim = makeEntrance(55);

  return (
    <AbsoluteFill
      className="justify-center items-center"
      style={{
        background: "linear-gradient(135deg, rgba(247,243,238,0.6) 0%, rgba(237,232,224,0.4) 50%, rgba(247,243,238,0.6) 100%)",
      }}
    >
      {/* Subtle radial vignette for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.06) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="text-center px-20"
        style={{ transform: `scale(${breatheScale})` }}
      >
        {/* Top gold accent line */}
        <div className="flex justify-center mb-6">
          <div
            className="h-[2px] bg-ds-gold"
            style={{ width: topAccent.width, opacity: topAccent.opacity }}
          />
        </div>

        {/* Section label */}
        <div
          className="text-[28px] text-ds-gold tracking-[6px] mb-6 font-sans"
          style={{
            textShadow: TEXT_SHADOW,
            opacity: labelAnim.opacity,
            transform: `translateY(${labelAnim.translateY}px)`,
          }}
        >
          CHỦ NGHĨA XÃ HỘI KHOA HỌC - NHÓM 7
        </div>

        {/* Title lines - staggered */}
        <h1 className="text-[52px] text-ds-white font-sans font-bold leading-snug m-0">
          <div
            style={{
              textShadow: TEXT_SHADOW,
              opacity: line1Anim.opacity,
              transform: `translateY(${line1Anim.translateY}px)`,
            }}
          >
            TRÁCH NHIỆM CỦA SINH VIÊN TRONG VIỆC
          </div>
          <div
            style={{
              textShadow: TEXT_SHADOW,
              opacity: line2Anim.opacity,
              transform: `translateY(${line2Anim.translateY}px)`,
            }}
          >
            GÓP PHẦN XÂY DỰNG KHỐI ĐẠI ĐOÀN KẾT
          </div>
          <div
            style={{
              textShadow: TEXT_SHADOW,
              opacity: line3Anim.opacity,
              transform: `translateY(${line3Anim.translateY}px)`,
            }}
          >
            TOÀN DÂN TỘC Ở VIỆT NAM
          </div>
        </h1>

        {/* Bottom gold accent line */}
        <div className="flex justify-center mt-6">
          <div
            className="h-[2px] bg-ds-gold"
            style={{ width: bottomAccent.width, opacity: bottomAccent.opacity }}
          />
        </div>
      </div>

      {/* Member names */}
      <div
        className="absolute bottom-20 text-center text-ds-body text-[22px] font-sans"
        style={{
          opacity: membersAnim.opacity,
          transform: `translateY(${membersAnim.translateY}px)`,
          textShadow: TEXT_SHADOW,
        }}
      >
        Nhân - Huỳnh Nhi - Thục Nhi - Châu Nhi - Phụng Nhi - Tố Như - Ý Như
        - Quỳnh Như - Phú
      </div>
    </AbsoluteFill>
  );
});
