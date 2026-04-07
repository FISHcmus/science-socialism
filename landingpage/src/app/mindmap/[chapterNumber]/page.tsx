import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { chapterOutlines } from "@/data/chapterOutlines";
import { chapter6Detailed } from "@/data/chapter6Detailed";
import { MindmapPage } from "@/components/MindmapPageClient";

export function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6, 7].map((n) => ({ chapterNumber: String(n) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapterNumber: string }>;
}): Promise<Metadata> {
  const { chapterNumber } = await params;
  const num = Number(chapterNumber);
  const tree = num === 6 ? chapter6Detailed : chapterOutlines[num];
  if (!tree) return {};
  return {
    title: `Chapter ${num}: ${tree.label} — Mindmap`,
    description: `Interactive mindmap for Chapter ${num} of Scientific Socialism course.`,
  };
}

export default async function MindmapRoute({
  params,
}: {
  params: Promise<{ chapterNumber: string }>;
}) {
  const { chapterNumber } = await params;
  const num = Number(chapterNumber);
  if (isNaN(num) || num < 1 || num > 7) notFound();
  return <MindmapPage chapterNumber={num} />;
}
