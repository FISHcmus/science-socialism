import React, { useState } from "react";
import type { Story, StoryDefault } from "@ladle/react";
import { MindmapViewer } from "./MindmapViewer";

export default {
  title: "Complex/MindmapViewer",
} satisfies StoryDefault;

const sampleMindmap = `# Chuong 1: Nhap mon CNXHKH

## I. Su ra doi cua CNXHKH
- CNXHKH theo nghia rong: toan bo CN Mac-Lenin
- CNXHKH theo nghia hep: 1 trong 3 bo phan hop thanh

### 1. Hoan canh lich su
- **Dieu kien kinh te - xa hoi**
  - Nhung nam 40 the ky XIX
  - Nen dai cong nghiep -> mau thuan
- **Tien de ly luan**
  - Triet hoc co dien Duc
  - Kinh te chinh tri co dien Anh
  - CNXH khong tuong Phap

## II. Doi tuong nghien cuu
- Quy luat chinh tri - xa hoi
- Nhung van de chinh tri - xa hoi co tinh quy luat
`;

export const Open: Story = () => (
  <MindmapViewer isOpen={true} content={sampleMindmap} title="Chuong 1: Nhap mon CNXHKH" onClose={() => {}} />
);

export const Interactive: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 48 }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          fontFamily: "'Josefin Sans'",
          fontWeight: 600,
          fontSize: 14,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "#DAA520",
          background: "transparent",
          border: "1px solid #DAA520",
          padding: "8px 16px",
          cursor: "pointer",
          borderRadius: 2,
        }}
      >
        Open Mindmap
      </button>
      <MindmapViewer isOpen={open} content={sampleMindmap} title="Chuong 1" onClose={() => setOpen(false)} />
    </div>
  );
};
