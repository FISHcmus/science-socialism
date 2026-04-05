import type { Story, StoryDefault } from "@ladle/react";
import { HeroSection } from "./HeroSection";

export default {
  title: "Sections/HeroSection",
} satisfies StoryDefault;

export const Default: Story = () => <HeroSection />;
