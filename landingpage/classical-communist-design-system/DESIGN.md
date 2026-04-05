# Brutal Soviet Propaganda Design System

A web design system channeling **Soviet propaganda poster art** — bloody, institutional, mechanical — for an academic course landing page on Scientific Socialism (CNXHKH). No elegance. No warmth. The state does not comfort you.

---

## 1. Design Philosophy

### Roots

One movement, pushed to its extreme:

**Soviet Propaganda Poster Art (1917-1960s)** — Rodchenko, El Lissitzky, Klutsis, the Stenberg brothers. Woodblock printing, letterpress, silk-screen. Art as a weapon. Type stamped into cheap newsprint. Blood red ink on institutional paper. Zero decoration that doesn't serve the message.

### Design Principle

> **Brutal. Institutional. Bloody. The state does not ask — it commands.**

We take the structural violence of propaganda printing: cheap paper, heavy ink, stamped type, diagonal slashes of red. Everything is ALL CAPS because the revolution does not whisper. Every border is sharp because the party does not soften edges. Every accent is blood red because that's the only color that matters.

This is not "Soviet-inspired aesthetic." This is the real thing, adapted for the web.

### Anti-Principles (What We Reject)

- Warmth, coziness, friendliness
- Rounded corners (compromise)
- Subtle color differences (weakness)
- Gentle hover effects (hesitation)
- Gold accents (bourgeois)
- Serif display fonts (aristocratic)
- Center-aligned layouts (indecisive)

---

## 2. Color Palette

### Primary Tokens

| Token | Hex | OKLCH | Role |
|---|---|---|---|
| `--color-ds-cream` | `#DDD5C0` | `oklch(0.87 0.025 85)` | Dirty newsprint — cold, institutional paper |
| `--color-ds-cream-dark` | `#C8BFA8` | — | Aged paper stain, code backgrounds |
| `--color-ds-ink` | `#000000` | `oklch(0 0 0)` | PURE BLACK — propaganda prints in pure black |
| `--color-ds-ink-secondary` | `#1A1A1A` | — | Secondary text |
| `--color-ds-ink-muted` | `#555555` | — | Tertiary text — still dark, not gray |
| `--color-ds-red` | `#990000` | `oklch(0.4 0.18 25)` | Dried blood — not fresh paint, not bright |
| `--color-ds-red-deep` | `#660000` | `oklch(0.28 0.15 25)` | Coagulated — destructive actions |
| `--color-ds-red-light` | `#CC1111` | — | Arterial spray — hover/active red |
| `--color-ds-olive` | `#2D3A1A` | `oklch(0.3 0.05 130)` | Military olive — the OTHER communist color |
| `--color-ds-khaki` | `#4A4A2A` | — | Army surplus — secondary military accent |
| `--color-ds-black` | `#000000` | — | True void |

### What's NOT in the palette

- **No gold** — gold is Art Deco, bourgeois, decorative
- **No warm cream** — warm = friendly = wrong
- **No grays** — gray is indecisive; use black or newsprint
- **No blue** — blue is liberal democracy

### Semantic Mapping (shadcn/ui)

| shadcn variable | Value | Meaning |
|---|---|---|
| `--background` | dirty newsprint | Page background |
| `--foreground` | pure black | All text |
| `--primary` | blood red `#990000` | Action, emphasis, authority |
| `--secondary` | pure black | Secondary actions |
| `--accent` | military olive | Alternative accent |
| `--muted` | stained paper | Subdued surfaces |
| `--destructive` | coagulated `#660000` | Danger |
| `--border` | pure black | All borders — BLACK |
| `--radius` | `0px` | ZERO. SHARP. NO MERCY. |

---

## 3. Typography

### Font Stack

| Role | Font | Weight | Why |
|---|---|---|---|
| Display | **Propaganda** (custom .ttf) | 700 | Soviet poster display type by Otto Lerma/MachacaCorp. Blocky, stamped, brutal. The only acceptable display font. |
| Heading | **Oswald** | 700, 600, 400 | Condensed, industrial sans-serif. Narrow like newspaper columns. |
| Body | **Be Vietnam Pro** | 400, 500, 700 | Purpose-built for Vietnamese diacritics. The only concession to readability. |
| Mono | **JetBrains Mono** | 400 | Data, code, statistics. |

### Typography Rules

