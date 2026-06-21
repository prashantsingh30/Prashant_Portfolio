import {
  Code2,
  Database,
  Layout,
  Server,
  Brain,
  Wrench,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Star,
  Trophy,
  Award,
  GraduationCap,
  BookOpen,
  Users,
  FileText,
  TrendingUp,
  Cloud,
  Cpu,
  Layers,
  FileDown,
  type LucideIcon,
} from 'lucide-react';

/* Use a placeholder for Java since lucide has no Java brand icon */
const JavaIcon = Code2;

/* ------------------------------------------------------------------ */
/* Personal info                                                       */
/* ------------------------------------------------------------------ */
export const personalInfo = {
  name: 'Prashant Singh',
  role: 'Software Developer',
  location: 'Mumbai, India',
  email: 'singhprashantsuresh@gmail.com',
  phone: '+91 7738944920',
  linkedin: 'https://www.linkedin.com/in/prashant-suresh-singh/',
  github: 'https://github.com/prashantsingh30',
  resumeUrl: '/Prashant_Resume.pdf',
  institution: 'Bharati Vidyapeeth',
};

/* ------------------------------------------------------------------ */
/* Nav — centered, minimal                                            */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
] as const;

/* ------------------------------------------------------------------ */
/* Hero typing roles                                                  */
/* ------------------------------------------------------------------ */
export const typingRoles = [
  'Software Developer',
  'Java Developer',
  'Full Stack Developer',
  'AI Enthusiast',
  'Problem Solver',
] as const;

/* Hero CTAs */
export const heroCtas = {
  primary: { label: 'Download Resume', href: '/Prashant_Resume.pdf' },
  secondary: { label: 'View Projects', href: '#projects' },
  tertiary: { label: 'Contact Me', href: '#contact' },
} as const;

export const heroSocials = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/prashant-suresh-singh/' },
  { label: 'GitHub', icon: Github, href: 'https://github.com/prashantsingh30' },
] as const;

/* Tech badges below the profile image — kept empty so they don't render */
export const profileTechBadges: { label: string; color: string }[] = [];

/* ------------------------------------------------------------------ */
/* Quick highlights (below hero)                                       */
/* ------------------------------------------------------------------ */
export const quickHighlights = [
  { label: 'CGPA', value: '9.73', icon: GraduationCap, accent: 'hsl(152 76% 50%)' },
  { label: 'Student of the Year', value: '2025', icon: Star, accent: 'hsl(38 92% 58%)' },
  { label: 'Research Publication', value: 'ICET 2026', icon: BookOpen, accent: 'hsl(265 89% 68%)' },
  { label: 'Hackathon Finalist', value: 'SIES Innov8', icon: Trophy, accent: 'hsl(217 91% 60%)' },
  { label: 'Technical Leadership', value: 'Team Lead', icon: Users, accent: 'hsl(265 89% 68%)' },
] as const;

/* ------------------------------------------------------------------ */
/* About — professional summary                                       */
/* ------------------------------------------------------------------ */
export const aboutSummary = [
  'I am an MCA student at Bharati Vidyapeeth with a BSc in Computer Science (CGPA 9.73), recognized as Student of the Year for academic excellence and leadership.',
  'I build full-stack web applications and AI-powered platforms using React, Next.js, Node.js, and Prisma. Three of my projects are production-grade — an AI career coach, an AI website builder, and a food-ordering platform with live payments.',
  'My research on data security and privacy in cloud computing was presented at ICET 2026. I am currently preparing for Software Developer, Java Developer, and Full Stack Developer roles at top product companies.',
] as const;

export const aboutCards = [
  { title: 'MCA Student', description: 'Pursuing Master of Computer Applications at Bharati Vidyapeeth.', icon: GraduationCap, accent: 'hsl(217 91% 60%)' },
  { title: 'BSc CS — CGPA 9.73', description: 'Graduated with distinction, top 3 rank holder.', icon: Star, accent: 'hsl(38 92% 58%)' },
  { title: 'Student of the Year', description: 'Recognized for academic & leadership excellence.', icon: Award, accent: 'hsl(152 76% 50%)' },
  { title: 'Full Stack Development', description: 'React, Next.js, Node.js, Express, Prisma.', icon: Layout, accent: 'hsl(189 94% 55%)' },
  { title: 'AI Projects', description: 'Gemini AI and OpenRouter-powered platforms shipped.', icon: Cpu, accent: 'hsl(265 89% 68%)' },
  { title: 'Research Publication', description: 'Cloud data security paper presented at ICET 2026.', icon: FileText, accent: 'hsl(217 91% 60%)' },
] as const;

