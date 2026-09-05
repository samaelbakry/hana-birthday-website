import { motion } from "framer-motion";
import { Heart, ChevronDown, Sparkles } from "lucide-react";

type Props = { onOpen: () => void };

export default function IntroEnvelope({ onOpen }: Props) {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-linear-to-b from-purple-100/70 via-slate-50 to-purple-50/90 px-4 py-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-around opacity-60">
        <motion.span
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-amber-400 text-lg font-serif"
        >
          ✦
        </motion.span>
        <motion.span
          animate={{ y: [0, -14, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="text-purple-400 text-xl font-serif"
        >
          ✧
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-md text-center space-y-3 mb-8 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-purple-700 bg-purple-100/90 rounded-full border border-purple-200/80 shadow-xs">
          <Sparkles size={12} className="text-amber-500 animate-pulse" />
          <span>A little something for you</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-800 leading-tight">
          Something special <br />
          <em className="font-serif italic font-normal bg-linear-to-r from-purple-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent">
            is waiting for you...
          </em>
        </h1>

        <p className="text-lg font-semibold tracking-wider uppercase text-purple-600 pt-1">
          Hana ✨
        </p>
      </motion.div>

      <motion.button
        onClick={onOpen}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -10, rotate: -1.5, scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        aria-label="Open Hana's birthday envelope"
        className="group relative w-64 h-44 sm:w-72 sm:h-48 cursor-pointer select-none my-4 flex items-center justify-center focus:outline-none"
      >
        <div className="absolute inset-0 rounded-2xl bg-purple-300/40 blur-xl group-hover:bg-purple-400/50 transition-all duration-300" />

        <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-purple-300 via-purple-200 to-indigo-200 shadow-xl border border-purple-200/50" />

        <div className="absolute top-3 inset-x-4 h-24 bg-white rounded-lg shadow-inner flex flex-col items-center justify-center border border-purple-100 group-hover:-translate-y-4 transition-transform duration-300 ease-out">
          <span className="text-4xl font-serif font-black text-purple-600">
            23
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-purple-400 uppercase">
            For Hanoon
          </span>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-end pointer-events-none">
          <div className="w-full h-28 bg-linear-to-t from-purple-200 via-purple-100 to-purple-100/90 rounded-b-2xl border-t border-white/70 backdrop-blur-[0.5px] shadow-md" />
        </div>

        <div className="absolute z-20 flex items-center justify-center w-13 h-13 bg-linear-to-tr from-purple-600 to-indigo-500 text-white rounded-full shadow-lg shadow-purple-500/30 border-2 border-white group-hover:scale-110 transition-transform duration-300">
          <Heart size={20} className="fill-white text-white animate-pulse" />
          <span className="absolute inset-0 rounded-full border border-purple-300 animate-ping opacity-30" />
        </div>
      </motion.button>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 mt-6 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-500 uppercase"
      >
        <span>Tap the envelope to open</span>
        <ChevronDown size={14} className="text-purple-500" />
      </motion.div>
    </section>
  );
}