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
  <Card>
    <CardHeader>
      <span className="section-label text-xs">Learning Objectives</span>
      <div className="accent-line w-[40%]" />
    </CardHeader>
    <CardContent>
      <ul className="list-none p-0 m-0 flex flex-col gap-4">
        {objectives.map((obj, i) => (
          <li key={i} className="flex items-start gap-3">
            <StarIcon size={16} className="mt-1 shrink-0 text-primary" />
            <span className="font-body text-lg leading-relaxed text-foreground">{obj}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
