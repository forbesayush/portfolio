import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Product Management',
    description: 'Specs, prioritization, and QA — the unglamorous work that makes features actually ship correctly.',
    skills: [
      {
        name: 'PRD & Feature Scoping',
        level: 0,
        experience: 'Practical',
        description: 'Writing functional specs tight enough that engineering does not have to guess and QA does not have to improvise.',
        codeSnippet: `# Feature Specification
Feature: Multi-Currency Checkout
Objective: Reduce payment abandonment on international storefronts.
User Story: As an international shopper, I want prices in my local currency
  so I understand the total cost before committing to checkout.
Acceptance Criteria:
1. Auto-detect visitor location from IP header.
2. Fallback to USD if local currency gateway is unavailable.`
      },
      {
        name: 'Feature Prioritization (RICE)',
        level: 0,
        experience: 'Applied',
        description: 'Scoring backlogs by Reach, Impact, Confidence, and Effort so the highest-leverage work goes first — not the loudest request.',
        codeSnippet: `// RICE Prioritization
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
        experience: 'OnePlus',
        description: 'Reproducing UI defects with steps specific enough that engineers can fix them in the same sprint, not park them in backlog.',
        codeSnippet: `Bug Report: [UI-204] Navigation Header Overlap — Build 14.2
Severity: P2 (Major Usability)
Steps to Reproduce:
1. Open settings from notification drawer.
2. Rotate screen to landscape.
Expected: Header adjusts layout.
Actual: Title overlaps back button.`
      }
    ]
  },
  {
    category: 'Business Analytics',
    description: 'Cohort modeling, funnel diagnostics, and Power BI dashboards — finding the why behind the number.',
    skills: [
      {
        name: 'Cohort Retention Modeling',
        level: 0,
        experience: 'Applied',
        description: 'Tracking repurchase rates by acquisition month to find when customers stop returning and why — not just that they did.',
        codeSnippet: `-- Cohort Retention Query
SELECT
  DATE_TRUNC('month', first_order_date) AS cohort_month,
  COUNT(DISTINCT customer_id) AS cohort_size,
  COUNT(DISTINCT CASE WHEN order_month = 1
    THEN customer_id END) * 100.0
    / COUNT(DISTINCT customer_id) AS m1_retention,
  COUNT(DISTINCT CASE WHEN order_month = 2
    THEN customer_id END) * 100.0
    / COUNT(DISTINCT customer_id) AS m2_retention
FROM customer_orders
GROUP BY 1;`
      },
      {
        name: 'Funnel Drop-Off Diagnostics',
        level: 0,
        experience: 'Applied',
        description: 'Mapping conversion from product page to confirmed payment — stage by stage — to find where users leave and why the drop happens there.',
        codeSnippet: `-- Funnel Conversion Stages
Stage 1: Product Detail Views    10,000 users
Stage 2: Add to Cart              2,400 users  (24%)
Stage 3: Initiate Checkout        1,200 users  (50% of carts)
Stage 4: Payment Completed          840 orders  (70% of checkouts)
Overall Funnel Conversion: 8.4%`
      },
      {
        name: 'Power BI & MIS Automation',
        level: 0,
        experience: 'Applied',
        description: 'Building dashboards that replace the Friday-afternoon manual pull — revenue, order count, and AOV tracked automatically.',
        codeSnippet: `// DAX — Average Order Value
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
    description: 'Market sizing, GTM modeling, and the operational work that connects a strategy deck to what actually happens on day one.',
    skills: [
      {
        name: 'Market Sizing & TAM Modeling',
        level: 0,
        experience: 'MBA Coursework',
        description: 'Bottom-up and top-down market estimation for B2B software and retail product launches — built to stress-test, not impress.',
        codeSnippet: `// Market Sizing (TAM / SAM / SOM)
TAM = Total enterprise businesses in region * annual ACV
SAM = Segment with cloud infrastructure * ACV
SOM = Realistic year 1-3 capture given GTM capacity`
      },
      {
        name: 'Franchise & Retail Operations',
        level: 0,
        experience: 'Practical',
        description: 'Standard operating procedures and inventory checklists — the documentation that prevents a store opening from going sideways.',
        codeSnippet: `Checklist: Retail Outlet Onboarding
[x] Lease and municipal licensing complete
[x] POS hardware and barcode scanner tested
[x] Initial inventory intake and SKU audit reconciled
[x] Staff service guidelines briefed`
      },
      {
        name: 'Competitor Benchmarking',
        level: 0,
        experience: 'Applied',
        description: 'Comparing pricing tiers, feature parity, and customer reviews to find where a product actually sits versus where it claims to.',
        codeSnippet: `Framework: Feature & Value Matrix
Evaluated:
- Pricing model (subscription, tiered, usage-based)
- Core feature parity and workflow gaps
- Support response time and onboarding friction`
      }
    ]
  }
];

