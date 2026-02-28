"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { KanjiText } from "./KanjiTooltip";
import Image from "next/image";

interface Petal {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
    rotation: number;
    swayAmount: number;
}

function generatePetals(count: number): Petal[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        size: 20 + Math.random() * 30, // Bigger to show real PNG
        rotation: Math.random() * 360,
        swayAmount: 30 + Math.random() * 60,
    }));
}

function SakuraPetal({ petal }: { petal: Petal }) {
    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{
                left: `${petal.x}%`,
                top: -40,
                width: petal.size,
                height: petal.size,
            }}
            animate={{
                y: ["0vh", "105vh"],
                x: [0, petal.swayAmount, -petal.swayAmount, petal.swayAmount / 2, 0],
                rotate: [petal.rotation, petal.rotation + 360],
                opacity: [0, 1, 1, 1, 0.3],
            }}
            transition={{
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {/* Use real sakura blossom PNG */}
            <Image
                src="/sakura-blossom.png"
                alt=""
                width={petal.size}
                height={petal.size}
                className="w-full h-full object-contain drop-shadow-sm"
                priority={false}
            />
        </motion.div>
    );
}

export default function SakuraHero() {
    const [petals, setPetals] = useState<Petal[]>([]);

    useEffect(() => {
        // Fewer petals on mobile for performance
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        setPetals(generatePetals(isMobile ? 15 : 30));
    }, []);

    return (
        <section
            id="hero"
            className="relative h-screen flex items-center justify-center overflow-hidden"
            style={{
                background: "linear-gradient(180deg, var(--pink-light) 0%, var(--background) 40%, var(--pink-light) 100%)",
            }}
        >
            {/* Sakura Petals */}
            <div className="absolute inset-0 z-10">
                {petals.map((petal) => (
                    <SakuraPetal key={petal.id} petal={petal} />
                ))}
            </div>

            {/* Sakura Branch - Top Right */}
            <motion.div
                className="absolute -top-4 -right-8 md:right-0 w-48 md:w-80 z-[5] pointer-events-none"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.85, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                <Image
                    src="/sakura-branch.png?v=upd"
                    alt="Sakura branch decoration"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                    priority
                />
            </motion.div>

            {/* Sakura Branch - Bottom Left (flipped) */}
            <motion.div
                className="absolute -bottom-4 -left-8 md:left-0 w-40 md:w-64 z-[5] pointer-events-none rotate-180"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 1.5, delay: 0.8 }}
            >
                <Image
                    src="/sakura-branch.png?v=upd"
                    alt=""
                    width={400}
                    height={300}
                    className="w-full h-auto"
                    priority={false}
                />
            </motion.div>

            {/* Cloud decorations */}
            <div className="absolute top-8 left-0 w-40 md:w-64 opacity-25 pointer-events-none z-0">
                <Image src="/clouds.png" alt="" width={300} height={150} className="w-full" />
            </div>
            <div className="absolute top-20 right-0 w-32 md:w-52 opacity-20 pointer-events-none z-0 -scale-x-100">
                <Image src="/clouds.png" alt="" width={300} height={150} className="w-full" />
            </div>

            {/* Background decorative circles */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10" style={{ background: "var(--sakura)" }} />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-8" style={{ background: "var(--matcha)" }} />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
                    style={{ background: "radial-gradient(circle, var(--sakura), transparent 70%)" }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mb-4"
                >
                    <Image
                        src="/sakura-blossom.png?v=2"
                        alt="Sakura"
                        width={80}
                        height={80}
                        className="mx-auto w-16 md:w-20 h-16 md:h-20"
                    />
                </motion.div>

                {/* Headline - Thai */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-snug"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                >
                    ซากุระร่วงหล่นเพื่อเริ่มต้นฤดูกาลใหม่...
                    <br />
                    <span style={{ color: "var(--matcha)" }}>
                        การเรียนภาษาญี่ปุ่นของคุณก็เช่นกัน
                    </span>
                </motion.h1>

                {/* Headline - Japanese with Kanji tooltips */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-base md:text-lg mb-6 opacity-50"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                >
                    <KanjiText>桜</KanjiText>の舞い散る季節は、<KanjiText>新</KanjiText>たな始まり。あなたの<KanjiText>日本語学</KanjiText>習もここから。
                </motion.div>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    className="text-base md:text-lg lg:text-xl mb-2 max-w-2xl mx-auto"
                    style={{ fontFamily: "var(--font-sans-jp)", color: "var(--wood-light)" }}
                >
                    เรียนภาษาญี่ปุ่นออนไลน์ สัมผัสศิลปะ วัฒนธรรม และจิตวิญญาณแห่งแดนอาทิตย์อุทัยอย่างลึกซึ้ง
                </motion.p>

                {/* Sub-headline - Japanese */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                    className="text-sm md:text-base mb-10 opacity-40 max-w-xl mx-auto"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                >
                    アート、文化、そして<KanjiText>日</KanjiText>出ずる国の精神を深く<KanjiText>学</KanjiText>ぶオンライン<KanjiText>日本語</KanjiText>教室。
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <button className="btn-sakura text-lg px-10 py-4 cursor-pointer shadow-xl">
                        เริ่มต้นการเดินทาง →
                    </button>
                    <span className="text-base md:text-lg opacity-40 font-medium" style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}>
                        旅を始める
                    </span>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block" // Hidden on small mobile to avoid overlap
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-1"
                    >
                        <span className="text-[10px] tracking-widest opacity-30" style={{ color: "var(--wood-light)" }}>スクロール</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--wood-light)" strokeWidth="2" className="opacity-30">
                            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
