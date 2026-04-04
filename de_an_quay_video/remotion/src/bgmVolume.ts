import { interpolate } from "remotion";
import { SECTIONS } from "./constants";

/**
 * Voiceover start offset (local frame) per section.
 * Before this offset = title slide (no voice), after = member speaking.
 */
const VOICEOVER_OFFSETS: Record<string, number> = {
  "nhan-intro": 360,
  "1.1": 360, "1.2": 360, "1.3": 360,
  "2.1": 360, "2.2": 360,
  "3.1": 360, "3.2": 360, "3.3": 360, "3.4": 360,
  "conclusion": 0,
};

const VOL_SWELL = 0.20;
const VOL_TITLE_SLIDE = 0.18;
const VOL_DUCK = 0; // completely silent during member speech
const VOL_NHAN_TEXT = 0.15; // typewriter text phase, no speech
const VOL_CONCLUSION = 0; // conclusion has speech video
const RAMP = 15; // frames for smooth transition

function findSection(absoluteFrame: number) {
  for (const s of SECTIONS) {
    if (absoluteFrame >= s.from && absoluteFrame < s.from + s.duration) {
      return s;
    }
  }
  return null;
}

/**
 * Returns the base BGM volume for a given absolute frame in the composition.
 * Does NOT include crossfade logic — that is handled per-play in MainVideo.
 */
export function getBgmVolume(absoluteFrame: number): number {
  const totalFrames = 26700;

  // Fade-in: frames 0-60
  if (absoluteFrame < 60) {
    return interpolate(absoluteFrame, [0, 60], [0, VOL_SWELL]);
  }

  // Fade-out: frames 24240-24300
  if (absoluteFrame > totalFrames - 60) {
    return interpolate(absoluteFrame, [totalFrames - 60, totalFrames], [VOL_CONCLUSION, 0]);
  }

  const section = findSection(absoluteFrame);
  if (!section) return VOL_DUCK;

  const localFrame = absoluteFrame - section.from;
  const voiceOffset = VOICEOVER_OFFSETS[section.id];

  // Title card: no voiceover at all
  if (section.id === "title") {
    return VOL_SWELL;
  }

  // Conclusion: slightly elevated duck
  if (section.id === "conclusion") {
    return VOL_CONCLUSION;
  }

  // Nhân intro: text phase then video phase
  if (section.id === "nhan-intro") {
    if (voiceOffset === undefined) return VOL_NHAN_TEXT;
    if (localFrame < voiceOffset - RAMP) return VOL_NHAN_TEXT;
    if (localFrame < voiceOffset) {
      return interpolate(localFrame, [voiceOffset - RAMP, voiceOffset], [VOL_NHAN_TEXT, VOL_DUCK]);
    }
    return VOL_DUCK;
  }

  // Member sections: Beat 1 (title slide) -> Beat 2 (voiceover)
  if (voiceOffset === undefined) return VOL_TITLE_SLIDE;

  if (localFrame < voiceOffset - RAMP) {
    return VOL_TITLE_SLIDE;
  }
  if (localFrame < voiceOffset) {
    return interpolate(localFrame, [voiceOffset - RAMP, voiceOffset], [VOL_TITLE_SLIDE, VOL_DUCK]);
  }
  return VOL_DUCK;
}
