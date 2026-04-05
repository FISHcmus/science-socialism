import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { ArrowIcon } from "./icons";

type CTAItem = {
  title: string;
  description: string;
  href: string;
  label: string;
};

type CallToActionProps = {
  items?: CTAItem[];
};

const defaultItems: CTAItem[] = [
  {
    title: "Truy cập Moodle",
    description: "courses.hcmus.edu.vn",
    href: "https://courses.hcmus.edu.vn/course/view.php?id=16128",
    label: "Vào Moodle",
  },
  {
    title: "Liên hệ nhóm",
    description: "Nhóm trưởng: Nhân",
    href: "mailto:nhanclassroom@gmail.com",
    label: "Liên hệ",
  },
];

export const CallToAction: React.FC<CallToActionProps> = ({ items = defaultItems }) => (
  <section style={{
    padding: "64px 80px",
    background: COLORS.surface,
  }}>
    <div style={{
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      gap: 32,
    }}>
      {items.map((item, i) => (
        <div key={i} style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          <div style={{
            fontFamily: FONT.heading,
            fontWeight: 700,
            fontSize: TEXT.h3.size,
            color: COLORS.ink,
          }}>
            {item.title}
          </div>
          <div style={{
            fontFamily: FONT.body,
            fontSize: TEXT.small.size,
            color: COLORS.inkSecondary,
          }}>
            {item.description}
          </div>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: FONT.heading,
              fontWeight: 600,
              fontSize: TEXT.small.size,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: COLORS.bg,
              background: COLORS.red,
              padding: "10px 24px",
              textDecoration: "none",
              borderRadius: 2,
              width: "fit-content",
              transition: "background 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.redDeep)}
            onMouseLeave={(e) => (e.currentTarget.style.background = COLORS.red)}
          >
            {item.label}
            <ArrowIcon size={16} color={COLORS.bg} />
          </a>
        </div>
      ))}
    </div>
  </section>
);
