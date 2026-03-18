import type { Meta, StoryObj } from "@storybook/react-vite";
import { CountUpNumber } from "./CountUpNumber";
import { COLORS } from "./tokens";

const meta: Meta<typeof CountUpNumber> = {
  title: "DS/CountUpNumber",
  component: CountUpNumber,
  args: {
    value: 54,
    label: "dân tộc",
    color: COLORS.gold,
    size: 72,
    opacity: 1,
    goldRing: false,
    ringAngle: 0,
  },
  argTypes: {
    ringAngle: { control: { type: "range", min: 0, max: 360, step: 1 } },
  },
};
export default meta;

type Story = StoryObj<typeof CountUpNumber>;

export const Default: Story = {};

export const WithSuffix: Story = {
  args: { value: 100, suffix: "tr", label: "dân số" },
};

export const WithGoldRing: Story = {
  args: { goldRing: true, ringAngle: 45 },
};

export const WarmGold: Story = {
  args: { color: COLORS.warmGold },
};

export const LightGold: Story = {
  args: { color: COLORS.lightGold },
};
