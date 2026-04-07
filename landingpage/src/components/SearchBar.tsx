"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "./icons";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative">
      <SearchIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
      <Input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch?.(e.target.value);
        }}
        placeholder={placeholder}
        className="pl-10 border-0 border-b-3 border-black rounded-none bg-transparent focus:border-primary font-heading font-bold uppercase tracking-wider"
      />
    </div>
  );
};
