import React, { useState } from 'react';
import { projectsData } from './data/projects';
import { Project } from './types';
import { Header } from './components/layout/Header';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { AchievementsSection } from './components/achievements/AchievementsSection';
import { FeaturedProjects } from './components/projects/FeaturedProjects';
import { AllProjects } from './components/projects/AllProjects';
import { ResearchSection } from './components/research/ResearchSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { CertificatesSection } from './components/certificates/CertificatesSection';
import { LinkedInUpdates } from './components/updates/LinkedInUpdates';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectModal } from './components/common/ProjectModal';
import { ResumeModal } from './components/common/ResumeModal';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08090b] text-[#f5f5f0] selection:bg-[#d4ff33] selection:text-[#08090b]">
      {/* Global Navigation Header */}
      <Header 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        isMobileMenuOpen={isMobileMenuOpen} 
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Mobile Drawer Navigation */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections: Recruiter-First Information Architecture */}
      <main className="relative z-10">
        
        {/* 01. Hero with Narrative, CTAs & Systems Canvas */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 02. Hackathon Accolades FIRST: Rehab Tech 1st & Industry Games Top 8 */}
        <AchievementsSection />

        {/* 03. Flagship Engineering Work (STRATA, Aeon, Waypoint, Quarry, RealCost) */}
        <FeaturedProjects 
          projects={projectsData} 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        {/* 04. Repository & Systems Library (Search & Category Filter across all repos) */}
        <AllProjects 
          projects={projectsData} 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        {/* 05. Academic & Systems Research (3 Papers: Cloud VM, SER, and Student Risk ML) */}
        <ResearchSection />

        {/* 06. Professional Experience (Deloitte Controls Assurance & SRM Research) */}
        <ExperienceSection />

        {/* 07. Certifications & Credentials Gallery with Detail Modal */}
        <CertificatesSection />

        {/* 08. Writing & Updates: Real Dispatches From LinkedIn */}
        <LinkedInUpdates />

        {/* 09. Technical Capabilities by Architectural Domain */}
        <SkillsSection />

      </main>

      {/* Footer & Contact CTA */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Project Technical Deep-Dive Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Curriculum Vitae / Resume Viewer & Downloader Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

    </div>
  );
};

export default App;
