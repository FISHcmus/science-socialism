import React from "react";
import { FONT, TEXT, COLORS } from "../tokens";

type SectionHeaderProps = {
  label: string;
  title: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title }) => (
  <div style={{ marginBottom: 32 }}>
    <span className="section-label" style={{ fontSize: TEXT.small.size }}>{label}</span>
    <div className="accent-line" style={{ margin: "8px 0 16px", width: "30%" }} />
    <h2 className="display-text" style={{ fontSize: TEXT.display.size, lineHeight: TEXT.display.lineHeight, margin: 0 }}>
      {title}
    </h2>
  </div>
);
