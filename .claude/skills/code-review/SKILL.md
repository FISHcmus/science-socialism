---
name: code-review
description: Pre-commit code review for CNXHKH Remotion video project. 4-pass review with complexity linting, simplification, IDE inspections, and Remotion/Three.js semantic checks.
user-invocable: true
---

# Pre-Commit Code Review (CNXHKH Remotion Project)

Project-specific override of the global `/code-review` skill. Tailored for the Remotion + React Three Fiber video composition.

## Usage

```bash
/code-review
/code-review src/components/sections/
/code-review --focus security
/code-review --focus performance
```

## Arguments

- **path** (positional, optional): Limit review to changes in this path
- **--focus <area>**: Focus area: `security`, `performance`, `logic`, `complexity`, `3d`

## 4-Pass Workflow

### Step 1 - Get Staged Changes

```bash
git diff --cached
```
If nothing staged, use `git diff`. Save output for analysis.

### Step 2 - Classify Files

If ALL changed files are non-code (`.md`, `.json`, `.yml`, config only):
- Report: "No code review needed - docs/config changes only"
- Create marker file and stop.

### Step 3 - Pass 1: TypeScript + ESLint Complexity

Run both in parallel:

```bash
cd de_an_quay_video/remotion && bunx tsc --noEmit
cd de_an_quay_video/remotion && bunx eslint src/
```

**ESLint rules (complexity only):**
- `sonarjs/cognitive-complexity` > 15 -> WARNING
- `complexity` > 10 -> WARNING
- `max-lines-per-function` > 100 lines -> WARNING
- `max-depth` > 4 levels -> WARNING

**If tsc has errors:** Report as CRITICAL, do NOT proceed. Tell user to fix type errors first.
**If eslint has warnings:** Report as WARNING, continue to Pass 2.

### Step 4 - Pass 2: Simplify

Invoke the `/simplify` skill on the changed files. This reviews for:
- Code reuse opportunities
- Unnecessary abstractions
- Redundant logic
- Quality and efficiency issues

Report any findings from `/simplify` as WARNING or INFO.

### Step 5 - Pass 3: JetBrains IDE Inspections

Run `mcp__jetbrains__get_file_problems` on each changed `.ts`/`.tsx` file.

```
mcp__jetbrains__get_file_problems(
  filePath="<relative-path>",
  projectPath="/data/nextcloud/nhannht/files/documents/hcmus/semester2/science-socialism"
)
```

Call in parallel batches (up to 10 files).

**Severity mapping:**
- JetBrains `ERROR` -> CRITICAL
- JetBrains `WARNING` -> WARNING

**If JetBrains MCP unavailable:** Log "JetBrains IDE not connected - skipping", continue to Pass 4.

### Step 6 - Pass 4: Claude Semantic Review (Remotion/Three.js)

Read changed files using Serena/JetBrains symbolic tools when available, `Read` otherwise.

Apply the project-specific checklist below. Focus on things the other passes cannot catch.

## Project-Specific Checklist

### Remotion

- `useCurrentFrame()` and `useVideoConfig()` used correctly (not outside Remotion context)
- `spring()` config reasonable (damping 10-30, stiffness 50-200)
- `interpolate()` has correct extrapolation clamping where needed
- `<Sequence>` has correct `from` and `durationInFrames` (frame math adds up, no gaps/overlaps)
- Frame calculations match `constants.ts` SECTIONS array
- No hardcoded magic frame numbers without comment explaining what time it represents

### @remotion/three (3D)

- `<ThreeCanvas>` MUST have `width` and `height` from `useVideoConfig()`
- `<Sequence>` inside `<ThreeCanvas>` MUST have `layout="none"` prop
- No opaque `backgroundColor` on section components (blocks 3D background layer)
- Section gradient alpha MUST be <= 0.5 (otherwise 3D invisible)
- Lights present in ThreeCanvas (objects render black without lights)
- WebGL materials: check `transparent={true}` when using `opacity` prop

### Architecture

- No local component duplication - shared components go in `src/components/shared/`
- Section components must NOT have opaque full-screen backgrounds
- `SECTIONS` array in `constants.ts` must have contiguous from/duration (no frame gaps)
- New shared components should be props-driven (caller computes animation values)

### Vietnamese Text

- Vietnamese diacritics preserved correctly (no mojibake)
- Text content matches the academic topic accurately
- Member names match the MEMBERS list exactly

### Performance

- `useMemo()` for expensive computations (geometry creation, particle arrays)
- No `new Float32Array()` or `new THREE.*()` inside render loop (must be memoized)
- Particle counts reasonable (< 1000 for smooth rendering)
- Three.js objects not recreated every frame

## Report Format

```markdown
## Pre-Commit Code Review (CNXHKH Remotion)

**Files changed**: N
**Pass 1 (tsc + eslint)**: PASSED / FAILED
**Pass 2 (/simplify)**: N findings
**Pass 3 (JetBrains)**: PASSED / FAILED / SKIPPED
**Pass 4 (Semantic)**: N findings
**Total**: X critical, Y warning, Z info

---

### CRITICAL
**[Source]** **file:line** - Title
> Description. Fix: suggested fix.

### WARNING
...

### INFO
...

### OK (no issues)
- `file.ext` - Brief note
```

## Marker File

**If ANY CRITICAL or WARNING findings:** do NOT create marker. Tell user to fix and re-run.

**If only INFO or clean:**
```bash
git diff --cached | sha256sum | cut -d' ' -f1 > /tmp/claude-code-review-passed
```

## Tools

- **Linters**: `Bash` for `tsc` and `eslint`
- **Simplify**: Invoke `/simplify` skill
- **IDE**: `mcp__jetbrains__get_file_problems` (skip if unavailable)
- **Code reading**: Serena/JetBrains symbolic tools preferred, `Read` fallback
- **Sub-agents**: Use `model: "opus"` for review agents (NOT haiku)
