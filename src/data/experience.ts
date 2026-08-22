import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'User Experience Analyst (Product Strategy)',
    company: 'OnePlus & Innovist',
    location: 'Bhubaneswar, India',
    period: 'October 2025 to Present',
    badge: 'Current',
    summary: 'Tested mobile operating system builds, identified usability bottlenecks, and collaborated with engineers to fix defect regressions.',
    achievements: [
      'Tested 4 operating system builds and logged root causes for 20+ interface bugs.',
      'Reduced post-release defect recurrence by 22% through technical bug reports and engineering documentation.',
      'Improved task completion speed by 15% after reorganizing navigation flows based on usability testing records.'
    ],
    technologies: ['Product Strategy', 'Software QA', 'Jira', 'Usability Testing', 'Defect Tracking'],
    architecturalImpact: 'Replaced informal bug reporting with structured reproduction logs, preventing repeat issues in subsequent releases.'
  },
  {
    id: 'exp-2',
    role: 'Business Analytics & Strategy Intern',
    company: 'D2C Skincare Brand Portfolio',
    location: 'Kolkata, India (Remote)',
    period: 'September 2024 to December 2025',
    badge: 'Analytics',
    summary: 'Built analytics models and evaluated customer drop-offs across 5 online storefronts.',
    achievements: [
      'Segmented customer cohorts to address a 17% drop in repeat purchases.',
      'Automated weekly reporting workflows in Power BI, cutting report preparation time by 35%.',
      'Audited 8 checkout flows to identify conversion drop-offs and Average Order Value patterns.'
    ],
    technologies: ['Power BI', 'Excel', 'Cohort Analysis', 'Funnel Analytics', 'Google Analytics'],
    architecturalImpact: 'Replaced manual spreadsheets with automated dashboards used weekly by marketing and operations teams.'
  },
  {
    id: 'exp-3',
    role: 'Business Operations Intern',
    company: 'Jewellery Retail & Franchise Operations',
    location: 'India',
    period: 'Business Exposure',
    badge: 'Operations',
    summary: 'Supported retail store openings, inventory tracking, and daily store operations.',
    achievements: [
      'Coordinated store opening checklists and initial inventory intake for franchise outlets.',
      'Gathered customer feedback on pricing, product choices, and purchase hesitations on the sales floor.'
    ],
    technologies: ['Retail Operations', 'Inventory Tracking', 'Process Mapping', 'Customer Research'],
    architecturalImpact: 'Standardized opening day checklists to help franchise partners launch on schedule.'
  }
];
