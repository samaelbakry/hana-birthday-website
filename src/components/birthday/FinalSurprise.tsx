import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export default function FinalSurprise({ unlocked }: { unlocked: boolean }) {
  if (!unlocked) return null;

  return (
    <section className="relative w-full max-w-2xl px-4 py-16 mx-auto text-center flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full p-8 sm:p-12 rounded-3xl bg-linear-to-b from-white via-purple-50/40 to-slate-50/80 border border-purple-100 shadow-2xl shadow-purple-900/10 backdrop-blur-md flex flex-col items-center gap-6 overflow-hidden"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14rem] sm:text-[18rem] font-black text-purple-200/20 select-none pointer-events-none leading-none z-0">
          24
        </span>

        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/80 text-purple-700 text-xs font-semibold tracking-widest uppercase shadow-sm">
          <Sparkles size={13} className="text-amber-500 animate-pulse" />
          <span>One last thing...</span>
        </div>

        <h2 className="relative z-10 text-3xl sm:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
          24 years of you. <br />
          <em className="font-serif italic font-normal bg-linear-to-r from-purple-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent">
            And somehow, the world became a little brighter.
          </em>
        </h2>

        <div className="relative z-10 w-24 h-px bg-linear-to-r from-transparent via-purple-200 to-transparent my-1" />

        <div className="relative z-10 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
          <p className="font-bold text-lg text-purple-700">
            Happy Birthday, Hanoon.
          </p>
          <p className="font-normal text-slate-600">
            Here's to more memories, more ridiculous conversations, more adventures, more laughter, and many more birthdays together.
          </p>
          <p className="pt-2 font-semibold text-purple-600 inline-flex items-center gap-1.5 justify-center">
            Love you always, Nonz{" "}
            <Heart size={14} className="fill-purple-500 text-purple-500 inline" />
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-center gap-3 text-purple-400 text-sm font-serif pt-2">
          <span>✦</span>
          <span>♡</span>
          <span className="text-amber-400">✧</span>
          <span>♡</span>
          <span>✦</span>
        </div>

        <div className="relative z-10 text-xs font-semibold tracking-wider text-purple-500 uppercase pt-2">
          24 looks beautiful on you ✨
        </div>
      </motion.div>
    </section>
  );
}