import React from 'react';
import { personalInfo } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="py-5 pb-4 pt-8 scroll-m-16">
      <div className="container mx-auto lg:max-w-4xl">
        <h2 className="text-3xl font-bold text-on-background mb-3">About me</h2>
        <p className="text-on-surface-variant text-base lg:text-lg font-normal leading-relaxed lg:leading-loose text-justify">
          {personalInfo.about}
        </p>
      </div>
    </section>
  );
};

export default About;
