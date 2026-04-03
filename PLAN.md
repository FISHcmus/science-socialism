# Remotion Video - Current Status & Next Steps

## Completed
- [x] Symlinked media/ into remotion/public/media/ for staticFile()
- [x] Wired 12 images into ArtDecoImage src props (6 sections)
- [x] Wired 8 member videos into MemberPiP (all sections with video)
- [x] Fixed section labels in constants.ts to match storyboard
- [x] Verified HCM quote + 54 dan toc stat already present in S2.1
- [x] Re-encoded all videos to H264 720x1280 2Mbps (320MB -> 156MB)
- [x] Fixed .mov HEVC browser error (converted to .mp4)
- [x] Updated Section11 video ref from .mov to .mp4
- [x] Switched MemberPiP from OffthreadVideo to Video (studio perf)
- [x] Commented out Background3D in MainVideo.tsx
- [x] Created 3 new DS components: SplitCompare, Timeline, AlertCard
- [x] Set up chrome-devtools MCP for asus browser visual QA

## In Progress: Make 8 Sections Structurally Unique

All 8 sections currently look identical (same card stack, same animations, same page-flip). Need to rewrite each with unique layout, entrance animation, and page-flip transition.

### Section Rewrite Plan

| # | Section | Layout | Card Entrance | Page-Flip | Status |
|---|---------|--------|--------------|-----------|--------|
| 1 | S1.1 ThucNhi | FlowChart vertical (3 nodes) | Scale pop-in (0.7->1.0) | Horizontal wipe | TODO |
| 2 | S1.2 ChauNhi | IconGrid 3-col / 2-col | Scale-bounce (0->1.15->1.0) | Rotate-fade | TODO |
| 3 | S1.3 PhungNhi | FlowChart horizontal + TypewriterText | Fade + slide-down | Scale-down/up | TODO |
| 4 | S2.1 HuynhNhi | SplitCompare (green vs red) | Curtain (opposite sides) | Vertical split | DONE |
| 5 | S2.2 Phu | BarChart + GlassPanel | Bar grow + fade-scale | Dissolve-blur | DONE |
| 6 | S3.1 QuynhNhu | Timeline (gold line + dots) | Cascade-down | Page curl (skew) | DONE |
| 7 | S3.2 ToNhu | AlertCard (warning/danger/success) | Shake-in from right | Horizontal flip | DONE |
| 8 | S3.3 YNhu | FlowChart horizontal (progression) | Scale-in with glow | Slide-down | DONE |
| 9 | S3.4 Nhan | GlassPanel goldRing + row | Fan-out from center | Zoom-out | DONE |

### New DS Components (created, ready to use)
- `ds/SplitCompare.tsx` - Two side-by-side panels with colored left borders (for S2.1)
- `ds/Timeline.tsx` - Vertical gold line with dots and cards (for S3.1)
- `ds/AlertCard.tsx` - Warning/danger/success cards with icon (for S3.2)

### Existing DS Components to use (currently unused in sections)
- `FlowChart` - horizontal/vertical flow with arrows (for S1.1, S1.3, S3.3)
- `IconGrid` - grid layout (for S1.2)
- `BarChart` - animated bars (for S2.2)
- `GlassPanel` - frosted glass card (for S2.2, S3.1, S3.4)
- `TypewriterText` - typewriter reveal (for S1.3)

### Implementation approach
Each section rewrite:
1. Read current body via `mcp__serena__jet_brains_find_symbol`
2. Rewrite with new layout/transitions, keeping content and media paths
3. Replace via `mcp__serena__replace_symbol_body`
4. Fix duplicate `export const` issue after replace
5. Typecheck with `bunx tsc --noEmit`

### Key constraints
- DS components never call useCurrentFrame() - animation values are props
- Content area: 1440x1080 with padding, ~850px usable for content
- Min fonts: 28px body, 36px headings
- All page-flip transitions use 30-frame duration
- Vietnamese diacritics must be preserved exactly

## After Section Rewrites
- [ ] Visual QA each section via chrome-devtools MCP on asus browser
- [ ] Draft render (`bun run render:draft`)
- [ ] Final 1080p render (`bun run render`)
- [ ] Submit video
