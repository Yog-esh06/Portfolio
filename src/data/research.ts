import { ResearchPaper } from '../types';

export const researchData: ResearchPaper[] = [
  {
    id: "cloud-vm-fault-detection",
    title: "A Lightweight Fault Detection Framework for Cloud Virtual Machines Using System-Level Metrics",
    track: "Cloud Computing & Systems Reliability",
    venue: "SRM Research Day 2026",
    year: 2026,
    collaborators: ["Yogesh R. Mehta", "Yatharth Garg"],
    status: "Presented",
    abstract: "Modern cloud hypervisors host thousands of co-located virtual machines subject to transient hardware faults, noisy neighbors, and hypervisor resource starvation. Existing detection approaches either require heavyweight in-guest agents that consume prohibitive CPU overhead or rely solely on coarse hypervisor heartbeats that fail to detect silent degradations. This paper introduces an unobtrusive telemetry pipeline that samples lightweight hypervisor performance counters and system-level metrics, processing temporal anomalies through optimized tree ensembles to flag impending VM failures before service disruption occurs.",
    problem: "Silent degradation and transient faults in virtual machines cause cascading service failures in multi-tenant cloud clusters. Traditional deep monitoring solutions impose noticeable virtualization overhead (>5-8% CPU penalty), rendering them impractical for density-sensitive cloud providers.",
    methodology: "We designed a passive collection daemon gathering host-level hardware performance counters (cache miss frequency, context switch rates, vCPU run-queue latency) and system I/O distributions without guest instrumentation. Feature vectors are normalized into rolling temporal windows and evaluated against trained XGBoost and isolation forest estimators configured for minimal inference latency.",
    results: [
      { metric: "Inference Latency", value: "< 1.8 ms", comparison: "Negligible CPU overhead (<0.4%)" },
      { metric: "Detection Rate", value: "94.2%", comparison: "Across CPU/IO starvation faults" },
      { metric: "Lead Time", value: "3.5 min", comparison: "Advance warning prior to crash" }
    ],
    tags: ["Cloud Infrastructure", "Fault Detection", "System Telemetry", "Virtual Machines", "Anomaly Detection"]
  },
  {
    id: "speech-emotion-recognition",
    title: "Prosodic-Temporal Feature Ablation in CNN Speech Emotion Recognition",
    track: "Acoustic AI & Deep Learning",
    venue: "SRM IST Undergraduate Research Opportunities Programme (UROP)",
    year: 2025,
    collaborators: ["Yogesh R. Mehta", "Shreyas Gupta"],
    status: "Completed Research",
    abstract: "Speech Emotion Recognition (SER) remains challenging due to the high variability of acoustic signals and the intricate interplay between static spectral envelopes and dynamic prosody. In this study, we conduct a systematic feature ablation study comparing two primary acoustic representations evaluated on a 4-block deep Convolutional Neural Network architecture with batch normalization and dropout regularization over the RAVDESS dataset. We prove that coupling 40 Mel-Frequency Cepstral Coefficients with their first and second temporal derivatives (MFCC + Delta + Delta-Delta) decisively outperforms standard combinations of MFCC with fundamental pitch frequency (F0) and RMS energy.",
    problem: "Classifying human emotional state from raw speech audio often conflates static speaker timbre with dynamic emotional expression, resulting in poor generalizability across distinct acoustic environments and emotion categories.",
    methodology: "A 4-block 2D CNN architecture was trained over the stratified RAVDESS corpus (2,068 samples, 24 professional actors, 6 emotion categories: angry, calm, fearful, happy, neutral, sad). Training data was quadrupled using domain-specific audio data augmentation (Gaussian noise injection, time-stretching, and pitch-shifting). Two distinct feature matrix configurations were tested under identical Adam optimization and early stopping policies.",
    results: [
      { metric: "MFCC + Delta + Delta-Delta", value: "92.78%", comparison: "Top Test Accuracy (Dynamic Spectral)" },
      { metric: "MFCC + Pitch + Energy", value: "89.94%", comparison: "Baseline Combination (Ablated)" },
      { metric: "Relative Gain", value: "+2.84%", comparison: "Temporal derivatives capture emotional transitions" }
    ],
    repoUrl: "https://github.com/Yog-esh06/Emotional-Classification-using-Audio-Data",
    tags: ["Speech Emotion Recognition", "CNN", "Acoustics", "Audio Processing", "RAVDESS", "MFCC"]
  },
  {
    id: "student-performance-prediction",
    title: "Cost-Sensitive Risk Classification, Uncertainty Quantification & Explainable AI for Student Academic Performance Prediction",
    track: "Educational Data Mining & Decision Support",
    venue: "SRM Institute of Science and Technology (Research Project)",
    year: 2025,
    collaborators: ["Yogesh R. Mehta", "Bhavy Manchanda", "Darsh M. Saraf", "Bhavish Akula (Mentored by Dr. V. Angayarkanni)"],
    status: "Completed Research",
    abstract: "Educational machine learning models frequently suffer from significant costs associated with false negatives—failing to identify at-risk students before irreversible academic failure occurs. Furthermore, standard black-box regressors provide no actionable attribution to guide pedagogical interventions. We formulated a comprehensive decision-support framework incorporating an asymmetric cost-sensitive loss matrix in XGBoost to strictly penalize false negatives, temporal progression feature synthesis (Early Engagement, Midterm Consistency, Late Fatigue), Shannon entropy uncertainty quantification, and SHAP explainability.",
    problem: "Standard educational forecasters fail because student performance datasets have natural class imbalances, and conventional symmetric loss functions treat false alarms and missed failing students with equal weight, resulting in missed intervention windows.",
    methodology: "We engineered temporal phase transitions from cross-sectional academic indicators and addressed class imbalance via SMOTE. An asymmetric cost matrix penalizes false negatives 5x higher than false positives. Shannon entropy is calculated over class probabilities; predictions with entropy exceeding 0.85 are automatically flagged for mandatory human educator review. SHAP values decode model feature attribution for customized student advising.",
    results: [
      { metric: "False Negative Reduction", value: "78%", comparison: "Prioritizes early intervention" },
      { metric: "Uncertainty Threshold", value: "Entropy > 0.85", comparison: "Triggers human educator review" },
      { metric: "Explainability Engine", value: "SHAP XAI", comparison: "Local & global feature impacts" }
    ],
    repoUrl: "https://github.com/Yog-esh06/Student-Academic-Performance-Prediction",
    tags: ["Educational Data Mining", "Cost-Sensitive Learning", "Explainable AI", "SHAP", "Uncertainty Quantification", "XGBoost"]
  }
];
