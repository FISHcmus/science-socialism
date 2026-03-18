import React from "react";
import { Player } from "@remotion/player";
import type { Decorator } from "@storybook/react-vite";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

/**
 * Wraps stories in a Remotion Player so that useCurrentFrame() / useVideoConfig()
 * are available inside DS components that need them.
 */
export const RemotionDecorator: Decorator = (Story) => {
  return (
    <Player
      component={() => <Story />}
      compositionWidth={1920}
      compositionHeight={1080}
      durationInFrames={300}
      fps={30}
      style={{ width: "100%", maxWidth: 960, aspectRatio: "16/9" }}
      controls
    />
  );
};

/**
 * Simple dark-background wrapper for components that don't need Remotion context.
 */
export const DarkDecorator: Decorator = (Story) => {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0f",
        padding: 40,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Story />
    </div>
  );
};
