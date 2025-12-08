import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hey! I'm Hamsavardhan's Assistant. Want to know about his skills, projects, or resume?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const quickReplies = [
        "Tell me about skills",
        "Show me projects",
        "How to contact?"
    ];

    const handleSend = (text) => {
        const userMsg = text || input;
        if (!userMsg.trim()) return;

        setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
        setInput('');

        // Simple auto-reply logic
        setTimeout(() => {
            let botResponse = "Thanks for asking! Check out the sections above for more details.";
            const lowerMsg = userMsg.toLowerCase();

            if (lowerMsg.includes('skill') || lowerMsg.includes('tech')) {
                botResponse = "Hamsavardhan is proficient in React, Node.js, Spring Boot, and AI integration. Check the Skills section!";
            } else if (lowerMsg.includes('project') || lowerMsg.includes('work')) {
                botResponse = "He has built cool stuff like Traffic Detection App and AI Chatbots. See the Projects section.";
            } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('hire')) {
                botResponse = "You can reach him at hamsasanker06@gmail.com or use the Contact form below!";
            } else if (lowerMsg.includes('resume') || lowerMsg.includes('cv')) {
                botResponse = "You can download the resume from the Hero section button!";
            }
            else {
                botResponse = "I'm sorry, I don't understand. I'll try my best to help you!";
            }

            setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
        }, 1000);
    };

    return (
        <>
            <motion.button
                className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-secondary to-accent text-white rounded-full shadow-lg hover:shadow-accent/40 transition-all"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-dark-lighter border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-secondary to-accent p-4 flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-full">
                                <FaRobot className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Hamsa's Jarvis</h3>
                                <p className="text-xs text-white/80">Online | AI Powered</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark/50">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-primary text-white rounded-br-none'
                                            : 'bg-white/10 text-gray-200 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />

                            {/* Quick Replies */}
                            {messages.length === 1 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {quickReplies.map((reply, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleSend(reply)}
                                            className="text-xs border border-primary/50 text-primary hover:bg-primary hover:text-white px-3 py-1.5 rounded-full transition-colors"
                                        >
                                            {reply}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-dark-lighter border-t border-white/10">
                            <form
                                className="flex items-center gap-2"
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask something..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="p-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors"
                                >
                                    <FaPaperPlane size={14} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
