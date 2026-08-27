export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  metrics?: string[];
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export const ayushData = {
  name: "Ayush Chatterjee",
  brandName: "AYUSH CHATTERJEE",
  role: "PRODUCT & BUSINESS ANALYST",
  tagline: "MBA Candidate → Product & Business Analyst | Power BI · Strategy · International Business | OnePlus · Innovist",
  location: "Bhubaneswar, Odisha, India",
  email: "ayushchatterjee.edu@gmail.com",
  phone: "+91 9123337436",
  linkedin: "https://www.linkedin.com/in/ayushmba",

  bioShort1: "I turn messy, real-world data into strategic decisions that move businesses forward across Consumer Electronics, D2C, and Retail.",
  bioShort2: "Product Manager & Analyst bridging data teams with executive decision-makers through Power BI, SQL, and GTM strategy.",

  summary: `I don't just analyse data — I turn it into decisions that move businesses forward. Over the last 2 years, I've had the privilege of working across three very different industry environments — consumer electronics (OnePlus), D2C beauty (Innovist), and retail jewellery (D-Dzire Jewels) — and one thing has stayed constant: the gap between data that exists and insights that actually get used.

At OnePlus, I worked on Android OS quality assurance and UI/UX defect tracking, learning how product teams translate user feedback into sprint priorities. At Innovist, I dug into D2C brand analytics — mapping funnel performance, identifying conversion drop-offs, and surfacing the "why" behind the numbers. At D-Dzire Jewels, I built retail KPI dashboards that reduced reporting errors by 8–10% and improved forecast accuracy by 10% across 5,000+ records.

Now, as an MBA candidate at RCM Bhubaneswar (Class of 2027) specializing in System Management & International Business, I'm sharpening the strategic layer — Porter's Five Forces, RBV frameworks, HR analytics, product road mapping — so that I can bridge the gap between data teams and decision-makers.`,

  keyMetrics: [
    { value: "2+ Yrs", label: "Multi-Industry Exp (OnePlus, Innovist, D-Dzire)" },
    { value: "22%", label: "Software Defect Recurrence Reduction at OnePlus" },
    { value: "15%", label: "Customer Task-Flow Efficiency Improvement" },
    { value: "10%", label: "Forecast Accuracy Boost Across 5,000+ Records" },
  ],

  skills: {
    analytics: ["Power BI", "SQL", "Advanced Excel", "MIS Reporting", "KPI Dashboards", "Data Structuring"],
    strategy: ["GTM Analysis", "Product Roadmapping", "Competitive Benchmarking", "SWOT & Porter's 5 Forces", "Business Case Development"],
    domain: ["Android OS UI/UX QA", "D2C Brand Analytics", "Customer Retention", "Retail Inventory & FOCO Model", "Workforce Planning / HRIS"],
    tools: ["Power BI", "SQL Server", "Excel", "Android OS Studio", "Jira / Bug Tracking", "AI Automation"],
  },

  experiences: [
    {
      id: "swash-dm",
      company: "SWASH Consulting Limited",
      role: "Digital Marketing Analyst",
      period: "June 2026 - July 2026",
      location: "Bhubaneswar",
      description: [
        "Ran full-cycle SEO audits — crawl analysis, Core Web Vitals, meta tag optimisation, internal linking, and backlink gap assessment — improving client organic visibility.",
        "Built and presented ROI tracking reports (RGBs) with keyword ranking trends, CTR benchmarks, monthly traffic deltas, and campaign spend-efficiency ratios.",
        "Designed and executed digital lead generation funnels for RCM College (MBA/BBA), producing landing-page copy, Google Ads keyword sets, and WhatsApp drip sequences targeting prospective students.",
        "Created and scheduled content across Instagram, LinkedIn, and Facebook; managed posting calendars, caption writing, and hashtag research to grow follower engagement.",
        "Assisted in email marketing workflows — list segmentation, subject-line A/B tests, and open-rate analysis — using Mailchimp-style tools.",
        "Monitored Google Analytics and Search Console dashboards daily, flagging traffic anomalies and delivering weekly performance summaries to senior stakeholders."
      ],
      metrics: ["Lead Gen Funnels for RCM College", "Weekly SEO & ROI Reports Delivered"],
      tags: ["SEO Audits", "Lead Generation", "Google Analytics", "Content Marketing", "Social Media", "Email Marketing", "ROI Reporting"]
    },
    {
      id: "swash-media",
      company: "SWASH Consulting Limited",
      role: "Media Intern",
      period: "June 2026 - July 2026",
      location: "Bhubaneswar",
      description: [
        "Supported the media and communications team in producing digital content assets — graphics, short-form reels, and promotional copy — aligned with client brand guidelines.",
        "Assisted in planning and executing social media content calendars across Instagram and LinkedIn for multiple client accounts.",
        "Researched trending content formats, competitor media strategies, and platform algorithm updates to inform creative briefs.",
        "Coordinated with the digital marketing team to ensure media assets were optimised for each platform's spec (aspect ratios, caption length, CTA placement).",
        "Contributed to campaign reporting by collating engagement metrics — reach, impressions, saves, shares — and summarising insights for client decks."
      ],
      tags: ["Media Production", "Social Media Content", "Creative Briefs", "Content Strategy", "Campaign Reporting"]
    },
    {
      id: "oneplus-ux",
      company: "OnePlus & Innovist",
      role: "User Experience Analyst",
      period: "October 2025 - July 2026",
      location: "Bhubaneswar / Remote",
      description: [
        "Conducted structured QA diagnostics across 4 unique operating system builds, mapping interface parameters for 20+ UI bugs.",
        "Reduced post-release software defect recurrence by 22% by authoring comprehensive engineering documentation.",
        "Improved functional task-flow delivery efficiency by 15% through defining digital feature optimization criteria from web usability records."
      ],
      metrics: ["22% Defect Recurrence Reduction", "15% Delivery Efficiency Boost"],
      tags: ["UI/UX Diagnostics", "Android OS", "Engineering Docs", "Root Cause Analysis"]
    },
    {
      id: "oneplus-qa",
      company: "OnePlus Software R&D Centre Private Limited",
      role: "QA & Product Intern — Android OS / UI-UX",
      period: "November 2024 - July 2026",
      location: "India",
      description: [
        "Executed systematic UI/UX defect tracking across Android OS builds, logging and categorizing bugs for sprint planning.",
        "Collaborated with cross-functional product and engineering teams to validate feature performance and apply root cause analysis.",
        "Translated technical defect patterns into business-readable impact summaries for PM review."
      ],
      tags: ["Android OS", "Jira Defect Tracking", "Sprint Planning", "Cross-Functional Collaboration"]
    },
    {
      id: "innovist-research",
      company: "Innovist D2C Brand Portfolio",
      role: "Product Research Contributor (5 Brands)",
      period: "April 2024 - July 2026",
      location: "India",
      description: [
        "Influenced product and growth strategy through competitive benchmarking across a 5-brand D2C portfolio.",
        "Analyzed acquisition funnels and customer retention drivers to identify optimization opportunities.",
        "Recommended 10+ data-backed operational and positioning improvements."
      ],
      tags: ["D2C Growth", "Competitive Benchmarking", "Funnel Analytics", "Retention Strategy"]
    },
    {
      id: "skincare-analytics",
      company: "D2C Skincare Brand Portfolio",
      role: "Analytics Specialist",
      period: "September 2024 - December 2025",
      location: "Remote",
      description: [
        "Analyzed international client acquisition data trends across 5 storefronts, resolving a 17% repeat purchase deficit.",
        "Prepared 3 comprehensive growth recommendations for corporate software deployment, securing a 66% stakeholder adoption rate.",
        "Streamlined routine cross-border reporting loops by 35% using automated performance metric dashboard scripts."
      ],
      metrics: ["Resolved 17% Repeat Purchase Deficit", "35% Faster Reporting Loops"],
      tags: ["E-commerce Analytics", "AOV Optimization", "Dashboard Automation", "Global Retention"]
    },
    {
      id: "ddzire-data",
      company: "D-DZIRE JEWELS",
      role: "Data & Operations Intern (Retail KPI & FOCO Model)",
      period: "May 2025 - October 2025",
      location: "Bhubaneswar",
      description: [
        "Designed and deployed a retail KPI tracking dashboard in Excel consolidating inventory, sales, and margin data — reducing manual errors by 8–10%.",
        "Built a sales forecasting model improving planning accuracy by 10% across 5,000+ records ahead of peak season.",
        "Evaluated Lab-Grown Diamonds sector using SWOT and Porter's Five Forces for FOCO expansion model."
      ],
      metrics: ["8–10% Manual Error Reduction", "10% Higher Forecast Accuracy"],
      tags: ["Power BI & Excel", "FOCO Model", "Sales Forecasting", "Porter's 5 Forces"]
    }
  ] as ExperienceItem[],

  education: [
    {
      institution: "Regional College of Management (RCM), Bhubaneswar",
      degree: "Master of Business Administration (MBA) — Information Technology",
      period: "August 2025 - April 2027",
      details: "Specializing in System Management & International Business, HR Analytics, and Strategic Frameworks."
    },
    {
      institution: "Regional College of Management (RCM), Bhubaneswar",
      degree: "Bachelor of Business Administration (BBA) — Data Analytics",
      period: "January 2022 - May 2025",
      details: "Focused on Data Analytics, Business Statistics, Operations, and Financial Modeling."
    },
    {
      institution: "Apeejay School, Kolkata",
      degree: "Class 12th — CBSE",
      period: "March 2021 - March 2022"
    }
  ] as EducationItem[],

  certifications: [
    { title: "Generative AI: Prompt Engineering Basics", issuer: "IBM / Coursera" },
    { title: "AWS APAC - Solutions Architecture Job Simulation", issuer: "Forage / AWS" },
    { title: "Customer Experience (CX) for Business Success", issuer: "Professional Certification" },
    { title: "Session on Career in Securities Market", issuer: "Financial Markets Institute" },
    { title: "Nationwide Webinar Certification of Participation", issuer: "Industry Summit" }
  ] as CertificationItem[]
};
