import React from 'react';
import { BsStars } from 'react-icons/bs';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <div className="group relative bg-[#2A2E33] text-[#F5F5F5] text-sm lg:text-base py-1.5 px-4 rounded-full transition-all duration-400 ease-out hover:-translate-y-1 cursor-pointer">
      {skill}
      <div className="absolute -top-1 -right-1 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 group-hover:animate-twinkle">
        <BsStars className="text-yellow-300" />
      </div>
    </div>
  );
};

export default SkillTag; 