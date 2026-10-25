import React, { useState } from 'react';
import { projectsData } from './data/projects';
import { Project } from './types';
import { Header } from './components/layout/Header';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { SectionTabs, TabId } from './components/layout/SectionTabs';
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
  const [activeTab, setActiveTab] = useState<TabId>('hackathons');

  const handleSelectTab = (tab: TabId) => {
    setActiveTab(tab);
    const element = document.getElementById('sections-tabs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08090b] text-[#f5f5f0] selection:bg-[#d4ff33] selection:text-[#08090b]">
      {/* Global Navigation Header */}
      <Header 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        isMobileMenuOpen={isMobileMenuOpen} 
        onOpenResume={() => setIsResumeOpen(true)}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* Mobile Drawer Navigation */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onOpenResume={() => setIsResumeOpen(true)}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* Main Content Sections: Recruiter-First Information Architecture */}
      <main className="relative z-10">
        
        {/* 01. Hero with Narrative, CTAs & Systems Background Canvas */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onSelectTab={(tab) => handleSelectTab(tab as TabId)}
        />

        {/* 02. Interactive Sticky Section Tab Navigation */}
        <SectionTabs 
          activeTab={activeTab} 
          onTabChange={handleSelectTab} 
        />

        {/* 03. Dynamic Active Tab View Container */}
        <div className="relative min-h-[60vh] transition-opacity duration-300">
          {activeTab === 'hackathons' && (
            <AchievementsSection />
          )}

          {activeTab === 'projects' && (
            <>
              <FeaturedProjects 
                projects={projectsData} 
                onSelectProject={(project) => setSelectedProject(project)} 
              />
              <AllProjects 
                projects={projectsData} 
                onSelectProject={(project) => setSelectedProject(project)} 
              />
            </>
          )}

          {activeTab === 'research' && (
            <ResearchSection />
          )}

          {activeTab === 'experience' && (
            <ExperienceSection />
          )}

          {activeTab === 'certificates' && (
            <CertificatesSection />
          )}

          {activeTab === 'updates' && (
            <LinkedInUpdates />
          )}

          {activeTab === 'skills' && (
            <SkillsSection />
          )}
        </div>

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
