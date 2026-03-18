import { COLORS, FONT, GRADIENTS, TEXT_SHADOW } from "./tokens";

export interface BarData {
  label: string;
  value: number;
  color?: string;
}

export interface BarChartProps {
  data: BarData[];
  maxHeight?: number;
  showValues?: boolean;
  suffix?: string;
  barProgress?: number;
  barOpacity?: number;
  barProgresses?: number[];
  barOpacities?: number[];
  displayValues?: number[];
}

export function BarChart({
  data,
  maxHeight = 400,
  showValues = true,
  suffix = "",
  barProgress = 1,
  barOpacity = 1,
  barProgresses,
  barOpacities,
  displayValues,
}: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "32px",
        fontFamily: FONT,
        width: "100%",
        height: `${maxHeight + 60}px`,
        paddingBottom: "32px",
        boxSizing: "border-box",
      }}
    >
      {data.map((item, index) => {
        const progress = barProgresses?.[index] ?? barProgress;
        const opacity = barOpacities?.[index] ?? barOpacity;
        const barHeight = (item.value / maxValue) * maxHeight * progress;
        const displayValue = displayValues?.[index] ?? item.value;
        // Gold gradient default — opacity variation for differentiation
        const barOpacityVariation = 1 - index * 0.12;

        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "8px",
              height: "100%",
            }}
          >
            {showValues && (
              <span
                style={{
                  color: COLORS.lightGold,
                  fontSize: "22px",
                  fontWeight: "bold",
                  textShadow: TEXT_SHADOW,
                  opacity: progress > 0.1 ? opacity : 0,
                  whiteSpace: "nowrap",
                }}
              >
                {displayValue}
                {suffix}
              </span>
            )}
            <div
              style={{
                width: "80px",
                height: `${Math.max(barHeight, 0)}px`,
                background: item.color ?? GRADIENTS.goldBar,
                borderRadius: "8px 8px 0 0",
                opacity: opacity * barOpacityVariation,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: COLORS.body,
                fontSize: "22px",
                textAlign: "center",
                textShadow: TEXT_SHADOW,
                whiteSpace: "nowrap",
                maxWidth: "90px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
