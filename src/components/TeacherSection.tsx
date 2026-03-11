"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function TeacherSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={sectionRef}
            id="teacher"
            className="relative min-h-screen py-20 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, var(--background) 0%, var(--pink-light) 50%, var(--pink-soft) 100%)",
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5" style={{ background: "var(--matcha)" }} />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-5" style={{ background: "var(--sakura)" }} />

                {/* Sakura branch decoration */}
                <div className="absolute top-0 right-0 w-44 md:w-72 opacity-30 pointer-events-none">
                    <Image src="/sakura-branch.png?v=upd" alt="" width={400} height={300} className="w-full h-auto" />
                </div>

                {/* Seigaiha wave pattern */}
                <svg className="absolute bottom-0 left-0 w-full opacity-5" viewBox="0 0 1200 120">
                    {[...Array(12)].map((_, i) => (
                        <g key={i}>
                            <path
                                d={`M${i * 100} 120 Q${i * 100 + 50} 60 ${(i + 1) * 100} 120`}
                                fill="none" stroke="var(--matcha)" strokeWidth="2"
                            />
                            <path
                                d={`M${i * 100} 120 Q${i * 100 + 50} 80 ${(i + 1) * 100} 120`}
                                fill="none" stroke="var(--matcha)" strokeWidth="1.5"
                            />
                        </g>
                    ))}
                </svg>
            </div>

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
                    専門の先生と一緒に、言葉を深く味わう
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                >
                    ดื่มด่ำกับภาษา ผ่านเซนเซผู้เชี่ยวชาญ
                </motion.h2>
            </div>

            {/* Asymmetric layout */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {/* Video Section - Traditional Japanese Window Shape */}
                <motion.div
                    className="lg:col-span-5 flex justify-center"
                    initial={{ opacity: 0, x: -80, rotate: -5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="relative">
                        {/* Traditional Japanese window frame */}
                        <div
                            className="relative rounded-t-full overflow-hidden shadow-2xl"
                            style={{
                                width: "min(380px, 85vw)",
                                aspectRatio: "3/4",
                                border: "8px solid #4a2c2a",
                                borderRadius: "50% 50% 8px 8px",
                            }}
                        >
                            {/* Window grid bars */}
                            <div className="absolute inset-0 z-10 pointer-events-none">
                                <div className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2" style={{ background: "#4a2c2a" }} />
                                <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2" style={{ background: "#4a2c2a" }} />
                            </div>

                            {/* Nat San Sensei Video */}
                            <video
                                loop autoPlay playsInline controls
                                className="w-full h-full object-cover"
                            >
                                <source
                                    src="/nat-san-sensei.mp4"
                                    type="video/mp4"
                                />
                            </video>

                            {/* Overlay gradient */}
                            <div
                                className="absolute inset-0 z-5 pointer-events-none"
                                style={{ background: "linear-gradient(180deg, transparent 60%, rgba(74, 55, 40, 0.3) 100%)" }}
                            />
                        </div>

                        {/* Decorative sakura blossoms */}
                        <motion.div
                            className="absolute -top-6 -left-6 w-12 h-12"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Image src="/sakura-blossom.png" alt="" width={48} height={48} className="w-full h-full" />
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-4 -right-4 w-10 h-10"
                            animate={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        >
                            <Image src="/sakura-blossom.png" alt="" width={40} height={40} className="w-full h-full -scale-x-100" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Text content */}
                <div className="lg:col-span-7">
                    {/* Sensei name */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h3
                            className="text-2xl md:text-4xl font-bold mb-2"
                            style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                        >
                            เซนเซ Nat San
                        </h3>
                        <p
                            className="text-lg md:text-xl"
                            style={{ fontFamily: "var(--font-mincho)", color: "var(--matcha)" }}
                        >
                            ナットさん先生 — The Matcha Master
                        </p>
                    </motion.div>

                    {/* Teacher's Greeting - Thai */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <div
                            className="p-6 rounded-2xl relative overflow-hidden"
                            style={{
                                background: "var(--washi)",
                                border: "1px solid rgba(90, 125, 55, 0.3)",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div className="absolute inset-0 opacity-10 washi-pattern pointer-events-none" />
                            <span
                                className="absolute -top-4 -left-2 text-5xl opacity-20"
                                style={{ fontFamily: "serif", color: "var(--matcha)" }}
                            >
                                &ldquo;
                            </span>
                            <p
                                className="text-base md:text-lg leading-relaxed relative z-10 font-medium"
                                style={{ color: "var(--foreground)" }}
                            >
                                ยินดีต้อนรับค่ะ! ฉัน Nat San เซนเซของคุณ สำหรับฉันแล้ว
                                การเรียนภาษาญี่ปุ่นไม่ใช่แค่การท่องจำตำรา
                                แต่คือการซึมซับวิถีชีวิตและวัฒนธรรม
                                มาจิบชาสบายๆ แล้วเรียนรู้ไปด้วยกันนะคะ
                            </p>
                        </div>
                    </motion.div>

                    {/* Teacher's Greeting - Japanese */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <p
                            className="text-sm md:text-base leading-relaxed opacity-50 pl-4"
                            style={{
                                fontFamily: "var(--font-mincho)",
                                color: "var(--wood)",
                                borderLeft: "3px solid var(--matcha)",
                            }}
                        >
                            ようこそ！あなたの先生の ナットさん です。私にとって日本語を学ぶことは、ただ教科書を暗記することではなく、生活や文化を吸収することです。お茶を飲みながら、リラックスして一緒に学びましょう。
                        </p>
                    </motion.div>

                    {/* Feature cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { icon: "🍵", title: "สอนสนุก", desc: "เข้าใจง่ายด้วยวิธีเฉพาะตัว" },
                            { icon: "📚", title: "ครบทุกระดับ", desc: "ตั้งแต่ N5 จนถึง N1" },
                            { icon: "🎌", title: "วัฒนธรรมแท้ๆ", desc: "เรียนรู้ผ่านวัฒนธรรมจริง" },
                        ].map((feat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                                viewport={{ once: true }}
                                className="p-4 rounded-2xl text-center transition-all hover:scale-105 cursor-default"
                                style={{
                                    background: "var(--washi)",
                                    border: "1px solid rgba(90, 125, 55, 0.3)",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <span className="text-3xl block mb-2">{feat.icon}</span>
                                <h4 className="font-bold text-sm md:text-base mb-1" style={{ color: "var(--wood)" }}>{feat.title}</h4>
                                <p className="text-xs md:text-sm" style={{ color: "var(--wood-light)" }}>{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                        className="mt-10"
                    >
                        <a href="https://lin.ee/yHWc9AL" target="_blank" rel="noopener noreferrer" className="btn-sakura text-base cursor-pointer inline-block px-8 py-3">
                            🍵 นัดเรียนกับเซนเซ Nat San
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
