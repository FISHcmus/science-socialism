import type { Metadata } from "next";
import { Anton, Oswald, Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-display-vi",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "700"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const propaganda = localFont({
  src: "../../public/fonts/Propaganda.ttf",
  variable: "--font-propaganda",
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  title: {
    default: "CNXHKH - Nhóm 7 | Scientific Socialism",
    template: "%s | CNXHKH",
  },
  description:
    "Landing page for BAA00103 Scientific Socialism course, Group 7, University of Science VNU-HCM. Semester 2, 2025-2026.",
  openGraph: {
    title: "CNXHKH - Scientific Socialism | Group 7",
    description:
      "Course landing page for BAA00103 — Chủ nghĩa xã hội khoa học. Nhóm 7, ĐHKHTN, ĐHQG-HCM.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${anton.variable} ${oswald.variable} ${beVietnamPro.variable} ${jetbrainsMono.variable} ${propaganda.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
