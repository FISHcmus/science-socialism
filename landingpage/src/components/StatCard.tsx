import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

export const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => (
  <Card className={cn("chevron-corner hover:border-primary cursor-default text-center")}>
    <CardContent className="flex flex-col items-center gap-2 py-8 px-6">
      {icon && <div className="mb-1 text-primary">{icon}</div>}
      <div className="font-heading font-bold text-[56px] leading-[1.1] text-primary">{value}</div>
      <div className="font-heading font-semibold text-sm uppercase tracking-[3px] text-muted-foreground">{label}</div>
    </CardContent>
  </Card>
);
