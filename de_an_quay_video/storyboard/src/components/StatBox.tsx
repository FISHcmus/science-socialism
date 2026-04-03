interface Props {
  value: string;
  label: string;
}

export const StatBox: React.FC<Props> = ({ value, label }) => (
  <div style={{
    flex: 1, background: "white", border: "1px solid #D97706",
    borderRadius: 4, padding: 3, textAlign: "center",
  }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: "#D97706" }}>{value}</div>
    <div style={{ fontSize: 6, color: "#6B7280" }}>{label}</div>
  </div>
);
