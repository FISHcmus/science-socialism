export const FPS = 30;
export const TOTAL_DURATION = 24300;

export const COLORS = {
  navy: "#0a1628",
  navyLight: "#1a365d",
  gold: "#f6ad55",
  teal: "#38b2ac",
  white: "#ffffff",
  muted: "#a0aec0",
  vnRed: "#da251d",
} as const;

export const FONT = "'Times New Roman', 'Noto Serif', Georgia, serif";

export interface SectionDef {
  id: string;
  label: string;
  member: string;
  from: number;
  duration: number;
  color: string;
}

export const SECTIONS: SectionDef[] = [
  { id: "title", label: "Mở đầu", member: "", from: 0, duration: 150, color: COLORS.navy },
  { id: "nhan-intro", label: "Giới thiệu chủ đề", member: "Nhân", from: 150, duration: 750, color: "#1a365d" },
  { id: "1.1", label: "Ba nguyên tắc cơ bản", member: "Thục Nhi", from: 900, duration: 2700, color: "#553c9a" },
  { id: "1.2", label: "Năm đặc trưng ĐĐKTDT", member: "Châu Nhi", from: 3600, duration: 2700, color: "#276749" },
  { id: "1.3", label: "Bốn nguyên tắc xây dựng", member: "Phụng Nhi", from: 6300, duration: 2700, color: "#7b341e" },
  { id: "2.1", label: "Thực tiễn đoàn kết VN", member: "Huỳnh Nhi", from: 9000, duration: 1800, color: "#234e52" },
  { id: "2.2", label: "Thành tựu & con số", member: "Phú", from: 10800, duration: 1800, color: "#1a202c" },
  { id: "3.1", label: "Nhận thức đúng đắn", member: "Quỳnh Như", from: 12600, duration: 2700, color: "#44337a" },
  { id: "3.2", label: "Rèn luyện phẩm chất", member: "Tố Như", from: 15300, duration: 2700, color: "#702459" },
  { id: "3.3", label: "Hoạt động thực tiễn", member: "Ý Như", from: 18000, duration: 2700, color: "#2d3748" },
  { id: "3.4", label: "Tổng kết & liên hệ", member: "Nhân", from: 20700, duration: 2700, color: "#1a365d" },
  { id: "conclusion", label: "Kết luận", member: "", from: 23400, duration: 900, color: COLORS.navy },
];

export const MEMBER_COLORS: Record<string, string> = {
  "Nhân": "#1a365d",
  "Thục Nhi": "#553c9a",
  "Châu Nhi": "#276749",
  "Phụng Nhi": "#7b341e",
  "Huỳnh Nhi": "#234e52",
  "Phú": "#1a202c",
  "Quỳnh Như": "#44337a",
  "Tố Như": "#702459",
  "Ý Như": "#2d3748",
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
