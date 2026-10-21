import React, { useState } from 'react';
import { projectsData } from './data/projects';
import { Project } from './types';
import { Header } from './components/layout/Header';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { FeaturedProjects } from './components/projects/FeaturedProjects';
import { AllProjects } from './components/projects/AllProjects';
import { ResearchSection } from './components/research/ResearchSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { AchievementsSection } from './components/achievements/AchievementsSection';
import { CertificatesSection } from './components/certificates/CertificatesSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectModal } from './components/common/ProjectModal';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090b0e] text-[#f8fafc] selection:bg-[#c8f135] selection:text-[#090b0e]">
      
      {/* Global Navigation Header */}
      <Header 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        isMobileMenuOpen={isMobileMenuOpen} 
      />

      {/* Mobile Drawer Navigation */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* 01. Flagship Featured Work (STRATA, Aeon, Waypoint, Quarry) */}
        <FeaturedProjects 
          projects={projectsData} 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        {/* 02. Complete Repository & Systems Archive */}
        <AllProjects 
          projects={projectsData} 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        {/* 03. Academic & Systems Research (Cloud VM Fault Detection & SER) */}
        <ResearchSection />

        {/* 04. Professional Experience (Deloitte Controls Assurance & SRM Researcher) */}
        <ExperienceSection />

        {/* 05. Competitive Hackathons & Accolades */}
        <AchievementsSection />

        {/* 06. Verified Credentials & Certifications Gallery (72 Items) */}
        <CertificatesSection />

        {/* 07. Technical Skills & Capability Domains */}
        <SkillsSection />
      </main>

      {/* Footer & Contact CTA */}
      <Footer />

      {/* Interactive Project Technical Deep-Dive Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
};

export default App;

