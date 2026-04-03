import type { Story, StoryDefault } from "@ladle/react";
import { FlowChart } from "./FlowChart";

export default {
  title: "DS/FlowChart",
} satisfies StoryDefault;

const sampleNodes = [
  { label: "Nhận thức", description: "Hiểu biết lý luận" },
  { label: "Rèn luyện", description: "Phẩm chất đạo đức" },
  { label: "Thực tiễn", description: "Hoạt động cụ thể" },
  { label: "Tổng kết", description: "Đánh giá kết quả" },
];

export const Horizontal: Story = () => (
  <FlowChart nodes={sampleNodes} direction="horizontal" cycle={false} visibleNodes={4} />
);

export const Vertical: Story = () => (
  <FlowChart nodes={sampleNodes} direction="vertical" cycle={false} visibleNodes={4} />
);

export const Cyclic: Story = () => (
  <FlowChart nodes={sampleNodes} direction="horizontal" cycle visibleNodes={4} />
);
