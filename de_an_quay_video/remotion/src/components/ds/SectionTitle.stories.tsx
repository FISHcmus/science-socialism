import type { Story, StoryDefault } from "@ladle/react";
import { SectionTitle } from "./SectionTitle";

export default {
  title: "DS/SectionTitle",
} satisfies StoryDefault;

export const Default: Story = () => (
  <SectionTitle title="Ba nguyên tắc cơ bản" subtitle="Đoàn kết dân tộc Việt Nam" sectionNumber="PHẦN 1.1" opacity={1} translateY={0} accentWidth={200} />
);

export const NoSubtitle: Story = () => (
  <SectionTitle title="Ba nguyên tắc cơ bản" sectionNumber="PHẦN 1.1" opacity={1} translateY={0} accentWidth={200} />
);

export const WideAccent: Story = () => (
  <SectionTitle title="Ba nguyên tắc cơ bản" subtitle="Đoàn kết dân tộc Việt Nam" sectionNumber="PHẦN 1.1" opacity={1} translateY={0} accentWidth={400} />
);
