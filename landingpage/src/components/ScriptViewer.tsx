"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type ScriptSection = {
  id: string;
  memberName: string;
  task: string;
  content: string;
};

type ScriptViewerProps = {
  sections: ScriptSection[];
  className?: string;
};

export const ScriptViewer: React.FC<ScriptViewerProps> = ({ sections, className }) => (
  <div className={cn("border-3 border-[var(--color-ds-cream)]/20 bg-white/[0.03]", className)}>
    <Accordion type="single" collapsible className="w-full">
      {sections.map((section) => (
        <AccordionItem key={section.id} value={section.id} className="border-[var(--color-ds-cream)]/10">
          <AccordionTrigger className="px-5 py-4 text-cream/90 hover:text-cream hover:no-underline hover:bg-white/5">
            <div className="flex items-center gap-3 text-left">
              <span className="font-display-vi text-lg uppercase tracking-wide">{section.memberName}</span>
              <span className="font-heading font-bold text-xs uppercase tracking-[5px] text-primary">
                {section.task}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 text-cream/70 font-body text-base leading-relaxed border-l-4 border-primary ml-5">
            {section.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);
