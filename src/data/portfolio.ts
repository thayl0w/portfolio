// ─────────────────────────────────────────────────────────────
// Portfolio content — edit this file to update site copy, links,
// images, and social URLs without touching components.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Mar Thayne Lowell Nacionales',
  shortName: 'MTLN',
  title: 'Mar Thayne Lowell Nacionales | Portfolio',
  description:
    'Software Developer and Digital Marketing Specialist based in Pasig, Philippines. Building modern web applications and data-driven marketing campaigns.',
  location: 'Pasig, Philippines',
  tagline:
    'Software Developer | Digital Marketing Specialist | Website Development',
  resumeUrl: '/resume.pdf',
  email: 'marthayne.nacionales@email.com', // ← replace with your email
  phone: '+63 XXX XXX XXXX', // ← replace with your phone
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/marthaynelowellnacionales', // ← replace
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/marthaynelowell', // ← replace
    icon: 'github',
  },
  {
    label: 'Email',
    href: `mailto:${site.email}`,
    icon: 'email',
  },
];

// LinkedIn About section — paste your exact LinkedIn About text here
export const about = {
  paragraphs: [
    'I am a passionate Software Developer and Digital Marketing Specialist with a strong foundation in full-stack web development and performance-driven digital marketing. Based in Pasig, Philippines, I combine technical expertise with creative strategy to build modern websites, automate business workflows, and deliver measurable marketing results.',
    'Currently pursuing Software Development at Brigham Young University – Idaho, I bring hands-on experience in HTML, CSS, JavaScript, Node.js, PostgreSQL, and API integration. On the marketing side, I specialize in Meta Ads, SEO, funnel building with GoHighLevel, Systeme.io, and ClickFunnels, and WordPress site management.',
    'Whether I am developing a responsive web application, optimizing a conversion funnel, or managing a multi-channel ad campaign, I focus on clean code, user-centered design, and data-backed decisions. I thrive in collaborative environments and am always eager to learn new technologies and marketing strategies that drive real business impact.',
    'Open to opportunities in software development, digital marketing, and website development — let\'s connect and build something great together.',
  ],
};

export const experience = [
  {
    title: 'Digital Marketing Specialist',
    company: 'Independent Contractor',
    period: '2023 – Present',
    location: 'Remote · Pasig, Philippines',
    bullets: [
      'Plan, launch, and optimize Meta Ads campaigns across Facebook and Instagram to drive lead generation and brand awareness for small businesses and entrepreneurs.',
      'Design and implement conversion funnels using GoHighLevel, Systeme.io, and ClickFunnels to streamline customer acquisition workflows.',
      'Manage WordPress websites including theme customization, plugin integration, SEO optimization, and performance tuning.',
      'Develop automated email sequences, CRM workflows, and API integrations to reduce manual tasks and improve client retention.',
      'Analyze campaign metrics and A/B test ad creatives, landing pages, and audience segments to maximize ROI.',
      'Provide end-to-end digital marketing consulting — from strategy and content planning to execution and reporting.',
    ],
  },
  {
    title: 'Software Development Student',
    company: 'Brigham Young University – Idaho',
    period: '2024 – Present',
    location: 'Rexburg, Idaho · Online',
    bullets: [
      'Pursuing a degree in Software Development with coursework in web development, databases, algorithms, and software engineering principles.',
      'Build full-stack applications using HTML, CSS, JavaScript, Node.js, and PostgreSQL with emphasis on clean architecture and RESTful API design.',
      'Collaborate on team projects using Git version control, agile methodologies, and code review best practices.',
      'Develop responsive, accessible web interfaces and backend services that meet real-world business requirements.',
      'Apply problem-solving skills through hands-on labs, coding assignments, and capstone-style development projects.',
    ],
  },
  {
    title: 'Missionary Volunteer',
    company: 'The Church of Jesus Christ of Latter-day Saints',
    period: '2021 – 2023',
    location: 'Philippines',
    bullets: [
      'Served full-time for two years teaching, mentoring, and supporting individuals and families in the community.',
      'Developed strong leadership, communication, and interpersonal skills through daily outreach and team coordination.',
      'Managed personal schedules, goals, and reporting in a fast-paced, self-directed environment.',
      'Built cross-cultural relationships and adapted quickly to diverse situations and challenges.',
      'Demonstrated discipline, resilience, and a service-oriented mindset in high-accountability settings.',
    ],
  },
  {
    title: 'Budget Office Intern',
    company: 'Government / Institutional Office', // ← replace with exact organization name
    period: '2020 – 2021',
    location: 'Philippines',
    bullets: [
      'Assisted the budget office in tracking expenditures, preparing financial reports, and maintaining accurate budget records.',
      'Organized and validated financial data in spreadsheets and databases to support departmental planning and audits.',
      'Coordinated with team members to ensure timely submission of budget proposals and documentation.',
      'Gained practical experience in financial administration, attention to detail, and organizational compliance.',
      'Supported process improvements that increased efficiency in budget tracking and reporting workflows.',
    ],
  },
];

