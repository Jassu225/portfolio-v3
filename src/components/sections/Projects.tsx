import React from 'react';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ui/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-4 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6 font-space-grotesk">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 