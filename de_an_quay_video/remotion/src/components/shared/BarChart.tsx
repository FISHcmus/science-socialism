import { interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { FONT, COLORS } from "../../constants";

export interface BarData {
  label: string;
  value: number;
  color?: string;
}

export const BarChart: React.FC<{
  data: BarData[];
  startFrame?: number;
  stagger?: number;
  maxHeight?: number;
  showValues?: boolean;
  suffix?: string;
}> = ({ data, startFrame = 0, stagger = 8, maxHeight = 400, showValues = true, suffix = "" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 32,
        height: maxHeight + 80,
        padding: "0 60px",
      }}
    >
      {data.map((bar, i) => {
        const barStart = startFrame + i * stagger;
        const localFrame = frame - barStart;
        if (localFrame < 0) return <div key={i} style={{ width: 80 }} />;

        const grow = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 80 } });
        const barHeight = (bar.value / maxValue) * maxHeight * grow;
        const opacity = interpolate(localFrame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

        return (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity,
            }}
          >
            {showValues && (
              <div
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: COLORS.white,
                  fontFamily: FONT,
                  marginBottom: 8,
                }}
              >
                {Math.round(bar.value * grow).toLocaleString()}{suffix}
              </div>
            )}
            <div
              style={{
                width: 80,
                height: barHeight,
                backgroundColor: bar.color || COLORS.teal,
                borderRadius: "8px 8px 0 0",
                transition: "height 0.1s",
              }}
            />
            <div
              style={{
                fontSize: 14,
                color: COLORS.muted,
                fontFamily: FONT,
                marginTop: 8,
                textAlign: "center",
                maxWidth: 100,
              }}
            >
              {bar.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};
