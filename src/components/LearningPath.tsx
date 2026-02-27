"use client";

import { motion } from "framer-motion";

const steps = [
    {
        level: "N5",
        title: "พื้นฐาน — ก้าวแรก",
        jp: "初級 — 第一歩",
        desc: "เริ่มต้นจากฮิรางานะ คาตาคานะ และคำศัพท์พื้นฐาน 800 คำ",
        icon: "🌱",
        color: "#7da55a",
    },
    {
        level: "N4",
        title: "เบื้องต้น — สนทนาเบื้องต้น",
        jp: "初中級 — 日常会話",
        desc: "ไวยากรณ์ยกระดับ สื่อสารในชีวิตประจำวันได้",
        icon: "🌿",
        color: "#5a7d37",
    },
    {
        level: "N3",
        title: "กลาง — เข้าใจเนื้อหา",
        jp: "中級 — 内容理解",
        desc: "อ่านข่าว ดูอนิเมะเข้าใจ สนทนาหลากหลายหัวข้อ",
        icon: "🌳",
        color: "#4a6d27",
    },
    {
        level: "N2",
        title: "สูง — คล่องแคล่ว",
        jp: "上級 — 流暢",
        desc: "ทำงานเป็นภาษาญี่ปุ่นได้ อ่านนิยายและเอกสาร",
        icon: "🗻",
        color: "#3a5c17",
    },
    {
        level: "N1",
        title: "เชี่ยวชาญ — เป็นมืออาชีพ",
        jp: "最上級 — プロ",
        desc: "ใช้ภาษาญี่ปุ่นได้เทียบเท่าเจ้าของภาษา ทั้งธุรกิจและวิชาการ",
        icon: "🏯",
        color: "#2a4c07",
    },
];

export default function LearningPath() {
    return (
        <section
            id="roadmap"
            className="relative py-20 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #ffe8ed 0%, #fff0f3 50%, #fdfaf5 100%)",
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
                    学びの道 — เส้นทางแห่งการเรียนรู้
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

            {/* Scroll/Kamimono wrapper */}
            <div className="max-w-4xl mx-auto px-6 relative">
                {/* Scroll top roller */}
                <div
                    className="relative h-8 rounded-full mb-0 z-10 shadow-md"
                    style={{
                        background: "linear-gradient(180deg, #8b6914, #654d10, #8b6914)",
                        border: "1px solid #4a3810",
                    }}
                >
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ background: "#ffd700" }} />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ background: "#ffd700" }} />
                </div>

                {/* Paper scroll body */}
                <div
                    className="relative px-6 md:px-12 py-10"
                    style={{
                        background: "linear-gradient(90deg, #f0e6d2, #faf4e8 10%, #faf4e8 90%, #f0e6d2)",
                        borderLeft: "3px solid #d4c4a8",
                        borderRight: "3px solid #d4c4a8",
                        backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
                    }}
                >
                    {/* Vertical path line */}
                    <div className="absolute left-10 md:left-16 top-0 bottom-0 w-0.5" style={{ background: "var(--sakura)" }} />

                    {/* Steps */}
                    <div className="space-y-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative flex gap-6 items-start pl-8 md:pl-12"
                            >
                                {/* Step circle */}
                                <motion.div
                                    className="absolute left-[22px] md:left-[38px] w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold z-10 shadow-md"
                                    style={{ background: step.color }}
                                    whileHover={{ scale: 1.2 }}
                                >
                                    {step.icon}
                                </motion.div>

                                {/* Step content */}
                                <div
                                    className="flex-1 ml-8 p-5 rounded-xl transition-all hover:shadow-md"
                                    style={{
                                        background: "rgba(255,255,255,0.7)",
                                        border: `2px solid ${step.color}20`,
                                    }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <span
                                            className="text-xs px-3 py-1 rounded-full font-bold text-white"
                                            style={{ background: step.color }}
                                        >
                                            {step.level}
                                        </span>
                                        <h3
                                            className="text-lg font-bold"
                                            style={{ color: "var(--wood)" }}
                                        >
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p
                                        className="text-sm mb-1 opacity-40"
                                        style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                                    >
                                        {step.jp}
                                    </p>
                                    <p className="text-sm" style={{ color: "var(--wood-light)" }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Scroll bottom roller */}
                <div
                    className="relative h-8 rounded-full mt-0 z-10 shadow-md"
                    style={{
                        background: "linear-gradient(180deg, #8b6914, #654d10, #8b6914)",
                        border: "1px solid #4a3810",
                    }}
                >
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ background: "#ffd700" }} />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ background: "#ffd700" }} />
                </div>
            </div>
        </section>
    );
}
