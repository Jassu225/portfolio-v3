import React from 'react';
import SkillTag from '@/components/elements/SkillTag';
import { skills } from '@/lib/data';

const Skills = () => {
  return (
    <section id="skills" className="py-5 px-4 scroll-m-16">
      <div className="container mx-auto lg:max-w-4xl">
        <h2 className="text-3xl font-bold text-on-background mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {skills.map((skill, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <no other key>
            <SkillTag key={index} skill={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
