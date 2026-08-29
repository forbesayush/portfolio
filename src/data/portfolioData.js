/**
 * Official Portfolio Data for Ayush Chatterjee — Consultant & Product Manager
 * Structured with the STAR Method (Situation, Task, Action, Result)
 * Bridging Management Consulting Rigor with End-to-End Product Management Execution.
 */

export const personalInfo = {
  name: 'AYUSH CHATTERJEE',
  title: 'Consultant & Product Manager',
  subtitle: 'MBA (IT & International Business) • BBA (Marketing & Consumer Behavior)',
  supportingHeadline: 'Bridging commercial strategy, product roadmapping, and data-driven execution. Specializing in Product Management, Strategy Consulting (MECE), UX Telemetry, and Unit Economics.',
  bio: 'Consultant and Product Manager with 4+ years of experience deconstructing complex business challenges, defining PRD roadmaps, eliminating UX friction, and scaling high-margin commercial systems.',
  brandStatementLead: 'Great products and strategies are not built on assumptions — they are forged in rigorous discovery, user telemetry, and defensible unit economics.',
  brandStatementBody: 'Combining structured management consulting rigor (MECE, SWOT, Porter’s Five Forces) with end-to-end product management execution (PRDs, Figma prototyping, A/B testing, SQL/BI telemetry). Whether leading cross-functional teams to eliminate UX defects or engineering cross-border commercial systems, I deliver measurable business impact.',
  educationBadge: 'MBA — IT & International Business (2024–2026)',
  focusBadge: 'Product Management • Strategy Consulting • UX Telemetry • Unit Economics',
  location: 'Bhubaneswar / Kolkata, India',
  targetHorizon: 'Global Product Management & Management Consulting Roles',
  email: 'ayushchatterjee.edu@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/ayushmba',
  linkedinDisplay: 'linkedin.com/in/ayushmba',
  portfolioDomain: 'ayushchatterjee.me',
  status: 'Open to Global Consultant & Product Manager Roles',
};

// Key Quantitative Telemetry & Impact Metrics
export const heroTelemetry = [
  { label: 'COMMERCIAL VOLUME SCALED', value: '₹35 Cr+', change: '+38% YoY', status: 'verified' },
  { label: 'PRODUCT UX FRICTION CUT', value: '-22%', change: 'Measured Telemetry', status: 'optimized' },
  { label: 'CAC : LTV MULTIPLIER', value: '3.4x', change: 'Unit Economics', status: 'growth' },
  { label: 'STRATEGIC MILESTONES DELIVERED', value: '100%', change: 'On Schedule', status: 'verified' },
];

// 4 Core Competency Pillars (Consulting & Product Management)
export const corePillars = [
  {
    id: 'product-management',
    title: 'Product Management & Roadmapping',
    subtitle: 'PRDS, BACKLOGS & GOVERNANCE',
    description: 'Transforming ambiguous strategic goals into actionable PRDs, user story maps, prioritized sprint backlogs, and measurable product roadmaps.',
    icon: 'Layers',
    capabilities: ['Product Requirement Documents (PRDs)', 'User Story Mapping & Backlog Grooming', 'Agile & Scrum Sprint Governance', 'Cross-Functional Team Alignment', 'Go-To-Market (GTM) Execution'],
    metric: '100% On-Time Delivery'
  },
  {
    id: 'management-consulting',
    title: 'Management Consulting & Strategy',
    subtitle: 'MECE, MOATS & DECISION DECKS',
    description: 'Deconstructing complex enterprise challenges into MECE problem trees, conducting market entry studies, and authoring boardroom decision decks.',
    icon: 'Briefcase',
    capabilities: ['MECE Problem Decomposition', 'Porter’s Five Forces & Moat Analysis', 'Market Entry & Commercial Due Diligence', 'Stakeholder Governance Workshops', 'Executive C-Suite Decision Decks'],
    metric: '12+ Strategic Decks'
  },
  {
    id: 'product-ux-cro',
    title: 'Product UX & Conversion Telemetry',
    subtitle: 'HEURISTICS, FLOWS & A/B TESTING',
    description: 'Mapping end-to-end user journeys, isolating drop-off nodes with session telemetry, and deploying systematic A/B experimentation roadmaps.',
    icon: 'Zap',
    capabilities: ['Heuristic Usability Evaluations', 'User Journey & Drop-Off Diagnostics', 'Figma Interactive Prototyping', 'A/B & Multivariate Experimentation', 'Task Flow Velocity Optimization'],
    metric: '-22% UX Friction Cut'
  },
  {
    id: 'unit-economics',
    title: 'Unit Economics & Business Intelligence',
    subtitle: 'FINANCIAL MODELING & MIS TELEMETRY',
    description: 'Designing data pipelines, building Power BI executive dashboards, and modeling CAC:LTV:AOV unit economics for defensible commercial scale.',
    icon: 'BarChart3',
    capabilities: ['CAC : LTV : AOV Financial Modeling', 'Power BI Executive MIS Dashboards', 'Cross-Border SQL Data Pipelines', 'Cohort Retention Diagnostics', 'Attribution Modeling (GA4/Mixpanel)'],
    metric: '3.4x CAC:LTV Ratio'
  }
];

