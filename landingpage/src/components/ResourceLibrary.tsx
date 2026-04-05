import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { ResourceLink } from "./ResourceLink";
import { SectionHeader } from "./SectionHeader";

type Resource = {
  title: string;
  description: string;
  href: string;
  type: "pdf" | "pptx" | "md" | "link";
  category: string;
};

type ResourceLibraryProps = {
  resources?: Resource[];
};

const defaultResources: Resource[] = [
  { category: "Giáo trình", title: "GT CNXHKH (2021)", description: "NXB Chính trị Quốc gia Sự Thật, 273 trang", href: "#", type: "pdf" },
  { category: "Giáo trình", title: "Giáo trình CNXHKH (không chuyên)", description: "Phiên bản số, 180 trang", href: "#", type: "pdf" },
  { category: "Bài giảng", title: "Slide chương 1-7", description: "PowerPoint bài giảng", href: "#", type: "pptx" },
  { category: "Bài giảng", title: "Slide PDF", description: "Bản PDF của bài giảng", href: "#", type: "pdf" },
  { category: "Đề cương", title: "Đề cương chi tiết", description: "Syllabus môn học", href: "#", type: "md" },
  { category: "Mindmap", title: "Outline 7 chương", description: "Bản tóm tắt có cấu trúc", href: "#", type: "md" },
];

export const ResourceLibrary: React.FC<ResourceLibraryProps> = ({ resources = defaultResources }) => {
  const categories = [...new Set(resources.map((r) => r.category))];

  return (
    <section style={{ padding: "0 80px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeader label="Phần 08" title="Tài liệu" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
        {categories.map((cat) => (
          <div key={cat}>
            <div style={{
              fontFamily: FONT.heading,
              fontWeight: 600,
              fontSize: TEXT.label.size,
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: COLORS.inkMuted,
              marginBottom: 12,
            }}>
              {cat}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {resources.filter((r) => r.category === cat).map((r, i) => (
                <ResourceLink key={i} title={r.title} description={r.description} href={r.href} type={r.type} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
