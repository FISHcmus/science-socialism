import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypewriterText } from "./TypewriterText";

const sampleText =
  "Đại đoàn kết toàn dân tộc là truyền thống quý báu của dân tộc Việt Nam.";

const meta: Meta<typeof TypewriterText> = {
  title: "DS/TypewriterText",
  component: TypewriterText,
  args: {
    text: sampleText,
    visibleChars: 40,
    fontSize: 28,
    showCursor: true,
    cursorVisible: true,
  },
};
export default meta;

type Story = StoryObj<typeof TypewriterText>;

export const Default: Story = {};

export const FullyTyped: Story = {
  args: { visibleChars: sampleText.length },
};

export const GoldText: Story = {
  args: { goldText: true },
};
