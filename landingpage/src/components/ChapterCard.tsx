import React from "react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookIcon } from "./icons";

type ChapterCardProps = {
  number: number;
  title: string;
  summary?: string;
  onMindmap?: () => void;
  onRead?: () => void;
};

export const ChapterCard: React.FC<ChapterCardProps> = ({ number, title, summary, onMindmap, onRead }) => (
  <Card className="stamp-border-top chevron-corner hover:border-primary hover:translate-y-[-2px] transition-transform flex flex-col bg-number" data-number={String(number).padStart(2, '0')}>
    <CardHeader>
      <div className="flex items-center gap-2 mb-1 text-primary">
        <BookIcon size={16} />
        <span className="section-label text-xs tracking-[8px]">Chapter {number}</span>
      </div>
      <div className="accent-line w-full" />
      <CardTitle className="font-display-vi text-2xl leading-tight text-foreground mt-3 uppercase">
        {title}
      </CardTitle>
    </CardHeader>
    {summary && (
      <CardContent>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{summary}</p>
      </CardContent>
    )}
    <CardFooter className="mt-auto gap-3 border-0 bg-transparent px-4 pb-4">
      {onMindmap && (
        <Button variant="stamp" size="sm" onClick={onMindmap}>
          Mindmap
        </Button>
      )}
      {onRead && (
        <Button variant="link" size="sm" onClick={onRead}>
          Read &rarr;
        </Button>
      )}
    </CardFooter>
  </Card>
);
