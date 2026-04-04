import { memo } from "react";
import { TEXT_SHADOW } from "./tokens";
import { GlassPanel } from "./GlassPanel";

export interface FlowNode {
  label: string;
  description?: string;
}

export interface FlowChartProps {
  nodes: FlowNode[];
  direction?: "horizontal" | "vertical";
  cycle?: boolean;
  visibleNodes?: number;
  nodeScale?: number;
  nodeOpacity?: number;
  arrowOpacity?: number;
  nodeScales?: number[];
  nodeOpacities?: number[];
  arrowOpacities?: number[];
}

export const FlowChart = memo(function FlowChart({
  nodes,
  direction = "horizontal",
  cycle = false,
  visibleNodes = nodes.length,
  nodeScale = 1,
  nodeOpacity = 1,
  arrowOpacity = 1,
  nodeScales,
  nodeOpacities,
  arrowOpacities,
}: FlowChartProps) {
  const isHorizontal = direction === "horizontal";
  const arrowSymbol = isHorizontal ? "\u2192" : "\u2193";

  return (
    <div
      className={`flex items-center justify-center font-sans w-full ${
        isHorizontal ? "flex-row flex-wrap" : "flex-col flex-nowrap"
      }`}
    >
      {nodes.map((node, index) => {
        const nodeVisible = index < visibleNodes;
        const isLastNode = index === nodes.length - 1;
        const showArrow = !isLastNode
          ? index < visibleNodes - 1
          : cycle && visibleNodes >= nodes.length;

        return (
          <div
            key={index}
            className={`flex items-center ${isHorizontal ? "flex-row" : "flex-col"}`}
          >
            <div
              style={{
                display: nodeVisible ? "flex" : "none",
                transform: `scale(${nodeScales?.[index] ?? nodeScale})`,
                opacity: nodeOpacities?.[index] ?? nodeOpacity,
              }}
            >
              <GlassPanel
                padding="24px 28px"
                borderRadius={16}
                goldBorder
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: "8px",
                  minWidth: "120px",
                }}
              >
                <span
                  className="text-ds-white text-[26px] font-bold leading-snug"
                  style={{ textShadow: TEXT_SHADOW }}
                >
                  {node.label}
                </span>
                {node.description && (
                  <span
                    className="text-ds-body text-[22px] leading-relaxed"
                    style={{ textShadow: TEXT_SHADOW }}
                  >
                    {node.description}
                  </span>
                )}
              </GlassPanel>
            </div>

            <div
              className="flex items-center justify-center text-ds-gold text-[28px] leading-none shrink-0"
              style={{
                display: showArrow ? "flex" : "none",
                opacity: arrowOpacities?.[index] ?? arrowOpacity,
                padding: isHorizontal ? "0 12px" : "8px 0",
              }}
            >
              {arrowSymbol}
            </div>
          </div>
        );
      })}
    </div>
  );
});
