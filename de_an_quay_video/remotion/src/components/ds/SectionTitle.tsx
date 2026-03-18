import { COLORS, FONT, TEXT_SHADOW } from "./tokens";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  sectionNumber?: string;
  opacity?: number;
  translateY?: number;
  accentWidth?: number;
}

export function SectionTitle({
  title,
  subtitle,
  sectionNumber,
  opacity = 1,
  translateY = 0,
  accentWidth = 200,
}: SectionTitleProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: FONT,
        opacity,
        transform: `translateY(${translateY}px)`,
        gap: "16px",
        padding: "40px 32px",
      }}
    >
      {sectionNumber && (
        <span
          style={{
            color: COLORS.gold,
            fontSize: "28px",
            fontVariant: "small-caps",
            letterSpacing: "0.15em",
            fontWeight: 600,
            textTransform: "uppercase",
            textShadow: TEXT_SHADOW,
          }}
        >
          {sectionNumber}
        </span>
      )}

      <h1
        style={{
          color: COLORS.white,
          fontSize: "56px",
          fontWeight: "bold",
          margin: 0,
          lineHeight: 1.2,
          textShadow: TEXT_SHADOW,
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            color: COLORS.body,
            fontSize: "30px",
            margin: 0,
            lineHeight: 1.4,
            textShadow: TEXT_SHADOW,
          }}
        >
          {subtitle}
        </p>
      )}

      <div
        style={{
          height: "3px",
          width: `${accentWidth}px`,
          backgroundColor: COLORS.gold,
          borderRadius: "2px",
          marginTop: "8px",
          boxShadow: "0 0 8px rgba(232, 175, 72, 0.3)",
        }}
      />
    </div>
  );
}
