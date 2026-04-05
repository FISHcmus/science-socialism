import React from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  items?: NavItem[];
  className?: string;
};

const defaultItems: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Chapters", href: "#chapters" },
  { label: "Video", href: "#video" },
  { label: "Team", href: "#team" },
  { label: "Resources", href: "#resources" },
];

export const Navbar: React.FC<NavbarProps> = ({ items = defaultItems, className }) => (
  <nav className={cn(
    "sticky top-0 z-50 bg-[hsl(var(--foreground))] text-[hsl(var(--background))]",
    "border-b border-white/10 backdrop-blur-sm",
    className
  )}>
    <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-14">
      <span className="font-heading font-bold text-base tracking-wide">CNXHKH</span>
      <div className="flex items-center gap-6">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-heading text-sm text-white/70 hover:text-white transition-colors no-underline"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);
