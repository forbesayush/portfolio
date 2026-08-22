import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'User Experience Analyst',
    company: 'OnePlus & Innovist',
    location: 'Bhubaneswar, India',
    period: 'October 2025 to Present',
    badge: 'Current',
    summary: 'Tested 4 OS builds and wrote reproduction logs engineers could act on the same sprint — not the usual one-line bug title that gets closed as "cannot reproduce."',
    achievements: [
      'Logged root causes for 20+ interface defects across settings and notification menus.',
      'Reduced post-release defect recurrence by 22% by replacing informal reports with structured reproduction steps.',
      'Cut task completion time by 15% after reorganizing navigation flows based on usability test records.'
    ],
    technologies: ['Product QA', 'Jira', 'Usability Testing', 'Defect Tracking'],
    architecturalImpact: 'Replaced informal bug reporting with structured reproduction logs, preventing repeat issues in subsequent releases.'
  },
  {
    id: 'exp-2',
    role: 'Business Analytics Intern',
    company: 'D2C Skincare Brand Portfolio',
    location: 'Kolkata, India (Remote)',
    period: 'September 2024 to December 2025',
    badge: 'Analytics',
    summary: 'Cut weekly reporting time 35% by automating what used to be a Friday-afternoon manual pull across 5 storefronts.',
    achievements: [
      'Segmented customer cohorts to diagnose a 17% drop in repeat purchase rate.',
      'Built automated Power BI dashboards that replaced manual spreadsheets used by marketing and operations weekly.',
      'Audited 8 checkout flows, mapping drop-off by stage and surfacing Average Order Value patterns by acquisition month.'
    ],
    technologies: ['Power BI', 'Excel', 'Cohort Analysis', 'Funnel Analytics', 'Google Analytics'],
    architecturalImpact: 'Dashboards are now used weekly by both marketing and operations teams without manual intervention.'
  },
  {
    id: 'exp-3',
    role: 'Business Operations Intern',
    company: 'Jewellery Retail & Franchise Operations',
    location: 'India',
    period: 'Business Exposure',
    badge: 'Operations',
    summary: 'Stood on the sales floor and listened — which turns out to be a faster way to find pricing friction than a survey.',
    achievements: [
      'Built store-opening checklists that helped franchise partners launch on schedule.',
      'Gathered direct customer feedback on pricing hesitation and product choice from the sales floor.'
    ],
    technologies: ['Retail Operations', 'Inventory Tracking', 'Process Mapping'],
    architecturalImpact: 'Standardized opening day checklists reduced launch delays for franchise partners.'
  }
];

