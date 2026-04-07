"use client";

import React, { useMemo } from "react";
import {
  ReactFlow,
  type Node,
  type Edge,
  type NodeProps,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Dagre from "@dagrejs/dagre";
import { type HeadingNode } from "@/data/chapterOutlines";
import { radialTreeToFlow, SECTOR_COLORS, type RadialResult } from "@/lib/radialLayout";
import { PropagandaOverlay } from "./PropagandaOverlay";

/* ── Dagre auto-layout (tree mode) ────────────────────── */

function getLayoutedElements(nodes: Node[], edges: Edge[], direction = "TB") {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: direction, nodesep: 40, ranksep: 80, marginx: 40, marginy: 40 });

  nodes.forEach((node) => {
    const d = (node.data.depth as number) ?? 0;
    const w = d === 0 ? 320 : d === 1 ? 280 : d === 2 ? 240 : 200;
    const h = d === 0 ? 60 : 50;
    g.setNode(node.id, { width: w, height: h });
  });
  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  Dagre.layout(g);

  return {
    nodes: nodes.map((node) => {
      const pos = g.node(node.id);
      const d = (node.data.depth as number) ?? 0;
      const w = d === 0 ? 320 : d === 1 ? 280 : d === 2 ? 240 : 200;
      const h = d === 0 ? 60 : 50;
      return { ...node, position: { x: pos.x - w / 2, y: pos.y - h / 2 }, style: { width: w } };
    }),
    edges,
  };
}

/* ── Shared handles ───────────────────────────────────── */

const DIRS = [Position.Top, Position.Bottom, Position.Left, Position.Right] as const;
function AllHandles({ type, color }: { type: "source" | "target"; color: string }) {
  return (
    <>
      {DIRS.map((pos) => (
        <Handle key={`${type}-${pos}`} type={type} position={pos}
          id={type === "source" ? `src-${pos}` : pos}
          className="!border-0" style={{ background: color, width: 6, height: 6 }} />
      ))}
    </>
  );
}

/* ── Sector banner class ──────────────────────────────── */
const SECTOR_BANNER = ["red-banner", "olive-banner", "black-banner"] as const;

/* ── Node components — reusing landing page design system ── */

// Root: constructivist-frame + star-watermark + red-banner + display-text
function RootNode({ data }: NodeProps) {
  return (
    <div className="red-banner constructivist-frame star-watermark relative text-center"
      style={{ minWidth: 280, padding: 20 }}>
      <div className="font-display-vi text-[18px] font-bold uppercase leading-tight relative z-10 stamp-text"
        style={{ color: "var(--color-ds-cream)" }}>
        {data.label as string}
      </div>
      <AllHandles type="source" color="#990000" />
    </div>
  );
}

// Section: colored banner + section-label + numbered badge
function SectionNode({ data }: NodeProps) {
  const sIdx = (data.sectorIdx as number) ?? 0;
  const bannerClass = SECTOR_BANNER[sIdx] ?? "red-banner";
  const color = (data.sectorColor as string) || "#990000";
  return (
    <div className={`${bannerClass} halftone-hover relative text-center`}
      style={{ minWidth: 240, padding: "12px 16px" }}>
      <span className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center font-display-vi text-sm font-bold border-2"
        style={{ background: "var(--color-ds-cream)", color, borderColor: color }}>
        {data.index as number}
      </span>
      <div className="font-display-vi text-[11px] font-bold uppercase tracking-[4px] relative z-10"
        style={{ color: "var(--color-ds-cream)" }}>
        {data.label as string}
      </div>
      <AllHandles type="target" color={color} />
      <AllHandles type="source" color={color} />
    </div>
  );
}

