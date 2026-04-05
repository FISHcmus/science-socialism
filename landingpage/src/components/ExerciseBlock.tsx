import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { SectionHeader } from "./SectionHeader";

type Tier = { label: string; percentage: string; color: string };

type ExerciseBlockProps = {
  quote?: string;
  tiers?: Tier[];
};

const defaultQuote = "Dựa trên cơ sở lý luận trong môn Chủ nghĩa xã hội khoa học, các bạn hãy thể hiện trách nhiệm của mình trong việc góp phần xây dựng khối đại đoàn kết toàn dân tộc ở Việt Nam?";

const defaultTiers: Tier[] = [
  { label: "Lý luận", percentage: "35%", color: COLORS.red },
  { label: "Thực tiễn", percentage: "15%", color: COLORS.gold },
  { label: "Trách nhiệm", percentage: "50%", color: COLORS.redDeep },
];

export const ExerciseBlock: React.FC<ExerciseBlockProps> = ({ quote = defaultQuote, tiers = defaultTiers }) => (
  <div style={{ padding: "0 80px", maxWidth: 1200, margin: "0 auto" }}>
    <SectionHeader label="Phần 04" title="Phân tích đề" />

    <div className="constructivist-frame" style={{ background: COLORS.surfaceWhite }}>
      {/* Quote */}
      <blockquote style={{
        fontFamily: FONT.display,
        fontWeight: 600,
        fontSize: TEXT.h3.size,
        lineHeight: 1.4,
        color: COLORS.ink,
        borderLeft: `4px solid ${COLORS.gold}`,
        padding: "16px 24px",
        margin: "0 0 32px",
        background: COLORS.goldLight,
        fontStyle: "italic",
      }}>
        "{quote}"
      </blockquote>

      {/* Tiers */}
      <div style={{
        fontFamily: FONT.heading,
        fontWeight: 600,
        fontSize: TEXT.small.size,
        textTransform: "uppercase",
        letterSpacing: "2px",
        color: COLORS.inkMuted,
        marginBottom: 16,
      }}>
        3 tầng nội dung
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {tiers.map((tier, i) => (
          <div key={i} style={{
            flex: 1,
            background: COLORS.bg,
            border: `1px solid ${COLORS.border}`,
            borderTop: `3px solid ${tier.color}`,
            borderRadius: 2,
            padding: 20,
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: FONT.heading,
              fontWeight: 700,
              fontSize: TEXT.h2.size,
              color: tier.color,
              marginBottom: 4,
            }}>
              {tier.percentage}
            </div>
            <div style={{
              fontFamily: FONT.heading,
              fontWeight: 600,
              fontSize: TEXT.small.size,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: COLORS.inkSecondary,
            }}>
              {tier.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
