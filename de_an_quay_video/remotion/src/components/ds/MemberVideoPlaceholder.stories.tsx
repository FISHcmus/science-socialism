import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemberVideoPlaceholder } from "./MemberVideoPlaceholder";

const meta: Meta<typeof MemberVideoPlaceholder> = {
  title: "DS/MemberVideoPlaceholder",
  component: MemberVideoPlaceholder,
  args: {
    name: "Thục Nhi",
    sectionLabel: "Phần 1.1 - Cương lĩnh dân tộc",
    width: 880,
    height: 495,
    opacity: 1,
    ringAngle: 0,
    borderWidth: 4,
  },
  argTypes: {
    ringAngle: { control: { type: "range", min: 0, max: 360, step: 1 } },
    opacity: { control: { type: "range", min: 0, max: 1, step: 0.05 } },
    borderWidth: { control: { type: "range", min: 1, max: 12, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: "radial-gradient(ellipse at center, #1a1a2e, #0a0a0f)",
          padding: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 600,
        }}
      >
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MemberVideoPlaceholder>;

export const Default: Story = {};

export const NoSectionLabel: Story = {
  args: { sectionLabel: undefined },
};

export const RingAt120: Story = {
  args: { ringAngle: 120 },
};
