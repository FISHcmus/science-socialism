# Classical Communist Design System

A web design system blending **Soviet Constructivism**, **Art Deco geometry**, and **Vietnamese political poster aesthetics** for an academic course landing page on Scientific Socialism (CNXHKH).

---

## 1. Design Philosophy

### Roots

Three movements converge:

1. **Soviet Constructivism (1920s-30s)** — El Lissitzky, Rodchenko. Functional art: pure geometric forms, asymmetric tension, photomontage, bold sans-serif typography. Art serves the people, not decoration.

2. **Art Deco (1920s-40s)** — Geometric ornamentation, symmetry, sunbursts, chevrons, metallic accents. Where Constructivism strips decoration, Art Deco celebrates controlled opulence.

3. **Vietnamese Political Poster Art** — Adapts Soviet visual language with warmer, more saturated palettes (brighter reds, folk-art blues and oranges). Softer than Soviet brutalism, more human, more tropical warmth.

### Where They Overlap

- Bold geometric forms (circles, triangles, radiating lines)
- Limited, high-contrast color palettes
- Emphasis on monumentality and hierarchy
- Worker/people-centric imagery
- Strong diagonal compositions creating dynamism
- Typography as architecture, not just text

### Design Principle

> **Authoritative but warm. Geometric but human. Historical but modern.**

We take the structural rigor of Constructivism, the decorative confidence of Art Deco, and the human warmth of Vietnamese poster art. The result should feel like a curated political exhibition — not a propaganda poster, not a tech startup.

---

## 2. Color Palette

### Primary Tokens

| Token | Hex | Role | Origin |
|---|---|---|---|
| `--color-bg` | `#FAFAF7` | Page background | Warm cream, poster paper |
| `--color-surface` | `#F5F0E8` | Card/panel background | Aged parchment |
| `--color-surface-white` | `#FFFFFF` | Clean surface variant | Modern contrast |
| `--color-ink` | `#1A1A1A` | Primary text | Near-black, not pure |
| `--color-ink-secondary` | `#4A4A4A` | Secondary text | Softer read |
| `--color-ink-muted` | `#7A7A7A` | Tertiary/caption text | Recedes |

### Accent Tokens

| Token | Hex | Role | Origin |
|---|---|---|---|
| `--color-red` | `#CC0000` | Primary accent, structure | Soviet red |
| `--color-red-deep` | `#8B0000` | Hover/active state | Darkened red |
| `--color-red-light` | `#FEE2E2` | Red tint background | Soft alert |
| `--color-gold` | `#DAA520` | Secondary accent, decoration | Art Deco gold |
| `--color-gold-deep` | `#B8860B` | Hover/active state | Darkened gold |
| `--color-gold-light` | `#FEF3C7` | Gold tint background | Warm highlight |
| `--color-black` | `#111111` | Cinematic/theater sections | Pure contrast |

### Semantic Tokens

| Token | Hex | Usage |
|---|---|---|
| `--color-border` | `#D4C5B0` | Card borders, dividers |
| `--color-border-strong` | `#CC0000` | Accent borders, active states |
| `--color-overlay` | `rgba(0,0,0,0.7)` | Dark overlays for video theater |
| `--color-highlight` | `rgba(218,165,32,0.15)` | Text highlight, selection |

### Gradient Tokens

```css
--gradient-hero: linear-gradient(135deg, #CC0000 0%, #DAA520 100%);
--gradient-subtle: linear-gradient(180deg, #FAFAF7 0%, #F5F0E8 100%);
--gradient-theater: linear-gradient(180deg, #111111 0%, #1A1A1A 100%);
--gradient-red-fade: linear-gradient(90deg, #CC0000 0%, transparent 100%);
--gradient-gold-fade: linear-gradient(90deg, #DAA520 0%, transparent 100%);
--gradient-radial-burst: radial-gradient(ellipse at center, #DAA520 0%, transparent 70%);
```

---

## 3. Typography

### Font Stack

| Role | Font | Weight | Fallback | Why |
|---|---|---|---|---|
| Display (H1, Hero) | **Cormorant Garamond** | 700, 600 | Georgia, serif | High-contrast classical serif. Monumental, editorial. Bridges Art Deco elegance with academic authority. |
| Heading (H2-H4) | **Josefin Sans** | 700, 600, 400 | sans-serif | Geometric sans-serif with Art Deco DNA. Clean, architectural letter-forms. |
| Body | **Be Vietnam Pro** | 400, 500, 700 | sans-serif | Purpose-built for Vietnamese diacritics. Modern, readable, warm. |
| Accent/Label | **Josefin Sans** | 600 | sans-serif | Section labels, stat numbers, navigation. Uppercase with wide tracking. |
| Mono/Code | **JetBrains Mono** | 400 | monospace | Data tables, statistics, timestamps. |

