import { COLORS } from "./tokens";
import { FilmGrain } from "./FilmGrain";

export interface OverlayProps {
  direction?: "bottom" | "top" | "full";
  opacity?: number;
  filmGrain?: boolean;
  grainFrame?: number;
}

function toRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function Overlay({
  direction = "bottom",
  opacity = 0.7,
  filmGrain = false,
  grainFrame = 0,
}: OverlayProps) {
  const baseRgba = toRgba(COLORS.darkest, opacity);
  const transparent = toRgba(COLORS.darkest, 0);

  let background: string;

  switch (direction) {
    case "bottom":
      background = `linear-gradient(to bottom, ${transparent} 0%, ${baseRgba} 100%)`;
      break;
    case "top":
      background = `linear-gradient(to top, ${transparent} 0%, ${baseRgba} 100%)`;
      break;
    case "full":
    default:
      background = baseRgba;
      break;
  }

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background,
        pointerEvents: "none",
      }}
    >
      {filmGrain && <FilmGrain frame={grainFrame} />}
    </div>
  );
}
