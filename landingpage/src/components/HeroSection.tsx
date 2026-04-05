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
  <section className="relative py-24 px-8 overflow-hidden bg-background">
    <div className="max-w-[1200px] mx-auto">
      <span className="section-label text-xs">{courseCode}</span>
      <div className="accent-line my-3 w-[60%] animate-[sweep_1s_ease-out_forwards]" />
      <h1 className="display-text text-[72px] leading-[1.05] mb-4 animate-[slide-in_0.6s_ease-out]">
        {title}
      </h1>
      <p className="font-body text-xl leading-relaxed text-muted-foreground max-w-2xl mb-2">
        {subtitle}
      </p>
      <p className="font-heading font-semibold text-sm uppercase tracking-widest text-primary mb-8">
        {semester}
      </p>
      <div className="flex gap-4">
        {onWatchVideo && (
          <Button size="lg" onClick={onWatchVideo}>
            Watch Video
          </Button>
        )}
        {onResources && (
          <Button variant="outline" size="lg" onClick={onResources}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Resources
          </Button>
        )}
      </div>
    </div>
  </section>
);
