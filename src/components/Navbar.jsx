import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Active section logic
            let current = '';

            // Only track unique hrefs to avoid logic conflicts
            const sections = ['about', 'skills', 'education', 'certificates', 'projects', 'resume', 'contact'];

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
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container-custom flex justify-center items-center relative">
                <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    className="text-2xl font-bold font-sans absolute left-4 md:left-0"
                >
                    <span className="text-gray-900 dark:text-white">Hamsa</span>
                    <span className="gradient-text">vardhan</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`nav-link font-medium text-sm tracking-wide transition-all duration-300 relative group ${activeSection === link.href.substring(1)
                                ? 'text-primary'
                                : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />
                        </a>
                    ))}

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-white/20 transition-all"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>
                </div>

                {/* Mobile Toggle & Theme */}
                <div className="md:hidden absolute right-4 flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-200"
                    >
                        {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-900 dark:text-white text-2xl focus:outline-none"
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
                        className="absolute top-full left-0 w-full bg-white/95 dark:bg-dark-lighter/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 md:hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`py-2 px-4 rounded-lg transition-colors ${activeSection === link.href.substring(1)
                                        ? 'bg-primary/20 text-primary dark:text-white'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-black/5 dark:hover:bg-white/5'
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
