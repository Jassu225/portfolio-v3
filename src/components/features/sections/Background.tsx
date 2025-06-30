import React from 'react';
import { experiences } from '@/lib/data';
import ExperienceItem from '@/components/elements/ExperienceItem';

const Background = () => {
  return (
    <section id="experience" className="py-4 px-4 scroll-m-16">
      <div className="container mx-auto">
        <h2 className="text-lg lg:text-2xl font-bold text-white mb-4 font-space-grotesk">Experience</h2>
        <div className="flex flex-col gap-1">
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