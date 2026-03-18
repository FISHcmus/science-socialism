# Style & Conventions

## Code
- TypeScript strict mode
- React functional components with `React.FC` type
- Remotion hooks: `useCurrentFrame()`, `useVideoConfig()`, `interpolate()`, `spring()`
- Video clips: use `<OffthreadVideo>` (not `<Video>`) for reliable frame extraction
- Static assets: `staticFile('filename')` referencing `public/` directory

## Naming
- Components: PascalCase (`TitleCard.tsx`)
- Composition IDs: kebab-case (`nhom6-video`)

## Content Language
- All visible text in Vietnamese with proper diacritics
- Font: Times New Roman (teacher requirement)
- Colors: blue (#63b3ed, #1a365d) and white theme

## Bundler
- Remotion uses webpack internally — do NOT configure vite
- Bun is used only as package manager and for the web preview server
