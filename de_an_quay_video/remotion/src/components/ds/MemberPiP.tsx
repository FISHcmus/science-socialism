import React from "react";
import { COLORS, FONT, GOLD_RING, GRADIENTS, TEXT_SHADOW } from "./tokens";

export interface MemberPiPProps {
  name: string;
  sectionLabel?: string;
  /** Video source URL. Omit = placeholder mode */
  src?: string;
  /** Rotating conic border angle (parent computes) */
  ringAngle?: number;
  opacity?: number;
  /** Border thickness. Default 3 */
  borderWidth?: number;
}

export function MemberPiP({
  name,
  sectionLabel,
  src,
  ringAngle = 0,
  opacity = 1,
  borderWidth = 3,
}: MemberPiPProps) {
  const width = 480;
  const height = 1080;
  const borderRadius = 10;
  const videoHeight = 840;

  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity,
        flexShrink: 0,
      }}
    >
      {/* Video area with gold ring border */}
      <div style={{ position: "relative", width: 440, height: videoHeight }}>
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            inset: -3,
            filter: "blur(10px)",
            background: GOLD_RING.glow,
            opacity: 0.1,
            borderRadius: borderRadius + 3,
          }}
        />

        {/* Clip container */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius,
            width: 440,
            height: videoHeight,
          }}
        >
          {/* Rotating conic gradient border */}
          <div
            style={{
              position: "absolute",
              width: "300%",
              height: "300%",
              top: "-100%",
              left: "-100%",
              background: GRADIENTS.goldConic,
              transform: `rotate(${ringAngle}deg)`,
            }}
          />

          {/* Inner plate */}
          <div
            style={{
              position: "absolute",
              inset: borderWidth,
              borderRadius: Math.max(0, borderRadius - 1),
              overflow: "hidden",
              background: GRADIENTS.darkRadial,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {src ? (
              <video
                src={src}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 32,
                  gap: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    color: COLORS.lightGold,
                    fontFamily: FONT,
                    fontWeight: "bold",
                    textShadow: TEXT_SHADOW,
                    lineHeight: 1.3,
                  }}
                >
                  Chèn video
                </div>
                <div
                  style={{
                    fontSize: 28,
                    color: COLORS.body,
                    fontFamily: FONT,
                    fontWeight: 400,
                    textShadow: TEXT_SHADOW,
                    lineHeight: 1.3,
                  }}
                >
                  {name}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Name + section label below video */}
      <div
        style={{
          marginTop: 24,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: COLORS.white,
            fontFamily: FONT,
            fontWeight: "bold",
            textShadow: TEXT_SHADOW,
            lineHeight: 1.2,
          }}
        >
          {name}
        </div>
        {sectionLabel && (
          <div
            style={{
              fontSize: 24,
              color: COLORS.muted,
              fontFamily: FONT,
              fontWeight: 400,
              textShadow: TEXT_SHADOW,
              lineHeight: 1.2,
            }}
          >
            {sectionLabel}
          </div>
        )}
      </div>
    </div>
  );
}
