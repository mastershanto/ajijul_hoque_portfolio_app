import React from 'react';
import { Navbar } from '../features/navigation/Navbar';
import { HeroSection } from '../features/hero/HeroSection';
import { AboutSection } from '../features/about/AboutSection';
import { SkillsSection } from '../features/skills/SkillsSection';
import { ProjectsSection } from '../features/projects/ProjectsSection';
import { ExperienceSection } from '../features/experience/ExperienceSection';
import { AICopilotSection } from '../features/ai-copilot/AICopilotSection';
import { BackendInteropSection } from '../features/backend-interop/BackendInteropSection';
import { ContactSection } from '../features/contact/ContactSection';
import { Footer } from '../features/footer/Footer';
import { container } from '../infrastructure/container';

export default async function HomePage() {
  const repo = container.getPortfolioRepository();

  const [profileResult, skillsResult, projectsResult, experiencesResult] = await Promise.all([
    repo.getProfile(),
    repo.getSkills(),
    repo.getProjects(),
    repo.getExperiences(),
  ]);

  if (!profileResult.success) {
    throw new Error('Failed to load system profile domain data.');
  }

  const profile = profileResult.data;
  const skills = skillsResult.success ? skillsResult.data : [];
  const projects = projectsResult.success ? projectsResult.data : [];
  const experiences = experiencesResult.success ? experiencesResult.data : [];

  return (
    <div className="portfolio-app-root">
      {/* 25-Year Standard Atmospheric Ambient Glow Canvas */}
      <div className="ambient-glow-wrapper" aria-hidden="true">
        <div className="ambient-orb-1" />
        <div className="ambient-orb-2" />
        <div className="ambient-orb-3" />
        <div className="bg-grid-overlay" />
      </div>

      {/* Floating Glassmorphic Navigation */}
      <Navbar />

      <main id="main-content">
        {/* 00. Hero Section */}
        <HeroSection profile={profile} />

        {/* 01. Architectural Philosophy & Bio */}
        <AboutSection profile={profile} />

        {/* 02. Technical Competency Matrix */}
        <SkillsSection skills={skills} />

        {/* 03. Flagship Projects & Architecture Deep-Dives */}
        <ProjectsSection projects={projects} />

        {/* 04. Engineering Milestones Timeline */}
        <ExperienceSection experiences={experiences} />

        {/* 05. Autonomous AI Copilot / Terminal */}
        <AICopilotSection />

        {/* 06. Polyglot Backend Interoperability Matrix */}
        <BackendInteropSection />

        {/* 07. Contact & Collaboration */}
        <ContactSection profile={profile} />
      </main>

      {/* System Architecture Telemetry Footer */}
      <Footer />
    </div>
  );
}
