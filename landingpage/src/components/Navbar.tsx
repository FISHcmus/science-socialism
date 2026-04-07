"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  items?: NavItem[];
  className?: string;
  onCommandSheet?: () => void;
};

const defaultItems: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Chapters", href: "#chapters" },
  { label: "Video", href: "#video" },
  { label: "Team", href: "#team" },
  { label: "Resources", href: "#resources" },
];

export const Navbar: React.FC<NavbarProps> = ({ items = defaultItems, className, onCommandSheet }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={cn(
      "sticky top-0 z-50 bg-black text-cream",
      "border-b-4 border-primary",
      className
    )}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-14">
        <span className="font-propaganda text-lg tracking-[4px] uppercase">CNXHKH</span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-heading font-bold text-xs uppercase tracking-[3px] text-cream/70 hover:text-[var(--color-ds-red-light)] transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
          {onCommandSheet && (
            <button
              onClick={onCommandSheet}
              className="flex items-center gap-2 text-cream/60 hover:text-[var(--color-ds-red-light)] transition-colors cursor-pointer"
              aria-label="Open command sheet (Ctrl+K)"
            >
              <span className="text-[var(--color-ds-red)] text-base">★</span>
              <span className="font-mono text-[11px] text-cream/70 uppercase border border-cream/30 px-1.5 py-0.5">Ctrl+K</span>
            </button>
          )}
        </div>

        {/* Mobile: star + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          {onCommandSheet && (
            <button
              onClick={onCommandSheet}
              className="text-[var(--color-ds-red)] text-base"
              aria-label="Open command sheet"
            >
              ★
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-cream/70 hover:text-cream transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              {mobileOpen ? (
                <>
                  <path d="M2 2l16 12" stroke="currentColor" strokeWidth="2" />
                  <path d="M18 2L2 14" stroke="currentColor" strokeWidth="2" />
                </>
              ) : (
                <>
                  <path d="M0 1h20" stroke="currentColor" strokeWidth="2" />
                  <path d="M0 8h20" stroke="currentColor" strokeWidth="2" />
                  <path d="M0 15h20" stroke="currentColor" strokeWidth="2" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-[var(--color-ds-red)] bg-black px-6 py-4 flex flex-col gap-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading font-bold text-sm uppercase tracking-[3px] text-cream/70 hover:text-[var(--color-ds-red-light)] transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
