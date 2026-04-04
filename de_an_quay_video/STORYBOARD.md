# Storyboard - Nhom 7 Video

**Chu de 6:** Xay dung khoi dai doan ket toan dan toc o Viet Nam
**Thoi luong:** 14:50 (26700 frames @ 30fps)
**Do phan giai:** 1920x1080
**GVHD:** TS. Pham Thi Doat

## Timeline

```
00:00    00:05    00:37    02:04    03:45    05:29  06:48  08:19    10:09    11:33    13:01    14:21 14:50
  |        |        |        |        |        |      |      |        |        |        |        |     |
  |--TITLE-|--INTRO-|--S1.1--|--S1.2--|--S1.3--|S2.1--|S2.2--|--S3.1--|--S3.2--|--S3.3--|--S3.4--|KET--|
  | 150fr  | 960fr  | 2610fr | 3030fr | 3120fr|2370fr|2730fr| 3300fr | 2520fr | 2640fr | 2400fr|870fr|
  |        |        |        |        |        |      |      |        |        |        |        |     |
  |  Mo dau| Nhan   |ThucNhi |ChauNhi |PhNhi   |HNhi  | Phu  |Q.Nhu   | ToNhu  | YNhu   |Nhan   |     |
  |        |        |-----LY LUAN (35%)--------|--TT(14%)-|------TRACH NHIEM SV (50%)---|       |
```

## Layout chung moi section

```
+--1920px-----------------------------------------------------+
|                                                              |
|  +--1440px (content)------------------+  +--480px (PiP)---+  |
|  |                                    |  |                |  |
|  |  PHAN X.X                          |  |  [Video        |  |
|  |  Tieu de section                   |  |   thanh vien]  |  |
|  |  ----                              |  |                |  |
|  |                                    |  |                |  |
|  |  [UNIQUE LAYOUT PER SECTION]       |  |                |  |
|  |  (see layout table below)          |  |                |  |
|  |                                    |  |                |  |
|  |                                    |  |  Ho Ten        |  |
|  |                                    |  |  Phan X.X     |  |
|  |                                    |  +----------------+  |
|  |  Citation footer                   |                      |
|  +------------------------------------+                      |
+--------------------------------------------------------------+
```

**Quy tac page-flip:** Neu section co >3 cards, chia thanh 2 trang:
- Trang 1: cards 0-2 (hien thi -> fade out)
- Trang 2: cards 3+ va images (fade in sau khi trang 1 bien mat)

## Unique layouts per section

| # | Section | DS Component | Card Entrance | Page-Flip Transition |
|---|---------|-------------|---------------|---------------------|
| 1 | S1.1 ThucNhi | FlowChart vertical (3 nodes) | Scale pop-in (0.7->1.0) | Horizontal wipe |
| 2 | S1.2 ChauNhi | IconGrid 3-col / 2-col | Scale-bounce (0->1.15->1.0) | Rotate-fade |
| 3 | S1.3 PhungNhi | FlowChart horizontal + TypewriterText | Fade + slide-down | Scale-down/up |
| 4 | S2.1 HuynhNhi | SplitCompare (green vs red) | Curtain (opposite sides) | Vertical split |
| 5 | S2.2 Phu | BarChart + GlassPanel | Bar grow + fade-scale | Dissolve-blur |
| 6 | S3.1 QuynhNhu | Timeline (gold line + dots) | Cascade-down | Page curl (skew) |
| 7 | S3.2 ToNhu | AlertCard (warning/danger/success) | Shake-in from right | Horizontal flip |
| 8 | S3.3 YNhu | FlowChart horizontal (progression) | Scale-in with glow | Slide-down |
| 9 | S3.4 Nhan | GlassPanel goldRing + row | Fan-out from center | Zoom-out |

## Beat structure (moi section)

```
Frame 0-359:  TITLE BEAT - tieu de section (centered, full screen, 12s) + BGM plays here
Frame 360+:   CONTENT BEAT - layout 2 cot (content + MemberPiP), BGM silent
```

