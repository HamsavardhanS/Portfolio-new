import React from 'react';

const Resume = () => {
    const timeline = [
        {
            title: 'Mobile App Developer using Flutter',
            company: 'Suguna-Foods',
            date: '2025',
            description: 'Faq Anser Bot for Vendors in their Company'
        }
    ];

    return (
        <section id="resume" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    My Resume
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Download Card */}
                    <div className="glass-card p-8 text-center">
                        <div className="text-6xl mb-4">📄</div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Download My Resume</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
                            Get a comprehensive overview of my skills, experience, and education.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/11tMXO-9m70tkR3iB2WzXNpZJpT6qdiJO/view?usp=drive_link"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-white rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 14L5 9H8V4H12V9H15L10 14Z" fill="currentColor" />
                                <path d="M4 16H16V18H4V16Z" fill="currentColor" />
                            </svg>
                            Download Resume
                        </a>
                    </div>

                    {/* Timeline */}
                    <div className="glass-card p-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">My Professional Journey</h3>
                        <div className="space-y-6">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative pl-8 border-l-2 border-primary">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">{item.title}</h4>
                                    <p className="text-primary font-semibold">{item.company}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 transition-colors">{item.date}</p>
                                    <p className="text-gray-600 dark:text-gray-300 transition-colors">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
