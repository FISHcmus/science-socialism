import type { Story, StoryDefault } from "@ladle/react";
import { Overlay } from "./Overlay";

export default {
  title: "DS/Overlay",
} satisfies StoryDefault;

export const Bottom: Story = () => (
  <div style={{ position: "relative", width: 960, height: 540, background: "linear-gradient(135deg, #c49746, #e8af48)" }}>
    <Overlay direction="bottom" opacity={0.7} />
  </div>
);

export const Top: Story = () => (
  <div style={{ position: "relative", width: 960, height: 540, background: "linear-gradient(135deg, #c49746, #e8af48)" }}>
    <Overlay direction="top" opacity={0.7} />
  </div>
);

export const Full: Story = () => (
  <div style={{ position: "relative", width: 960, height: 540, background: "linear-gradient(135deg, #c49746, #e8af48)" }}>
    <Overlay direction="full" opacity={0.7} />
  </div>
);

export const WithGrain: Story = () => (
  <div style={{ position: "relative", width: 960, height: 540, background: "linear-gradient(135deg, #c49746, #e8af48)" }}>
    <Overlay direction="bottom" opacity={0.7} filmGrain grainFrame={42} />
  </div>
);
