import type { Story, StoryDefault } from "@ladle/react";
import { AssessmentBreakdown } from "./AssessmentBreakdown";

export default {
  title: "Sections/AssessmentBreakdown",
} satisfies StoryDefault;

export const Default: Story = () => (
  <div style={{ padding: 48, maxWidth: 520 }}>
    <AssessmentBreakdown />
  </div>
);
