import React from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { SectionHeader } from "./SectionHeader";

type DiscussionHighlightProps = {
  quote?: string;
  references?: string[];
};

const defaultQuote = "Đoàn kết dân tộc trong bối cảnh toàn cầu hóa - thách thức nào cho sinh viên?";
const defaultRefs = ["Ch.5 Dân tộc", "Ch.6 Tôn giáo"];

export const DiscussionHighlight: React.FC<DiscussionHighlightProps> = ({
  quote = defaultQuote,
  references = defaultRefs,
}) => (
  <section style={{ padding: "0 80px", maxWidth: 1200, margin: "0 auto" }}>
    <SectionHeader label="Phần 07" title="Thảo luận" />

    <div className="constructivist-frame" style={{
      background: COLORS.surfaceWhite,
      maxWidth: 720,
    }}>
      <blockquote style={{
        fontFamily: FONT.display,
        fontWeight: 600,
        fontSize: TEXT.h2.size,
        lineHeight: 1.3,
        color: COLORS.ink,
        margin: 0,
        fontStyle: "italic",
      }}>
        "{quote}"
      </blockquote>
      {references.length > 0 && (
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          <span style={{
            fontFamily: FONT.heading,
            fontWeight: 600,
            fontSize: TEXT.label.size,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: COLORS.inkMuted,
          }}>
            Lien he:
          </span>
          {references.map((ref, i) => (
            <span key={i} style={{
              fontFamily: FONT.heading,
              fontWeight: 600,
              fontSize: TEXT.label.size,
              color: COLORS.gold,
              background: COLORS.goldLight,
              padding: "2px 10px",
              borderRadius: 2,
            }}>
              {ref}
            </span>
          ))}
        </div>
      )}
    </div>
  </section>
);
