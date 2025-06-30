import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-4 px-4">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold text-white mb-4 font-space-grotesk">Contact</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded bg-[#1A1E23] text-white border border-[#3B4754] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded bg-[#1A1E23] text-white border border-[#3B4754] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="p-2 rounded bg-[#1A1E23] text-white border border-[#3B4754] focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="p-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 