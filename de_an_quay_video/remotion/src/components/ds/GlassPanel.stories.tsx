import type { Meta, StoryObj } from "@storybook/react-vite";
import { GlassPanel } from "./GlassPanel";
import { COLORS } from "./tokens";

const meta: Meta<typeof GlassPanel> = {
  title: "DS/GlassPanel",
  component: GlassPanel,
  args: {
    borderRadius: 16,
    padding: "24px",
    goldBorder: false,
    goldRing: false,
    ringAngle: 0,
  },
};
export default meta;

type Story = StoryObj<typeof GlassPanel>;

export const Default: Story = {
  args: {
    children: <span style={{ color: COLORS.white, fontSize: 20 }}>Dark glass panel</span>,
  },
};

export const GoldBorder: Story = {
  args: {
    goldBorder: true,
    children: <span style={{ color: COLORS.gold, fontSize: 20 }}>Gold bordered panel</span>,
  },
};
