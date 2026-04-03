# Remotion Video Project - Nhóm 7 CNXHKH

## Purpose
Programmatic video production for a university group presentation (BAA00103 - Scientific Socialism).
Topic: "Xây dựng khối đại đoàn kết toàn dân tộc" (Building national unity)
9 members record themselves on camera; Remotion composites clips with animated overlays, titles, transitions.

## Tech Stack
- **Remotion v4** - React-based video framework (uses **webpack** internally, NOT Vite)
- **React 19 + TypeScript** (strict mode)
- **Bun** - package manager and dev server (NOT npm/yarn)
- **Tailwind CSS v3** - via `@remotion/tailwind` + `enableTailwind()` in `remotion.config.ts`
- **Ladle** - component story viewer (Vite-based Storybook alternative), uses separate PostCSS pipeline for Tailwind
- **Three.js** - 3D background meshes via `@remotion/three` + `@react-three/fiber` + `@react-three/drei`
- **D3** - `d3-geo` + `d3-shape` for Vietnam map visualization

## Project Location
`de_an_quay_video/remotion/`

## Structure
```
src/
  index.ts              - Remotion entry point (registerRoot)
  Root.tsx               - Composition: 1920x1080, 30fps, 24300 frames (13.5 min)
  MainVideo.tsx          - Main timeline (maps SECTIONS to Sequence + Background3D)
  constants.ts           - Re-exports tokens + SECTIONS array + MEMBER_COLORS + REGIONS
  index.css              - Tailwind directives (@tailwind base/components/utilities)
  hooks/
    useRingAngle.ts      - rAF-based rotation for Ladle stories (not used in Remotion render)
  components/
    TitleCard.tsx         - Animated title card (opening)
    ds/                  - Design system (15 components + tokens + 15 stories + DESIGN_SYSTEM.md)
    sections/            - 11 section components (intro + 8 members + conclusion + outro)
    shared/
      Background3D.tsx   - Three.js mesh background (opacity 0.1-0.18)
      VietnamMap.tsx      - D3-geo map (delayRender + staticFile)
.ladle/
  config.mjs             - Ladle config (stories glob)
  components.tsx          - Global provider (Be Vietnam Pro font, #F7F3EE bg, Tailwind CSS)
public/
  gadm41_VNM_1.json      - Vietnam administrative boundaries GeoJSON
```

## Video Specs
- 1920x1080, 30fps, 13.5 min (24,300 frames)
- 12 sections: title (5s) + intro (25s) + 8 member sections (60-90s each) + conclusion (30s)
- Member self-recorded video clips shown via MemberPiP sidebar (240px wide)
- 2-beat layout pattern: Beat 1 = full-screen title (90f), Beat 2 = content + MemberPiP sidebar

## Media Assets
`de_an_quay_video/media/T{part}-{index}/` - one subdirectory per member task:
- T1-1 to T1-3: Cơ sở lý luận (images + videos)
- T2-1 to T2-2: Thực tiễn VN (images + videos)
- T3-1 to T3-4: Trách nhiệm SV (images + videos)
- T3-4 (Nhân) still empty

## Scripts
- `bun run studio` - Remotion Studio (serves at 100.64.0.2:5173)
- `bun run render` - Full MP4 output
- `bun run render:draft` - Half-res, lower quality
- `bun run ladle` - Ladle component gallery
- `bunx tsc --noEmit` - Typecheck

## Grading Rubric
- Format 15% (images 5%, audio 5%, all members appear 5%)
- Theory 35% (identify 10%, analyze 25%)
- Application 50% (evaluate + apply in practice)
