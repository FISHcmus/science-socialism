import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, MEMBER_COLORS } from "../../constants";
import { SectionTitle } from "../shared/SectionTitle";
import { FlowChart } from "../shared/FlowChart";
import { MemberPlaceholder } from "../shared/MemberPlaceholder";
import { Overlay } from "../shared/Overlay";
import type { FlowNode } from "../shared/FlowChart";

// Beat 1: 0-90     — SectionTitle "Bốn nguyên tắc xây dựng"
// Beat 2: 90-2100  — FlowChart (vertical) with 4 nodes
// Beat 3: 2100-2700 — MemberPlaceholder "Phụng Nhi" + Overlay

const PRINCIPLES: FlowNode[] = [
  {
    icon: "📋",
    label: "Xây dựng trên nền tảng lợi ích chung",
    description: "Lấy lợi ích dân tộc, Tổ quốc làm điểm tương đồng để quy tụ mọi người",
  },
  {
    icon: "🤲",
    label: "Đoàn kết tự nguyện, bình đẳng",
    description: "Tôn trọng sự khác biệt, không phân biệt đối xử; đoàn kết trên cơ sở tự nguyện",
  },
  {
    icon: "🏛️",
    label: "Phát huy vai trò của MTTQVN",
    description: "Mặt trận Tổ quốc Việt Nam là tổ chức liên minh chính trị, nòng cốt của khối đại đoàn kết",
  },
  {
    icon: "🎯",
    label: "Gắn với mục tiêu xây dựng CNXH",
    description: "Đoàn kết toàn dân tộc nhằm thực hiện thắng lợi sự nghiệp xây dựng và bảo vệ Tổ quốc",
  },
];

export const Section13PhungNhi: React.FC = () => {
  const frame = useCurrentFrame();

  const headerOpacity = interpolate(frame, [90, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.navy }}>

      {/* Beat 1: SectionTitle (frames 0-90) */}
      {frame < 90 && (
        <SectionTitle
          title="Bốn nguyên tắc xây dựng"
          subtitle="Nguyên tắc xây dựng khối đại đoàn kết toàn dân tộc"
          sectionNumber="PHẦN 1.3"
        />
      )}

      {/* Beat 2: FlowChart vertical (frames 90-2100) */}
      {frame >= 90 && frame < 2100 && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "50px 60px 40px",
          }}
        >
          {/* Header */}
          <div
            style={{
              opacity: headerOpacity,
              textAlign: "center",
              marginBottom: 32,
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
              PHẦN 1.3
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
              Bốn nguyên tắc xây dựng khối đại đoàn kết
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

          {/* Vertical FlowChart */}
          <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "center" }}>
            <FlowChart
              nodes={PRINCIPLES}
              direction="vertical"
              startFrame={110}
              stagger={40}
              cycle={false}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 3: MemberPlaceholder "Phụng Nhi" + Overlay (frames 2100-2700) */}
      {frame >= 2100 && (
        <>
          <MemberPlaceholder
            name="Phụng Nhi"
            color={MEMBER_COLORS["Phụng Nhi"] ?? COLORS.navyLight}
            showFrom={2100}
          />
          <Overlay direction="bottom" opacity={0.65} showFrom={2100} />
        </>
      )}
    </AbsoluteFill>
  );
};
