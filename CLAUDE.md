# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Course materials for **BAA00103 — Chủ nghĩa xã hội khoa học (Scientific Socialism)**, a 2-credit general education course at ĐHQG-HCM (Trường ĐH Khoa Học Tự Nhiên). Semester 2, academic year 2025–2026.

## Structure

- **Root:** Source PDFs and DOCX files (syllabus, textbook, assessment docs, group presentation templates)
- **`markdown/`:** Extracted markdown versions of course content
  - `chuong1.md` through `chuong7.md` — 7 textbook chapters
  - `de-cuong-chi-tiet.md` — Full course syllabus
  - `cach-thuc-danh-gia.md` — Grading breakdown
  - `chu-de-thuyet-trinh-nhom.md` — Group presentation topics & rubric
- **`digital_full.txt`:** Full plaintext extraction from the digital PDF textbook (via `pdftotext`)

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

## Group Presentation (Nhóm 6)

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

## Code Editing Tools (MANDATORY)

**CRITICAL: For ALL code files (.ts, .tsx, .js, .jsx, .css), you MUST use Serena MCP and JetBrains MCP tools instead of built-in Read/Edit/Grep/Write. Built-in tools are ONLY for non-code files (markdown, PDFs, JSON config, etc.).**

This is not optional. If you catch yourself using `Read` on a `.tsx` file or `Edit` on a `.ts` file, STOP and use the correct tool instead. The projectPath for all JetBrains calls is `/data/nextcloud/nhannht/files/documents/hcmus/semester2/science-socialism`.

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
projectPath="/data/nextcloud/nhannht/files/documents/hcmus/semester2/science-socialism"
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

Remotion-based video composition for the group presentation. 13.5 min at 30fps.

- **Studio:** `cd de_an_quay_video/remotion && bun run studio` (serves at 100.64.0.2:5173)
- **Render:** `bun run render` (full MP4) or `bun run render:draft` (half-res, lower quality)
- **Typecheck:** `bunx tsc --noEmit`

### Architecture
- `src/MainVideo.tsx` - composition root, maps SECTIONS to Sequence components
- `src/constants.ts` - defines COLORS, FONT, TEXT_SHADOW, SECTIONS, MEMBER_COLORS, REGIONS
- `src/components/ds/` - design system components (SectionTitle, IconGrid, FlowChart, BarChart, CountUpNumber, TypewriterText, LowerThird, GlassPanel, MemberPlaceholder, Overlay) and tokens
- `src/components/shared/Background3D.tsx` - 3D background layer using `@remotion/three`
- `src/components/shared/VietnamMap.tsx` - Remotion-specific map loader (uses delayRender/staticFile)
- `src/components/sections/` - one component per member section
- `src/components/TitleCard.tsx` - intro title card
- Section components compute animation values locally (useCurrentFrame + spring + interpolate) and pass them as props to DS components
- Sections use transparent/semi-transparent backgrounds so the 3D layer shows through
- 3D stack: `three` + `@react-three/fiber` + `@react-three/drei` + `@remotion/three`

## Component Development Workflow

When changing shared/DS components (adding dependencies, changing interfaces, redesigning visuals):
1. **Develop in isolation first** - update the DS component + its Storybook story
2. **Verify in Storybook** - visually confirm the component renders correctly before touching consumers
3. **Only then integrate** - update section files / product code to use the new component
4. Never skip straight to injecting changes into product code without Storybook verification

## Style Preferences

- Use normal hyphens (`-`) not em dashes (`—`) in all generated content (spreadsheets, markdown, etc.)
