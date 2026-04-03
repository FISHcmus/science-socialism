import { COLORS, GRADIENTS, TEXT_SHADOW } from "./tokens";

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
      className="flex flex-row items-end justify-center gap-8 font-sans w-full box-border pb-8"
      style={{ height: `${maxHeight + 60}px` }}
    >
      {data.map((item, index) => {
        const progress = barProgresses?.[index] ?? barProgress;
        const opacity = barOpacities?.[index] ?? barOpacity;
        const barHeight = (item.value / maxValue) * maxHeight * progress;
        const displayValue = displayValues?.[index] ?? item.value;
        const barOpacityVariation = 1 - index * 0.12;

        return (
          <div
            key={index}
            className="flex flex-col items-center justify-end gap-2 h-full"
          >
            {showValues && (
              <span
                className="text-ds-light-gold text-[22px] font-bold whitespace-nowrap"
                style={{
                  textShadow: TEXT_SHADOW,
                  opacity: progress > 0.1 ? opacity : 0,
                }}
              >
                {displayValue}
                {suffix}
              </span>
            )}
            <div
              className="w-20 rounded-t-lg shrink-0"
              style={{
                height: `${Math.max(barHeight, 0)}px`,
                background: item.color ?? GRADIENTS.goldBar,
                opacity: opacity * barOpacityVariation,
              }}
            />
            <span
              className="text-ds-body text-[22px] text-center whitespace-nowrap max-w-[90px] overflow-hidden text-ellipsis"
              style={{ textShadow: TEXT_SHADOW }}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
