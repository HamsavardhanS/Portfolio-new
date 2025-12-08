import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { content } from '../data/content';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-dark z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_100%)] z-10" />
            </div>

            <div className="container-custom relative z-20 text-center">
                <motion.div
                    style={{ y, opacity }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium"
                    >
                        👋 Welcome to my Digital Universe
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                        I'm <span className="gradient-text">{content.hero.name}</span>
                    </h1>

                    <motion.div
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8 h-8"
                    >
                        {content.hero.role.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.1,
                                    delay: index * 0.05 + 0.5,
                                    ease: "linear"
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        {content.hero.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://drive.google.com/file/d/11tMXO-9m70tkR3iB2WzXNpZJpT6qdiJO/view?usp=drive_link"
                            className="btn-primary flex items-center gap-2 group"
                        >
                            <FaDownload className="group-hover:-translate-y-1 transition-transform" />
                            {content.hero.cta1}
                        </a>

                        <a
                            href="#contact"
                            className="btn-outline flex items-center gap-2 group"
                        >
                            {content.hero.cta2}
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-gray-500"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
