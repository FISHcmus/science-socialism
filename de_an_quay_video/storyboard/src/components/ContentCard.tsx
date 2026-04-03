interface Props {
  label: string;
  detail: string;
  borderColor?: string;
}

export const ContentCard: React.FC<Props> = ({ label, detail, borderColor = "#B91C1C" }) => (
  <div style={{
    background: "rgba(255,255,255,0.7)",
    border: "1px solid rgba(0,0,0,0.08)",
    borderLeft: `3px solid ${borderColor}`,
    padding: "4px 8px",
    borderRadius: 4,
    fontSize: 8, lineHeight: 1.3,
  }}>
    <div style={{ fontWeight: 600, fontSize: 8, marginBottom: 1 }}>{label}</div>
    <div style={{ fontSize: 7, color: "#374151" }}>{detail}</div>
  </div>
);
