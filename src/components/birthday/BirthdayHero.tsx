import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Star } from "lucide-react";

type Props = {
  cakeClicked: boolean;
  onCake: () => void;
};

export default function BirthdayHero({ cakeClicked, onCake }: Props) {
  return (
    <section
      id="birthday"
      className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-linear-to-b from-purple-50/80 via-slate-50/50 to-white px-4 py-16"
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] md:text-[26rem] font-black text-purple-200/30 select-none pointer-events-none leading-none z-0">
        23
      </span>

      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-around opacity-70">
        <motion.span
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-amber-400 text-xl font-serif"
        >
          ✦
        </motion.span>
        <motion.span
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="text-purple-300 text-2xl font-serif"
        >
          ✧
        </motion.span>
        <motion.span
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="text-indigo-300 text-xl font-serif"
        >
          ✦
        </motion.span>
      </div>

      <motion.div
        className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/80 text-purple-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
          <Sparkles size={13} className="animate-pulse text-amber-500" />
          <span>Today is all about you</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-800 leading-[1.15]">
          Happy 23rd <br />
          <em className="font-serif italic font-normal bg-linear-to-r from-purple-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent">
            Birthday, Hana
          </em>
        </h1>

        <p className="max-w-md text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          To my best friend, my favorite person to annoy, and one of the most beautiful souls I know.
        </p>

        <motion.div className="mt-4 flex flex-col items-center gap-4">
          <motion.button
            onClick={onCake}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.92 }}
            animate={
              !cakeClicked
                ? { y: [0, -6, 0] }
                : { scale: [1, 1.08, 1] }
            }
            transition={
              !cakeClicked
                ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.4 }
            }
            aria-label="Make a wish on the cake"
            className={`group relative p-6 sm:p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 flex flex-col items-center justify-center border ${
              cakeClicked
                ? "bg-linear-to-tr from-amber-100/80 via-purple-100/70 to-pink-100/80 border-amber-300 shadow-2xl shadow-amber-500/10"
                : "bg-white/95 border-purple-100/90 shadow-2xl shadow-purple-900/10 hover:border-purple-300"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-[2.5rem] transition-opacity duration-500 pointer-events-none ${
                cakeClicked
                  ? "bg-amber-300/20 blur-xl opacity-100"
                  : "bg-purple-300/15 blur-lg opacity-0 group-hover:opacity-100"
              }`}
            />

            <div className="relative flex flex-col items-center">
              <div className="relative mb-1 flex items-center justify-center">
                <AnimatePresence>
                  {!cakeClicked ? (
                    <motion.div
                      key="candle-flame"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0.7, 1, 0.7],
                        scale: [1, 1.3, 1],
                        y: [0, -3, 0],
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-1.5 h-5 bg-linear-to-t from-pink-300 to-pink-200 rounded-t-sm rounded-b-md" />
                      <div className="w-5 h-5 rounded-full bg-amber-400/30 blur-md -mt-1" />
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-linear-to-t from-amber-500 via-amber-400 to-yellow-200 blur-[1px] shadow-[0_0_16px_rgba(251,191,36,0.9)]" />
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-5 rounded-full bg-amber-400/20 blur-sm" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sparkle-burst"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-1 text-amber-500"
                    >
                      <Sparkles size={18} className="animate-spin" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-6 rounded-t-2xl rounded-b-md bg-linear-to-b from-pink-300 to-pink-400 shadow-md" />
                  <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
                    <div className="w-1 h-2 bg-pink-200 rounded-b-full" />
                    <div className="w-1.5 h-3 bg-pink-200 rounded-b-full" />
                    <div className="w-1 h-2.5 bg-pink-200 rounded-b-full" />
                    <div className="w-1.5 h-2 bg-pink-200 rounded-b-full" />
                    <div className="w-1 h-3 bg-pink-200 rounded-b-full" />
                  </div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
                    <span className="text-[10px]">🌸</span>
                    <span className="text-[8px]">✨</span>
                  </div>
                </div>

                <div className="relative -mt-0.5">
                  <div className="w-[4.5rem] h-7 rounded-t-lg rounded-b-md bg-linear-to-b from-purple-300 to-purple-400 shadow-md" />
                  <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
                    <div className="w-1 h-2.5 bg-purple-200 rounded-b-full" />
                    <div className="w-1.5 h-3.5 bg-purple-200 rounded-b-full" />
                    <div className="w-1 h-2 bg-purple-200 rounded-b-full" />
                    <div className="w-1.5 h-3 bg-purple-200 rounded-b-full" />
                    <div className="w-1 h-2.5 bg-purple-200 rounded-b-full" />
                  </div>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1.5">
                    <span className="text-[8px]">💜</span>
                    <span className="text-[8px]">⭐</span>
                  </div>
                </div>

                <div className="relative -mt-0.5">
                  <div className="w-[5.5rem] h-8 rounded-t-lg rounded-b-2xl bg-linear-to-b from-blue-300 to-blue-400 shadow-md" />
                  <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
                    <div className="w-1 h-3 bg-blue-200 rounded-b-full" />
                    <div className="w-1.5 h-4 bg-blue-200 rounded-b-full" />
                    <div className="w-1 h-2.5 bg-blue-200 rounded-b-full" />
                    <div className="w-1.5 h-3.5 bg-blue-200 rounded-b-full" />
                    <div className="w-1 h-3 bg-blue-200 rounded-b-full" />
                  </div>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1.5">
                    <span className="text-[8px]">🩷</span>
                    <span className="text-[8px]">🌟</span>
                  </div>
                </div>

                <div className="w-[6.5rem] h-2 bg-linear-to-b from-gray-200 to-gray-300 rounded-b-2xl shadow-md -mt-0.5" />

                <div className="absolute inset-0 pointer-events-none">
                  <span className="absolute top-2 left-2 text-[6px]">🌈</span>
                  <span className="absolute top-4 right-2 text-[6px]">✨</span>
                  <span className="absolute bottom-3 left-3 text-[6px]">🎀</span>
                  <span className="absolute bottom-4 right-3 text-[6px]">💫</span>
                </div>
              </div>

              <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm border border-purple-100">
                <Heart size={14} className="fill-pink-400 text-pink-400" />
              </div>
            </div>

            <AnimatePresence>
              {cakeClicked && (
                <>
                  <motion.span
                    initial={{ opacity: 1, y: 0, x: -10, scale: 0.5 }}
                    animate={{ opacity: 0, y: -40, x: -30, scale: 1.2 }}
                    transition={{ duration: 1 }}
                    className="absolute z-20 text-pink-400 text-lg pointer-events-none"
                  >
                    💖
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 1, y: 0, x: 10, scale: 0.5 }}
                    animate={{ opacity: 0, y: -45, x: 30, scale: 1.2 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="absolute z-20 text-purple-400 text-lg pointer-events-none"
                  >
                    ✨
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 1, y: 0, x: 0, scale: 0.5 }}
                    animate={{ opacity: 0, y: -50, x: 0, scale: 1.3 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute z-20 text-amber-400 text-lg pointer-events-none"
                  >
                    🎂
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 1, y: 0, x: 15, scale: 0.5 }}
                    animate={{ opacity: 0, y: -35, x: 25, scale: 1.1 }}
                    transition={{ duration: 1, delay: 0.15 }}
                    className="absolute z-20 text-rose-400 text-lg pointer-events-none"
                  >
                    🌸
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 1, y: 0, x: -15, scale: 0.5 }}
                    animate={{ opacity: 0, y: -40, x: -25, scale: 1.1 }}
                    transition={{ duration: 1, delay: 0.25 }}
                    className="absolute z-20 text-indigo-400 text-lg pointer-events-none"
                  >
                    ⭐
                  </motion.span>
                </>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.div
            key={cakeClicked ? "wished" : "not-wished"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5"
          >
            <p
              className={`text-sm font-semibold tracking-wide ${
                cakeClicked ? "text-amber-600" : "text-slate-500"
              }`}
            >
              {cakeClicked ? "✨ Wish made! May it all come true 🎉" : "Tap the cake to make a wish!"}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}