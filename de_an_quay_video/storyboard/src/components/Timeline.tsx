import type { SectionData } from "../data/sections";
import { TIMELINE_GROUPS } from "../data/sections";

export const Timeline: React.FC<{ sections: SectionData[] }> = ({ sections }) => (
  <div className="panel" style={{ marginBottom: 40 }}>
    <h2 style={{ fontSize: 16, marginBottom: 12 }}>Timeline tong the (13:30)</h2>
    <div style={{
      display: "flex", height: 40, borderRadius: 6,
      overflow: "hidden", border: "1px solid #D1D5DB",
    }}>
      {sections.map((s) => (
        <div
          key={s.id}
          style={{
            flex: s.duration,
            background: s.bgColor,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 8, fontWeight: 500, borderRight: "1px solid rgba(0,0,0,0.1)",
            overflow: "hidden", whiteSpace: "nowrap", padding: "0 2px",
          }}
        >
          {s.id === "title" ? "Mo dau" : s.id === "conclusion" ? "Ket" : s.id === "intro" ? "Intro" : s.id}
        </div>
      ))}
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10, fontSize: 11 }}>
      {TIMELINE_GROUPS.map((g) => (
        <span key={g.label} style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{
            width: 10, height: 10, borderRadius: 3, background: g.color, display: "inline-block",
          }} />
          {g.label}
        </span>
      ))}
    </div>
  </div>
);
