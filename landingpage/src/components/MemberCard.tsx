import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type MemberCardProps = {
  name: string;
  role: string;
  task: string;
  photoUrl?: string;
};

export const MemberCard: React.FC<MemberCardProps> = ({ name, role, task, photoUrl }) => (
  <Card className="stamp-border-top chevron-corner hover:border-primary text-center hover:translate-y-[-2px] transition-transform">
    <CardContent className="flex flex-col items-center gap-3 py-6 px-6">
      <Avatar className="size-20 border-3 border-primary">
        {photoUrl ? (
          <AvatarImage src={photoUrl} alt={name} className="object-cover" />
        ) : null}
        <AvatarFallback className="bg-primary/10 font-propaganda text-[36px] text-primary">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div>
        <div className="font-heading font-bold text-lg text-foreground mb-1 uppercase tracking-wide">{name}</div>
        <div className="font-heading font-bold text-xs uppercase tracking-[5px] text-primary mb-1">{role}</div>
        <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">{task}</div>
      </div>
    </CardContent>
  </Card>
);
