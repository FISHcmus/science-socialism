import type { Story, StoryDefault } from "@ladle/react";
import { MemberPiP } from "./MemberPiP";
import { useRingAngle } from "../../hooks/useRingAngle";

export default {
  title: "DS/MemberPiP",
} satisfies StoryDefault;

export const Default: Story = () => {
  const ringAngle = useRingAngle();
  return <MemberPiP name="Đào Thục Nhi" sectionLabel="Phần 1.1 - Cương lĩnh dân tộc" opacity={1} ringAngle={ringAngle} borderWidth={3} />;
};

export const NoSectionLabel: Story = () => {
  const ringAngle = useRingAngle();
  return <MemberPiP name="Đào Thục Nhi" opacity={1} ringAngle={ringAngle} borderWidth={3} />;
};
