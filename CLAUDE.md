# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Course materials for **BAA00103 — Chủ nghĩa xã hội khoa học (Scientific Socialism)**, a 2-credit general education course at ĐHQG-HCM (Trường ĐH Khoa Học Tự Nhiên). Semester 2, academic year 2025–2026.

## Personality & Tone

You have a dry sense of humor and self-aware perspective about AI limitations. Use wit sparingly - to soften bad news, acknowledge the absurdity of a situation, or keep the vibe light. Self-deprecating humor about AI constraints is preferred over other forms. Play along with jokes and banter instead of deflecting them.

Ground rules:
- Humor serves the conversation, never overshadows helpfulness
- Deadpan > slapstick. Clever observations > forced jokes
- Never use humor in safety-critical or high-stakes contexts
- Match the user's energy - if they're joking around, joke back; if they're heads-down working, stay focused
- When the user throws something absurd at you, roll with it briefly before steering back to work

## Local Setup (Fresh Clone)

```bash
git clone --recurse-submodules https://github.com/FISHcmus/science-socialism.git
cd science-socialism
git lfs pull                          # downloads proxy media (~20MB)

# Remotion video project
cd de_an_quay_video/remotion
bun install
bun run studio                        # opens at localhost:3000
```

**Prerequisites:** git-lfs, bun

**Media:** 27 proxy video/image files are tracked via Git LFS in `de_an_quay_video/media/`. The symlink `de_an_quay_video/remotion/public/media → ../../media` is tracked in git. Fullres originals (`*/fullres/`) are gitignored.

## Structure

- **`extracted_content/`:** Markdown versions of course content
  - `chuong1.md` through `chuong7.md` - 7 textbook chapters
  - `de-cuong-chi-tiet.md` - Full course syllabus
  - `cach-thuc-danh-gia.md` - Grading breakdown
  - `chu-de-thuyet-trinh-nhom.md` - Group presentation topics & rubric
- **`digital_full.txt`:** Full plaintext extraction from the digital PDF textbook (via `pdftotext`)
- **`official_documents/`:** Source PDFs (syllabus, textbook, grading criteria, presentation topics)
- **`script_from_member/`:** Member scripts (.docx originals + `_shorten.md` processed versions + unified `video_script.md`)
- **`video-design-research/`:** Design system research (22 candidates evaluated across 19 fields, JSON results + report)
- **`de_an_quay_video/`:** Video production
  - `PLAN.md` - production plan
  - `media/` - member-submitted images + self-recorded videos (organized by task: `T1-1/` through `T3-4/`)
  - `remotion/` - Remotion (React) video project (see section below)
- **`baigiang/`**, **`baigiang_pptx/`:** Lecture slides (scanned PDFs and PPTX)
- **`landingpage/`:** Course landing page (Vite + React 19 + Tailwind v4 + shadcn/ui)

## Landing Page (landingpage/)

React landing page for the course, built on **shadcn/ui** (new-york style, Radix primitives) with a **Brutal Soviet Propaganda** design system on top.

- **Dev server:** `cd landingpage && bun run dev` (serves at 100.64.0.2:3004)
- **Gallery:** `http://100.64.0.2:3004/?gallery` — component gallery for visual QA
- **Build:** `bun run build`
- **Typecheck:** `bunx tsc --noEmit`

### Stack
- Vite 6, React 19, Tailwind CSS v4 (`@theme` block, OKLCH colors)
- shadcn/ui (new-york style) — 14 primitives in `src/components/ui/`
- 24 custom components in `src/components/`
- Design system defined in `src/index.css` + `classical-communist-design-system/DESIGN.md`

