import { memo } from "react";
import { TEXT_SHADOW } from "./tokens";
import { GlassPanel } from "./GlassPanel";

export interface LowerThirdProps {
  name: string;
  role: string;
  opacity?: number;
  translateY?: number;
}

export const LowerThird = memo(function LowerThird({
  name,
  role,
  opacity = 1,
  translateY = 0,
}: LowerThirdProps) {
  return (
    <div
      className="inline-flex flex-row items-stretch gap-4 font-sans py-3"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      {/* Gold left accent bar with glow */}
      <div
        className="w-1 h-[60px] bg-ds-gold rounded-sm shrink-0"
        style={{ boxShadow: "0 0 8px rgba(232, 175, 72, 0.3)" }}
      />

      {/* Text block in dark glass */}
      <GlassPanel padding="12px 20px" borderRadius={12}>
        <div className="flex flex-col justify-center gap-1">
          <div
            className="text-ds-gold text-[32px] font-bold leading-tight"
            style={{ textShadow: TEXT_SHADOW }}
          >
            {name}
          </div>
          <div
            className="text-ds-body text-2xl font-normal leading-snug"
            style={{ textShadow: TEXT_SHADOW }}
          >
            {role}
          </div>
        </div>
      </GlassPanel>
    </div>
  );
});
