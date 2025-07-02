import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5 px-4 scroll-m-16">
      <div className="container mx-auto lg:max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-4 lg:mb-8">
          Contact
        </h2>
        <p className="text-lg text-gray-300 mb-4 lg:mb-8">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
        </p>
        <div className="flex justify-start gap-4">
          <a 
            href="mailto:jaswanthsaisattenapalli@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors duration-300"
          >
            <FaEnvelope />
            Email
          </a>
          <a 
            href="https://www.linkedin.com/in/jaswanth-sai-sattenapalli-b74766128/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300"
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