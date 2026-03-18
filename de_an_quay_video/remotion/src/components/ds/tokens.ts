export const COLORS = {
  // Dark substrate
  darkest: "#0a0a0f",
  dark: "#1a1a2e",

  // Gold monochrome
  bronze: "#533517",
  warmGold: "#c49746",
  gold: "#e8af48",
  lightGold: "#feeaa5",

  // Neutrals
  white: "#ffffff",
  muted: "#a0aec0",
  body: "#e0e0e0",

  // Special purpose — VietnamMap only
  vnRed: "#da251d",
} as const;

export const FONT = "'Cormorant Garamond', Georgia, serif";

export type ColorToken = keyof typeof COLORS;

export const GRADIENTS = {
  goldConic:
    "conic-gradient(#533517 0deg,#c49746 25deg,#feeaa5 50deg,#ffffff 60deg,#ffffff 71deg,#feeaa5 82deg,#ffc0cb 88deg,#5b8def 94deg,#c49746 110deg,#533517 180deg,#533517 180deg,#c49746 205deg,#feeaa5 230deg,#ffffff 240deg,#ffffff 251deg,#feeaa5 262deg,#ffc0cb 268deg,#5b8def 274deg,#c49746 290deg,#533517 360deg)",
  darkRadial:
    "radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 70%)",
  goldBar:
    "linear-gradient(180deg, #feeaa5, #c49746, #533517)",
} as const;

export const BLUR = { sm: 8, md: 16, lg: 24 } as const;

export const GLASS = {
  bgColor: "rgba(10, 10, 15, 0.9)",
  borderColor: "rgba(196, 151, 70, 0.4)",
  bgOpacity: 0.9,
  borderOpacity: 0.4,
} as const;

export const TEXT_SHADOW = "0 2px 8px rgba(0,0,0,0.95), 0 0 2px rgba(0,0,0,0.9)" as const;

export const GOLD_RING = {
  glow: "#e8af48",
  dark: "#533517",
  warm: "#c49746",
  light: "#feeaa5",
  pink: "#ffc0cb",
  blue: "#5b8def",
} as const;
