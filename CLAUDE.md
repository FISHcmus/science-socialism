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

## Code Editing Tools

For all coding actions (reading, editing, navigating, searching code), always prefer **Serena MCP** and **JetBrains MCP** tools over built-in Read/Edit/Grep. Use Serena's symbolic tools for code exploration, `find_symbol`/`get_symbols_overview` for navigation, and `replace_symbol_body`/`insert_after_symbol` for edits. Fall back to built-in tools only for non-code files (markdown, PDFs, config, etc.).

## Style Preferences

- Use normal hyphens (`-`) not em dashes (`—`) in all generated content (spreadsheets, markdown, etc.)
