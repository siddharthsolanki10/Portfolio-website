import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SEO from './SEO';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WorkList } from './pages/WorkList';
import { WorkDetail } from './pages/WorkDetail';
import { BlogList } from './pages/BlogList';
import { BlogDetail } from './pages/BlogDetail';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEO />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<WorkList />} />
          <Route path="work/:slug" element={<WorkDetail />} />
          <Route path="services" element={<Navigate to="/work" replace />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
