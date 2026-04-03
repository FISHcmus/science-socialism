import { COLORS as _COLORS, FONT as _FONT, TEXT_SHADOW as _TEXT_SHADOW } from "./components/ds/tokens";
export const COLORS = _COLORS;
export const FONT = _FONT;
export const TEXT_SHADOW = _TEXT_SHADOW;

export const FPS = 30;
export const TOTAL_DURATION = 24300;

export interface SectionDef {
  id: string;
  label: string;
  member: string;
  from: number;
  duration: number;
  color: string;
}

export const SECTIONS: SectionDef[] = [
  { id: "title", label: "Mở đầu", member: "", from: 0, duration: 150, color: COLORS.darkest },
  { id: "nhan-intro", label: "Giới thiệu chủ đề", member: "Nhân", from: 150, duration: 750, color: COLORS.dark },
  { id: "1.1", label: "Cương lĩnh dân tộc", member: "Thục Nhi", from: 900, duration: 2700, color: "#FEF3C7" },
  { id: "1.2", label: "Năm đặc trưng dân tộc", member: "Châu Nhi", from: 3600, duration: 2700, color: "#DBEAFE" },
  { id: "1.3", label: "Nguyên tắc tôn giáo", member: "Phụng Nhi", from: 6300, duration: 2700, color: "#F3E8FF" },
  { id: "2.1", label: "Thực tiễn đoàn kết", member: "Huỳnh Nhi", from: 9000, duration: 1800, color: "#DCFCE7" },
  { id: "2.2", label: "Tôn giáo Việt Nam", member: "Phú", from: 10800, duration: 1800, color: "#FEF9C3" },
  { id: "3.1", label: "Giao lưu văn hóa", member: "Quỳnh Như", from: 12600, duration: 2700, color: "#FCE7F3" },
  { id: "3.2", label: "Nhận diện tin giả", member: "Tố Như", from: 15300, duration: 2700, color: "#E0F2FE" },
  { id: "3.3", label: "Tình nguyện cộng đồng", member: "Ý Như", from: 18000, duration: 2700, color: "#FFF7ED" },
  { id: "3.4", label: "Tổng kết & liên hệ", member: "Nhân", from: 20700, duration: 2700, color: COLORS.dark },
  { id: "conclusion", label: "Kết luận", member: "", from: 23400, duration: 900, color: COLORS.darkest },
];

export const MEMBER_COLORS: Record<string, string> = {
  "Nhân": "#D97706",
  "Thục Nhi": "#EA580C",
  "Châu Nhi": "#2563EB",
  "Phụng Nhi": "#9333EA",
  "Huỳnh Nhi": "#16A34A",
  "Phú": "#CA8A04",
  "Quỳnh Như": "#DB2777",
  "Tố Như": "#0891B2",
  "Ý Như": "#C2410C",
};

// Vietnam regions for map highlighting
export const REGIONS: Record<string, string[]> = {
  "Tây Bắc": ["Lai Châu", "Điện Biên", "Sơn La", "Hòa Bình", "Lào Cai", "Yên Bái"],
  "Đông Bắc": ["Hà Giang", "Cao Bằng", "Bắc Kạn", "Lạng Sơn", "Tuyên Quang", "Thái Nguyên", "Phú Thọ", "Bắc Giang", "Quảng Ninh"],
  "Đồng bằng sông Hồng": ["Hà Nội", "Vĩnh Phúc", "Bắc Ninh", "Hải Dương", "Hải Phòng", "Hưng Yên", "Thái Bình", "Hà Nam", "Nam Định", "Ninh Bình"],
  "Bắc Trung Bộ": ["Thanh Hóa", "Nghệ An", "Hà Tĩnh", "Quảng Bình", "Quảng Trị", "Thừa Thiên Huế"],
  "Nam Trung Bộ": ["Đà Nẵng", "Quảng Nam", "Quảng Ngãi", "Bình Định", "Phú Yên", "Khánh Hòa", "Ninh Thuận", "Bình Thuận"],
  "Tây Nguyên": ["Kon Tum", "Gia Lai", "Đắk Lắk", "Đắk Nông", "Lâm Đồng"],
  "Đông Nam Bộ": ["Bình Phước", "Tây Ninh", "Bình Dương", "Đồng Nai", "Bà Rịa - Vũng Tàu", "Hồ Chí Minh"],
  "Đồng bằng sông Cửu Long": ["Long An", "Tiền Giang", "Bến Tre", "Trà Vinh", "Vĩnh Long", "Đồng Tháp", "An Giang", "Kiên Giang", "Cần Thơ", "Hậu Giang", "Sóc Trăng", "Bạc Liêu", "Cà Mau"],
};
