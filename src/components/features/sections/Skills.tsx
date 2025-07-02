import React from 'react';
import { skills } from '@/lib/data';
import SkillTag from '@/components/elements/SkillTag';

const Skills = () => {
  return (
    <section id="skills" className="py-5 px-4 scroll-m-16">
      <div className="container mx-auto lg:max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-4 lg:mb-8">Skills</h2>
        <div className="flex flex-wrap gap-3 lg:gap-4">
          {skills.map((skill, index) => (
            <SkillTag key={index} skill={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 