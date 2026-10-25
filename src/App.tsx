import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { FincaPage } from './pages/FincaPage';
import { StaysPage } from './pages/StaysPage';
import { CelebrationsPage } from './pages/CelebrationsPage';
import { CorporatePage } from './pages/CorporatePage';
import { InquiryPage } from './pages/InquiryPage';
import { FaqPage } from './pages/FaqPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F5F2EA] text-[#51483D]">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/la-finca" element={<FincaPage />} />
            <Route path="/estades" element={<StaysPage />} />
            <Route path="/celebracions" element={<CelebrationsPage />} />
            <Route path="/encuentres" element={<CorporatePage />} />
            <Route path="/sollicitud" element={<InquiryPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
