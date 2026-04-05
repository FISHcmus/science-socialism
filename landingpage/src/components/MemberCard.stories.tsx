import type { Story, StoryDefault } from "@ladle/react";
import { MemberCard } from "./MemberCard";

export default {
  title: "Primitives/MemberCard",
} satisfies StoryDefault;

export const Default: Story = () => (
  <div style={{ padding: 48, maxWidth: 200 }}>
    <MemberCard name="Nhân" role="Nhóm trưởng" task="T3-4: Tổng kết & liên hệ" />
  </div>
);

export const WithPhoto: Story = () => (
  <div style={{ padding: 48, maxWidth: 200 }}>
    <MemberCard name="Huỳnh Nhi" role="T2-1" task="Thực tiễn đoàn kết" photoUrl="https://placehold.co/80x80/F5F0E8/CC0000?text=HN" />
  </div>
);

export const Grid: Story = () => (
  <div style={{ padding: 48, display: "grid", gridTemplateColumns: "repeat(4, 180px)", gap: 20 }}>
    <MemberCard name="Nhân" role="Nhóm trưởng" task="T3-4" />
    <MemberCard name="Huỳnh Nhi" role="T2-1" task="Thực tiễn đoàn kết" />
    <MemberCard name="Thục Nhi" role="T1-1" task="Cương lĩnh dân tộc" />
    <MemberCard name="Châu Nhi" role="T1-2" task="Năm đặc trưng dân tộc" />
  </div>
);
