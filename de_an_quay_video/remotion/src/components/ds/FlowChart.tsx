import { COLORS, FONT, TEXT_SHADOW } from "./tokens";
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

export function FlowChart({
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
      style={{
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONT,
        gap: "0px",
        width: "100%",
        flexWrap: isHorizontal ? "wrap" : "nowrap",
      }}
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
            style={{
              display: "flex",
              flexDirection: isHorizontal ? "row" : "column",
              alignItems: "center",
              gap: "0px",
            }}
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
                  style={{
                    color: COLORS.white,
                    fontSize: "26px",
                    fontWeight: "bold",
                    lineHeight: 1.3,
                    textShadow: TEXT_SHADOW,
                  }}
                >
                  {node.label}
                </span>
                {node.description && (
                  <span
                    style={{
                      color: COLORS.body,
                      fontSize: "22px",
                      lineHeight: 1.6,
                      textShadow: TEXT_SHADOW,
                    }}
                  >
                    {node.description}
                  </span>
                )}
              </GlassPanel>
            </div>

            <div
              style={{
                display: showArrow ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                color: COLORS.gold,
                fontSize: "28px",
                opacity: arrowOpacities?.[index] ?? arrowOpacity,
                padding: isHorizontal ? "0 12px" : "8px 0",
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              {arrowSymbol}
            </div>
          </div>
        );
      })}
    </div>
  );
}
