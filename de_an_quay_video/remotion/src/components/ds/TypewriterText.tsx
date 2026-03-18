import { COLORS, FONT, TEXT_SHADOW } from "./tokens";

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
      style={{
        color: goldText ? COLORS.gold : color,
        fontSize: `${fontSize}px`,
        fontFamily: FONT,
        lineHeight: 1.6,
        wordBreak: "break-word",
        textShadow: TEXT_SHADOW,
      }}
    >
      {displayText}
      {shouldShowCursor && (
        <span
          style={{
            color: COLORS.gold,
            fontWeight: "bold",
            userSelect: "none",
            textShadow: "0 0 8px rgba(232, 175, 72, 0.5)",
          }}
        >
          |
        </span>
      )}
    </span>
  );
}
