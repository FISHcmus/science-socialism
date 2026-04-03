interface Props {
  name: string;
  sectionLabel: string;
  color: string;
}

export const MemberPiP: React.FC<Props> = ({ name, sectionLabel, color }) => (
  <div style={{
    width: 120, display: "flex", flexDirection: "column",
    alignItems: "center", borderLeft: "1px solid rgba(0,0,0,0.08)",
    background: `${color}0D`,
  }}>
    <div style={{
      width: "100%", flex: 1,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 9, color: "#6B7280", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 4,
        border: "2px solid transparent",
        borderImage: "conic-gradient(#D97706, #F59E0B, #D97706, #F59E0B, #D97706) 1",
        borderRadius: 4,
      }} />
      <span style={{ fontSize: 24, opacity: 0.3 }}>🎥</span>
    </div>
    <div style={{
      padding: "4px 6px", textAlign: "center",
      fontSize: 8, fontWeight: 600, lineHeight: 1.3, width: "100%",
    }}>
      {name}
      <br />
      <span style={{ fontSize: 7, fontWeight: 400, opacity: 0.6 }}>{sectionLabel}</span>
    </div>
  </div>
);
