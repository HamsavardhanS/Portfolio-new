import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-lighter relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image Side */}
                    <div className="relative group">
                        <div className="relative z-10 w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-white/10 glass-card">
                            <img
                                src="/src/assets/my_avatar.jpg" // Place your image in src/assets/my_avatar.jpg
                                onError={(e) => { e.target.src = "https://placehold.co/600x600/1a1a1a/ffffff?text=HV"; }}
                                alt={content.hero.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl -z-0" />
                        <div className="absolute bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-0" />
                    </div>

                    {/* Content Side */}
                    <div>
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Who I Am</h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            {content.about.title}
                        </h3>

                        <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                            {content.about.bio.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>

                        <h4 className="text-xl font-semibold text-white mb-4">Interests & Passions</h4>
                        <div className="flex flex-wrap gap-3">
                            {content.about.interests.map((interest, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-primary/20 hover:border-primary/50 hover:text-white transition-all cursor-default"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
