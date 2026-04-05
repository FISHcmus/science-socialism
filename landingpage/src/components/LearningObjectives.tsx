import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { StarIcon } from "./icons";

type LearningObjectivesProps = {
  objectives?: string[];
};

const defaultObjectives = [
  "Hieu ban chat khoa hoc va cach mang cua CNXHKH",
  "Nam vung quy luat van dong va phat trien cua xa hoi",
  "Van dung sang tao vao thuc tien Viet Nam",
  "Nhan thuc trach nhiem sinh vien trong xay dung CNXH",
];

export const LearningObjectives: React.FC<LearningObjectivesProps> = ({ objectives = defaultObjectives }) => (
  <div style={{
    background: COLORS.surfaceWhite,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 2,
    padding: 32,
  }}>
    <span className="section-label" style={{ fontSize: TEXT.label.size }}>Muc tieu hoc tap</span>
    <div className="accent-line" style={{ margin: "8px 0 20px", width: "40%" }} />
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
      {objectives.map((obj, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <StarIcon size={16} color={COLORS.gold} />
          <span style={{
            fontFamily: FONT.body,
            fontSize: TEXT.body.size,
            lineHeight: TEXT.body.lineHeight,
            color: COLORS.ink,
          }}>
            {obj}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
