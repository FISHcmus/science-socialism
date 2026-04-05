import React from "react";
import { ChapterCard } from "./ChapterCard";
import { SectionHeader } from "./SectionHeader";

type Chapter = {
  number: number;
  title: string;
  summary?: string;
};

type ChapterNavProps = {
  chapters?: Chapter[];
  onMindmap?: (chapter: number) => void;
  onRead?: (chapter: number) => void;
};

const defaultChapters: Chapter[] = [
  { number: 1, title: "Nhập môn CNXHKH", summary: "Sự ra đời, đối tượng, phương pháp" },
  { number: 2, title: "Sứ mệnh lịch sử của GCCN", summary: "Nội dung, điều kiện sứ mệnh" },
  { number: 3, title: "CNXH và thời kỳ quá độ lên CNXH", summary: "Lý luận hình thái, quá độ" },
  { number: 4, title: "Dân chủ XHCN và nhà nước XHCN", summary: "Bản chất dân chủ, nhà nước" },
  { number: 5, title: "Vấn đề dân tộc và tôn giáo", summary: "Cương lĩnh dân tộc ML" },
  { number: 6, title: "Vấn đề tôn giáo trong quá độ", summary: "Nguyên tắc giải quyết tôn giáo" },
  { number: 7, title: "Vấn đề gia đình trong quá độ", summary: "Xây dựng gia đình mới" },
];

export const ChapterNav: React.FC<ChapterNavProps> = ({
  chapters = defaultChapters,
  onMindmap,
  onRead,
}) => (
  <section style={{ padding: "0 80px", maxWidth: 1200, margin: "0 auto" }}>
    <SectionHeader label="Phần 01" title="Nội dung môn học" />
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 20,
    }}>
      {chapters.map((ch) => (
        <ChapterCard
          key={ch.number}
          number={ch.number}
          title={ch.title}
          summary={ch.summary}
          onMindmap={onMindmap ? () => onMindmap(ch.number) : undefined}
          onRead={onRead ? () => onRead(ch.number) : undefined}
        />
      ))}
    </div>
  </section>
);
