# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Course materials for **BAA00103 — Chủ nghĩa xã hội khoa học (Scientific Socialism)**, a 2-credit general education course at ĐHQG-HCM (Trường ĐH Khoa Học Tự Nhiên). Semester 2, academic year 2025–2026.

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

## Key Source PDFs

| File | Content | Type |
|---|---|---|
| `1. KHTN.ĐC.CNXH.2025.pdf` | Course syllabus (9 pages) | Scanned |
| `2.GIAO TRINH CHXHKH KHONG CHUYEN.pdf` | Full textbook, digital (180 pages) | Digital — use `pdftotext` for extraction |
| `MLN131 - Giao trinh CNXHKH.pdf` | Full textbook, scanned (273 pages) | Scanned — same content as #2, just scanned with cover/TOC |
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

## MCP Servers Required

This project requires the following MCP servers. On a new machine, create `.mcp.json` (gitignored) with:

```json
{
  "mcpServers": {
    "serena": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "--from", "git+https://github.com/oraios/serena",
        "serena", "start-mcp-server",
        "--context", "claude-code",
        "--project", "<absolute-path-to-science-socialism>"
      ]
    }
  }
}
```

Additional MCP servers configured globally (`~/.claude/.mcp.json`):
- **context7** — library documentation lookup
- **chrome-devtools** — visual QA via remote browser on asus
- **jetbrains** — IDE integration (via JetBrains Gateway plugin)

## Code Editing Tools (MANDATORY)

**CRITICAL: For ALL code files (.ts, .tsx, .js, .jsx, .css), you MUST use Serena MCP and JetBrains MCP tools instead of built-in Read/Edit/Grep/Write. Built-in tools are ONLY for non-code files (markdown, PDFs, JSON config, etc.).**

This is not optional. If you catch yourself using `Read` on a `.tsx` file or `Edit` on a `.ts` file, STOP and use the correct tool instead. The projectPath for all JetBrains calls is `/home/ubuntu/nhannht-projects/hcmus/semester2/science-socialism`.

### When to use which tool

| Action | Tool | NOT this |
|---|---|---|
| See what's in a code file | `mcp__serena__jet_brains_get_symbols_overview` | `Read` |
| Read a specific function/class body | `mcp__serena__jet_brains_find_symbol` with `include_body=true` | `Read` |
| Read a full code file (rare, avoid) | `mcp__jetbrains__get_file_text_by_path` | `Read` |
| Search code for a pattern | `mcp__serena__search_for_pattern` or `mcp__jetbrains__search_in_files_by_text` | `Grep` |
| Find files by name | `mcp__jetbrains__find_files_by_name_keyword` or `mcp__serena__find_file` | `Glob` |
| Replace a function/method body | `mcp__serena__replace_symbol_body` | `Edit` |
| Add code after a symbol | `mcp__serena__insert_after_symbol` | `Edit` |
| Add code before a symbol | `mcp__serena__insert_before_symbol` | `Edit` |
| Rename a symbol project-wide | `mcp__serena__rename_symbol` or `mcp__jetbrains__rename_refactoring` | `Edit` with replace_all |
| Small text replacement in file | `mcp__jetbrains__replace_text_in_file` | `Edit` |
| Check for errors/warnings | `mcp__jetbrains__get_file_problems` | `Bash` tsc |
| Find who references a symbol | `mcp__serena__jet_brains_find_referencing_symbols` | `Grep` |
| Create a new code file | `mcp__jetbrains__create_new_file` | `Write` |
| Format a file | `mcp__jetbrains__reformat_file` | nothing |
| Run terminal commands | `mcp__jetbrains__execute_terminal_command` | `Bash` (for IDE context) |

### Serena MCP - Detailed Usage

**Exploring code (token-efficient, start here):**
```
# Get overview of all symbols in a file (classes, functions, exports)
mcp__serena__jet_brains_get_symbols_overview(relative_path="de_an_quay_video/remotion/src/components/TitleCard.tsx")

# Find a specific symbol by name (searches entire codebase if no path given)
mcp__serena__jet_brains_find_symbol(name_path_pattern="TitleCard", relative_path="de_an_quay_video/remotion/src/components/TitleCard.tsx")

# Read the body of a symbol
mcp__serena__jet_brains_find_symbol(name_path_pattern="TitleCard", include_body=true, relative_path="de_an_quay_video/remotion/src/components/TitleCard.tsx")

# Get a class with all its methods listed (depth=1)
mcp__serena__jet_brains_find_symbol(name_path_pattern="MainVideo", depth=1)

# Find all references to a symbol (who calls it, who imports it)
mcp__serena__jet_brains_find_referencing_symbols(name_path="COLORS", relative_path="de_an_quay_video/remotion/src/constants.ts")
```

