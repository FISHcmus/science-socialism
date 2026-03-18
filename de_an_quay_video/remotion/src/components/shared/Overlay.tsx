import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Overlay: React.FC<{
  direction?: "bottom" | "top" | "full";
  opacity?: number;
  showFrom?: number;
}> = ({ direction = "bottom", opacity: maxOpacity = 0.7, showFrom = 0 }) => {
  const frame = useCurrentFrame();
  const localFrame = frame - showFrom;
  if (localFrame < 0) return null;

  const fade = interpolate(localFrame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const gradient =
    direction === "full"
      ? `rgba(10,22,40,${maxOpacity * fade})`
      : direction === "bottom"
        ? `linear-gradient(to top, rgba(10,22,40,${maxOpacity * fade}) 0%, transparent 100%)`
        : `linear-gradient(to bottom, rgba(10,22,40,${maxOpacity * fade}) 0%, transparent 100%)`;

  return (
    <AbsoluteFill
      style={{
        background: gradient,
      }}
    />
  );
};
