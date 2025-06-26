import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121417] text-center p-4 mt-auto">
      <div className="container mx-auto text-gray-400">
        <p>© {new Date().getFullYear()} Ethan Carter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 