import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

export const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => (
  <Card className={cn("stamp-border-top chevron-corner hover:border-primary cursor-default text-center hover:translate-y-[-2px] transition-transform")}>
    <CardContent className="flex flex-col items-center gap-2 py-8 px-6">
      {icon && <div className="mb-1 text-primary">{icon}</div>}
      <div className="font-propaganda text-[64px] leading-[1] text-primary stamp-text">{value}</div>
      <div className="font-heading font-bold text-xs uppercase tracking-[5px] text-muted-foreground">{label}</div>
    </CardContent>
  </Card>
);
