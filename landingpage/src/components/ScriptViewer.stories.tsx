import type { Story, StoryDefault } from "@ladle/react";
import { ScriptViewer } from "./ScriptViewer";

export default {
  title: "Complex/ScriptViewer",
} satisfies StoryDefault;

export const Default: Story = () => (
  <div style={{ background: "linear-gradient(180deg, #111111 0%, #1A1A1A 100%)", padding: 48 }}>
    <ScriptViewer />
  </div>
);
