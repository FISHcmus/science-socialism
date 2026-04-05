import type { Story, StoryDefault } from "@ladle/react";
import { ResourceLink } from "./ResourceLink";

export default {
  title: "Primitives/ResourceLink",
} satisfies StoryDefault;

export const PDF: Story = () => (
  <div style={{ padding: 48, maxWidth: 400 }}>
    <ResourceLink title="Giáo trình CNXHKH (2021)" description="NXB Chính trị Quốc gia Sự Thật, 273 trang" href="#" type="pdf" />
  </div>
);

export const PPTX: Story = () => (
  <div style={{ padding: 48, maxWidth: 400 }}>
    <ResourceLink title="Slide chương 1-7" description="Bài giảng PowerPoint" href="#" type="pptx" />
  </div>
);

export const Markdown: Story = () => (
  <div style={{ padding: 48, maxWidth: 400 }}>
    <ResourceLink title="Đề cương chi tiết" description="Markdown extracted từ PDF" href="#" type="md" />
  </div>
);

export const TwoColumn: Story = () => (
  <div style={{ padding: 48, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 800 }}>
    <ResourceLink title="Giáo trình CNXHKH" description="NXB CTQGST, 2021" href="#" type="pdf" />
    <ResourceLink title="Slide bài giảng" description="PPTX + PDF" href="#" type="pptx" />
    <ResourceLink title="Đề cương chi tiết" description="Course syllabus" href="#" type="md" />
    <ResourceLink title="Mindmap 7 chương" description="Outline summaries" href="#" type="md" />
  </div>
);
