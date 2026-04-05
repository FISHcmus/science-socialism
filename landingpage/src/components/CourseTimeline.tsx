import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Milestone = {
  week: number;
  label: string;
  description: string;
  active?: boolean;
};

type CourseTimelineProps = {
  milestones?: Milestone[];
};

const defaultMilestones: Milestone[] = [
  { week: 1, label: "Opening", description: "Course introduction, group assignment" },
  { week: 4, label: "Midterm", description: "Midterm exam (20%)" },
  { week: 8, label: "Video Due", description: "Group presentation (10%)", active: true },
  { week: 15, label: "Final", description: "Final essay exam (50%)" },
];

export const CourseTimeline: React.FC<CourseTimelineProps> = ({ milestones = defaultMilestones }) => (
  <div className="relative flex items-start justify-between gap-4">
    <div className="absolute top-6 left-0 right-0 h-[2px] bg-border" />
    {milestones.map((ms, i) => (
      <div key={i} className="relative flex flex-col items-center text-center flex-1">
        <div className={cn(
          "size-12 rounded-sm border-2 flex items-center justify-center font-heading font-bold text-lg z-10 bg-background",
          ms.active ? "border-primary text-primary" : "border-border text-muted-foreground"
        )}>
          {ms.week}
        </div>
        <div className="mt-3">
          <div className={cn(
            "font-heading font-bold text-sm",
            ms.active ? "text-primary" : "text-foreground"
          )}>{ms.label}</div>
          <div className="font-body text-xs text-muted-foreground mt-1 max-w-[140px]">{ms.description}</div>
        </div>
      </div>
    ))}
  </div>
);
