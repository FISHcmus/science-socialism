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
      <div className={cn("flex items-center gap-4 py-8", className)}>
        <Separator className="flex-1 bg-border" />
        <DiamondIcon size={12} className="text-primary" />
        <Separator className="flex-1 bg-border" />
      </div>
    );
  }
  return <Separator className={cn("my-8 bg-border", className)} />;
};
