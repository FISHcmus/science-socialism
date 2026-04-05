import type { Node, Edge } from "@xyflow/react";
import { type HeadingNode } from "@/data/chapterOutlines";

/**
 * Radial / Concentric Ring Layout — Beautified
 *
 * Algorithm:
 * 1. Count leaf descendants for each node (= "weight")
 * 2. Root gets full 360°. Children split parent's angular sector proportional to weight.
 * 3. Each node placed at (r, θ) where r = depth × ringSpacing, θ = midpoint of its sector.
 * 4. Convert polar → cartesian.
 * 5. Each node inherits its top-level sector index (0,1,2) for color-coding.
 */

// Sector colors: I=red, II=olive, III=sepia
export const SECTOR_COLORS = [
  { border: "#990000", bg: "#fdf2f2", text: "#990000", label: "DÂN TỘC" },
  { border: "#2D3A1A", bg: "#f2f5ed", text: "#2D3A1A", label: "TÔN GIÁO" },
  { border: "#5C4033", bg: "#f7f2ed", text: "#5C4033", label: "QUAN HỆ DT-TG" },
];

function countLeaves(node: HeadingNode): number {
  if (node.children.length === 0) return 1;
  return node.children.reduce((sum, child) => sum + countLeaves(child), 0);
}

/** Collect children as grouped subtopics: each direct child becomes a group header, its children become items */
function collectSubtopics(node: HeadingNode): Subtopic[] {
  return node.children.map(child => ({
    label: child.label,
    items: child.children.map(leaf => leaf.label),
  }));
}

/** Flatten tree: nodes at cutDepth get subtopics from descendants, children removed */
function flattenTree(node: HeadingNode, cutDepth: number, currentDepth = 0): HeadingNode & { subtopics?: Subtopic[] } {
  if (currentDepth >= cutDepth) {
    return { ...node, children: [], subtopics: collectSubtopics(node) };
  }
  return {
    ...node,
    children: node.children.map(child => flattenTree(child, cutDepth, currentDepth + 1)),
  };
}

type PlacedNode = {
  id: string;
  label: string;
  level: number;
  x: number;
  y: number;
  depth: number;
  sectorIdx: number; // which top-level sector (0,1,2)
  sectorStart: number;
  sectorEnd: number;
};

function placeRadial(
  node: HeadingNode,
  depth: number,
  sectorStart: number,
  sectorEnd: number,
  ringSpacing: number,
  sectorIdx: number,
  result: PlacedNode[],
) {
  const sectorMid = (sectorStart + sectorEnd) / 2;
  const r = depth * ringSpacing;
  const x = r * Math.cos(sectorMid);
  const y = r * Math.sin(sectorMid);

  result.push({ id: node.id, label: node.label, level: node.level, x, y, depth, sectorIdx, sectorStart, sectorEnd });

  if (node.children.length === 0) return;

  const totalLeaves = countLeaves(node);
  let currentAngle = sectorStart;

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i]!;
    const childLeaves = countLeaves(child);
    const childSector = ((sectorEnd - sectorStart) * childLeaves) / totalLeaves;
    const childStart = currentAngle;
    const childEnd = currentAngle + childSector;
    // depth=0 children get their own sectorIdx
    const childSectorIdx = depth === 0 ? i : sectorIdx;
    placeRadial(child, depth + 1, childStart, childEnd, ringSpacing, childSectorIdx, result);
    currentAngle = childEnd;
  }
}

function getNodeType(depth: number): string {
  if (depth === 0) return "root";
  if (depth === 1) return "section";
  return "topicCard";
}

function getNodeWidth(depth: number): number {
  if (depth === 0) return 280;
  if (depth === 1) return 250;
  return 260;
}


export type Subtopic = { label: string; items: string[] };

export type RadialResult = {
  nodes: Node[];
  edges: Edge[];
  maxDepth: number;
  ringSpacing: number;
  sectorAngles: { start: number; end: number; mid: number; label: string }[];
};

export function radialTreeToFlow(
  tree: HeadingNode,
  ringSpacing = 280,
  maxDepth = 2,
): RadialResult {
  // Flatten tree at maxDepth — children become bullet text inside the node
  const flatTree = flattenTree(tree, maxDepth) as HeadingNode & { bullets?: string[] };

  // Build a map of id → subtopics for flattened nodes
  const subtopicsMap = new Map<string, Subtopic[]>();
  function collectSubtopicsMap(node: HeadingNode & { subtopics?: Subtopic[] }, depth: number) {
    if (node.subtopics && node.subtopics.length > 0) {
      subtopicsMap.set(node.id, node.subtopics);
    }
    for (const child of (node.children as (HeadingNode & { subtopics?: Subtopic[] })[])) {
      collectSubtopicsMap(child, depth + 1);
    }
  }
  collectSubtopicsMap(flatTree, 0);

  const placed: PlacedNode[] = [];
  placeRadial(flatTree, 0, -Math.PI / 2, (3 * Math.PI) / 2, ringSpacing, -1, placed);

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Build edges with gradient thickness
  function buildEdges(node: HeadingNode, depth: number, sectorIdx: number) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i]!;
      const childDepth = depth + 1;
      const childSector = depth === 0 ? i : sectorIdx;
      const color = childSector >= 0 ? SECTOR_COLORS[childSector]?.border ?? "#666" : "#990000";

      const strokeWidth = childDepth <= 1 ? 4 : 2;

      edges.push({
        id: `${node.id}-${child.id}`,
        source: node.id,
        target: child.id,
        type: "straight",
        style: { stroke: childDepth <= 1 ? color : color + "99", strokeWidth },
      });
      buildEdges(child, childDepth, childSector);
    }
  }
  buildEdges(flatTree, 0, -1);

  // Numbering
  let sectionIdx = 0;
  let topicIdx = 0;
  const numberMap = new Map<string, { index?: number; letter?: string }>();

  function walkForNumbers(node: HeadingNode, depth: number, siblingIndex: number) {
    if (depth === 1) { sectionIdx++; topicIdx = 0; numberMap.set(node.id, { index: sectionIdx }); }
    else if (depth === 2) { topicIdx++; numberMap.set(node.id, { index: topicIdx }); }
    node.children.forEach((child, i) => walkForNumbers(child, depth + 1, i));
  }
  walkForNumbers(flatTree, 0, 0);

  // Collect sector angles from depth-1 nodes
  const sectorAngles: RadialResult["sectorAngles"] = [];
  let actualMaxDepth = 0;

  for (const p of placed) {
    if (p.depth > actualMaxDepth) actualMaxDepth = p.depth;

    const w = getNodeWidth(p.depth);
    const nums = numberMap.get(p.id) || {};
    const sColor = p.sectorIdx >= 0 ? SECTOR_COLORS[p.sectorIdx] : undefined;
    const subtopics = subtopicsMap.get(p.id) ?? [];

    nodes.push({
      id: p.id,
      type: getNodeType(p.depth),
      position: { x: p.x - w / 2, y: p.y - 24 },
      data: {
        label: p.label,
        level: p.level,
        depth: p.depth,
        index: nums.index,
        letter: nums.letter,
        sectorIdx: p.sectorIdx,
        sectorColor: sColor?.border,
        sectorBg: sColor?.bg,
        subtopics,
      },
      style: { width: w },
    });

    if (p.depth === 1) {
      sectorAngles.push({
        start: p.sectorStart,
        end: p.sectorEnd,
        mid: (p.sectorStart + p.sectorEnd) / 2,
        label: sColor?.label ?? "",
      });
    }
  }

  return { nodes, edges, maxDepth: actualMaxDepth, ringSpacing, sectorAngles };
}
