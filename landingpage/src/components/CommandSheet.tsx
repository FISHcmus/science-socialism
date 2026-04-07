import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "./icons";
import { type SectionEntry, SECTIONS } from "@/hooks/useCommandSheet";

type CommandSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CommandSheet: React.FC<CommandSheetProps> = ({ open, onOpenChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredSections = useMemo(() => {
    if (!query.trim()) return SECTIONS;
    const q = query.toLowerCase();
    return SECTIONS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.label.toLowerCase().includes(q) ||
        s.number.includes(q) ||
        s.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [query]);

  // Reset state when opening
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Reset activeIndex when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filteredSections.length]);

  // Scroll active entry into view
  useEffect(() => {
    if (!open) return;
    const el = document.getElementById(`command-entry-${activeIndex}`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  const selectSection = useCallback(
    (entry: SectionEntry) => {
      onOpenChange(false);
      setTimeout(() => {
        history.pushState(null, "", `#${entry.sectionId}`);
        document.getElementById(entry.sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    },
    [onOpenChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const len = filteredSections.length;
      if (!len) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((i) => (i + 1) % len);
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((i) => (i - 1 + len) % len);
          break;
        case "Enter":
          e.preventDefault();
          if (filteredSections[activeIndex]) {
            selectSection(filteredSections[activeIndex]);
          }
          break;
        case "Home":
          e.preventDefault();
          setActiveIndex(0);
          break;
        case "End":
          e.preventDefault();
          setActiveIndex(len - 1);
          break;
      }
    },
    [filteredSections, activeIndex, selectSection]
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/80 command-sheet-grain" />
        <DialogContent
          showCloseButton={false}
          className="fixed inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[10000] w-[95vw] max-w-4xl max-h-[85vh] bg-black border-0 p-0 shadow-none command-sheet-content overflow-hidden"
          onKeyDown={handleKeyDown}
        >
          {/* Constructivist double frame */}
          <div className="absolute inset-0 border-[5px] border-[var(--color-ds-red)] pointer-events-none" />
          <div className="absolute inset-[10px] border-[2px] border-[var(--color-ds-red)] pointer-events-none" />

          {/* Header */}
          <div className="relative px-6 pt-5 pb-0">
            <div className="flex items-center justify-between mb-3">
              <DialogTitle className="font-propaganda text-sm tracking-[8px] uppercase text-[var(--color-ds-cream)]">
                Command Briefing
              </DialogTitle>
              <DialogDescription className="sr-only">
                Navigate to page sections or search content
              </DialogDescription>
              <div className="flex items-center gap-3">
                <kbd className="font-mono text-[10px] text-[var(--color-ds-cream)]/40 border border-[var(--color-ds-cream)]/20 px-2 py-0.5 uppercase">
                  Esc
                </kbd>
                <button
                  onClick={() => onOpenChange(false)}
                  className="text-[var(--color-ds-cream)]/50 hover:text-[var(--color-ds-cream)] transition-colors"
                  aria-label="Close"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Red accent line */}
            <div className="h-[6px] bg-[var(--color-ds-red)] transform skew-x-[-25deg] w-full" />
          </div>

          {/* Search */}
          <div className="px-6 pt-4 pb-2 relative">
            <SearchIcon size={16} className="absolute left-9 top-1/2 translate-y-[2px] text-[var(--color-ds-red)]" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH SECTIONS..."
              className="pl-10 h-11 border-0 border-b-[3px] border-[var(--color-ds-red)] rounded-none bg-transparent text-[var(--color-ds-cream)] placeholder:text-[var(--color-ds-cream)]/30 font-heading font-bold uppercase tracking-[3px] focus-visible:ring-0 focus-visible:border-[var(--color-ds-red-light)]"
            />
          </div>

          {/* TOC Grid */}
          <ScrollArea className="flex-1 max-h-[calc(85vh-220px)]">
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-3 p-6 command-sheet-grid"
              role="listbox"
              aria-label="Page sections"
            >
              {filteredSections.map((entry, i) => (
                <SectionCard
                  key={entry.sectionId}
                  entry={entry}
                  index={i}
                  isActive={i === activeIndex}
                  onSelect={() => selectSection(entry)}
                  onHover={() => setActiveIndex(i)}
                />
              ))}
              {filteredSections.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="font-heading font-bold text-[var(--color-ds-cream)]/30 uppercase tracking-[4px] text-sm">
                    No sections found
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Scroll fade indicator */}
          <div className="pointer-events-none absolute bottom-[42px] left-[12px] right-[12px] h-16 bg-gradient-to-t from-black to-transparent" />

          {/* MẬT watermark */}
          <div className="absolute bottom-16 right-8 font-propaganda text-[120px] leading-none text-[var(--color-ds-red)]/[0.08] uppercase pointer-events-none select-none rotate-[-15deg] command-sheet-stamp">
            MẬT
          </div>

          {/* Footer hints */}
          <div className="px-6 py-2 border-t border-[var(--color-ds-cream)]/10">
            <p className="font-body text-[11px] text-[var(--color-ds-cream)]/25 uppercase tracking-[3px] text-center">
              ↑↓ navigate &nbsp;&middot;&nbsp; ⏎ select &nbsp;&middot;&nbsp; esc close
            </p>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

/* ── Section Card ─────────────────────────────────────── */

type SectionCardProps = {
  entry: SectionEntry;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  onHover: () => void;
};

const SectionCard: React.FC<SectionCardProps> = ({
  entry,
  index,
  isActive,
  onSelect,
  onHover,
}) => (
  <button
    id={`command-entry-${index}`}
    role="option"
    aria-selected={isActive}
    onClick={onSelect}
    onMouseEnter={onHover}
    className={[
      "relative text-left p-4 border-2 transition-all duration-150 cursor-pointer group overflow-hidden",
      isActive
        ? "border-[var(--color-ds-red)] bg-[var(--color-ds-red)]/20 shadow-[0_0_12px_rgba(153,0,0,0.3)]"
        : "border-[var(--color-ds-cream)]/15 bg-black/50 hover:border-[var(--color-ds-red)]/60",
    ].join(" ")}
    style={{ animationDelay: `${index * 40}ms` }}
  >
    {/* Oversized background number */}
    <span className="absolute top-[-8px] right-[-4px] font-propaganda text-[64px] leading-none text-[var(--color-ds-red)]/[0.12] group-hover:text-[var(--color-ds-red)]/25 transition-colors pointer-events-none select-none">
      {entry.number}
    </span>
    {/* Label */}
    <span className="block font-heading text-[10px] text-[var(--color-ds-cream)]/40 uppercase tracking-[4px] mb-1 relative z-10">
      {entry.label}
    </span>
    {/* Title */}
    <span className="block font-heading font-bold text-sm text-[var(--color-ds-cream)] uppercase tracking-[2px] relative z-10">
      {entry.title}
    </span>
  </button>
);
