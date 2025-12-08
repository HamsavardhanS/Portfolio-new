import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { content } from '../data/content';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-dark-lighter relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">My Journey</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Education & Experience</h3>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                <FaGraduationCap size={24} />
                            </div>
                            <h4 className="text-2xl font-bold text-white">Education</h4>
                        </div>

                        <div className="space-y-8 pl-4 border-l-2 border-white/5 relative">
                            {[
                                {
                                    degree: "Bachelor of Engineering",
                                    field: "Computer Science",
                                    details: "Passionate about innovation & real-world problem-solving",
                                    year: "2023 - 2027",
                                    place: "Sri Krishna College of Technology - Coimbatore"
                                },
                                {
                                    degree: "HSC",
                                    field: "Computer Science",
                                    details: "Intrested in ComputerScience",
                                    year: "2021 - 2023",
                                    place: "Maruthi Hr.Secondary School - Salem"
                                },
                                {
                                    degree: "School",
                                    field: "V-X",
                                    details: "Securing School Topper and School-Time Achievement",
                                    year: "2016 - 2021",
                                    place: "Maruthi Matriculation School - Salem"
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute top-0 left-[-9px] w-4 h-4 bg-dark border-2 border-primary rounded-full" />
                                    <div className="glass-card p-6 hover:-translate-y-1 transition-transform">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
                                            {item.year}
                                        </span>
                                        <h5 className="text-xl font-bold text-white mb-1">{item.degree}</h5>
                                        <p className="text-gray-400 font-medium mb-2">{item.field}</p>
                                        <p className="text-gray-500 text-sm mb-4">{item.place}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {item.details}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                                <FaBriefcase size={24} />
                            </div>
                            <h4 className="text-2xl font-bold text-white">Experience</h4>
                        </div>

                        <div className="space-y-8 pl-4 border-l-2 border-white/5 relative">
                            {content.experience.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute top-0 left-[-9px] w-4 h-4 bg-dark border-2 border-secondary rounded-full" />
                                    <div className="glass-card p-6 hover:-translate-y-1 transition-transform">
                                        <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-3">
                                            {item.period}
                                        </span>
                                        <h5 className="text-xl font-bold text-white mb-1">{item.role}</h5>
                                        <p className="text-gray-400 font-medium mb-4">{item.company}</p>
                                        <ul className="space-y-2">
                                            {item.description.map((point, pointIdx) => (
                                                <li key={pointIdx} className="text-gray-400 text-sm flex gap-2">
                                                    <span className="text-secondary mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary block flex-shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
