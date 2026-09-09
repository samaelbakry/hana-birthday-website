import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import IntroEnvelope from "./components/birthday/IntroEnvelope";
import BirthdayHero from "./components/birthday/BirthdayHero";
import BirthdayEnvelope from "./components/birthday/BirthdayEnvelope";
import LetterModal from "./components/birthday/LetterModal";
import BirthdayCountdownCard from "./components/birthday/BirthdayCountdownCard";
import InteractiveWishJar from "./components/birthday/InteractiveWishJar";
import FinalSurprise from "./components/birthday/FinalSurprise";
import ParticleBackground from "./components/birthday/ParticleBackground";
import {
  birthdayMessages,
  type BirthdayMessage,
} from "./data/birthdayMessages";
import BirthdayMusic from "./components/birthday/BirthdayMusic";

export default function App() {
  const [introOpen, setIntroOpen] = useState(false);
  const [opened, setOpened] = useState<number[]>([]);
  const [active, setActive] = useState<BirthdayMessage | null>(null);
  const [cakeClicked, setCakeClicked] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  const openIntro = () => {
    setIntroOpen(true);
    setTimeout(() => {
      document
        .getElementById("birthday")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const cake = () => {
    setCakeClicked(true);
    confetti({
      particleCount: 120,
      spread: 80,
      startVelocity: 35,
      origin: { y: 0.65 },
      colors: ["#c084fc", "#a855f7", "#e9d5ff", "#fbbf24", "#f472b6"],
    });
  };

  const openLetter = (item: BirthdayMessage) => {
    setActive(item);
    setOpened((prev) => (prev.includes(item.id) ? prev : [...prev, item.id]));
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-purple-50/40 via-slate-50 to-white text-slate-800 font-sans relative overflow-x-hidden">
      <ParticleBackground />

      <AnimatePresence mode="wait">
        {!introOpen ? (
          <IntroEnvelope key="intro" onOpen={openIntro} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center w-full"
          >
            <BirthdayHero cakeClicked={cakeClicked} onCake={cake} />
            <BirthdayMusic />

            <BirthdayCountdownCard />

            <section className="w-full max-w-5xl px-4 py-16 flex flex-col items-center space-y-12">
              <motion.div
                className="text-center space-y-3 max-w-md"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-purple-700 bg-purple-100/80 rounded-full border border-purple-200/80">
                  A few words from us
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 leading-tight">
                  Three little letters{" "}
                  <em className="font-serif italic font-normal bg-linear-to-r from-purple-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent">
                    for you...
                  </em>
                </h2>
                <p className="text-sm text-slate-500">
                  Because one message could never be enough.
                </p>
              </motion.div>

              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                {birthdayMessages.map((item) => (
                  <BirthdayEnvelope
                    key={item.id}
                    item={item}
                    opened={opened.includes(item.id)}
                    onClick={() => openLetter(item)}
                  />
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-purple-200/80 shadow-sm text-xs font-semibold text-purple-700">
                <span>{opened.length}/3 opened</span>
                {opened.length === 3 && (
                  <span className="text-emerald-600 flex items-center gap-1">
                    · You opened all three 💜
                  </span>
                )}
              </div>
            </section>

            <InteractiveWishJar />

            <FinalSurprise unlocked={opened.length === 3} />
          </motion.div>
        )}
      </AnimatePresence>

      <LetterModal item={active} onClose={() => setActive(null)} />
    </main>
  );
}