### Type Scale

Based on a 1.333 ratio (perfect fourth), anchored at 18px body.

| Token | Size | Line Height | Usage |
|---|---|---|---|
| `--text-hero` | 72px | 1.05 | Hero title only |
| `--text-display` | 56px | 1.1 | Section titles |
| `--text-h1` | 42px | 1.15 | Page headings |
| `--text-h2` | 32px | 1.2 | Section headings |
| `--text-h3` | 24px | 1.3 | Sub-headings |
| `--text-body` | 18px | 1.6 | Paragraph text |
| `--text-body-lg` | 20px | 1.6 | Lead paragraphs |
| `--text-small` | 14px | 1.5 | Captions, labels |
| `--text-label` | 12px | 1.4 | Overline labels, tags |

### Typography Rules

1. **Display text**: Cormorant Garamond, always. Title case or sentence case. Never all-caps for serif.
2. **Section labels**: Josefin Sans, uppercase, `letter-spacing: 4px`, always paired with a geometric accent (line, chevron, or dot).
3. **Body text**: Be Vietnam Pro 400. Max line width: 720px (40-45 characters for Vietnamese).
4. **Bold in body**: Be Vietnam Pro 700, use `--color-red` sparingly for key terms.
5. **Numbers/Stats**: Josefin Sans 700 at `--text-display` size. Tabular figures.

---

## 4. Spacing & Layout

### Spacing Scale (8px base)

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Tight internal padding |
| `--space-2` | 8px | Icon gaps, inline spacing |
| `--space-3` | 12px | Small component padding |
| `--space-4` | 16px | Standard padding |
| `--space-5` | 24px | Card padding, gaps |
| `--space-6` | 32px | Section internal spacing |
| `--space-7` | 48px | Between components |
| `--space-8` | 64px | Between sections |
| `--space-9` | 96px | Major section breaks |
| `--space-10` | 128px | Hero padding, page margins |

### Grid System

12-column grid, 24px gutters. Max content width: 1200px.

```
Desktop (>1024px):  12 columns, 24px gutter
Tablet (768-1024):  8 columns, 20px gutter
Mobile (<768px):    4 columns, 16px gutter
```

### Constructivist Layout Principles

1. **Asymmetric bias**: Content left-weighted (5-7 columns), supporting elements right (3-5 columns). Avoid centered-everything layouts.
2. **Diagonal tension**: At least one element per major section should break the grid — a skewed accent line, an overlapping image, or an angled divider.
3. **Generous negative space**: Sections breathe with `--space-8` to `--space-9` vertical padding. Density inside cards, air between them.
4. **Vertical rhythm**: All vertical spacing multiples of 8px. Headlines snap to a 48px baseline grid.

---

## 5. Geometric Decorative Elements

These are the visual signatures that make this system feel Art Deco / Constructivist, not generic.

### 5.1 Diagonal Accent Line

The primary divider motif. A red line with a skew, fading out.

```css
.accent-line {
  height: 3px;
  background: linear-gradient(90deg, var(--color-red) 0%, transparent 100%);
  transform: skewX(-20deg);
  width: 60%;
}
```

### 5.2 Double-Border Frame (Constructivist Edge)

Cards and panels use a double-border treatment — inner border in cream, outer in red.

```css
.constructivist-frame {
  border: 3px solid var(--color-red);
  box-shadow: inset 0 0 0 6px var(--color-surface), inset 0 0 0 9px var(--color-red);
  padding: 24px;
}
```

### 5.3 Corner Chevrons

Art Deco corner brackets on featured cards.

```css
.chevron-corner::before,
.chevron-corner::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: var(--color-gold);
  border-style: solid;
}
.chevron-corner::before {
  top: -2px; left: -2px;
  border-width: 3px 0 0 3px; /* top-left */
}
.chevron-corner::after {
  bottom: -2px; right: -2px;
  border-width: 0 3px 3px 0; /* bottom-right */
}
```

### 5.4 Sunburst / Radiating Lines

Behind hero sections or stat cards. Pure CSS radial pattern.

