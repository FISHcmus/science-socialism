// Classical Communist Design System — Tokens
// Art Deco + Soviet Constructivism + Vietnamese Poster Art

export const COLORS = {
  // Primary
  bg: "#FAFAF7",
  surface: "#F5F0E8",
  surfaceWhite: "#FFFFFF",
  ink: "#1A1A1A",
  inkSecondary: "#4A4A4A",
  inkMuted: "#7A7A7A",

  // Accent
  red: "#CC0000",
  redDeep: "#8B0000",
  redLight: "#FEE2E2",
  gold: "#DAA520",
  goldDeep: "#B8860B",
  goldLight: "#FEF3C7",
  black: "#111111",

  // Semantic
  border: "#D4C5B0",
  borderStrong: "#CC0000",
  overlay: "rgba(0,0,0,0.7)",
  highlight: "rgba(218,165,32,0.15)",
} as const;

export const GRADIENTS = {
  hero: "linear-gradient(135deg, #CC0000 0%, #DAA520 100%)",
  subtle: "linear-gradient(180deg, #FAFAF7 0%, #F5F0E8 100%)",
  theater: "linear-gradient(180deg, #111111 0%, #1A1A1A 100%)",
  redFade: "linear-gradient(90deg, #CC0000 0%, transparent 100%)",
  goldFade: "linear-gradient(90deg, #DAA520 0%, transparent 100%)",
  radialBurst: "radial-gradient(ellipse at center, #DAA520 0%, transparent 70%)",
} as const;

export const FONT = {
  display: "'Cormorant Garamond', Georgia, serif",
  heading: "'Josefin Sans', sans-serif",
  body: "'Be Vietnam Pro', sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const TEXT = {
  hero: { size: "72px", lineHeight: "1.05" },
  display: { size: "56px", lineHeight: "1.1" },
  h1: { size: "42px", lineHeight: "1.15" },
  h2: { size: "32px", lineHeight: "1.2" },
  h3: { size: "24px", lineHeight: "1.3" },
  bodyLg: { size: "20px", lineHeight: "1.6" },
  body: { size: "18px", lineHeight: "1.6" },
  small: { size: "14px", lineHeight: "1.5" },
  label: { size: "12px", lineHeight: "1.4" },
} as const;

export const SPACE = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "24px",
  6: "32px",
  7: "48px",
  8: "64px",
  9: "96px",
  10: "128px",
} as const;
