import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type MemberCardProps = {
  name: string;
  role: string;
  task: string;
  description?: string;
  photoUrl?: string;
  leader?: boolean;
};

export const MemberCard: React.FC<MemberCardProps> = ({ name, role, task, description, photoUrl, leader }) => {
  if (leader) {
    return (
      <Card className="constructivist-frame hover:border-primary transition-transform star-watermark">
        <CardContent className="flex flex-col md:flex-row items-center gap-6 py-8 px-8">
          <Avatar className="size-40 border-[5px] border-primary shrink-0">
            {photoUrl ? (
              <AvatarImage src={photoUrl} alt={name} className="object-cover" />
            ) : null}
            <AvatarFallback className="bg-primary/10 font-propaganda text-[72px] text-primary">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <div className="font-display-vi font-bold text-3xl text-foreground mb-1 uppercase tracking-wide">{name}</div>
            <div className="font-display-vi text-base uppercase tracking-[6px] text-primary mb-2">{role}</div>
            <div className="font-heading font-bold text-sm text-muted-foreground uppercase tracking-wider mb-1">{task}</div>
            {description && (
              <div className="font-body text-sm text-muted-foreground/70 normal-case tracking-normal">{description}</div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
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
          {description && (
            <div className="font-body text-xs text-muted-foreground/70 mt-1 normal-case tracking-normal">{description}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