**Editing code (symbolic, precise):**
```
# Replace entire function/component body
mcp__serena__replace_symbol_body(
  name_path="TitleCard",
  relative_path="de_an_quay_video/remotion/src/components/TitleCard.tsx",
  body="export const TitleCard: React.FC = () => { ... }"
)

# Insert new function after an existing one
mcp__serena__insert_after_symbol(
  name_path="TitleCard",
  relative_path="de_an_quay_video/remotion/src/components/TitleCard.tsx",
  body="\nexport const NewComponent: React.FC = () => { ... }\n"
)

# Rename a symbol across the entire codebase
mcp__serena__rename_symbol(
  name_path="COLORS",
  relative_path="de_an_quay_video/remotion/src/constants.ts",
  new_name="THEME_COLORS"
)
```

**Serena gotcha — `replace_symbol_body` duplicates `export`:**
Serena includes the symbol signature in the `body` param but does NOT remove the original `export const` prefix. This causes `export const export const ...`. After every `replace_symbol_body` call, immediately fix with `replace_text_in_file("export const export const", "export const")`.

**Searching code:**
```
# Search for a pattern in code files only
mcp__serena__search_for_pattern(
  substring_pattern="useCurrentFrame",
  relative_path="de_an_quay_video/remotion/src",
  restrict_search_to_code_files=true
)

# Search with context lines
mcp__serena__search_for_pattern(
  substring_pattern="interpolate\\(",
  relative_path="de_an_quay_video/remotion/src/components",
  context_lines_before=2,
  context_lines_after=2
)
```

### JetBrains MCP - Detailed Usage

**Always pass `projectPath`:**
```
projectPath="/home/ubuntu/nhannht-projects/hcmus/semester2/science-socialism"
```

**Inspections and validation:**
```
# Check a file for errors and warnings (replaces manual tsc)
mcp__jetbrains__get_file_problems(
  filePath="de_an_quay_video/remotion/src/components/TitleCard.tsx",
  projectPath="..."
)

# Build and check for errors
mcp__jetbrains__build_project(projectPath="...")
```

**File operations:**
```
# Read a code file (when you need the full text, not just symbols)
mcp__jetbrains__get_file_text_by_path(pathInProject="de_an_quay_video/remotion/src/constants.ts", projectPath="...")

# Replace text in a file (for non-symbolic edits like import changes)
mcp__jetbrains__replace_text_in_file(
  pathInProject="de_an_quay_video/remotion/src/constants.ts",
  oldText="import { foo } from 'bar'",
  newText="import { foo, baz } from 'bar'",
  projectPath="..."
)

# Rename refactoring (updates all references)
mcp__jetbrains__rename_refactoring(
  pathInProject="de_an_quay_video/remotion/src/constants.ts",
  symbolName="COLORS",
  newName="THEME",
  projectPath="..."
)

# Create a new file
mcp__jetbrains__create_new_file(
  pathInProject="de_an_quay_video/remotion/src/components/shared/NewComponent.tsx",
  text="export const NewComponent = () => null;",
  projectPath="..."
)
```

**Searching:**
```
# Text search across project
mcp__jetbrains__search_in_files_by_text(searchText="useCurrentFrame", fileMask="*.tsx", projectPath="...")

# Regex search
mcp__jetbrains__search_in_files_by_regex(regexPattern="spring\\(.*damping", fileMask="*.tsx", projectPath="...")

# Find files by name
mcp__jetbrains__find_files_by_name_keyword(nameKeyword="Section", projectPath="...")
```

### Decision flowchart

1. **Need to understand a code file?** -> `get_symbols_overview` first, then `find_symbol` with `include_body=true` for specific parts
2. **Need to edit a function/component?** -> `find_symbol` to read it, then `replace_symbol_body` to rewrite it
3. **Need to add new code?** -> `insert_after_symbol` or `insert_before_symbol`
4. **Need to rename something?** -> `rename_symbol` (Serena) or `rename_refactoring` (JetBrains)
5. **Need to find usages?** -> `find_referencing_symbols`
6. **Need to search for text?** -> `search_for_pattern` (Serena) or `search_in_files_by_text` (JetBrains)
7. **Need to check for errors?** -> `get_file_problems` (per file) or `build_project` (whole project)
8. **Non-code file (markdown, PDF, JSON)?** -> Use built-in Read/Edit/Write tools

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
| T2-2/ | Phú | video only |
| T3-1/ | Quỳnh Như | video only |
| T3-2/ | Tố Như | 2 images (webp) + video |
| T3-3/ | Ý Như | 2 images + video |
| T3-4/ | Nhân | **empty** (needs own recording) |

Source: Google Sheets spreadsheet with hyperlinks + smart chips (chipRuns).
These files should NOT be tracked in git (large video files 12-100MB each).

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
