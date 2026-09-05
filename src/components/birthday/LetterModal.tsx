import { AnimatePresence, motion } from "framer-motion";
import { X, Heart, Image as ImageIcon, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import type { BirthdayMessage } from "../../data/birthdayMessages";

type Props = { item: BirthdayMessage | null; onClose: () => void };

export default function LetterModal({ item, onClose }: Props) {
  const [imgError, setImgError] = useState(false);

  // Reset image error state whenever a new letter is opened
  useEffect(() => {
    setImgError(false);
  }, [item]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-linear-to-b from-white via-purple-50/20 to-amber-50/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/15 border border-purple-100/80 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              aria-label="Close letter"
              className="absolute top-4 right-4 p-2.5 text-slate-400 hover:text-purple-700 bg-white hover:bg-purple-100/80 rounded-full transition-colors shadow-sm border border-purple-100/60 z-30"
            >
              <X size={18} />
            </motion.button>

            {/* Letter Content Section */}
            <div className="flex flex-col h-full justify-between space-y-4 pt-2">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full border border-purple-200/60 shadow-2xs">
                  <Sparkles size={12} className="text-amber-500 animate-pulse" />
                  <span>{item.label}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-tight pt-1">
                  {item.title}
                </h3>
                
                {item.subtitle && (
                  <p className="text-xs font-semibold text-purple-600/90 tracking-wide">
                    {item.subtitle}
                  </p>
                )}
              </div>

              <div className="w-full h-px bg-linear-to-r from-purple-200 via-pink-200 to-transparent" />

              <div className="relative py-1">
                <p className="text-sm leading-relaxed text-slate-600 font-normal whitespace-pre-line">
                  {item.message}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-purple-500">
                <span className="p-1 rounded-full bg-pink-100 text-pink-500">
                  <Heart size={12} className="fill-pink-500" />
                </span>
                <span className="font-serif italic text-slate-500">Sent with warmth for Hana</span>
              </div>
            </div>

            <motion.figure 
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative flex flex-col items-center bg-white p-3.5 pb-5 rounded-2xl border border-purple-100/80 shadow-lg shadow-purple-900/5 -rotate-1 transition-transform duration-300"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-purple-200/60 backdrop-blur-xs border border-white/60 rotate-2 shadow-2xs rounded-xs pointer-events-none z-10" />

              <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden bg-purple-50/60 flex items-center justify-center border border-purple-50">
                {!imgError && item.image ? (
                  <img
                    src={item.image}
                    alt={`Memory for Hana — ${item.title}`}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-4 text-purple-400">
                    <ImageIcon size={32} strokeWidth={1.5} className="mb-2 text-purple-300" />
                    <span className="text-xs font-medium text-purple-500">
                      Add Hana's photo here
                    </span>
                    <small className="text-[10px] text-slate-400 truncate max-w-37.5 mt-1">
                      {item.image}
                    </small>
                  </div>
                )}
              </div>

              {item.caption && (
                <figcaption className="mt-3 text-center text-xs font-serif italic text-slate-600 px-2">
                  "{item.caption}"
                </figcaption>
              )}
            </motion.figure>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}