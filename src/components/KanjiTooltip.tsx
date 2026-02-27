"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface KanjiData {
    kanji: string;
    romaji: string;
    meaning: string;
    strokes: string[]; // SVG path data for stroke order
}

const kanjiDatabase: Record<string, KanjiData> = {
    "桜": {
        kanji: "桜",
        romaji: "sakura",
        meaning: "ซากุระ / Cherry Blossom",
        strokes: [
            "M8 4 L8 28",
            "M4 10 L14 10",
            "M4 18 L14 18",
            "M16 6 Q24 16 16 28",
            "M18 12 L28 8",
            "M18 20 L28 24",
        ],
    },
    "日": {
        kanji: "日",
        romaji: "nichi / hi",
        meaning: "วัน, ดวงอาทิตย์ / Day, Sun",
        strokes: [
            "M6 4 L6 28",
            "M6 4 L26 4",
            "M26 4 L26 28",
            "M6 16 L26 16",
            "M6 28 L26 28",
        ],
    },
    "本": {
        kanji: "本",
        romaji: "hon",
        meaning: "หนังสือ, ต้นฉบับ / Book, Origin",
        strokes: [
            "M4 8 L28 8",
            "M4 18 L28 18",
            "M16 4 L16 28",
            "M10 28 L16 20",
            "M22 28 L16 20",
        ],
    },
    "語": {
        kanji: "語",
        romaji: "go",
        meaning: "ภาษา / Language",
        strokes: [
            "M4 6 L12 6",
            "M4 12 L12 12",
            "M4 18 L12 18",
            "M16 4 L16 28",
            "M18 8 L28 8",
            "M18 16 L28 16",
            "M18 24 L28 24",
        ],
    },
    "学": {
        kanji: "学",
        romaji: "gaku / mana(bu)",
        meaning: "เรียน / Study, Learn",
        strokes: [
            "M8 4 L16 10",
            "M24 4 L16 10",
            "M6 14 L26 14",
            "M10 14 L10 22",
            "M22 14 L22 22",
            "M10 22 L22 22",
            "M16 22 L16 28",
        ],
    },
    "先": {
        kanji: "先",
        romaji: "sen / saki",
        meaning: "ก่อน / Before, Ahead",
        strokes: [
            "M6 6 L26 6",
            "M10 6 L10 16",
            "M22 6 L22 16",
            "M6 16 L26 16",
            "M16 16 L8 28",
            "M16 16 L24 28",
        ],
    },
    "生": {
        kanji: "生",
        romaji: "sei / i(kiru)",
        meaning: "ชีวิต, เกิด / Life, Birth",
        strokes: [
            "M6 8 L26 8",
            "M6 16 L26 16",
            "M16 4 L16 28",
            "M6 24 L26 24",
        ],
    },
    "新": {
        kanji: "新",
        romaji: "shin / atara(shii)",
        meaning: "ใหม่ / New",
        strokes: [
            "M4 6 L12 6",
            "M4 16 L12 16",
            "M8 6 L8 26",
            "M16 4 L16 28",
            "M18 10 L28 6",
            "M18 18 L28 26",
            "M22 10 L22 22",
        ],
    },
    "世": {
        kanji: "世",
        romaji: "se / yo",
        meaning: "โลก / World",
        strokes: [
            "M6 8 L6 24",
            "M16 4 L16 28",
            "M26 8 L26 24",
            "M6 16 L26 16",
            "M6 24 L26 24",
        ],
    },
    "界": {
        kanji: "界",
        romaji: "kai",
        meaning: "ขอบเขต, โลก / World, Boundary",
        strokes: [
            "M6 4 L26 4",
            "M6 4 L6 16",
            "M26 4 L26 16",
            "M6 16 L26 16",
            "M16 16 L16 28",
            "M8 22 L24 22",
            "M8 28 L24 28",
        ],
    },
};

export function KanjiText({
    children,
    className = "",
}: {
    children: string;
    className?: string;
}) {
    return (
        <span className={className}>
            {children.split("").map((char, i) => {
                const data = kanjiDatabase[char];
                if (data) {
                    return <KanjiChar key={i} data={data} />;
                }
                return <span key={i}>{char}</span>;
            })}
        </span>
    );
}

function KanjiChar({ data }: { data: KanjiData }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            className="relative inline-block cursor-pointer transition-colors duration-200"
            style={{
                color: isHovered ? "var(--matcha)" : "inherit",
                textDecoration: isHovered ? "underline" : "none",
                textDecorationStyle: "dotted" as const,
                textUnderlineOffset: "4px",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {data.kanji}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none"
                    >
                        <div
                            className="rounded-xl p-4 shadow-xl min-w-[200px]"
                            style={{
                                background: "rgba(255,255,255,0.95)",
                                border: "2px solid var(--sakura)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            {/* Stroke order animation */}
                            <div className="flex justify-center mb-3">
                                <svg width="64" height="64" viewBox="0 0 32 32" className="border border-gray-200 rounded-lg bg-white">
                                    {data.strokes.map((path, i) => (
                                        <motion.path
                                            key={i}
                                            d={path}
                                            fill="none"
                                            stroke="var(--wood)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{
                                                delay: i * 0.25,
                                                duration: 0.4,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    ))}
                                </svg>
                            </div>

                            {/* Kanji large */}
                            <p
                                className="text-3xl text-center mb-2 font-bold"
                                style={{ color: "var(--wood)" }}
                            >
                                {data.kanji}
                            </p>

                            {/* Romaji */}
                            <p
                                className="text-sm text-center font-medium mb-1"
                                style={{ color: "var(--matcha)" }}
                            >
                                {data.romaji}
                            </p>

                            {/* Meaning */}
                            <p
                                className="text-xs text-center opacity-70"
                                style={{ color: "var(--wood-light)" }}
                            >
                                {data.meaning}
                            </p>

                            {/* Triangle pointer */}
                            <div
                                className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
                                style={{
                                    borderLeft: "8px solid transparent",
                                    borderRight: "8px solid transparent",
                                    borderTop: "8px solid var(--sakura)",
                                }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}

export default KanjiText;
