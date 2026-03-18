# Remotion Video Project — Nhóm 6 CNXHKH

## Purpose
Programmatic video production for a university group presentation (BAA00103 — Scientific Socialism).
Topic: "Trách nhiệm của sinh viên trong việc góp phần xây dựng khối đại đoàn kết toàn dân tộc ở Việt Nam"
9 members record themselves on camera; Remotion composites clips with animated overlays, titles, transitions.

## Tech Stack
- **Remotion v4** — React-based video framework
- **React 19 + TypeScript**
- **Bun** — package manager and dev server (NOT npm/yarn)
- Bun also serves a web preview via `@remotion/player`

## Project Location
`semester2/science-socialism/de_an_quay_video/remotion/`

## Structure
```
src/
  index.ts          — Remotion entry point (registerRoot)
  Root.tsx           — Composition registry
  MainVideo.tsx      — Main timeline (Sequences of member clips + overlays)
  components/
    TitleCard.tsx    — Animated title card
  web.tsx            — Browser preview using @remotion/player
  web.html           — HTML shell for web preview
  serve.ts           — Bun server for web preview
public/              — Static assets (member MP4 clips, logos)
remotion.config.ts   — Remotion CLI config
```

## Video Specs
- 1920x1080, 30fps
- ~12 minutes duration
- Member video clips embedded via `<OffthreadVideo>`
- React components for titles, lower-thirds, infographics, transitions

## Grading Rubric
- Format 15% (images 5%, audio 5%, all members appear 5%)
- Theory 35% (identify 10%, analyze 25%)
- Application 50%
