import type { Metadata } from "next";
import { Noto_Sans_JP, Sawarabi_Mincho } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const sansJP = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const mincho = Sawarabi_Mincho({
  variable: "--font-mincho",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "สอนญี่ปุ่น.com - เรียนภาษาญี่ปุ่นออนไลน์สไตล์ญี่ปุ่นแท้ๆ",
  description: "เรียนภาษาญี่ปุ่นออนไลน์แบบมืออาชีพ กับเซนเซตัวจริง สอนสนุก เข้าใจง่าย เริ่มต้นตั้งแต่พื้นฐานจนถึงระดับสูง",
  keywords: ["เรียนภาษาญี่ปุ่น", "สอนญี่ปุ่น", "ภาษาญี่ปุ่นออนไลน์", "เซนเซ", "Next.js", "Framer Motion"],
  openGraph: {
    title: "สอนญี่ปุ่น.com - เรียนภาษาญี่ปุ่นออนไลน์สไตล์ญี่ปุ่นแท้ๆ",
    description: "เรียนภาษาญี่ปุ่นออนไลน์แบบมืออาชีพ กับเซนเซตัวจริง",
    url: "https://สอนญี่ปุ่น.com",
    siteName: "สอนญี่ปุ่น.com",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${sansJP.variable} ${mincho.variable}`}>
      <body className="antialiased washi-pattern">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
