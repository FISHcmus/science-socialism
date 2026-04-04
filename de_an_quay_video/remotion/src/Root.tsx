import { Composition } from "remotion";
import { loadFont } from "@remotion/google-fonts/BeVietnamPro";
import { MainVideo } from "./MainVideo";
import "./style.css";

loadFont();

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="nhom7-video"
      component={MainVideo}
      durationInFrames={27000} // 15:00 at 30fps
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
