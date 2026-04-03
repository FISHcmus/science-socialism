import type { Story, StoryDefault } from "@ladle/react";
import { LowerThird } from "./LowerThird";

export default {
  title: "DS/LowerThird",
} satisfies StoryDefault;

export const Default: Story = () => (
  <LowerThird name="Nhân" role="Nhóm trưởng - Giới thiệu chủ đề" opacity={1} translateY={0} />
);

export const LongRole: Story = () => (
  <LowerThird name="Quỳnh Như" role="Trách nhiệm sinh viên trong nhận thức đúng đắn" opacity={1} translateY={0} />
);
