import { type CSSProperties } from "react";

export interface FilmGrainProps {
  /** Current frame number — drives deterministic grain seed */
  frame: number;
  opacity?: number;
  blendMode?: CSSProperties["mixBlendMode"];
}

export function FilmGrain({
  frame,
  opacity = 0.08,
  blendMode = "overlay",
}: FilmGrainProps) {
  const seed = frame % 1000;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        mixBlendMode: blendMode,
        opacity,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id={`grain-${seed}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves={4}
            seed={seed}
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter={`url(#grain-${seed})`}
        />
      </svg>
    </div>
  );
}
