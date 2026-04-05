import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { DiamondIcon } from "./icons";
import { SectionHeader } from "./SectionHeader";

type Milestone = { week: string; label: string; highlight?: boolean };

type CourseTimelineProps = {
  milestones?: Milestone[];
};

const defaultMilestones: Milestone[] = [
  { week: "Tuần 1", label: "Nhập môn" },
  { week: "Tuần 4", label: "Giữa kỳ", highlight: true },
  { week: "Tuần 8", label: "Nộp video", highlight: true },
  { week: "Tuần 15", label: "Cuối kỳ", highlight: true },
];

export const CourseTimeline: React.FC<CourseTimelineProps> = ({ milestones = defaultMilestones }) => (
  <div style={{ padding: "0 80px", maxWidth: 1200, margin: "0 auto" }}>
    <SectionHeader label="Phần 03" title="Lịch trình" />

    <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
      {/* Horizontal line */}
      <div style={{
        position: "absolute",
        top: 6,
        left: 0,
        right: 0,
        height: 2,
        background: COLORS.border,
      }} />

      {milestones.map((m, i) => (
        <div key={i} style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, zIndex: 1 }}>
          <DiamondIcon size={14} color={m.highlight ? COLORS.red : COLORS.border} />
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontFamily: FONT.heading,
              fontWeight: 700,
              fontSize: TEXT.small.size,
              color: m.highlight ? COLORS.red : COLORS.inkMuted,
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}>
              {m.week}
            </div>
            <div style={{
              fontFamily: FONT.body,
              fontSize: TEXT.small.size,
              color: COLORS.inkSecondary,
              marginTop: 4,
            }}>
              {m.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
