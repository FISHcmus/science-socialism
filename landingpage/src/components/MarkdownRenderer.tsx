import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
  content: string;
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => (
  <div className="markdown-content font-body text-lg leading-relaxed text-foreground">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
  </div>
);
