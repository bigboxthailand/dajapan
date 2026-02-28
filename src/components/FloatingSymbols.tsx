"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// 一富士二鷹三茄子 — The three lucky first dreams of the New Year
// Plus additional Japanese cultural symbols

const symbols = [
    { src: "/sun.png?v=refresh", alt: "พระอาทิตย์อุทัย", label: "日の丸", size: 120 },
    { src: "/hawk.png?v=refresh", alt: "นกเหยี่ยว", label: "鷹", size: 150 },
    { src: "/eggplant.png?v=refresh", alt: "มะเขือม่วง", label: "茄子", size: 90 },
    { src: "/sumo.png?v=refresh", alt: "ซูโม่", label: "相撲", size: 130 },
    { src: "/pikachu.png?v=refresh", alt: "ปิกาจู", label: "ピカチュウ", size: 110 },
    { src: "/daruma.png?v=refresh", alt: "ดารุมะ", label: "達磨", size: 100 },
    { src: "/shinkansen.png?v=refresh", alt: "ชินคันเซ็น", label: "新幹線", size: 150 },
    { src: "/ocean.png?v=refresh", alt: "คลื่นทะเล", label: "海", size: 140 },
    { src: "/sushi.png?v=refresh", alt: "ซูชิ", label: "寿司", size: 120 },
    { src: "/sakura-blossom.png?v=refresh", alt: "ดอกซากุระ", label: "桜", size: 80 },
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
                    className="text-sm md:text-base max-w-2xl mx-auto font-medium"
                    style={{ color: "var(--wood-light)" }}
                >
                    ญี่ปุ่นมีสัญลักษณ์มากมายที่สะท้อนวัฒนธรรมอันล้ำค่า
                    ที่นี่คุณจะได้เรียนรู้ทั้งภาษาและความหมายเบื้องหลังสัญลักษณ์เหล่านี้
                </motion.p>
            </div>

            {/* Symbol Cards Grid */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 relative z-10">
                {symbols.map((symbol, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            boxShadow: "0 20px 25px -5px rgba(232, 130, 154, 0.2)",
                        }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col items-center justify-center p-8 cursor-default group transition-all duration-500 overflow-visible h-[320px] md:h-[350px]"
                        style={{
                            backgroundImage: "url('/cardbg.png?v=2')",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {/* No more extra borders or backgrounds here */}


                        {/* Image Container - Centered on the scroll */}
                        <div className="h-24 md:h-28 flex items-center justify-center w-full relative mb-1">
                            <motion.div
                                className="relative z-10"
                                style={{ width: symbol.size, height: symbol.size }}
                                animate={{
                                    y: [2, -6, 2],
                                    rotate: [0, i % 2 === 0 ? 2 : -2, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.2
                                }}
                            >
                                <Image
                                    src={symbol.src}
                                    alt={symbol.alt}
                                    width={180}
                                    height={180}
                                    className="w-full h-full object-contain filter drop-shadow-lg"
                                />
                            </motion.div>
                        </div>

                        {/* Label Container - Pushed down to the bottom area of the scroll */}
                        <div className="w-full flex flex-col items-center relative pb-8 z-10">
                            <h3
                                className="text-lg md:text-xl font-black mb-1 tracking-tight"
                                style={{
                                    fontFamily: "var(--font-mincho)",
                                    color: "#3a2412", // Dark Ink color for contrast on paper
                                }}
                            >
                                {symbol.label}
                            </h3>
                            <p
                                className="text-[10px] md:text-xs font-bold tracking-widest uppercase"
                                style={{ color: "#2d4a1e" }} // Dark Matcha color for contrast
                            >
                                {symbol.alt}
                            </p>
                        </div>

                        {/* Traditional subtle texture overlay on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-sm" />
                    </motion.div>
                ))}
            </div>

            {/* Background floating sakura branches */}
            <div className="absolute top-0 right-0 w-48 md:w-72 opacity-15 pointer-events-none">
                <Image src="/sakura-branch.png?v=upd" alt="" width={400} height={300} className="w-full" />
            </div>
            <div className="absolute bottom-0 left-0 w-40 md:w-60 opacity-10 pointer-events-none rotate-180">
                <Image src="/sakura-branch.png?v=upd" alt="" width={400} height={300} className="w-full" />
            </div>
        </section >
    );
}
