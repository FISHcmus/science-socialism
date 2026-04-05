import React from "react";
import { Separator } from "@/components/ui/separator";

type FooterProps = {
  courseCode?: string;
  courseName?: string;
  year?: string;
};

export const Footer: React.FC<FooterProps> = ({
  courseCode = "BAA00103",
  courseName = "Scientific Socialism",
  year = "2025-2026",
}) => (
  <footer className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))] py-12 px-8">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-heading font-bold text-lg">{courseCode}</div>
          <div className="font-body text-sm text-white/60">{courseName}</div>
        </div>
        <div className="font-body text-sm text-white/40">
          Nhóm 7 - HK2 {year}
        </div>
      </div>
      <Separator className="my-6 bg-white/10" />
      <div className="font-body text-xs text-white/30 text-center">
        University of Science - VNU-HCM
      </div>
    </div>
  </footer>
);
