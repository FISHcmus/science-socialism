# Section Layout Plans - CNXHKH Video

## Design Principles

- **Member PiP**: 240x540 right-side strip showing member's self-recorded video, visible throughout Beat 2 (entire content phase). Uses MemberPiP DS component with rotating gold conic border.
- **2-beat structure**: Beat 1 (title, full screen, ~3s) → Beat 2 (content 720px left + MemberPiP 240px right, rest of section)
- **Image placeholders**: Max 2 per section (720px content area too narrow for 3), art deco gold borders (ArtDecoImage DS component)
- **Content + citations**: Text blocks with CitationFooter at bottom of content area

---

## Content Cross-Check Summary

| Section | Script Match? | Issue |
|---------|--------------|-------|
| Section11 ThucNhi | **MISMATCH** | Cards say "Đoàn kết là sức mạnh" etc. Script says: bình đẳng, tự quyết, liên hiệp công nhân |
| Section12 ChauNhi | **WRONG** | Code: "Tính toàn dân/mục tiêu/tổ chức/tự nguyện/lâu dài". Script: lãnh thổ/kinh tế/ngôn ngữ/văn hóa-tâm lý/nhà nước |
| Section13 PhungNhi | **WRONG** | Code: "lợi ích chung/đoàn kết tự nguyện/MTTQVN/CNXH". Script: tự do tín ngưỡng/khắc phục tiêu cực/phân biệt TT-CT/lịch sử cụ thể |
| Section21 HuynhNhi | **PARTIAL** | Map + stats OK concept, but stats (54, 4000+, 63) are generic, not from script |
| Section22 Phu | **FABRICATED** | BarChart "regional unity %" is completely made up. Script is about 16 religions |
| Section31 QuynhNhu | **MISMATCH** | FlowChart shows learning cycle. Script is about cultural exchange + DTTS activities |
| Section32 ToNhu | **MISMATCH** | Shows "quality cultivation funnel". Script is about social media misinformation |
| Section33 YNhu | **MISMATCH** | Generic campus/community items. Script is about propaganda + Mùa hè xanh volunteering |
| Section34 Nhan | **PARTIAL** | 3 summary cards are OK in concept but text is generic, not from script |

**Verdict: 5 sections have significant content mismatches. Only S12, S13 need verification. S21, S34 are close but need text fixes.**

---

## Section 1.1 - Thục Nhi (90s, 2700 frames)

### Script Content (3 principles of Marxist-Leninist nationality doctrine)
1. **Các dân tộc hoàn toàn bình đẳng** - mọi dân tộc đều có quyền và nghĩa vụ ngang nhau
2. **Các dân tộc có quyền tự quyết** - quyền tự quyết định chế độ chính trị, con đường phát triển
3. **Liên hiệp công nhân tất cả các dân tộc** - gắn kết giải phóng dân tộc với giải phóng giai cấp

**Citation**: Giáo trình CNXHKH (2021), Chương 6, mục I.2b, trang 202-205

### Images: 2 slots

### ASCII Layout

