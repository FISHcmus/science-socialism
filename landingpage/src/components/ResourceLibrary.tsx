import React from "react";
import { cn } from "@/lib/utils";

type ResourceLibraryProps = {
  children: React.ReactNode;
  className?: string;
};

export const ResourceLibrary: React.FC<ResourceLibraryProps> = ({ children, className }) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
    {children}
  </div>
);
