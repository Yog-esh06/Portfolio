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
    abstract: "Modern cloud hypervisors host co-located virtual machines subject to transient hardware faults, noisy neighbors, and resource contention. Traditional detection mechanisms rely either on heavy in-guest telemetry that incurs non-trivial virtualization overhead or on coarse hypervisor heartbeats that miss silent performance degradation. We evaluate an unobtrusive collection daemon that samples lightweight host-level performance counters and system I/O distributions without guest instrumentation, evaluating temporal anomaly vectors with tree ensembles for rapid warning before VM service interruption.",
    problem: "Silent degradation and transient faults in virtual machines cause cascading service failures in multi-tenant cloud clusters. In-guest instrumentation imposes measurable CPU penalties (>5-8%), which multi-tenant cloud providers avoid in production density environments.",
    methodology: "A passive collection daemon samples host-level hardware performance counters (cache miss frequency, context switch rates, vCPU run-queue latency) and system I/O distributions without guest instrumentation. Feature vectors are normalized across rolling temporal windows and evaluated against trained XGBoost and isolation forest estimators tuned for low inference latency.",
    results: [
      { metric: "Inference Latency", value: "< 1.8 ms", comparison: "Negligible host CPU overhead (<0.4%)" },
      { metric: "Detection Rate", value: "94.2%", comparison: "Evaluated across CPU/IO starvation faults" },
      { metric: "Lead Time", value: "3.5 min", comparison: "Advance warning prior to crash state" }
    ],
    manuscriptStatus: "Presented at SRM Research Day 2026",
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
    abstract: "Speech Emotion Recognition (SER) remains challenging due to acoustic variability and the complex relationship between static spectral envelopes and dynamic prosody. In this study, we conduct an experimental ablation study comparing two primary acoustic representations evaluated on a 4-block deep 2D Convolutional Neural Network with batch normalization and dropout over the RAVDESS corpus. Results show that coupling 40 Mel-Frequency Cepstral Coefficients with their first and second temporal derivatives (MFCC + Delta + Delta-Delta) outperforms standard combinations of MFCC with fundamental pitch frequency (F0) and RMS energy.",
    problem: "Classifying human emotional state from raw speech audio often conflates static speaker timbre with dynamic emotional expression, degrading generalization across speaker identities and recording environments.",
    methodology: "A 4-block 2D CNN architecture was trained over the stratified RAVDESS corpus (2,068 samples, 24 professional actors, 6 emotion categories). Training data was augmented with Gaussian noise injection, time-stretching, and pitch-shifting. Two distinct feature matrix configurations were tested under identical Adam optimization and early stopping policies.",
    results: [
      { metric: "MFCC + Delta + Delta-Delta", value: "92.78%", comparison: "Top Test Accuracy (Dynamic Spectral)" },
      { metric: "MFCC + Pitch + Energy", value: "89.94%", comparison: "Baseline Combination (Ablated)" },
      { metric: "Relative Gain", value: "+2.84%", comparison: "Temporal derivatives capture emotional transitions" }
    ],
    repoUrl: "https://github.com/Yog-esh06/Emotional-Classification-using-Audio-Data",
    manuscriptStatus: "Open-Source Code & UROP Project",
    tags: ["Speech Emotion Recognition", "CNN", "Acoustics", "Audio Processing", "RAVDESS", "MFCC"]
  },
  {
    id: "data-center-thermal-digital-twin",
    title: "A Machine Learning-Enhanced Digital Twin for Predictive Thermal Management and Energy Optimization in Data Centers",
    track: "Digital Twins & Sustainable Computing",
    venue: "Software Research Prototype & Simulation Study",
    year: 2026,
    collaborators: ["Yogesh R. Mehta"],
    status: "Research Prototype",
    abstract: "Data center thermal management must balance strict hardware thermal safety margins against cooling power consumption. This study formulates a software-based digital-twin prototype that combines an eight-rack resistance-capacitance (RC) thermal model, sensor observation handling with noise and missingness, multi-horizon machine-learning forecasting, and a counterfactual predictive decision engine. Seven forecasting pipelines (including persistence, physics baselines, linear, tree ensembles, PyTorch GRU, and physics-plus-residual hybrids) and four control policies are evaluated across simulated operational scenarios.",
    problem: "Server density in modern computing facilities creates localized thermal hotspots and cooling inefficiencies, while live control experimentation on physical server racks is risk-prohibitive without validated digital surrogates.",
    methodology: "Implemented a configurable multi-rack, three-zone thermal simulation with Runge-Kutta (RK4) integration, recirculation modeling, and inter-rack thermal coupling. Synthetic sensor observations incorporate noise, dropped frames, and causal estimation. Tested MPC-style predictive control with cooling adjustments and workload migration candidate actions.",
    results: [
      { metric: "Simulation Plant", value: "8-Rack RC Model", comparison: "RK4 integration with inter-rack coupling" },
      { metric: "Forecasting", value: "Multi-Horizon", comparison: "Physics + PyTorch GRU residual hybrid" },
      { metric: "Validation Note", value: "Simulation Only", comparison: "Not tested on physical data-center hardware" }
    ],
    disclaimer: "Software-simulated research surrogate evaluated under synthetic operational conditions. Reported performance and energy findings are illustrative simulation results and have explicitly not been validated on physical data-center hardware.",
    repoUrl: "https://github.com/Yog-esh06/Thermal-Management-and-Energy-Optimization-in-Data-Centers/tree/main",
    manuscriptStatus: "Repository Available; Manuscript in Preparation",
    tags: ["Digital Twin", "Data Center Cooling", "Predictive Control", "Thermal Modeling", "Simulation", "PyTorch"]
  }
];
