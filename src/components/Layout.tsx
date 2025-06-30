import React from 'react';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#121417] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto lg:max-w-4xl px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 