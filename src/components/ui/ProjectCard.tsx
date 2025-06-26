import React from 'react';
import Image from 'next/image';
import { Project } from '@/lib/data/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="relative h-40 w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 bg-[#1A1E23]">
        <h3 className="text-white font-medium text-base">{project.title}</h3>
        <p className="text-[#9CABBA] text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard; 