import type { SectionData } from "../data/sections";
import { TitleFrame } from "./TitleFrame";
import { ContentFrame } from "./ContentFrame";
import { ScriptPanel } from "./ScriptPanel";
import { MediaStatus } from "./MediaStatus";

export const SectionPanel: React.FC<{ section: SectionData }> = ({ section: s }) => {
  const isBookend = s.id === "title" || s.id === "conclusion";
  const hasBeat2 = !isBookend && s.cards.length > 0;

  return (
    <div className="panel">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
        <span style={{
          fontSize: 13, fontWeight: 600, padding: "4px 10px",
          borderRadius: 6, color: "white", background: s.color,
        }}>
          {s.id === "title" ? "TITLE" : s.id === "conclusion" ? "KET" : s.id === "intro" ? "INTRO" : s.id}
        </span>
        <span style={{ fontSize: 20, fontWeight: 600 }}>{s.title}</span>
      </div>

      {/* Meta */}
      <div style={{
        fontSize: 13, color: "#6B7280", marginBottom: 20,
        display: "flex", gap: 20, flexWrap: "wrap",
      }}>
        <span>{s.durationSec} giay ({s.duration} frames)</span>
        {s.member && <span>{s.memberFull || s.member}</span>}
        {isBookend && <span>Full screen</span>}

      </div>

      {/* Frames */}
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {/* Beat 1: Title frame */}
        <div style={{ border: "2px solid #D1D5DB", borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
          <div style={{
            background: "#374151", color: "white", fontSize: 11, fontWeight: 500,
            padding: "4px 10px", display: "flex", justifyContent: "space-between",
          }}>
            <span>{isBookend ? (s.id === "title" ? "TITLE CARD" : "CONCLUSION") : "BEAT 1 - Title"}</span>
            <span>{s.timeStart} - {hasBeat2 ? addSeconds(s.timeStart, 3) : s.timeEnd}</span>
          </div>
          <TitleFrame section={s} />
        </div>

        {/* Beat 2: Content + PiP */}
        {hasBeat2 && (
          <div style={{ border: "2px solid #D1D5DB", borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
            <div style={{
              background: "#374151", color: "white", fontSize: 11, fontWeight: 500,
              padding: "4px 10px", display: "flex", justifyContent: "space-between",
            }}>
              <span>BEAT 2 - Content + PiP</span>
              <span>{addSeconds(s.timeStart, 3)} - {s.timeEnd}</span>
            </div>
            <ContentFrame section={s} />
          </div>
        )}
      </div>

      {/* Script panel */}
      <ScriptPanel items={s.script} citation={s.scriptCitation} />

      {/* Media status */}
      <MediaStatus items={s.mediaStatus} />
    </div>
  );
};

function addSeconds(time: string, sec: number): string {
  const [min, s] = time.split(":").map(Number);
  const total = min * 60 + s + sec;
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}
