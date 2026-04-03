import type { Story, StoryDefault } from "@ladle/react";
import { MemberPlaceholder } from "./MemberPlaceholder";
import { useRingAngle } from "../../hooks/useRingAngle";

export default {
  title: "DS/MemberPlaceholder",
} satisfies StoryDefault;

export const Default: Story = () => {
  const ringAngle = useRingAngle();
  return (
    <div style={{ position: "relative", width: 960, height: 540 }}>
      <MemberPlaceholder name="Nhân" color="#F7F3EE" opacity={1} scale={1} ringAngle={ringAngle} />
    </div>
  );
};

export const DifferentMember: Story = () => {
  const ringAngle = useRingAngle();
  return (
    <div style={{ position: "relative", width: 960, height: 540 }}>
      <MemberPlaceholder name="Quỳnh Như" color="#141422" opacity={1} scale={1} ringAngle={ringAngle} />
    </div>
  );
};
