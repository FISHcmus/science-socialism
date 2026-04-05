import type { Story, StoryDefault } from "@ladle/react";
import { CourseTimeline } from "./CourseTimeline";

export default {
  title: "Sections/CourseTimeline",
} satisfies StoryDefault;

export const Default: Story = () => <CourseTimeline />;
