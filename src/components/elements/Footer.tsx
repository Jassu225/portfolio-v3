import React from 'react';

const Footer = () => {
  return (
      <footer className="bg-background text-center p-4 mt-auto">
    <p className="text-on-surface-variant">
        © {new Date().getFullYear()} Jaswanth Sai Sattenapalli. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer; 