import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'User Experience Analyst',
    company: 'OnePlus & Innovist',
    location: 'Bhubaneswar, India',
    period: 'October 2025 to Present',
    badge: 'Current',
    summary: 'Tested 4 OS builds and logged root causes for 20+ interface bugs with exact reproduction steps. Cut post-release defect recurrence by 22% and improved task navigation speed by 15%.',
    achievements: [
      'Logged root causes and step-by-step reproduction logs for 20+ interface defects in active sprints.',
      'Reduced post-release defect recurrence by 22% through technical bug documentation.',
      'Improved navigation task speed by 15% after restructuring menu paths from usability test records.'
    ],
    technologies: ['Product QA', 'Jira', 'Usability Testing', 'Defect Tracking'],
    architecturalImpact: 'Replaced unstructured bug submissions with structured reproduction logs, preventing repeated defects.'
  },
  {
    id: 'exp-2',
    role: 'Business Analytics Intern',
    company: 'D2C Skincare Brand Portfolio',
    location: 'Kolkata, India (Remote)',
    period: 'September 2024 to December 2025',
    badge: 'Analytics',
    summary: 'Built retention and checkout funnel models across 5 online storefronts. Cut weekly reporting time by 35% by automating reporting workflows in Power BI.',
    achievements: [
      'Segmented customer cohorts to diagnose a 17% drop in repeat purchase rates.',
      'Automated weekly reporting workflows in Power BI, cutting preparation time by 35%.',
      'Audited 8 checkout flows, identifying conversion drop-offs and order value shifts.'
    ],
    technologies: ['Power BI', 'Excel', 'Cohort Analysis', 'Funnel Analytics', 'Google Analytics'],
    architecturalImpact: 'Automated dashboards used weekly by marketing and operations teams without manual data pulls.'
  },
  {
    id: 'exp-3',
    role: 'Business Operations Intern',
    company: 'Jewellery Retail & Franchise Operations',
    location: 'India',
    period: 'Business Exposure',
    badge: 'Operations',
    summary: 'Built standard store opening checklists and audited inventory flows for franchise partners. Gathered frontline customer feedback on pricing and selection directly on the retail floor.',
    achievements: [
      'Standardized store launch checklists and initial stock audits for franchise outlets.',
      'Identified sales floor pricing and product selection friction through customer interviews.'
    ],
    technologies: ['Retail Operations', 'Inventory Tracking', 'Process Mapping'],
    architecturalImpact: 'Standardized launch checklists kept franchise partner store openings on schedule.'
  }
];


