// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
// import Navbar from './components/Navbar'
// import Peoples from './components/Peoples'
// import Footer from './components/Footer'
// import About from './components/About'
// import Blog from './components/Blog'
// import Services from './components/Services'
// import Hero from './components/Hero'
// import { useRef } from "react";



// function App() {
//   const aboutRef = useRef(null);
//   const scrollToAbout = () => {
//     aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <>
//       <Router>
//         <Navbar scrollToAbout={scrollToAbout} />
//         <Routes>
//           <Route path="/Blog" element={<Blog />} />
//           <Route path="/Services" element={<Services />} />
//           {/* Add other routes as needed */}
//         </Routes>
//       </Router>

//       <Hero />

//       <section ref={aboutRef}>
//         <About /> {/* This will be your About Us section */}
//       </section>

//       <Peoples />
//       <Footer />
//     </>
//   )
// }

// export default App


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Peoples from './components/Peoples';
// import Footer from './components/Footer';
// import About from './components/About';
// import Blog from './components/Blog';
// import Services from './components/Services';
// import Hero from './components/Hero';
// import { useRef } from 'react';

// function App() {
//   const aboutRef = useRef(null);

//   const scrollToAbout = () => {
//     aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <Router>
//       <Navbar scrollToAbout={scrollToAbout} />
//       <Routes>
//         {/* Home route with all sections */}
//         <Route path="/" element={
//           <>
//             <Hero />
//             <section ref={aboutRef}>
//               <About />
//             </section>
//             <Peoples />
//             <Footer />
//           </>
//         } />
        
//         {/* Individual page routes */}
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={
//           <>
//             <About />
//             <Footer />
//           </>
//         } />
        
//         {/* Add a catch-all route for 404 pages if needed */}
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Peoples from './components/Peoples';
// import Footer from './components/Footer';
// import About from './components/About';
// import Blog from './components/Blog';
// import Services from './components/Services';
// import Hero from './components/Hero';
// import { useRef } from 'react';
// import Stories from './components/Stories';

// function App() {
//   const aboutRef = useRef(null);
  

//   const handleAboutClick = () => {
//     if (location.pathname === '/') {
//       // On home page - smooth scroll to about section
//       aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       // On other pages - show alert popup
//       alert("You can't access the about section from here. Please go to the Home click okay.");
//       window.location.href = '/#about';
//     }
//   };

//   return (
//     <Router>
//       <Navbar handleAboutClick={handleAboutClick} />
//       <Routes>
//         {/* Home route with all sections */}
//         <Route path="/" element={
//           <>
//             <Hero />
//             <section ref={aboutRef}>
//               <About />
//             </section>
//             <Stories/>
//             <Peoples />
//             <Footer />
//           </>
//         } />
        
//         {/* Individual page routes */}
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/services" element={<Services />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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
            <Stories />
            <Peoples />
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
