"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ThemeMode = "day" | "night";

const ThemeContext = createContext<{
    mode: ThemeMode;
    toggle: () => void;
}>({ mode: "day", toggle: () => { } });

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<ThemeMode>("day");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const toggle = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setMode((prev) => (prev === "day" ? "night" : "day"));
            setTimeout(() => setIsTransitioning(false), 800);
        }, 500);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", mode);
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, toggle }}>
            {children}

            {/* Ink splash transition */}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        key="ink-transition"
                        className="fixed inset-0 z-[9998] pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Ink drops spreading */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    left: `${20 + i * 15}%`,
                                    top: `${10 + i * 20}%`,
                                    background: mode === "day"
                                        ? "radial-gradient(circle, rgba(26,15,46,0.95), transparent 70%)"
                                        : "radial-gradient(circle, rgba(255,240,243,0.95), transparent 70%)",
                                }}
                                initial={{ width: 0, height: 0 }}
                                animate={{
                                    width: ["0vw", "200vw"],
                                    height: ["0vw", "200vw"],
                                }}
                                transition={{
                                    duration: 1.2,
                                    delay: i * 0.08,
                                    ease: "easeOut",
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </ThemeContext.Provider>
    );
}

// Chochin Lantern Toggle Button
export function ThemeToggle() {
    const { mode, toggle } = useTheme();
    const isNight = mode === "night";

    return (
        <motion.button
            onClick={toggle}
            className="fixed top-6 right-6 z-[100] cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            title={isNight ? "เปลี่ยนเป็นกลางวัน ☀️" : "เปลี่ยนเป็นกลางคืน 🏮"}
        >
            {/* Hanging string */}
            <div className="flex justify-center">
                <div className="w-[2px] h-6" style={{ background: isNight ? "#ffd700" : "#8b6914" }} />
            </div>

            {/* Chochin Lantern body */}
            <motion.div
                className="relative w-12 h-16 flex items-center justify-center"
                animate={{
                    rotate: [0, 3, -3, 2, -2, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Lantern shape */}
                <div
                    className="w-12 h-14 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden"
                    style={{
                        background: isNight
                            ? "radial-gradient(circle at 50% 30%, #ff6b35, #e53e3e, #c53030)"
                            : "radial-gradient(circle at 50% 30%, #fff5f0, #ffcccb, #ffb3b0)",
                        border: `2px solid ${isNight ? "#ffd700" : "#d4896b"}`,
                        boxShadow: isNight
                            ? "0 0 20px rgba(255, 107, 53, 0.6), 0 0 40px rgba(255, 107, 53, 0.3)"
                            : "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                >
                    {/* Ribs */}
                    <div className="absolute inset-0">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute left-0 right-0 h-[1px]"
                                style={{
                                    top: `${30 + i * 20}%`,
                                    background: isNight ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.08)",
                                }}
                            />
                        ))}
                    </div>

                    {/* Kanji character */}
                    <span
                        className="text-lg font-bold relative z-10"
                        style={{
                            fontFamily: "var(--font-mincho)",
                            color: isNight ? "#fff" : "var(--wood)",
                            textShadow: isNight ? "0 0 10px rgba(255,255,255,0.5)" : "none",
                        }}
                    >
                        {isNight ? "夜" : "昼"}
                    </span>
                </div>

                {/* Bottom tassel */}
                <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[2px] h-4"
                    style={{ background: isNight ? "#ffd700" : "#8b6914" }}
                />
                <div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                    style={{ background: isNight ? "#ffd700" : "#8b6914" }}
                />

                {/* Glow effect for night mode */}
                {isNight && (
                    <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                            background: "radial-gradient(circle, rgba(255,200,100,0.3), transparent 70%)",
                        }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                )}
            </motion.div>
        </motion.button>
    );
}
