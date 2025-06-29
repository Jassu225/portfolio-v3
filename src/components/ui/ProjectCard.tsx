import React from 'react';
import Image from 'next/image';
import { Project } from '@/lib/data/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-lg overflow-hidden h-full flex flex-col">
      <div className="relative h-40 w-full flex-shrink-0">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs py-1 px-3 rounded-full hover:bg-opacity-75 transition-opacity"
        >
          View
        </a>
      </div>
      <div className="p-4 bg-[#1A1E23] flex-grow">
        <h3 className="text-white font-medium text-base">{project.title}</h3>
        <p className="text-[#9CABBA] text-sm mt-2">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard; 