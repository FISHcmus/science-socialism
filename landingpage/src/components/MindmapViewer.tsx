import React, { useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MindmapFlow } from "./MindmapFlow";
import { chapterOutlines } from "@/data/chapterOutlines";

type MindmapViewerProps = {
  title: string;
  chapterNumber: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const MindmapViewer: React.FC<MindmapViewerProps> = ({ title, chapterNumber, open, onOpenChange }) => {
  const tree = chapterOutlines[chapterNumber];
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden border-3 border-primary p-4">
        <DialogHeader>
          <DialogTitle className="font-display-vi font-bold text-2xl text-foreground uppercase">{title}</DialogTitle>
        </DialogHeader>
        {tree ? (
          <MindmapFlow tree={tree} />
        ) : (
          <p className="text-muted-foreground text-sm">No outline data for this chapter.</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export function useMindmapViewer() {
  const [state, setState] = useState<{ open: boolean; title: string; chapterNumber: number }>({
    open: false,
    title: "",
    chapterNumber: 0,
  });

  const openMindmap = useCallback((title: string, chapterNumber: number) => {
    setState({ open: true, title, chapterNumber });
  }, []);

  const onOpenChange = useCallback((open: boolean) => {
    setState((prev) => ({ ...prev, open }));
  }, []);

  return { ...state, openMindmap, onOpenChange };
}