```
BEAT 1 (0-90 frames): Title Slide — FULL SCREEN
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              ╔═══════════════════════════════╗               │
│              ║  PHẦN 1.1                     ║               │
│              ║  Cương lĩnh dân tộc của       ║               │
│              ║  chủ nghĩa Mác - Lênin        ║               │
│              ╚═══════════════════════════════╝               │
│                     Thục Nhi                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

BEAT 2 (90-2700 frames): Content (720px) + MemberPiP (240px)
┌────────────────────────────────────────┬────────────────────┐
│  CONTENT AREA (720px)                  │  MemberPiP (240px) │
│                                        │  ┌──────────────┐  │
│  ┌──────────────────────────────────┐  │  │              │  │
│  │ CARD 1: BÌNH ĐẲNG               │  │  │              │  │
│  │ Mọi dân tộc đều có quyền và     │  │  │  [VIDEO]     │  │
│  │ nghĩa vụ ngang nhau             │  │  │              │  │
│  └──────────────────────────────────┘  │  │  Chèn video: │  │
│                                        │  │  Đào Thục Nhi│  │
│  ┌──────────────────────────────────┐  │  │              │  │
│  │ CARD 2: TỰ QUYẾT                │  │  │              │  │
│  │ Quyền tự quyết định chế độ      │  │  └──────────────┘  │
│  └──────────────────────────────────┘  │                    │
│                                        │  Đào Thục Nhi     │
│  ┌──────────────────────────────────┐  │  Phần 1.1         │
│  │ CARD 3: LIÊN HIỆP               │  │                    │
│  │ Gắn kết giải phóng DT với GC    │  │                    │
│  └──────────────────────────────────┘  │                    │
│                                        │                    │
│  ╔══╗┌────────────────────────┐╔══╗   │                    │
│  ║▓▓║│      [IMAGE 1]        │║▓▓║   │                    │
│  ╚══╝└────────────────────────┘╚══╝   │                    │
│  ╔══╗┌────────────────────────┐╔══╗   │                    │
│  ║▓▓║│      [IMAGE 2]        │║▓▓║   │                    │
│  ╚══╝└────────────────────────┘╚══╝   │                    │
│                                        │                    │
│  ── GT CNXHKH (2021), Ch.6, I.2b ──  │                    │
└────────────────────────────────────────┴────────────────────┘
```

---

## Section 1.2 - Châu Nhi (90s, 2700 frames)

### Script Content (5 characteristics of nationality)
1. **Cộng đồng lãnh thổ** - vùng đất, trời, biển thuộc chủ quyền quốc gia
2. **Cộng đồng sinh hoạt kinh tế** - đặc trưng quan trọng nhất
3. **Cộng đồng ngôn ngữ** - công cụ giao tiếp chung
4. **Cộng đồng văn hóa và tâm lý** - yếu tố đặc biệt quan trọng
5. **Có chung một nhà nước** - phân biệt dân tộc quốc gia với tộc người

**Citation**: Giáo trình CNXHKH (2021), Chương 6, mục I.1, trang 196-200

### Images: 2 slots

### ASCII Layout

```
BEAT 1 (0-90): Title — FULL SCREEN
┌─────────────────────────────────────────────────────────────┐
│              ╔═══════════════════════════════╗               │
│              ║  PHẦN 1.2                     ║               │
│              ║  Năm đặc trưng cơ bản        ║               │
│              ║  của dân tộc                  ║               │
│              ╚═══════════════════════════════╝               │
│                     Châu Nhi                                │
└─────────────────────────────────────────────────────────────┘

BEAT 2 (90-2700): Content (720px) + MemberPiP (240px)
┌────────────────────────────────────────┬────────────────────┐
│  CONTENT AREA (720px)                  │  MemberPiP (240px) │
│                                        │  ┌──────────────┐  │
│  5 feature cards (stacked)             │  │              │  │
│  ┌──────────────────────────────────┐  │  │  [VIDEO]     │  │
│  │ 1. LÃNH THỔ                     │  │  │              │  │
│  │ 2. KINH TẾ                      │  │  │  Châu Nhi    │  │
│  │ 3. NGÔN NGỮ                     │  │  │              │  │
│  │ 4. VĂN HÓA - TÂM LÝ           │  │  └──────────────┘  │
│  │ 5. NHÀ NƯỚC                     │  │                    │
│  └──────────────────────────────────┘  │  Nguyễn Hồng      │
│                                        │  Châu Nhi          │
│  ╔══╗┌────────────────────────┐╔══╗   │  Phần 1.2          │
│  ║▓▓║│      [IMAGE 1]        │║▓▓║   │                    │
│  ╚══╝└────────────────────────┘╚══╝   │                    │
│  ╔══╗┌────────────────────────┐╔══╗   │                    │
│  ║▓▓║│      [IMAGE 2]        │║▓▓║   │                    │
│  ╚══╝└────────────────────────┘╚══╝   │                    │
│                                        │                    │
│  ── GT CNXHKH (2021), Ch.6, I.1 ──   │                    │
└────────────────────────────────────────┴────────────────────┘
```