```css
.sunburst {
  background: conic-gradient(
    from 0deg,
    var(--color-gold) 0deg, transparent 15deg,
    transparent 30deg, var(--color-gold) 30deg, transparent 45deg,
    transparent 60deg, var(--color-gold) 60deg, transparent 75deg,
    /* repeat for full circle */
  );
  opacity: 0.08;
}
```

### 5.5 Gold Star Accent

A 5-pointed star (Vietnamese socialist symbol) used as a decorative bullet or section marker. Implemented as SVG inline, sized at 16-24px.

```svg
<svg viewBox="0 0 24 24" fill="#DAA520">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
</svg>
```

### 5.6 Geometric Section Divider

A horizontal rule with a centered diamond or star motif.

```
──────────── ◆ ────────────
```

Implemented as `::before` + `::after` lines with a centered SVG/unicode element.

### 5.7 Film Grain Overlay

Subtle noise texture at 2-3% opacity on the page background. Adds vintage poster feel without reducing readability.

```css
.grain::after {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,..."); /* noise pattern */
  pointer-events: none;
  z-index: 9999;
}
```

---

## 6. Component Patterns

### 6.1 Cards

Two tiers:

**Standard Card** — White surface, subtle border, corner chevrons on hover.
```
┌─────────────────────┐
│  LABEL              │
│  ──── (red line)    │
│  Title              │
│  Body text...       │
│                     │
│  [Action →]         │
└─────────────────────┘
```
- Background: `--color-surface-white`
- Border: `1px solid --color-border`
- Border-radius: `2px` (sharp, not rounded — geometric)
- Hover: `border-color: --color-red`, corner chevrons appear
- Shadow: `0 2px 8px rgba(0,0,0,0.06)`

**Featured Card** — Double-border constructivist frame, gold accent.
- Uses `.constructivist-frame` treatment
- Label text in gold
- Larger padding (`--space-6`)

### 6.2 Buttons

**Primary**: Red background, cream text, no border-radius.
```css
.btn-primary {
  background: var(--color-red);
  color: var(--color-bg);
  padding: 12px 32px;
  border: none;
  font-family: 'Josefin Sans';
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 200ms;
}
.btn-primary:hover { background: var(--color-red-deep); }
```

**Secondary**: Gold border, transparent background.
```css
.btn-secondary {
  background: transparent;
  color: var(--color-gold);
  border: 2px solid var(--color-gold);
  /* same padding/font as primary */
}
```

**Ghost**: Text-only with underline on hover.

### 6.3 Navigation

Sticky top bar. Dark background (`--color-ink`) with gold text. Josefin Sans uppercase labels.

```
┌──────────────────────────────────────────────────┐
│  ★ CNXHKH   NỘI DUNG  NHÓM  VIDEO  TÀI LIỆU   │
└──────────────────────────────────────────────────┘
```

Active item: red underline (3px, slight skew).

### 6.4 Section Headers

Every major section follows this pattern:

```
PHẦN 01                          ← Josefin Sans, gold, uppercase, tracking: 4px
━━━━━━━━                         ← Diagonal accent line, red
Tổng quan môn học                ← Cormorant Garamond, 56px, ink
Giới thiệu chương trình học      ← Be Vietnam Pro, 20px, ink-secondary
```

### 6.5 Theater (Video) Section

Full-width dark section that breaks the cream theme.

```
Background: --gradient-theater (#111 → #1A1A1A)
Padding: 96px vertical
Video: centered, max-width 960px, 16:9
Border: 2px solid --color-gold (Art Deco frame)
Corner chevrons in gold
```

Below video: caption in Be Vietnam Pro, gold color.

---

## 7. Motion & Animation

### Principles

- **Constructivist energy**: Diagonal slide-ins, not fade-ups. Elements enter from the left at a slight skew.
- **Restrained**: 1-2 animations per viewport. Not everything moves.
- **Purposeful**: Motion reveals content hierarchy (title first, then subtitle, then body).
- **Snappy**: 200-400ms duration. `cubic-bezier(0.34, 1.56, 0.64, 1)` for slight overshoot.

### Entry Animations

```css
/* Diagonal slide-in (primary) */
@keyframes slide-in {
  from { opacity: 0; transform: translateX(-40px) skewX(3deg); }
  to { opacity: 1; transform: translateX(0) skewX(0); }
}

/* Accent line sweep */
@keyframes sweep {
  from { width: 0; }
  to { width: 60%; }
}

/* Stagger delay pattern */
.stagger-1 { animation-delay: 0ms; }
.stagger-2 { animation-delay: 100ms; }
.stagger-3 { animation-delay: 200ms; }
.stagger-4 { animation-delay: 300ms; }
```

