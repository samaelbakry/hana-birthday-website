import { useRef, useState } from "react";
import {  Play, Music, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BirthdayMusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setShowTooltip(false);
    } catch (error) {
      console.error("Unable to play audio:", error);
    }
  };

  return (
    <aside
      aria-label="Music control"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <AnimatePresence>
        {!isPlaying && showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMusic}
            className="group cursor-pointer rounded-2xl border border-pink-200 bg-white/90 px-3.5 py-2 text-xs font-medium text-slate-700 shadow-xl shadow-pink-500/10 backdrop-blur-md transition-colors hover:border-pink-300"
          >
            <div className="flex items-center gap-1.5 text-pink-600 font-semibold">
              <Sparkles size={13} className="animate-pulse" />
              <span>Play Hana's Song</span>
            </div>
            <p className="text-[11px] text-slate-500 font-normal">Tap to listen ♡</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {!isPlaying && (
          <>
            <motion.span
              className="absolute -inset-1.5 rounded-full bg-linear-to-r from-pink-500 to-purple-500 opacity-75 blur-xs"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.span
              className="absolute -inset-3 rounded-full bg-pink-400/30"
              animate={{
                scale: [0.9, 1.35, 0.9],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: 0.4,
                ease: "easeInOut",
              }}
            />
          </>
        )}

        {isPlaying && (
          <motion.div
            className="absolute -top-6 left-1/2 -translate-x-1/2 text-pink-500 pointer-events-none"
            animate={{
              y: [-2, -18],
              opacity: [1, 0],
              x: [-5, 8],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <Music size={14} />
          </motion.div>
        )}

        <motion.button
          onClick={toggleMusic}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-tr from-pink-500 via-rose-500 to-purple-600 text-white shadow-xl shadow-pink-500/35 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <div className="flex h-5 items-end gap-0.5">
              {[1, 2, 3].map((bar) => (
                <motion.span
                  key={bar}
                  className="w-1 rounded-full bg-white"
                  animate={{
                    height: [4, 18, 8, 20, 4],
                  }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    delay: bar * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          ) : (
            <Play size={22} className="ml-1 fill-white" />
          )}

          {isPlaying && (
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-white/60"
              animate={{
                scale: [1, 1.4],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}
        </motion.button>
      </div>

      <audio
        ref={audioRef}
        src="/music/birthday.mp3"
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />
    </aside>
  );
}