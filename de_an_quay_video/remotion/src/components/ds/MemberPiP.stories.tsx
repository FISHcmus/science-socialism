import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemberPiP } from "./MemberPiP";

const meta: Meta<typeof MemberPiP> = {
  title: "DS/MemberPiP",
  component: MemberPiP,
  args: {
    name: "Đào Thục Nhi",
    sectionLabel: "Phần 1.1 - Cương lĩnh dân tộc",
    opacity: 1,
    ringAngle: 0,
    borderWidth: 3,
  },
  argTypes: {
    ringAngle: { control: { type: "range", min: 0, max: 360, step: 1 } },
    opacity: { control: { type: "range", min: 0, max: 1, step: 0.05 } },
    borderWidth: { control: { type: "range", min: 1, max: 8, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: "radial-gradient(ellipse at center, #1a1a2e, #0a0a0f)",
          padding: 24,
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

type Story = StoryObj<typeof MemberPiP>;

export const Default: Story = {};

export const NoSectionLabel: Story = {
  args: { sectionLabel: undefined },
};

export const RingAt180: Story = {
  args: { ringAngle: 180 },
};