---

## Section 1.3 - Phụng Nhi (90s, 2700 frames)

### Script Content (4 principles for resolving religious issues)
1. **Tôn trọng quyền tự do tín ngưỡng** - quyền theo hoặc không theo tôn giáo
2. **Khắc phục dần ảnh hưởng tiêu cực** - bằng phát triển kinh tế, nâng cao dân trí
3. **Phân biệt mặt tư tưởng và mặt chính trị** - không đối kháng vs đối kháng
4. **Quan điểm lịch sử cụ thể** - phân tích từng giai đoạn, phát huy giá trị nhân văn

**Citation**: Giáo trình CNXHKH (2021), Chương 6, mục II.1b, trang 218-221

### Images: 2 slots

### ASCII Layout

```
BEAT 1 (0-90): Title — FULL SCREEN
┌─────────────────────────────────────────────────────────────┐
│              ╔═══════════════════════════════╗               │
│              ║  PHẦN 1.3                     ║               │
│              ║  Bốn nguyên tắc giải quyết   ║               │
│              ║  vấn đề tôn giáo              ║               │
│              ╚═══════════════════════════════╝               │
│                     Phụng Nhi                               │
└─────────────────────────────────────────────────────────────┘

BEAT 2 (90-2700): Content (720px) + MemberPiP (240px)
┌────────────────────────────────────────┬────────────────────┐
│  CONTENT AREA (720px)                  │  MemberPiP (240px) │
│                                        │  ┌──────────────┐  │
│  4 principle cards (vertical flow)     │  │              │  │
│  ┌──────────────────────────────────┐  │  │  [VIDEO]     │  │
│  │ 1. TÔN TRỌNG TỰ DO             │  │  │              │  │
│  │ 2. KHẮC PHỤC TIÊU CỰC          │  │  │  Phụng Nhi   │  │
│  │ 3. PHÂN BIỆT TƯ TƯỞNG/CT      │  │  │              │  │
│  │ 4. QUAN ĐIỂM LỊCH SỬ           │  │  └──────────────┘  │
│  └──────────────────────────────────┘  │                    │
│                                        │  Trần Thị         │
│  ╔══╗┌────────────────────────┐╔══╗   │  Phụng Nhi        │
│  ║▓▓║│      [IMAGE 1]        │║▓▓║   │  Phần 1.3          │
│  ╚══╝└────────────────────────┘╚══╝   │                    │
│  ╔══╗┌────────────────────────┐╔══╗   │                    │
│  ║▓▓║│      [IMAGE 2]        │║▓▓║   │                    │
│  ╚══╝└────────────────────────┘╚══╝   │                    │
│                                        │                    │
│  ── GT CNXHKH (2021), Ch.6, II.1b ── │                    │
└────────────────────────────────────────┴────────────────────┘
```

---

## Section 2.1 - Huỳnh Nhi (60s, 1800 frames)

### Script Content (54 ethnic groups living intermingled)
- 54 dân tộc cư trú đan xen, không dân tộc nào chiếm vùng lãnh thổ riêng biệt
- **Lợi thế**: tăng cường hiểu biết, giao lưu, văn hóa thống nhất trong đa dạng
- **Thách thức**: dễ nảy sinh mâu thuẫn, chênh lệch phát triển giữa vùng miền
- HCM quote: "Bao nhiêu lợi ích đều vì dân..."
- Đoàn kết = truyền thống quý báu, động lực mọi thắng lợi

**Citation**: Giáo trình CNXHKH (2021), Ch.6, I.3a, tr.205-208; HCM (1949) "Dân vận"

