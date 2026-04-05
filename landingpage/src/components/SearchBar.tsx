import React, { useState } from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { SearchIcon } from "./icons";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Tìm kiếm...", onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form onSubmit={handleSubmit} style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <SearchIcon size={18} color={COLORS.inkMuted} />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        style={{
          fontFamily: FONT.body,
          fontSize: TEXT.small.size,
          color: COLORS.ink,
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${COLORS.border}`,
          padding: "6px 8px",
          outline: "none",
          width: 180,
          transition: "border-color 200ms",
        }}
        onFocus={(e) => (e.currentTarget.style.borderBottomColor = COLORS.gold)}
        onBlur={(e) => (e.currentTarget.style.borderBottomColor = COLORS.border)}
      />
    </form>
  );
};
