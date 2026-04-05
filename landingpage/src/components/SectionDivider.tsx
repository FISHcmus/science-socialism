import React from "react";
import { DiamondIcon, StarIcon } from "./icons";
import { COLORS } from "../tokens";

type SectionDividerProps = {
  ornament?: "diamond" | "star";
};

export const SectionDivider: React.FC<SectionDividerProps> = ({ ornament = "diamond" }) => {
  const Icon = ornament === "star" ? StarIcon : DiamondIcon;
  const iconColor = ornament === "star" ? COLORS.gold : COLORS.red;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "48px 0" }}>
      <div style={{ flex: 1, height: 1, background: COLORS.border }} />
      <Icon size={12} color={iconColor} />
      <div style={{ flex: 1, height: 1, background: COLORS.border }} />
    </div>
  );
};
