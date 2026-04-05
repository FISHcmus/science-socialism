import type { Story, StoryDefault } from "@ladle/react";
import { TheaterEmbed } from "./TheaterEmbed";

export default {
  title: "Complex/TheaterEmbed",
} satisfies StoryDefault;

export const Default: Story = () => <TheaterEmbed />;

export const CustomVideo: Story = () => (
  <TheaterEmbed
    videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Sample video"
    subtitle="Testing embed"
  />
);
