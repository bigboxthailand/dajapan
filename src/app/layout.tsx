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
  metadataBase: new URL("https://www.สอนภาษาญี่ปุ่น.com"),
  title: {
    default: "สอนภาษาญี่ปุ่น.com - เรียนภาษาญี่ปุ่นออนไลน์สไตล์ญี่ปุ่นแท้ๆ",
    template: "%s | สอนภาษาญี่ปุ่น.com",
  },
  description: "เรียนภาษาญี่ปุ่นออนไลน์แบบมืออาชีพ กับเซนเซตัวจริง สอนสนุก เข้าใจง่าย เริ่มต้นตั้งแต่พื้นฐานจนถึงระดับสูง JLPT N5-N1",
  keywords: ["เรียนภาษาญี่ปุ่น", "สอนภาษาญี่ปุ่น", "ภาษาญี่ปุ่นออนไลน์", "เซนเซ", "JLPT", "ติวสอบภาษาญี่ปุ่น", "ญี่ปุ่นพื้นฐาน", "เรียนภาษาญี่ปุ่นด้วยตัวเอง"],
  authors: [{ name: "Nat San", url: "https://www.สอนภาษาญี่ปุ่น.com" }],
  creator: "Nat San",
  publisher: "สอนภาษาญี่ปุ่น.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "สอนภาษาญี่ปุ่น.com - เรียนภาษาญี่ปุ่นออนไลน์สไตล์ญี่ปุ่นแท้ๆ",
    description: "เรียนภาษาญี่ปุ่นออนไลน์แบบมืออาชีพ กับเซนเซตัวจริง สอนสนุก เข้าใจง่าย เริ่มต้นตั้งแต่พื้นฐานจนถึงระดับสูง",
    url: "https://www.สอนภาษาญี่ปุ่น.com",
    siteName: "สอนภาษาญี่ปุ่น.com",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to the public folder later if not exists
        width: 1200,
        height: 630,
        alt: "เรียนภาษาญี่ปุ่นออนไลน์สไตล์ญี่ปุ่นแท้ๆ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "สอนภาษาญี่ปุ่น.com - เรียนภาษาญี่ปุ่นออนไลน์สไตล์ญี่ปุ่นแท้ๆ",
    description: "เรียนภาษาญี่ปุ่นออนไลน์แบบมืออาชีพ กับเซนเซตัวจริง สอนสนุก เข้าใจง่าย เริ่มต้นตั้งแต่พื้นฐานจนถึงระดับสูง",
    images: ["/og-image.jpg"], // Make sure to add this image to the public folder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Q8F9uqkVJUKRFvpc6aW7Cj960aj4HZL7tsvfIsz5Qhs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.สอนภาษาญี่ปุ่น.com/#website",
        url: "https://www.สอนภาษาญี่ปุ่น.com/",
        name: "สอนภาษาญี่ปุ่น.com",
        description: "เรียนภาษาญี่ปุ่นออนไลน์แบบมืออาชีพ กับเซนเซตัวจริง",
        inLanguage: "th-TH"
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.สอนภาษาญี่ปุ่น.com/#organization",
        name: "สอนภาษาญี่ปุ่น.com",
        url: "https://www.สอนภาษาญี่ปุ่น.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.สอนภาษาญี่ปุ่น.com/og-image.jpg"
        },
        sameAs: [
          // "https://www.facebook.com/your-facebook-page",
        ]
      }
    ]
  };

  return (
    <html lang="th" className={`${sansJP.variable} ${mincho.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased washi-pattern">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
