import type { Story, StoryDefault } from "@ladle/react";
import { MemberVideoPlaceholder } from "./MemberVideoPlaceholder";
import { useRingAngle } from "../../hooks/useRingAngle";

export default {
  title: "DS/MemberVideoPlaceholder",
} satisfies StoryDefault;

export const Default: Story = () => {
  const ringAngle = useRingAngle();
  return <MemberVideoPlaceholder name="Thục Nhi" sectionLabel="Phần 1.1 - Cương lĩnh dân tộc" width={880} height={495} opacity={1} ringAngle={ringAngle} borderWidth={4} />;
};

export const NoSectionLabel: Story = () => {
  const ringAngle = useRingAngle();
  return <MemberVideoPlaceholder name="Thục Nhi" width={880} height={495} opacity={1} ringAngle={ringAngle} borderWidth={4} />;
};
