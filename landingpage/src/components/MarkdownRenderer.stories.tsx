import type { Story, StoryDefault } from "@ladle/react";
import { MarkdownRenderer } from "./MarkdownRenderer";

export default {
  title: "Primitives/MarkdownRenderer",
} satisfies StoryDefault;

const sampleContent = `# Chương 1: Nhập môn CNXHKH

## I. Sự ra đời của CNXHKH

CNXHKH theo nghĩa rộng: toàn bộ **CN Mác-Lênin**. Theo nghĩa hẹp: 1 trong 3 bộ phận hợp thành CN Mác-Lênin:

- Triết học
- Kinh tế chính trị
- CNXHKH

### 1. Hoàn cảnh lịch sử

> **Định nghĩa:** CNXHKH là khoa học về sứ mệnh lịch sử của giai cấp công nhân.

| Phong trào | Nước | Năm |
|---|---|---|
| Hiến chương | Anh | 1836-1848 |
| Công nhân dệt Xilêdi | Đức | 1844 |
| Công nhân dệt Lion | Pháp | 1831, 1834 |

---

Khẩu hiệu năm 1831: *"Sống có việc làm hay chết trong đấu tranh"*
`;

export const Default: Story = () => (
  <div style={{ padding: 48 }}>
    <MarkdownRenderer content={sampleContent} />
  </div>
);

export const Short: Story = () => (
  <div style={{ padding: 48 }}>
    <MarkdownRenderer content="## Tóm tắt\n\nĐây là một đoạn văn ngắn với **từ khóa quan trọng** được in đậm.\n\n- Điểm 1\n- Điểm 2\n- Điểm 3" />
  </div>
);
