import type { Story, StoryDefault } from "@ladle/react";
import { ResourceLibrary } from "./ResourceLibrary";

export default {
  title: "Complex/ResourceLibrary",
} satisfies StoryDefault;

export const Default: Story = () => <ResourceLibrary />;
