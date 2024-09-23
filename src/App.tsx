import React, { useEffect, useState } from 'react';
import anime from "animejs";
import Header from "./components/Header";
import Intro from "./components/home/Intro";
import About from "./components/home/About";
import Works from "./components/home/Works";
import Contact from "./components/home/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
    // Set a loading state to control preloader visibility
    const [loading, setLoading] = useState(true);

    // Hide the preloader once the page is fully loaded
    useEffect(() => {
        const handlePageLoad = () => {
            setLoading(false); // Page has loaded, hide the preloader
        };

        // If the page is already loaded, set loading to false
        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            // Add event listener for when the page finishes loading
            window.addEventListener('load', handlePageLoad);
            // Clean up the event listener when the component unmounts
            return () => window.removeEventListener('load', handlePageLoad);
        }
    }, []);

    // Circles animation
    useEffect(() => {
        if (!loading) {
            anime({
                targets: '.circles span',
                keyframes: [
                    { opacity: [0, 0.3] }, // Fade in to 0.3 opacity
                    { opacity: [0.3, 0.1] }, // Fade back to 0.1 opacity
                ],
                delay: anime.stagger(100, { direction: 'reverse' }), // Staggered animation
                easing: 'easeInOutQuad', // Smoother easing
                duration: 1500 // Animation duration for each span
            });
        }
    }, [loading]); // Ensure animation runs after loading is complete

    return (
      <div id="top">
          {/* Preloader */}
          {loading && (
              <div id="preloader">
                  <div id="loader"></div>
              </div>
          )}

          {/* Page Wrapper */}
          {!loading && (
              <div className="s-pagewrap">
                  {/* Circles Animation (if needed) */}
                  <div className="circles">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>

                  {/* Header */}
                  <Header/>

                  {/* Main Content */}
                  <main className="s-content">
                      {/* Intro Section */}
                      <Intro/>

                      {/* About Section */}
                      <About/>

                      {/* Works Section */}
                      <Works/>

                      {/* Contact Section */}
                      <Contact/>
                  </main>

                  {/* Footer */}
                  <Footer/>
              </div>
          )}
      </div>
    );
};

export default App;