// STAR METHOD PROJECTS & CASEBOOKS
export const starCaseStudies = [
  {
    id: 'oneplus-ux',
    category: 'Product Management & UX Telemetry',
    badge: 'PRODUCT UX • CRO & FLOWS',
    title: 'OnePlus & Innovist: Eliminating 22% UX Friction in Core Navigation',
    summary: 'Deconstructed user journeys across cross-platform interfaces to streamline task completion velocity, eliminate drop-off nodes, and reduce defect tickets.',
    star: {
      situation: 'Customer analytics revealed significant cognitive overload and navigation friction in core exploratory user shopping journeys, resulting in elevated abandonment rates and recurring interface defect tickets.',
      task: 'Conduct a comprehensive heuristic evaluation, identify high-friction user drop-off nodes, and deliver a frictionless redesign adopted by cross-functional engineering and design teams.',
      action: 'Analyzed 500+ session recordings and user flow telemetry; categorized defects into high/medium friction tiers; redesigned the navigation architecture using progressive disclosure; and built prototype task flows for stakeholder sign-off.',
      result: 'Achieved a 22% measured reduction in interface defect tickets, boosted task completion velocity by +15%, and reached a 66% stakeholder adoption velocity across product sprint cycles.'
    },
    keyStats: [
      { label: 'UX Defect Cut', value: '-22%' },
      { label: 'Task Velocity', value: '+15%' },
      { label: 'Adoption Rate', value: '66%' },
      { label: 'Replays Analyzed', value: '500+' }
    ],
    techStack: ['Figma', 'User Flow Telemetry', 'Hotjar', 'Google Analytics 4', 'Heuristic Evaluation', 'Jira Agile'],
    deliverables: [
      'End-to-End User Journey Telemetry Map',
      'High-Fidelity Interactive Navigation Prototype',
      'UX Defect Taxonomy & Remediation Backlog'
    ]
  },
  {
    id: 'd2c-retention',
    category: 'Product Growth & Unit Economics',
    badge: 'PRODUCT GROWTH • COMMERCE LTV',
    title: 'Innovist D2C Skincare: Resolving the 17% Repeat Deficit & Scaling LTV',
    summary: 'Turned a structural post-purchase retention deficit into a high-margin product growth engine across 5 international storefronts.',
    star: {
      situation: 'A high-growth multi-country D2C skincare portfolio was experiencing a severe 17% repeat-purchase deficit within 60 days of initial customer acquisition, eroding blended contribution margins and inflating paid CAC.',
      task: 'Diagnose the cross-border customer drop-off curve, architect automated lifecycle retention workflows, and elevate Average Order Value (AOV) to re-establish a healthy 3.0x+ CAC:LTV ratio.',
      action: 'Engineered an automated MIS telemetry pipeline linking Shopify store data to Klaviyo; designed predictive replenishment triggers based on consumption cycles (30/45/60 days); and integrated dynamic cart volume tiering (Buy 2 Get 1) at checkout.',
      result: 'Accelerated cross-border reporting speed by 35%, increased Average Order Value (AOV) by +24%, resolved the 17% repeat-purchase deficit, and achieved a 3.4x CAC:LTV ratio across 5 international storefronts.'
    },
    keyStats: [
      { label: 'Reporting Speed', value: '+35%' },
      { label: 'AOV Increase', value: '+24%' },
      { label: 'CAC:LTV Ratio', value: '3.4x' },
      { label: 'Deficit Resolved', value: '17%' }
    ],
    techStack: ['Shopify Plus', 'Klaviyo Automation', 'Google Analytics 4', 'Mixpanel', 'Power BI', 'RFM Segmentation'],
    deliverables: [
      'Automated Cross-Border MIS Telemetry Dashboard',
      'Predictive Replenishment CRM Flow Matrix',
      'Dynamic Cart Tiering & Volume Bundling Rules'
    ]
  },
  {
    id: 'swash-consulting',
    category: 'Strategy & Management Consulting',
    badge: 'MANAGEMENT CONSULTING • STRATEGY',
    title: 'Swash Consulting: Strategic Transformation & Stakeholder Governance',
    summary: 'Delivered structured management consulting frameworks (MECE, SWOT, Porter) to execute high-impact client transformation mandates.',
    star: {
      situation: 'Enterprise transformation clients faced misaligned departmental objectives, ambiguous strategic roadmaps, and fragmented multi-channel stakeholder communication.',
      task: 'Deconstruct complex organizational challenges into MECE problem trees, prioritize strategic initiatives by commercial ROI, and govern phased implementation roadmaps.',
      action: 'Conducted executive stakeholder workshops; built data-driven market entry and digital capability matrices; synthesized complex business requirements into executive decision decks; and monitored sprint milestone governance.',
      result: 'Delivered 100% of client transformation milestones on schedule, earning executive stakeholder endorsements and establishing repeatable strategic consulting toolkits.'
    },
    keyStats: [
      { label: 'Milestone Delivery', value: '100%' },
      { label: 'Strategy Decks', value: '12+' },
      { label: 'Client Satisfaction', value: '99%' },
      { label: 'Toolkits Built', value: '4' }
    ],
    techStack: ['MECE Issue Trees', 'Porter’s Five Forces', 'PowerPoint / Keynote', 'Market Research', 'Stakeholder Governance'],
    deliverables: [
      'Enterprise Digital Capability Blueprint',
      'Executive Commercial Decision Decks',
      'Multi-Phase Implementation Governance Roadmap'
    ]
  },
  {
    id: 'luxury-retail',
    category: 'Retail Systems & Clienteling Strategy',
    badge: 'OPERATIONS • LUXURY CLIENTELING',
    title: 'D-DZIRE Jewels: Consultative Sales Architecture & Inventory Optimization',
    summary: 'Systematized luxury consumer sales psychology and retail showroom inventory management for high-margin repeat conversion.',
    star: {
      situation: 'High-ticket luxury jewellery showroom operations relied heavily on informal sales interactions and disconnected inventory records, causing missed follow-ups on high-value repeat clients.',
      task: 'Institutionalize a structured consultative clienteling framework, establish real-time showroom inventory telemetry, and increase high-value customer retention.',
      action: 'Developed a consultative clienteling playbook incorporating luxury consumer buying psychology; implemented a real-time showroom MIS tracking stock turnover and customer preference profiles; and trained sales associates on tiered loyalty follow-ups.',
      result: 'Generated a +28% increase in repeat consultation conversion, eliminated stock reconciliation discrepancies to 0% variance, and achieved 100% digital clienteling adoption among retail associates.'
    },
    keyStats: [
      { label: 'Repeat Conversion', value: '+28%' },
      { label: 'System Adoption', value: '100%' },
      { label: 'Stock Accuracy', value: '99.9%' },
      { label: 'Audit Variance', value: '0%' }
    ],
    techStack: ['Retail MIS', 'Clienteling CRM', 'Inventory Management Systems', 'Consumer Psychology', 'Pricing Architecture'],
    deliverables: [
      'Consultative Clienteling Playbook',
      'Real-Time Showroom Inventory MIS Dashboard',
      'High-Net-Worth Customer Retention Protocol'
    ]
  }
];

