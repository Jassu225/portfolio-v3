'use client';
import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { FaDownload, FaLinkedin } from 'react-icons/fa';
import useMediaQuery from '@/lib/hooks/useMediaQuery';

const heroShapeBg = {
  link: '/assets/images/hero/profile-with-bg.png',
  width: 1440,
  height: 1408,
};

const HeroDesktop = () => {
  const isMobile = useMediaQuery('(max-width: 639px)');
  return (
    <section className="relative w-full bg-background overflow-hidden">
      {/* Grid Layout for Split Design */}
      <div className="sm:grid sm:grid-cols-2 sm:h-full">
        {/* Image Section - Right Side */}
        {isMobile ? <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
          <Image
            src={personalInfo.profilePicture}
            alt={personalInfo.name}
            width={128}
            height={128}
            className="w-full h-full object-cover bg-on-background border-9 border-primary rounded-full"
          />
        </div> : <div className="sm:order-2 relative flex items-start justify-end align-self-start">
          <div className="inset-0 flex items-start justify-end">
            <div className="relative w-full h-full">
              <Image
                src={heroShapeBg.link}
                alt="profile with background"
                width={heroShapeBg.width}
                height={heroShapeBg.height}
                className="w-full h-auto max-w-[475px] md:max-w-[unset] md:h-full object-contain"
              />
            </div>
          </div>
        </div>}
        {/* Content Section - Left Side */}
        <div className="mt-10 sm:order-1 flex flex-col justify-center text-center sm:text-left px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col gap-3 max-w-lg">
            {/* Role Text */}
            <div className="w-full">
              <p className="text-tertiary font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-[1.364] uppercase">
                {personalInfo.title}
              </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-2 sm:gap-8">
              {/* Title */}
              <div>
                <h1 className="text-on-background font-bold text-3xl md:text-5xl lg:text-[56px] xl:text-[64px] leading-[1.2]">
                  Hello, I&apos;m {personalInfo.name}
                </h1>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-3 items-center sm:items-start">
                <div className="bg-surface rounded-lg py-4 max-w-[420px] xl:max-w-[unset] font-mono text-[18px] lg:text-xl xl:text-[22px] leading-[1.6]">
                  <span className="text-tertiary">
                    <span className="text-outline">{'// '}</span>
                    <span className="text-on-surface-variant">Scroll to </span>
                    <span className="text-secondary">fetch</span>
                    <span className="text-on-surface-variant"> my </span>
                    <span className="text-primary-700">experience</span>
                    <span className="text-on-surface-variant">()</span>
                  </span>
                  <span className="text-on-surface-variant">
                    <span> or </span>
                    <span className="text-secondary">connect</span>
                    <span>(</span>
                    <span>) with me on </span>
                    <span className="text-primary-700">LinkedIn</span>
                    <span className="text-outline">;</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-3 justify-center mt-10">
        {/* Primary Button */}
        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button className="inline-flex items-center gap-2 bg-primary border-2 border-primary transition-colors hover:border-primary-container hover:bg-primary-container  text-on-primary font-medium text-[18px] leading-[1.5] rounded-lg px-6 py-2 cursor-pointer">
            <FaDownload />
            {!isMobile && "Download"} Resume
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
    </section>
  );
};

export default HeroDesktop; 