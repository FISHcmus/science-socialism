"use client";

import React from "react";
import { MindmapFlow } from "@/components/MindmapFlow";
import { chapterOutlines } from "@/data/chapterOutlines";
import { chapter6Detailed } from "@/data/chapter6Detailed";

type MindmapPageProps = {
  chapterNumber: number;
};

export const MindmapPage: React.FC<MindmapPageProps> = ({ chapterNumber }) => {
  // Chapter 6 uses detailed data + radial layout
  const isChapter6 = chapterNumber === 6;
  const tree = isChapter6 ? chapter6Detailed : chapterOutlines[chapterNumber];

  if (!tree) {
    return (
      <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center">
        <p className="font-display-vi text-2xl uppercase">Chapter {chapterNumber} not found</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[var(--color-cream)] flex flex-col overflow-hidden">
      {/* Header bar */}
      <div className="bg-black px-6 py-3 flex items-center justify-between border-b-4 border-[var(--color-blood)]">
        <a href="/" className="font-propaganda text-[var(--color-cream)] text-sm tracking-[4px] hover:text-[var(--color-blood)] transition-colors">
          &larr; BACK
        </a>
        <h1 className="font-display-vi text-[var(--color-cream)] text-lg font-bold uppercase tracking-wider">
          Chapter {chapterNumber}: {tree.label}
        </h1>
        <div className="flex gap-4">
          {chapterNumber > 1 && (
            <a href={`/mindmap/${chapterNumber - 1}`} className="font-propaganda text-[var(--color-cream)] text-sm tracking-[2px] hover:text-[var(--color-blood)] transition-colors">
              &larr; PREV
            </a>
          )}
          {chapterNumber < 7 && (
            <a href={`/mindmap/${chapterNumber + 1}`} className="font-propaganda text-[var(--color-cream)] text-sm tracking-[2px] hover:text-[var(--color-blood)] transition-colors">
              NEXT &rarr;
            </a>
          )}
        </div>
      </div>
      {/* Full-page mindmap */}
      <div className="flex-1">
        <MindmapFlow tree={tree} fullPage layout={isChapter6 ? "radial" : "tree"} />
      </div>
    </div>
  );
};
