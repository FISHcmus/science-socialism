import { memo } from "react";
import { TEXT_SHADOW } from "./tokens";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  sectionNumber?: string;
  opacity?: number;
  translateY?: number;
  accentWidth?: number;
  scale?: number;
}

export const SectionTitle = memo(function SectionTitle({
  title,
  subtitle,
  sectionNumber,
  opacity = 1,
  translateY = 0,
  accentWidth = 200,
  scale = 1,
}: SectionTitleProps) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center font-sans gap-4 px-8 py-10"
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      {sectionNumber && (
        <span
          className="text-ds-gold text-[28px] font-semibold uppercase tracking-[0.15em]"
          style={{
            fontVariant: "small-caps",
            textShadow: TEXT_SHADOW,
          }}
        >
          {sectionNumber}
        </span>
      )}

      <h1
        className="text-ds-white text-[56px] font-bold m-0 leading-tight"
        style={{ textShadow: TEXT_SHADOW }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className="text-ds-body text-[30px] m-0 leading-normal"
          style={{ textShadow: TEXT_SHADOW }}
        >
          {subtitle}
        </p>
      )}

      <div
        className="h-[3px] bg-ds-gold rounded-sm mt-2"
        style={{
          width: `${accentWidth}px`,
          boxShadow: "0 0 8px rgba(232, 175, 72, 0.3)",
        }}
      />
    </div>
  );
});
