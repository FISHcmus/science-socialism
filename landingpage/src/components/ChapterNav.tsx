import React from "react";
import { cn } from "@/lib/utils";

type ChapterNavProps = {
  children: React.ReactNode;
  className?: string;
};

export const ChapterNav: React.FC<ChapterNavProps> = ({ children, className }) => (
  <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
    {children}
  </div>
);
