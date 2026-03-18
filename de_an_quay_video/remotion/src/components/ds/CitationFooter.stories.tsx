import type { Meta, StoryObj } from "@storybook/react-vite";
import { CitationFooter } from "./CitationFooter";

const meta: Meta<typeof CitationFooter> = {
  title: "DS/CitationFooter",
  component: CitationFooter,
  args: {
    text: "Giáo trình CNXHKH (2021), Ch.6, I.2b, tr.202-205",
    opacity: 1,
  },
  argTypes: {
    opacity: { control: { type: "range", min: 0, max: 1, step: 0.05 } },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: "radial-gradient(ellipse at center, #1a1a2e, #0a0a0f)",
          padding: "48px 32px",
          width: 900,
        }}
      >
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof CitationFooter>;

export const Default: Story = {};

export const LongCitation: Story = {
  args: {
    text: "GT CNXHKH (2021) tr.210-212; QĐ 1719/QĐ-TTg; ĐHKHTN (2025) Mùa hè xanh",
  },
};
