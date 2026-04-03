import type { Story, StoryDefault } from "@ladle/react";
import { ArtDecoImage } from "./ArtDecoImage";
import { useRingAngle } from "../../hooks/useRingAngle";

export default {
  title: "DS/ArtDecoImage",
} satisfies StoryDefault;

export const Placeholder: Story = () => {
  const ringAngle = useRingAngle();
  return <ArtDecoImage description="Quang cảnh đồng quê Việt Nam" width={640} height={360} ringAngle={ringAngle} opacity={1} borderWidth={5} sweepProgress={0} borderRadius={4} />;
};

export const SweepMidway: Story = () => {
  const ringAngle = useRingAngle();
  return <ArtDecoImage description="Quang cảnh đồng quê Việt Nam" width={640} height={360} ringAngle={ringAngle} opacity={1} borderWidth={5} sweepProgress={0.5} borderRadius={4} />;
};
