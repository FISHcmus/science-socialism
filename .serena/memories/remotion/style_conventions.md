# Style & Conventions

## Theme: Modern Vietnamese Light
- **Background:** Warm off-white `#F7F3EE` (projector-friendly - projectors wash out dark backgrounds)
- **Font:** Be Vietnam Pro (sans-serif, engineered for Vietnamese diacritics). Loaded via `@remotion/google-fonts/BeVietnamPro`
- **Accents:** Vietnam red `#B91C1C` (structure/card borders) + amber-gold `#D97706` (decoration/ring borders)
- **Text:** Dark on light - `#111827` (primary), `#374151` (body), `#6B7280` (muted)
- **Token inversion:** `COLORS.white = "#111827"` (dark text). Name kept for zero-refactor, value inverted.
- **TEXT_SHADOW = "none"** - all textShadow sites become no-ops
- **Overlay uses fixed `#000000`** - vignettes always darken regardless of theme

## Design Tokens (tokens.ts)
```
COLORS = { darkest: "#F7F3EE", dark: "#EDE8E0", bronze: "#92400E", warmGold: "#B45309",
           gold: "#D97706", lightGold: "#FEF3C7", white: "#111827", muted: "#6B7280",
           body: "#374151", vnRed: "#B91C1C" }
```
- GRADIENTS.goldConic - rotating gold ring border
- GLASS - backdrop-blur(12px), semi-transparent white bg
- GOLD_RING - 4-layer structure (border + padding + gradient + inner)

## DS Components (15)
tokens, CitationFooter, CountUpNumber, TypewriterText, SectionTitle, FilmGrain,
ArtDecoImage, MemberPiP, MemberVideoPlaceholder, MemberPlaceholder, BarChart,
Overlay, GlassPanel, LowerThird, IconGrid, FlowChart

## Animation Contract
- DS components receive pre-computed animation props (opacity, scale, progress, ringAngle)
- Section components compute values locally: useCurrentFrame() + spring() + interpolate()
- DS components NEVER call useCurrentFrame() directly
- Gold ring rotation: sections compute from frame/fps; Ladle stories use useRingAngle hook (rAF)

## Code Style
- TypeScript strict mode
- React functional components with `React.FC` type
- Remotion hooks: useCurrentFrame(), useVideoConfig(), interpolate(), spring()
- Video clips: `<OffthreadVideo>` (not `<Video>`)
- Static assets: staticFile('filename') referencing public/
- Components: PascalCase filenames
- Composition ID: kebab-case (`nhom7-video`)

## Projector Requirements
- Min font: 28px body, 32px labels, 48-56px titles
- Light background preferred
- High contrast dark text on light bg
- 3D meshes at 0.1-0.18 opacity
- Avoid subtle colors or thin lines < 2px

## Layout Pattern (all 8 member sections)
- Beat 1 (90 frames): Full-screen section title
- Beat 2 (remaining): Split - 720px content left + 240px MemberPiP right
- AbsoluteFill quirk: sets flexDirection: "column" inline, must override with style={{ flexDirection: "row" }}

## Tailwind
- Remotion: webpack pipeline via @remotion/tailwind + enableTailwind() in remotion.config.ts
- Ladle: separate Vite pipeline via postcss.config.js + tailwind.config.js
- Both share same tailwind.config.js and src/index.css

## Content Language
- All visible text in Vietnamese with proper diacritics