// Topic: stamp-border-top + chevron-corner + stamp-text
function TopicCardNode({ data }: NodeProps) {
  const color = (data.sectorColor as string) || "#333";
  const subtopics = (data.subtopics as { label: string; items: string[] }[]) || [];
  const hasGroups = subtopics.some(st => st.items.length > 0);
  // Deterministic slight rotation based on index for organic "pinned" feel
  const idx = (data.index as number) ?? 0;
  const rotation = ((idx * 7 + 3) % 7) - 3; // range: -3 to +3 degrees

  return (
    <div className="relative" style={{ transform: `rotate(${rotation}deg)` }}>
      {/* Pin / thumbtack */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        {/* Pin head */}
        <div className="w-4 h-4 rounded-full border-2 border-black/30"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${color}dd, ${color})`,
            boxShadow: "0 2px 3px rgba(0,0,0,0.4)",
          }} />
        {/* Pin shadow on card */}
        <div className="w-1 h-1 rounded-full bg-black/20 mt-px" />
      </div>

      {/* Card with paper shadow */}
      <div className="bg-[var(--color-ds-cream)] border border-black/40 mt-1"
        style={{
          boxShadow: "3px 4px 0 rgba(0,0,0,0.15), 1px 1px 4px rgba(0,0,0,0.1)",
        }}>
        {/* Number badge */}
        <span className="absolute top-1 left-1 w-5 h-5 flex items-center justify-center text-[10px] font-bold text-white z-10"
          style={{ background: color }}>
          {data.index as number}
        </span>

        {/* Title bar */}
        <div className="px-3 py-1.5 border-b border-black/20" style={{ background: color }}>
          <div className="font-display-vi text-[11px] font-bold uppercase leading-tight text-[var(--color-ds-cream)] tracking-wide pl-4">
            {data.label as string}
          </div>
        </div>

        {/* Content */}
        {subtopics.length > 0 && (
          <div className="px-3 py-2 space-y-1.5">
            {hasGroups ? (
              subtopics.map((st, si) => (
                <div key={si}>
                  <div className="font-body text-[9px] font-bold leading-tight text-[var(--color-ds-ink)] mb-0.5">
                    {st.label}
                  </div>
                  {st.items.length > 0 && (
                    <div className="pl-2 space-y-0.5">
                      {st.items.map((item, ii) => (
                        <div key={ii} className="font-body text-[8px] leading-tight text-[var(--color-ds-ink)]/80 flex items-start gap-1">
                          <span className="mt-[2px]" style={{ color, fontSize: 5 }}>■</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              subtopics.map((st, si) => (
                <div key={si} className="font-body text-[9px] leading-tight text-[var(--color-ds-ink)] flex items-start gap-1.5">
                  <span className="mt-[2px]" style={{ color, fontSize: 6 }}>●</span>
                  <span>{st.label}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <AllHandles type="target" color={color} />
      <AllHandles type="source" color={color} />
    </div>
  );
}



// Propaganda overlay as a ReactFlow node (pans/zooms with the graph)
function OverlayNode({ data }: NodeProps) {
  return (
    <PropagandaOverlay
      maxDepth={data.maxDepth as number}
      ringSpacing={data.ringSpacing as number}
      sectorAngles={data.sectorAngles as RadialResult["sectorAngles"]}
      width={data.width as number}
      height={data.height as number}
    />
  );
}

const nodeTypes = {
  root: RootNode,
  section: SectionNode,
  topicCard: TopicCardNode,
  propagandaOverlay: OverlayNode,
};

/* ── Tree → nodes/edges (dagre mode) ─────────────────── */

function treeToFlow(tree: HeadingNode): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  nodes.push({
    id: tree.id, type: "root", position: { x: 0, y: 0 },
    data: { label: tree.label, level: 0, depth: 0 },
  });

  let sectionIdx = 0;
  let topicIdx = 0;

  function walk(node: HeadingNode, parentId: string, depth: number) {
    node.children.forEach((child, i) => {
      let nodeType: string;
      const data: Record<string, unknown> = { label: child.label, level: child.level, depth };

      if (child.level === 3) { sectionIdx++; topicIdx = 0; nodeType = "section"; data.index = sectionIdx; }
      else if (child.level === 4) { topicIdx++; nodeType = "topic"; data.index = topicIdx; }
      else { nodeType = "detail"; data.letter = String.fromCharCode(97 + i); }

      nodes.push({ id: child.id, type: nodeType, position: { x: 0, y: 0 }, data });
      edges.push({
        id: `${parentId}-${child.id}`, source: parentId, target: child.id, type: "smoothstep",
        style: { stroke: child.level <= 3 ? "var(--color-blood, #990000)" : "#000", strokeWidth: child.level <= 3 ? 3 : child.level === 4 ? 2 : 1 },
      });
      walk(child, child.id, depth + 1);
    });
  }
  walk(tree, tree.id, 1);
  return { nodes, edges };
}

/* ── Main component ──────────────────────────────────── */

type MindmapFlowProps = {
  tree: HeadingNode;
  fullPage?: boolean;
  layout?: "tree" | "radial";
};

function MindmapFlowInner({ tree, fullPage, layout = "tree" }: MindmapFlowProps) {
  const result = useMemo(() => {
    if (layout === "radial") {
      return radialTreeToFlow(tree, 300);
    }
    const { nodes: raw, edges: rawE } = treeToFlow(tree);
    return { ...getLayoutedElements(raw, rawE, "TB"), maxDepth: 0, ringSpacing: 0, sectorAngles: [] as RadialResult["sectorAngles"] };
  }, [tree, layout]);

  const isRadial = layout === "radial";

  // Add propaganda overlay as a background node (pans/zooms with graph)
  const allNodes = useMemo(() => {
    if (!isRadial) return result.nodes;
    // Compute bounding box of all nodes
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const n of result.nodes) {
      const nw = (n.style?.width as number) ?? 200;
      minX = Math.min(minX, n.position.x);
      maxX = Math.max(maxX, n.position.x + nw);
      minY = Math.min(minY, n.position.y);
      maxY = Math.max(maxY, n.position.y + 50);
    }
    const pad = 160;
    const w = maxX - minX + pad * 2;
    const h = maxY - minY + pad * 2;
    const overlayNode: Node = {
      id: "__propaganda_overlay__",
      type: "propagandaOverlay",
      position: { x: minX - pad, y: minY - pad },
      data: {
        maxDepth: result.maxDepth,
        ringSpacing: result.ringSpacing,
        sectorAngles: result.sectorAngles,
        width: w,
        height: h,
      },
      selectable: false,
      draggable: false,
      style: { width: w, height: h, zIndex: -1 },
    };
    return [overlayNode, ...result.nodes];
  }, [isRadial, result]);

  const [nodes, , onNodesChange] = useNodesState(allNodes);
  const [edges, , onEdgesChange] = useEdgesState(result.edges);

  return (
    <div className={`w-full ${fullPage ? "h-full" : "h-[70vh]"} bg-[var(--color-ds-cream)] relative overflow-hidden`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.08}
        maxZoom={2.5}
        proOptions={{ hideAttribution: true }}
        defaultEdgeOptions={{ type: "straight" }}
        style={{ background: "transparent" }}
      />
      {/* Legend — brutal Soviet style */}
      <div className="absolute bottom-3 left-3 stamp-border-top bg-[var(--color-ds-cream)] border-2 border-black p-3 text-[10px] font-body space-y-1.5 z-10">
        <div className="section-label text-[9px] tracking-[4px] mb-2 pb-1 border-b-2 border-black">Legend</div>
        {isRadial && SECTOR_COLORS.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="inline-block w-5 h-3" style={{ background: s.border }} />
            <span className="font-bold uppercase tracking-wider text-[9px]" style={{ color: s.border }}>{s.label}</span>
          </div>
        ))}
        <div className="border-t border-black pt-1 mt-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-5 h-3 red-banner" style={{ border: "2px solid var(--color-ds-red)" }} />
            <span>Chapter</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-5 h-3 stamp-border-top bg-[var(--color-ds-cream)]" style={{ borderTopWidth: 3 }} />
            <span>Topic + Details</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MindmapFlow: React.FC<MindmapFlowProps> = (props) => (
  <ReactFlowProvider>
    <MindmapFlowInner {...props} />
  </ReactFlowProvider>
);
