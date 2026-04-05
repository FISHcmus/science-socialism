import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";

type MemberCardProps = {
  name: string;
  role: string;
  task: string;
  photoUrl?: string;
};

export const MemberCard: React.FC<MemberCardProps> = ({ name, role, task, photoUrl }) => (
  <div
    className="chevron-corner"
    style={{
      background: COLORS.surfaceWhite,
      border: `1px solid ${COLORS.border}`,
      borderRadius: 2,
      padding: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      textAlign: "center",
      transition: "border-color 200ms ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.red)}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
  >
    <div style={{
      width: 80,
      height: 80,
      borderRadius: 2,
      border: `2px solid ${COLORS.gold}`,
      overflow: "hidden",
      background: COLORS.surface,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {photoUrl ? (
        <img src={photoUrl} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span style={{ fontFamily: FONT.heading, fontWeight: 700, fontSize: TEXT.h2.size, color: COLORS.gold }}>
          {name.charAt(0)}
        </span>
      )}
    </div>
    <div>
      <div style={{
        fontFamily: FONT.heading,
        fontWeight: 700,
        fontSize: TEXT.body.size,
        color: COLORS.ink,
        marginBottom: 4,
      }}>
        {name}
      </div>
      <div style={{
        fontFamily: FONT.heading,
        fontWeight: 600,
        fontSize: TEXT.label.size,
        textTransform: "uppercase",
        letterSpacing: "2px",
        color: COLORS.gold,
        marginBottom: 4,
      }}>
        {role}
      </div>
      <div style={{
        fontFamily: FONT.body,
        fontSize: TEXT.small.size,
        color: COLORS.inkSecondary,
      }}>
        {task}
      </div>
    </div>
  </div>
);
