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

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleY = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 80 },
  });

  const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      className="justify-center items-center"
      style={{
        background: "linear-gradient(135deg, rgba(247,243,238,0.6) 0%, rgba(237,232,224,0.4) 50%, rgba(247,243,238,0.6) 100%)",
      }}
    >
      <div
        className="text-center px-20"
        style={{
          transform: `translateY(${interpolate(titleY, [0, 1], [50, 0])}px)`,
          opacity: titleOpacity,
        }}
      >
        <div
          className="text-[28px] text-ds-gold tracking-[6px] mb-6 font-sans"
          style={{ textShadow: TEXT_SHADOW }}
        >
          CHỦ NGHĨA XÃ HỘI KHOA HỌC - NHÓM 7
        </div>
        <h1
          className="text-[52px] text-ds-white font-sans font-bold leading-snug m-0"
          style={{ textShadow: TEXT_SHADOW }}
        >
          TRÁCH NHIỆM CỦA SINH VIÊN TRONG VIỆC
          <br />
          GÓP PHẦN XÂY DỰNG KHỐI ĐẠI ĐOÀN KẾT
          <br />
          TOÀN DÂN TỘC Ở VIỆT NAM
        </h1>
      </div>

      <div
        className="absolute bottom-20 text-center text-ds-body text-[22px] font-sans"
        style={{
          opacity: subtitleOpacity,
          textShadow: TEXT_SHADOW,
        }}
      >
        Nhân - Huỳnh Nhi - Thục Nhi - Châu Nhi - Phụng Nhi - Tố Như - Ý Như
        - Quỳnh Như - Phú
      </div>
    </AbsoluteFill>
  );
});
