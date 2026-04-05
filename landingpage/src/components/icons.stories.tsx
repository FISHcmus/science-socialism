import type { Story, StoryDefault } from "@ladle/react";
import { StarIcon, DiamondIcon, ArrowIcon, PlayIcon, BookIcon, PeopleIcon, DownloadIcon, SearchIcon, ChevronIcon } from "./icons";

export default {
  title: "Primitives/Icons",
} satisfies StoryDefault;

export const AllIcons: Story = () => (
  <div style={{ display: "flex", gap: 32, flexWrap: "wrap", padding: 48, background: "#FAFAF7" }}>
    {[
      { Icon: StarIcon, label: "Star", props: {} },
      { Icon: DiamondIcon, label: "Diamond", props: {} },
      { Icon: ArrowIcon, label: "Arrow", props: { color: "#1A1A1A" } },
      { Icon: PlayIcon, label: "Play", props: { color: "#CC0000" } },
      { Icon: BookIcon, label: "Book", props: { color: "#1A1A1A" } },
      { Icon: PeopleIcon, label: "People", props: { color: "#1A1A1A" } },
      { Icon: DownloadIcon, label: "Download", props: { color: "#1A1A1A" } },
      { Icon: SearchIcon, label: "Search", props: { color: "#7A7A7A" } },
      { Icon: ChevronIcon, label: "Chevron", props: { color: "#1A1A1A" } },
    ].map(({ Icon, label, props }) => (
      <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Icon size={32} {...props} />
        <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 12, color: "#7A7A7A", textTransform: "uppercase", letterSpacing: 2 }}>{label}</span>
      </div>
    ))}
  </div>
);

export const GoldStars: Story = () => (
  <div style={{ display: "flex", gap: 16, padding: 48 }}>
    <StarIcon size={16} />
    <StarIcon size={24} />
    <StarIcon size={32} />
    <StarIcon size={48} />
  </div>
);

export const OnDarkBg: Story = () => (
  <div style={{ display: "flex", gap: 32, padding: 48, background: "#1A1A1A" }}>
    <StarIcon size={32} color="#DAA520" />
    <DiamondIcon size={32} color="#CC0000" />
    <ArrowIcon size={32} color="#FAFAF7" />
    <PlayIcon size={32} color="#DAA520" />
    <BookIcon size={32} color="#FAFAF7" />
  </div>
);