**Gold accent line:** 320px wide, spring sweep animation (damping 14, stiffness 80) in all sections.

---

## TITLE (0:00 - 0:05, frames 0-149)

```
+------------------------------------------------------+
|                                                      |
|       CHU NGHIA XA HOI KHOA HOC - NHOM 7             |
|       GVHD: TS. Pham Thi Doat                       |
|                                                      |
|   TRACH NHIEM CUA SINH VIEN TRONG VIEC              |
|   GOP PHAN XAY DUNG KHOI DAI DOAN KET               |
|   TOAN DAN TOC O VIET NAM                           |
|                                                      |
|   Nhan - Huynh Nhi - Thuc Nhi - Chau Nhi            |
|   Phung Nhi - To Nhu - Y Nhu - Quynh Nhu - Phu     |
|                                                      |
+------------------------------------------------------+
```

## INTRO (0:05 - 0:37, frames 150-1109) - Nhan

```
Content:
  - Chu de 6: Xay dung khoi dai doan ket toan dan toc o VN hien nay
  - Nhom 7 - 9 thanh vien
  - Cau truc: Ly luan -> Thuc tien -> Trach nhiem SV
  - GVHD: TS. Pham Thi Doat

Layout: Split 960+960 | Left: content cards (topic, 3-part structure, member list) | Right: horizontal video (contain, black bg) + name label

Video:  T3-4/cnxhkh_intro_nhan.mp4 (horizontal 1920x1080, objectFit: contain)
```

---

## PHAN 1: CO SO LY LUAN (35%)

### S1.1 - Cuong linh dan toc Mac-Lenin (0:37 - 2:04, frames 1110-3719) - Thuc Nhi

**Layout:** FlowChart vertical (3 nodes) | Scale pop-in | Horizontal wipe

```
Cards (3):
  1. Cac dan toc hoan toan binh dang
     Moi dan toc deu co quyen va nghia vu ngang nhau tren moi linh vuc
  2. Cac dan toc co quyen tu quyet
     Quyen tu quyet dinh che do chinh tri, con duong phat trien. HCM: CMVS
  3. Lien hiep cong nhan tat ca cac dan toc
     Gan ket giai phong dan toc voi giai phong giai cap

Images: T1-1/img1.jpg, T1-1/img2.jpg (280x280)
Video:  T1-1/video_thuc_nhi.mp4
Citation: GT CNXHKH (2021), Ch.6, I.2b, tr.202-205
```

### S1.2 - Nam dac trung co ban cua dan toc (2:04 - 3:45, frames 3720-6749) - Chau Nhi

**Layout:** IconGrid 3-col / 2-col | Scale-bounce (0->1.15->1.0) | Rotate-fade

```
Cards (5) -> PAGE FLIP tai frame 880 (tuong doi):
  Trang 1 (frame 90-909):
    1. Cong dong lanh tho        (appear: 90)
    2. Cong dong sinh hoat KT    (appear: 370)
    3. Cong dong ngon ngu         (appear: 650)
  
  Trang 2 (frame 910+):
    4. Cong dong van hoa va tam ly  (appear: 930)
    5. Co chung mot nha nuoc        (appear: 1210)
    + Images

Images: T1-2/img1_lanh_dao_dtts.jpg, T1-2/img2_ban_do_vn.jpeg (280x280)
Video:  T1-2/video_chau_nhi.mp4
Citation: GT CNXHKH (2021), Ch.6, I.1, tr.196-200
```

### S1.3 - Bon nguyen tac giai quyet van de ton giao (3:45 - 5:29, frames 6750-9869) - Phung Nhi

**Layout:** FlowChart horizontal + TypewriterText | Fade + slide-down | Scale-down/up

