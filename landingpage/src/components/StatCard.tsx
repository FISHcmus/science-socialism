import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";

type StatCardProps = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

export const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => (
  <div
    className="chevron-corner"
    style={{
      background: COLORS.surfaceWhite,
      border: `1px solid ${COLORS.border}`,
      borderRadius: 2,
      padding: "32px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      textAlign: "center",
      transition: "border-color 200ms ease",
      cursor: "default",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.red)}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
  >
    {icon && <div style={{ marginBottom: 4 }}>{icon}</div>}
    <div style={{
      fontFamily: FONT.heading,
      fontWeight: 700,
      fontSize: TEXT.display.size,
      lineHeight: TEXT.display.lineHeight,
      color: COLORS.red,
    }}>
      {value}
    </div>
    <div style={{
      fontFamily: FONT.heading,
      fontWeight: 600,
      fontSize: TEXT.small.size,
      lineHeight: TEXT.small.lineHeight,
      textTransform: "uppercase",
      letterSpacing: "3px",
      color: COLORS.inkMuted,
    }}>
      {label}
    </div>
  </div>
);
