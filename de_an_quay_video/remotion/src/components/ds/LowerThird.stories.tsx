import type { Meta, StoryObj } from "@storybook/react-vite";
import { LowerThird } from "./LowerThird";

const meta: Meta<typeof LowerThird> = {
  title: "DS/LowerThird",
  component: LowerThird,
  args: {
    name: "Nhân",
    role: "Nhóm trưởng - Giới thiệu chủ đề",
    opacity: 1,
    translateY: 0,
  },
};
export default meta;

type Story = StoryObj<typeof LowerThird>;

export const Default: Story = {};

export const LongRole: Story = {
  args: { name: "Quỳnh Như", role: "Trách nhiệm sinh viên trong nhận thức đúng đắn" },
};
