"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function ToriiFooter() {
    const { mode } = useTheme();
    const isNight = mode === "night";
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
        }
    };

    return (
        <footer id="footer" className="relative overflow-hidden">
            {/* Torii Gate Image Background */}
            <div className="relative">
                <Image
                    src="/torii.png"
                    alt="Torii Gate at sunset"
                    width={1200}
                    height={800}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                    priority={false}
                />
                {/* Gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: isNight
                            ? "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(74,55,40,0.7) 60%, rgba(26,15,46,0.95) 100%)"
                            : "linear-gradient(180deg, rgba(255,240,243,0) 0%, rgba(255,240,243,0.5) 60%, rgba(255,240,243,1) 100%)",
                    }}
                />

                {/* Text overlay on Torii image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-base md:text-lg mb-2"
                        style={{ fontFamily: "var(--font-mincho)", color: isNight ? "rgba(255,255,255,0.7)" : "var(--wood)" }}
                    >
                        門をくぐれば、新しい自分に出会える
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-bold text-center mb-3"
                        style={{ fontFamily: "var(--font-mincho)", color: isNight ? "white" : "var(--wood)" }}
                    >
                        ก้าวข้ามประตูโทริอิ สู่ตัวตนใหม่ของคุณ
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-sm text-center max-w-lg"
                        style={{ color: isNight ? "rgba(255,255,255,0.5)" : "var(--wood-light)" }}
                    >
                        เหมือนเสาโทริอิที่เป็นประตูเชื่อมโลกมนุษย์กับสิ่งศักดิ์สิทธิ์
                        การเรียนภาษาจะเปิดประตูสู่โลกใหม่ที่คุณไม่เคยสัมผัสมาก่อน
                    </motion.p>
                </div>
            </div>

            {/* Newsletter + Footer Content */}
            <div
                className="relative py-16 px-6"
                style={{
                    background: isNight
                        ? "linear-gradient(180deg, #120b08, #000000)"
                        : "linear-gradient(180deg, #fffcf5, #ffffff)"
                }}
            >
                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto text-center mb-16"
                >
                    <span className="text-3xl block mb-4">🕊️</span>
                    <h3
                        className="text-xl md:text-2xl font-bold mb-3"
                        style={{ fontFamily: "var(--font-mincho)", color: isNight ? "white" : "var(--wood)" }}
                    >
                        รับบทเรียนสั้นๆ และคำศัพท์ประจำวัน
                    </h3>
                    <p className="text-sm mb-6" style={{ color: isNight ? "rgba(255,255,255,0.5)" : "var(--wood-light)" }}>
                        ส่งตรงถึงนกพิราบสื่อสารของคุณ (อีเมล) 📧
                    </p>

                    {subscribed ? (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="p-4 rounded-2xl"
                            style={{
                                background: isNight ? "rgba(90,125,55,0.2)" : "rgba(90,125,55,0.1)",
                                border: "1px solid var(--matcha)"
                            }}
                        >
                            <p className="text-lg" style={{ color: isNight ? "white" : "var(--matcha)" }}>🎉 ありがとうございます!</p>
                            <p className="text-sm" style={{ color: isNight ? "rgba(255,255,255,0.6)" : "var(--wood-light)" }}>ขอบคุณค่ะ! เราจะส่งบทเรียนให้คุณเร็วๆ นี้</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
                            <div className="flex-1 relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full px-5 py-3 rounded-full text-sm outline-none focus:ring-2 transition-all"
                                    style={{
                                        background: isNight ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                                        border: `2px solid ${isNight ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"}`,
                                        color: isNight ? "white" : "var(--wood)",
                                    }}
                                />
                                {/* Brush stroke decoration */}
                                <div
                                    className="absolute -bottom-1 left-4 right-4 h-0.5 opacity-30"
                                    style={{
                                        background: "linear-gradient(90deg, transparent, var(--sakura), transparent)",
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-full text-sm font-medium cursor-pointer transition-all hover:scale-105"
                                style={{
                                    background: "linear-gradient(135deg, var(--sakura), var(--sakura-deep))",
                                    color: isNight ? "var(--wood)" : "white",
                                    boxShadow: isNight ? "none" : "0 4px 12px rgba(232, 130, 154, 0.3)"
                                }}
                            >
                                ส่งให้ฉัน ✉️
                            </button>
                        </form>
                    )}
                </motion.div>

                {/* Footer links */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {[
                            {
                                title: "คอร์สเรียน",
                                links: [
                                    { label: "JLPT N5", href: "https://lin.ee/yHWc9AL" },
                                    { label: "JLPT N4", href: "https://lin.ee/yHWc9AL" },
                                    { label: "JLPT N3", href: "https://lin.ee/yHWc9AL" },
                                    { label: "สนทนา", href: "https://lin.ee/yHWc9AL" },
                                ],
                            },
                            {
                                title: "เกี่ยวกับเรา",
                                links: [
                                    { label: "ทีมเซนเซ", href: "#teacher" },
                                    { label: "วิธีการสอน", href: "#about" },
                                    { label: "รีวิว", href: "#" },
                                    { label: "ติดต่อ", href: "tel:0653919824" },
                                ],
                            },
                            {
                                title: "ติดต่อเรา",
                                links: [
                                    { label: "โทร: 0653919824", href: "tel:0653919824" },
                                    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583552302187" },
                                    { label: "Line Official", href: "https://lin.ee/yHWc9AL" },
                                ],
                            },
                            {
                                title: "ติดตามเรา",
                                links: [
                                    { label: "YouTube", href: "#" },
                                    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583552302187" },
                                    { label: "Instagram", href: "#" },
                                    { label: "Line", href: "https://lin.ee/yHWc9AL" },
                                ],
                            },
                        ].map((section, i) => (
                            <div key={i}>
                                <h4 className="font-bold mb-3 text-sm uppercase tracking-wide" style={{ color: isNight ? "rgba(255,255,255,0.8)" : "var(--wood)" }}>
                                    {section.title}
                                </h4>
                                <ul className="space-y-2">
                                    {section.links.map((item, j) => (
                                        <li key={j}>
                                            <a
                                                href={item.href}
                                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                className="transition-colors text-sm"
                                                style={{ color: isNight ? "rgba(255,255,255,0.4)" : "var(--wood-light)" }}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: isNight ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
                        <p className="text-sm" style={{ color: isNight ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)" }}>
                            © 2025 สอนญี่ปุ่น.com — สงวนลิขสิทธิ์
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm transition-colors" style={{ color: isNight ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)" }}>
                                นโยบายความเป็นส่วนตัว
                            </a>
                            <a href="#" className="text-sm transition-colors" style={{ color: isNight ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)" }}>
                                เงื่อนไขการใช้งาน
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom decoration */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xl opacity-15">
                    🌸 ⛩️ 🍵
                </div>
            </div>
        </footer>
    );
}
