import React from 'react';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 