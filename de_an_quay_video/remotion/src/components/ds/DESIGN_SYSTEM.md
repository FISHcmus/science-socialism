# Modern Vietnamese Design System - Technical Reference

> Remotion video composition DS for CNXHKH Nhom 7 presentation.
> 1920x1080 @ 30fps, projected on classroom projector.
> **Theme: Modern Vietnamese Light** — warm off-white base, Be Vietnam Pro sans-serif, Vietnam red + amber-gold accents.

## Architecture Overview

```
ds/
  tokens.ts          — Color palette, gradients, shadows, glass, blur, font
  index.ts           — Barrel re-exports (all components + types + tokens)

  # Primitives (no DS dependencies)
  CitationFooter.tsx — Gold-separated citation line
  CountUpNumber.tsx  — Animated number + optional gold ring
  TypewriterText.tsx — Character-reveal text
  SectionTitle.tsx   — Centered section header with gold accent bar
  FilmGrain.tsx      — SVG feTurbulence noise overlay
  ArtDecoImage.tsx   — Image frame with conic ring + sweep shimmer
  MemberPiP.tsx      — Fixed 480x1080 member video sidebar
  MemberVideoPlaceholder.tsx — Flexible-size member video frame
  MemberPlaceholder.tsx      — Full-slot member placeholder (legacy)
  BarChart.tsx       — Animated bar chart (gold gradient bars)

  # Composites (depend on other DS components)
  Overlay.tsx        — Fixed-dark vignette overlay + optional FilmGrain (uses #000, not theme color)
  GlassPanel.tsx     — Light frosted glass container + optional gold ring
  LowerThird.tsx     — Speaker name/role card (uses GlassPanel)
  IconGrid.tsx       — Staggered grid of GlassPanel cards
  FlowChart.tsx      — Node-arrow diagram (uses GlassPanel)
```

### Dependency Graph

```
FilmGrain  <── Overlay
GlassPanel <── LowerThird
           <── IconGrid
           <── FlowChart
```

All other components are standalone primitives with zero DS-internal dependencies.

---

## Design Tokens (`tokens.ts`)

### Color Palette

| Token | Hex | Tailwind | Role |
|-------|-----|----------|------|
| `darkest` | `#F7F3EE` | `bg-ds-darkest` | Warm off-white base background |
| `dark` | `#EDE8E0` | `bg-ds-dark` | Slightly darker warm tone for depth |
| `bronze` | `#92400E` | `text-ds-bronze` | Dark amber for borders, h3 text |
| `warmGold` | `#B45309` | `text-ds-warm-gold` | Amber-gold, richer accent |
| `gold` | `#D97706` | `text-ds-gold`, `bg-ds-gold` | Primary amber accent |
| `lightGold` | `#FEF3C7` | `text-ds-light-gold` | Pale amber tint for surfaces |
| `white` | `#1C1917` | `text-ds-white` | Primary dark text (inverted name!) |
| `muted` | `#78716C` | `text-ds-muted` | Warm gray labels |
| `body` | `#44403C` | `text-ds-body` | Warm dark gray body text |
| `vnRed` | `#B91C1C` | `text-ds-vn-red` | Vietnam red accent for structure |

### Complex Tokens (always inline style)

| Token | Purpose |
|-------|---------|
| `FONT` | `'Be Vietnam Pro', system-ui, sans-serif` — mapped to `font-sans` in Tailwind config. Engineered for Vietnamese diacritics. |
| `TEXT_SHADOW` | `"none"` — disabled for light theme. All 50+ application sites are no-ops. Kept in code for easy re-enable. |
| `GRADIENTS.goldConic` | 20-stop conic gradient for rotating ring borders (unchanged from dark theme - works on both) |
| `GRADIENTS.lightRadial` | Radial gradient for inner plates (`#FAF6EF` -> `#EDE8E0`) |
| `GRADIENTS.goldBar` | Vertical amber gradient for BarChart bars (`#FEF3C7` -> `#D97706` -> `#92400E`) |
| `GLASS.bgColor` | `rgba(255, 252, 247, 0.92)` — light frosted glass background |
| `GLASS.borderColor` | `rgba(180, 83, 9, 0.25)` — subtle amber border |
| `GOLD_RING.glow` | `#D97706` — outer glow layer color (amber) |
| `BLUR` | `{sm: 8, md: 16, lg: 24}` — currently unused by DS components directly |

