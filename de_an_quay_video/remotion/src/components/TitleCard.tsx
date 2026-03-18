import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  spring,
  useVideoConfig,
} from "remotion";

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
        background: "linear-gradient(135deg, rgba(10,22,40,0.4) 0%, rgba(26,54,93,0.4) 50%, rgba(45,55,72,0.4) 100%)",
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
            color: "#63b3ed",
            letterSpacing: 6,
            marginBottom: 24,
            fontFamily: "Times New Roman, serif",
          }}
        >
          CHỦ NGHĨA XÃ HỘI KHOA HỌC - NHÓM 6
        </div>
        <h1
          style={{
            fontSize: 52,
            color: "white",
            fontFamily: "Times New Roman, serif",
            fontWeight: "bold",
            lineHeight: 1.3,
            margin: 0,
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
          color: "#a0aec0",
          fontSize: 22,
          fontFamily: "Times New Roman, serif",
        }}
      >
        Nhân - Huỳnh Nhi - Thục Nhi - Châu Nhi - Phụng Nhi - Tố Như - Ý Như
        - Quỳnh Như - Phú
      </div>
    </AbsoluteFill>
  );
};
