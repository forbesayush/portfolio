import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'oneplus-os-diagnostics',
    title: 'Mobile OS Usability & Bug Triage',
    tagline: 'Defect root-cause mapping across 4 mobile operating system builds',
    description: 'Evaluated 4 mobile operating system builds, identified 20+ interface defects, and wrote reproduction steps for engineers.',
    category: 'Product Management',
    tags: ['Product QA', 'Jira', 'Usability Testing', 'Mobile OS', 'Root Cause Analysis'],
    metrics: [
      { label: 'Defect Recurrence', value: '-22%' },
      { label: 'Task Speed Gain', value: '+15%' },
      { label: 'Bugs Evaluated', value: '20+' },
      { label: 'Builds Tested', value: '4 OS' }
    ],
    architectureSummary: 'Analyzed navigation friction points across settings and notification menus. Created structured bug logs that engineering used to prioritize sprint fixes.',
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
    tagline: 'Customer retention and checkout funnel analytics across 5 online storefronts',
    description: 'Built customer retention models across 5 online storefronts to analyze root causes behind a 17% drop in repeat orders.',
    category: 'Business Analytics',
    tags: ['Power BI', 'Cohort Analysis', 'Excel Modeling', 'Funnel Analytics', 'Google Analytics'],
    metrics: [
      { label: 'Reporting Time', value: '-35%' },
      { label: 'Stores Analyzed', value: '5 Global' },
      { label: 'Checkout Flows', value: '8 Audited' },
      { label: 'Repeat Order Gap', value: '17%' }
    ],
    architectureSummary: 'Replaced manual tracking sheets with automated Power BI dashboards. Mapped checkout drop-offs and tracked customer lifetime order frequency by acquisition month.',
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
    tagline: 'Operational setup checklists and inventory tracking for store openings',
    description: 'Created standardized store launch workflows, inventory checklists, and sales floor operational guidelines for franchise partners.',
    category: 'Operations & Strategy',
    tags: ['Retail Operations', 'Inventory Flow', 'Process Mapping', 'Onboarding Checklist'],
    metrics: [
      { label: 'Scope', value: 'Franchise & Retail' },
      { label: 'Focus', value: 'High-Value Goods' },
      { label: 'Output', value: 'Launch Checklist' },
      { label: 'Status', value: 'Completed' }
    ],
    architectureSummary: 'Mapped end-to-end store opening steps from initial stock intake to daily point-of-sale audits, reducing delays during new store launches.',
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
    tagline: 'Market sizing and channel distribution model for B2B software expansion',
    description: 'Analyzed market entry options for enterprise software providers expanding into European and APAC tech corridors as part of MBA coursework.',
    category: 'Strategy & Consulting',
    tags: ['Market Sizing', 'Competitor Analysis', 'GTM Strategy', 'Unit Economics'],
    metrics: [
      { label: 'Hubs Evaluated', value: '4 Markets' },
      { label: 'Distribution', value: 'Direct vs Partner' },
      { label: 'Model', value: 'Unit Economics' },
      { label: 'Type', value: 'MBA Case Study' }
    ],
    architectureSummary: 'Evaluated software adoption trends in Germany, Ireland, Netherlands, and Singapore. Built unit economic models comparing direct sales versus channel partner distribution.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    featured: false,
    year: '2024',
    accentColor: '#8a2be2',
    glslPreset: 'core'
  }
];
