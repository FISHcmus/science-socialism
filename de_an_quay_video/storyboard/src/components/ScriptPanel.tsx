import type { ScriptItem } from "../data/sections";

interface Props {
  items: ScriptItem[];
  citation: string;
}

export const ScriptPanel: React.FC<Props> = ({ items, citation }) => {
  if (items.length === 0) return null;

  return (
    <div style={{
      marginTop: 16, padding: "12px 16px",
      background: "#F9FAFB", border: "1px solid #E5E7EB",
      borderRadius: 8, fontSize: 12, lineHeight: 1.6,
    }}>
      <h4 style={{ fontSize: 12, fontWeight: 600, marginBottom: 6, color: "#374151" }}>
        Noi dung kich ban
      </h4>
      <ul style={{ marginLeft: 16, color: "#4B5563" }}>
        {items.map((item) => (
          <li key={item.label} style={{ marginBottom: 2 }}>
            <b>{item.label}:</b> {item.detail}
          </li>
        ))}
      </ul>
      {citation && (
        <div style={{ fontSize: 11, color: "#92400E", fontStyle: "italic", marginTop: 6 }}>
          {citation}
        </div>
      )}
    </div>
  );
};
