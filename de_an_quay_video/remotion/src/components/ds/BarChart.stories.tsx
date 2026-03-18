import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarChart } from "./BarChart";

const sampleData = [
  { label: "Miền Bắc", value: 85 },
  { label: "Miền Trung", value: 78 },
  { label: "Miền Nam", value: 90 },
  { label: "Tây Nguyên", value: 72 },
  { label: "Tây Bắc", value: 68 },
];

const meta: Meta<typeof BarChart> = {
  title: "DS/BarChart",
  component: BarChart,
  args: {
    data: sampleData,
    maxHeight: 300,
    showValues: true,
    suffix: "%",
    barProgress: 1,
    barOpacity: 1,
  },
};
export default meta;

type Story = StoryObj<typeof BarChart>;

export const Default: Story = {};

export const HalfProgress: Story = {
  args: { barProgress: 0.5 },
};

export const NoValues: Story = {
  args: { showValues: false },
};
