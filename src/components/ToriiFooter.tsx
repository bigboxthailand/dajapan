"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ToriiFooter() {
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
                        background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(74,55,40,0.7) 60%, rgba(74,55,40,0.95) 100%)",
                    }}
                />

                {/* Text overlay on Torii image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-white/70 text-base md:text-lg mb-2"
                        style={{ fontFamily: "var(--font-mincho)" }}
                    >
                        門をくぐれば、新しい自分に出会える
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-white text-2xl md:text-4xl font-bold text-center mb-3"
                        style={{ fontFamily: "var(--font-mincho)" }}
                    >
                        ก้าวข้ามประตูโทริอิ สู่ตัวตนใหม่ของคุณ
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-white/50 text-sm text-center max-w-lg"
                    >
                        เหมือนเสาโทริอิที่เป็นประตูเชื่อมโลกมนุษย์กับสิ่งศักดิ์สิทธิ์
                        การเรียนภาษาจะเปิดประตูสู่โลกใหม่ที่คุณไม่เคยสัมผัสมาก่อน
                    </motion.p>
                </div>
            </div>

            {/* Newsletter + Footer Content */}
            <div
                className="relative py-16 px-6"
                style={{ background: "linear-gradient(180deg, rgba(74,55,40,0.95), #2a1a10)" }}
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
                        className="text-xl md:text-2xl text-white font-bold mb-3"
                        style={{ fontFamily: "var(--font-mincho)" }}
                    >
                        รับบทเรียนสั้นๆ และคำศัพท์ประจำวัน
                    </h3>
                    <p className="text-white/50 text-sm mb-6">
                        ส่งตรงถึงนกพิราบสื่อสารของคุณ (อีเมล) 📧
                    </p>

                    {subscribed ? (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="p-4 rounded-2xl"
                            style={{ background: "rgba(90,125,55,0.2)", border: "1px solid var(--matcha)" }}
                        >
                            <p className="text-white text-lg">🎉 ありがとうございます!</p>
                            <p className="text-white/60 text-sm">ขอบคุณค่ะ! เราจะส่งบทเรียนให้คุณเร็วๆ นี้</p>
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
                                        background: "rgba(255,255,255,0.1)",
                                        border: "2px solid rgba(255,255,255,0.15)",
                                        color: "white",
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
                                    background: "linear-gradient(135deg, var(--sakura), var(--sakura-deep, #e8829a))",
                                    color: "var(--wood)",
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
                                links: ["JLPT N5", "JLPT N4", "JLPT N3", "สนทนา"],
                            },
                            {
                                title: "เกี่ยวกับเรา",
                                links: ["ทีมเซนเซ", "วิธีการสอน", "รีวิว", "ติดต่อ"],
                            },
                            {
                                title: "แหล่งข้อมูล",
                                links: ["บทความ", "วิดีโอฟรี", "แบบทดสอบ", "คำศัพท์"],
                            },
                            {
                                title: "ติดตามเรา",
                                links: ["YouTube", "Facebook", "Instagram", "Line"],
                            },
                        ].map((section, i) => (
                            <div key={i}>
                                <h4 className="text-white/80 font-bold mb-3 text-sm uppercase tracking-wide">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2">
                                    {section.links.map((link, j) => (
                                        <li key={j}>
                                            <a
                                                href="#"
                                                className="text-white/40 hover:text-white/80 transition-colors text-sm"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/30 text-sm">
                            © 2025 สอนญี่ปุ่น.com — สงวนลิขสิทธิ์
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">
                                นโยบายความเป็นส่วนตัว
                            </a>
                            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">
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