---

## Tailwind + Inline Style Hybrid Pattern

Every DS component uses a **hybrid approach**: Tailwind classes for static layout/typography, inline `style={}` for animated and complex values.

### What is always Tailwind

```
Layout:       flex, flex-col, flex-row, items-center, justify-center, gap-*
              grid, grid-cols-*, absolute, relative, inset-0
Sizing:       w-full, h-full, h-px, w-[Npx], shrink-0
Typography:   font-sans, font-bold, font-normal, font-semibold
              text-[Npx], leading-tight/snug/normal/relaxed
              italic, whitespace-nowrap, select-none, text-center
Colors:       text-ds-gold, text-ds-body, text-ds-muted, text-ds-white
              bg-ds-gold, bg-ds-darkest
Misc:         overflow-hidden, pointer-events-none, rounded-*, box-border
```

### What is always inline style

```
Animated:     opacity, transform (translateX/Y, scale, rotate)
              width/height when animated (accentWidth, barHeight)
Complex CSS:  textShadow (TEXT_SHADOW), boxShadow (multi-value)
              background (GRADIENTS.*, linear-gradient with tokens)
              backdropFilter, WebkitBackdropFilter
              WebkitMask, WebkitMaskComposite, mask, maskComposite
Computed:     fontSize from dynamic props (size, fontSize params)
              border with token colors (border: `3px solid ${COLORS.gold}`)
              inset with numeric offset (inset: borderWidth)
```

### Why AbsoluteFill needs inline `flexDirection`

Remotion's `<AbsoluteFill>` sets `flexDirection: "column"` as an **inline style**. CSS specificity: inline styles > class-based styles. Therefore:

```tsx
// WRONG - Tailwind class overridden by AbsoluteFill's inline style
<AbsoluteFill className="flex-row">  // still renders as column!

// CORRECT - inline overrides inline
<AbsoluteFill style={{ flexDirection: "row" }}>
```

Other flex properties (`alignItems`, `justifyContent`) are NOT set by AbsoluteFill, so Tailwind works fine for those: `className="items-center justify-center"`.

---

## Component Reference

### Animation Contract

**No DS component calls `useCurrentFrame()` internally.** All animation state is computed by the parent (section component) and passed as props. DS components are **pure display functions** — given the same props, they render identically regardless of frame number.

Common animation prop patterns:

| Pattern | Props | Used by |
|---------|-------|---------|
| Visibility | `opacity` | All except TypewriterText, GlassPanel |
| Transform | `translateY`, `scale` | SectionTitle, LowerThird, MemberPlaceholder |
| Gold ring | `ringAngle` (+ `goldRing` flag) | CountUpNumber, GlassPanel, ArtDecoImage, MemberPiP, MemberVideoPlaceholder, MemberPlaceholder |
| Progressive reveal | `visibleChars`, `visibleCount`, `visibleNodes` | TypewriterText, IconGrid, FlowChart |
| Per-item arrays | `itemScales[]`, `nodeOpacities[]`, `barProgresses[]` | IconGrid, FlowChart, BarChart |
| Content value | `accentWidth`, `sweepProgress`, `displayValues[]` | SectionTitle, ArtDecoImage, BarChart |

### The Rotating Gold Ring

Six components implement the same 4-layer structure:

```
Layer 1: Outer glow      — filter: blur(12px), background: GOLD_RING.glow, opacity: 0.1-0.15
Layer 2: Clip container   — overflow: hidden, borderRadius
Layer 3: Conic gradient   — 200% or 300% oversized, transform: rotate(ringAngle deg)
Layer 4: Inner plate      — inset: borderWidth, GRADIENTS.darkRadial or COLORS.darkest
```