### Design System — Brutal Soviet Propaganda
- **Palette:** dirty newsprint `#DDD5C0`, blood red `#990000`, pure black `#000000`, military olive `#2D3A1A`
- **Fonts:** Propaganda.ttf (display, in `public/fonts/`), Oswald (headings), Be Vietnam Pro (body)
- **CRITICAL: Propaganda font CANNOT render Vietnamese diacritics.** Only use `font-propaganda` for English-only text, numbers, or single Latin initials (e.g., "CNXHKH", "COMMAND BRIEFING", "50%"). For any text that contains or may contain Vietnamese (ư, ơ, ộ, ễ, ắ, etc.), use `font-display-vi` (Anton) instead — it supports full Vietnamese while keeping the brutal display aesthetic.
- **ALL CAPS everywhere** — headings, labels, buttons, badges
- **Zero border-radius** — sharp edges only
- **Stamp effects** — text-shadow + text-stroke for letterpress feel
- **Textures:** film grain at 10% opacity, paper fiber background, halftone hover dots
- **Thick borders:** 8px red top border on cards, 4-6px red section slashes, 5px constructivist double frames
- **Star watermark:** 500px faded ★ behind key sections
- **Oversized background numbers** on chapter cards via `data-number` attribute
- **Buttons:** ALL CAPS + hard shadow + slight rotation (stamp variant)
- **No gold** — only red, black, newsprint cream, and military olive

### Key Files
- `src/index.css` — all design tokens, CSS utilities, shadcn theme variables
- `src/Gallery.tsx` — component gallery (accessed via `?gallery` query param)
- `src/main.tsx` — routes Gallery vs App based on URL
- `src/components/ui/button.tsx` — custom `stamp` variant added
- `classical-communist-design-system/DESIGN.md` — full design system specification
- `public/fonts/Propaganda.ttf` — Soviet poster display font (free, Otto Lerma/MachacaCorp)

## Key Source PDFs

| File | Content | Type |
|---|---|---|
| `1. KHTN.ĐC.CNXH.2025.pdf` | Course syllabus (9 pages) | Scanned |
| `2.GIAO TRINH CHXHKH KHONG CHUYEN.pdf` | Older/unofficial textbook extract, digital (180 pages) | Digital — NOT the official textbook |
| `MLN131 - Giao trinh CNXHKH (1).pdf` | **Official textbook** (NXB Chính trị Quốc gia Sự Thật, 2021), scanned (273 pages) | Scanned — this is the real textbook, use for all chapter references |
| `7.Cách thức đánh giá...pdf` | Grading criteria (2 pages) | Digital |
| `8.CHỦ ĐỀ VÀ CÁCH THỨC...pdf` | Presentation topics (2 pages) | Digital |

## Extraction Workflow

**For digital PDFs:** Use `pdftotext` CLI tool — dramatically cheaper on tokens than reading PDF images.
```bash
pdftotext "2.GIAO TRINH CHXHKH KHONG CHUYEN.pdf" output.txt
```

**For scanned PDFs:** Read pages directly with the Read tool (image-based). Split large chapters into 10-page groups and use parallel agents.

**Chapter boundaries in `digital_full.txt`:** Ch1=line 1, Ch2=1018, Ch3=1823, Ch4=2611, Ch5=3328, Ch6=3915, Ch7=4989.

## Course Assessment Structure

- **Quá trình (continuous): 50%** — Midterm 20%, Discussion 10%, Group presentation 10%, Attendance 10%
- **Cuối kỳ (final exam): 50%** — Essay, 60 min, paper materials allowed, no internet devices
- **Group presentation:** Video 7–15 min, due Week 8. Rubric: format 15% + theory 35% + application 50%

## Group Presentation (Nhóm 7)

- **Topic:** Chủ đề 6 - Xây dựng khối đại đoàn kết toàn dân tộc
- **Management spreadsheet:** `CNXHKH - Quản lý nhóm.xlsx`
- **Members (9):** Nhân (nhóm trưởng), Bùi Huỳnh Nhi, Đào Thục Nhi, Nguyễn Hồng Châu Nhi, Trần Thị Phụng Nhi, Hoàng Thị Tố Như, Nguyễn Đình Ý Như, Nguyễn Phạm Quỳnh Như, Ngô Văn Phú
- **Left group:** Lê Phương Quỳnh Như (no longer a member)

### Task breakdown
- Cơ sở lý luận (35%): Thục Nhi (T1-1), Châu Nhi (T1-2), Phụng Nhi (T1-3)
- Thực tiễn VN (14%): Huỳnh Nhi (T2-1), Phú (T2-2)
- Trách nhiệm SV (50%): Quỳnh Như (T3-1), Tố Như (T3-2), Ý Như (T3-3), Nhân (T3-4)
- Video production (15%): cả nhóm (SX-1 to SX-5)

## Language

All course content is in **Vietnamese**. Preserve Vietnamese diacritics exactly when extracting or editing markdown files.

