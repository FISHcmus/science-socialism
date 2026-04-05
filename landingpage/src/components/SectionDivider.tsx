import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { DiamondIcon } from "./icons";

type SectionDividerProps = {
  variant?: "default" | "ornament";
  className?: string;
};

export const SectionDivider: React.FC<SectionDividerProps> = ({ variant = "default", className }) => {
  if (variant === "ornament") {
    return (
      <div className={cn("flex items-center gap-0 py-6", className)}>
        <Separator className="flex-1 bg-primary h-[4px]" />
        <div className="px-4 text-primary text-2xl">★</div>
        <Separator className="flex-1 bg-primary h-[4px]" />
      </div>
    );
  }
  return <div className={cn("h-[6px] bg-primary my-6", className)} />;
};
