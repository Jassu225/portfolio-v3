import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

const Hero = () => {
  return (
    <section id="hero" className="py-4 px-4">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src={personalInfo.profilePicture}
            alt={personalInfo.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-center">
          <h1 className="text-white text-[22px] font-bold font-space-grotesk">
            {personalInfo.name}
          </h1>
          <p className="text-[#9CABBA] text-base font-normal font-space-grotesk">
            {personalInfo.title}
          </p>
          <p className="text-[#9CABBA] text-base font-normal font-space-grotesk">
            {personalInfo.location}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 