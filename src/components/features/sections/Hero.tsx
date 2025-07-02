import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

const Hero = () => {
  return (
    <section id="hero" className="py-16 px-4 scroll-m-16">
      <div className="container mx-auto text-center lg:max-w-4xl">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
          <Image
            src={personalInfo.profilePicture}
            alt={personalInfo.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-[#E0E0E0] text-[22px] lg:text-4xl font-bold font-space-grotesk">
          {personalInfo.name}
        </h1>
        <p className="text-[#CCCCCC] text-base lg:text-lg font-normal font-space-grotesk mt-2">
          {personalInfo.title}
        </p>
        <p className="text-[#CCCCCC] text-base lg:text-lg font-normal font-space-grotesk">
          {personalInfo.location}
        </p>
      </div>
    </section>
  );
};

export default Hero; 