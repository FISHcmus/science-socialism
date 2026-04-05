import type { Story, StoryDefault } from "@ladle/react";
import { Navbar } from "./Navbar";

export default {
  title: "Layout/Navbar",
} satisfies StoryDefault;

export const Default: Story = () => <Navbar />;

export const WithSearch: Story = () => <Navbar onSearch={(q) => console.log("Search:", q)} />;
