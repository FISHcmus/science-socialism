import type { Story, StoryDefault } from "@ladle/react";
import { ExerciseBlock } from "./ExerciseBlock";

export default {
  title: "Sections/ExerciseBlock",
} satisfies StoryDefault;

export const Default: Story = () => <ExerciseBlock />;
