import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArtDecoImage } from "./ArtDecoImage";

const meta: Meta<typeof ArtDecoImage> = {
  title: "DS/ArtDecoImage",
  component: ArtDecoImage,
  args: {
    description: "Quang cảnh đồng quê Việt Nam",
    width: 640,
    height: 360,
    ringAngle: 0,
    opacity: 1,
    borderWidth: 5,
    sweepProgress: 0,
    borderRadius: 4,
  },
  argTypes: {
    ringAngle: { control: { type: "range", min: 0, max: 360, step: 1 } },
    sweepProgress: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    opacity: { control: { type: "range", min: 0, max: 1, step: 0.05 } },
    borderWidth: { control: { type: "range", min: 1, max: 12, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: "radial-gradient(ellipse at center, #1a1a2e, #0a0a0f)",
          padding: 48,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 500,
        }}
      >
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ArtDecoImage>;

export const Placeholder: Story = {};

export const WithRingAngle: Story = {
  args: { ringAngle: 90 },
};

export const SweepMidway: Story = {
  args: { sweepProgress: 0.5 },
};
