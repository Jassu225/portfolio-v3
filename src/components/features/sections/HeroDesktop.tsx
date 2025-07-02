import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

const HeroDesktop = () => {
  return (
    <section className="relative w-full h-[704px] bg-[#121417] overflow-hidden">
      {/* Grid Layout for Split Design */}
      <div className="grid grid-cols-2 h-full">
        {/* Content Section - Left Side */}
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col gap-3 max-w-lg">
            {/* Role Text */}
            <div className="w-full">
              <p className="text-blue-500 font-bold text-[20px] leading-[1.364] uppercase font-space-grotesk">
                UI/UX Designer
              </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-8">
              {/* Title */}
              <div>
                <h1 className="text-[#FFFFFF] font-bold text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.2] font-space-grotesk">
                  Hello, my name is Madelyn Torff
                </h1>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-[#9CABBA] font-normal text-[20px] lg:text-[22px] xl:text-[24px] leading-[1.5] font-space-grotesk">
                    Short text with details about you, what you do or your professional career. You can add more information on the about page.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                {/* Primary Button */}
                <button className="bg-blue-500 text-white font-medium text-[18px] leading-[1.5] rounded-lg transition-colors hover:bg-blue-600 px-6 py-2 font-space-grotesk">
                  Projects
                </button>

                {/* Secondary Button */}
                <button className="border-2 border-cyan-500 text-cyan-500 font-medium text-[18px] leading-[1.5] rounded-lg transition-colors hover:bg-cyan-500 hover:text-white px-6 py-2 font-space-grotesk">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section - Right Side */}
        <div className="relative flex items-center justify-center">
          {/* Yellow Background SVG */}
          <div className="absolute inset-0 flex items-center justify-end pr-8">
            <div className="relative w-full max-w-[777px] h-full max-h-[877px]">
              <Image
                src="/assets/hero-shape-bg.svg"
                alt="Yellow background shape"
                width={777}
                height={877}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Profile Image - Positioned inside yellow shape and masked with organic shape */}
          <div className="absolute inset-0 flex items-center justify-end pr-8">
            <div className="relative w-full max-w-[777px] h-full max-h-[877px]">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 777 877" 
                className="absolute inset-0"
              >
                <defs>
                  <mask id="organicShapeMask">
                    {/* Using the actual organic path from yellow-bg.svg */}
                    <path
                      d="M426.755 0.660905C526.01 5.37687 630.416 42.2627 691.019 119.058C747.053 190.064 709.403 290.888 725.408 379.114C738.276 450.044 786.302 512.961 775.404 584.204C763.332 663.132 724.842 738.453 662.532 790.186C597.271 844.368 510.835 889.895 426.755 873.671C345.261 857.947 319.875 754.823 250.249 710.635C174.069 662.287 41.2528 688.785 6.43092 606.913C-27.6816 526.71 83.9568 456.257 106.308 372.209C131.067 279.108 79.6084 166.633 143.094 93.0241C208.865 16.7636 324.689 -4.1886 426.755 0.660905Z"
                      fill="white"
                    />
                  </mask>
                </defs>
                <foreignObject 
                  width="100%" 
                  height="100%" 
                  mask="url(#organicShapeMask)"
                >
                  {/* Profile image positioned at bottom center of the organic shape */}
                  <div 
                    className="relative w-full h-full"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center'
                    }}
                  >
                    <Image
                      src={personalInfo.profilePicture}
                      alt={personalInfo.name}
                      width={300}
                      height={749}
                      className="object-cover"
                      style={{
                        maxWidth: '450px',
                        maxHeight: '1123px'
                      }}
                    />
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDesktop; 