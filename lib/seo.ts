import type { Metadata } from "next";
import profile from "@/content/profile.json";

export const siteMetadata: Metadata = {
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

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.person.name,
  jobTitle: profile.person.role,
  url: "https://ayushchatterjee.com",
  sameAs: [profile.person.linkedin],
  knowsAbout: [
    "Product Management",
    "Business Analytics",
    "Power BI",
    "Strategy",
    "International Business",
    "Data Analytics",
    "GTM Analysis",
    "HR Analytics",
  ],
  alumniOf: profile.education.map((edu) => ({
    "@type": "EducationalOrganization",
    name: edu.institution,
  })),
};
