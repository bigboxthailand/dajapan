"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, ReactNode } from "react";

interface AudioWordProps {
    word: string;
    reading: string;
    meaning: string;
    children: ReactNode;
}

export function AudioWord({ word, reading, meaning, children }: AudioWordProps) {
    const [isHovered, setIsHovered] = useState(false);

    const speak = useCallback(() => {
        if (typeof window === "undefined" || !window.speechSynthesis) return;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(reading);
        utterance.lang = "ja-JP";
        utterance.rate = 0.8;
        utterance.volume = 0.6;
        utterance.pitch = 1.1;

        // Try to find a Japanese voice
        const voices = window.speechSynthesis.getVoices();
        const jpVoice = voices.find((v) => v.lang.startsWith("ja"));
        if (jpVoice) utterance.voice = jpVoice;

        window.speechSynthesis.speak(utterance);
    }, [reading]);

    return (
        <span
            className="relative inline-block cursor-pointer"
            onMouseEnter={() => {
                setIsHovered(true);
                speak();
            }}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.span
                className="relative z-10 border-b-2 border-dashed transition-colors"
                style={{
                    borderColor: isHovered ? "var(--sakura-deep)" : "transparent",
                    color: isHovered ? "var(--sakura-deep)" : "inherit",
                }}
                whileHover={{ scale: 1.05 }}
            >
                {children}

                {/* Sound wave indicator */}
                {isHovered && (
                    <motion.span
                        className="absolute -right-5 top-1/2 -translate-y-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        🔊
                    </motion.span>
                )}
            </motion.span>

            {/* Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50"
                    >
                        <div
                            className="px-4 py-3 rounded-xl shadow-xl whitespace-nowrap"
                            style={{
                                background: "linear-gradient(135deg, #fef9f0, #fff5ee)",
                                border: "2px solid var(--sakura)",
                                minWidth: "120px",
                            }}
                        >
                            {/* Washi paper texture overlay */}
                            <div
                                className="absolute inset-0 rounded-xl opacity-10 pointer-events-none"
                                style={{
                                    background: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(139,69,19,0.05) 2px, rgba(139,69,19,0.05) 4px)",
                                }}
                            />

                            <p className="text-lg font-bold text-center" style={{ color: "var(--wood)", fontFamily: "var(--font-mincho)" }}>
                                {word}
                            </p>
                            <p className="text-xs text-center opacity-50 mb-1" style={{ color: "var(--wood)" }}>
                                {reading}
                            </p>
                            <p className="text-sm text-center" style={{ color: "var(--matcha)" }}>
                                {meaning}
                            </p>

                            {/* Stamp */}
                            <div className="text-center mt-1 opacity-20">
                                <span className="text-xs" style={{ color: "#e53e3e" }}>🔈 กดฟังเสียง</span>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div
                            className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 -mt-1.5"
                            style={{
                                background: "#fef9f0",
                                borderRight: "2px solid var(--sakura)",
                                borderBottom: "2px solid var(--sakura)",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}
