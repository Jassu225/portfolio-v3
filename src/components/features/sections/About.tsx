import React from 'react';
import { personalInfo } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="py-4 px-4 scroll-m-16">
      <div className="container mx-auto">
        <h2 className="text-lg lg:text-2xl font-bold text-white mb-2 lg:mb-4 font-space-grotesk">About</h2>
        <p className="text-[#9CABBA] text-base lg:text-lg font-normal leading-relaxed lg:leading-loose font-space-grotesk">
          {personalInfo.about}
        </p>
      </div>
    </section>
  );
};

export default About; 