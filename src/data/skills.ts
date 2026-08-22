import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Product Management',
    description: 'Functional specs, sprint prioritization, and systematic defect triage.',
    skills: [
      {
        name: 'PRD & Feature Scoping',
        level: 0,
        experience: 'Practical',
        description: 'Writing functional specifications, user stories, acceptance criteria, and edge-case boundaries.',
        codeSnippet: `# Feature Specification
Feature: Multi-Currency Checkout
Objective: Reduce payment abandonment on international storefronts.
User Story: As an international buyer, I want prices in my local currency so total costs are clear before checkout.
Acceptance Criteria:
1. Auto-detect visitor location from IP header.
2. Fallback to USD if local currency gateway is unavailable.`
      },
      {
        name: 'Feature Prioritization (RICE)',
        level: 0,
        experience: 'Applied',
        description: 'Scoring backlogs with Reach, Impact, Confidence, and Effort to rank high-leverage releases.',
        codeSnippet: `// RICE Prioritization
function calculateRICE(reach, impact, confidence, effort) {
  // Reach: Users impacted / quarter
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
        description: 'Logging reproducible defect tickets with root causes, logs, and screenshots for sprint resolution.',
        codeSnippet: `Bug Report: [UI-204] Navigation Header Overlap (Build 14.2)
Severity: P2 (Major Usability)
Steps to Reproduce:
1. Open settings from notification drawer.
2. Rotate screen to landscape orientation.
Expected: Header layout reflows cleanly.
Actual: Title overlaps back navigation button.`
      }
    ]
  },
  {
    category: 'Business Analytics',
    description: 'Cohort retention modeling, funnel drop-off analysis, and automated MIS reporting.',
    skills: [
      {
        name: 'Cohort Retention Modeling',
        level: 0,
        experience: 'Applied',
        description: 'Tracking repurchase curves by acquisition month to locate where customer drop-offs occur.',
        codeSnippet: `-- Cohort Retention Analysis
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
        description: 'Evaluating conversion stages from initial product detail views to successful checkout completion.',
        codeSnippet: `-- Funnel Conversion Breakdown
Stage 1: Product Detail Views   10,000 users
Stage 2: Add to Cart             2,400 users (24%)
Stage 3: Initiate Checkout       1,200 users (50% of carts)
Stage 4: Payment Completed         840 orders (70% of checkouts)
Overall Conversion: 8.4%`
      },
      {
        name: 'Power BI & MIS Automation',
        level: 0,
        experience: 'Applied',
        description: 'Building automated dashboards tracking revenue, order velocity, and Average Order Value.',
        codeSnippet: `// DAX Metric: Average Order Value
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
    description: 'Market sizing, unit economics modeling, and standard retail operational checklists.',
    skills: [
      {
        name: 'Market Sizing & TAM Modeling',
        level: 0,
        experience: 'MBA Coursework',
        description: 'Top-down and bottom-up market estimation for enterprise software and retail rollouts.',
        codeSnippet: `// Market Sizing Model (TAM / SAM / SOM)
TAM = Regional Enterprise Count * Annual ACV
SAM = Addressable Cloud Segment * ACV
SOM = Realistic Year 1-3 Target Capture`
      },
      {
        name: 'Franchise & Retail Operations',
        level: 0,
        experience: 'Practical',
        description: 'Creating standard operating procedures, inventory audit steps, and launch schedules.',
        codeSnippet: `Checklist: Franchise Store Launch
[x] Commercial lease and municipal permits verified
[x] POS terminals, scanners, and gateway connectivity tested
[x] Initial inventory intake and SKU reconciliation completed
[x] Store staff customer service standard briefed`
      },
      {
        name: 'Competitor Benchmarking',
        level: 0,
        experience: 'Applied',
        description: 'Comparing competitor pricing structures, feature parity, and customer support turnaround.',
        codeSnippet: `Framework: Competitor Matrix
Evaluation Criteria:
- Pricing architecture (Subscription vs Tiered vs Consumption)
- Core feature parity and workflow differentiation
- Onboarding turnaround and support SLA`
      }
    ]
  }
];
