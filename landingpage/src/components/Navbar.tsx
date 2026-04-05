import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { StarIcon } from "./icons";
import { SearchBar } from "./SearchBar";

type NavItem = { label: string; href: string };

type NavbarProps = {
  items?: NavItem[];
  onSearch?: (query: string) => void;
};

const defaultItems: NavItem[] = [
  { label: "Nội dung", href: "#chapters" },
  { label: "Video", href: "#video" },
  { label: "Nhóm", href: "#team" },
  { label: "Tài liệu", href: "#resources" },
];

export const Navbar: React.FC<NavbarProps> = ({ items = defaultItems, onSearch }) => (
  <nav style={{
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: COLORS.ink,
    display: "flex",
    alignItems: "center",
    padding: "0 48px",
    height: 56,
    gap: 32,
  }}>
    <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
      <StarIcon size={18} color={COLORS.gold} />
      <span style={{
        fontFamily: FONT.heading,
        fontWeight: 700,
        fontSize: TEXT.small.size,
        color: COLORS.gold,
        textTransform: "uppercase",
        letterSpacing: "3px",
      }}>
        CNXHKH
      </span>
    </a>
    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 24 }}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          style={{
            fontFamily: FONT.heading,
            fontWeight: 600,
            fontSize: TEXT.label.size,
            color: "rgba(250,250,247,0.7)",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "2px",
            padding: "4px 0",
            borderBottom: "2px solid transparent",
            transition: "color 200ms, border-color 200ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = COLORS.bg;
            e.currentTarget.style.borderBottomColor = COLORS.red;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(250,250,247,0.7)";
            e.currentTarget.style.borderBottomColor = "transparent";
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
    {onSearch && <SearchBar placeholder="Tìm kiếm..." onSearch={onSearch} />}
  </nav>
);
