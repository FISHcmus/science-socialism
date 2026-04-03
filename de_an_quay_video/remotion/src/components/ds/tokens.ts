export const COLORS = {
  // Light substrate
  darkest: "#F7F3EE",
  dark: "#EDE8E0",

  // Amber-gold accents
  bronze: "#92400E",
  warmGold: "#B45309",
  gold: "#D97706",
  lightGold: "#FEF3C7",

  // Neutrals
  white: "#111827",
  muted: "#6B7280",
  body: "#374151",

  // Vietnam red accent
  vnRed: "#B91C1C",
} as const;

export const FONT = "'Be Vietnam Pro', system-ui, sans-serif";

export type ColorToken = keyof typeof COLORS;

export const GRADIENTS = {
  goldConic:
    "conic-gradient(#533517 0deg,#c49746 25deg,#feeaa5 50deg,#ffffff 60deg,#ffffff 71deg,#feeaa5 82deg,#ffc0cb 88deg,#5b8def 94deg,#c49746 110deg,#533517 180deg,#533517 180deg,#c49746 205deg,#feeaa5 230deg,#ffffff 240deg,#ffffff 251deg,#feeaa5 262deg,#ffc0cb 268deg,#5b8def 274deg,#c49746 290deg,#533517 360deg)",
  lightRadial:
    "radial-gradient(ellipse at center, #FAF6EF 0%, #EDE8E0 70%)",
  goldBar:
    "linear-gradient(180deg, #FEF3C7, #D97706, #92400E)",
} as const;

export const BLUR = { sm: 8, md: 16, lg: 24 } as const;

export const GLASS = {
  bgColor: "rgba(255, 252, 247, 0.92)",
  borderColor: "rgba(180, 83, 9, 0.25)",
  bgOpacity: 0.92,
  borderOpacity: 0.25,
} as const;

export const TEXT_SHADOW = "none" as const;

export const GOLD_RING = {
  glow: "#D97706",
  dark: "#533517",
  warm: "#c49746",
  light: "#feeaa5",
  pink: "#ffc0cb",
  blue: "#5b8def",
} as const;
