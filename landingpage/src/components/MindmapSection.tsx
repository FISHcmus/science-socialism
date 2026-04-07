"use client";

import dynamic from "next/dynamic";
import type { HeadingNode } from "@/data/chapterOutlines";

const MindmapFlow = dynamic(
  () => import("@/components/MindmapFlow").then((m) => ({ default: m.MindmapFlow })),
  {
    ssr: false,
    loading: () => (
      <div className="h-[600px] border-3 border-primary bg-muted animate-pulse" />
    ),
  }
);

export function MindmapSection({ tree, layout }: { tree: HeadingNode; layout?: "tree" | "radial" }) {
  return (
    <div className="border-3 border-primary" style={{ height: 600 }}>
      <MindmapFlow tree={tree} layout={layout ?? "radial"} />
    </div>
  );
}
