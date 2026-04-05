import type { Story, StoryDefault } from "@ladle/react";
import { ChapterCard } from "./ChapterCard";

export default {
  title: "Sections/ChapterCard",
} satisfies StoryDefault;

export const Default: Story = () => (
  <div style={{ padding: 48, maxWidth: 320 }}>
    <ChapterCard number={1} title="Nhap mon Chu nghia xa hoi khoa hoc" summary="Su ra doi cua CNXHKH, doi tuong, phuong phap nghien cuu" onMindmap={() => {}} onRead={() => {}} />
  </div>
);

export const NoActions: Story = () => (
  <div style={{ padding: 48, maxWidth: 320 }}>
    <ChapterCard number={6} title="Van de ton giao trong thoi ky qua do" />
  </div>
);
