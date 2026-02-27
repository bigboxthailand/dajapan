"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function DarumaButton() {
    const [showButton, setShowButton] = useState(false);
    const [goalComplete, setGoalComplete] = useState(false);
    const { scrollYProgress } = useScroll();

    // Track if user scrolled past 90% of page
    const eyeProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    useEffect(() => {
        const unsubscribe = eyeProgress.on("change", (v) => {
            setGoalComplete(v >= 0.95);
        });
        return unsubscribe;
    }, [eyeProgress]);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!showButton) return null;

    return (
        <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[95] cursor-pointer"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.85, y: 5, rotate: 15 }}
            title="กลับขึ้นบน (Back to top)"
        >
            <motion.div
                className="relative w-14 h-16"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Daruma body */}
                <svg viewBox="0 0 100 110" className="w-full h-full drop-shadow-lg">
                    {/* Bottom base */}
                    <ellipse cx="50" cy="105" rx="35" ry="5" fill="rgba(0,0,0,0.15)" />

                    {/* Main body */}
                    <ellipse cx="50" cy="58" rx="38" ry="45" fill="#e53e3e" />
                    <ellipse cx="50" cy="58" rx="38" ry="45" fill="url(#bodyGradient)" />

                    {/* Face area */}
                    <ellipse cx="50" cy="48" rx="25" ry="22" fill="#fff5ee" />
                    <ellipse cx="50" cy="48" rx="25" ry="22" fill="url(#faceGradient)" />

                    {/* Left eye (always drawn) */}
                    <circle cx="39" cy="45" r="7" fill="#1a1a2e" />
                    <circle cx="37" cy="43" r="2" fill="white" opacity="0.5" />

                    {/* Right eye (drawn when goalComplete) */}
                    <motion.circle
                        cx="61"
                        cy="45"
                        r="7"
                        fill="#1a1a2e"
                        initial={{ scale: 0 }}
                        animate={{ scale: goalComplete ? 1 : 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        style={{ transformOrigin: "61px 45px" }}
                    />
                    {goalComplete && (
                        <circle cx="59" cy="43" r="2" fill="white" opacity="0.5" />
                    )}

                    {/* Empty eye socket when not complete */}
                    {!goalComplete && (
                        <circle cx="61" cy="45" r="7" fill="none" stroke="#ccc" strokeWidth="1.5" strokeDasharray="3 3" />
                    )}

                    {/* Eyebrows */}
                    <path d="M30 36 Q39 30 48 36" stroke="#1a1a2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M52 36 Q61 30 70 36" stroke="#1a1a2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                    {/* Nose */}
                    <ellipse cx="50" cy="52" rx="2.5" ry="2" fill="#d4896b" />

                    {/* Mouth */}
                    <path d="M42 58 Q50 64 58 58" stroke="#1a1a2e" strokeWidth="2" fill="none" strokeLinecap="round" />

                    {/* Beard lines */}
                    <path d="M38 62 Q42 66 38 70" stroke="#c7b299" strokeWidth="1" fill="none" opacity="0.5" />
                    <path d="M62 62 Q58 66 62 70" stroke="#c7b299" strokeWidth="1" fill="none" opacity="0.5" />

                    {/* Kanji on body */}
                    <text x="50" y="88" textAnchor="middle" fill="#ffd700" fontSize="14" fontWeight="bold" style={{ fontFamily: "serif" }}>
                        福
                    </text>

                    {/* Gradients */}
                    <defs>
                        <radialGradient id="bodyGradient" cx="40%" cy="30%">
                            <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#c53030" stopOpacity="0.3" />
                        </radialGradient>
                        <radialGradient id="faceGradient" cx="40%" cy="30%">
                            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#f5e6d3" stopOpacity="0.2" />
                        </radialGradient>
                    </defs>
                </svg>

                {/* Sparkle when goal complete */}
                {goalComplete && (
                    <>
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full"
                                style={{
                                    background: "#ffd700",
                                    top: `${10 + i * 15}%`,
                                    left: `${70 + (i % 2) * 20}%`,
                                }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                    y: [0, -10, -20],
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.3,
                                    repeat: Infinity,
                                }}
                            />
                        ))}
                    </>
                )}
            </motion.div>

            {/* Tooltip */}
            <div
                className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                    background: "var(--wood)",
                    color: "white",
                }}
            >
                {goalComplete ? "おめでとう! 🎉" : "↑ กลับขึ้นบน"}
            </div>
        </motion.button>
    );
}