### Images: 2 slots

### ASCII Layout

```
BEAT 1 (0-90): Title — FULL SCREEN
┌─────────────────────────────────────────────────────────────┐
│              ╔═══════════════════════════════╗               │
│              ║  PHẦN 2.1                     ║               │
│              ║  Thực tiễn đoàn kết           ║               │
│              ║  dân tộc Việt Nam             ║               │
│              ╚═══════════════════════════════╝               │
│                     Huỳnh Nhi                               │
└─────────────────────────────────────────────────────────────┘

BEAT 2 (90-1800): Content (720px) + MemberPiP (240px)
┌────────────────────────────────────────┬────────────────────┐
│  CONTENT AREA (720px)                  │  MemberPiP (240px) │
│                                        │  ┌──────────────┐  │
│  Lợi thế / Thách thức cards           │  │              │  │
│  + HCM quote                           │  │  [VIDEO]     │  │
│                                        │  │              │  │
│  ╔══╗┌────────────────────────┐╔══╗   │  │  Huỳnh Nhi   │  │
│  ║▓▓║│      [IMAGE 1]        │║▓▓║   │  │              │  │
│  ╚══╝└────────────────────────┘╚══╝   │  └──────────────┘  │
│  ╔══╗┌────────────────────────┐╔══╗   │                    │
│  ║▓▓║│      [IMAGE 2]        │║▓▓║   │  Bùi Huỳnh Nhi    │
│  ╚══╝└────────────────────────┘╚══╝   │  Phần 2.1          │
│                                        │                    │
│  ── GT CNXHKH (2021), Ch.6, I.3a ──  │                    │
└────────────────────────────────────────┴────────────────────┘
```

---

## Section 2.2 - Phú (60s, 1800 frames) **[FULL REWRITE NEEDED]**

### Script Content (Religious diversity in Vietnam)
- **16 tôn giáo** được công nhận, **43 tổ chức** tôn giáo
- ~57.000 chức sắc, ~157.000 chức việc, 29.000+ cơ sở thờ tự
- Tôn giáo du nhập + nội sinh (Cao Đài, Phật giáo Hòa Hảo)
- **Chung sống hòa bình** - chưa từng xảy ra chiến tranh tôn giáo
- Chính sách: tôn trọng tự do tín ngưỡng, bình đẳng trước pháp luật
- Nghiêm cấm lợi dụng tín ngưỡng → mê tín, chia rẽ, xâm phạm an ninh
- Chính sách đại đoàn kết: đoàn kết giữa các tôn giáo, người có đạo/không đạo

**Citation**: Giáo trình CNXHKH (2021), Ch.6, II.2a tr.222-224, II.2b tr.225-226

### Current Code Problem
- BarChart with fabricated "regional unity %" — DELETE entirely
- CountUpNumber shows 54/63/100 — not from script
- Must rebuild with actual statistics from script

### Images: 2 slots

### ASCII Layout

```
BEAT 1 (0-90): Title — FULL SCREEN
┌─────────────────────────────────────────────────────────────┐
│              ╔═══════════════════════════════╗               │
│              ║  PHẦN 2.2                     ║               │
│              ║  Đặc điểm tôn giáo           ║               │
│              ║  ở Việt Nam                   ║               │
│              ╚═══════════════════════════════╝               │
│                     Ngô Văn Phú                             │
└─────────────────────────────────────────────────────────────┘

BEAT 2 (90-1800): Content (720px) + MemberPiP (240px)
┌────────────────────────────────────────┬────────────────────┐
│  CONTENT AREA (720px)                  │  MemberPiP (240px) │
│                                        │  ┌──────────────┐  │
│  Statistics row (16/43/57K/29K)        │  │              │  │
│  + Policy cards                        │  │  [VIDEO]     │  │
│  + "Chung sống hòa bình" quote        │  │              │  │
│                                        │  │  Phú         │  │
│  ╔══╗┌────────────────────────┐╔══╗   │  │              │  │
│  ║▓▓║│      [IMAGE 1]        │║▓▓║   │  └──────────────┘  │
│  ╚══╝└────────────────────────┘╚══╝   │                    │
│  ╔══╗┌────────────────────────┐╔══╗   │  Ngô Văn Phú      │
│  ║▓▓║│      [IMAGE 2]        │║▓▓║   │  Phần 2.2          │
│  ╚══╝└────────────────────────┘╚══╝   │                    │
│                                        │                    │
│  ── GT CNXHKH (2021), Ch.6, II.2 ──  │                    │
└────────────────────────────────────────┴────────────────────┘
```

