import { AbsoluteFill, Audio, Sequence, interpolate, staticFile } from "remotion";
import { getBgmVolume } from "./bgmVolume";
import { SECTIONS, COLORS } from "./constants";
// import { Background3D } from "./components/shared/Background3D";
import { TitleCard } from "./components/TitleCard";
import { NhanIntro } from "./components/sections/NhanIntro";
import { Section11ThucNhi } from "./components/sections/Section11ThucNhi";
import { Section12ChauNhi } from "./components/sections/Section12ChauNhi";
import { Section13PhungNhi } from "./components/sections/Section13PhungNhi";
import { Section21HuynhNhi } from "./components/sections/Section21HuynhNhi";
import { Section22Phu } from "./components/sections/Section22Phu";
import { Section31QuynhNhu } from "./components/sections/Section31QuynhNhu";
import { Section32ToNhu } from "./components/sections/Section32ToNhu";
import { Section33YNhu } from "./components/sections/Section33YNhu";
import { Section34Nhan } from "./components/sections/Section34Nhan";
import { Conclusion } from "./components/sections/Conclusion";

const SECTION_COMPONENTS: Record<string, React.FC> = {
  "title": TitleCard,
  "nhan-intro": NhanIntro,
  "1.1": Section11ThucNhi,
  "1.2": Section12ChauNhi,
  "1.3": Section13PhungNhi,
  "2.1": Section21HuynhNhi,
  "2.2": Section22Phu,
  "3.1": Section31QuynhNhu,
  "3.2": Section32ToNhu,
  "3.3": Section33YNhu,
  "3.4": Section34Nhan,
  "conclusion": Conclusion,
};

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.darkest }}>
      {/* <Background3D accentColor={COLORS.gold} /> */}
      {/* BGM: 3 plays covering full video, volume=0 during speech */}
      <Sequence from={0} durationInFrames={9150} name="BGM Play 1">
        <Audio
          src={staticFile("bgm.mp3")}
          volume={(f) => getBgmVolume(f)}
        />
      </Sequence>
      <Sequence from={9150} durationInFrames={9150} name="BGM Play 2">
        <Audio
          src={staticFile("bgm.mp3")}
          volume={(f) => getBgmVolume(9150 + f)}
        />
      </Sequence>
      <Sequence from={18300} durationInFrames={8700} name="BGM Play 3">
        <Audio
          src={staticFile("bgm.mp3")}
          volume={(f) => getBgmVolume(18300 + f)}
        />
      </Sequence>

      {SECTIONS.map((section) => {
        const Component = SECTION_COMPONENTS[section.id];
        if (!Component) return null;
        return (
          <Sequence
            key={section.id}
            from={section.from}
            durationInFrames={section.duration}
            name={`${section.id} - ${section.label}`}
          >
            <Component />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