import type { SkillIconId } from '../lib/skillIcons';

export interface Skill {
  id: SkillIconId;
  name: string;
  url: string;
  iconType: 'brand' | 'custom';
}

export const skills: Skill[] = [
  { id: 'html5', name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', iconType: 'brand' },
  { id: 'css3', name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', iconType: 'brand' },
  { id: 'javascript', name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', iconType: 'brand' },
  { id: 'nodejs', name: 'Node.js', url: 'https://nodejs.org', iconType: 'brand' },
  { id: 'postgresql', name: 'PostgreSQL', url: 'https://www.postgresql.org', iconType: 'brand' },
  { id: 'git', name: 'Git', url: 'https://git-scm.com', iconType: 'brand' },
  { id: 'wordpress', name: 'WordPress', url: 'https://wordpress.org', iconType: 'brand' },
  { id: 'gohighlevel', name: 'GoHighLevel', url: 'https://www.gohighlevel.com', iconType: 'custom' },
  { id: 'systemeio', name: 'Systeme.io', url: 'https://systeme.io', iconType: 'custom' },
  { id: 'clickfunnels', name: 'ClickFunnels', url: 'https://www.clickfunnels.com', iconType: 'custom' },
  { id: 'metaads', name: 'Meta Business Suite', url: 'https://business.facebook.com', iconType: 'brand' },
  { id: 'seo', name: 'SEO', url: 'https://developers.google.com/search', iconType: 'brand' },
  { id: 'emailmarketing', name: 'Email Marketing', url: 'https://mailchimp.com', iconType: 'brand' },
  { id: 'apiintegration', name: 'API Integration', url: 'https://www.postman.com', iconType: 'brand' },
  { id: 'automation', name: 'Automation', url: 'https://zapier.com', iconType: 'brand' },
];

export const projects = [
  {
    title: 'E-Commerce Landing Page',
    description:
      'A high-converting product landing page with integrated checkout flow, optimized for mobile and SEO performance.',
    image: '/projects/project-1.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    liveUrl: '#', // ← replace
    githubUrl: '#', // ← replace
  },
  {
    title: 'Marketing Automation Dashboard',
    description:
      'Custom dashboard for tracking Meta Ads performance, lead sources, and funnel conversion metrics in real time.',
    image: '/projects/project-2.jpg',
    tech: ['Node.js', 'PostgreSQL', 'API Integration'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Business Portfolio Website',
    description:
      'A modern, responsive portfolio site for a local business featuring service pages, contact forms, and blog integration.',
    image: '/projects/project-3.jpg',
    tech: ['Astro', 'Tailwind CSS', 'GoHighLevel'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Lead Capture Funnel',
    description:
      'End-to-end lead generation funnel with landing page, email automation, and CRM integration using Systeme.io.',
    image: '/projects/project-4.jpg',
    tech: ['ClickFunnels', 'Systeme.io', 'Meta Ads'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const certificates = [
  {
    title: 'Web Development Fundamentals',
    issuer: 'BYU – Idaho',
    image: '/certificates/cert-1.jpg',
    year: '2024',
  },
  {
    title: 'Digital Marketing Specialist',
    issuer: 'Meta Blueprint',
    image: '/certificates/cert-2.jpg',
    year: '2023',
  },
  {
    title: 'JavaScript Essentials',
    issuer: 'Online Certification',
    image: '/certificates/cert-3.jpg',
    year: '2024',
  },
  {
    title: 'SEO & Content Strategy',
    issuer: 'Online Certification',
    image: '/certificates/cert-4.jpg',
    year: '2023',
  },
];

export const education = {
  school: 'Brigham Young University – Idaho',
  degree: 'Bachelor of Science in Software Development',
  period: '2024 – Present',
  location: 'Rexburg, Idaho · Online',
  details: [
    'Coursework in full-stack web development, database systems, software engineering, and computer science fundamentals.',
    'Hands-on projects using modern development tools, version control, and collaborative software practices.',
    'Building a strong foundation in problem-solving, algorithms, and professional software development workflows.',
  ],
};