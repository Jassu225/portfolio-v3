import React from 'react';

interface SkillTagProps {
  name: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name }) => {
  return (
    <div className="bg-[#293038] text-white font-medium text-sm lg:text-base py-2 px-4 rounded-full">
      {name}
    </div>
  );
};

export default SkillTag; 