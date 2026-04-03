import { COLORS, GLASS, TEXT_SHADOW } from "./tokens";

export type AlertVariant = "warning" | "danger" | "success";

export interface AlertCardProps {
  title: string;
  detail: string;
  variant?: AlertVariant;
  opacity?: number;
  translateX?: number;
  scale?: number;
}

const VARIANT_CONFIG: Record<AlertVariant, { color: string; icon: string }> = {
  warning: { color: "#D97706", icon: "\u26A0" },
  danger: { color: "#B91C1C", icon: "\u2716" },
  success: { color: "#16A34A", icon: "\u2714" },
};

export function AlertCard({
  title,
  detail,
  variant = "warning",
  opacity = 1,
  translateX = 0,
  scale = 1,
}: AlertCardProps) {
  const config = VARIANT_CONFIG[variant];

  return (
    <div
      className="rounded-xl font-sans"
      style={{
        opacity,
        transform: `translateX(${translateX}px) scale(${scale})`,
        backgroundColor: GLASS.bgColor,
        border: `3px solid ${GLASS.borderColor}`,
        borderLeft: `8px solid ${config.color}`,
        padding: "16px 28px",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: `0 4px 24px rgba(0,0,0,0.06), 0 0 12px ${config.color}15`,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 20,
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: 36,
          lineHeight: 1,
          color: config.color,
          flexShrink: 0,
          marginTop: 4,
        }}
      >
        {config.icon}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div
          className="text-[36px] font-bold leading-tight mb-1"
          style={{ color: COLORS.white, textShadow: TEXT_SHADOW }}
        >
          {title}
        </div>
        <div
          className="text-[26px] leading-snug"
          style={{ color: COLORS.body, textShadow: TEXT_SHADOW }}
        >
          {detail}
        </div>
      </div>
    </div>
  );
}
