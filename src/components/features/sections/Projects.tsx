"use client";

import React from 'react';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/elements/ProjectCard';
import { Carousel, CarouselItem } from '@/components/elements/Carousel';
import useMediaQuery from '@/lib/hooks/useMediaQuery';

const Projects = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section id="projects" className="py-4 scroll-m-16">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold mb-8 px-4">
          Featured Projects
        </h2>
        {isDesktop ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <div className="overflow-x-visible">
            <Carousel>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 