| Component | Conic size | Inner bg | borderRadius |
|-----------|-----------|----------|-------------|
| CountUpNumber | 200% | `COLORS.darkest` (warm off-white) | dynamic (`size+80` / 20) |
| GlassPanel | 200% | `COLORS.darkest` (warm off-white) | prop (default 16) |
| ArtDecoImage | 300% | `GRADIENTS.lightRadial` | prop (default 4) |
| MemberPiP | 300% | `GRADIENTS.lightRadial` | 10 (hardcoded) |
| MemberVideoPlaceholder | 200% | `GRADIENTS.lightRadial` | 6 (hardcoded) |
| MemberPlaceholder | 200% | `GRADIENTS.lightRadial` | 80 (circle) |

### Projector Readability Sizes

All font sizes are chosen for 1920x1080 projected on classroom projector:

| Role | Minimum | Where used |
|------|---------|-----------|
| Section label | 28-32px | SectionTitle (`text-[28px]`), section headers (`text-[32px]`) |
| Section title | 48-56px | SectionTitle (`text-[56px]`), section h2 (`text-[52px]`) |
| Card heading | 34-38px | Section cards (`text-[34px]` to `text-[38px]`) |
| Body/detail | 26-28px | Section cards (`text-[26px]` to `text-[28px]`) |
| Citation | 18px | CitationFooter (`text-lg`) |
| MemberPiP name | 32px | MemberPiP (`text-[32px]`) |
| MemberPiP label | 24px | MemberPiP (`text-2xl`) |
| LowerThird name | 32px | LowerThird (`text-[32px]`) |
| LowerThird role | 24px | LowerThird (`text-2xl`) |

### MemberPiP vs MemberVideoPlaceholder vs MemberPlaceholder

Three components serve the "member display" role:

| | MemberPiP | MemberVideoPlaceholder | MemberPlaceholder |
|---|---|---|---|
| **Sizing** | Fixed 480x1080 | Caller-defined width/height | Fills parent (absolute inset-0) |
| **Layout** | Video (440x840) + name below | Video fills entire frame | Background color + monogram circle + name |
| **Ring size** | 300% conic | 200% conic | 200% conic (circle) |
| **Name display** | Below video frame | Inside frame (placeholder only) | Centered over background |
| **Use case** | Right sidebar in 2-beat layout | Flexible video embed | Full-screen member intro |
| **Status** | Current primary | For custom layouts | Legacy (NhanIntro only) |

---

## Structural Critique and Recommendations

### Problem 1: Gold Ring Duplication (6x copy-paste)

The 4-layer gold ring pattern is duplicated across 6 components with minor variations (conic size, inner bg, borderRadius). This is the biggest DRY violation.

**Option A: Extract `<GoldRing>` primitive**

```tsx
interface GoldRingProps {
  ringAngle: number;
  size: { width: number; height: number };
  borderRadius: number;
  borderWidth: number;
  conicScale?: 2 | 3;           // 200% or 300%
  innerBackground?: string;      // darkRadial vs darkest
  glowOpacity?: number;
  children: ReactNode;
}
```

Pros:
- Single source of truth for ring behavior
- Bug fixes apply everywhere (e.g. glow opacity tuning)
- ~60 lines of ring code removed from each of 6 components

Cons:
- Adds one more abstraction layer
- Some components have subtle differences (MemberPlaceholder uses circle borderRadius = size/2)
- GlassPanel already IS a ring container when `goldRing=true` — would GlassPanel use GoldRing internally?

**Verdict: Recommended.** The ring pattern is complex enough (4 layers, vendor prefixes would come back if we needed mask effects) that centralizing it prevents divergence. GlassPanel would compose GoldRing. The 300% vs 200% conic scale is the only real variation.

### Problem 2: Three Member Components

MemberPiP and MemberVideoPlaceholder share ~80% of their code. MemberPlaceholder is legacy.

**Option A: Merge MemberPiP + MemberVideoPlaceholder**

Add a `sizing` prop to MemberPiP: `sizing: "sidebar" | "custom"`. When `"sidebar"`, use hardcoded 480x1080. When `"custom"`, require width/height props. The label-below-video behavior could be toggled with `showNameBelow`.

**Option B: MemberPiP composes MemberVideoPlaceholder**