/* ------------------------------------------------------------------ */
/* Skills — recruiter-focused                                         */
/* ------------------------------------------------------------------ */
export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    accent: 'hsl(var(--accent-blue))',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    accent: 'hsl(var(--accent-cyan))',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    accent: 'hsl(var(--accent-emerald))',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Prisma'],
  },
  {
    title: 'Databases',
    icon: Database,
    accent: 'hsl(var(--accent-amber))',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    accent: 'hsl(var(--accent-violet))',
    skills: ['Git', 'GitHub', 'AI Tools', 'Linux', 'VS Code'],
  },
  {
    title: 'Concepts',
    icon: Brain,
    accent: 'hsl(var(--accent-blue))',
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems'],
  },
];

/* ------------------------------------------------------------------ */
/* Projects — alternating layout with image placeholders              */
/* ------------------------------------------------------------------ */
export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  accent: string;
  glow: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 'aspirai',
    name: 'AspirAI',
    tagline: 'AI Career Coach Platform',
    category: 'AI Platform',
    description:
      'AI-powered career platform featuring resume building, mock interview preparation, personalized guidance, and real-time industry insights powered by Gemini AI.',
    features: ['Resume Builder', 'Interview Preparation', 'Career Insights', 'Gemini AI', 'Clerk Auth', 'Prisma ORM'],
    accent: 'hsl(var(--accent-blue))',
    glow: 'hsl(var(--accent-blue) / 0.22)',
    liveUrl: 'https://aspir-ai.vercel.app/',
    githubUrl: 'https://github.com/prashantsingh30/AspirAI',
    image: '/AspirAI.png',
  },
  {
    id: 'webynix',
    name: 'Webynix',
    tagline: 'AI Website Builder',
    category: 'SaaS Product',
    description:
      'SaaS platform that converts natural language prompts into fully functional websites with live preview, code editing, project versioning, and subscription billing.',
    features: ['Prompt To Website', 'Live Preview', 'Code Editor', 'Stripe Billing', 'Project Versioning'],
    accent: 'hsl(var(--accent-emerald))',
    glow: 'hsl(var(--accent-emerald) / 0.22)',
    liveUrl: 'https://webynix.vercel.app/',
    githubUrl: 'https://github.com/prashantsingh30/Webynix',
    image: '/Webynix.png',
  },
  {
    id: 'foodyweb',
    name: 'FoodyWeb',
    tagline: 'Food Ordering Platform',
    category: 'Full-Stack App',
    description:
      'End-to-end food ordering platform with JWT authentication, dynamic menu management, real-time order tracking, and online payments via Razorpay.',
    features: ['JWT Authentication', 'Order Tracking', 'MongoDB', 'Razorpay'],
    accent: 'hsl(var(--accent-amber))',
    glow: 'hsl(var(--accent-amber) / 0.22)',
    liveUrl: 'https://foody-webs.vercel.app/',
    githubUrl: 'https://github.com/prashantsingh30/FoodyWeb',
    image: '/Foodyweb.png',
  },
];

/* ------------------------------------------------------------------ */
/* Achievements & Recognition                                          */
/* ------------------------------------------------------------------ */
export const achievements = [
  { title: 'Student of the Year', org: 'Academic', description: 'Highest recognition for academic excellence and leadership.', icon: Star, accent: 'hsl(38 92% 58%)' },
  { title: 'Top 3 Rank Holder', org: 'Cohort', description: 'Consistently ranked in the top 3 across all semesters.', icon: TrendingUp, accent: 'hsl(152 76% 50%)' },
  { title: 'Best Use of Technology', org: 'Hackathon', description: 'Awarded for the most sophisticated and well-architected solution.', icon: Trophy, accent: 'hsl(217 91% 60%)' },
  { title: 'Research Paper Presenter', org: 'ICET 2026', description: 'Presented published research at an international conference.', icon: FileText, accent: 'hsl(265 89% 68%)' },
  { title: 'Hackathon Finalist', org: 'SIES Innov8', description: 'Top finalist building production-grade prototypes under time pressure.', icon: Award, accent: 'hsl(189 94% 55%)' },
  { title: 'Technical Event Lead', org: 'Community', description: 'Led technical events and mentored peers on full-stack development.', icon: Users, accent: 'hsl(217 91% 60%)' },
] as const;