### Scroll-Triggered Reveals

Use `IntersectionObserver` (no library). Elements start with `opacity: 0; transform: translateX(-40px)` and animate in when 20% visible.

### Hover Effects

- Cards: border color transition to red + corner chevrons fade in (200ms)
- Buttons: background darken + slight `translateY(-1px)`
- Links: red underline sweeps from left to right
- Images: subtle `scale(1.02)` with overflow hidden

---

## 8. Iconography

No icon library. Custom geometric SVG icons matching the Art Deco / Constructivist language:

- **Star** (★): Section markers, bullets. Gold fill.
- **Diamond** (◆): Divider ornaments. Red fill.
- **Arrow** (→): Navigation, CTAs. Geometric, not rounded.
- **Chevron** (‹ ›): Pagination, breadcrumbs.
- **Book**: Chapters. Geometric outline style.
- **Play**: Video. Triangle in circle, constructivist.
- **People**: Members. Simplified geometric silhouettes.
- **Download**: Resources. Downward arrow in bracket.

All icons: 24x24px grid, 2px stroke or solid fill, square caps.

---

## 9. Responsive Behavior

| Breakpoint | Width | Grid | Font Scale |
|---|---|---|---|
| Desktop | > 1024px | 12 col | 1x (base) |
| Tablet | 768-1024px | 8 col | 0.9x |
| Mobile | < 768px | 4 col | 0.8x |

### Mobile Adaptations

- Hero title: 42px (down from 72px)
- Section titles: 36px (down from 56px)
- Diagonal accent lines: reduce skew to `-10deg`
- Double-border frames: simplify to single border
- Corner chevrons: hide on mobile
- Navigation: hamburger menu with full-screen overlay (dark bg, gold links)
- Asymmetric layouts: stack to single column

---

## 10. Do's and Don'ts

### Do

- Use diagonal accent lines liberally — they're the system's signature
- Keep body text in Be Vietnam Pro — Vietnamese diacritics matter
- Maintain high contrast (WCAG AA minimum)
- Use gold for decoration, red for structure
- Let sections breathe with generous padding
- Use the double-border frame for featured content only (max 2 per page)
- Keep border-radius at 0-2px — sharp geometry is intentional

### Don't

- Use rounded corners > 4px — breaks the geometric language
- Use gradient text — reads as "tech startup"
- Use purple or blue as primary colors — breaks the political palette
- Center-align everything — asymmetry is a feature
- Animate every element — restraint matters
- Use generic sans-serifs (Inter, Roboto, Arial) — they have no character
- Add drop shadows > 8px spread — keep it tight and architectural
- Use emoji — use geometric SVG icons instead

---

## 11. Reference Visual Language

### Soviet Constructivism

- El Lissitzky, "Beat the Whites with the Red Wedge" (1919) — diagonal composition, red/black/white
- Rodchenko advertising posters — bold typography, photomontage
- Gustav Klutsis political posters — radiating lines, photomontage

### Art Deco

- Cassandre travel posters — geometric simplification, metallic colors
- Rockefeller Center facade — geometric relief patterns
- Art Deco typography — geometric sans-serifs, wide tracking

### Vietnamese Political Posters

- Warmer reds (more orange than Soviet crimson)
- Folk art elements softening geometric rigor
- Star motif (5-pointed, yellow on red) as universal marker
- Crowd/unity imagery — fitting for our topic (national solidarity)

---

## 12. Implementation Notes

### CSS Custom Properties

All tokens defined as CSS custom properties on `:root`. Components reference tokens, never raw hex values.

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Josefin+Sans:wght@400;600;700&family=Be+Vietnam+Pro:wght@400;500;700&display=swap" rel="stylesheet">
```

Load display fonts (Cormorant, Josefin) with `display=swap` to prevent FOIT.

### Tailwind Integration

Extend Tailwind config with custom colors, fonts, and spacing tokens. Use `@apply` sparingly — prefer utility classes for one-off styling, component classes for repeated patterns.

### Ladle Stories

Every component gets a Ladle story showing:
1. Default state
2. Variants (if applicable)
3. Hover/active states
4. Responsive behavior (use Ladle's viewport controls)
5. Dark section variant (for theater/overlay contexts)
