import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'deals-seller-mis',
    title: 'Deals.Seller — Ops & Fraud Intelligence Platform',
    tagline: 'Admin command center and real-time cashback risk scoring',
    description: 'Built the admin command center for a cashback and deals marketplace: order fulfillment, refunds, withdrawals, and support tickets in one operational view. The core value is the fraud layer: scoring claims on order velocity and duplicate IDs before human review, so the admin only investigates anomalies.',
    category: 'Product Management',
    tags: ['Operations MIS', 'Fraud Intelligence', 'Product Architecture', 'Fintech / Cashback', 'LTV Analytics'],
    metrics: [
      { label: 'Repeat purchase rate', value: '33%' },
      { label: 'Avg buyer LTV', value: '₹348' },
      { label: 'Fraud triage', value: 'Velocity & duplication' },
      { label: 'Withdrawal processing', value: 'Instant UPI' }
    ],
    architectureSummary: 'Flags trigger on duplicate merchant order IDs across accounts and velocity spikes above threshold. Surfaced to administrators with full audit logs rather than hard-blocking, protecting buyer trust while preventing payout leakages.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    role: 'Product Lead / Builder',
    featured: true,
    year: '2026',
    accentColor: '#00f0ff',
    glslPreset: 'particles'
  },
  {
    id: 'oneplus-os-diagnostics',
    title: 'Mobile OS Usability & Bug Triage',
    tagline: 'Defect root-cause mapping across 4 OS builds',
    description: 'Tested 4 mobile OS builds and logged 20+ interface defects with exact reproduction steps. Cut post-release recurrence by 22% and improved navigation task speed by 15% through structured sprint documentation.',
    category: 'Product Management',
    tags: ['Product QA', 'Jira', 'Usability Testing', 'Mobile OS', 'Root Cause Analysis'],
    metrics: [
      { label: 'Defect recurrence', value: '-22%' },
      { label: 'Task speed gain', value: '+15%' },
      { label: 'Bugs evaluated', value: '20+' },
      { label: 'Builds tested', value: '4 OS' }
    ],
    architectureSummary: 'Analyzed navigation friction in settings and notification drawers. Structured bug logs that engineering resolved in the active sprint.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    featured: true,
    year: '2025',
    accentColor: '#00f0ff',
    glslPreset: 'particles'
  },
  {
    id: 'd2c-cohort-analytics',
    title: 'E-Commerce Funnel & Cohort Retention',
    tagline: 'Customer retention modeling across 5 storefronts',
    description: 'Built customer retention models across 5 online storefronts to diagnose a 17% drop in repeat purchases. Automated weekly reporting in Power BI, cutting report preparation time by 35%.',
    category: 'Business Analytics',
    tags: ['Power BI', 'Cohort Analysis', 'Excel Modeling', 'Funnel Analytics', 'Google Analytics'],
    metrics: [
      { label: 'Reporting time', value: '-35%' },
      { label: 'Stores analyzed', value: '5' },
      { label: 'Checkout flows', value: '8 audited' },
      { label: 'Repeat order gap', value: '17%' }
    ],
    architectureSummary: 'Replaced manual tracking sheets with automated dashboards tracking customer repurchase curves and checkout drop-offs by acquisition month.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    featured: true,
    year: '2025',
    accentColor: '#ffaa00',
    glslPreset: 'mesh'
  },
  {
    id: 'franchise-launch-playbook',
    title: 'Retail Franchise Launch Playbook',
    tagline: 'Store opening checklists and inventory flows for franchise partners',
    description: 'Created standardized store launch workflows, inventory checklists, and sales floor guidelines. Kept multi-unit franchise openings on schedule with zero initial stock discrepancies.',
    category: 'Operations & Strategy',
    tags: ['Retail Operations', 'Inventory Flow', 'Process Mapping', 'Onboarding'],
    metrics: [
      { label: 'Scope', value: 'Franchise retail' },
      { label: 'Category', value: 'High-value goods' },
      { label: 'Output', value: 'Launch checklist' },
      { label: 'Status', value: 'Delivered' }
    ],
    architectureSummary: 'Mapped end-to-end store opening steps from initial stock intake to daily point-of-sale audits, preventing launch delays for franchise partners.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    featured: true,
    year: '2024',
    accentColor: '#00ffaa',
    glslPreset: 'quantum'
  },
  {
    id: 'market-entry-case',
    title: 'SaaS Market Entry Strategy',
    tagline: 'Market sizing and channel distribution model for B2B expansion',
    description: 'Evaluated market entry paths for enterprise software expanding into European and APAC tech corridors. Modeled unit economics comparing direct sales against channel partner distribution across 4 target markets.',
    category: 'Strategy & Consulting',
    tags: ['Market Sizing', 'Competitor Analysis', 'GTM Strategy', 'Unit Economics'],
    metrics: [
      { label: 'Markets evaluated', value: '4 hubs' },
      { label: 'Distribution', value: 'Direct vs partner' },
      { label: 'Framework', value: 'Unit economics' },
      { label: 'Type', value: 'MBA case study' }
    ],
    architectureSummary: 'Assessed software adoption in Germany, Ireland, Netherlands, and Singapore. Built unit economic models comparing direct sales versus partner distribution.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    featured: false,
    year: '2024',
    accentColor: '#8a2be2',
    glslPreset: 'core'
  }
];
