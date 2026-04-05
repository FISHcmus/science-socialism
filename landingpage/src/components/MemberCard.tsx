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
  <Card className="chevron-corner hover:border-primary text-center">
    <CardContent className="flex flex-col items-center gap-3 py-6 px-6">
      <Avatar className="size-20 rounded-sm border-3 border-primary">
        {photoUrl ? (
          <AvatarImage src={photoUrl} alt={name} className="object-cover" />
        ) : null}
        <AvatarFallback className="rounded-sm bg-muted font-heading font-bold text-[32px] text-primary">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div>
        <div className="font-heading font-bold text-lg text-foreground mb-1">{name}</div>
        <div className="font-heading font-semibold text-xs uppercase tracking-widest text-primary mb-1">{role}</div>
        <div className="font-body text-sm text-muted-foreground">{task}</div>
      </div>
    </CardContent>
  </Card>
);
