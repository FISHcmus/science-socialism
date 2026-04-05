import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DownloadIcon, BookIcon, ArrowIcon } from "./icons";

type ResourceLinkProps = {
  title: string;
  description: string;
  href: string;
  type?: "pdf" | "pptx" | "md" | "link";
};

const typeLabels: Record<string, string> = {
  pdf: "PDF",
  pptx: "PPTX",
  md: "Markdown",
  link: "Link",
};

export const ResourceLink: React.FC<ResourceLinkProps> = ({ title, description, href, type = "link" }) => {
  const Icon = type === "link" ? ArrowIcon : type === "md" ? BookIcon : DownloadIcon;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline group">
      <Card className="stamp-border-top hover:border-primary cursor-pointer hover:translate-x-[4px] transition-transform">
        <CardContent className="flex items-start gap-4 py-5 px-5">
          <div className="size-10 bg-primary/10 flex items-center justify-center shrink-0 text-primary border-2 border-primary/30">
            <Icon size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-heading font-bold text-lg text-foreground mb-1 uppercase tracking-wide">{title}</div>
            <div className="font-body text-sm text-muted-foreground mb-1.5">{description}</div>
            <Badge variant="secondary" className="font-heading font-bold text-xs uppercase tracking-[4px] text-primary border-2 border-primary">
              {typeLabels[type]}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
