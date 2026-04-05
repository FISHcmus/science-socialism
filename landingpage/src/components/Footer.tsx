import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { StarIcon } from "./icons";

export const Footer: React.FC = () => (
  <footer style={{
    background: COLORS.ink,
    padding: "48px 80px",
  }}>
    <div style={{
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <StarIcon size={16} color={COLORS.gold} />
          <span style={{
            fontFamily: FONT.heading,
            fontWeight: 700,
            fontSize: TEXT.small.size,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: COLORS.gold,
          }}>
            BAA00103 - CNXHKH
          </span>
        </div>
        <div style={{
          fontFamily: FONT.body,
          fontSize: TEXT.small.size,
          color: "rgba(250,250,247,0.5)",
          lineHeight: 1.8,
        }}>
          Học kỳ 2 - 2025-2026<br />
          Trường Đại học Khoa học Tự nhiên<br />
          Đại học Quốc gia TP.HCM
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{
          fontFamily: FONT.heading,
          fontWeight: 600,
          fontSize: TEXT.small.size,
          color: "rgba(250,250,247,0.7)",
          marginBottom: 8,
        }}>
          Nhóm 7
        </div>
        <div style={{
          fontFamily: FONT.body,
          fontSize: TEXT.small.size,
          color: "rgba(250,250,247,0.4)",
          lineHeight: 1.8,
        }}>
          Nhóm trưởng: Nguyễn Hữu Thiện Nhân<br />
          &copy; 2026
        </div>
      </div>
    </div>
  </footer>
);
