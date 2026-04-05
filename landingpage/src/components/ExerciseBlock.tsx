import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

type Tier = {
  label: string;
  percent: string;
  description: string;
};

type ExerciseBlockProps = {
  prompt: string;
  tiers?: Tier[];
};

const defaultTiers: Tier[] = [
  { label: "Theoretical Basis", percent: "35%", description: "Analyze the theory of building national solidarity" },
  { label: "Vietnamese Practice", percent: "15%", description: "Connect practice of applying the solidarity policy" },
  { label: "Student Responsibility", percent: "50%", description: "Student responsibility in building national solidarity" },
];

export const ExerciseBlock: React.FC<ExerciseBlockProps> = ({ prompt, tiers = defaultTiers }) => (
  <Card className="constructivist-frame border-0 star-watermark">
    <CardHeader>
      <span className="section-label text-sm tracking-[8px]">Exercise Analysis</span>
      <div className="accent-line w-full" />
    </CardHeader>
    <CardContent className="space-y-4 relative z-10">
      <p className="font-display-vi text-xl text-foreground leading-snug uppercase">{prompt}</p>
      <div className="grid gap-3 sm:grid-cols-3">
        {tiers.map((tier, i) => (
          <Card key={i} className="bg-muted/50 stamp-border-top">
            <CardContent className="py-4 px-4">
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-heading font-bold text-sm text-foreground uppercase tracking-wider">{tier.label}</span>
                <span className="font-propaganda text-primary text-2xl">{tier.percent}</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">{tier.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
);
