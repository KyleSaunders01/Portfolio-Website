import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('intro'); // Track the current section
    const [menuIsOpen, setMenuIsOpen] = useState(false); //state for mobile menu

    // Function to handle scroll and update active section
    const handleScroll = () => {
        const sections = document.querySelectorAll('section'); // Assuming your sections have <section> tags

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                setActiveSection(section.id); // Set the active section based on the section's id
            }
        });
    };

    // Add scroll event listener on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Clean up
    }, []);


    // Animation setup when component mounts
    useEffect(() => {
        anime({
            targets: '.s-header',
            translateY: [-100, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1000
        });
    }, []);

    // Function to toggle the mobile menu
    const toggleMenu = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setMenuIsOpen(!menuIsOpen); // Toggle menu open/close
    };

    // Function to close menu when a link is clicked in mobile mode
    const handleLinkClick = () => {
        if (window.innerWidth <= 800) {
            setMenuIsOpen(false); // Close the menu
        }
    };

    return (
        <header className={`s-header ${menuIsOpen ? 'menu-is-open' : ''}`}>
            {/* Mobile Header */}
            {/*TODO*/}
            {/*bg-gray-900 should be in class but it bugs out when used, figure out the bug*/}
            <div className="header-mobile flex justify-between items-center text-white md:hidden">
                <span className="mobile-home-link text-xl font-bold">
                  <a href="index.html">Kyle.</a>
                </span>

                <a className={`mobile-menu-toggle cursor-pointer ${menuIsOpen ? 'is-clicked' : ''}`} href="#0" onClick={toggleMenu}>
                    <span>Menu</span>
                </a>
            </div>

            {/* Main Navigation */}
            <div className="row wide main-nav-wrap ${menuIsOpen ? 'is-open' : ''}">
                <nav className="column lg-12 main-nav">
                    <ul className="flex justify-center py-2 text-lg">
                        <li className="home-link">
                            <a href="index.html" className=" font-bold hover:text-blue-500">
                                Kyle.
                            </a>
                        </li>
                        <li className={activeSection === 'intro' ? 'current' : ''}>
                            <a href="#intro" className="smoothscroll hover:text-blue-500" onClick={handleLinkClick}>Intro</a>
                        </li>
                        <li className={activeSection === 'about' ? 'current' : ''}>
                            <a href="#about" className="smoothscroll hover:text-blue-500" onClick={handleLinkClick}>About</a>
                        </li>
                        <li className={activeSection === 'works' ? 'current' : ''}>
                            <a href="#works" className="smoothscroll hover:text-blue-500" onClick={handleLinkClick}>Works</a>
                        </li>
                        <li className={activeSection === 'contact' ? 'current' : ''}>
                            <a href="#contact" className="smoothscroll hover:text-blue-500" onClick={handleLinkClick}>Say Hello</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
