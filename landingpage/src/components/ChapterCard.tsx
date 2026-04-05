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
  <Card className="chevron-corner hover:border-primary hover:shadow-sm flex flex-col">
    <CardHeader>
      <div className="flex items-center gap-2 mb-1 text-primary">
        <BookIcon size={16} />
        <span className="section-label text-xs">Chapter {number}</span>
      </div>
      <div className="accent-line w-2/5" />
      <CardTitle className="font-[var(--font-propaganda)] font-bold text-2xl leading-tight text-foreground mt-2">
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
        <Button variant="outline" size="sm" onClick={onMindmap}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Mindmap
        </Button>
      )}
      {onRead && (
        <Button variant="link" size="sm" onClick={onRead} className="text-primary">
          Đọc &rarr;
        </Button>
      )}
    </CardFooter>
  </Card>
);
