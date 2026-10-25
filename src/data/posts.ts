export interface LinkedInPost {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: 'Hackathon Win' | 'Professional Experience' | 'Research Presentation' | 'Competition Finalist';
  url: string;
  associatedProject?: string;
  projectUrl?: string;
  tags: string[];
}

export const linkedInPosts: LinkedInPost[] = [
  {
    id: "post-rehab-tech",
    date: "Semester 4 (2025)",
    title: "1st Place Win at Rehab Tech Challenge with Neuro-Move",
    summary: "Excited to share that Team Kynex won 1st Place at the Rehab Tech Challenge, a med-tech hackathon organized at SRM Institute of Science and Technology. We built Neuro-Move, a camera-based physiotherapy rehabilitation assessment system that uses real-time computer vision and pose estimation to evaluate exercise compliance and joint velocity without requiring wearable hardware.",
    category: "Hackathon Win",
    url: "https://www.linkedin.com/in/yog-esh06/",
    associatedProject: "Neuro-Move",
    tags: ["Computer Vision", "Healthcare AI", "Hackathon Winner", "Pose Estimation"]
  },
  {
    id: "post-industry-games",
    date: "Semester 5 (2026)",
    title: "Top 8 Finalist out of 300+ at The Industry Games with STRATA",
    summary: "Honored to have placed as a Top 8 Finalist out of more than 300 participants at The Industry Games Hackathon. Our team presented STRATA, an autonomous operational intelligence engine that continuously monitors business telemetry, uses Sentinel algorithms for variance detection, dispatches cited multi-agent root cause investigations, and gates automated remediations through human approval.",
    category: "Competition Finalist",
    url: "https://www.linkedin.com/in/yog-esh06/",
    associatedProject: "STRATA",
    projectUrl: "https://github.com/Yog05esh/STRATA",
    tags: ["Operational Intelligence", "Agentic Systems", "FastAPI", "Next.js"]
  },
  {
    id: "post-deloitte-internship",
    date: "July 2026",
    title: "Completed Controls Assurance Internship at Deloitte (Audit & Assurance)",
    summary: "Completed my Controls Assurance internship under Audit & Assurance at Deloitte, Chennai. Gained hands-on experience evaluating IT General Controls (ITGC), system reliability, and automated control validation across enterprise architectures. As part of my professional development, completed 150+ hours of continuous enterprise learning covering enterprise AI adoption, data pipelines, and IT risk governance.",
    category: "Professional Experience",
    url: "https://www.linkedin.com/in/yog-esh06/",
    tags: ["Controls Assurance", "ITGC", "Audit Automation", "Enterprise Risk"]
  },
  {
    id: "post-deloitte-badges",
    date: "July 2026",
    title: "Earned 6 Employee-Exclusive Skill Badges at Deloitte",
    summary: "Completed internal learning paths and rigorous assessment exams on Deloitte's enterprise learning platform (covering comprehensive Udemy and LinkedIn Learning curricula). Earned 6 internal skill badges: AI Expert (Level 3), AI Generalist (Level 3), AI Market Specialist (Level 3), AI Market Leader (Level 3), Data Science Specialist, and Data Analytics Specialist.",
    category: "Professional Experience",
    url: "https://www.linkedin.com/in/yog-esh06/",
    tags: ["Enterprise AI", "Data Analytics", "Data Science", "Skill Accreditation"]
  },
  {
    id: "post-srm-research-day",
    date: "March 2026",
    title: "Presented Cloud VM Fault Detection Paper at SRM Research Day 2026",
    summary: "Presented our co-authored research paper 'A Lightweight Fault Detection Framework for Cloud Virtual Machines Using System-Level Metrics' with Yatharth Garg at SRM Research Day 2026. The work demonstrates an unobtrusive hypervisor telemetry daemon that monitors host performance counters to detect impending VM faults with 94.2% accuracy and under 1.8ms inference latency.",
    category: "Research Presentation",
    url: "https://www.linkedin.com/in/yog-esh06/",
    tags: ["Cloud Reliability", "Hypervisor Telemetry", "Anomaly Detection", "SRM Research"]
  }
];

