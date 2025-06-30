import React from 'react';
import { skills } from '@/lib/data';
import SkillTag from '@/components/elements/SkillTag';

const Skills = () => {
  return (
    <section id="skills" className="py-4 px-4 scroll-m-16">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold text-white mb-4 font-space-grotesk">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <SkillTag key={index} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 