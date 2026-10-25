import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "deloitte-controls-assurance",
    role: "Controls Assurance Intern",
    organization: "Deloitte",
    division: "Audit & Assurance",
    location: "Chennai, India",
    period: "May 2026 – July 2026",
    status: "Completed",
    highlights: [
      "Worked in Audit & Assurance on Controls Assurance workflows, evaluating IT General Controls (ITGC), change management validation, system access integrity, and audit trail reliability across enterprise business software.",
      "Completed over 150 hours of intensive enterprise professional development covering practical AI integration, predictive data science, and automated IT audit controls.",
      "Earned 6 employee-exclusive skill badges through Deloitte's internal learning ecosystem (completing comprehensive coursework followed by internal assessment benchmarks).",
      "Collaborated with audit engagement team members to examine automated system control evidence and compliance documentation following professional risk assessment guidelines."
    ],
    badges: [
      "AI Expert – Level 3 (Deloitte Internal Badge)",
      "AI Generalist – Level 3 (Deloitte Internal Badge)",
      "AI Market Specialist – Level 3 (Deloitte Internal Badge)",
      "AI Market Leader – Level 3 (Deloitte Internal Badge)",
      "Data Science (Deloitte Internal Badge)",
      "Data Analytics (Deloitte Internal Badge)",
      "IT Compliance Training (Deloitte)"
    ],
    skills: ["Controls Assurance", "ITGC Compliance", "Enterprise AI", "Data Analytics", "Audit Automation", "Enterprise Risk"]
  },
  {
    id: "srm-undergraduate-researcher",
    role: "Undergraduate Research Assistant",
    organization: "SRM Institute of Science and Technology",
    division: "Department of Computer Science & Engineering",
    location: "Kattankulathur, Chennai",
    period: "2024 – Present",
    status: "Active Research",
    highlights: [
      "Conducted empirical research in cloud hypervisor virtual machine fault detection utilizing system-level hardware performance counters and machine learning classifiers.",
      "Co-authored research presented at SRM Research Day 2026 benchmarking transient failure warning windows across virtualized cloud nodes with Yatharth Garg.",
      "Conducted extensive audio signal processing and deep convolutional network ablation studies under the Undergraduate Research Opportunities Programme (UROP) achieving 92.78% accuracy on speech emotion classification.",
      "Formulated reproducible machine learning pipelines leveraging Python, PyTorch, Librosa, and scikit-learn for acoustic and systems telemetry analysis."
    ],
    badges: [
      "SRM Research Day 2026 Presenter",
      "SRM UROP Research Fellow"
    ],
    skills: ["Cloud Systems Research", "Acoustic AI", "PyTorch", "Audio Processing", "Experimental Design", "Data Modeling"]
  }
];
