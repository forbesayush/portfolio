import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Product Management',
    description: 'User research, requirement documentation, prioritization frameworks, and sprint execution.',
    skills: [
      {
        name: 'PRD & Feature Scoping',
        level: 0,
        experience: 'Practical',
        description: 'Writing functional specifications, user stories, acceptance criteria, and edge-case documentation.',
        codeSnippet: `# Sample Feature Specification
Feature: Multi-Currency Checkout Module
Objective: Reduce payment abandonment on international storefronts.
User Story: As an international shopper, I want prices displayed in my local currency so that I understand total costs before checkout.
Acceptance Criteria:
1. Auto-detect visitor location from IP header.
2. Fallback to USD if local currency gateway is unavailable.`
      },
      {
        name: 'Feature Prioritization (RICE)',
        level: 0,
        experience: 'Applied',
        description: 'Evaluating feature backlogs using Reach, Impact, Confidence, and Effort scoring.',
        codeSnippet: `// RICE Prioritization Calculation
function calculateRICE(reach, impact, confidence, effort) {
  // Reach: Users impacted per quarter
  // Impact: 0.5 (minimal) to 3 (massive)
  // Confidence: 50% to 100%
  // Effort: Person-weeks
  return (reach * impact * (confidence / 100)) / effort;
}`
      },
      {
        name: 'QA Defect Triage',
        level: 0,
        experience: 'OnePlus Exposure',
        description: 'Reproducing UI defects, mapping root causes, and categorizing bug severity for engineering sprints.',
        codeSnippet: `Bug Report: [UI-204] Navigation Header Overlap on OS Build 14.2
Severity: P2 (Major Usability)
Steps to Reproduce:
1. Open settings menu from notification drawer.
2. Rotate screen to horizontal orientation.
Expected: Header adjusts layout.
Actual: Title overlaps back button.`
      }
    ]
  },
  {
    category: 'Business Analytics',
    description: 'Cohort analysis, funnel diagnostics, Power BI reporting, and Excel financial modeling.',
    skills: [
      {
        name: 'Cohort Retention Modeling',
        level: 0,
        experience: 'Applied',
        description: 'Tracking customer repurchase rates and retention curves by acquisition month.',
        codeSnippet: `// Cohort Retention Query Pattern
SELECT 
  DATE_TRUNC('month', first_order_date) AS cohort_month,
  COUNT(DISTINCT customer_id) AS cohort_size,
  COUNT(DISTINCT CASE WHEN order_month = 1 THEN customer_id END) * 100.0 / COUNT(DISTINCT customer_id) AS m1_retention,
  COUNT(DISTINCT CASE WHEN order_month = 2 THEN customer_id END) * 100.0 / COUNT(DISTINCT customer_id) AS m2_retention
FROM customer_orders
GROUP BY 1;`
      },
      {
        name: 'Funnel Drop-Off Diagnostics',
        level: 0,
        experience: 'Applied',
        description: 'Analyzing conversion steps from product page view to successful payment confirmation.',
        codeSnippet: `// Funnel Conversion Stages
Stage 1: Product Detail Page Views (10,000 users)
Stage 2: Add to Cart (2,400 users - 24% conversion)
Stage 3: Initiate Checkout (1,200 users - 50% of carts)
Stage 4: Payment Completed (840 orders - 70% of checkouts)
Overall Funnel Conversion: 8.4%`
      },
      {
        name: 'Power BI & MIS Automation',
        level: 0,
        experience: 'Applied',
        description: 'Building automated operational dashboards tracking revenue, order count, and AOV trends.',
        codeSnippet: `// DAX Metric for Average Order Value (AOV)
AOV = DIVIDE(
    SUM(Sales[TotalRevenue]),
    DISTINCTCOUNT(Sales[OrderID]),
    0
)`
      }
    ]
  },
  {
    category: 'Strategy & Operations',
    description: 'Market sizing, competitor benchmarking, franchise onboarding, and go-to-market planning.',
    skills: [
      {
        name: 'Market Sizing & TAM Modeling',
        level: 0,
        experience: 'MBA Coursework',
        description: 'Top-down and bottom-up market estimation for B2B software and retail product launches.',
        codeSnippet: `// Market Sizing Model (TAM / SAM / SOM)
TAM = Total Enterprise Businesses in Region * Average Annual ACV
SAM = Addressable Segment with Cloud Infrastructure * ACV
SOM = Target Market Share Capture (Year 1-3 Horizon)`
      },
      {
        name: 'Franchise & Retail Operations',
        level: 0,
        experience: 'Practical Exposure',
        description: 'Standard operating procedures, inventory audit checklists, and store launch timelines.',
        codeSnippet: `Checklist: Retail Outlet Onboarding
[X] Lease agreement and municipal licensing completed
[X] POS hardware and barcode scanner connectivity tested
[X] Initial inventory intake and SKU audit reconciled
[X] Store staff customer service guidelines briefed`
      },
      {
        name: 'Competitor Benchmarking',
        level: 0,
        experience: 'Applied',
        description: 'Comparing product feature parity, pricing tiers, customer reviews, and market positioning.',
        codeSnippet: `Framework: Feature & Value Matrix
Criteria Evaluated:
- Pricing model (Subscription vs Tiered vs Pay-as-you-go)
- Core feature parity and unique workflow advantages
- Customer support response time and onboarding speed`
      }
    ]
  }
];
