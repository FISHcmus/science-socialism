import React from "react";
import { MemberCard } from "./MemberCard";
import { SectionHeader } from "./SectionHeader";

type Member = {
  name: string;
  role: string;
  task: string;
  photoUrl?: string;
};

type MemberGridProps = {
  members?: Member[];
};

const defaultMembers: Member[] = [
  { name: "Nhân", role: "Nhóm trưởng", task: "T3-4: Tổng kết & liên hệ" },
  { name: "Huỳnh Nhi", role: "T2-1", task: "Thực tiễn đoàn kết" },
  { name: "Thục Nhi", role: "T1-1", task: "Cương lĩnh dân tộc" },
  { name: "Châu Nhi", role: "T1-2", task: "Năm đặc trưng dân tộc" },
  { name: "Phụng Nhi", role: "T1-3", task: "Nguyên tắc tôn giáo" },
  { name: "Quỳnh Như", role: "T3-1", task: "Giao lưu văn hóa" },
  { name: "Tố Như", role: "T3-2", task: "Nhận diện tin giả" },
  { name: "Ý Như", role: "T3-3", task: "Tình nguyện cộng đồng" },
  { name: "Phú", role: "T2-2", task: "Tôn giáo Việt Nam" },
];

export const MemberGrid: React.FC<MemberGridProps> = ({ members = defaultMembers }) => (
  <section style={{ padding: "0 80px", maxWidth: 1200, margin: "0 auto" }}>
    <SectionHeader label="Phần 06" title="Nhóm 7" />
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      gap: 20,
    }}>
      {members.map((m) => (
        <MemberCard key={m.name} name={m.name} role={m.role} task={m.task} photoUrl={m.photoUrl} />
      ))}
    </div>
  </section>
);
