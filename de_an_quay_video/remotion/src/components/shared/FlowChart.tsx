import { interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { FONT, COLORS } from "../../constants";

export interface FlowNode {
  label: string;
  icon?: string;
  description?: string;
}

export const FlowChart: React.FC<{
  nodes: FlowNode[];
  direction?: "horizontal" | "vertical";
  startFrame?: number;
  stagger?: number;
  cycle?: boolean; // connect last node back to first
}> = ({ nodes, direction = "horizontal", startFrame = 0, stagger = 20, cycle = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const isHorizontal = direction === "horizontal";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        padding: isHorizontal ? "0 60px" : "40px 200px",
        width: "100%",
      }}
    >
      {nodes.map((node, i) => {
        const nodeStart = startFrame + i * stagger;
        const localFrame = frame - nodeStart;
        const isLast = i === nodes.length - 1;

        // Node animation
        const nodeVisible = localFrame >= 0;
        const nodeSpring = nodeVisible
          ? spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 100 } })
          : 0;
        const nodeScale = interpolate(nodeSpring, [0, 1], [0.5, 1]);
        const nodeOpacity = interpolate(nodeSpring, [0, 1], [0, 1]);

        // Arrow animation (appears after node)
        const arrowStart = nodeStart + stagger / 2;
        const arrowFrame = frame - arrowStart;
        const arrowOpacity =
          arrowFrame > 0
            ? interpolate(arrowFrame, [0, 10], [0, 1], { extrapolateRight: "clamp" })
            : 0;

        const showArrow = !isLast || cycle;

        return (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: isHorizontal ? "row" : "column",
              alignItems: "center",
              flex: isLast && !cycle ? "0 0 auto" : 1,
            }}
          >
            {/* Node box */}
            <div
              style={{
                transform: `scale(${nodeScale})`,
                opacity: nodeOpacity,
                backgroundColor: "rgba(255,255,255,0.08)",
                border: `2px solid ${COLORS.gold}`,
                borderRadius: 16,
                padding: "24px 28px",
                textAlign: "center",
                minWidth: isHorizontal ? 180 : 300,
                flexShrink: 0,
              }}
            >
              {node.icon && <div style={{ fontSize: 36, marginBottom: 8 }}>{node.icon}</div>}
              <div
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: COLORS.white,
                  fontFamily: FONT,
                }}
              >
                {node.label}
              </div>
              {node.description && (
                <div
                  style={{
                    fontSize: 14,
                    color: COLORS.muted,
                    fontFamily: FONT,
                    marginTop: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {node.description}
                </div>
              )}
            </div>

            {/* Arrow */}
            {showArrow && (
              <div
                style={{
                  opacity: arrowOpacity,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: isHorizontal ? "0 8px" : "8px 0",
                  color: COLORS.gold,
                  fontSize: 28,
                  flexShrink: 0,
                }}
              >
                {isHorizontal ? "→" : "↓"}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
