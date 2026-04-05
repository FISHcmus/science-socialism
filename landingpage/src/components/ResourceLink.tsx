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
    <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline">
      <Card className="hover:border-primary hover:shadow-sm cursor-pointer">
        <CardContent className="flex items-start gap-4 py-5 px-5">
          <div className="size-10 bg-destructive/10 rounded-sm flex items-center justify-center shrink-0 text-primary">
            <Icon size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-heading font-semibold text-lg text-foreground mb-1">{title}</div>
            <div className="font-body text-sm text-muted-foreground mb-1.5">{description}</div>
            <Badge variant="secondary" className="font-heading font-semibold text-xs uppercase tracking-widest text-primary">
              {typeLabels[type]}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
