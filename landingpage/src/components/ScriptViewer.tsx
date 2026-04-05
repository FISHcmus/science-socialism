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
  <div className={cn("rounded-sm border border-white/10 bg-white/[0.03]", className)}>
    <Accordion type="single" collapsible className="w-full">
      {sections.map((section) => (
        <AccordionItem key={section.id} value={section.id} className="border-white/10">
          <AccordionTrigger className="px-5 py-4 text-white/90 hover:text-white hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <span className="font-heading font-bold text-base">{section.memberName}</span>
              <span className="font-heading text-xs uppercase tracking-widest text-primary">
                {section.task}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 text-white/70 font-body text-base leading-relaxed">
            {section.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);
