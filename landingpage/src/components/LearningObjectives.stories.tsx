import type { Story, StoryDefault } from "@ladle/react";
import { LearningObjectives } from "./LearningObjectives";

export default {
  title: "Sections/LearningObjectives",
} satisfies StoryDefault;

export const Default: Story = () => (
  <div style={{ padding: 48, maxWidth: 520 }}>
    <LearningObjectives />
  </div>
);
