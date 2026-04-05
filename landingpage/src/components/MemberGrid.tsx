import React from "react";
import { cn } from "@/lib/utils";

type MemberGridProps = {
  children: React.ReactNode;
  className?: string;
};

export const MemberGrid: React.FC<MemberGridProps> = ({ children, className }) => (
  <div className={cn("grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", className)}>
    {children}
  </div>
);
