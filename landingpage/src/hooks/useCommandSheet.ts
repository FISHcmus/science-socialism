import { useState, useEffect, useCallback, useMemo } from "react";

export type SectionEntry = {
  number: string;
  label: string;
  title: string;
  sectionId: string;
  keywords: string[];
};

export const SECTIONS: SectionEntry[] = [
  { number: "01", label: "Hero", title: "Scientific Socialism", sectionId: "hero", keywords: ["BAA00103", "semester", "course", "CNXHKH"] },
  { number: "02", label: "Statistics", title: "Course Stats", sectionId: "stats", keywords: ["chapters", "members", "video", "assessment", "7", "9", "15"] },
  { number: "03", label: "Part 01", title: "Course Content", sectionId: "chapters", keywords: ["chapter", "nội dung", "chương"] },
  { number: "04", label: "Part 02", title: "Objectives & Assessment", sectionId: "objectives", keywords: ["mục tiêu", "đánh giá", "learning", "grading", "midterm", "final"] },
  { number: "05", label: "Part 03", title: "Schedule", sectionId: "timeline", keywords: ["lịch", "tuần", "week", "milestone"] },
  { number: "06", label: "Part 04", title: "Topic Analysis", sectionId: "exercise", keywords: ["bài tập", "exercise", "đại đoàn kết", "solidarity"] },
  { number: "07", label: "Chương 6", title: "Mindmap Dân tộc & Tôn giáo", sectionId: "mindmap-ch6", keywords: ["mindmap", "sơ đồ", "dân tộc", "tôn giáo", "chapter 6"] },
  { number: "08", label: "Part 05", title: "Presentation Video", sectionId: "video", keywords: ["youtube", "nhóm 7", "group", "chủ đề 6"] },
  { number: "09", label: "Part 06", title: "Group 7", sectionId: "team", keywords: ["thành viên", "member", "nhân", "nhi", "như", "phú"] },
  { number: "10", label: "Part 07", title: "Discussion", sectionId: "discussion", keywords: ["thảo luận", "toàn cầu hóa", "globalization"] },
  { number: "11", label: "Part 08", title: "Resources", sectionId: "resources", keywords: ["tài liệu", "giáo trình", "moodle", "drive", "pdf"] },
  { number: "12", label: "CTA", title: "Start Learning Now", sectionId: "cta", keywords: ["bắt đầu", "start", "moodle", "contact"] },
  { number: "13", label: "Footer", title: "Footer", sectionId: "footer", keywords: ["chân trang"] },
];

function filterSections(sections: SectionEntry[], query: string): SectionEntry[] {
  if (!query.trim()) return sections;
  const q = query.toLowerCase();
  return sections.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.label.toLowerCase().includes(q) ||
      s.number.includes(q) ||
      s.keywords.some((k) => k.toLowerCase().includes(q))
  );
}

export function useCommandSheet() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredSections = useMemo(() => filterSections(SECTIONS, query), [query]);

  // Reset state when opening/closing
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  // Reset activeIndex when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filteredSections.length]);

  const selectSection = useCallback(
    (entry: SectionEntry) => {
      setOpen(false);
      setTimeout(() => {
        document.getElementById(entry.sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    },
    []
  );

  // Global Ctrl+K listener
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleGlobalKey);
    return () => document.removeEventListener("keydown", handleGlobalKey);
  }, []);

  // Dialog keyboard navigation
  const handleDialogKeyDown = useCallback(
    (e: KeyboardEvent | React.KeyboardEvent) => {
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

  return {
    open,
    setOpen,
    query,
    setQuery,
    filteredSections,
    activeIndex,
    setActiveIndex,
    selectSection,
    handleDialogKeyDown,
  };
}
