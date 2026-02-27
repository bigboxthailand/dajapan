"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OrigamiCrane() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Crane X position follows scroll
    const craneX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["10%", "70%", "20%", "80%", "50%"]);
    const craneY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["15vh", "35vh", "55vh", "70vh", "85vh"]);
    const craneRotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-15, 10, -10, 15, 0]);
    const craneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[80] pointer-events-none">
            <motion.div
                className="absolute"
                style={{
                    left: craneX,
                    top: craneY,
                    rotate: craneRotate,
                    scale: craneScale,
                }}
            >
                {/* Origami Crane SVG */}
                <motion.svg
                    viewBox="0 0 120 80"
                    className="w-16 md:w-20 h-auto drop-shadow-md"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Body */}
                    <polygon points="60,10 30,50 90,50" fill="#fef3e3" stroke="#d4896b" strokeWidth="1" />
                    {/* Left wing */}
                    <motion.polygon
                        points="30,50 5,30 55,40"
                        fill="#fff5ee"
                        stroke="#d4896b"
                        strokeWidth="1"
                        animate={{ points: ["30,50 5,30 55,40", "30,50 5,22 55,38", "30,50 5,30 55,40"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Right wing */}
                    <motion.polygon
                        points="90,50 115,30 65,40"
                        fill="#fff5ee"
                        stroke="#d4896b"
                        strokeWidth="1"
                        animate={{ points: ["90,50 115,30 65,40", "90,50 115,22 65,38", "90,50 115,30 65,40"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    />
                    {/* Tail */}
                    <polygon points="60,10 50,2 55,15" fill="#fef3e3" stroke="#d4896b" strokeWidth="0.5" />
                    {/* Head/Neck */}
                    <polygon points="60,50 55,70 65,70" fill="#fef3e3" stroke="#d4896b" strokeWidth="0.5" />
                    <polygon points="55,70 50,78 65,70" fill="#e53e3e" stroke="#d4896b" strokeWidth="0.5" />

                    {/* Paper fold lines */}
                    <line x1="60" y1="10" x2="60" y2="50" stroke="#d4896b" strokeWidth="0.5" opacity="0.3" />
                    <line x1="30" y1="50" x2="60" y2="30" stroke="#d4896b" strokeWidth="0.5" opacity="0.3" />
                    <line x1="90" y1="50" x2="60" y2="30" stroke="#d4896b" strokeWidth="0.5" opacity="0.3" />
                </motion.svg>

                {/* Trail sparkles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            background: "var(--sakura)",
                            right: -10 - i * 8,
                            top: 20 + i * 5,
                        }}
                        animate={{
                            opacity: [0.6, 0, 0.6],
                            scale: [1, 0.5, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.3,
                            repeat: Infinity,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}
