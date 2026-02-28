"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
    {
        name: "คุณมิน",
        text: "เรียนสนุกมากค่ะ เซนเซอธิบายเข้าใจง่าย ตอนนี้สอบ N3 ผ่านแล้ว!",
        level: "N3",
        avatar: "🧑‍🎓",
    },
    {
        name: "คุณโจ",
        text: "ไม่เคยคิดว่าจะพูดญี่ปุ่นได้ แต่ที่นี่ทำให้มันเป็นจริง",
        level: "N4",
        avatar: "👨‍💼",
    },
    {
        name: "คุณแนน",
        text: "ชอบที่ได้เรียนรู้วัฒนธรรมไปพร้อมกับภาษา ทำให้จำได้ดี",
        level: "N5",
        avatar: "👩‍🎨",
    },
    {
        name: "คุณเจมส์",
        text: "คอร์สเตรียมสอบ JLPT ดีมาก สอนตรงจุด ประหยัดเวลา",
        level: "N2",
        avatar: "🧑‍💻",
    },
    {
        name: "คุณพลอย",
        text: "เรียนที่อื่นมาหลายที่ ที่นี่เข้าใจง่ายที่สุดค่ะ",
        level: "N4",
        avatar: "👩‍🏫",
    },
    {
        name: "คุณต้น",
        text: "เซนเซใจดีมาก ตอบทุกคำถาม แม้จะถามซ้ำก็ไม่เบื่อ",
        level: "N5",
        avatar: "🧑‍🔬",
    },
];

// Fixed grain line angles to avoid Math.random() hydration mismatch
const grainAngles = [
    [0.3, -0.5, 0.1, -0.7, 0.9, -0.1, 0.6, -0.4],
    [0.5, 0.1, 0.6, 0.8, -0.5, -0.4, -0.1, 0.2],
    [0.1, -0.5, 0.3, -0.1, 0.3, 0.8, -0.4, -1.0],
    [0.4, 0.8, -0.04, 0.6, 0.8, -0.7, -0.1, 0.5],
    [-0.1, 0.6, 0.6, 0.3, -0.7, -0.4, 0.5, -0.5],
    [-0.8, -0.1, 0.7, 0.3, -0.3, -0.7, 0.0, -0.1],
];

