import React from 'react';
import { content } from '../data/content';
import { FaHeart, FaCoffee } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-8 bg-dark-lighter border-t border-white/5">
            <div className="container-custom text-center">
                <p className="text-gray-400 mb-2">
                    {content.footer.text}
                </p>
                <p className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                    Built with <FaHeart className="text-red-500" /> and lots of <FaCoffee className="text-yellow-600" />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
