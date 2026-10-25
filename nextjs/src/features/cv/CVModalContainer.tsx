'use client';

import React from 'react';
import { CVModal } from './CVModal';
import { Profile, Experience, Project, Skill } from '../../core/domain/entities';
import { useAppDispatch, useAppSelector } from '../../shared/store/hooks';
import { closeCVModal, openCVModal } from './cvSlice';

export { openCVModal, closeCVModal };

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
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.cv.isOpen);

  return (
    <CVModal
      isOpen={isOpen}
      onClose={() => dispatch(closeCVModal())}
      profile={profile}
      experiences={experiences}
      projects={projects}
      skills={skills}
    />
  );
};
