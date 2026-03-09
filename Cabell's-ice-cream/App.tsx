import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Reviews from './components/Reviews';
import LocationSection from './components/LocationSection';
import AboutSection from './components/AboutSection';
import Gallery from './components/Gallery';
import ChatAssistant from './components/ChatAssistant';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Reviews />
                {/* Mini Menu Preview */}
                <div className="py-12 bg-ice-cream-yellow/10">
                   <div className="text-center">
                     <h2 className="text-3xl font-bold text-gray-800 mb-6">Trending Treats</h2>
                     <a href="#/menu" className="text-pink-600 font-semibold hover:underline">See Full Menu &rarr;</a>
                   </div>
                </div>
              </>
            } />
            <Route path="/menu" element={<MenuSection />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/location" element={<LocationSection />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<LocationSection />} /> {/* Reusing Location for contact form */}
          </Routes>
        </main>
        <ChatAssistant />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;