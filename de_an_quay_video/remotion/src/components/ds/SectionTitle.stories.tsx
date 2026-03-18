import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionTitle } from "./SectionTitle";

const meta: Meta<typeof SectionTitle> = {
  title: "DS/SectionTitle",
  component: SectionTitle,
  args: {
    title: "Ba nguyên tắc cơ bản",
    subtitle: "Đoàn kết dân tộc Việt Nam",
    sectionNumber: "PHẦN 1.1",
    opacity: 1,
    translateY: 0,
    accentWidth: 200,
  },
};
export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {};

export const NoSubtitle: Story = {
  args: { subtitle: undefined },
};

export const WideAccent: Story = {
  args: { accentWidth: 400 },
};