---

## Section 3.1 - Quỳnh Như (90s, 2700 frames) **[CONTENT REWRITE NEEDED]**

### Script Content (Cultural exchange + ethnic minority student activities)
- 54 dân tộc, mỗi dân tộc mang bản sắc riêng
- Nguyên tắc "thống nhất trong đa dạng"
- **Giao lưu HSSV DTTS** tại Cần Thơ (tháng 5/2025): biểu diễn văn nghệ, thi cổng trại, đốt lửa trại
- 3 bài học: (1) chủ động tìm hiểu đa dạng VH, (2) giữ bản sắc nhưng không khép kín, (3) trở thành cầu nối văn hóa

**Citation**: GT CNXHKH (2021), Ch.6, I.1 tr.198; Bộ VHTTDL (2025) giao lưu DTTS

### Images: 2 slots

### ASCII Layout

```
BEAT 1 (0-90): Title — FULL SCREEN
┌─────────────────────────────────────────────────────────────┐
│              ╔═══════════════════════════════╗               │
│              ║  PHẦN 3.1                     ║               │
│              ║  Nhận thức đúng đắn -         ║               │
│              ║  Giao lưu văn hóa dân tộc    ║               │
│              ╚═══════════════════════════════╝               │
│                     Quỳnh Như                               │
└─────────────────────────────────────────────────────────────┘

BEAT 2 (90-2700): Content (720px) + MemberPiP (240px)
┌────────────────────────────────────────┬────────────────────┐
│  CONTENT AREA (720px)                  │  MemberPiP (240px) │
│                                        │  ┌──────────────┐  │
│  Event card + 3 lessons               │  │              │  │
│                                        │  │  [VIDEO]     │  │
│  ╔══╗┌────────────────────────┐╔══╗   │  │              │  │
│  ║▓▓║│      [IMAGE 1]        │║▓▓║   │  │  Quỳnh Như   │  │
│  ╚══╝└────────────────────────┘╚══╝   │  │              │  │
│  ╔══╗┌────────────────────────┐╔══╗   │  └──────────────┘  │
│  ║▓▓║│      [IMAGE 2]        │║▓▓║   │                    │
│  ╚══╝└────────────────────────┘╚══╝   │  Nguyễn Phạm      │
│                                        │  Quỳnh Như         │
│  ── GT (2021) tr.198; VHTTDL ──      │  Phần 3.1          │
└────────────────────────────────────────┴────────────────────┘
```

---

## Section 3.2 - Tố Như (90s, 2700 frames) **[CONTENT REWRITE NEEDED]**

### Script Content (Social media misinformation about ethnicity/religion)
- Mạng xã hội = nơi thông tin sai lệch lan nhanh
- **4 dấu hiệu tin giả**: (1) tiêu đề giật gân, (2) thiếu nguồn uy tín, (3) ảnh/video cắt ghép, (4) quy chụp cả nhóm DT/TG
- **Ví dụ thực tế**: Đắk Lắk - thông tin bịa đặt về quan hệ dân tộc Tây Nguyên
- **Cách kiểm chứng**: đối chiếu nhiều nguồn, Google Image/TinEye tra nguồn ảnh, chia sẻ đính chính

