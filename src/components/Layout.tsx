import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { GlobalMinimalBackground } from './GlobalMinimalBackground';

export const Layout: React.FC = () => {
  return (
    <div className="page-wrapper" style={{ position: 'relative' }}>
      <GlobalMinimalBackground />
      <Nav />
      <main style={{ flex: '1 0 auto', position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
