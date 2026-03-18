import { useEffect, useState } from "react";
import { continueRender, delayRender, interpolate, useCurrentFrame, spring, useVideoConfig, staticFile } from "remotion";
import { geoMercator, geoPath } from "d3-geo";
import { COLORS } from "../../constants";
import type { GeoPermissibleObjects } from "d3-geo";

interface GeoFeature {
  type: string;
  properties: { NAME_1: string; [key: string]: unknown };
  geometry: GeoPermissibleObjects;
}

interface GeoJSON {
  type: string;
  features: GeoFeature[];
}

export const VietnamMap: React.FC<{
  highlightProvinces?: string[];
  highlightColor?: string;
  startFrame?: number;
  width?: number;
  height?: number;
}> = ({
  highlightProvinces = [],
  highlightColor = COLORS.vnRed,
  startFrame = 0,
  width = 500,
  height = 900,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [geoData, setGeoData] = useState<GeoJSON | null>(null);
  const [handle] = useState(() => delayRender("Loading Vietnam GeoJSON"));

  useEffect(() => {
    fetch(staticFile("gadm41_VNM_1.json"))
      .then((res) => res.json())
      .then((data) => {
        setGeoData(data as GeoJSON);
        continueRender(handle);
      })
      .catch((err) => {
        console.error("Failed to load GeoJSON:", err);
        continueRender(handle);
      });
  }, [handle]);

  if (!geoData) return null;

  const localFrame = frame - startFrame;
  const drawProgress = interpolate(localFrame, [0, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const projection = geoMercator().fitSize([width, height], geoData as unknown as GeoPermissibleObjects);
  const pathGenerator = geoPath().projection(projection);

  return (
    <svg width={width} height={height}>
      {geoData.features.map((feature, i) => {
        const provinceName = feature.properties.NAME_1;
        const isHighlighted = highlightProvinces.includes(provinceName);
        const d = pathGenerator(feature.geometry) || "";

        // Stagger province draw based on index
        const provinceDelay = i * 0.5;
        const provinceProgress = interpolate(
          localFrame - provinceDelay,
          [0, 40],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        const highlightSpring = isHighlighted && localFrame > 60
          ? spring({ frame: localFrame - 60, fps, config: { damping: 15, stiffness: 100 } })
          : 0;

        const fillColor = isHighlighted
          ? interpolate(highlightSpring, [0, 1], [0, 1]) > 0.5
            ? highlightColor
            : "rgba(255,255,255,0.1)"
          : "rgba(255,255,255,0.1)";

        return (
          <path
            key={i}
            d={d}
            fill={fillColor}
            stroke={COLORS.teal}
            strokeWidth={isHighlighted ? 2 : 0.5}
            opacity={provinceProgress * drawProgress}
          />
        );
      })}
    </svg>
  );
};
