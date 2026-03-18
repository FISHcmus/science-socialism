import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemberPlaceholder } from "./MemberPlaceholder";

const meta: Meta<typeof MemberPlaceholder> = {
  title: "DS/MemberPlaceholder",
  component: MemberPlaceholder,
  args: {
    name: "Nhân",
    color: "#1a1a2e",
    opacity: 1,
    scale: 1,
    ringAngle: 0,
  },
  argTypes: {
    ringAngle: { control: { type: "range", min: 0, max: 360, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div style={{ position: "relative", width: 960, height: 540 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MemberPlaceholder>;

export const Default: Story = {};

export const DifferentMember: Story = {
  args: { name: "Quỳnh Như", color: "#141422" },
};

export const RingAt90: Story = {
  args: { ringAngle: 90 },
};

export const RingAt180: Story = {
  args: { ringAngle: 180 },
};