**Citation**: Báo Nhân Dân (2025), Đắk Lắk fake news case

### Images: 2 slots

### ASCII Layout

```
BEAT 1 (0-90): Title — FULL SCREEN
┌─────────────────────────────────────────────────────────────┐
│              ╔═══════════════════════════════╗               │
│              ║  PHẦN 3.2                     ║               │
│              ║  Nhận diện thông tin sai lệch ║               │
│              ║  trên mạng xã hội            ║               │
│              ╚═══════════════════════════════╝               │
│                     Tố Như                                  │
└─────────────────────────────────────────────────────────────┘

BEAT 2 (90-2700): Content (720px) + MemberPiP (240px)
┌────────────────────────────────────────┬────────────────────┐
│  CONTENT AREA (720px)                  │  MemberPiP (240px) │
│                                        │  ┌──────────────┐  │
│  4 warning signs + verification        │  │              │  │
│  + Đắk Lắk example                    │  │  [VIDEO]     │  │
│                                        │  │              │  │
│  ╔══╗┌────────────────────────┐╔══╗   │  │  Tố Như      │  │
│  ║▓▓║│      [IMAGE 1]        │║▓▓║   │  │              │  │
│  ╚══╝└────────────────────────┘╚══╝   │  └──────────────┘  │
│  ╔══╗┌────────────────────────┐╔══╗   │                    │
│  ║▓▓║│      [IMAGE 2]        │║▓▓║   │  Hoàng Thị        │
│  ╚══╝└────────────────────────┘╚══╝   │  Tố Như            │
│                                        │  Phần 3.2          │
│  ── Báo Nhân Dân (2025) ──           │                    │
└────────────────────────────────────────┴────────────────────┘
```

---

## Section 3.3 - Ý Như (90s, 2700 frames) **[CONTENT REWRITE NEEDED]**

### Script Content (Propaganda + Mùa hè xanh volunteering)
- **Tuyên truyền**: đồng bào DTTS vùng sâu chưa nắm rõ chương trình hỗ trợ
- **CT MTQG 2021-2030**: hỗ trợ đất ở, nhà ở, nước sinh hoạt (Hà Giang, Cao Bằng, Kon Tum)
- SV lan tỏa thông tin qua MXH hoặc đợt tình nguyện
- **Mùa hè xanh ĐHKHTN**: Đồng Tháp, Vĩnh Long, vùng DTTS
  - Phổ cập tin học, hướng dẫn Internet
  - Khảo sát nguồn nước, xử lý rác thải
- Mang kiến thức chuyên môn phục vụ cộng đồng

**Citation**: GT CNXHKH (2021), Ch.6, I.3b tr.210-212; QĐ 1719/QĐ-TTg; ĐHKHTN (2025) Mùa hè xanh

### Images: 2 slots

### ASCII Layout

```
BEAT 1 (0-90): Title — FULL SCREEN
┌─────────────────────────────────────────────────────────────┐
│              ╔═══════════════════════════════╗               │
│              ║  PHẦN 3.3                     ║               │
│              ║  Tuyên truyền chính sách &    ║               │
│              ║  Tình nguyện cộng đồng        ║               │
│              ╚═══════════════════════════════╝               │
│                     Ý Như                                   │
└─────────────────────────────────────────────────────────────┘

BEAT 2 (90-2700): Content (720px) + MemberPiP (240px)
┌────────────────────────────────────────┬────────────────────┐
│  CONTENT AREA (720px)                  │  MemberPiP (240px) │
│                                        │  ┌──────────────┐  │
│  2 theme cards (policy + MHX)          │  │              │  │
│                                        │  │  [VIDEO]     │  │
│  ╔══╗┌────────────────────────┐╔══╗   │  │              │  │
│  ║▓▓║│      [IMAGE 1]        │║▓▓║   │  │  Ý Như       │  │
│  ╚══╝└────────────────────────┘╚══╝   │  │              │  │
│  ╔══╗┌────────────────────────┐╔══╗   │  └──────────────┘  │
│  ║▓▓║│      [IMAGE 2]        │║▓▓║   │                    │
│  ╚══╝└────────────────────────┘╚══╝   │  Nguyễn Đình      │
│                                        │  Ý Như             │
│  ── GT (2021); QĐ 1719; ĐHKHTN ──    │  Phần 3.3          │
└────────────────────────────────────────┴────────────────────┘
```

