import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ayush Chatterjee | Product Manager Portfolio",
  description: "Data-driven, strategic Product Manager at the intersection of IT, Analytics & International Business. Pre-release product validation at OnePlus, D2C growth at Innovist.",
  keywords: ["Ayush Chatterjee", "Product Manager", "Portfolio", "Analytics", "International Business", "UX Research"],
  authors: [{ name: "Ayush Chatterjee" }],
  openGraph: {
    title: "Ayush Chatterjee | Product Manager Portfolio",
    description: "Data-driven Product Manager — OnePlus · Innovist · D-Dzire Jewels",
    type: "website",
    url: "https://ayushchatterjee.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Chatterjee | Product Manager Portfolio",
    description: "Data-driven Product Manager — OnePlus · Innovist · D-Dzire Jewels",
  },
  robots: { index: true, follow: true },
  other: {
    "google-site-verification": "P_g8B0iaNzl_ey8Q5FCqrK95T49xV4jajkhQMAeM04c",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
              document.documentElement.classList.add('light');
              document.documentElement.classList.remove('dark');
            } else {
              document.documentElement.classList.add('dark');
              document.documentElement.classList.remove('light');
            }
          } catch (_) {}
        `}} />
      </head>
      <body className={`${inter.variable} font-sans bg-bg-color text-zinc-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}
