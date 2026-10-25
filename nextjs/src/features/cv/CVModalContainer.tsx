'use client';

import React, { useState, useEffect } from 'react';
import { CVModal } from './CVModal';
import { Profile, Experience, Project, Skill } from '../../core/domain/entities';

export const openCVModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cv-modal'));
  }
};

interface CVModalContainerProps {
  profile: Profile;
  experiences: readonly Experience[];
  projects: readonly Project[];
  skills: readonly Skill[];
}

export const CVModalContainer: React.FC<CVModalContainerProps> = ({
  profile,
  experiences,
  projects,
  skills,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-cv-modal', handleOpen);
    return () => window.removeEventListener('open-cv-modal', handleOpen);
  }, []);

  return (
    <CVModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      profile={profile}
      experiences={experiences}
      projects={projects}
      skills={skills}
    />
  );
};
