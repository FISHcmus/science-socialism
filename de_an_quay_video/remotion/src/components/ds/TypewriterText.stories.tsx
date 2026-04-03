import type { Story, StoryDefault } from "@ladle/react";
import { TypewriterText } from "./TypewriterText";

export default {
  title: "DS/TypewriterText",
} satisfies StoryDefault;

const sampleText = "Đại đoàn kết toàn dân tộc là truyền thống quý báu của dân tộc Việt Nam.";

export const Default: Story = () => (
  <TypewriterText text={sampleText} visibleChars={40} fontSize={28} showCursor cursorVisible />
);

export const FullyTyped: Story = () => (
  <TypewriterText text={sampleText} visibleChars={sampleText.length} fontSize={28} showCursor cursorVisible />
);

export const GoldText: Story = () => (
  <TypewriterText text={sampleText} visibleChars={40} fontSize={28} showCursor cursorVisible goldText />
);
