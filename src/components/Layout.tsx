import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#121417] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto max-w-[480px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 