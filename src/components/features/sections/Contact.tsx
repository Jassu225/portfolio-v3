import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5 px-4 scroll-m-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 lg:mb-8">
          Contact
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mb-4 lg:mb-8">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
        </p>
        <div className="flex justify-start gap-4">
          <a 
            href="mailto:jaswanthsaisattenapalli@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors border border-gray-600"
          >
            <FaEnvelope />
            Email
          </a>
          <a 
            href="https://www.linkedin.com/in/jaswanth-sai-sattenapalli-b74766128/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors border border-gray-600"
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