function EmaCard({
    review,
    index,
}: {
    review: (typeof reviews)[0];
    index: number;
}) {
    const angles = grainAngles[index] || grainAngles[0];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-64 md:w-72 cursor-grab active:cursor-grabbing px-2"
        >
            {/* Hanging string - with subtle physics animation */}
            <div className="flex justify-center mb-0 relative">
                <motion.div
                    className="w-0.5 h-12 origin-top"
                    style={{ background: "linear-gradient(to bottom, #4a2c2a, #b8860b)" }}
                    animate={{ rotate: [-1, 1, -1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                />
                {/* Knot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#4a2c2a] z-20" />
            </div>

            {/* Ema wooden tablet */}
            <motion.div
                className="relative rounded-lg p-6 shadow-xl border-2 overflow-hidden group"
                style={{
                    background: "var(--washi)",
                    backgroundColor: "rgba(245, 222, 179, 0.95)", // More solid base for readability
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
                    borderColor: "#b8860b",
                    minHeight: "220px",
                }}
                whileHover={{
                    rotate: [-1, 1, -0.5, 0.5, 0],
                    transition: { duration: 0.5 }
                }}
            >
                {/* Wood Grain - Enhanced visibility */}
                <div className="absolute inset-0 overflow-hidden rounded-lg opacity-[0.15] pointer-events-none">
                    {angles.map((angle, i) => (
                        <div
                            key={i}
                            className="absolute w-full h-[1.5px]"
                            style={{
                                top: `${10 + i * 15}%`,
                                backgroundColor: "#8B4513",
                                transform: `rotate(${angle}deg)`,
                            }}
                        />
                    ))}
                </div>

                {/* Ambient glow in dark mode */}
                <div className="absolute inset-0 bg-white/5 opacity-0 dark:group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Roof triangle - Dynamic height */}
                <div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-8 z-20"
                    style={{
                        background: "linear-gradient(135deg, #8B0000 0%, #B22222 50%, #630000 100%)",
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                    }}
                />

                {/* Header Section */}
                <div className="relative z-20 pt-4">
                    <div className="flex items-center gap-3 mb-4">
                        <motion.span
                            className="text-3xl filter drop-shadow-sm"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                            {review.avatar}
                        </motion.span>
                        <div>
                            <p className="font-bold text-base md:text-lg mb-0.5 text-[#4a2c2a] dark:text-[#2a0c0a]">
                                {review.name}
                            </p>
                            <span
                                className="text-[10px] md:text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider"
                                style={{
                                    background: "rgba(90,125,55,0.25)", // Stronger background
                                    border: "1px solid rgba(90,125,55,0.4)",
                                    color: "#2d4a1e", // Darker text for visibility on light wood
                                }}
                            >
                                JLPT {review.level}
                            </span>
                        </div>
                    </div>

                    <p
                        className="text-sm md:text-base leading-relaxed font-semibold italic relative text-[#3a1c1a]"
                    >
                        <span className="text-xl md:text-2xl text-red-700/40 font-serif absolute -left-2 -top-2">“</span>
                        {review.text}
                        <span className="text-xl md:text-2xl text-red-700/40 font-serif absolute -right-2 bottom-0">”</span>
                    </p>
                </div>

                {/* Hanko Stamp - Realtime feel */}
                <motion.div
                    className="absolute bottom-3 right-4 w-10 h-10 rounded-sm flex items-center justify-center text-xs font-bold opacity-30 border-2 border-red-600 text-red-600 select-none"
                    initial={{ scale: 0.8, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 12 }}
                    whileHover={{ scale: 1.1, opacity: 0.6, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <span style={{ transform: "scale(0.8)" }}>大日本</span>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default function EmaReviews() {
    return (
        <section
            id="reviews"
            className="relative py-24 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, var(--background) 0%, var(--pink-light) 50%, var(--background) 100%)",
            }}
        >
            {/* Section header */}
            <div className="text-center mb-16 px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl mb-3"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--matcha)" }}
                >
                    絵馬 — เสียงจากนักเรียน
                </motion.p>
                <div className="relative inline-block">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold relative z-10"
                        style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                    >
                        แผ่นไม้ขอพรจากผู้เรียน
                    </motion.h2>
                    {/* Decorative red underline */}
                    <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-red-600/20 rounded-full" />
                </div>
            </div>

            {/* Hanging rail - Enhanced with shadow and texture */}
            <div className="relative max-w-7xl mx-auto px-6 mb-8">
                <div
                    className="absolute top-0 left-0 right-0 h-4 rounded-full z-20 shadow-lg"
                    style={{
                        background: "linear-gradient(180deg, #5c3532, #2a0c0a, #4a2c2a)",
                        border: "1px solid rgba(255,255,255,0.1)"
                    }}
                />
                {/* Rail mounting points */}
                <div className="absolute top-0 left-10 w-4 h-6 bg-[#2a0c0a] rounded-sm -translate-y-2 z-10" />
                <div className="absolute top-0 right-10 w-4 h-6 bg-[#2a0c0a] rounded-sm -translate-y-2 z-10" />
            </div>

            {/* Ema cards - Draggable carousel with physics */}
            <div className="relative z-10">
                <motion.div
                    className="flex gap-4 md:gap-8 px-10 cursor-grab active:cursor-grabbing w-max h-[380px] pt-4"
                    drag="x"
                    dragConstraints={{ right: 0, left: -1400 }} // Approximated, in real app calculate based on width
                    whileTap={{ cursor: "grabbing" }}
                >
                    {reviews.map((review, i) => (
                        <EmaCard key={i} review={review} index={i} />
                    ))}
                </motion.div>

                {/* Instructions hint */}
                <div className="text-center mt-4 opacity-30 text-xs md:text-sm animate-pulse">
                    ← ลากเพื่อเลื่อนดูคำชม →
                </div>
            </div>

            {/* Decorative cloud images - Adjusted for better contrast */}
            <div className="absolute top-10 right-0 w-48 md:w-64 opacity-20 pointer-events-none z-0">
                <Image src="/clouds.png" alt="" width={300} height={150} className="w-full mix-blend-multiply dark:mix-blend-screen" />
            </div>
            <div className="absolute bottom-10 left-0 w-40 md:w-56 opacity-15 pointer-events-none z-0 -scale-x-100">
                <Image src="/clouds.png" alt="" width={300} height={150} className="w-full mix-blend-multiply dark:mix-blend-screen" />
            </div>
        </section>
    );
}
