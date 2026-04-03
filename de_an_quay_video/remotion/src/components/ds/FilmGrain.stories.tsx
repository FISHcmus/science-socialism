import type { Story, StoryDefault } from "@ladle/react";
import { FilmGrain } from "./FilmGrain";

export default {
  title: "DS/FilmGrain",
} satisfies StoryDefault;

export const Default: Story = () => (
  <div style={{ position: "relative", width: 960, height: 540, background: "#F7F3EE" }}>
    <FilmGrain frame={0} opacity={0.08} blendMode="overlay" />
  </div>
);

export const Frame42: Story = () => (
  <div style={{ position: "relative", width: 960, height: 540, background: "#F7F3EE" }}>
    <FilmGrain frame={42} opacity={0.08} blendMode="overlay" />
  </div>
);

export const HighOpacity: Story = () => (
  <div style={{ position: "relative", width: 960, height: 540, background: "#F7F3EE" }}>
    <FilmGrain frame={0} opacity={0.2} blendMode="overlay" />
  </div>
);
