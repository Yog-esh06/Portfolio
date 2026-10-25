export interface LinkedInPost {
  id: string;
  date: string;
  title: string;
  content: string;
  category: string;
  url: string;
  associatedProject?: string;
  projectUrl?: string;
  tags: string[];
}

export const linkedInPosts: LinkedInPost[] = [
  {
    id: "post-rehab-tech",
    date: "Semester 4",
    title: "1st Place Winner at Rehab Tech Challenge with Team Kynex",
    content: "Honored to share that Team Kynex secured 1st Place at the Rehab Tech Challenge, a med-tech hackathon at SRM Institute of Science and Technology. We developed Neuro-Move, a computer vision rehabilitation assessment system designed to evaluate physiotherapy exercises in real time using webcam video without requiring wearable sensors or external hardware.",
    category: "Hackathon Win",
    url: "https://www.linkedin.com/in/yog-esh06/",
    associatedProject: "Neuro-Move",
    projectUrl: "https://github.com/Yatharthg12/Neuro-Move",
    tags: ["Computer Vision", "HealthTech", "Hackathon", "NeuroMove"]
  },
  {
    id: "post-deloitte-joining",
    date: "May 2026",
    title: "Joining Deloitte as Controls Assurance Intern",
    content: "Excited to share that I have joined Deloitte as a Controls Assurance Intern in the Audit & Assurance practice, based in Chennai. Looking forward to diving into IT General Controls (ITGC), system reliability, risk governance, and enterprise audit methodologies over the coming months.",
    category: "Career Milestone",
    url: "https://www.linkedin.com/in/yog-esh06/",
    tags: ["Deloitte", "Controls Assurance", "AuditAndAssurance", "Internship"]
  },
  {
    id: "post-deloitte-completion",
    date: "July 2026",
    title: "Completed Controls Assurance Internship at Deloitte (Audit & Assurance)",
    content: "Wrapped up my Controls Assurance internship within Audit & Assurance at Deloitte, Chennai. Gained hands-on experience evaluating IT General Controls (ITGC), automated validation workflows, and risk assessments across enterprise architectures. Alongside engagement work, completed 150+ hours of continuous professional learning covering enterprise AI adoption, data pipelines, and IT risk governance.",
    category: "Professional Experience",
    url: "https://www.linkedin.com/in/yog-esh06/",
    tags: ["Controls Assurance", "Deloitte", "ITGC", "EnterpriseRisk"]
  },
  {
    id: "post-deloitte-badges",
    date: "July 2026",
    title: "Earned 6 Employee-Exclusive Skill Badges at Deloitte",
    content: "Completed internal learning pathways and assessment benchmarks within Deloitte's enterprise learning ecosystem, earning 6 employee-exclusive skill badges: AI Expert – Level 3, AI Generalist – Level 3, AI Market Specialist – Level 3, AI Market Leader – Level 3, Data Science, and Data Analytics. Grateful for the continuous learning opportunities provided during my internship.",
    category: "Professional Learning",
    url: "https://www.linkedin.com/in/yog-esh06/",
    tags: ["DeloitteBadges", "EnterpriseAI", "DataScience", "ContinuousLearning"]
  },
  {
    id: "post-srm-research-day",
    date: "March 2026",
    title: "Presented Cloud VM Fault Detection Research at SRM Research Day 2026",
    content: "Presented our co-authored research paper 'A Lightweight Fault Detection Framework for Cloud Virtual Machines Using System-Level Metrics' with Yatharth Garg at SRM Research Day 2026. The work demonstrates an unobtrusive hypervisor telemetry daemon that monitors host performance counters to detect impending VM resource contention and early degradation patterns before service disruption occurs.",
    category: "Research Presentation",
    url: "https://www.linkedin.com/in/yog-esh06/",
    tags: ["SRMResearchDay", "CloudComputing", "FaultDetection", "Telemetry"]
  }
];
