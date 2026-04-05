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
  <Card className="constructivist-frame border-0">
    <CardHeader>
      <span className="section-label text-xs">Discussion Topic</span>
      <div className="accent-line w-[40%]" />
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="font-[var(--font-propaganda)] font-bold text-2xl leading-snug text-foreground">{prompt}</p>
      <div className="flex flex-wrap gap-2">
        {references.map((ref, i) => (
          <Badge key={i} variant="secondary" className="font-heading text-xs text-primary border border-primary/30">
            {ref}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);
