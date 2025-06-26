import React from 'react';
import { personalInfo } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="py-4 px-4">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold text-white mb-2 font-space-grotesk">About</h2>
        <p className="text-[#9CABBA] text-base font-normal leading-relaxed font-space-grotesk">
          {personalInfo.about}
        </p>
      </div>
    </section>
  );
};

export default About; 