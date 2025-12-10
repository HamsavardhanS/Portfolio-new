import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const MeanderingBackground = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Create a path that winds down the screen
    // We'll use a simple SVG path that curves left and right
    // This expects the container to be very tall (the full height of the app)

    // To make it truly responsive and "meander" through sections, we ideally need to know section positions.
    // For a visual background effect, we can approximate with a long repeating curve.

    // Let's create a path for a standard long page. 
    // We will use a pattern or a very long path string.

    const [pathLength, setPathLength] = useState(0);

    // Height calculation is tricky for a fixed background covering scrollable content.
    // Instead, let's make a fixed container with a path that "draws" itself or moves.
    // OR: A fixed SVG that stays on screen, but the line animates?
    // The user said "timeline theme... turn from left to right for each section".
    // This implies the line physically connects sections which are spaced out.

    // Strategy: An absolute positioned SVG that spans the entire document height.
    const [docHeight, setDocHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            const body = document.body;
            const html = document.documentElement;
            const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            setDocHeight(height);
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        // Recalculate periodically in case of lazy loaded content resizing page
        const interval = setInterval(updateHeight, 2000);

        return () => {
            window.removeEventListener('resize', updateHeight);
            clearInterval(interval);
        };
    }, []);

    // Generate a path that zig-zags
    // Start top center
    // Curve to Left (Section 1) -> Right (Section 2) -> Left (Section 3) ...
    // Sections: Hero, About, Skills, Education, Projects, Certificates, Resume, Contact
    // Approx 8 turns.

    const width = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const center = width / 2;
    const amp = width * 0.35; // Amplitude of the curve (how far left/right)

    // We can construct a cubic bezier curve string
    // M center 0 
    // C ...

    // Simple sine wave approximation using cubic beziers
    // height of one "wave" (2 sections)
    const waveHeight = 1200;
    const numWaves = Math.ceil(docHeight / waveHeight) + 1;

    let d = `M ${center} 0`;

    for (let i = 0; i < numWaves; i++) {
        const startY = i * waveHeight;
        const endY = (i + 1) * waveHeight;
        const midY = startY + (waveHeight / 2);

        // Curve to Left first? Then Right.
        // Q control-point end-point
        // C cp1 cp2 end

        // Go Left
        d += ` C ${center - amp} ${startY + (waveHeight * 0.25)}, ${center - amp} ${midY - (waveHeight * 0.25)}, ${center} ${midY}`;
        // Go Right
        d += ` C ${center + amp} ${midY + (waveHeight * 0.25)}, ${center + amp} ${endY - (waveHeight * 0.25)}, ${center} ${endY}`;
    }

    return (
        <div className="absolute top-0 left-0 w-full z-0 pointer-events-none overflow-hidden" style={{ height: docHeight }}>
            <svg
                width="100%"
                height={docHeight}
                className="absolute top-0 left-0"
                preserveAspectRatio="none"
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

                {/* Background Track (dim) */}
                <path
                    d={d}
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="4"
                    fill="none"
                />

                {/* Active Path (glowing) */}
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
