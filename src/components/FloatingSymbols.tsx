"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// 一富士二鷹三茄子 — The three lucky first dreams of the New Year
// Plus additional Japanese cultural symbols

const symbols = [
    { src: "/sun.png", alt: "พระอาทิตย์อุทัย", label: "日の丸", size: 120 },
    { src: "/hawk.png", alt: "นกเหยี่ยว", label: "鷹", size: 150 },
    { src: "/eggplant.png", alt: "มะเขือม่วง", label: "茄子", size: 90 },
    { src: "/ocean.png", alt: "คลื่นทะเล", label: "海", size: 140 },
    { src: "/sushi.png", alt: "ซูชิ", label: "寿司", size: 120 },
    { src: "/sakura-blossom.png", alt: "ดอกซากุระ", label: "桜", size: 80 },
];

// Fixed positions for each symbol to avoid hydration mismatches
const positions = [
    { top: "5%", left: "5%", delay: 0, rotate: -8 },
    { top: "15%", right: "3%", delay: 0.3, rotate: 5 },
    { top: "40%", left: "2%", delay: 0.6, rotate: -12 },
    { top: "55%", right: "2%", delay: 0.9, rotate: 8 },
    { top: "75%", left: "4%", delay: 1.2, rotate: -5 },
    { top: "85%", right: "5%", delay: 1.5, rotate: 10 },
];

export default function FloatingSymbols() {
    return (
        <section
            className="relative py-24 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #ffe8ed 0%, #fff0f3 30%, #ffe8ed 70%, #fff0f3 100%)",
            }}
        >
            {/* Section Header */}
            <div className="text-center mb-16 px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl mb-2"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--matcha)" }}
                >
                    一富士二鷹三茄子 — สัญลักษณ์มงคลแห่งญี่ปุ่น
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                >
                    สัมผัสวัฒนธรรมญี่ปุ่นผ่านสัญลักษณ์
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-sm md:text-base max-w-2xl mx-auto opacity-60"
                    style={{ color: "var(--wood-light)" }}
                >
                    ญี่ปุ่นมีสัญลักษณ์มากมายที่สะท้อนวัฒนธรรมอันล้ำค่า
                    ที่นี่คุณจะได้เรียนรู้ทั้งภาษาและความหมายเบื้องหลังสัญลักษณ์เหล่านี้
                </motion.p>
            </div>

            {/* Symbol Cards Grid */}
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
                {symbols.map((symbol, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40, rotate: positions[i]?.rotate || 0 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        whileHover={{
                            scale: 1.08,
                            y: -8,
                            rotate: positions[i]?.rotate || 0,
                        }}
                        transition={{ duration: 0.6, delay: (positions[i]?.delay || 0) }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-3 p-6 rounded-2xl cursor-default transition-shadow hover:shadow-xl"
                        style={{
                            background: "rgba(255,255,255,0.6)",
                            border: "1px solid rgba(255,183,197,0.3)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <div className="relative" style={{ width: symbol.size, height: symbol.size }}>
                            <Image
                                src={symbol.src}
                                alt={symbol.alt}
                                width={symbol.size}
                                height={symbol.size}
                                className="w-full h-full object-contain drop-shadow-lg"
                            />
                        </div>
                        <div className="text-center">
                            <p
                                className="text-xl font-bold"
                                style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                            >
                                {symbol.label}
                            </p>
                            <p className="text-sm opacity-60" style={{ color: "var(--wood-light)" }}>
                                {symbol.alt}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Background floating sakura branches */}
            <div className="absolute top-0 right-0 w-48 md:w-72 opacity-15 pointer-events-none">
                <Image src="/sakura-branch.png" alt="" width={400} height={300} className="w-full" />
            </div>
            <div className="absolute bottom-0 left-0 w-40 md:w-60 opacity-10 pointer-events-none rotate-180">
                <Image src="/sakura-branch.png" alt="" width={400} height={300} className="w-full" />
            </div>
        </section>
    );
}
