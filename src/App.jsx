

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Peoples from './components/Peoples';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import Services from './components/Services';
import Hero from './components/Hero';
import { useRef, useEffect } from 'react';
import Stories from './components/Stories';

function ScrollToHash({ aboutRef }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#aboutus') {
      setTimeout(() => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // small delay to ensure DOM is loaded
    }
  }, [location, aboutRef]);

  return null;
}

function AppContent() {
  const aboutRef = useRef(null);

  return (
    <>
      <Navbar />
      <ScrollToHash aboutRef={aboutRef} />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <section ref={aboutRef}>
              <About />
            </section>
            {/* <Stories /> */}
            {/* <Peoples /> */}
            <Footer />
          </>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
