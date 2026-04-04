import { memo, useMemo } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

interface Background3DProps {
  accentColor?: string;
}

// Node definition with depth layer for parallax + visual depth
interface Node {
  baseX: number; // pixel position
  baseY: number;
  depth: number; // 0 = near (large, opaque), 1 = far (small, faint)
}

// Precomputed connection with static opacity
interface Connection {
  a: number;
  b: number;
  opacity: number;
}

const Background3DInner: React.FC<Background3DProps> = ({
  accentColor = "#D97706",
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Throttle to ~10fps
  const t = Math.floor(frame / 3) * 3 * 0.008;

  // 25 nodes on jittered 5x5 grid (computed once, in pixel space)
  const nodes: Node[] = useMemo(() => {
    const cols = 8, rows = 6;
    const padX = 120, padY = 80;
    const spanX = width - padX * 2;
    const spanY = height - padY * 2;
    const result: Node[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        const gx = padX + (c / (cols - 1)) * spanX;
        const gy = padY + (r / (rows - 1)) * spanY;
        const jx = Math.sin(i * 127.1 + 42) * 60;
        const jy = Math.cos(i * 269.5 + 42) * 40;
        const depth = (Math.sin(i * 419.2 + 42) * 0.5 + 0.5); // 0-1
        result.push({ baseX: gx + jx, baseY: gy + jy, depth });
      }
    }
    return result;
  }, [width, height]);

  // Precompute connections (computed once)
  const connections: Connection[] = useMemo(() => {
    const maxDist = 500; // pixels
    const result: Connection[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i]!.baseX - nodes[j]!.baseX;
        const dy = nodes[i]!.baseY - nodes[j]!.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const distFade = 1 - dist / maxDist;
          const avgDepth = (nodes[i]!.depth + nodes[j]!.depth) / 2;
          const depthFade = 1 - avgDepth * 0.6;
          result.push({ a: i, b: j, opacity: distFade * depthFade * 0.45 });
        }
      }
    }
    return result;
  }, [nodes]);

  // Camera parallax offset (pixels)
  const camOffsetX = Math.sin(t * 0.7) * 40;
  const camOffsetY = Math.cos(t * 0.5) * 25;

  // Drifted node positions (per effective frame)
  const drifted = useMemo(() =>
    nodes.map((n, i) => {
      const phase = i * 1.7;
      const driftX = Math.sin(t + phase) * 40;
      const driftY = Math.cos(t * 0.7 + phase) * 25;
      // Parallax: near nodes (depth=0) shift more with camera
      const parallaxScale = 1 - n.depth * 0.7;
      return {
        x: n.baseX + driftX + camOffsetX * parallaxScale,
        y: n.baseY + driftY + camOffsetY * parallaxScale,
        r: 16 - n.depth * 10, // radius: 16px near, 6px far
        opacity: 0.55 - n.depth * 0.25, // 0.55 near, 0.30 far
      };
    }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [t, nodes, camOffsetX, camOffsetY]);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="absolute top-0 left-0"
      style={{ pointerEvents: "none" }}
    >
      {/* Connection lines */}
      {connections.map((conn, i) => (
        <line
          key={i}
          x1={drifted[conn.a]!.x}
          y1={drifted[conn.a]!.y}
          x2={drifted[conn.b]!.x}
          y2={drifted[conn.b]!.y}
          stroke="#92400E"
          strokeWidth={2}
          opacity={conn.opacity}
        />
      ))}
      {/* Nodes */}
      {drifted.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="#374151"
          opacity={n.opacity}
        />
      ))}
    </svg>
  );
};

export const Background3D = memo(Background3DInner);
