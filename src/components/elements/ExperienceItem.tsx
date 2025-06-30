"use client";
import React, { useState } from 'react';
import { Experience } from '@/lib/data/types';
import Image from 'next/image';

interface ExperienceItemProps {
  experience: Experience;
  isLast?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isExpandable = experience.description.length > 1;

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-6 h-6 flex-shrink-0">
          <Image
            src="/assets/icons/office-bag.svg"
            alt="Experience icon"
            width={24}
            height={24}
            className="w-full h-full"
          />
        </div>
        {!isLast && <div className="flex-grow w-px bg-[#3B4754]"></div>}
      </div>
      <div className="pb-6">
        <h3 className="text-white font-medium text-base lg:text-lg">{experience.role}</h3>
        <p className="text-[#9CABBA] text-base lg:text-lg">
          {experience.company} | {experience.duration}
        </p>
        <ul className="list-disc text-[#9CABBA] text-sm lg:text-base mt-2 space-y-1 pl-4">
          {(isExpanded ? experience.description : experience.description.slice(0, 1)).map(
            (item, index) => (
              <li key={index} className="text-justify">
                {item}
              </li>
            )
          )}
        </ul>
        {isExpandable && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:text-blue-300 text-sm lg:text-base mt-2 cursor-pointer"
          >
            {isExpanded ? 'See less...' : 'See more...'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem; 