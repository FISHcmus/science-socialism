import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";

type AssessmentItem = { label: string; value: string };

type AssessmentBreakdownProps = {
  continuous?: AssessmentItem[];
  final?: { label: string; detail: string };
};

const defaultContinuous: AssessmentItem[] = [
  { label: "Giua ky", value: "20%" },
  { label: "Thao luan", value: "10%" },
  { label: "Thuyet trinh", value: "10%" },
  { label: "Diem danh", value: "10%" },
];

export const AssessmentBreakdown: React.FC<AssessmentBreakdownProps> = ({
  continuous = defaultContinuous,
  final: finalExam = { label: "Tu luan", detail: "60 phut" },
}) => (
  <div className="constructivist-frame" style={{ background: COLORS.surfaceWhite }}>
    <span className="section-label" style={{ fontSize: TEXT.label.size }}>Co cau danh gia</span>
    <div className="accent-line" style={{ margin: "8px 0 20px", width: "40%" }} />

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
      {/* Left: Continuous */}
      <div style={{ borderRight: `1px solid ${COLORS.border}`, paddingRight: 24 }}>
        <div style={{
          fontFamily: FONT.heading,
          fontWeight: 700,
          fontSize: TEXT.h2.size,
          color: COLORS.red,
          marginBottom: 4,
        }}>50%</div>
        <div style={{
          fontFamily: FONT.heading,
          fontWeight: 600,
          fontSize: TEXT.small.size,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: COLORS.inkMuted,
          marginBottom: 16,
        }}>Qua trinh</div>
        {continuous.map((item, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 0",
            borderBottom: i < continuous.length - 1 ? `1px solid ${COLORS.border}` : "none",
          }}>
            <span style={{ fontFamily: FONT.body, fontSize: TEXT.small.size, color: COLORS.inkSecondary }}>{item.label}</span>
            <span style={{ fontFamily: FONT.heading, fontWeight: 700, fontSize: TEXT.small.size, color: COLORS.ink }}>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Right: Final */}
      <div style={{ paddingLeft: 24 }}>
        <div style={{
          fontFamily: FONT.heading,
          fontWeight: 700,
          fontSize: TEXT.h2.size,
          color: COLORS.red,
          marginBottom: 4,
        }}>50%</div>
        <div style={{
          fontFamily: FONT.heading,
          fontWeight: 600,
          fontSize: TEXT.small.size,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: COLORS.inkMuted,
          marginBottom: 16,
        }}>Cuoi ky</div>
        <div style={{ fontFamily: FONT.body, fontSize: TEXT.body.size, color: COLORS.ink, marginBottom: 4 }}>{finalExam.label}</div>
        <div style={{ fontFamily: FONT.body, fontSize: TEXT.small.size, color: COLORS.inkSecondary }}>{finalExam.detail}</div>
      </div>
    </div>
  </div>
);