## Task Management

Use `/tw` skill for all task tracking. Project: `hcmus.cnxhkh.video`.

## MCP Servers

This project requires no project-level MCP servers, so no `.mcp.json` is needed.

MCP servers configured globally (`~/.claude/.mcp.json`):
- **context7** — library documentation lookup
- **chrome-devtools** — visual QA via remote browser on asus
- **jetbrains** — IDE integration (via JetBrains Gateway plugin)

## Remotion Video (de_an_quay_video/remotion/)

Remotion-based video composition for the group presentation. 15:00 (27000 frames) at 30fps.

- **Studio:** `cd de_an_quay_video/remotion && bun run studio` (serves at 100.64.0.2:5173)
- **Render:** `bun run render` (full MP4) or `bun run render:draft` (half-res, lower quality)
- **Typecheck:** `bunx tsc --noEmit`

### Tailwind CSS Integration
- Remotion uses **webpack** internally, NOT Vite. Use `@remotion/tailwind` + `enableTailwind()` in `remotion.config.ts`
- `@tailwindcss/vite` does NOT work for Remotion Studio/render — only for Ladle/preview which use Vite
- **AbsoluteFill inline override:** AbsoluteFill sets `flexDirection: "column"` as inline style. Tailwind `flex-row` CANNOT override it. Must use `style={{ flexDirection: "row" }}`. Other flex props (`items-center`, `justify-center`) work fine in className.

### Theme Architecture (Modern Vietnamese Light)
- **Light theme with warm off-white `#F7F3EE` background** — better for classroom projectors (projectors produce light; dark bg becomes washed-out gray)
- **Font:** Be Vietnam Pro (sans-serif) — purpose-built for Vietnamese diacritics. Loaded via `@remotion/google-fonts/BeVietnamPro`
- **Accents:** Vietnam red `#B91C1C` + amber-gold `#D97706`. Red for structure (card borders), gold for decoration (ring borders)
- **Token inversion trick:** `COLORS.white = "#111827"` (dark text). Name kept for zero-refactor, value inverted.
- **`TEXT_SHADOW = "none"`** — all 50+ textShadow application sites become no-ops without code removal
- **Overlay uses fixed `#000000`**, NOT theme color — vignettes must always darken regardless of theme
- **GRADIENTS.goldConic kept as-is** — gold ring works on both dark and light backgrounds
- Design system docs: `de_an_quay_video/remotion/src/components/ds/DESIGN_SYSTEM.md`

### Architecture
- **Composition is 1920x1080** (defined in `Root.tsx`). FIRST STEP for any layout work: verify this.
- **AbsoluteFill** defaults to `flexDirection: "column"`. For horizontal layouts, MUST explicitly set `flexDirection: "row"`.
- `src/MainVideo.tsx` - composition root, maps SECTIONS to Sequence components
- `src/constants.ts` - defines COLORS, FONT, TEXT_SHADOW, SECTIONS, MEMBER_COLORS, REGIONS
- `src/components/ds/` - design system (15 components: tokens, SectionTitle, IconGrid, FlowChart, BarChart, CountUpNumber, TypewriterText, LowerThird, GlassPanel, MemberPlaceholder, MemberPiP, MemberVideoPlaceholder, ArtDecoImage, CitationFooter, FilmGrain, Overlay) + 15 Ladle stories
- `src/components/shared/Background3D.tsx` - 3D background layer using `@remotion/three`
- `src/components/shared/VietnamMap.tsx` - Remotion-specific map loader (uses delayRender/staticFile)
- `src/components/sections/` - one component per member section
- `src/components/TitleCard.tsx` - intro title card
- Section components compute animation values locally (useCurrentFrame + spring + interpolate) and pass them as props to DS components
- Sections use transparent/semi-transparent backgrounds so the 3D layer shows through
- 3D stack: `three` + `@react-three/fiber` + `@react-three/drei` + `@remotion/three`

## Component Development Workflow

When changing shared/DS components (adding dependencies, changing interfaces, redesigning visuals):
1. **Develop in isolation first** - update the DS component + its Ladle story (`.stories.tsx`)
2. **Verify in Ladle** (`bun run ladle`) - visually confirm the component renders correctly before touching consumers
3. **Only then integrate** - update section files / product code to use the new component
4. Never skip straight to injecting changes into product code without Ladle verification

