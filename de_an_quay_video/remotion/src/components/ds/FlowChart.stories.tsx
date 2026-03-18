import type { Meta, StoryObj } from "@storybook/react-vite";
import { FlowChart } from "./FlowChart";

const sampleNodes = [
  { label: "Nhận thức", description: "Hiểu biết lý luận" },
  { label: "Rèn luyện", description: "Phẩm chất đạo đức" },
  { label: "Thực tiễn", description: "Hoạt động cụ thể" },
  { label: "Tổng kết", description: "Đánh giá kết quả" },
];

const meta: Meta<typeof FlowChart> = {
  title: "DS/FlowChart",
  component: FlowChart,
  args: {
    nodes: sampleNodes,
    direction: "horizontal",
    cycle: false,
    visibleNodes: 4,
  },
};
export default meta;

type Story = StoryObj<typeof FlowChart>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: { direction: "vertical" },
};

export const Cyclic: Story = {
  args: { cycle: true },
};
