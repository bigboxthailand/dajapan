"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        level: "N5",
        title: "พื้นฐาน — ก้าวแรก",
        jp: "初級 — 第一歩",
        desc: "เริ่มต้นจากฮิรางานะ คาตาคานะ และคำศัพท์พื้นฐาน 800 คำ",
        icon: "🌱",
        color: "#7da55a",
        label: "เริ่มต้น",
    },
    {
        level: "N4",
        title: "เบื้องต้น —日常会話",
        jp: "初中級 — 日常会話",
        desc: "ไวยากรณ์ยกระดับ สื่อสารในชีวิตประจำวันได้",
        icon: "🌿",
        color: "#5a7d37",
        label: "ก้าวหน้า",
    },
    {
        level: "N3",
        title: "กลาง — เข้าใจเนื้อหา",
        jp: "中級 — 内容理解",
        desc: "อ่านข่าว ดูอนิเมะเข้าใจ สนทนาหลากหลายหัวข้อ",
        icon: "🌳",
        color: "#d4896b",
        label: "สื่อสาร",
    },
    {
        level: "N2",
        title: "สูง — คล่องแคล่ว",
        jp: "上級 — 流暢",
        desc: "ทำงานเป็นภาษาญี่ปุ่นได้ อ่านนิยายและเอกสาร",
        icon: "🗻",
        color: "#e8829a",
        label: "มืออาชีพ",
    },
    {
        level: "N1",
        title: "เชี่ยวชาญ — โปร",
        jp: "最上級 — プロ",
        desc: "ใช้ภาษาญี่ปุ่นได้เทียบเท่าเจ้าของภาษา ทั้งธุรกิจและวิชาการ",
        icon: "🏯",
        color: "#4a3728",
        label: "ชำนาญ",
    },
];

export default function LearningPath() {
    return (
        <section
            id="roadmap"
            className="relative py-24 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, var(--background) 0%, var(--pink-light) 50%, var(--background) 100%)",
            }}
        >
            {/* Background Decorative Cloud Patterns */}
            <div className="absolute top-20 left-0 w-64 opacity-10 pointer-events-none">
                <Image src="/clouds.png" alt="" width={300} height={150} />
            </div>
            <div className="absolute bottom-40 right-0 w-80 opacity-10 pointer-events-none -scale-x-100">
                <Image src="/clouds.png" alt="" width={300} height={150} />
            </div>

            {/* Section header */}
            <div className="text-center mb-20 px-6 relative z-10">
                <motion.div
                    className="flex justify-center mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                >
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg">
                        道
                    </div>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl mb-2 tracking-widest"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--matcha)" }}
                >
                    学びの道 — JOURNEY TO MASTERY
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                >
                    เส้นทางสู่ความเชี่ยวชาญ
                </motion.h2>
            </div>

            {/* Vertical Roadmap Journey */}
            <div className="max-w-4xl mx-auto px-6 relative">

                {/* Visual Connector Line (Brush stroke feel) */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[6px] hidden md:block"
                    style={{
                        background: "var(--sakura)",
                        opacity: 0.3,
                        maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                    }}
                />

                <div className="relative space-y-16 md:space-y-24">
                    {steps.map((step, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.15 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Level Badge / Node */}
                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center text-white border-4 border-white shadow-xl relative overflow-hidden"
                                        style={{ backgroundColor: step.color }}
                                    >
                                        <div className="absolute inset-0 opacity-10 washi-pattern" />
                                        <span className="text-xl md:text-2xl font-black mb-0">{step.level}</span>
                                        <span className="text-[10px] uppercase font-bold tracking-tighter opacity-80">{step.label}</span>

                                        {/* Floating petal decoration on the node */}
                                        <motion.div
                                            className="absolute -top-2 -right-2 text-lg"
                                            animate={{ y: [-2, 2, -2], rotate: [0, 15, 0] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        >
                                            🌸
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 w-full text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                                    <div
                                        className="p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-all"
                                        style={{
                                            background: "var(--washi)",
                                            border: "1px solid rgba(139, 90, 43, 0.1)",
                                            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)"
                                        }}
                                    >
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
                                            <div className="w-full h-full" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/seigaiha.png')", backgroundSize: '100px' }} />
                                        </div>

                                        <div className={`flex items-center gap-3 mb-3 justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                                            <span className="text-2xl">{step.icon}</span>
                                            <h3 className="text-2xl font-bold" style={{ color: "var(--wood)" }}>{step.title}</h3>
                                        </div>

                                        <p className="text-lg mb-3 tracking-wide" style={{ fontFamily: "var(--font-mincho)", color: step.color }}>
                                            {step.jp}
                                        </p>

                                        <p className="text-sm md:text-base leading-relaxed font-medium" style={{ color: "var(--wood-light)" }}>
                                            {step.desc}
                                        </p>

                                        {/* Hanko-style stamp */}
                                        <div className="absolute top-4 right-4 text-[10px] w-8 h-8 flex items-center justify-center border-2 border-red-600 rounded-sm opacity-5 group-hover:opacity-30 transition-opacity font-bold text-red-600 rotate-12">
                                            {step.level}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Final Goal Decoration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-20 text-center flex flex-col items-center gap-6"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-var(--sakura) to-transparent" />
                    <div
                        className="px-8 py-3 rounded-full border-2 border-dashed font-bold text-lg tracking-widest"
                        style={{ borderColor: "var(--matcha)", color: "var(--matcha)" }}
                    >
                        GOAL: FLUENCY & CULTURAL DEEP DIVE
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
