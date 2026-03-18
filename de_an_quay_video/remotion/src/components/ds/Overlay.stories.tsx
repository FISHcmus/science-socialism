import type { Meta, StoryObj } from "@storybook/react-vite";
import { Overlay } from "./Overlay";

const meta: Meta<typeof Overlay> = {
  title: "DS/Overlay",
  component: Overlay,
  args: {
    direction: "bottom",
    opacity: 0.7,
    filmGrain: false,
    grainFrame: 0,
  },
  decorators: [
    (Story) => (
      <div style={{ position: "relative", width: 960, height: 540, background: "linear-gradient(135deg, #c49746, #e8af48)" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Overlay>;

export const Bottom: Story = {};

export const Top: Story = {
  args: { direction: "top" },
};

export const Full: Story = {
  args: { direction: "full" },
};

export const WithGrain: Story = {
  args: { filmGrain: true, grainFrame: 42 },
};
