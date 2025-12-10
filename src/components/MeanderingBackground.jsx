import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const MeanderingBackground = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [docHeight, setDocHeight] = useState(0);

    useEffect(() => {
        // Use ResizeObserver for more accurate height tracking of the container
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setDocHeight(entry.contentRect.height);
            }
        });

        // Observe the body or the #root element
        const root = document.getElementById('root');
        if (root) {
            observer.observe(root);
            setDocHeight(root.scrollHeight); // Initial set
        }

        return () => observer.disconnect();
    }, []);

    const width = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const center = width / 2;
    const amp = width * 0.35;
    const waveHeight = 1200;
    // Calculate exact number of waves needed to cover height, avoid massive overshoot
    const numWaves = Math.ceil(docHeight / waveHeight) + 1;

    let d = `M ${center} 0`;

    for (let i = 0; i < numWaves; i++) {
        const startY = i * waveHeight;
        const endY = (i + 1) * waveHeight;
        const midY = startY + (waveHeight / 2);

        // Go Left
        d += ` C ${center - amp} ${startY + (waveHeight * 0.25)}, ${center - amp} ${midY - (waveHeight * 0.25)}, ${center} ${midY}`;
        // Go Right
        d += ` C ${center + amp} ${midY + (waveHeight * 0.25)}, ${center + amp} ${endY - (waveHeight * 0.25)}, ${center} ${endY}`;
    }

    // Don't render if height is 0
    if (docHeight === 0) return null;

    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
            <svg
                width="100%"
                height={docHeight}
                className="absolute top-0 left-0"
                preserveAspectRatio="none"
                style={{ height: '100%' }} // Force SVG to match container height
            >
                <defs>
                    <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#667eea" stopOpacity="0" />
                        <stop offset="10%" stopColor="#667eea" stopOpacity="0.5" />
                        <stop offset="50%" stopColor="#f093fb" stopOpacity="1" />
                        <stop offset="90%" stopColor="#764ba2" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#764ba2" stopOpacity="0" />
                    </linearGradient>
                </defs>

                <path
                    d={d}
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="4"
                    fill="none"
                />

                <motion.path
                    d={d}
                    stroke="url(#timelineGradient)"
                    strokeWidth="4"
                    fill="none"
                    style={{
                        pathLength: scaleY,
                        filter: 'drop-shadow(0 0 10px rgba(240, 147, 251, 0.5))'
                    }}
                />
            </svg>
        </div>
    );
};

export default MeanderingBackground;
