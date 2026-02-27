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
        icon: "/sushi.png",
        label: "🍣 ซูชิ",
        price: "฿2,900",
        color: "#ff8a65",
    },
    {
        id: "kanji",
        title: "คันจิ",
        jp: "漢字コース",
        desc: "เรียนคันจิตั้งแต่พื้นฐานจนอ่านหนังสือพิมพ์ได้",
        icon: "/sun.png",
        label: "☀️ พระอาทิตย์",
        price: "฿3,500",
        color: "#ef5350",
    },
    {
        id: "grammar",
        title: "ไวยากรณ์",
        jp: "文法コース",
        desc: "เข้าใจโครงสร้างภาษาอย่างลึก เตรียมสอบ JLPT",
        icon: "/eggplant.png",
        label: "🍆 มะเขือม่วง",
        price: "฿3,200",
        color: "#7e57c2",
    },
    {
        id: "culture",
        title: "วัฒนธรรม",
        jp: "文化コース",
        desc: "เรียนรู้ขนบธรรมเนียม มารยาท และเทศกาลญี่ปุ่น",
        icon: "/sakura-blossom.png",
        label: "🌸 ซากุระ",
        price: "฿2,500",
        color: "#ec407a",
    },
    {
        id: "business",
        title: "ธุรกิจ",
        jp: "ビジネスコース",
        desc: "ภาษาญี่ปุ่นสำหรับการทำงาน เขียนอีเมล ประชุม",
        icon: "/hawk.png",
        label: "🦅 นกเหยี่ยว",
        price: "฿4,500",
        color: "#8d6e63",
    },
    {
        id: "travel",
        title: "ท่องเที่ยว",
        jp: "旅行コース",
        desc: "ภาษาญี่ปุ่นสำหรับเที่ยวญี่ปุ่น อ่านป้าย สั่งอาหาร",
        icon: "/ocean.png",
        label: "🌊 ทะเล",
        price: "฿1,900",
        color: "#42a5f5",
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
                background: "linear-gradient(180deg, #fff0f3 0%, #ffe8ed 50%, #fff0f3 100%)",
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
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative rounded-2xl p-4 md:p-5 text-left cursor-pointer transition-all"
                                    style={{
                                        background: isSelected
                                            ? `linear-gradient(135deg, ${course.color}22, ${course.color}11)`
                                            : "rgba(255,255,255,0.95)",
                                        border: isSelected
                                            ? `3px solid ${course.color}`
                                            : "3px solid transparent",
                                        boxShadow: isSelected
                                            ? `0 0 20px ${course.color}33, inset 0 0 20px ${course.color}11`
                                            : "0 2px 8px rgba(0,0,0,0.05)",
                                    }}
                                >
                                    {/* Selected indicator */}
                                    {isSelected && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm z-10"
                                            style={{ background: course.color }}
                                        >
                                            ✓
                                        </motion.div>
                                    )}

                                    {/* Food icon */}
                                    <motion.div
                                        className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3"
                                        animate={isSelected ? { rotate: [0, -10, 10, -5, 0] } : {}}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Image
                                            src={course.icon}
                                            alt={course.label}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain drop-shadow-md"
                                        />
                                    </motion.div>

                                    {/* Course info */}
                                    <h3
                                        className="font-bold text-base md:text-lg mb-1"
                                        style={{ color: "var(--wood)" }}
                                    >
                                        {course.title}
                                    </h3>
                                    <p
                                        className="text-xs mb-2 opacity-40"
                                        style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
                                    >
                                        {course.jp}
                                    </p>
                                    <p className="text-xs mb-3 opacity-60 hidden md:block" style={{ color: "var(--wood-light)" }}>
                                        {course.desc}
                                    </p>
                                    <p className="font-bold text-sm" style={{ color: course.color }}>
                                        {course.price}
                                    </p>
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
                                            className="flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                                            style={{ background: `${course.color}20`, color: course.color }}
                                        >
                                            <Image src={course.icon} alt="" width={20} height={20} className="w-5 h-5" />
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


