import React from 'react';
import { experiences } from '@/lib/data';
import ExperienceItem from '@/components/elements/ExperienceItem';

const Background = () => {
  return (
    <section id="experience" className="py-5 px-4 scroll-m-16">
      <div className="container mx-auto lg:max-w-4xl">
        <h2 className="text-3xl font-bold text-on-background mb-4 lg:mb-8">Experience</h2>
        <div className="space-y-2">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Background; 