```
Cards (4) -> PAGE FLIP tai frame 3000 (tuong doi):
  Trang 1:
    1. Ton trong quyen tu do tin nguong       (appear: 1119)
    2. Khac phuc dan anh huong tieu cuc       (appear: 1563)
    3. Phan biet mat tu tuong va mat chinh tri (appear: 1935)
  
  Trang 2 (frame 3000+):
    4. Quan diem lich su cu the               (appear: 2754)
    + Images

Images: T1-3/img1_tu_do_tin_nguong.jpg, T1-3/img2_xuyen_tac_ton_giao.png (280x280)
Video:  T1-3/video_phung_nhi_cropped.mp4
Citation: GT CNXHKH (2021), Ch.6, II.1b, tr.218-221
```

---

## PHAN 2: THUC TIEN VIET NAM (14%)

### S2.1 - Thuc tien doan ket dan toc VN (5:29 - 6:48, frames 9870-12239) - Huynh Nhi

**Layout:** SplitCompare (green vs red) | Curtain (opposite sides) | Vertical split

```
Cards (2):
  1. Loi the: 54 dan toc cu tru dan xen, tang cuong hieu biet, giao luu
  2. Thach thuc: De nay sinh mau thuan, chenh lech phat trien

Quote: "Bao nhieu loi ich deu vi dan, bao nhieu quyen han deu cua dan" - HCM

Images: T2-1/img1.jpg, T2-1/img2.jpeg (280x280)
Video:  T2-1/video_huynh_nhi_processed.mp4 (NOTE: video already has background music - do NOT layer additional music track)
Citation: GT CNXHKH (2021), Ch.6, I.3a, tr.205-208; HCM (1949)
```

### S2.2 - Dac diem ton giao o Viet Nam (6:48 - 8:19, frames 12240-14969) - Phu

**Layout:** BarChart + GlassPanel | Bar grow + fade-scale | Dissolve-blur

```
Stats row: 16 ton giao | 43 to chuc | 57K chuc sac | 29K+ co so tho tu

Cards (2):
  1. Chung song hoa binh: Chua tung xay ra xung dot hay chien tranh ton giao
  2. Chinh sach nha nuoc: Ton trong tu do tin nguong, binh dang truoc phap luat

Images: T2-2/nha_tho_duc_ba.png, T2-2/toa_thanh_cao_dai.png (280x280)
Video:  T2-2/video_phu.mp4 (NOTE: video has traffic noise background - need to add background music to mask it)
Citation: GT CNXHKH (2021), Ch.6, II.2a-b, tr.222-226
```

---

## PHAN 3: TRACH NHIEM SINH VIEN (50%)

### S3.1 - Giao luu van hoa dan toc (8:19 - 10:09, frames 14970-18269) - Quynh Nhu

**Layout:** Timeline (gold line + dots) | Cascade-down | Page curl (skew)

```
Cards (3):
  1. Giao luu HSSV DTTS (Can Tho, 5/2025)
     Bieu dien van nghe, thi cong trai, dot lua trai
  2. Chu dong tim hieu da dang van hoa
  3. Giu ban sac nhung khong khep kin, tro thanh cau noi van hoa

Images: (chua co anh - placeholder)
Video:  T3-1/video_quynh_nhu_cropped.mp4
Citation: GT CNXHKH (2021), Ch.6, I.1 tr.198; Bo VHTTDL (2025)
```

### S3.2 - Nhan dien thong tin sai lech tren MXH (10:09 - 11:33, frames 18270-20789) - To Nhu

**Layout:** AlertCard (warning/danger/success) | Shake-in from right | Horizontal flip

```
Cards (3):
  1. 4 dau hieu tin gia
     Tieu de giat gan | Thieu nguon | Anh/video cat ghep | Quy chup nhom DT/TG
  2. Vi du thuc te: Dak Lak
     Thong tin bia dat ve quan he dan toc o Tay Nguyen
  3. Cach kiem chung thong tin
     Doi chieu nhieu nguon, Google Image/TinEye, chia se dinh chinh

Images: T3-2/img1.webp, T3-2/img2.webp (280x280)
Video:  T3-2/video_to_nhu.mp4
Citation: Bao Nhan Dan (2025), vu tin gia Dak Lak
```

### S3.3 - Tuyen truyen chinh sach & tinh nguyen cong dong (11:33 - 13:01, frames 20790-23429) - Y Nhu

