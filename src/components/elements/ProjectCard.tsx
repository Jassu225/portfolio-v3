"use client";

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Project } from '@/lib/data/types';
import useMediaQuery from '@/lib/hooks/useMediaQuery';

// Dynamically import Tilted component with SSR disabled
const Tilted = dynamic(() => import('@/components/motion/Tilted'), { 
  ssr: false 
});

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const cardContent = (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
      <div className="rounded-lg overflow-hidden h-full flex flex-col bg-[#1A1E23]">
        <div className="relative h-40 w-full flex-shrink-0">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
          <div
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs py-1 px-3 rounded-full hover:bg-opacity-75 transition-opacity"
          >
            View
          </div>
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-white font-medium text-base lg:text-lg">{project.title}</h3>
          <p className="text-[#9CABBA] text-sm lg:text-base mt-2">{project.description}</p>
        </div>
      </div>
    </a>
  );

  if (isDesktop) {
    return (
      <Tilted className="h-full cursor-pointer">
        {cardContent}
      </Tilted>
    );
  }

  return (
    <div className="h-full cursor-pointer">
      {cardContent}
    </div>
  );
};

export default ProjectCard; 