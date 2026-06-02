// ─── All portfolio data ───────────────────────────────────────────────────────

export const PERSONAL = {
  name: "Ayush Chatterjee",
  title: "Product Manager",
  tagline: "Turning data into products people love.",
  location: "India · Open to Remote & Global Roles",
  linkedin: "https://www.linkedin.com/in/ayushmba",
  github: "https://github.com/forbesayush",
  email: "ayushchatterjee.edu@gmail.com",
};

export const STATS = [
  { value: "50+", label: "UX Defects Found", sub: "Pre-release @ OnePlus" },
  { value: "10K+", label: "Transactions Analyzed", sub: "D-Dzire Jewels FOCO" },
  { value: "22%", label: "Defect Recurrence Reduction", sub: "QA Engineering" },
  { value: "3", label: "Internships", sub: "IT · Retail · D2C" },
];

export const PIPELINE_STAGES = [
  {
    id: "discovery",
    label: "Discovery",
    emoji: "🔭",
    color: "#06b6d4",
    artifacts: [
      { title: "User Interview Synthesis", type: "Research Doc", desc: "Mapped pain points from 20+ structured user interviews at OnePlus pre-release program." },
      { title: "Competitive Landscape", type: "Analysis", desc: "Benchmarked 6 Android OEMs on UI smoothness, gesture responsiveness, and notification architecture." },
      { title: "Jobs-to-be-Done Framework", type: "Framework", desc: "Translated raw feedback into 12 primary JTBD statements driving the UX defect taxonomy." },
    ],
  },
  {
    id: "strategy",
    label: "Strategy",
    emoji: "🗺️",
    color: "#8b5cf6",
    artifacts: [
      { title: "OKR Definition", type: "Strategy Doc", desc: "Defined Q4 OKRs: reduce post-release defect recurrence by 20%, improve task completion by 15%." },
      { title: "Roadmap Prioritisation", type: "Roadmap", desc: "MoSCoW-ranked 50+ issues by severity × frequency matrix, surfacing 8 P0 defects." },
      { title: "Stakeholder Alignment Deck", type: "Presentation", desc: "Executive summary presented to engineering leads; drove cross-team sprint reprioritisation." },
    ],
  },
  {
    id: "design",
    label: "Design",
    emoji: "🎨",
    color: "#f59e0b",
    artifacts: [
      { title: "UX Defect Taxonomy", type: "Specification", desc: "Structured classification of 50+ issues across gesture, visual, performance, and accessibility dimensions." },
      { title: "Root-Cause Analysis Reports", type: "Technical Doc", desc: "Authored engineering RCAs with reproduction steps, severity ratings, and fix recommendations." },
      { title: "User Flow Diagrams", type: "Design Artifact", desc: "Mapped 6 end-to-end customer journeys revealing 3 critical drop-off points in Settings navigation." },
    ],
  },
  {
    id: "build",
    label: "Build",
    emoji: "⚙️",
    color: "#10b981",
    artifacts: [
      { title: "Sprint Board Management", type: "Execution", desc: "Managed 2-week sprint cycles across 3 OS builds; coordinated QA, dev, and design syncs." },
      { title: "Power BI Dashboard Build", type: "Analytics Build", desc: "Built FOCO retail intelligence dashboard tracking 10K+ monthly transactions across franchise locations." },
      { title: "Automated Reporting Script", type: "Automation", desc: "Streamlined D2C cross-border reporting loops by 35%; replaced 8-hour manual process." },
    ],
  },
  {
    id: "launch",
    label: "Launch",
    emoji: "🚀",
    color: "#f43f5e",
    artifacts: [
      { title: "Go-to-Market Checklist", type: "Launch Doc", desc: "12-point pre-release validation checklist adopted by OnePlus QA team for OxygenOS builds." },
      { title: "Release Notes Authoring", type: "Communication", desc: "Drafted structured release documentation for 4 OS beta builds, cross-referenced to defect IDs." },
      { title: "D2C Growth Recommendations", type: "Strategic Output", desc: "3 data-backed growth briefs contributed to 19% revenue uplift across 5 international storefronts." },
    ],
  },
  {
    id: "iterate",
    label: "Iterate",
    emoji: "🔄",
    color: "#06b6d4",
    artifacts: [
      { title: "Retrospective Analysis", type: "Learning Doc", desc: "Post-launch defect recurrence audit: 22% reduction vs. prior OxygenOS cycle confirmed." },
      { title: "KPI Dashboard Review", type: "Analytics", desc: "Monthly Power BI review cadence; identified 28% churn variance in D2C funnel, triaged root cause." },
      { title: "Product Feedback Loop", type: "Process", desc: "Established continuous feedback pipeline from beta testers → engineering backlog → sprint planning." },
    ],
  },
];

