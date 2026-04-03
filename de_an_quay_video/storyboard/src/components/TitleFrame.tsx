import type { SectionData } from "../data/sections";
import { GoldBar } from "./GoldBar";

interface Props {
  section: SectionData;
}

const BgMesh: React.FC = () => (
  <div style={{
    position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none",
    background: "radial-gradient(ellipse at 30% 40%, #D97706 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, #B91C1C 0%, transparent 50%)",
  }} />
);

export const TitleFrame: React.FC<Props> = ({ section: s }) => {
  const isBookend = s.id === "title" || s.id === "conclusion";

  return (
    <div style={{
      width: 480, height: 270, position: "relative", overflow: "hidden",
      background: s.bgColor, borderRadius: "0 0 6px 6px",
    }}>
      <BgMesh />
      <div style={{
        width: "100%", height: "100%",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 8,
      }}>
        {isBookend && s.id === "title" ? (
          <>
            <div style={{ fontSize: 9, letterSpacing: 3, color: "#6B7280" }}>NHOM 7 - BAA00103</div>
            <GoldBar />
            <div style={{ fontSize: 16, fontWeight: 700, textAlign: "center", color: "#B91C1C", lineHeight: 1.3 }}>
              XAY DUNG KHOI<br />DAI DOAN KET TOAN DAN TOC
            </div>
            <GoldBar />
            <div style={{ fontSize: 8, color: "#6B7280" }}>Chu nghia xa hoi khoa hoc</div>
          </>
        ) : isBookend && s.id === "conclusion" ? (
          <>
            <div style={{ fontSize: 9, letterSpacing: 3, color: "#6B7280" }}>NHOM 7</div>
            <GoldBar />
            <div style={{ fontSize: 14, fontWeight: 700, textAlign: "center" }}>
              Cam on thay/co da lang nghe
            </div>
            <GoldBar />
            <div style={{ fontSize: 8, color: "#374151", textAlign: "center", lineHeight: 1.5, maxWidth: "70%", marginTop: 8 }}>
              Nhan | Huynh Nhi | Thuc Nhi | Chau Nhi<br />
              Phung Nhi | To Nhu | Y Nhu | Quynh Nhu | Phu
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: s.color, textTransform: "uppercase" }}>
              {s.sectionLabel}
            </div>
            <GoldBar />
            <div style={{ fontSize: 18, fontWeight: 700, textAlign: "center", maxWidth: "80%", lineHeight: 1.3 }}>
              {s.title}
            </div>
            <div style={{ fontSize: 12, fontWeight: 400, opacity: 0.6, marginTop: 4 }}>
              {s.memberFull || s.member}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { BgMesh };
