import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { content } from '../data/content';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle, FaInstagram, FaReddit } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Replace with your actual Service ID, Template ID, and Public Key from EmailJS
        // For now, we'll simulate a success response to show the UI behavior

        /* 
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              setStatus('success');
              form.current.reset();
              setTimeout(() => setStatus(null), 5000);
          }, (error) => {
              setStatus('error');
              setTimeout(() => setStatus(null), 5000);
          });
        */

        // Simulation
        setTimeout(() => {
            setStatus('success');
            form.current.reset();
            setTimeout(() => setStatus(null), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-dark-lighter relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Connect</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h3>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-2xl font-bold text-white mb-6">Let's talk about everything!</h4>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm available for freelance projects and full-time opportunities. Drop me a line and let's discuss how we can build something great together.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h5 className="text-white font-medium">Email</h5>
                                    <a href={`mailto:${content.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                                        {content.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h5 className="text-white font-medium">Location</h5>
                                    <p className="text-gray-400">Coimbatore,Tamilnadu, India & Remote-Work</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h5 className="text-white font-medium mb-4">Follow Me</h5>
                            <div className="flex gap-4">
                                <a
                                    href={content.contact.social.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 bg-dark border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-dark transition-all duration-300 hover:scale-110"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href={content.contact.social.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 bg-dark border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 hover:scale-110"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href={content.contact.social.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 bg-dark border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 hover:scale-110"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href={content.contact.social.leetcode}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 bg-dark border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-all duration-300 hover:scale-110"
                                >
                                    <SiLeetcode />
                                </a>
                                <a
                                    href={content.contact.social.reddit}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 bg-dark border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 hover:scale-110"
                                >
                                    <FaReddit />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex items-center gap-2 text-green-400 text-sm font-medium bg-green-500/10 p-3 rounded-lg border border-green-500/20"
                                    >
                                        <FaCheckCircle /> Message sent successfully!
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex items-center gap-2 text-red-400 text-sm font-medium bg-red-500/10 p-3 rounded-lg border border-red-500/20"
                                    >
                                        <FaExclamationCircle /> Failed to send message. Please try again.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
