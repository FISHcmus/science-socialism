import { SECTIONS } from "./data/sections";
import { Timeline } from "./components/Timeline";
import { SectionPanel } from "./components/SectionPanel";
import "./App.css";

export const App: React.FC = () => (
  <div className="app">
    <h1>Storyboard - Nhom 7 CNXHKH</h1>
    <p className="subtitle">
      Xay dung khoi dai doan ket toan dan toc | 1920x1080 @ 30fps | 13.5 phut |
      Chieu projector
    </p>
    <Timeline sections={SECTIONS} />
    {SECTIONS.map((s) => (
      <SectionPanel key={s.id} section={s} />
    ))}

  </div>
);
