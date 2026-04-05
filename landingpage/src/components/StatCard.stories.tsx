import type { Story, StoryDefault } from "@ladle/react";
import { StatCard } from "./StatCard";
import { BookIcon, PeopleIcon, PlayIcon, StarIcon } from "./icons";

export default {
  title: "Primitives/StatCard",
} satisfies StoryDefault;

export const Single: Story = () => (
  <div style={{ padding: 48, maxWidth: 240 }}>
    <StatCard value="7" label="Chương" icon={<BookIcon size={28} color="#CC0000" />} />
  </div>
);

export const FourInRow: Story = () => (
  <div style={{ padding: 48, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, maxWidth: 960 }}>
    <StatCard value="7" label="Chương" icon={<BookIcon size={28} color="#CC0000" />} />
    <StatCard value="9" label="Thành viên" icon={<PeopleIcon size={28} color="#CC0000" />} />
    <StatCard value="15:00" label="Phút video" icon={<PlayIcon size={28} color="#CC0000" />} />
    <StatCard value="50/50" label="Quá trình / Cuối kỳ" icon={<StarIcon size={28} color="#DAA520" />} />
  </div>
);
