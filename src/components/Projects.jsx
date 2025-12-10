import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const handleFilterChange = (category) => {
        setFilter(category);
        if (category === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === category));
        }
    };

    return (
        <section id="projects" className="py-20 relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Portfolio</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">Featured Projects</h3>

                    {/* Project Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {projectCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleFilterChange(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 scale-105'
                                    : 'bg-gray-200 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Horizontal Carousel Container */}
                <motion.div
                    layout
                    className="flex overflow-x-auto snap-x snap-mandatory pb-12 -mx-4 px-4 scrollbar-hide gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="min-w-[85vw] md:min-w-[450px] snap-center group glass-card overflow-hidden flex-shrink-0"
                            >
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1 bg-dark/80 backdrop-blur-md text-xs font-bold text-white rounded-full border border-white/10">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 line-clamp-3 leading-relaxed transition-colors">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-white/5 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-white/5 transition-colors">
                                        <a
                                            href={project.github}
                                            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:underline transition-all"
                                        >
                                            <FaGithub size={18} /> Source Code
                                        </a>
                                        <a
                                            href={project.live}
                                            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent hover:underline transition-all ml-auto"
                                        >
                                            Live Demo <FaExternalLinkAlt size={14} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Scroll Indicator Hint */}
                <div className="mt-4 flex justify-center gap-2 text-gray-500 text-sm animate-pulse">
                    <span>&larr; Swipe to explore &rarr;</span>
                </div>
            </div>
        </section>
    );
};

export default Projects;
