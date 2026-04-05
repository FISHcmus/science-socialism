import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { StarIcon } from "./icons";

type LearningObjectivesProps = {
  objectives?: string[];
};

const defaultObjectives = [
  "Understand the scientific and revolutionary nature of Scientific Socialism",
  "Master the laws of social movement and development",
  "Creatively apply theory to Vietnamese practice",
  "Recognize student responsibility in building socialism",
];

export const LearningObjectives: React.FC<LearningObjectivesProps> = ({ objectives = defaultObjectives }) => (
  <Card className="stamp-border-top">
    <CardHeader>
      <span className="section-label text-sm tracking-[8px]">Learning Objectives</span>
      <div className="accent-line w-full" />
    </CardHeader>
    <CardContent>
      <ul className="list-none p-0 m-0 flex flex-col gap-4">
        {objectives.map((obj, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-primary text-xl mt-0.5 shrink-0">★</span>
            <span className="font-body text-lg leading-relaxed text-foreground uppercase">{obj}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
