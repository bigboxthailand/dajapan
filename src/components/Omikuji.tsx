"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fortunes = [
    {
        jp: "七転び八起き",
        romaji: "Nana korobi ya oki",
        th: "ล้มเจ็ดครั้ง ลุกแปดครั้ง",
        meaning: "ความพยายามไม่เคยทรยศใคร",
        luck: "大吉 (โชคดีมาก!)",
        code: "SAKURA10",
    },
    {
        jp: "継続は力なり",
        romaji: "Keizoku wa chikara nari",
        th: "ความต่อเนื่องคือพลัง",
        meaning: "ฝึกทุกวัน ก้าวหน้าทุกวัน",
        luck: "吉 (โชคดี)",
        code: "MATCHA15",
    },
    {
        jp: "一期一会",
        romaji: "Ichigo ichie",
        th: "หนึ่งช่วงเวลา หนึ่งโอกาส",
        meaning: "ทุกการพบเจอเป็นสิ่งพิเศษ",
        luck: "中吉 (ค่อนข้างดี)",
        code: "FUJI20",
    },
    {
        jp: "花より団子",
        romaji: "Hana yori dango",
        th: "ดังโงะดีกว่าดอกไม้",
        meaning: "สิ่งที่เป็นประโยชน์ดีกว่าสิ่งที่สวยงาม",
        luck: "大吉 (โชคดีมาก!)",
        code: "DANGO25",
    },
    {
        jp: "雨降って地固まる",
        romaji: "Ame futte ji katamaru",
        th: "ฝนตกดินแข็ง",
        meaning: "อุปสรรคทำให้แข็งแกร่งขึ้น",
        luck: "吉 (โชคดี)",
        code: "NIHON30",
    },
];

export default function Omikuji() {
    const [isOpen, setIsOpen] = useState(false);
    const [fortune, setFortune] = useState(fortunes[0]);
    const [isRevealing, setIsRevealing] = useState(false);
    const [hasDrawn, setHasDrawn] = useState(false);

    const drawFortune = () => {
        if (isRevealing) return;
        setIsRevealing(true);
        setHasDrawn(false);

        // Shuffle and pick a fortune
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        setFortune(randomFortune);

        setTimeout(() => {
            setHasDrawn(true);
            setIsRevealing(false);
        }, 1200);
    };

    return (
        <>
            {/* Floating Omikuji Button */}
            <motion.button
                onClick={() => { setIsOpen(true); drawFortune(); }}
                className="fixed bottom-6 right-6 z-[100] cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.5 }}
            >
                <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
                    style={{
                        background: "linear-gradient(135deg, #e53e3e, #c53030)",
                        border: "3px solid #ffd700",
                    }}
                >
                    <span className="text-2xl">⛩️</span>
                </div>
                <motion.span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap px-2 py-1 rounded-full"
                    style={{ background: "var(--wood)", color: "white" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 4, duration: 3, repeat: 2 }}
                >
                    เสี่ยงเซียมซี! 🎋
                </motion.span>
            </motion.button>

            {/* Omikuji Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-6"
                        style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, rotateY: -90 }}
                            animate={{ scale: 1, rotateY: 0 }}
                            exit={{ scale: 0.8, rotateY: 90, opacity: 0 }}
                            transition={{ type: "spring", damping: 20, stiffness: 200 }}
                            className="relative max-w-sm w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Paper fortune card */}
                            <div
                                className="rounded-2xl overflow-hidden shadow-2xl"
                                style={{
                                    background: "linear-gradient(180deg, #fdf8f0, #f5ede0)",
                                    border: "3px solid #d4b896",
                                }}
                            >
                                {/* Top ornament */}
                                <div
                                    className="text-center py-4"
                                    style={{
                                        background: "linear-gradient(180deg, #8B0000, #B22222)",
                                    }}
                                >
                                    <span className="text-3xl">🎋</span>
                                    <p
                                        className="text-white text-lg font-bold mt-1"
                                        style={{ fontFamily: "var(--font-mincho)" }}
                                    >
                                        おみくじ — เซียมซี
                                    </p>
                                </div>

                                {/* Fortune content */}
                                <div className="p-6 text-center">
                                    {isRevealing ? (
                                        <motion.div
                                            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                                            transition={{ duration: 1 }}
                                            className="py-12"
                                        >
                                            <span className="text-5xl">🎋</span>
                                            <p
                                                className="mt-4 text-sm opacity-60"
                                                style={{ color: "var(--wood)" }}
                                            >
                                                กำลังเสี่ยงเซียมซี...
                                            </p>
                                        </motion.div>
                                    ) : hasDrawn ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {/* Luck level */}
                                            <motion.p
                                                className="text-2xl font-bold mb-4"
                                                style={{ color: "#e53e3e", fontFamily: "var(--font-mincho)" }}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", delay: 0.2 }}
                                            >
                                                {fortune.luck}
                                            </motion.p>

                                            {/* Japanese proverb */}
                                            <p
                                                className="text-2xl mb-2 font-bold"
                                                style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                                            >
                                                {fortune.jp}
                                            </p>
                                            <p
                                                className="text-sm mb-1 opacity-50"
                                                style={{ color: "var(--wood)" }}
                                            >
                                                {fortune.romaji}
                                            </p>
                                            <p
                                                className="text-base mb-1 font-medium"
                                                style={{ color: "var(--wood-light)" }}
                                            >
                                                {fortune.th}
                                            </p>
                                            <p
                                                className="text-sm mb-6 opacity-60"
                                                style={{ color: "var(--wood-light)" }}
                                            >
                                                {fortune.meaning}
                                            </p>

                                            {/* Discount code */}
                                            <div
                                                className="rounded-xl p-4 mb-4"
                                                style={{
                                                    background: "rgba(90, 125, 55, 0.1)",
                                                    border: "2px dashed var(--matcha)",
                                                }}
                                            >
                                                <p className="text-xs mb-1" style={{ color: "var(--matcha)" }}>
                                                    🎁 โค้ดส่วนลดคอร์สเรียน
                                                </p>
                                                <p
                                                    className="text-xl font-bold tracking-wider"
                                                    style={{ color: "var(--matcha)", fontFamily: "monospace" }}
                                                >
                                                    {fortune.code}
                                                </p>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex gap-3 justify-center">
                                                <button
                                                    onClick={drawFortune}
                                                    className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:scale-105"
                                                    style={{
                                                        background: "var(--sakura)",
                                                        color: "var(--wood)",
                                                    }}
                                                >
                                                    🔄 สุ่มใหม่
                                                </button>
                                                <button
                                                    onClick={() => setIsOpen(false)}
                                                    className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:scale-105"
                                                    style={{
                                                        background: "var(--matcha)",
                                                        color: "white",
                                                    }}
                                                >
                                                    ใช้โค้ดเลย →
                                                </button>
                                            </div>
                                        </motion.div>
                                    ) : null}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
