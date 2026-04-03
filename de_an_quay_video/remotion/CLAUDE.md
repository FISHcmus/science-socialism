# Remotion Video - CLAUDE.md

Default to using **Bun** instead of Node.js for all operations (`bun install`, `bun run`, `bunx`).

## Scripts

- `bun run studio` - Remotion Studio (interactive preview)
- `bun run render` - Full quality MP4 render (`out/video.mp4`)
- `bun run render:draft` - Half-res draft (`out/draft.mp4`, 50% quality, 0.5x scale)
- `bun run ladle` - Ladle component story gallery (Vite-based, separate from Remotion's webpack)
- `bun run web` - Browser preview via `@remotion/player` + `Bun.serve()`
- `bunx tsc --noEmit` - Typecheck

## Bundler Split

- **Remotion Studio/Render**: webpack (internal to Remotion). Tailwind via `@remotion/tailwind` + `enableTailwind()` in `remotion.config.ts`
- **Ladle**: Vite (bundled with Ladle). Tailwind via `postcss.config.js` + `tailwind.config.js`
- Both share the same `tailwind.config.js` and `src/index.css`
- Do NOT use `@tailwindcss/vite` for Remotion - it only works with Vite

## Section Layout Pattern

All 8 member sections follow a 2-beat structure:
- **Beat 1** (90 frames / 3s): Full-screen section title slide
- **Beat 2** (remaining): Split layout - content area (left) + 480px MemberPiP sidebar (right)

## Key Architecture Rules

- Composition is 1920x1080 at 30fps (Root.tsx). Never code for other resolutions.
- AbsoluteFill sets `flexDirection: "column"` inline. Must override with `style={{ flexDirection: "row" }}` for horizontal layouts.
- DS components receive pre-computed animation props. They NEVER call `useCurrentFrame()` directly.
- Member video clips: use `<OffthreadVideo>` (not `<Video>`) for reliable frame extraction.
- Static assets: `staticFile('filename')` referencing `public/` directory.