export const CASE_STUDIES = [
  {
    id: "oneplus",
    title: "OxygenOS Pre-Release Validation",
    company: "OnePlus & Innovist",
    type: "Product Validation · UX Research",
    color: "#f43f5e",
    period: "Oct 2025 — Present",
    problem: "OxygenOS beta builds shipped with undocumented UX regressions that reached end users, eroding brand trust and increasing support ticket volume.",
    approach: "Built a structured defect taxonomy covering gesture, visual, performance, and accessibility dimensions. Conducted systematic regression testing across 4 OS builds with reproducible documentation.",
    metrics: [
      { value: 50, suffix: "+", label: "UX Defects Found" },
      { value: 22, suffix: "%", label: "Defect Recurrence Reduction" },
      { value: 15, suffix: "%", label: "Task-Flow Efficiency Gain" },
      { value: 4, suffix: "", label: "OS Builds Validated" },
    ],
    tags: ["UX Research", "QA Testing", "Root-Cause Analysis", "Mobile OS"],
  },
  {
    id: "ddzire",
    title: "FOCO Retail Intelligence Dashboard",
    company: "D-Dzire Jewels",
    type: "Business Analytics · Data Strategy",
    color: "#f59e0b",
    period: "Sep 2024 — Dec 2025",
    problem: "FOCO franchise managers lacked real-time visibility into SKU-level sell-through rates, leading to overstock, understock, and 8-hour manual reporting cycles.",
    approach: "Designed and implemented a Power BI + Excel dashboard aggregating transaction data from multiple franchise locations with automated refresh pipelines.",
    metrics: [
      { value: 10, suffix: "K+", label: "Monthly Transactions Tracked" },
      { value: 40, suffix: "%", label: "Reporting Time Reduction" },
      { value: 35, suffix: "%", label: "Reporting Streamlined" },
      { value: 8, suffix: "", label: "Storefront Modules Audited" },
    ],
    tags: ["Power BI", "Excel", "FOCO Model", "Retail Analytics"],
  },
  {
    id: "innovist",
    title: "D2C International Growth Strategy",
    company: "Innovist (D2C Skincare)",
    type: "International Business · Growth Analytics",
    color: "#8b5cf6",
    period: "Sep 2024 — Dec 2025",
    problem: "A 28% chronic churn variance across 5 international storefronts had no identifiable root cause. Leadership lacked a data-backed framework for global expansion decisions.",
    approach: "Conducted end-to-end funnel analysis by market, delivering 3 strategic growth briefs with actionable acquisition and retention recommendations.",
    metrics: [
      { value: 19, suffix: "%", label: "Revenue Uplift Contributed" },
      { value: 28, suffix: "%", label: "Churn Variance Resolved" },
      { value: 5, suffix: "", label: "Storefronts Analyzed" },
      { value: 3, suffix: "", label: "Strategic Reports Delivered" },
    ],
    tags: ["D2C", "International Strategy", "Funnel Analysis", "Growth Analytics"],
  },
];

export const TOOLKIT = [
  { name: "Power BI", category: "Analytics", emoji: "📊" },
  { name: "Excel", category: "Analytics", emoji: "📈" },
  { name: "Google Analytics", category: "Analytics", emoji: "🔍" },
  { name: "Figma", category: "Design", emoji: "🎨" },
  { name: "Miro", category: "Design", emoji: "🗺️" },
  { name: "Notion", category: "PM Tools", emoji: "📋" },
  { name: "Jira", category: "PM Tools", emoji: "⚡" },
  { name: "Agile / Scrum", category: "Methodology", emoji: "🔄" },
  { name: "OKR Framework", category: "Methodology", emoji: "🎯" },
  { name: "A/B Testing", category: "Methodology", emoji: "🧪" },
  { name: "User Interviews", category: "Research", emoji: "🗣️" },
  { name: "JTBD Framework", category: "Research", emoji: "🔭" },
  { name: "React (Basic)", category: "Tech", emoji: "⚛️" },
  { name: "SQL (Basic)", category: "Tech", emoji: "🗄️" },
  { name: "Git", category: "Tech", emoji: "🌿" },
  { name: "MoSCoW", category: "Methodology", emoji: "⚖️" },
];

export const CERTIFICATIONS = [
  { title: "Gen AI: Prompt Engineering Basics", provider: "IBM", year: "2024" },
  { title: "Business Analytics Fundamentals", provider: "IBM", year: "2024" },
  { title: "Google Analytics Certification", provider: "Google", year: "2024" },
  { title: "Foundations of Project Management", provider: "Google", year: "2024" },
  { title: "Product Management Fundamentals", provider: "Coursera", year: "2023" },
  { title: "Advanced Excel & Power BI", provider: "Udemy", year: "2023" },
];

export const FAQS = [
  { q: "Who is Ayush Chatterjee?", a: "Ayush is a data-driven, strategic Product Manager with a background in IT, Analytics, and International Business. He has worked on pre-release product validation at OnePlus and D2C growth research at Innovist." },
  { q: "What is Ayush's product philosophy?", a: "Customer Obsession, Data-Backed Decisions, 0-to-1 Thinking, Execution Focus, Cross-Functional Leadership, and KPI-Driven Mindset." },
  { q: "What industries has Ayush worked in?", a: "Consumer Electronics (OnePlus), D2C Skincare (Innovist), Retail Jewellery (D-Dzire Jewels), and IT & International Business." },
  { q: "Is Ayush open to remote or global roles?", a: "Yes — actively seeking remote, hybrid, and global PM roles at the intersection of technology and international business strategy." },
  { q: "How can I contact Ayush?", a: "Via LinkedIn at linkedin.com/in/ayushmba or through the contact section on this portfolio." },
];
