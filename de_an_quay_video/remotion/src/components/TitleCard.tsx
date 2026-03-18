import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  spring,
  useVideoConfig,
} from "remotion";
import { COLORS, FONT, TEXT_SHADOW } from "../constants";

export const TitleCard: React.FC = () => {
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
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, rgba(10,10,15,0.4) 0%, rgba(26,26,46,0.4) 50%, rgba(10,10,15,0.4) 100%)",
      }}
    >
      <div
        style={{
          transform: `translateY(${interpolate(titleY, [0, 1], [50, 0])}px)`,
          opacity: titleOpacity,
          textAlign: "center",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: COLORS.gold,
            letterSpacing: 6,
            marginBottom: 24,
            fontFamily: FONT,
            textShadow: TEXT_SHADOW,
          }}
        >
          CHỦ NGHĨA XÃ HỘI KHOA HỌC - NHÓM 6
        </div>
        <h1
          style={{
            fontSize: 52,
            color: COLORS.white,
            fontFamily: FONT,
            fontWeight: "bold",
            lineHeight: 1.3,
            margin: 0,
            textShadow: TEXT_SHADOW,
          }}
        >
          TRÁCH NHIỆM CỦA SINH VIÊN TRONG VIỆC
          <br />
          GÓP PHẦN XÂY DỰNG KHỐI ĐẠI ĐOÀN KẾT
          <br />
          TOÀN DÂN TỘC Ở VIỆT NAM
        </h1>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 80,
          opacity: subtitleOpacity,
          textAlign: "center",
          color: COLORS.body,
          fontSize: 22,
          fontFamily: FONT,
          textShadow: TEXT_SHADOW,
        }}
      >
        Nhân - Huỳnh Nhi - Thục Nhi - Châu Nhi - Phụng Nhi - Tố Như - Ý Như
        - Quỳnh Như - Phú
      </div>
    </AbsoluteFill>
  );
};
