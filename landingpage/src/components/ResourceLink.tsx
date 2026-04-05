import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { DownloadIcon, BookIcon, ArrowIcon } from "./icons";

type ResourceLinkProps = {
  title: string;
  description: string;
  href: string;
  type?: "pdf" | "pptx" | "md" | "link";
};

const typeLabels: Record<string, string> = {
  pdf: "PDF",
  pptx: "PPTX",
  md: "Markdown",
  link: "Link",
};

export const ResourceLink: React.FC<ResourceLinkProps> = ({ title, description, href, type = "link" }) => {
  const Icon = type === "link" ? ArrowIcon : type === "md" ? BookIcon : DownloadIcon;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
        padding: 20,
        background: COLORS.surfaceWhite,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 2,
        textDecoration: "none",
        transition: "border-color 200ms ease, box-shadow 200ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = COLORS.red;
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = COLORS.border;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{
        width: 40,
        height: 40,
        background: COLORS.redLight,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <Icon size={20} color={COLORS.red} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: FONT.heading,
          fontWeight: 600,
          fontSize: TEXT.body.size,
          color: COLORS.ink,
          marginBottom: 4,
        }}>
          {title}
        </div>
        <div style={{
          fontFamily: FONT.body,
          fontSize: TEXT.small.size,
          color: COLORS.inkSecondary,
          marginBottom: 6,
        }}>
          {description}
        </div>
        <span style={{
          fontFamily: FONT.heading,
          fontWeight: 600,
          fontSize: TEXT.label.size,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: COLORS.gold,
        }}>
          {typeLabels[type]}
        </span>
      </div>
    </a>
  );
};
