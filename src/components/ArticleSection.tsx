"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { articles } from "@/data/articles";

export default function ArticleSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="articles" className="relative py-24 overflow-hidden washi-pattern">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-[3px] bg-matcha rounded-full" />
              <span className="text-matcha font-bold tracking-widest uppercase text-xs">Japanese Learning Journal</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black leading-tight"
              style={{ fontFamily: "var(--font-mincho)", color: "var(--wood)" }}
            >
              คลังบทความญี่ปุ่น <span className="text-sakura-deep block md:inline relative">
                記事
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-2 bg-sakura/30 -z-10"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                />
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:max-w-sm"
          >
            <p className="text-wood-light/90 italic text-lg leading-relaxed border-l-4 border-matcha pl-6 py-2 bg-matcha/5 rounded-r-xl">
              &quot;ความรู้ที่แท้จริง คือการนำสิ่งที่เรียนมาใช้ในชีวิตประจำวัน&quot;
              <span className="block text-sm mt-2 font-bold text-matcha">— DaJapan Sensei</span>
            </p>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-pink-soft/20"
            >
              {/* Image Container with Metrics Overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Engagement Metrics (Visible on Hover) */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-3 text-white text-xs font-bold">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-sakura" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                      {article.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm4 0H9v2h2V9zm4 0h-2v2h2V9z" /></svg>
                      {article.comments}
                    </span>
                  </div>
                  <div className="text-white/80 text-[10px] uppercase tracking-tighter bg-black/40 px-2 py-1 rounded-full backdrop-blur-md">
                    {article.views} views
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-black text-matcha shadow-lg uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                {/* JP Calligraphy Overlay (Floating Center) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                   <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-700">
                      <span className="text-white text-lg font-bold drop-shadow-md whitespace-nowrap" style={{ fontFamily: "var(--font-mincho)" }}>
                        {article.jp}
                      </span>
                   </div>
                </div>
              </div>

              {/* Content Card Body */}
              <div className="p-7 flex flex-col flex-grow relative bg-white">
                {/* Decorative Kanji background (Subtle) */}
                <div className="absolute top-4 right-4 text-6xl font-black text-pink-soft/5 pointer-events-none select-none" style={{ fontFamily: "var(--font-mincho)" }}>
                  {article.jp.charAt(0)}
                </div>

                <div className="flex items-center gap-2 mb-4">
                   <span className="w-8 h-[1px] bg-sakura" />
                   <span className="text-[10px] font-bold text-wood-light/40 uppercase tracking-[0.2em]">{article.date}</span>
                </div>
                
                <h3 className="text-xl font-black mb-4 group-hover:text-matcha transition-colors text-wood leading-tight line-clamp-2" style={{ fontFamily: "var(--font-mincho)" }}>
                  {article.title}
                </h3>
                
                <p className="text-[13px] text-wood-light/70 mb-8 line-clamp-3 leading-relaxed">
                  {article.desc}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <Link 
                    href={`/articles/${article.id}`} 
                    className="flex items-center gap-3 text-xs font-black text-sakura-deep group-hover:gap-5 transition-all cursor-pointer uppercase tracking-widest no-underline"
                  >
                    Read Entry <span className="text-lg">→</span>
                  </Link>
                  <div className="flex -space-x-2">
                     {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-pink-light">
                           <Image src={`https://i.pravatar.cc/100?img=${i + index * 5}`} alt="" width={24} height={24} />
                        </div>
                     ))}
                  </div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* View All Button with Japanese Decor */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4 mb-2">
             <div className="w-8 h-8 rounded-full border border-sakura flex items-center justify-center text-sakura text-xs">巻</div>
             <div className="h-[1px] w-20 bg-sakura/20" />
             <div className="w-8 h-8 rounded-full border border-sakura flex items-center justify-center text-sakura text-xs">書</div>
          </div>
          <a 
            href="https://lin.ee/yHWc9AL" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-sakura px-12 py-4 text-sm tracking-[0.3em] font-black group relative overflow-hidden inline-block no-underline"
          >
            <span className="relative z-10 text-white">DISCOVER ALL ARTICLES</span>
            <div className="absolute inset-0 bg-matcha transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Modern Japanese Decorative Floating Shapes */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-sakura opacity-[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-matcha opacity-[0.07] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--wood) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
    </section>
  );
}
