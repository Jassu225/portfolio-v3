import React from 'react';
import { Experience } from '@/lib/data/types';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-white"></div>
        <div className="flex-grow w-px bg-[#3B4754]"></div>
      </div>
      <div>
        <h3 className="text-white font-medium text-base">{experience.role}</h3>
        <p className="text-[#9CABBA] text-base">
          {experience.company} | {experience.duration}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem; 