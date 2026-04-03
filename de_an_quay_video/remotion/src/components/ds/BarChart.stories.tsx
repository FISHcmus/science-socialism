import type { Story, StoryDefault } from "@ladle/react";
import { BarChart } from "./BarChart";

export default {
  title: "DS/BarChart",
} satisfies StoryDefault;

const sampleData = [
  { label: "Miền Bắc", value: 85 },
  { label: "Miền Trung", value: 78 },
  { label: "Miền Nam", value: 90 },
  { label: "Tây Nguyên", value: 72 },
  { label: "Tây Bắc", value: 68 },
];

export const Default: Story = () => (
  <BarChart data={sampleData} maxHeight={300} showValues suffix="%" barProgress={1} barOpacity={1} />
);

export const HalfProgress: Story = () => (
  <BarChart data={sampleData} maxHeight={300} showValues suffix="%" barProgress={0.5} barOpacity={1} />
);

export const NoValues: Story = () => (
  <BarChart data={sampleData} maxHeight={300} showValues={false} suffix="%" barProgress={1} barOpacity={1} />
);
