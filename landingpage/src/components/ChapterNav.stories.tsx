import type { Story, StoryDefault } from "@ladle/react";
import { ChapterNav } from "./ChapterNav";

export default {
  title: "Sections/ChapterNav",
} satisfies StoryDefault;

export const Default: Story = () => (
  <ChapterNav onMindmap={(n) => console.log("Mindmap:", n)} onRead={(n) => console.log("Read:", n)} />
);
