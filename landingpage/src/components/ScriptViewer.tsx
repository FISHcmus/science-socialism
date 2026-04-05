import React, { useState } from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { ChevronIcon } from "./icons";

type ScriptSection = {
  id: string;
  label: string;
  member: string;
  content: string;
};

type ScriptViewerProps = {
  sections?: ScriptSection[];
};

const defaultSections: ScriptSection[] = [
  { id: "intro", label: "Mở đầu", member: "Nhân", content: "Xin chào thầy và các bạn. Hôm nay nhóm 7 chúng em sẽ trình bày về chủ đề 6..." },
  { id: "1.1", label: "Cương lĩnh dân tộc", member: "Thục Nhi", content: "Cương lĩnh dân tộc của chủ nghĩa Mác-Lênin gồm 3 nguyên tắc cơ bản..." },
  { id: "1.2", label: "Năm đặc trưng", member: "Châu Nhi", content: "Dân tộc có 5 đặc trưng cơ bản theo quan điểm Mác-Lênin..." },
  { id: "conclusion", label: "Kết luận", member: "Nhân", content: "Trên đây là phần trình bày của nhóm 7. Cảm ơn thầy và các bạn đã lắng nghe." },
];

const AccordionItem: React.FC<{
  section: ScriptSection;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ section, isOpen, onToggle }) => (
  <div style={{ borderBottom: `1px solid rgba(250,250,247,0.1)` }}>
    <button
      onClick={onToggle}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 0",
        background: "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{
          fontFamily: FONT.heading,
          fontWeight: 600,
          fontSize: TEXT.label.size,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: COLORS.gold,
        }}>
          {section.id}
        </span>
        <span style={{
          fontFamily: FONT.heading,
          fontWeight: 600,
          fontSize: TEXT.small.size,
          color: COLORS.bg,
        }}>
          {section.label}
        </span>
        <span style={{
          fontFamily: FONT.body,
          fontSize: TEXT.label.size,
          color: "rgba(250,250,247,0.4)",
        }}>
          - {section.member}
        </span>
      </div>
      <ChevronIcon size={16} color={COLORS.gold} direction={isOpen ? "down" : "right"} />
    </button>
    {isOpen && (
      <div style={{
        padding: "0 0 20px 0",
        fontFamily: FONT.body,
        fontSize: TEXT.body.size,
        lineHeight: TEXT.body.lineHeight,
        color: "rgba(250,250,247,0.7)",
      }}>
        {section.content}
      </div>
    )}
  </div>
);

export const ScriptViewer: React.FC<ScriptViewerProps> = ({ sections = defaultSections }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div style={{
      maxWidth: 960,
      margin: "48px auto 0",
      padding: 32,
      background: "rgba(255,255,255,0.03)",
      border: `1px solid rgba(250,250,247,0.08)`,
      borderRadius: 2,
    }}>
      <span style={{
        fontFamily: FONT.heading,
        fontWeight: 600,
        fontSize: TEXT.label.size,
        textTransform: "uppercase",
        letterSpacing: "3px",
        color: COLORS.gold,
      }}>
        Script
      </span>
      <div style={{ marginTop: 16 }}>
        {sections.map((s) => (
          <AccordionItem
            key={s.id}
            section={s}
            isOpen={openId === s.id}
            onToggle={() => setOpenId(openId === s.id ? null : s.id)}
          />
        ))}
      </div>
    </div>
  );
};
