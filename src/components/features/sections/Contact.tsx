import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5 px-4 scroll-m-16">
      <div className="container mx-auto lg:max-w-4xl">
        <h2 className="text-3xl font-bold text-[#E0E0E0] mb-4 lg:mb-8">
          Contact
        </h2>
        <p className="text-lg text-[#CCCCCC] mb-4 lg:mb-8">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
        </p>
        <div className="flex justify-start gap-4">
          <a 
            href="mailto:jaswanthsaisattenapalli@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3E91FF] text-[#003263] font-semibold hover:bg-[#005CCB] transition-colors duration-300"
          >
            <FaEnvelope />
            Email
          </a>
          <a 
            href="https://www.linkedin.com/in/jaswanth-sai-sattenapalli-b74766128/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#5A7FBA] text-[#5A7FBA] font-semibold hover:bg-[#5A7FBA] hover:text-[#1B2A4A] transition-colors duration-300"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 