interface StatusItem {
  text: string;
  ok: boolean;
}

export const MediaStatus: React.FC<{ items: StatusItem[] }> = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <div style={{ marginTop: 8, fontSize: 11, color: "#6B7280" }}>
      Media:{" "}
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && " | "}
          <span style={{ color: item.ok ? "#16A34A" : "#DC2626" }}>{item.text}</span>
        </span>
      ))}
    </div>
  );
};
