import type { Story, StoryDefault } from "@ladle/react";
import { GlassPanel } from "./GlassPanel";
import { COLORS } from "./tokens";
import { useRingAngle } from "../../hooks/useRingAngle";

export default {
  title: "DS/GlassPanel",
} satisfies StoryDefault;

export const Default: Story = () => (
  <GlassPanel borderRadius={16} padding="24px">
    <span style={{ color: COLORS.white, fontSize: 20 }}>Glass panel</span>
  </GlassPanel>
);

export const GoldBorder: Story = () => (
  <GlassPanel borderRadius={16} padding="24px" goldBorder>
    <span style={{ color: COLORS.gold, fontSize: 20 }}>Gold bordered panel</span>
  </GlassPanel>
);

export const GoldRing: Story = () => {
  const ringAngle = useRingAngle();
  return (
    <GlassPanel borderRadius={16} padding="24px" goldRing ringAngle={ringAngle}>
      <span style={{ color: COLORS.gold, fontSize: 20 }}>Rotating gold ring</span>
    </GlassPanel>
  );
};
