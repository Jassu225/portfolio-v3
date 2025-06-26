import React from 'react';
import { experiences } from '@/lib/data';
import ExperienceItem from '@/components/ui/ExperienceItem';

const Background = () => {
  return (
    <section id="background" className="py-4 px-4">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold text-white mb-4 font-space-grotesk">Background</h2>
        <div className="flex flex-col gap-4">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Background; 