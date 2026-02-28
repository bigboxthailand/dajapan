"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { KanjiText } from "./KanjiTooltip";
import Image from "next/image";

// Eruption particles (paper flowers/smoke)
function EruptionParticle({ delay, x, y }: { delay: number; x: number; y: number }) {
    const colors = ["#ffb7c5", "#ff9eb0", "#ffd700", "#ff6b6b", "#7da55a"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <motion.div
            className="absolute"
            style={{ left: `${50 + x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1.2, 1, 0.5],
                y: [0, -60 - Math.random() * 80],
                x: [0, x * 2],
                rotate: [0, 360],
            }}
            transition={{
                duration: 2.5,
                delay: delay,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeOut",
            }}
        >
            <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill={color} opacity="0.8" />
            </svg>
        </motion.div>
    );
}

export default function FujiPapercraft() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-20%" });
    const [hasAssembled, setHasAssembled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    });

    const assembleProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setHasAssembled(true), 2500);
            return () => clearTimeout(timer);
        } else {
            setHasAssembled(false);
        }
    }, [isInView]);

    const particles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        delay: i * 0.2,
        x: (Math.random() - 0.5) * 30,
        y: 5 + Math.random() * 10,
    }));

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative h-fit pt-20 pb-0 flex flex-col items-center justify-center overflow-hidden"
            style={{
                background: "linear-gradient(180deg, var(--pink-light) 0%, var(--background) 40%, var(--pink-light) 100%)",
            }}
        >
            {/* Cloud decorations */}
            <div className="absolute top-0 left-0 w-36 md:w-56 opacity-20 pointer-events-none">
                <Image src="/clouds.png" alt="" width={300} height={150} className="w-full" />
            </div>
            <div className="absolute top-10 right-0 w-28 md:w-44 opacity-15 pointer-events-none -scale-x-100">
                <Image src="/clouds.png" alt="" width={300} height={150} className="w-full" />
            </div>

            {/* Section header */}
            <div className="text-center z-10 mb-4 px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl mb-2"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--matcha)" }}
                >
                    <KanjiText>知</KanjiText>識を積み重ね、大きな成功へ
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                >
                    ประกอบความรู้ สู่ความสำเร็จที่ยิ่งใหญ่
                </motion.h2>
            </div>

            {/* Papercraft Mt. Fuji using real image - GIGANTIC VERSION */}
            <div className="relative w-full h-[580px] md:h-[800px] mt-10">



                {/* ===== UNIFIED PAPERCRAFT ASSEMBLY GROUP ===== */}
                <motion.div
                    className="absolute inset-x-0 top-0 flex items-start justify-center z-10 h-full pointer-events-none"
                    style={{
                        scale: useTransform(assembleProgress, [0, 0.7], [1.1, 1]),
                        y: useTransform(assembleProgress, [0, 0.6], [100, isMobile ? -20 : -50]),
                        opacity: useTransform(assembleProgress, [0.05, 0.3], [0, 1]),
                    }}
                >
                    <div className="relative w-full max-w-[1000px] aspect-[1/1] flex items-center justify-center">

                        {/* 1. Rising Sun - Centered behind the new high peak */}
                        <motion.div
                            className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 z-[5]"
                            style={{ top: isMobile ? "25%" : "32%" }}
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 0.9 }}
                            transition={{ duration: 2, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Image src="/sun.png?v=refresh" alt="Sun" width={600} height={600} className="w-64 md:w-[600px] h-auto opacity-80" />
                        </motion.div>

                        {/* 2. Main Mt. Fuji Scene Image (New Papercraft Version) */}
                        <motion.div
                            className="absolute inset-0 z-10 flex items-center justify-center"
                            initial={{ filter: "blur(10px)", opacity: 0, scale: 0.9 }}
                            whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/fuji2.png?v=refresh"
                                alt="Mount Fuji Papercraft"
                                width={320}
                                height={320}
                                className="w-[80%] md:w-[70%] h-auto drop-shadow-2xl"
                                style={{ objectFit: 'contain' }}
                            />
                        </motion.div>







                        {/* 6. Hawk - Sweeping in from top right corner */}
                        <motion.div
                            className="absolute z-20"
                            style={{ top: isMobile ? "10%" : "12%", right: isMobile ? "15%" : "5%" }}
                            initial={{ x: 150, opacity: 0, rotate: 15 }}
                            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                default: { duration: 1.5, delay: 1.4, type: "spring" },
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                            viewport={{ once: true }}
                        >
                            <Image src="/hawk.png?v=refresh" alt="Hawk" width={180} height={180} className="w-24 md:w-40 h-auto drop-shadow-xl" />
                        </motion.div>

                        {/* 7. Sakura Blossom - Floating high in the left corner */}
                        <motion.div
                            className="absolute z-20"
                            style={{ top: "10%", left: "8%" }}
                            initial={{ y: -50, opacity: 0, rotate: -20 }}
                            whileInView={{ y: 0, opacity: 0.9, rotate: 0 }}
                            animate={{ rotate: [0, 15, 0], y: [0, 8, 0] }}
                            transition={{
                                default: { duration: 2, delay: 2.4 },
                                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                            }}
                            viewport={{ once: true }}
                        >
                            <Image src="/sakura-blossom.png?v=refresh" alt="Sakura" width={100} height={100} className="w-16 md:w-20 h-auto" />
                        </motion.div>



                        {/* 9. Sumo - Returns for Desktop View */}
                        {!isMobile && (
                            <motion.div
                                className="absolute z-30"
                                style={{ bottom: "20%", right: "15%" }}
                                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    default: { duration: 1.2, delay: 2.5, type: "spring" },
                                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                                viewport={{ once: true }}
                            >
                                <Image src="/sumo.png?v=refresh" alt="Sumo" width={120} height={120} className="w-28 h-auto drop-shadow-lg" />
                            </motion.div>
                        )}

                    </div>
                </motion.div>

                {/* Eruption particles */}
                {hasAssembled && (
                    <div className="absolute top-4 md:top-0 left-1/2 -translate-x-1/2 w-full h-40 z-20">
                        {particles.map((p) => (
                            <EruptionParticle key={p.id} delay={p.delay} x={p.x} y={p.y} />
                        ))}
                    </div>
                )}
            </div>

            {/* Body text */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto text-center px-6 z-10 mt-8 md:mt-32"
            >
                <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "var(--wood-light)" }}>
                    เช่นเดียวกับภูเขาไฟฟูจิที่ยิ่งใหญ่ การใช้ภาษาต้องสร้างจากรากฐานที่มั่นคง
                    เราจะช่วยคุณประกอบทักษะทีละชิ้น
                    จนคุณสามารถระเบิดศักยภาพการสื่อสารออกมาได้อย่างเป็นธรรมชาติและมั่นใจ
                </p>
                <p
                    className="text-sm md:text-base leading-relaxed opacity-50"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                >
                    壮大な富士山のように、<KanjiText>語学</KanjiText>の習得には確固たる基礎が必要です。私たちは、あなたが<KanjiText>自</KanjiText>然に、そして<KanjiText>自</KanjiText>信を持ってコミュニケーションの才能を開花させるまで、スキルを一つずつ組み立てるお手伝いをします。
                </p>
            </motion.div>
        </section>
    );
}
