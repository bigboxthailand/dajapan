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
                background: "linear-gradient(180deg, var(--pink-light) 0%, var(--background) 30%, var(--pink-light) 70%, var(--background) 100%)",
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
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{
                            y: -10,
                            boxShadow: "0 20px 25px -5px rgba(232, 130, 154, 0.2)",
                        }}
                        transition={{ duration: 0.6, delay: (positions[i]?.delay || 0) }}
                        viewport={{ once: true }}
                        className="relative flex flex-col items-center p-6 rounded-sm cursor-default group"
                        style={{
                            background: "white",
                            backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')", // Washi texture
                            border: "1px solid rgba(139, 90, 43, 0.2)", // Subtle wood/paper border
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                        }}
                    >
                        {/* Hanko-style accent (Red Japanese stamp feel) */}
                        <div className="absolute top-3 right-3 w-6 h-6 border-2 border-red-600 rounded-sm opacity-20 group-hover:opacity-60 transition-opacity flex items-center justify-center text-[10px] font-bold text-red-600">
                            印
                        </div>

                        {/* Image Container with fixed height for alignment */}
                        <div className="h-40 flex items-center justify-center mb-6 w-full relative">
                            {/* Decorative traditional circle background */}
                            <div className="absolute inset-0 bg-red-50 rounded-full scale-75 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                            <div className="relative z-10" style={{ width: symbol.size, height: symbol.size }}>
                                <Image
                                    src={symbol.src}
                                    alt={symbol.alt}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-contain filter drop-shadow-md"
                                />
                            </div>
                        </div>

                        {/* Label Container - Flex grow ensures columns line up */}
                        <div className="w-full flex flex-col items-center">
                            {/* Red vertical decorative line */}
                            <div className="w-1 h-4 bg-red-600 mb-3 opacity-30 group-hover:opacity-100 transition-opacity" />

                            <h3
                                className="text-2xl font-bold mb-1"
                                style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                            >
                                {symbol.label}
                            </h3>
                            <p
                                className="text-sm font-medium opacity-50 tracking-wide"
                                style={{ color: "var(--wood-light)" }}
                            >
                                {symbol.alt}
                            </p>
                        </div>

                        {/* Washi border bottom accent */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
