"use client";

import React from 'react';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/elements/ProjectCard';
import { Carousel, CarouselItem } from '@/components/elements/Carousel';
import useMediaQuery from '@/lib/hooks/useMediaQuery';

const Projects = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section id="projects" className="py-5 px-4 scroll-m-16">
      <div className="container mx-auto lg:max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-4 lg:mb-8">
          Featured Projects
        </h2>
        {isDesktop ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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