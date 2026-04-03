import type { Story, StoryDefault } from "@ladle/react";
import { CountUpNumber } from "./CountUpNumber";
import { COLORS } from "./tokens";
import { useRingAngle } from "../../hooks/useRingAngle";

export default {
  title: "DS/CountUpNumber",
} satisfies StoryDefault;

export const Default: Story = () => (
  <CountUpNumber value={54} label="dân tộc" color={COLORS.gold} size={72} opacity={1} />
);

export const WithSuffix: Story = () => (
  <CountUpNumber value={100} suffix="tr" label="dân số" color={COLORS.gold} size={72} opacity={1} />
);

export const WithGoldRing: Story = () => {
  const ringAngle = useRingAngle();
  return <CountUpNumber value={54} label="dân tộc" color={COLORS.gold} size={72} opacity={1} goldRing ringAngle={ringAngle} />;
};

export const WarmGold: Story = () => (
  <CountUpNumber value={54} label="dân tộc" color={COLORS.warmGold} size={72} opacity={1} />
);

export const LightGold: Story = () => (
  <CountUpNumber value={54} label="dân tộc" color={COLORS.lightGold} size={72} opacity={1} />
);
