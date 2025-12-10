import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleFilterChange = (category) => {
        setFilter(category);
        setCurrentIndex(0); // Reset carousel to start when filtering
        if (category === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === category));
        }
    };

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    };

    const ProjectCard = ({ project }) => (
        <div className="group glass-card overflow-hidden h-full flex flex-col">
            {/* Project Image */}
            <div className="relative h-48 sm:h-64 overflow-hidden flex-shrink-0">
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
            <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 line-clamp-3 leading-relaxed transition-colors flex-grow">
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
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-white/5 transition-colors mt-auto">
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
        </div>
    );

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

                {/* Desktop View: Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Mobile View: Carousel */}
                <div className="md:hidden relative px-2">
                    <div className="overflow-hidden min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={filteredProjects[currentIndex].id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                <ProjectCard project={filteredProjects[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons for Mobile */}
                    <div className="flex justify-center items-center gap-8 mt-6">
                        <button
                            onClick={prevProject}
                            className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
                            aria-label="Previous Project"
                        >
                            <FaChevronLeft size={20} />
                        </button>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {currentIndex + 1} / {filteredProjects.length}
                        </span>
                        <button
                            onClick={nextProject}
                            className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
                            aria-label="Next Project"
                        >
                            <FaChevronRight size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
