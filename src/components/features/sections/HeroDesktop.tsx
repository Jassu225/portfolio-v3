import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { FaDownload, FaLinkedin } from 'react-icons/fa';

const heroShapeBg = {link: '/assets/hero-shape-bg.svg', width: 720, height: 629};

const HeroDesktop = () => {
  return (
    <section className="relative w-full h-screen bg-background overflow-hidden">
      {/* Grid Layout for Split Design */}
      <div className="grid grid-cols-2 h-full">
        {/* Content Section - Left Side */}
        <div className="flex flex-col justify-start px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col gap-3 max-w-lg mt-[15vh]">
            {/* Role Text */}
            <div className="w-full">
              <p className="text-tertiary font-bold text-[20px] leading-[1.364] uppercase">
                {personalInfo.title}
              </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-8">
              {/* Title */}
              <div>
                <h1 className="text-on-background font-bold text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.2]">
                  Hello, I&apos;m {personalInfo.name}
                </h1>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-3">
                <div>
                  <div className="bg-surface  rounded-lg py-4 font-mono text-[18px] lg:text-[20px] xl:text-[22px] leading-[1.6]">
                    <div className="text-tertiary">
                      <span className="text-outline">{'// '}</span>
                      <span className="text-on-surface-variant">Scroll to </span>
                      <span className="text-secondary">fetch</span>
                      <span className="text-on-surface-variant"> my </span>
                      <span className="text-primary-700">experience</span>
                      <span className="text-on-surface-variant">()</span>
                    </div>
                    <div className="text-on-surface-variant">
                      <span>or </span>
                      <span className="text-secondary">connect</span>
                      <span>(</span>
                      <span>) with me on </span>
                      <span className="text-primary-700">LinkedIn</span>
                      <span className="text-outline">;</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                {/* Primary Button */}
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                <button className="inline-flex items-center gap-2 bg-primary text-on-primary font-medium text-[18px] leading-[1.5] rounded-lg transition-colors hover:bg-primary-container px-6 py-2 cursor-pointer">
                    <FaDownload />
                    Download Resume
                  </button>
                </a>

                {/* Secondary Button */}

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center gap-2 border-2 border-secondary text-secondary font-medium text-[18px] leading-[1.5] rounded-lg transition-colors hover:bg-secondary hover:text-on-secondary px-6 py-2 cursor-pointer">
                    <FaLinkedin />
                    LinkedIn
                  </button>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Image Section - Right Side */}
        <div className="relative flex items-start justify-center align-self-start">
          {/* Background SVG */}
          <div className="absolute inset-0 flex items-start justify-end">
            <div className="relative w-full max-w-[720px] h-full max-h-[629px]">
              <Image
                src={heroShapeBg.link}
                alt="background shape"
                width={heroShapeBg.width}
                height={heroShapeBg.height}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Profile Image - Positioned inside shape and masked with organic shape */}
          <div className="absolute inset-0 flex items-start justify-end">
            <div className="relative w-full max-w-[720px] h-full max-h-[629px]">
              <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${heroShapeBg.width} ${heroShapeBg.height}`}
                className="absolute inset-0"
              >
                <defs>
                  <mask id="organicShapeMask">
                    {/* Using the actual organic path from hero-shape-bg.svg */}
                    <path
                      d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.452 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
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
                      justifyContent: 'flex-end'
                    }}
                  >
                    <Image
                      src={personalInfo.profilePictureDesktop}
                      alt={personalInfo.name}
                      width={1000}
                      height={751}
                      className="object-cover"
                      style={{
                        maxWidth: '2000px',
                        maxHeight: '1502px'
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