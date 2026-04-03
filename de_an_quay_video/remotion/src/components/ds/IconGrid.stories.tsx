import type { Story, StoryDefault } from "@ladle/react";
import { IconGrid } from "./IconGrid";

export default {
  title: "DS/IconGrid",
} satisfies StoryDefault;

const sampleItems = [
  { label: "Sức mạnh đoàn kết", description: "Tập hợp mọi lực lượng" },
  { label: "Liên minh công-nông", description: "Nền tảng vững chắc" },
  { label: "Đoàn kết thật sự", description: "Không hình thức" },
  { label: "Công bằng xã hội", description: "Quyền lợi cho tất cả" },
  { label: "Nhà nước pháp quyền", description: "Quản lý bằng luật" },
  { label: "Hội nhập quốc tế", description: "Mở rộng hợp tác" },
];

export const Default: Story = () => (
  <IconGrid items={sampleItems} columns={3} visibleCount={6} itemScale={1} itemOpacity={1} />
);

export const TwoColumns: Story = () => (
  <IconGrid items={sampleItems} columns={2} visibleCount={6} itemScale={1} itemOpacity={1} />
);
