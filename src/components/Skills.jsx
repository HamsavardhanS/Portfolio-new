import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
    // Flatten all skills into a single array for the marquee
    const allSkills = skills.flatMap(category => category.items);

    // Duplicate the array to create a seamless loop
    const marqueeSkills = [...allSkills, ...allSkills, ...allSkills];

    return (
        <section id="skills" className="py-20 bg-dark relative overflow-hidden">
            <div className="container-custom mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">My Arsenal</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Skills & Technologies</h3>
                </motion.div>
            </div>

            {/* Marquee Container */}
            <div className="relative flex overflow-hidden py-8 bg-white/5 backdrop-blur-sm -rotate-1 transform scale-110 border-y border-white/5">

                {/* Gradient Overlays for smooth fade effect at edges */}
                <div className="absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-dark to-transparent" />
                <div className="absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-dark to-transparent" />

                <motion.div
                    className="flex gap-12 sm:gap-20 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }} // Adjust value based on width
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20, // Adjust speed
                            ease: "linear",
                        },
                    }}
                >
                    {marqueeSkills.map((skill, idx) => (
                        <div key={idx} className="group relative flex flex-col items-center justify-center gap-2">
                            <div className="text-5xl md:text-6xl text-gray-400 group-hover:text-primary transition-all duration-300 transform group-hover:scale-110 max-w-[80px] flex justify-center">
                                <skill.icon />
                            </div>
                            <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 text-sm font-medium text-white transition-opacity duration-300 whitespace-nowrap bg-dark/80 px-2 py-1 rounded">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Second Row (Reverse Direction) - Optional, enabled for more visual impact */}
            </div>

            {/* Optional: Second row moving in opposite direction for visual density */}
            <div className="relative flex overflow-hidden py-8 mt-8 bg-white/5 backdrop-blur-sm rotate-1 transform scale-110 border-y border-white/5">
                <div className="absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-dark to-transparent" />
                <div className="absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-dark to-transparent" />

                <motion.div
                    className="flex gap-12 sm:gap-20 items-center whitespace-nowrap"
                    animate={{ x: [-1000, 0] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {marqueeSkills.map((skill, idx) => (
                        <div key={idx} className="group relative flex flex-col items-center justify-center gap-2">
                            <div className="text-5xl md:text-6xl text-gray-400 group-hover:text-accent transition-all duration-300 transform group-hover:scale-110 max-w-[80px] flex justify-center">
                                <skill.icon />
                            </div>
                            <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 text-sm font-medium text-white transition-opacity duration-300 whitespace-nowrap bg-dark/80 px-2 py-1 rounded">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
