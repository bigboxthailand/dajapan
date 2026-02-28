"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function NorenTransition() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Curtain panels slide open as user scrolls
    const leftX = useTransform(scrollYProgress, [0, 0.4, 0.6], ["0%", "0%", "-100%"]);
    const rightX = useTransform(scrollYProgress, [0, 0.4, 0.6], ["0%", "0%", "100%"]);
    const curtainOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-[200vh]" id="noren-transition">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                {/* Background behind curtains */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "var(--background)",
                        backgroundImage: "radial-gradient(circle at center, var(--pink-light) 0%, var(--background) 100%)",
                    }}
                />

                {/* Left Curtain */}
                <motion.div
                    style={{ x: leftX, opacity: curtainOpacity }}
                    className="absolute left-0 top-0 w-1/2 h-full z-20"
                >
                    <div
                        className="w-full h-full relative"
                        style={{
                            background: "linear-gradient(135deg, #8B0000 0%, #B22222 30%, #8B0000 60%, #6B0000 100%)",
                        }}
                    >
                        {/* Noren pattern - left panel */}
                        <div className="absolute inset-0 flex flex-col items-end">
                            {/* Fabric folds */}
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute h-full"
                                    style={{
                                        right: `${i * 18}%`,
                                        width: "2px",
                                        background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.15), transparent)",
                                    }}
                                />
                            ))}

                            {/* Top bar */}
                            <div
                                className="absolute top-0 left-0 w-full h-6"
                                style={{
                                    background: "linear-gradient(180deg, #4a2c2a, #3a1c1a)",
                                    borderBottom: "3px solid #2a0c0a",
                                }}
                            />

                            {/* Noren Text - Thai side */}
                            <div className="absolute top-1/3 right-6 md:right-10 flex flex-col items-end gap-4">
                                <span
                                    className="text-lg md:text-2xl text-white/40"
                                    style={{ fontFamily: "var(--font-sans-jp)", writingMode: "vertical-rl" }}
                                >
                                    เปิดประตู
                                </span>
                                <span
                                    className="text-lg md:text-2xl text-white/40"
                                    style={{ fontFamily: "var(--font-sans-jp)", writingMode: "vertical-rl" }}
                                >
                                    สู่โลกใบใหม่
                                </span>
                            </div>

                            {/* Bottom scallop shape */}
                            <svg
                                className="absolute bottom-0 left-0 w-full"
                                viewBox="0 0 200 40"
                                preserveAspectRatio="none"
                                style={{ height: "60px" }}
                            >
                                <path
                                    d="M0 0 Q25 40 50 0 Q75 40 100 0 Q125 40 150 0 Q175 40 200 0 L200 40 L0 40 Z"
                                    fill="#8B0000"
                                />
                            </svg>
                        </div>
                    </div>
                </motion.div>

                {/* Right Curtain */}
                <motion.div
                    style={{ x: rightX, opacity: curtainOpacity }}
                    className="absolute right-0 top-0 w-1/2 h-full z-20"
                >
                    <div
                        className="w-full h-full relative"
                        style={{
                            background: "linear-gradient(225deg, #8B0000 0%, #B22222 30%, #8B0000 60%, #6B0000 100%)",
                        }}
                    >
                        {/* Noren pattern - right panel */}
                        <div className="absolute inset-0 flex flex-col items-start">
                            {/* Fabric folds */}
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute h-full"
                                    style={{
                                        left: `${i * 18}%`,
                                        width: "2px",
                                        background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.15), transparent)",
                                    }}
                                />
                            ))}

                            {/* Top bar */}
                            <div
                                className="absolute top-0 left-0 w-full h-6"
                                style={{
                                    background: "linear-gradient(180deg, #4a2c2a, #3a1c1a)",
                                    borderBottom: "3px solid #2a0c0a",
                                }}
                            />

                            {/* Noren Text - Japanese side */}
                            <div className="absolute top-1/3 left-6 md:left-10 flex flex-col items-start gap-4">
                                <span
                                    className="text-lg md:text-2xl text-white/40"
                                    style={{ fontFamily: "var(--font-mincho)", writingMode: "vertical-rl" }}
                                >
                                    新たな世界への
                                </span>
                                <span
                                    className="text-lg md:text-2xl text-white/40"
                                    style={{ fontFamily: "var(--font-mincho)", writingMode: "vertical-rl" }}
                                >
                                    扉を開く
                                </span>
                            </div>

                            {/* Bottom scallop shape */}
                            <svg
                                className="absolute bottom-0 left-0 w-full"
                                viewBox="0 0 200 40"
                                preserveAspectRatio="none"
                                style={{ height: "60px" }}
                            >
                                <path
                                    d="M0 0 Q25 40 50 0 Q75 40 100 0 Q125 40 150 0 Q175 40 200 0 L200 40 L0 40 Z"
                                    fill="#8B0000"
                                />
                            </svg>
                        </div>
                    </div>
                </motion.div>

                {/* Center seam removed as requested */}

                {/* Revealed content behind curtains */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
                            scale: useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1]),
                        }}
                        className="text-center px-8"
                    >
                        <p
                            className="text-xl md:text-2xl mb-2 opacity-80"
                            style={{ fontFamily: "var(--font-mincho)", color: "var(--matcha)" }}
                        >
                            新たな世界への扉を開く
                        </p>
                        <h2
                            className="text-3xl md:text-5xl font-bold mb-4"
                            style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                        >
                            เปิดประตูสู่โลกใบใหม่
                        </h2>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
