import React from "react";
import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  courseCode?: string;
  title?: string;
  subtitle?: string;
  semester?: string;
  onWatchVideo?: () => void;
  onResources?: () => void;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  courseCode = "BAA00103",
  title = "Scientific Socialism",
  subtitle = "University of Science - VNU-HCM",
  semester = "Semester 2, 2025-2026",
  onWatchVideo,
  onResources,
}) => (
  <section className="relative py-28 px-8 overflow-hidden bg-background star-watermark">
    {/* Diagonal red slash across top */}
    <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />
    {/* Oversized background text */}
    <div className="absolute top-[-40px] right-[-20px] font-propaganda text-[280px] leading-none text-primary/[0.04] uppercase pointer-events-none select-none z-0">
      CNXH
    </div>
    <div className="relative z-10 max-w-[1200px] mx-auto">
      <span className="section-label text-sm tracking-[12px]">{courseCode}</span>
      <div className="accent-line my-4 w-full animate-[sweep_0.8s_ease-out_forwards]" />
      <h1 className="display-text text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[0.95] mb-4 animate-[slam-down_0.5s_ease-out] stamp-text tracking-[-2px]">
        {title}
      </h1>
      <p className="font-body text-xl leading-relaxed text-muted-foreground max-w-2xl mb-2 uppercase tracking-wider">
        {subtitle}
      </p>
      <p className="font-heading font-bold text-sm uppercase tracking-[6px] text-primary mb-10">
        {semester}
      </p>
      <div className="flex gap-4">
        {onWatchVideo && (
          <Button size="lg" onClick={onWatchVideo}>
            Watch Video
          </Button>
        )}
        {onResources && (
          <Button variant="stamp" size="lg" onClick={onResources}>
            Resources
          </Button>
        )}
      </div>
    </div>
    {/* Bottom red slash */}
    <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
  </section>
);