**Layout:** FlowChart horizontal (progression) | Scale-in with glow | Slide-down

```
Cards (3):
  1. CT MTQG 2021-2030
     Ho tro dat o, nha o, nuoc sinh hoat (Ha Giang, Cao Bang, Kon Tum)
  2. Mua he xanh - DHKHTN
     Tinh nguyen tai Dong Thap, Vinh Long. Pho cap tin hoc, khao sat nguon nuoc
  3. Trach nhiem sinh vien
     Mang kien thuc chuyen mon phuc vu cong dong, lan toa thong tin chinh sach

Images: T3-3/img1.jpg, T3-3/img2.jpg (280x280)
Video:  T3-3/video_y_nhu_cropped.mp4
Citation: GT CNXHKH (2021), Ch.6, I.3b tr.210-212; QD 1719/QD-TTg
```

### S3.4 - Tong ket & lien he ban than (13:01 - 14:21, frames 23430-25829) - Nhan

**Layout:** Stacked: video strip top (1920x360, contain) + content bottom (1920x720) | GlassPanel goldRing + fan-out cards | Zoom-out

```
Quote: "Moi truong dai hoc chinh la hinh anh thu nho cua cong dong 54 dan toc cu tru dan xen"

Cards (3):
  1. Vi du cu the
     Nhom truong phan cong 9 thanh vien tu nhieu tinh thanh
  2. Nguyen tac thuc hanh
     Binh dang, doan ket, tuong tro, giup nhau cung phat trien
  3. Hanh dong tu hom nay
     Xay dung doan ket tu hanh dong nho hang ngay

Images: T3-4/hcmus_campus.png
Video:  T3-4/cnxhkh_mainspeech_nhan.mp4 (horizontal 1920x1080, objectFit: contain, black bg)
Citation: GT CNXHKH (2021), Ch.6, I.3a tr.205-206; Van kien DH XII tr.164-165
```

---

## KET LUAN (14:21 - 14:50, frames 25830-26699)

```
Background: T3-4/cnxhkh_ending_nhan.mp4 (horizontal, objectFit: contain, semi-transparent overlay)

+------------------------------------------------------+
|  [Video background - Nhan speaking]                  |
|  [Overlay rgba(247,243,238,0.75)]                    |
|                                                      |
|           CAM ON CO DA THEO DOI                      |
|                                                      |
|              Nhom 7 - BAA00103                       |
|              CNXH khoa hoc                            |
|              GVHD: TS. Pham Thi Doat                 |
|              [9 member names grid]                   |
|                                                      |
+------------------------------------------------------+
```

---

## Media status

```
Section  | Images                          | Video                        | Status
---------|---------------------------------|------------------------------|---------
T1-1     | 2 jpg                           | video_thuc_nhi.mp4           | OK
T1-2     | 2 jpg/jpeg                      | video_chau_nhi.mp4           | OK
T1-3     | 2 jpg/png                       | video_phung_nhi_cropped.mp4  | OK
T2-1     | 2 jpg/jpeg                      | video_huynh_nhi_processed.mp4| OK
T2-2     | 2 png (nha_tho, toa_thanh)      | video_phu.mp4                | OK
T3-1     | (none)                          | video_quynh_nhu_cropped.mp4  | OK
T3-2     | 2 webp                          | video_to_nhu.mp4             | OK
T3-3     | 2 jpg                           | video_y_nhu_cropped.mp4      | OK
T3-4     | 1 png (hcmus_campus)            | 3 mp4 (intro/main/ending)    | OK
```

All member videos normalized to EBU R128 -16 LUFS (Nhan's 3 videos at -12 LUFS).
All videos use OffthreadVideo for reliable frame extraction during render.

## Design tokens

```
Background:  #F7F3EE (warm off-white)
Text:        #111827 (near-black)
Gold accent: #D97706
Red accent:  #B91C1C
Font:        Be Vietnam Pro (sans-serif), weights 400+700, subsets vietnamese+latin
Min text:    28px body, 32px labels, 48px titles
```
