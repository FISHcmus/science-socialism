import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconGrid } from "./IconGrid";

const sampleItems = [
  { label: "Sức mạnh đoàn kết", description: "Tập hợp mọi lực lượng" },
  { label: "Liên minh công-nông", description: "Nền tảng vững chắc" },
  { label: "Đoàn kết thật sự", description: "Không hình thức" },
  { label: "Công bằng xã hội", description: "Quyền lợi cho tất cả" },
  { label: "Nhà nước pháp quyền", description: "Quản lý bằng luật" },
  { label: "Hội nhập quốc tế", description: "Mở rộng hợp tác" },
];

const meta: Meta<typeof IconGrid> = {
  title: "DS/IconGrid",
  component: IconGrid,
  args: {
    items: sampleItems,
    columns: 3,
    visibleCount: 6,
    itemScale: 1,
    itemOpacity: 1,

  },
};
export default meta;

type Story = StoryObj<typeof IconGrid>;

export const Default: Story = {};

export const TwoColumns: Story = {
  args: { columns: 2 },
};
