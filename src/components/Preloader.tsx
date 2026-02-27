"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
                    style={{
                        background: "linear-gradient(180deg, #fff0f3 0%, #ffe8ed 50%, #ffd6de 100%)",
                    }}
                >
                    {/* Enso Circle drawing animation */}
                    <motion.svg
                        width="160"
                        height="160"
                        viewBox="0 0 160 160"
                        className="mb-8"
                    >
                        <motion.circle
                            cx="80"
                            cy="80"
                            r="55"
                            fill="none"
                            stroke="var(--wood)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray="345"
                            strokeDashoffset="345"
                            animate={{ strokeDashoffset: [345, 30] }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                        />
                        {/* Inner sun */}
                        <motion.circle
                            cx="80"
                            cy="80"
                            r="20"
                            fill="#e53e3e"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.7 }}
                            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                        />
                    </motion.svg>

                    {/* Loading text */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-lg tracking-widest"
                        style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                    >
                        ようこそ
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-sm mt-2"
                        style={{ color: "var(--wood-light)" }}
                    >
                        สอนญี่ปุ่น.com
                    </motion.p>

                    {/* Bottom decorative dots */}
                    <div className="absolute bottom-12 flex gap-2">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full"
                                style={{ background: "var(--sakura-deep)" }}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{
                                    duration: 1,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
