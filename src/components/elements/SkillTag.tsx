import React from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <div className="bg-[#2A2E33] text-[#F5F5F5] text-sm lg:text-base py-1.5 px-4 rounded-full transition-all duration-400 ease-out hover:-translate-y-1 cursor-pointer">
      {skill}
    </div>
  );
};

export default SkillTag; 