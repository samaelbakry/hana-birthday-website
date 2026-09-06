import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

type Wish = {
  id: number;
  text: string;
  emoji: string;
};

const wishes: Wish[] = [
  { id: 1, text: "Endless laughter & zero stress always!", emoji: "💖" },
  { id: 2, text: "Unstoppable success in everything you build!", emoji: "🌟" },
  { id: 3, text: "More late-night conversations & coffee dates!", emoji: "☕" },
  { id: 4, text: "Spontaneous adventures and beautiful travels!", emoji: "✈️" },
  { id: 5, text: "Peace, unconditional love, and infinite joy!", emoji: "🌸" },
];

export default function InteractiveWishJar() {
  const [activeWish, setActiveWish] = useState<Wish | null>(null);

  return (
    <section className="relative py-16 px-4 max-w-xl mx-auto text-center">
      <div className="space-y-2 mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
          Tap a Star ✨
        </span>
        <h2 className="text-3xl font-extrabold text-slate-800">
          Pop a Wish for Your New Year
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        {wishes.map((w) => (
          <motion.button
            key={w.id}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveWish(w)}
            className={`px-4 py-2.5 rounded-2xl text-sm font-semibold border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeWish?.id === w.id
                ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20"
                : "bg-white text-slate-700 border-purple-100 shadow-xs hover:border-purple-300"
            }`}
          >
            <span>{w.emoji}</span>
            <span>Wish #{w.id}</span>
          </motion.button>
        ))}
      </div>

      <div className="min-h-25 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeWish ? (
            <motion.div
              key={activeWish.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="p-6 rounded-3xl bg-linear-to-r from-purple-500 via-indigo-500 to-purple-600 text-white shadow-xl shadow-purple-500/20 w-full"
            >
              <div className="flex justify-center mb-2">
                <Sparkles size={20} className="text-amber-300 animate-pulse" />
              </div>
              <p className="text-base sm:text-lg font-medium">
                "{activeWish.text}"
              </p>
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-medium text-slate-400 italic flex items-center gap-1.5"
            >
              <Heart size={14} className="text-pink-400" /> Click any button above to reveal a birthday blessing!
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}