"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const courses = [
    {
        id: "conversation",
        title: "สนทนา",
        jp: "会話コース",
        desc: "ฝึกพูดเพื่อใช้งานจริง สั่งอาหาร ถามทาง ช็อปปิ้ง",
        bgImage: "https://images.unsplash.com/photo-1583002529023-ecabf51e39e2?auto=format&fit=crop&q=80&w=800",
        price: "฿2,900",
        color: "#ffab91",
    },
    {
        id: "kanji",
        title: "คันจิ",
        jp: "漢字コース",
        desc: "เรียนคันจิตั้งแต่พื้นฐานจนอ่านหนังสือพิมพ์ได้",
        bgImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
        price: "฿3,500",
        color: "#ffcc80",
    },
    {
        id: "grammar",
        title: "ไวยากรณ์",
        jp: "文法コース",
        desc: "เข้าใจโครงสร้างภาษาอย่างลึก เตรียมสอบ JLPT",
        bgImage: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=800",
        price: "฿3,200",
        color: "#a5d6a7",
    },
    {
        id: "culture",
        title: "วัฒนธรรม",
        jp: "文化コース",
        desc: "เรียนรู้ขนบธรรมเนียม มารยาท และเทศกาลญี่ปุ่น",
        bgImage: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=800",
        price: "฿2,500",
        color: "#f48fb1",
    },
    {
        id: "business",
        title: "ธุรกิจ",
        jp: "ビジネスコース",
        desc: "ภาษาญี่ปุ่นสำหรับการทำงาน เขียนอีเมล ประชุม",
        bgImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800",
        price: "฿4,500",
        color: "#90caf9",
    },
    {
        id: "travel",
        title: "ท่องเที่ยว",
        jp: "旅行コース",
        desc: "ภาษาญี่ปุ่นสำหรับเที่ยวญี่ปุ่น อ่านป้าย สั่งอาหาร",
        bgImage: "https://images.unsplash.com/photo-1490761668535-3149d28a401e?auto=format&fit=crop&q=80&w=800",
        price: "฿1,900",
        color: "#ce93d8",
    },
];

export default function BentoBox() {
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

    const toggleCourse = (id: string) => {
        setSelectedCourses((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    const totalPrice = selectedCourses.reduce((sum, id) => {
        const course = courses.find((c) => c.id === id);
        return sum + (course ? parseInt(course.price.replace(/[^\d]/g, "")) : 0);
    }, 0);

    return (
        <section
            id="courses"
            className="relative py-20 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, var(--background) 0%, var(--pink-light) 50%, var(--background) 100%)",
            }}
        >
            {/* Section header */}
            <div className="text-center mb-12 px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl mb-2"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--matcha)" }}
                >
                    お弁当 — จัดกล่องเบนโตะของคุณ
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                >
                    เลือกคอร์สที่ใช่ ใส่กล่องเบนโตะ
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-sm opacity-60 max-w-lg mx-auto"
                    style={{ color: "var(--wood-light)" }}
                >
                    คลิกเลือกคอร์สที่สนใจเพื่อ &quot;หยิบ&quot; ใส่กล่องเบนโตะของคุณ
                </motion.p>
            </div>

            {/* Bento Box Grid */}
            <div className="max-w-5xl mx-auto px-6">
                <div
                    className="rounded-3xl p-4 md:p-6 shadow-xl"
                    style={{
                        background: "linear-gradient(135deg, #4a2c2a, #3a1c1a)",
                        border: "4px solid #2a0c0a",
                    }}
                >
                    {/* Inner bento compartments */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {courses.map((course, i) => {
                            const isSelected = selectedCourses.includes(course.id);
                            return (
                                <motion.button
                                    key={course.id}
                                    onClick={() => toggleCourse(course.id)}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative h-64 md:h-80 rounded-xl overflow-hidden cursor-pointer group shadow-2xl border-4"
                                    style={{
                                        borderColor: isSelected ? course.color : "#2a0c0a",
                                    }}
                                >
                                    {/* Background Image with Dark Overlay */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={course.bgImage}
                                            alt={course.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 transition-opacity duration-300"
                                            style={{
                                                background: isSelected
                                                    ? `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))`
                                                    : `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9))`
                                            }}
                                        />
                                    </div>

                                    {/* Japanese Stamp for Selection */}
                                    {isSelected && (
                                        <motion.div
                                            initial={{ scale: 0, rotate: -20 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            className="absolute top-4 right-4 w-10 h-10 border-2 border-white rounded-sm flex items-center justify-center font-bold text-white z-20 bg-red-600 shadow-lg"
                                        >
                                            選
                                        </motion.div>
                                    )}

                                    {/* Content Centered on Background */}
                                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                                        <motion.div
                                            className="mb-2 w-8 h-[2px] bg-white opacity-40"
                                            animate={isSelected ? { width: 40, opacity: 1 } : {}}
                                        />

                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg" style={{ fontFamily: "var(--font-mincho)" }}>
                                            {course.title}
                                        </h3>

                                        <p className="text-sm font-medium mb-3 tracking-widest text-white/90" style={{ color: course.color }}>
                                            {course.jp}
                                        </p>

                                        <p className="text-xs text-white/70 line-clamp-3 mb-4 max-w-[180px] leading-relaxed">
                                            {course.desc}
                                        </p>

                                        <div className="mt-auto">
                                            <p className="text-xl font-bold text-white tracking-wider">
                                                {course.price}
                                            </p>
                                            <div className="h-[1px] w-full bg-white/20 mt-1" />
                                        </div>
                                    </div>

                                    {/* Hover Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* Selected courses summary (Bento lid) */}
                <AnimatePresence>
                    {selectedCourses.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: 20, height: 0 }}
                            className="mt-6 rounded-2xl p-6 text-center"
                            style={{
                                background: "rgba(255,255,255,0.8)",
                                border: "2px solid var(--sakura)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            <p className="text-sm mb-2" style={{ color: "var(--wood-light)" }}>
                                🍱 กล่องเบนโตะของคุณ ({selectedCourses.length} คอร์ส)
                            </p>
                            <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
                                {selectedCourses.map((id) => {
                                    const course = courses.find((c) => c.id === id)!;
                                    return (
                                        <motion.div
                                            key={id}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="flex items-center gap-2 px-3 py-1 rounded-full text-sm border"
                                            style={{ background: `${course.color}10`, color: course.color, borderColor: `${course.color}30` }}
                                        >
                                            <div className="relative w-5 h-5 rounded-full overflow-hidden border border-white/20">
                                                <Image src={course.bgImage} alt="" fill className="object-cover" />
                                            </div>
                                            {course.title}
                                        </motion.div>
                                    );
                                })}
                            </div>
                            <p className="text-2xl font-bold mb-4" style={{ color: "var(--matcha)" }}>
                                รวม ฿{totalPrice.toLocaleString()}
                            </p>
                            <button className="btn-sakura cursor-pointer">
                                สั่งเบนโตะ — เริ่มเรียนเลย! 🍱
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}