1. **ALL CAPS EVERYTHING** — headings, labels, buttons, badges, card titles. The `h1-h6` elements have `text-transform: uppercase` globally.
2. **Section labels:** Propaganda font, `letter-spacing: 10-12px`, blood red. Screaming.
3. **Display text:** Propaganda font, `letter-spacing: -1px` to `-2px` (letters crunching together like a crowd), stamp text-shadow effect.
4. **Body text:** Be Vietnam Pro 400. The only place lowercase is acceptable.
5. **Numbers/Stats:** Propaganda font, oversized (64px+), blood red, stamp effect.
6. **Button text:** Oswald, ALL CAPS, `letter-spacing: 3px`.

### Stamp Text Effect

The signature typographic treatment — makes text look letterpress-stamped into paper:

```css
.stamp-text {
  text-shadow: 2px 2px 0 rgba(0,0,0,0.25), -1px -1px 0 rgba(0,0,0,0.08);
  -webkit-text-stroke: 0.5px rgba(0,0,0,0.15);
}
```

Applied to: hero title, section headers, stat numbers, CTA title.

### Display Text Class

```css
.display-text {
  font-family: var(--font-propaganda);
  color: var(--color-ds-ink);
  text-transform: uppercase;
  letter-spacing: -1px;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.2);
}
```

---

## 4. Spacing & Layout

### Grid

12-column grid, max content width 1200px. Left-heavy asymmetry preferred.

### Layout Principles

1. **Left-heavy** — content biased to the left. Propaganda posters don't center-align.
2. **Diagonal tension** — skewed accent lines, diagonal section slashes, rotated stamp buttons.
3. **Violent hierarchy** — one element DOMINATES per section, everything else submits. Hero title at 88px dwarfs 14px body text.
4. **Thick separators** — 6-8px red slashes between sections, not subtle hairlines.
5. **Generous but aggressive padding** — sections breathe, but borders are thick and close.

---

## 5. Decorative Elements

### 5.1 Accent Line — Full-Width Slash

The primary divider motif. Thicker, wider, more aggressive than before.

```css
.accent-line {
  height: 6px;
  background: var(--color-ds-red);
  transform: skewX(-25deg);
  width: 100%;
}
```

### 5.2 Constructivist Frame — Brutal Double Border

For featured content (exercises, assessments, discussions). Includes ink bleed shadow.

```css
.constructivist-frame {
  border: 5px solid var(--color-ds-red);
  box-shadow:
    inset 0 0 0 6px var(--color-ds-cream),
    inset 0 0 0 11px var(--color-ds-red),
    0 0 0 2px rgba(0,0,0,0.15); /* ink bleed */
  padding: 24px;
}
```

### 5.3 Corner Brackets — Always Partially Visible

RED brackets (not gold). Always visible at 30% opacity, grow to full on hover.

```css
.chevron-corner::before,
.chevron-corner::after {
  width: 36px; height: 36px;
  border-color: var(--color-ds-red);
  border-width: 5px;
  opacity: 0.3;
}
.chevron-corner:hover::before,
.chevron-corner:hover::after {
  opacity: 1;
  width: 48px; height: 48px;
}
```

### 5.4 Film Grain — Visible, Committed

10% opacity, `mix-blend-mode: multiply`. Should be VISIBLE.

```css
.film-grain::after {
  opacity: 0.10;
  mix-blend-mode: multiply;
}
```

### 5.5 Paper Fiber Texture

SVG fractalNoise on body background at 3% opacity. Adds physical weight.

### 5.6 Halftone Dots

Hover state effect — radial-gradient dot pattern instead of color transitions.

```css
.halftone-hover:hover {
  background-image: radial-gradient(circle, var(--color-ds-red) 1px, transparent 1px);
  background-size: 6px 6px;
}
```

### 5.7 Stamp Border Top

8px red top border on cards — like an official document stamp mark.

```css
.stamp-border-top {
  border-top: 8px solid var(--color-ds-red) !important;
}
```

### 5.8 Soviet Star Watermark

500px faded ★ character behind key sections (hero, CTA, exercises).

```css
.star-watermark::before {
  content: '★';
  font-size: 500px;
  color: var(--color-ds-red);
  opacity: 0.04;
}
```

### 5.9 Oversized Background Number

200px ghost number behind chapter cards via `data-number` attribute.

```css
.bg-number::before {
  content: attr(data-number);
  font-family: var(--font-propaganda);
  font-size: 200px;
  color: var(--color-ds-red);
  opacity: 0.06;
}
```

### 5.10 Section Slash

