import React from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <div className="bg-[#292929] text-[#E0E0E0] text-sm lg:text-base py-1.5 px-4 rounded-full transition-all duration-400 ease-out hover:-translate-y-1 hover:border-[#3E91FF] hover:text-[#82B1FF] cursor-pointer border border-transparent">
      {skill}
    </div>
  );
};

export default SkillTag; 