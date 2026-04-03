import { COLORS, TEXT_SHADOW } from "./tokens";

export interface TypewriterTextProps {
  text: string;
  visibleChars: number;
  fontSize?: number;
  color?: string;
  showCursor?: boolean;
  cursorVisible?: boolean;
  goldText?: boolean;
}

export function TypewriterText({
  text,
  visibleChars,
  fontSize = 28,
  color = COLORS.white,
  showCursor = true,
  cursorVisible = true,
  goldText = false,
}: TypewriterTextProps) {
  const displayText = text.slice(0, visibleChars);
  const isTyping = visibleChars < text.length;
  const shouldShowCursor = showCursor && cursorVisible && isTyping;

  return (
    <span
      className="font-sans leading-relaxed break-words"
      style={{
        color: goldText ? COLORS.gold : color,
        fontSize: `${fontSize}px`,
        textShadow: TEXT_SHADOW,
      }}
    >
      {displayText}
      {shouldShowCursor && (
        <span
          className="text-ds-gold font-bold select-none"
          style={{ textShadow: "0 0 8px rgba(232, 175, 72, 0.5)" }}
        >
          |
        </span>
      )}
    </span>
  );
}