// CAREER EXPERIENCE LEDGER
export const experienceLedger = [
  {
    id: 'tx-001',
    ref: 'EXP_ONEPLUS_2024',
    company: 'OnePlus & Innovist',
    role: 'Growth & UX Analytics Lead / Product Strategist',
    period: '2024 — 2024',
    location: 'India & Remote',
    type: 'PRODUCT & UX',
    status: 'VERIFIED',
    summary: 'Analyzed user drop-off curves, built journey telemetry, and streamlined core exploratory flows for consumer tech interfaces.',
    metrics: [
      { label: 'Defect Reduction', value: '-22%' },
      { label: 'Task Velocity', value: '+15%' },
      { label: 'Adoption Velocity', value: '66%' }
    ],
    highlights: [
      'Conducted heuristic evaluations of cross-device task flows, cutting interface defects by 22%.',
      'Mapped customer telemetry drop-off nodes and built prioritized remediation backlogs in Jira.',
      'Collaborated with global engineering teams to execute high-adoption navigation improvements.'
    ],
    tags: ['Product UX', 'Heuristic Evaluation', 'Figma', 'Jira Agile', 'CRO']
  },
  {
    id: 'tx-002',
    ref: 'EXP_INNOVIST_2023',
    company: 'Innovist D2C Skincare Portfolio',
    role: 'Product Growth & Retention Lead',
    period: '2023 — 2024',
    location: 'India / Multi-Country Storefronts',
    type: 'PRODUCT GROWTH',
    status: 'VERIFIED',
    summary: 'Engineered automated cross-border MIS reporting, full-funnel attribution, and predictive replenishment retention flows.',
    metrics: [
      { label: 'Reporting Speed', value: '+35%' },
      { label: 'AOV Increase', value: '+24%' },
      { label: 'CAC:LTV Ratio', value: '3.4x' }
    ],
    highlights: [
      'Built automated cross-border MIS pipelines connecting Shopify storefronts to analytics dashboards.',
      'Resolved a 17% 60-day repeat-purchase deficit using predictive Klaviyo replenishment automation.',
      'Designed dynamic volume cart tiering (Buy 2 Get 1), lifting blended AOV by +24% across 5 markets.'
    ],
    tags: ['Shopify Plus', 'Klaviyo', 'Google Analytics 4', 'Power BI', 'SQL', 'AOV Optimization']
  },
  {
    id: 'tx-003',
    ref: 'EXP_SWASH_2021',
    company: 'Swash Consulting Limited',
    role: 'Strategy & Management Consultant',
    period: '2021 — 2022',
    location: 'India',
    type: 'CONSULTING',
    status: 'VERIFIED',
    summary: 'Delivered structured management consulting decks, stakeholder governance frameworks, and market research studies.',
    metrics: [
      { label: 'Milestone Delivery', value: '100%' },
      { label: 'Research Decks', value: '12+' },
      { label: 'Client Satisfaction', value: '99%' }
    ],
    highlights: [
      'Deconstructed organizational transformation challenges using MECE problem trees and SWOT matrices.',
      'Created executive decision presentations for senior commercial stakeholders.',
      'Managed end-to-end consulting delivery timelines with 100% on-time milestone fulfillment.'
    ],
    tags: ['MECE Framework', 'Stakeholder Governance', 'Market Research', 'Executive Decks']
  },
  {
    id: 'tx-004',
    ref: 'EXP_DDZIRE_2022',
    company: 'D-DZIRE Jewels',
    role: 'Retail Operations & Clienteling Strategist',
    period: '2022 — 2023',
    location: 'Bhubaneswar, India',
    type: 'OPERATIONS & STRATEGY',
    status: 'VERIFIED',
    summary: 'Instituted consultative sales scripts, real-time inventory management MIS, and high-ticket customer retention programs.',
    metrics: [
      { label: 'Repeat Conversion', value: '+28%' },
      { label: 'System Adoption', value: '100%' },
      { label: 'Inventory Discrepancy', value: '0%' }
    ],
    highlights: [
      'Engineered structured consultative sales scripts tailored to luxury consumer buying psychology.',
      'Deployed real-time inventory tracking MIS, eliminating stock-out delays and audit variances.',
      'Elevated repeat consultation conversion by +28% through systematized VIP clienteling protocols.'
    ],
    tags: ['Retail MIS', 'Clienteling', 'Inventory Control', 'Consumer Psychology', 'Pricing Moats']
  }
];

// ACADEMIC FOUNDATION
export const academicCredentials = [
  {
    degree: 'Master of Business Administration (MBA)',
    specialization: 'Information Technology & International Business',
    institution: 'Regional College of Management (RCM), Bhubaneswar',
    duration: '2024 — 2026',
    grade: 'First Class with Distinction',
    badge: 'POSTGRADUATE • STEM-ALIGNED',
    description: 'Advanced postgraduate coursework spanning Enterprise Information Systems, International Trade & Market Entry, Global Supply Chain Analytics, and Digital Transformation Governance.'
  },
  {
    degree: 'Bachelor of Business Administration (BBA)',
    specialization: 'Marketing Management & Consumer Behavior',
    institution: 'Regional College of Management (RCM) / Utkal University',
    duration: '2021 — 2024',
    grade: 'First Class Honors',
    badge: 'UNDERGRADUATE • MARKETING LEAD',
    description: 'Core grounding in Consumer Buying Psychology, Quantitative Market Research, Brand Architecture, Strategic Management, and Commercial Law.'
  }
];
