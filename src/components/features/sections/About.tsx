import React from 'react';
import { personalInfo } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="py-5 px-4 scroll-m-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 lg:mb-8">About</h2>
        <p className="text-[#9CABBA] text-base lg:text-lg font-normal leading-relaxed lg:leading-loose font-space-grotesk">
          {personalInfo.about}
        </p>
      </div>
    </section>
  );
};

export default About; 