# Video Production Plan — Nhóm 6 CNXHKH

## Overview

- **Course:** BAA00103 — Chủ nghĩa xã hội khoa học
- **Topic:** Chủ đề 6 - Xây dựng khối đại đoàn kết toàn dân tộc
- **Duration:** 7–15 minutes
- **Due:** Week 8
- **Grading:** Format 15% + Theory 35% + Application 50%
- **Team:** 9 members (Nhân — nhóm trưởng)

## Approach

Create the video **programmatically using Remotion** (React framework for video). This gives us:
- Version-controlled video source (git)
- Easy iteration — change content, re-render
- Consistent styling across all sections
- Professional animations without manual video editing software
- Team members can review draft MP4s, no need to install anything

## Workflow

1. **Dev (Nhân):** Write React components in Remotion, preview in Remotion Studio
2. **Review:** Render draft MP4 (low quality) → share with team for feedback
3. **Final:** Render high-quality MP4 → submit to teacher

## TODO

### Phase 1: Setup & Research
- [ ] Read teacher's guidelines: `Quy cách dùng PP quay video bài giảng số.pptx`
- [ ] Read content outline: `Nội dung 31 video môn CNXHKH - Copy.docx`
- [ ] Read sample video template: `mẫu Video 1. Giới thiệu môn học.pptx`
- [ ] Extract logos and themes from provided PPTX files (Logo 01-03, Theme 1-3)
- [ ] Initialize Remotion project in `de_an_quay_video/remotion/`

### Phase 2: Content & Design
- [ ] Map team's written content (cơ sở lý luận, thực tiễn VN, trách nhiệm SV) into video scenes
- [ ] Design slide components matching teacher's template/branding
- [ ] Create intro/outro scenes with course logo
- [ ] Add transitions and animations

### Phase 3: Production
- [ ] Assemble all scenes into full composition
- [ ] Add background music / narration (if required)
- [ ] Render draft MP4 → team review
- [ ] Iterate based on feedback
- [ ] Render final MP4 (1080p)
- [ ] Submit

## Tech Stack

- **Remotion** (v4.x) — React-based video framework
- **React + TypeScript**
- **Local rendering** via `npx remotion render` → MP4
- Assets: logos, themes extracted from teacher's PPTX files

## Key Files in `de_an_quay_video/`

| File | Purpose |
|---|---|
| `Quy cách dùng PP quay video bài giảng số.pptx` | Teacher's video format guidelines |
| `Nội dung 31 video môn CNXHKH - Copy.docx` | Content outline for all 31 videos |
| `mẫu Video 1. Giới thiệu môn học.pptx` | Sample video template |
| `BÀI GIẢNG SỐ MÔN CNXHKH.pptx` | Digital lecture slides |
| `LOGO 01-03.pptx`, `Theme1-3.thmx` | Branding assets |
| `CUONG- Mẫu nhận xét bài giảng trực tuyến môn KTCT.docx` | Review/grading form |
| `DỰ TOÁN CHI TIẾT QUAY VIDEO 4 MÔN LLCT.xlsx` | Budget estimate |
| `phụ lục kp (1).pdf` | Budget appendix |
