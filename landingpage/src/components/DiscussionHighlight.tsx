import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type DiscussionHighlightProps = {
  prompt: string;
  references?: string[];
};

export const DiscussionHighlight: React.FC<DiscussionHighlightProps> = ({
  prompt,
  references = ["Ch.5 Ethnicity", "Ch.6 Religion", "VN Practice"],
}) => (
  <Card className="constructivist-frame border-0 star-watermark">
    <CardHeader>
      <span className="section-label text-sm tracking-[8px]">Discussion Topic</span>
      <div className="accent-line w-full" />
    </CardHeader>
    <CardContent className="space-y-4 relative z-10">
      <p className="font-display-vi text-2xl leading-snug text-foreground uppercase">{prompt}</p>
      <div className="flex flex-wrap gap-2">
        {references.map((ref, i) => (
          <Badge key={i} variant="secondary" className="font-heading font-bold text-xs uppercase tracking-[4px] text-primary border-2 border-primary">
            {ref}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);
