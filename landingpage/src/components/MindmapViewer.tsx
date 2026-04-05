import React, { useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MarkdownRenderer } from "./MarkdownRenderer";

type MindmapViewerProps = {
  title: string;
  content: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const MindmapViewer: React.FC<MindmapViewerProps> = ({ title, content, open, onOpenChange }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto border-3 border-primary">
      <DialogHeader>
        <DialogTitle className="font-[var(--font-propaganda)] font-bold text-3xl text-foreground">{title}</DialogTitle>
      </DialogHeader>
      <MarkdownRenderer content={content} />
    </DialogContent>
  </Dialog>
);

export function useMindmapViewer() {
  const [state, setState] = useState<{ open: boolean; title: string; content: string }>({
    open: false,
    title: "",
    content: "",
  });

  const openMindmap = useCallback((title: string, content: string) => {
    setState({ open: true, title, content });
  }, []);

  const onOpenChange = useCallback((open: boolean) => {
    setState((prev) => ({ ...prev, open }));
  }, []);

  return { ...state, openMindmap, onOpenChange };
}
