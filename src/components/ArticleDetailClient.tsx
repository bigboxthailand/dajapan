"use client";

import { Article } from "@/data/articles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ArticleDetailClient({ article }: { article: Article }) {
  return (
    <main className="min-h-screen washi-pattern pb-24">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-soft/20 py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/#articles" className="flex items-center gap-2 text-wood-light hover:text-sakura transition-colors">
            <span className="text-xl">←</span>
            <span className="text-xs font-black uppercase tracking-widest">Back to Journal</span>
          </Link>
          <div className="text-xl font-black text-wood" style={{ fontFamily: "var(--font-mincho)" }}>
            DaJapan <span className="text-sakura">学習</span>
          </div>
          <Link href="https://lin.ee/yHWc9AL" target="_blank" className="btn-sakura px-6 py-2 text-[10px] font-black tracking-widest text-white rounded-full">
            LINE CONSULT
          </Link>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden pt-20">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image 
            src={article.image} 
            alt={article.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-wood/90" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1 bg-sakura text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-sm">
              {article.category} • {article.date}
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl" style={{ fontFamily: "var(--font-mincho)" }}>
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-white/80">
              <div className="relative w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden">
                <Image src={article.author.avatar} alt={article.author.name} fill />
              </div>
              <div className="text-left">
                <div className="text-xs font-black uppercase tracking-widest">{article.author.name}</div>
                <div className="text-[10px] italic">{article.author.role}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating JP Title */}
        <div className="absolute bottom-8 right-8 text-[12vw] font-black text-white opacity-10 pointer-events-none select-none leading-none" style={{ fontFamily: "var(--font-mincho)" }}>
          {article.jp}
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 -mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-pink-soft/20"
        >
          {/* Decorative Sakura Icon */}
          <div className="flex justify-center mb-12">
            <div className="text-sakura/20 text-4xl">❀</div>
          </div>

          <div 
            className="prose prose-lg max-w-none text-wood-light leading-relaxed prose-headings:font-black prose-headings:text-wood prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:mb-6 prose-img:rounded-3xl prose-li:mb-2 prose-strong:text-sakura-deep"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Social Proof Stats */}
          <div className="mt-16 pt-12 border-t border-pink-soft/10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8 text-wood-light/60">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sakura" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                <span className="text-sm font-bold uppercase tracking-widest">{article.likes} Likes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm4 0H9v2h2V9zm4 0h-2v2h2V9z" /></svg>
                <span className="text-sm font-bold uppercase tracking-widest">{article.comments} Comments</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61583552302187"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a 
                href="tel:0653919824"
                className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.285 16.03l-3.238-1.503a.625.625 0 00-.737.145l-1.393 1.765a.625.625 0 01-.734.181 12.02 12.02 0 01-5.55-5.55.625.625 0 01.181-.734l1.765-1.393a.626.626 0 00.145-.737L11.22 5.035a.625.625 0 00-.814-.306l-4.25 1.75a.625.625 0 00-.381.658 12.917 12.917 0 0011.82 11.82.625.625 0 00.658-.381l1.75-4.25a.625.625 0 00-.306-.814l-2.03-1.03a.625.625 0 00-.737.145l-1.393 1.765a.625.625 0 01-.734.181"/></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </article>

      {/* Footer Decoration */}
      <div className="mt-24 text-center">
        <div className="inline-flex items-center gap-4 text-sakura/30 text-xs tracking-[1em] font-black mr-[-1em]">
          <span>終わり</span>
          <div className="w-12 h-[1px] bg-sakura/20" />
          <span>OWARI</span>
        </div>
      </div>
    </main>
  );
}
