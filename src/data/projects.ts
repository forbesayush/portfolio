import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'oneplus-os-diagnostics',
    title: 'Mobile OS Usability & Bug Triage',
    tagline: 'Defect root-cause mapping across 4 OS builds',
    description: 'Found 20+ interface defects — not by running a script, but by actually using the phone the way real users do. Wrote reproduction steps specific enough that engineers could reproduce and fix within the same sprint.',
    category: 'Product Management',
    tags: ['Product QA', 'Jira', 'Usability Testing', 'Mobile OS', 'Root Cause Analysis'],
    metrics: [
      { label: 'Defect recurrence', value: '-22%' },
      { label: 'Task speed', value: '+15%' },
      { label: 'Bugs logged', value: '20+' },
      { label: 'Builds tested', value: '4 OS' }
    ],
    architectureSummary: 'Analyzed friction in settings and notification menus. Structured bug logs that engineering used to prioritize sprint fixes rather than park in backlog.',
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
    description: 'Most retention dashboards tell you a number went down. The interesting question is why it stopped mattering to that cohort in week 3. Built the models to find that answer — and automated the reporting so no one had to rebuild it every Friday.',
    category: 'Business Analytics',
    tags: ['Power BI', 'Cohort Analysis', 'Excel Modeling', 'Funnel Analytics', 'Google Analytics'],
    metrics: [
      { label: 'Reporting time', value: '-35%' },
      { label: 'Stores analyzed', value: '5' },
      { label: 'Checkout flows', value: '8 audited' },
      { label: 'Repeat order gap', value: '17%' }
    ],
    architectureSummary: 'Replaced manual tracking sheets with automated Power BI dashboards. Tracked customer lifetime order frequency by acquisition month and mapped checkout drop-offs by stage.',
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
    description: 'Franchise launches fail on the operational details no one wrote down. Built the checklists — from initial stock intake to daily POS audits — that helped partners open on schedule.',
    category: 'Operations & Strategy',
    tags: ['Retail Operations', 'Inventory Flow', 'Process Mapping', 'Onboarding'],
    metrics: [
      { label: 'Scope', value: 'Franchise' },
      { label: 'Category', value: 'High-value goods' },
      { label: 'Output', value: 'Launch checklist' },
      { label: 'Status', value: 'Completed' }
    ],
    architectureSummary: 'Mapped end-to-end store opening steps from stock intake to daily audits, reducing delays on new store launches.',
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
    tagline: 'Market sizing and distribution model for B2B software expansion',
    description: 'Evaluated market entry paths for enterprise software expanding into European and APAC corridors. Built unit economics comparing direct sales against channel partner distribution in four markets.',
    category: 'Strategy & Consulting',
    tags: ['Market Sizing', 'Competitor Analysis', 'GTM Strategy', 'Unit Economics'],
    metrics: [
      { label: 'Markets', value: '4 evaluated' },
      { label: 'Model', value: 'Direct vs partner' },
      { label: 'Framework', value: 'Unit economics' },
      { label: 'Type', value: 'MBA case study' }
    ],
    architectureSummary: 'Evaluated software adoption in Germany, Ireland, Netherlands, and Singapore. Compared direct sales versus channel partner distribution by unit economics.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    featured: false,
    year: '2024',
    accentColor: '#8a2be2',
    glslPreset: 'core'
  }
];

