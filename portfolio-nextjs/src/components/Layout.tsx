// portfolio-nextjs/src/components/Layout.tsx
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50"> {/* Changed main bg slightly */}
      <Header />
      <Navbar />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