/* ------------------------------------------------------------------ */
/* Research & Publications                                             */
/* ------------------------------------------------------------------ */
export const publications = [
  {
    title: 'Data Security and Privacy in Cloud Computing',
    venue: 'ICET Conference',
    venueFull: 'International Conference on Emerging Trends, Innovations & Challenges in Information Technology',
    year: '2026',
    type: 'Conference Paper',
    description:
      'Research exploring robust security frameworks and privacy-preserving mechanisms for cloud-native architectures, addressing modern threat models, authentication, and compliance requirements.',
    topics: ['Cloud Security', 'Authentication', 'Data Privacy', 'Threat Mitigation'],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */
export const timelineEvents = [
  { year: '2022', title: 'Started BSc Computer Science', description: 'Began formal computer science education — foundations in programming, data structures, and systems.', tag: 'Education' },
  { year: '2025', title: 'Graduated with CGPA 9.73', description: 'Completed BSc Computer Science with distinction, finishing among the top 3 rank holders.', tag: 'Milestone' },
  { year: '2025', title: 'Started MCA', description: 'Commenced Master of Computer Applications at Bharati Vidyapeeth to deepen engineering expertise.', tag: 'Education' },
  { year: '2026', title: 'Research Publication', description: 'Presented research on Data Security and Privacy in Cloud Computing at ICET 2026.', tag: 'Research' },
  { year: '2026', title: 'Hackathon Recognition', description: 'Earned finalist recognition at SIES Innov8 and Best Use of Technology award.', tag: 'Achievement' },
] as const;

/* ------------------------------------------------------------------ */
/* Currently Exploring                                                 */
/* ------------------------------------------------------------------ */
export const exploringTracks = [
  { title: 'Data Structures & Algorithms', description: 'Advanced problem-solving and algorithmic patterns in Java.', icon: Brain, accent: 'hsl(var(--accent-blue))' },
  { title: 'Java Backend Development', description: 'Spring Boot, enterprise patterns, scalable backend architecture.', icon: Server, accent: 'hsl(var(--accent-emerald))' },
  { title: 'System Design', description: 'Distributed systems, scalability, and high-availability architecture.', icon: Layers, accent: 'hsl(var(--accent-cyan))' },
  { title: 'Cloud Computing', description: 'AWS, serverless computing, and cloud-native deployment strategies.', icon: Cloud, accent: 'hsl(var(--accent-amber))' },
  { title: 'AI Applications', description: 'LLM integration, RAG pipelines, and production AI engineering.', icon: Cpu, accent: 'hsl(var(--accent-violet))' },
  { title: 'Problem Solving', description: 'Competitive programming and algorithmic thinking under pressure.', icon: Brain, accent: 'hsl(var(--accent-blue))' },
] as const;

/* ------------------------------------------------------------------ */
/* Contact info                                                        */
/* ------------------------------------------------------------------ */
export const contactInfo = [
  { label: 'Email', value: 'singhprashantsuresh@gmail.com', icon: Mail, href: 'mailto:singhprashantsuresh@gmail.com' },
  { label: 'Phone', value: '+91 7738944920', icon: Phone, href: 'tel:+917738944920' },
  { label: 'Location', value: 'Mumbai, India', icon: MapPin, href: null },
  { label: 'LinkedIn', value: 'prashant-suresh-singh', icon: Linkedin, href: 'https://www.linkedin.com/in/prashant-suresh-singh/' },
  { label: 'GitHub', value: 'prashantsingh30', icon: Github, href: 'https://github.com/prashantsingh30' },
] as const;

/* Footer quick links */
export const footerQuickLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prashant-suresh-singh/' },
  { label: 'GitHub', href: 'https://github.com/prashantsingh30' },
  { label: 'Email', href: 'mailto:singhprashantsuresh@gmail.com' },
] as const;

/* Icons re-export for convenience */
export const icons = { FileDown, GraduationCap, Star, Trophy, Award, FileText, TrendingUp, Users, BookOpen, Cpu, Cloud, Layers, Mail, Phone, MapPin, Github, Linkedin };
