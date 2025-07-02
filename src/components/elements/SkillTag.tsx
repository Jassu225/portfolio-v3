import React from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <div className="bg-surface-variant text-on-background text-sm lg:text-base py-1.5 px-4 rounded-full transition-all duration-400 ease-out hover:-translate-y-1 hover:border-primary hover:text-tertiary cursor-pointer border border-transparent">
      {skill}
    </div>
  );
};

export default SkillTag; 