import type { Story, StoryDefault } from "@ladle/react";
import { CitationFooter } from "./CitationFooter";

export default {
  title: "DS/CitationFooter",
} satisfies StoryDefault;

export const Default: Story = () => (
  <div style={{ width: 900 }}>
    <CitationFooter text="Giáo trình CNXHKH (2021), Ch.6, I.2b, tr.202-205" opacity={1} />
  </div>
);

export const LongCitation: Story = () => (
  <div style={{ width: 900 }}>
    <CitationFooter text="GT CNXHKH (2021) tr.210-212; QĐ 1719/QĐ-TTg; ĐHKHTN (2025) Mùa hè xanh" opacity={1} />
  </div>
);
