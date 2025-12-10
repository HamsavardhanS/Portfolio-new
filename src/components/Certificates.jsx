import React from 'react';

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

    return (
        <section id="certificates" className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                    Certificates & Achievements
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden group hover:shadow-primary/10 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={cert.image}
                                    onError={(e) => { e.target.src = "https://placehold.co/600x400/2a2a2a/ffffff?text=Certificate"; }}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                                <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors">{cert.date}</p>

                                <a
                                    href={cert.link}
                                    className="inline-block w-full text-center py-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-medium transition-colors border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
