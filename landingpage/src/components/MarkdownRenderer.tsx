import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { COLORS, FONT, TEXT } from "../tokens";

type MarkdownRendererProps = {
  content: string;
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => (
  <div
    className="markdown-content"
    style={{
      fontFamily: FONT.body,
      fontSize: TEXT.body.size,
      lineHeight: TEXT.body.lineHeight,
      color: COLORS.ink,
      maxWidth: 720,
    }}
  >
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
  </div>
);