Full-width 8px red bar between sections. Replaces subtle dividers.

```css
.section-slash {
  height: 8px;
  background: var(--color-ds-red);
}
```

### 5.11 Red Banner Diagonal Stripes

45-degree repeating stripes at 3% opacity inside `.red-banner` sections.

```css
.red-banner::before {
  background: repeating-linear-gradient(
    45deg, transparent, transparent 40px,
    rgba(0,0,0,0.03) 40px, rgba(0,0,0,0.03) 42px
  );
}
```

---

## 6. Component Patterns

### 6.1 Cards

**Standard Card** — stamp-border-top, chevron corners, JOLT on hover (not glow).

```
┌═══════════════════════════╗  ← 8px red top border
│  LABEL (tracking: 8px)     │
│  ━━━━━━━━━━━━━━━━━━━━━━━  │  ← full-width accent line
│  TITLE (Propaganda font)   │
│  Body text...              │
│                            │
│  [STAMP BUTTON]  Read →    │
└────────────────────────────┘
```
- Background: newsprint card surface
- Border: 1px solid pure black
- Hover: `translate-y(-2px)` — JOLT, not glow
- No border-radius. No shadow. Sharp.

**Featured Card** — constructivist-frame + star-watermark.

### 6.2 Buttons

ALL CAPS. Hard shadow. Mechanical.

| Variant | Style |
|---|---|
| `default` | Blood red bg, cream text, 2px border, hard shadow on hover |
| `outline` | 3px red border, transparent bg, fills red on hover |
| `stamp` | 3px red border, -2deg rotation, straightens on hover, fills red |
| `link` | Red text, underline on hover, 2px tracking |
| `secondary` | Black bg, cream text |

All buttons: `hover:translate-y(-1px) hover:shadow-[3px_3px_0]`, `active:translate-y(1px) active:shadow-none`.

### 6.3 Navigation

Sticky black bar, 4px red bottom border, Propaganda font logo, Oswald uppercase links.

```
┌──────────────────────────────────────────────────────────┐
│  CNXHKH (Propaganda)    CONTENT  GROUP  VIDEO  RESOURCES │
│════════════════════════════════════════════════════════════│ ← 4px red
```

### 6.4 Section Headers

```
PART 01                          ← Propaganda, tracking: 12px, blood red
━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ← full-width accent line, 6px, skewed
THEORETICAL BASIS               ← Propaganda, 64px, stamp-text effect
```

### 6.5 Section Banners

Three variants:
- `.red-banner` — blood red bg, cream text, diagonal stripe overlay
- `.black-banner` — pure black bg, cream text
- `.olive-banner` — military olive bg, cream text

### 6.6 Theater (Video) Section

Pure black background, 4px red border on video frame. No gold. No chevrons.

### 6.7 Footer

Black background, 4px red top border. Propaganda font course code. All text uppercase with extreme tracking.

---

## 7. Motion & Animation

### Principles

- **Mechanical, not organic** — elements SLAM into place, not float
- **Harsh easing** — overshoot on entry, no ease-in-out
- **Faster stagger** — 60ms between items, not 100ms
- **JOLT on hover** — translate, not shadow. Elements move, not glow.

### Entry Animations

```css
/* Slam down — mechanical stamp */
@keyframes slam-down {
  0% { opacity: 0; transform: translateY(-40px) scaleY(1.3); }
  60% { opacity: 1; transform: translateY(4px) scaleY(0.95); }
  100% { opacity: 1; transform: translateY(0) scaleY(1); }
}

/* Diagonal slide-in — aggressive */
@keyframes slide-in {
  from { opacity: 0; transform: translateX(-80px) skewX(8deg); }
  to { opacity: 1; transform: translateX(0) skewX(0); }
}

/* Stamp — rubber stamp effect */
@keyframes stamp {
  0% { transform: scale(2) rotate(-5deg); opacity: 0; }
  50% { transform: scale(0.95) rotate(1deg); opacity: 1; }
  100% { transform: scale(1) rotate(-2deg); opacity: 1; }
}
```

### Hover Effects

- Cards: `translate-y(-2px)` — jolt up, not shadow glow
- Buttons: `translate-y(-1px) + shadow-[3px_3px_0]` — hard shadow, mechanical
- Resources: `translate-x(4px)` — shove right
- Corner brackets: grow from 36px to 48px, opacity 0.3 to 1.0

---

## 8. Iconography

