"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer
            className="relative py-16 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #ede6d8, #4a3728)",
            }}
        >
            {/* Top wave decoration */}
            <svg
                className="absolute top-0 left-0 w-full"
                viewBox="0 0 1440 60"
                preserveAspectRatio="none"
                style={{ height: "40px", marginTop: "-1px" }}
            >
                <path
                    d="M0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 0 L0 0 Z"
                    fill="#ede6d8"
                />
            </svg>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Logo and tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3
                        className="text-3xl md:text-4xl font-bold text-white mb-3"
                        style={{ fontFamily: "var(--font-mincho)" }}
                    >
                        สอนญี่ปุ่น<span style={{ color: "var(--matcha-light)" }}>.com</span>
                    </h3>
                    <p className="text-white/60 text-base" style={{ fontFamily: "var(--font-mincho)" }}>
                        日本語を楽しく学びましょう
                    </p>
                </motion.div>

                {/* Links grid */}
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
                            title: "ติดต่อสอบถาม",
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
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">
                                {section.title}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((item, j) => (
                                    <li key={j}>
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="text-white/50 hover:text-white/90 transition-colors text-sm"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                        © 2025 สอนญี่ปุ่น.com — สงวนลิขสิทธิ์
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                            นโยบายความเป็นส่วนตัว
                        </a>
                        <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                            เงื่อนไขการใช้งาน
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom sakura decoration */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl opacity-20">
                🌸 🗻 🍵
            </div>
        </footer>
    );
}
