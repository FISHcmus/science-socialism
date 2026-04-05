import React, { useState } from "react";
import { COLORS, FONT, TEXT } from "../tokens";
import { MarkdownRenderer } from "./MarkdownRenderer";

type MindmapViewerProps = {
  content: string;
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

export const MindmapViewer: React.FC<MindmapViewerProps> = ({ content, title, isOpen = false, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: COLORS.overlay,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: COLORS.surfaceWhite,
          border: `2px solid ${COLORS.gold}`,
          borderRadius: 2,
          maxWidth: 800,
          maxHeight: "80vh",
          width: "90%",
          overflow: "auto",
          padding: 48,
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "transparent",
            border: "none",
            fontFamily: FONT.heading,
            fontSize: TEXT.h3.size,
            color: COLORS.inkMuted,
            cursor: "pointer",
            padding: "4px 8px",
            lineHeight: 1,
          }}
        >
          &times;
        </button>

        {title && (
          <>
            <span className="section-label" style={{ fontSize: TEXT.label.size }}>Mindmap</span>
            <h3 style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: TEXT.h1.size,
              color: COLORS.ink,
              margin: "8px 0 24px",
            }}>
              {title}
            </h3>
            <div className="accent-line" style={{ marginBottom: 24 }} />
          </>
        )}

        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
};

// Standalone hook for managing mindmap state
export const useMindmapViewer = () => {
  const [state, setState] = useState<{ isOpen: boolean; content: string; title: string }>({
    isOpen: false,
    content: "",
    title: "",
  });

  return {
    ...state,
    open: (content: string, title: string) => setState({ isOpen: true, content, title }),
    close: () => setState((s) => ({ ...s, isOpen: false })),
  };
};
