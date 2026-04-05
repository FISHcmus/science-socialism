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
  <footer className="bg-black text-cream py-12 px-8 border-t-4 border-primary">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-propaganda text-2xl tracking-[4px] uppercase">{courseCode}</div>
          <div className="font-body text-sm text-cream/50 uppercase tracking-wider">{courseName}</div>
        </div>
        <div className="font-heading font-bold text-sm text-cream/30 uppercase tracking-[4px]">
          Group 7 - HK2 {year}
        </div>
      </div>
      <Separator className="my-6 bg-[var(--color-ds-cream)]/10 h-[2px]" />
      <div className="font-body text-xs text-cream/20 text-center uppercase tracking-[6px]">
        University of Science - VNU-HCM
      </div>
    </div>
  </footer>
);
