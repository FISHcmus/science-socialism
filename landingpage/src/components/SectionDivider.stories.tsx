import type { Story, StoryDefault } from "@ladle/react";
import { SectionDivider } from "./SectionDivider";

export default {
  title: "Primitives/SectionDivider",
} satisfies StoryDefault;

export const Diamond: Story = () => (
  <div style={{ padding: "0 48px" }}>
    <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", color: "#4A4A4A" }}>Content above the divider...</p>
    <SectionDivider ornament="diamond" />
    <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", color: "#4A4A4A" }}>Content below the divider...</p>
  </div>
);

export const Star: Story = () => (
  <div style={{ padding: "0 48px" }}>
    <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", color: "#4A4A4A" }}>Content above the divider...</p>
    <SectionDivider ornament="star" />
    <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", color: "#4A4A4A" }}>Content below the divider...</p>
  </div>
);
