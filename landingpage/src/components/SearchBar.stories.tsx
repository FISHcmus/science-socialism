import type { Story, StoryDefault } from "@ladle/react";
import { SearchBar } from "./SearchBar";

export default {
  title: "Primitives/SearchBar",
} satisfies StoryDefault;

export const Default: Story = () => (
  <div style={{ padding: 48 }}>
    <SearchBar onSearch={(q) => console.log("Search:", q)} />
  </div>
);

export const OnDarkBg: Story = () => (
  <div style={{ padding: 48, background: "#1A1A1A" }}>
    <SearchBar placeholder="Tìm nội dung..." />
  </div>
);
