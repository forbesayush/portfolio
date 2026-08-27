import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { personSchema } from "@/lib/seo";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Ayush Chatterjee | Product & Business Analyst",
    template: "%s | Ayush Chatterjee",
  },
  description:
    "Portfolio of Ayush Chatterjee, an MBA candidate focused on Product Management, Business Analytics, Strategy, Power BI and technology-driven business solutions.",
  keywords: [
    "Ayush Chatterjee",
    "Product Manager",
    "Business Analyst",
    "MBA",
    "Power BI",
    "RCM Bhubaneswar",
    "Data Analytics",
    "Strategy",
  ],
  authors: [{ name: "Ayush Chatterjee" }],
  creator: "Ayush Chatterjee",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ayushchatterjee.com",
    title: "Ayush Chatterjee | Product & Business Analyst",
    description:
      "Portfolio of Ayush Chatterjee, an MBA candidate focused on Product Management, Business Analytics, Strategy, Power BI and technology-driven business solutions.",
    siteName: "Ayush Chatterjee",
    images: [
      {
        url: "/og/cover.png",
        width: 1200,
        height: 630,
        alt: "Ayush Chatterjee - Product & Business Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Chatterjee | Product & Business Analyst",
    description:
      "Portfolio of Ayush Chatterjee, an MBA candidate focused on Product Management, Business Analytics, Strategy, Power BI and technology-driven business solutions.",
    images: ["/og/cover.png"],
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
  alternates: {
    canonical: "https://ayushchatterjee.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="font-sans bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
