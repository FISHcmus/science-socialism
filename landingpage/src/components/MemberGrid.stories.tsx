import type { Story, StoryDefault } from "@ladle/react";
import { MemberGrid } from "./MemberGrid";

export default {
  title: "Sections/MemberGrid",
} satisfies StoryDefault;

export const Default: Story = () => <MemberGrid />;
