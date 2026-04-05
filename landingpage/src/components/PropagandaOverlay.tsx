import React from "react";
import { SECTOR_COLORS, type RadialResult } from "@/lib/radialLayout";

/**
 * SVG propaganda poster overlay for the radial mindmap.
 * Renders behind the ReactFlow canvas as a decorative layer.
 *
 * Elements:
 * 1. Sunburst rays from center
 * 2. Concentric ring circles at each depth
 * 3. Sector arc banners with labels
 * 4. Ornamental border frame with corner stars
 */

type Props = {
  maxDepth: number;
  ringSpacing: number;
  sectorAngles: RadialResult["sectorAngles"];
  width: number;
  height: number;
};

/* ── Helper: 5-pointed star path ─────────────────────── */
function starPath(cx: number, cy: number, outerR: number, innerR: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 2) * -1 + (Math.PI / 5) * i;
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return `M${pts.join("L")}Z`;
}

/* ── Helper: arc path for sector banners ─────────────── */
function arcPathId(index: number): string {
  return `sector-arc-${index}`;
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const x1 = cx + r * Math.cos(startAngle);
  const y1 = cy + r * Math.sin(startAngle);
  const x2 = cx + r * Math.cos(endAngle);
  const y2 = cy + r * Math.sin(endAngle);
  const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
}

export const PropagandaOverlay: React.FC<Props> = ({
  maxDepth,
  ringSpacing,
  sectorAngles,
  width,
  height,
}) => {
  const cx = width / 2;
  const cy = height / 2;
  const outerRadius = (maxDepth + 0.5) * ringSpacing;

  // Sunburst: 16 thin rays, barely visible — just a watermark hint
  const RAY_COUNT = 16;
  const rayAngleStep = (2 * Math.PI) / RAY_COUNT;
  const rayOuterR = outerRadius * 1.2;

  return (
    <svg
      className="absolute inset-0 pointer-events-none z-0"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        {/* Arc paths for sector text */}
        {sectorAngles.map((s, i) => (
          <path
            key={arcPathId(i)}
            id={arcPathId(i)}
            d={describeArc(cx, cy, outerRadius + 50, s.start, s.end)}
            fill="none"
          />
        ))}
      </defs>

      {/* ═══ 1. SUNBURST RAYS — very faint watermark ═══ */}
      <g opacity={0.025}>
        {Array.from({ length: RAY_COUNT }).map((_, i) => {
          if (i % 2 !== 0) return null; // only every other ray — 8 total
          const a1 = rayAngleStep * i;
          const a2 = rayAngleStep * (i + 0.5);
          const points = [
            `${cx},${cy}`,
            `${cx + rayOuterR * Math.cos(a1)},${cy + rayOuterR * Math.sin(a1)}`,
            `${cx + rayOuterR * Math.cos(a2)},${cy + rayOuterR * Math.sin(a2)}`,
          ].join(" ");
          return (
            <polygon
              key={`ray-${i}`}
              points={points}
              fill="#990000"
            />
          );
        })}
      </g>

      {/* ═══ 2. CONCENTRIC RING CIRCLES ═══ */}
      <g>
        {Array.from({ length: maxDepth + 1 }).map((_, d) => {
          if (d === 0) return null;
          const r = d * ringSpacing;
          return (
            <circle
              key={`ring-${d}`}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={d <= 2 ? "#990000" : "#000000"}
              strokeWidth={d === 1 ? 2.5 : d === 2 ? 1.5 : 1}
              strokeDasharray={d <= 2 ? "none" : "10 8"}
              opacity={d <= 2 ? 0.2 : 0.1}
            />
          );
        })}
      </g>

      {/* ═══ 3. SECTOR DIVIDER LINES ═══ */}
      <g>
        {sectorAngles.map((s, i) => {
          const color = SECTOR_COLORS[i]?.border ?? "#990000";
          // Line from center to outer edge at sector start angle
          const lineR = outerRadius + 30;
          return (
            <line
              key={`sector-div-${i}`}
              x1={cx}
              y1={cy}
              x2={cx + lineR * Math.cos(s.start)}
              y2={cy + lineR * Math.sin(s.start)}
              stroke={color}
              strokeWidth={1.5}
              strokeDasharray="6 4"
              opacity={0.2}
            />
          );
        })}
      </g>

      {/* ═══ 4. SECTOR ARC LABELS ═══ */}
      <g>
        {sectorAngles.map((s, i) => {
          const color = SECTOR_COLORS[i]?.border ?? "#990000";
          return (
            <text
              key={`sector-label-${i}`}
              fill={color}
              fontSize={26}
              fontWeight="bold"
              letterSpacing="10"
              opacity={0.55}
            >
              <textPath
                href={`#${arcPathId(i)}`}
                startOffset="50%"
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontFamily: "'Anton', 'Oswald', sans-serif" }}
              >
                {s.label}
              </textPath>
            </text>
          );
        })}
      </g>


    </svg>
  );
};
