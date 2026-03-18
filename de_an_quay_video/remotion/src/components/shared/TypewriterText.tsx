import { useCurrentFrame } from "remotion";
import { FONT, COLORS } from "../../constants";

export const TypewriterText: React.FC<{
  text: string;
  startFrame?: number;
  speed?: number; // frames per character
  fontSize?: number;
  color?: string;
  showCursor?: boolean;
}> = ({
  text,
  startFrame = 0,
  speed = 2,
  fontSize = 28,
  color = COLORS.white,
  showCursor = true,
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  if (localFrame < 0) return null;

  const charsToShow = Math.min(Math.floor(localFrame / speed), text.length);
  const displayText = text.slice(0, charsToShow);
  const cursorVisible = showCursor && Math.floor(localFrame / 15) % 2 === 0;

  return (
    <div
      style={{
        fontSize,
        color,
        fontFamily: FONT,
        lineHeight: 1.6,
        maxWidth: 1400,
      }}
    >
      {displayText}
      {cursorVisible && charsToShow < text.length && (
        <span style={{ color: COLORS.gold }}>|</span>
      )}
    </div>
  );
};
