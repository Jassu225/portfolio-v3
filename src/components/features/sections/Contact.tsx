import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '@/lib/data';

const Contact = () => {
  return (
    <section id="contact" className="py-5 px-4 scroll-m-16">
      <div className="container mx-auto lg:max-w-4xl">
        <h2 className="text-3xl font-bold text-on-background mb-4">Contact</h2>
        <p className="text-lg text-on-surface-variant mb-4 lg:mb-8">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities. Feel free to reach out!
        </p>
        <div className="flex justify-start gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-semibold hover:bg-primary-container transition-colors duration-300"
          >
            <FaEnvelope />
            Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-on-secondary transition-colors duration-300"
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
