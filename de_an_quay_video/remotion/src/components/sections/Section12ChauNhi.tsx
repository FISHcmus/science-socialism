import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, MEMBER_COLORS } from "../../constants";
import { SectionTitle } from "../shared/SectionTitle";
import { IconGrid } from "../shared/IconGrid";
import { MemberPlaceholder } from "../shared/MemberPlaceholder";
import { Overlay } from "../shared/Overlay";
import type { IconGridItem } from "../shared/IconGrid";

// Beat 1: 0-90     — SectionTitle "Năm đặc trưng ĐĐKTDT"
// Beat 2: 90-2100  — IconGrid with 5 items
// Beat 3: 2100-2700 — MemberPlaceholder "Châu Nhi" + Overlay

const FEATURES: IconGridItem[] = [
  {
    icon: "🤝",
    label: "Tính toàn dân",
    description: "Tập hợp mọi tầng lớp nhân dân không phân biệt dân tộc, tôn giáo, giai cấp",
  },
  {
    icon: "🎯",
    label: "Tính mục tiêu",
    description: "Hướng đến lợi ích chung của dân tộc, độc lập - tự do - hạnh phúc",
  },
  {
    icon: "🏛️",
    label: "Tính tổ chức",
    description: "Thông qua Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội",
  },
  {
    icon: "⚖️",
    label: "Tính tự nguyện",
    description: "Trên cơ sở tự giác, tự nguyện, bình đẳng giữa các thành viên",
  },
  {
    icon: "🔄",
    label: "Tính lâu dài",
    description: "Xây dựng và củng cố qua nhiều thế hệ, kiên định trước mọi thử thách",
  },
];

export const Section12ChauNhi: React.FC = () => {
  const frame = useCurrentFrame();

  const headerOpacity = interpolate(frame, [90, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <SectionTitle
          title="Năm đặc trưng ĐĐKTDT"
          subtitle="Đặc trưng của đại đoàn kết toàn dân tộc"
          sectionNumber="PHẦN 1.2"
        />
      )}

      {/* Beat 2: IconGrid (frames 90-2100) */}
      {frame >= 90 && frame < 2100 && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "50px 60px",
          }}
        >
          {/* Header */}
          <div
            style={{
              opacity: headerOpacity,
              textAlign: "center",
              marginBottom: 44,
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: 20,
                color: COLORS.gold,
                fontFamily: FONT,
                letterSpacing: 3,
                marginBottom: 10,
              }}
            >
              PHẦN 1.2
            </div>
            <h2
              style={{
                fontSize: 42,
                color: COLORS.white,
                fontFamily: FONT,
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Năm đặc trưng của đại đoàn kết toàn dân tộc
            </h2>
            <div
              style={{
                width: 80,
                height: 3,
                backgroundColor: COLORS.gold,
                margin: "16px auto 0",
              }}
            />
          </div>

          {/* First row: 3 items */}
          <div style={{ width: "100%", marginBottom: 0 }}>
            <IconGrid
              items={FEATURES.slice(0, 3)}
              columns={3}
              startFrame={110}
              stagger={30}
            />
          </div>

          {/* Second row: 2 items centered */}
          <div
            style={{
              width: "66.66%",
              marginTop: 20,
            }}
          >
            <IconGrid
              items={FEATURES.slice(3, 5)}
              columns={2}
              startFrame={200}
              stagger={30}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder "Châu Nhi" + Overlay (frames 2100-2700) */}
      {frame >= 2100 && (
        <>
          <MemberPlaceholder
            name="Châu Nhi"
            color={MEMBER_COLORS["Châu Nhi"] ?? COLORS.navyLight}
            showFrom={2100}
          />
          <Overlay direction="bottom" opacity={0.65} showFrom={2100} />
        </>
      )}
    </AbsoluteFill>
  );
};
