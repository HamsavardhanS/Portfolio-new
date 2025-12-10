import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Certificates = () => {
    const certificates = [
        {
            title: 'Full-Stack Web Development',
            issuer: 'Coursera',
            date: '2023',
            image: '/src/assets/cert1.jpg', // Replace with actual image path
            link: '#'
        },
        {
            title: 'React - The Complete Guide',
            issuer: 'Udemy',
            date: '2023',
            image: '/src/assets/cert2.jpg',
            link: '#'
        },
        {
            title: 'Node.js Developer',
            issuer: 'LinkedIn Learning',
            date: '2022',
            image: '/src/assets/cert3.jpg',
            link: '#'
        },
        {
            title: 'Python Programming',
            issuer: 'Codecademy',
            date: '2022',
            image: '/src/assets/cert4.jpg',
            link: '#'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    // Update items per page based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3); // Desktop
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2); // Tablet
            } else {
                setItemsPerPage(1); // Mobile
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextCert = () => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
    };

    const prevCert = () => {
        setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    // Calculate visible certificates with circular wrapping
    const getVisibleCertificates = () => {
        const visible = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % certificates.length;
            visible.push(certificates[index]);
        }
        return visible;
    };

    const CertificateCard = ({ cert }) => (
        <div className="glass-card overflow-hidden group hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col">
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                    src={cert.image}
                    onError={(e) => { e.target.src = "https://placehold.co/600x400/2a2a2a/ffffff?text=Certificate"; }}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors">{cert.date}</p>

                <a
                    href={cert.link}
                    className="mt-auto inline-block w-full text-center py-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-medium transition-colors border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20"
                >
                    View Certificate
                </a>
            </div>
        </div>
    );

    return (
        <section id="certificates" className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    Certificates & Achievements
                </h2>

                {/* Carousel Container */}
                <div className="relative px-2">
                    <div className="overflow-hidden min-h-[450px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence mode='popLayout' initial={false}>
                                {getVisibleCertificates().map((cert, idx) => (
                                    <motion.div
                                        key={`${cert.title}-index-${currentIndex + idx}`} // Unique key to force re-render for animation
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-full"
                                    >
                                        <CertificateCard cert={cert} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-8 mt-8">
                        <button
                            onClick={prevCert}
                            className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
                            aria-label="Previous Certificate"
                        >
                            <FaChevronLeft size={20} />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex gap-2">
                            {certificates.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                            ? 'w-6 bg-primary'
                                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                                        }`}
                                    aria-label={`Go to certificate ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextCert}
                            className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
                            aria-label="Next Certificate"
                        >
                            <FaChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
