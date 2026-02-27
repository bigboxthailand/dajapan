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

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    });

    const assembleProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
            className="relative min-h-screen py-20 flex flex-col items-center justify-center overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #ffe8ed 0%, #fff0f3 40%, #ffe8ed 100%)",
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

            {/* Papercraft Mt. Fuji using real image */}
            <div className="relative w-full max-w-3xl mx-auto h-[400px] md:h-[500px]">

                {/* ===== Rising Sun behind Mt. Fuji ===== */}
                <motion.div
                    className="absolute z-[1] pointer-events-none"
                    style={{
                        top: "5%",
                        left: "50%",
                        translateX: "-50%",
                    }}
                    initial={{ opacity: 0, y: 80, scale: 0.3 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.8,
                        delay: 0.3,
                        ease: "easeOut",
                        // Bounce effect
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                    }}
                    viewport={{ once: true }}
                >
                    {/* Golden glow behind sun */}
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                            width: 200,
                            height: 200,
                            background: "radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,165,0,0.1) 50%, transparent 70%)",
                            transform: "translate(-50%, -50%)",
                            left: "50%",
                            top: "50%",
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <Image
                        src="/sun.png"
                        alt="Rising Sun"
                        width={180}
                        height={180}
                        className="w-32 md:w-44 h-auto drop-shadow-lg"
                    />
                </motion.div>

                {/* ===== Hawk flying across ===== */}
                <motion.div
                    className="absolute z-20 pointer-events-none"
                    style={{ top: "8%", left: "-15%" }}
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{
                        x: ["0%", "400%", "800%"],
                        y: [0, -40, -20, -60, -30],
                        opacity: [0, 1, 1, 1, 0],
                    }}
                    transition={{
                        duration: 5,
                        delay: 1.5,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/hawk.png"
                        alt="Hawk flying"
                        width={100}
                        height={100}
                        className="w-16 md:w-24 h-auto"
                    />
                </motion.div>

                {/* Second hawk (smaller, delayed) */}
                <motion.div
                    className="absolute z-20 pointer-events-none"
                    style={{ top: "15%", left: "-10%" }}
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{
                        x: ["0%", "500%", "1000%"],
                        y: [0, -30, -10, -50, -20],
                        opacity: [0, 0.7, 0.7, 0.7, 0],
                    }}
                    transition={{
                        duration: 6,
                        delay: 2.5,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/hawk.png"
                        alt=""
                        width={60}
                        height={60}
                        className="w-10 md:w-14 h-auto opacity-70"
                    />
                </motion.div>

                {/* Mt. Fuji image - assembles with bounce */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    style={{
                        scale: useTransform(assembleProgress, [0, 0.7], [0.7, 1]),
                        opacity: useTransform(assembleProgress, [0.05, 0.5], [0, 1]),
                        y: useTransform(assembleProgress, [0, 0.6], [80, 0]),
                    }}
                >
                    {/* Bounce effect on Fuji when it appears */}
                    <motion.div
                        initial={{ scale: 0.8, y: 40 }}
                        whileInView={{ scale: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 10,
                            delay: 0.5,
                        }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/fuji.png"
                            alt="Papercraft Mount Fuji"
                            width={700}
                            height={500}
                            className="w-[85%] md:w-[75%] h-auto drop-shadow-2xl mx-auto"
                            priority
                        />
                    </motion.div>
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
                className="max-w-2xl mx-auto text-center px-6 z-10"
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