MemberPiP becomes a thin wrapper that passes `width=440, height=840` to MemberVideoPlaceholder and adds the name/label section below.

**Option C: Keep separate, document clearly**

The components serve genuinely different layout contracts (fixed sidebar vs flexible embed). Merging adds complexity for negligible benefit.

**Verdict: Option B or C.** Option B is cleanest if we want DRY, but Option C is fine for a 15-component DS that won't grow much further.

### Problem 3: Per-item Array Props Inconsistency

Three components use the "uniform default + per-item array override" pattern but with inconsistent naming:

| Component | Uniform | Per-item |
|-----------|---------|----------|
| IconGrid | `itemScale`, `itemOpacity` | `itemScales[]`, `itemOpacities[]` |
| FlowChart | `nodeScale`, `nodeOpacity`, `arrowOpacity` | `nodeScales[]`, `nodeOpacities[]`, `arrowOpacities[]` |
| BarChart | `barProgress`, `barOpacity` | `barProgresses[]`, `barOpacities[]`, `displayValues[]` |

**Recommendation:** Standardize to a shared type:

```tsx
interface StaggerAnimationProps {
  /** Uniform value for all items (default 1) */
  itemOpacity?: number;
  itemScale?: number;
  /** Per-item overrides — takes precedence when provided */
  itemOpacities?: number[];
  itemScales?: number[];
}
```

Each component extends this with its own content-specific additions (`displayValues`, `arrowOpacities`). This makes the API learnable — once you know IconGrid's animation pattern, FlowChart and BarChart work the same way.

### Problem 4: Flat Directory Structure

All 15 components + stories in one flat directory = 31 files. This is manageable but approaching the threshold where grouping helps navigation.

**Option A: Keep flat**

15 components is below the "needs subdirectories" threshold. Barrel `index.ts` provides the API surface. Stories co-located with components is the Storybook convention.

**Option B: Group by role**

```
ds/
  tokens.ts
  index.ts
  primitives/    — CitationFooter, CountUpNumber, TypewriterText, SectionTitle, FilmGrain
  layout/        — GlassPanel, Overlay, LowerThird
  data-viz/      — BarChart, FlowChart, IconGrid
  member/        — MemberPiP, MemberVideoPlaceholder, MemberPlaceholder
  media/         — ArtDecoImage
```

**Option C: Group by pattern**

```
ds/
  tokens.ts
  index.ts
  ring/          — GoldRing, ArtDecoImage, MemberPiP, MemberVideoPlaceholder, MemberPlaceholder, CountUpNumber
  glass/         — GlassPanel, LowerThird, IconGrid, FlowChart
  text/          — SectionTitle, TypewriterText, CitationFooter
  overlay/       — Overlay, FilmGrain
  chart/         — BarChart
```

**Verdict: Keep flat (Option A).** The DS is scoped to one video project and won't grow beyond ~20 components. Subdirectories add import path complexity (`../ds/primitives/CitationFooter` vs `../ds/CitationFooter`) without meaningful navigation benefit. The barrel `index.ts` already provides the clean API.

### Problem 5: BLUR Token Unused

`BLUR = { sm: 8, md: 16, lg: 24 }` is exported but GlassPanel hardcodes `blur = 16` as default and accepts a numeric prop. No component references `BLUR.*`.

**Recommendation:** Either use `BLUR.md` as the GlassPanel default and reference `BLUR.sm`/`BLUR.lg` in other contexts, or remove the token. Dead tokens are confusing.

---

## Summary of Recommendations

| Priority | Change | Effort | Impact |
|----------|--------|--------|--------|
| High | Extract `<GoldRing>` primitive | Medium | Eliminates 6x duplication of complex 4-layer pattern |
| Medium | Standardize per-item animation prop naming | Low | API consistency across IconGrid/FlowChart/BarChart |
| Low | Compose MemberPiP from MemberVideoPlaceholder | Low | Minor DRY improvement |
| Low | Remove or use BLUR token | Trivial | Clean up dead code |
| Skip | Subdirectory grouping | Medium | Not worth it at current scale |
