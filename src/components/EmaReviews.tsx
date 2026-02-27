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
            whileInView={{ opacity: 1, y: 0, rotate: -2 + index * 1.5 }}
            whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-64 cursor-default"
        >
            {/* Hanging string */}
            <div className="flex justify-center mb-0">
                <div className="w-0.5 h-10" style={{ background: "#b8860b" }} />
            </div>

            {/* Ema wooden tablet */}
            <div
                className="relative rounded-lg p-5 shadow-lg"
                style={{
                    background: "linear-gradient(180deg, #f5deb3, #deb887, #d2b48c)",
                    border: "2px solid #b8860b",
                    minHeight: "180px",
                }}
            >
                {/* Wood grain texture lines - using fixed angles */}
                <div className="absolute inset-0 overflow-hidden rounded-lg opacity-10">
                    {angles.map((angle, i) => (
                        <div
                            key={i}
                            className="absolute w-full h-[1px]"
                            style={{
                                top: `${12 + i * 12}%`,
                                backgroundColor: "#8B4513",
                                transform: `rotate(${angle}deg)`,
                            }}
                        />
                    ))}
                </div>

                {/* Roof triangle */}
                <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6"
                    style={{
                        background: "linear-gradient(180deg, #8B0000, #B22222)",
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    }}
                />

                {/* Content */}
                <div className="relative z-10 pt-2">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{review.avatar}</span>
                        <div>
                            <p className="font-bold text-sm" style={{ color: "#4a2c2a" }}>
                                {review.name}
                            </p>
                            <span
                                className="text-xs px-2 py-0.5 rounded-full"
                                style={{
                                    background: "rgba(90,125,55,0.2)",
                                    color: "var(--matcha)",
                                }}
                            >
                                ผ่าน {review.level}
                            </span>
                        </div>
                    </div>

                    <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#4a2c2a" }}
                    >
                        「{review.text}」
                    </p>
                </div>

                {/* Stamp */}
                <div
                    className="absolute bottom-2 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold opacity-30 rotate-12"
                    style={{
                        border: "2px solid #e53e3e",
                        color: "#e53e3e",
                    }}
                >
                    認
                </div>
            </div>
        </motion.div>
    );
}

export default function EmaReviews() {
    return (
        <section
            id="reviews"
            className="relative py-20 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #ffe8ed 0%, #fff0f3 50%, #ffe8ed 100%)",
            }}
        >
            {/* Section header */}
            <div className="text-center mb-16 px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl mb-2"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--matcha)" }}
                >
                    絵馬 — เสียงจากนักเรียน
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                >
                    แผ่นไม้ขอพรจากผู้เรียน
                </motion.h2>
            </div>

            {/* Hanging rail */}
            <div className="relative max-w-7xl mx-auto px-6 mb-4">
                <div
                    className="absolute top-0 left-0 right-0 h-3 rounded-full"
                    style={{
                        background: "linear-gradient(180deg, #4a2c2a, #3a1c1a)",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                />
            </div>

            {/* Ema cards - horizontal scroll */}
            <div className="overflow-x-auto pb-6 pt-6">
                <div className="flex gap-6 px-6 min-w-max max-w-7xl mx-auto">
                    {reviews.map((review, i) => (
                        <EmaCard key={i} review={review} index={i} />
                    ))}
                </div>
            </div>

            {/* Decorative cloud images */}
            <div className="absolute top-8 right-0 w-32 md:w-48 opacity-20 pointer-events-none">
                <Image src="/clouds.png" alt="" width={200} height={100} className="w-full" />
            </div>
            <div className="absolute bottom-8 left-0 w-28 md:w-40 opacity-15 pointer-events-none -scale-x-100">
                <Image src="/clouds.png" alt="" width={200} height={100} className="w-full" />
            </div>
        </section>
    );
}
