import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilmGrain } from "./FilmGrain";

const meta: Meta<typeof FilmGrain> = {
  title: "DS/FilmGrain",
  component: FilmGrain,
  args: {
    frame: 0,
    opacity: 0.08,
    blendMode: "overlay",
  },
  argTypes: {
    frame: { control: { type: "range", min: 0, max: 999, step: 1 } },
    opacity: { control: { type: "range", min: 0, max: 0.3, step: 0.01 } },
  },
  decorators: [
    (Story) => (
      <div style={{ position: "relative", width: 960, height: 540, background: "linear-gradient(135deg, #1a1a2e, #0a0a0f)" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof FilmGrain>;

export const Default: Story = {};

export const Frame42: Story = {
  args: { frame: 42 },
};

export const HighOpacity: Story = {
  args: { opacity: 0.2 },
};
