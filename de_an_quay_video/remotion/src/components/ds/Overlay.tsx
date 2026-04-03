import { FilmGrain } from "./FilmGrain";

export interface OverlayProps {
  direction?: "bottom" | "top" | "full";
  opacity?: number;
  filmGrain?: boolean;
  grainFrame?: number;
}

/** Overlay always uses a fixed dark color for vignette effect,
 *  independent of the theme's background color. */
const OVERLAY_COLOR = "#000000";

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
  const baseRgba = toRgba(OVERLAY_COLOR, opacity);
  const transparent = toRgba(OVERLAY_COLOR, 0);

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
      className="absolute inset-0 pointer-events-none"
      style={{ background }}
    >
      {filmGrain && <FilmGrain frame={grainFrame} />}
    </div>
  );
}
