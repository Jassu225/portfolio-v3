import React from 'react';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/elements/ProjectCard';
import { Carousel, CarouselItem } from '@/components/elements/Carousel';

const Projects = () => {
  return (
    <section id="projects" className="py-4 scroll-m-16">
      <div className="container mx-auto overflow-x-visible">
        <h2 className="text-lg font-bold mb-8 px-4">
          Featured Projects
        </h2>
        <Carousel>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects; 