Minimal geometric SVG icons. Red fill or currentColor.

- **★** (Soviet star): Section markers, bullets, watermarks. Character `★`, not SVG. Red fill.
- **Diamond** (◆): Divider ornaments only.
- **Arrow** (→): Navigation, CTAs. Geometric, angular.
- **Book, People, Download, Search, Play, Chevron**: Simple geometric outlines, 2px stroke.

All icons inherit `currentColor` from parent element — set `text-primary` on the container.

---

## 9. Responsive Behavior

| Breakpoint | Grid | Hero Title | Section Title |
|---|---|---|---|
| Desktop (>1024px) | 12 col | 88px | 64px |
| Tablet (768-1024) | 8 col | 56px | 42px |
| Mobile (<768px) | 4 col | 36px | 32px |

### Mobile Adaptations

- Constructivist frames: simplify to single 3px border
- Corner brackets: hide
- Stamp buttons: remove rotation
- Star watermark: reduce to 200px
- Background numbers: hide
- Section slash: reduce to 4px

---

## 10. Do's and Don'ts

### Do

- Use ALL CAPS on everything except body paragraphs
- Use thick borders (3-8px) — thin lines are weakness
- Use pure black `#000` for borders and text — not "near-black"
- Use the Propaganda font for all display/heading text
- Use stamp-text effect on large typography
- Use 8px red top borders on cards
- Use full-width accent lines
- Use star watermarks on key sections
- Make hover effects JOLT (translate), not GLOW (shadow)
- Use military olive for variety, not gold
- Commit to the film grain — 10% opacity minimum

### Don't

- Use rounded corners — EVER (0px radius is enforced globally)
- Use gold accents — bourgeois
- Use warm cream — too cozy (dirty newsprint only)
- Use subtle borders < 2px — invisible = irrelevant
- Use gentle fade-in animations — propaganda SLAMS
- Use centered layouts by default — left-heavy is aggressive
- Use lowercase in headings — the revolution does not whisper
- Use emoji — use ★ character or geometric SVG
- Use hover:shadow without hover:translate — movement > decoration
- Use more than 3 colors in any component — red, black, newsprint. That's it.

---

## 11. Reference Visual Language

### Soviet Propaganda Posters
- El Lissitzky, "Beat the Whites with the Red Wedge" (1919) — diagonal composition, red/black/white
- Rodchenko advertising posters — bold condensed typography, photomontage
- Gustav Klutsis political posters — radiating lines, oversized numbers
- Dmitri Moor, "Have You Volunteered?" (1920) — direct address, blood red, stark contrast
- TASS Windows propaganda posters — thick outlines, flat color, stamped text

### What We Take From Them
- Cheap paper (dirty newsprint, not clean white)
- Letterpress/woodblock stamp quality (text-shadow, text-stroke)
- Blood red as the ONLY accent (not fresh paint — dried, dark, coagulated)
- Pure black ink (not "near-black" — the real thing)
- ALL CAPS condensed type at extreme sizes
- Diagonal slashes of color cutting across compositions
- Oversized numbers and stars as background texture
- Military olive/khaki as secondary institutional color
- Film grain and paper texture (the medium is the message)

---

## 12. Implementation

### Tech Stack
- **Vite 6** + **React 19** + **Tailwind CSS v4** (OKLCH color space, `@theme` block)
- **shadcn/ui** (new-york style, Radix primitives) — 14 base components in `src/components/ui/`
- **24 custom components** in `src/components/` built on shadcn primitives

### CSS Architecture
- All tokens in `src/index.css` under `@theme {}` block
- shadcn semantic variables in `@layer base :root {}` using OKLCH values
- Utility classes (`.stamp-text`, `.star-watermark`, `.constructivist-frame`, etc.) in `src/index.css`
- No separate token file — CSS is the single source of truth

### Font Loading
```html
<!-- Google Fonts in index.html <link> tags -->
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Be+Vietnam+Pro:wght@400;500;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
```
```css
/* Custom font in index.css */
@font-face {
  font-family: 'Propaganda';
  src: url('/fonts/Propaganda.ttf') format('truetype');
  font-weight: 700;
  font-display: swap;
}
```

### Component Gallery
- Access via `?gallery` query parameter: `http://localhost:3004/?gallery`
- `src/Gallery.tsx` renders all 24 components with section wrappers
- Sections use `.red-banner`, `.black-banner`, `.olive-banner` for variety
- Film grain overlay on entire gallery page
