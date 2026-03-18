import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@remotion/player";
import { MainVideo } from "./MainVideo";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#111",
      }}
    >
      <Player
        component={MainVideo}
        compositionWidth={1920}
        compositionHeight={1080}
        durationInFrames={24300}
        fps={30}
        style={{ width: "100%", maxWidth: 1280 }}
        controls
        autoPlay={false}
      />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