---

## Section 3.4 - Nhân (90s, 2700 frames)

### Script Content (University = microcosm of 54 ethnicities)
- Môi trường ĐH = hình ảnh thu nhỏ của cộng đồng 54 dân tộc
- Bạn bè từ nhiều tỉnh thành, giọng nói, thói quen, văn hóa khác nhau
- Mục tiêu chung (học tập, phát triển) = sức mạnh gắn kết
- **Ví dụ cụ thể**: nhóm trưởng bài thuyết trình → phân công 9 thành viên
- Thực hành "bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển"
- Xây dựng đoàn kết từ hành động nhỏ hàng ngày

**Citation**: GT CNXHKH (2021) Ch.6, I.3a tr.205-206; Văn kiện ĐH XII tr.164-165

### Images: 2 slots

### ASCII Layout

```
BEAT 1 (0-90): Title — FULL SCREEN
┌─────────────────────────────────────────────────────────────┐
│              ╔═══════════════════════════════╗               │
│              ║  PHẦN 3.4                     ║               │
│              ║  Tổng kết & liên hệ bản thân ║               │
│              ╚═══════════════════════════════╝               │
│                     Nhân                                    │
└─────────────────────────────────────────────────────────────┘

BEAT 2 (90-2700): Content (720px) + MemberPiP (240px)
┌────────────────────────────────────────┬────────────────────┐
│  CONTENT AREA (720px)                  │  MemberPiP (240px) │
│                                        │  ┌──────────────┐  │
│  Quote + example + principles          │  │              │  │
│                                        │  │  [VIDEO]     │  │
│  ╔══╗┌────────────────────────┐╔══╗   │  │              │  │
│  ║▓▓║│      [IMAGE 1]        │║▓▓║   │  │  Nhân        │  │
│  ╚══╝└────────────────────────┘╚══╝   │  │              │  │
│  ╔══╗┌────────────────────────┐╔══╗   │  └──────────────┘  │
│  ║▓▓║│      [IMAGE 2]        │║▓▓║   │                    │
│  ╚══╝└────────────────────────┘╚══╝   │  Nguyễn Hữu       │
│                                        │  Thiện Nhân        │
│  ── GT (2021); Văn kiện ĐH XII ──    │  Phần 3.4          │
└────────────────────────────────────────┴────────────────────┘
```

---

## Shared Components (all DONE)

### 1. MemberPiP ✓
- 240x540 right-side strip, persistent during Beat 2
- Rotating gold conic border, name + section label below video area
- `src` prop for actual video later, placeholder mode when omitted

### 2. MemberVideoPlaceholder ✓ (kept for future standalone video inserts)
- Full-width 16:9 rectangle with gold border
- Not used in current section layout but available

### 3. ArtDecoImage ✓
- Double-line gold border + SVG corner ornaments
- Rotating conic gradient, one-time sweep animation
- "Chèn ảnh: [description]" placeholder text

### 4. CitationFooter ✓
- Centered italic text with gold gradient separator lines
- Appears at bottom of content area

---

## Priority Order

1. **Fix content mismatches** (S11, S22, S31, S32, S33 — actual data wrong)
2. ~~Build new shared components~~ ✓ (MemberPiP, ArtDecoImage, CitationFooter all done)
3. **Integrate into each section** (MemberPiP right strip + content left + images + citations)
4. **Verify S12, S13** have correct content from scripts
5. **Polish S21, S34** text to match scripts more closely