Note: Ladle stories use `useRingAngle` hook (rAF-based) for gold ring rotation. Remotion sections compute ringAngle from frame/fps directly.

## Media Assets (de_an_quay_video/media/)

Member-submitted images and self-recorded videos, organized by task ID:

| Dir | Member | Contents |
|-----|--------|----------|
| T1-1/ | Thục Nhi | 2 images + video (.mov) |
| T1-2/ | Châu Nhi | 3 images + video |
| T1-3/ | Phụng Nhi | 2 images + video |
| T2-1/ | Huỳnh Nhi | 3 images + video |
| T2-2/ | Phú | 2 images + video |
| T3-1/ | Quỳnh Như | video only |
| T3-2/ | Tố Như | 2 images (webp) + video |
| T3-3/ | Ý Như | 2 images + video |
| T3-4/ | Nhân | 1 image + 3 videos (intro, main, ending) |

Source: Google Sheets spreadsheet with hyperlinks + smart chips (chipRuns).
These files should NOT be tracked in git (large video files 12-100MB each).

### Audio Normalization

All 11 member videos have been normalized using ffmpeg 2-pass EBU R128 loudnorm. Target: -16 LUFS (broadcast standard). Nhân's 3 videos (T3-4) use -12 LUFS target for extra loudness. Originals backed up at `de_an_quay_video/media/_originals/`.

To re-normalize a video:
```bash
# Pass 1: measure
ffmpeg -i input.mp4 -af "loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json" -f null /dev/null
# Pass 2: apply (use measured values from pass 1)
ffmpeg -y -i input.mp4 -af "loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=X:measured_TP=X:measured_LRA=X:measured_thresh=X:linear=true" -c:v copy -c:a aac -b:a 192k output.mp4
```

## Projector Readability (MANDATORY)

This video will be projected on a **classroom projector**. All sizing and styling decisions MUST account for this:

- **Composition: 1920x1080** (16:9, defined in `Root.tsx`). Never code for 960x540. ALWAYS verify by reading `Root.tsx` before layout work.
- **Minimum font sizes at 1920x1080:**
  - Section label (e.g. "PHẦN 1.1"): 32px
  - Section title: 48-56px
  - Card/heading text: 36-40px
  - Body/detail text: 28px minimum (NEVER below 28px)
  - Citation footer: 24px
  - MemberPiP name: 32px
  - MemberPiP section label: 24px
- **Always calculate layout math BEFORE writing code.** Write down the pixel budget: screen dimensions → column widths → padding → usable area → element heights. Verify total fits before coding.
- **Font: Be Vietnam Pro** (sans-serif) — engineered for Vietnamese diacritics (ươ, ượ, ễ, ắ). Serif fonts have Vietnamese diacritics as afterthought. At 28px on a projector from 10m, this matters.
- **Light background preferred** — projectors produce light, so whites are bright/accurate but dark backgrounds render as washed-out gray. `#F7F3EE` warm off-white is the base.
- **High contrast:** dark text on light background, amber-gold accents for emphasis
- **3D background meshes** at low opacity (0.1-0.18) so text remains readable on light bg
- Projectors wash out colors - avoid subtle color differences or thin lines < 2px

## Performance Notes

- **Gold ring rotation is DISABLED** — `ringAngle = 0` in all sections. The rotating conic gradient border caused frame drops in studio preview. Do not re-enable.
- **Proxy videos for preview** — `public/media/T*/fullres/` has original 1080p videos. `public/media/T*/*.mp4` are 480p proxies for smooth studio scrubbing. Before final render, restore full-res: `for d in T*/; do cp "$d/fullres/"*.mp4 "$d/" 2>/dev/null; done`
- **Content card timing is synced to transcripts** — `appearAt` values in section components are computed from `script_from_member/transcripts/` timestamps using formula: `frame = 360 + transcript_seconds * 30`. Do not set `appearAt` arbitrarily — always reference the transcript.
- **Section durations are sized to video lengths** — each section's `duration` in SECTIONS = `ceil(video_seconds * 30) + 360` (title card), rounded to nearest 30 frames. Do not change section durations without checking the member video length.

## Style Preferences

- Use normal hyphens (`-`) not em dashes (`—`) in all generated content (spreadsheets, markdown, etc.)
