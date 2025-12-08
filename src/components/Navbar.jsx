import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Projects', href: '#projects' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Active section logic
            let current = '';

            // Only track unique hrefs to avoid logic conflicts
            const sections = ['about', 'skills', 'education', 'projects', 'contact'];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is active
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                    }
                }
            }

            if (window.scrollY < 100) {
                current = 'hero';
            }

            if (current) {
                // If it's education, it covers both Education and Experience links
                if (current === 'education') {
                    // Logic to distinguish if needed, but for now highlighting both or just Education is fine
                    // Since Experience maps to #education, we track ID 'education'
                }
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            setIsOpen(false);
            setActiveSection(href.substring(1));
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container-custom flex justify-center items-center relative">
                <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    className="text-2xl font-bold font-sans absolute left-4 md:left-0"
                >
                    <span className="text-white">Hamsa</span>
                    <span className="gradient-text">vardhan</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`nav-link font-medium text-sm tracking-wide transition-all duration-300 relative group ${activeSection === link.href.substring(1)
                                ? 'text-primary'
                                : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden absolute right-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white text-2xl focus:outline-none"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-full left-0 w-full bg-dark-lighter/95 backdrop-blur-xl border-t border-white/10 md:hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`py-2 px-4 rounded-lg transition-colors ${activeSection === link.href.substring(1)
                                        ? 'bg-primary/20 text-white'
                                        : 'text-gray-300 hover:text-primary hover:bg-white/5'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
