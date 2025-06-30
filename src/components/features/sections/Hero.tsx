import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

const Hero = () => {
  return (
    <section id="hero" className="py-5 px-4 scroll-m-16">
      <div className="container mx-auto flex flex-col items-center gap-6 lg:gap-8">
        <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full p-3 sm:p-4 bg-gray-700">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src={personalInfo.profilePicture}
              alt={personalInfo.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-white text-[22px] lg:text-4xl font-bold font-space-grotesk">
            {personalInfo.name}
          </h1>
          <p className="text-[#9CABBA] text-base lg:text-lg font-normal font-space-grotesk mt-2">
            {personalInfo.title}
          </p>
          <p className="text-[#9CABBA] text-base lg:text-lg font-normal font-space-grotesk">
            {personalInfo.location}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 