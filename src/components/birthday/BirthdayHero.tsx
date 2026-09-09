import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

type Props = {
  cakeClicked: boolean;
  onCake: () => void;
};

const photos = [
  {
    src: "/images/hana-1.jpeg",
    position: "left-[3%] top-[14%]",
    rotate: "-rotate-6",
    sticker: "💗",
    delay: 0,
  },
  {
    src: "/images/hana-2.jpeg",
    position: "right-[4%] top-[12%]",
    rotate: "rotate-6",
    sticker: "🎀",
    delay: 0.8,
  },
  {
    src: "/images/hana-3.jpeg",
    position: "left-[7%] bottom-[13%]",
    rotate: "rotate-5",
    sticker: "✨",
    delay: 1.4,
  },
  {
    src: "/images/hana-6.jpeg",
    position: "right-[7%] bottom-[12%]",
    rotate: "-rotate-5",
    sticker: "💞",
    delay: 2,
  },
];

export default function BirthdayHero({ cakeClicked, onCake }: Props) {
  return (
    <section
      id="birthday"
      className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-linear-to-b from-purple-50/80 via-slate-50/50 to-white px-4 py-16"
    >
      <div className="absolute inset-0 hidden lg:block pointer-events-none z-1">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.src}
            className={`absolute ${photo.position} ${photo.rotate} w-36 xl:w-44`}
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
              rotate: index % 2 === 0 ? [-4, -6, -4] : [5, 7, 5],
            }}
            transition={{
              opacity: {
                duration: 0.7,
                delay: photo.delay,
              },
              scale: {
                duration: 0.7,
                delay: photo.delay,
              },
              y: {
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: photo.delay,
              },
              rotate: {
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: photo.delay,
              },
            }}
          >
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
              animate={{
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                <div className="h-7 w-20 bg-pink-300/90 rounded-sm shadow-sm rotate-[-2deg]" />

                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-pink-700 tracking-wide">
                  love ♡
                </span>
              </div>
            </motion.div>

            <div className="relative bg-white p-3 pb-10 rounded-sm shadow-[0_15px_35px_rgba(88,28,135,0.16)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-purple-100">
                <img
                  src={photo.src}
                  alt={`Hana memory ${index + 1}`}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-purple-900/10 via-transparent to-white/10" />
              </div>

              <p className="absolute bottom-2 left-0 right-0 text-center text-xs text-pink-500 font-serif italic">
                little memory ♡
              </p>

              <motion.span
                className="absolute -right-5 -bottom-4 text-3xl drop-shadow-md"
                animate={{
                  rotate: [-8, 8, -8],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {photo.sticker}
              </motion.span>
            </div>
          </motion.div>
        ))}

        <motion.span
          className="absolute left-[20%] top-[20%] text-2xl"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎀
        </motion.span>

        <motion.span
          className="absolute right-[20%] bottom-[24%] text-xl"
          animate={{
            y: [0, -8, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          💕
        </motion.span>

        <motion.span
          className="absolute left-[18%] bottom-[32%] text-lg"
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          ✦
        </motion.span>

        <motion.span
          className="absolute right-[18%] top-[34%] text-lg"
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          ✧
        </motion.span>
      </div>

      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] md:text-[26rem] font-black text-purple-200/30 select-none pointer-events-none leading-none z-0">
        24
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
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="text-purple-300 text-2xl font-serif"
        >
          ✧
        </motion.span>

        <motion.span
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
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
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/80 text-purple-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
          <Sparkles size={13} className="animate-pulse text-amber-500" />

          <span>Today is all about you</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-800 leading-[1.15]">
          Happy 24th <br />
          <em className="font-serif italic font-normal bg-linear-to-r from-purple-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent">
            Birthday, Hana
          </em>
        </h1>

        <p className="max-w-md text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          To my best friend, my favorite person to annoy, and one of the most
          beautiful souls I know.
        </p>

        <motion.div className="mt-4 flex flex-col items-center gap-4">
          <motion.button
            onClick={onCake}
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.92,
            }}
            animate={!cakeClicked ? { y: [0, -6, 0] } : { scale: [1, 1.08, 1] }}
            transition={
              !cakeClicked
                ? {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : {
                    duration: 0.4,
                  }
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
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: [0.7, 1, 0.7],
                        scale: [1, 1.3, 1],
                        y: [0, -3, 0],
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                      }}
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
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
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
                  <div className="w-18 h-7 rounded-t-lg rounded-b-md bg-linear-to-b from-purple-300 to-purple-400 shadow-md" />

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
                  <div className="w-22 h-8 rounded-t-lg rounded-b-2xl bg-linear-to-b from-blue-300 to-blue-400 shadow-md" />

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

                <div className="w-26 h-2 bg-linear-to-b from-gray-200 to-gray-300 rounded-b-2xl shadow-md -mt-0.5" />

                <div className="absolute inset-0 pointer-events-none">
                  <span className="absolute top-2 left-2 text-[6px]">🌈</span>

                  <span className="absolute top-4 right-2 text-[6px]">✨</span>

                  <span className="absolute bottom-3 left-3 text-[6px]">
                    🎀
                  </span>

                  <span className="absolute bottom-4 right-3 text-[6px]">
                    💫
                  </span>
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
                    initial={{
                      opacity: 1,
                      y: 0,
                      x: -10,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 0,
                      y: -40,
                      x: -30,
                      scale: 1.2,
                    }}
                    transition={{ duration: 1 }}
                    className="absolute z-20 text-pink-400 text-lg pointer-events-none"
                  >
                    💖
                  </motion.span>

                  <motion.span
                    initial={{
                      opacity: 1,
                      y: 0,
                      x: 10,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 0,
                      y: -45,
                      x: 30,
                      scale: 1.2,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.1,
                    }}
                    className="absolute z-20 text-purple-400 text-lg pointer-events-none"
                  >
                    ✨
                  </motion.span>

                  <motion.span
                    initial={{
                      opacity: 1,
                      y: 0,
                      x: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 0,
                      y: -50,
                      x: 0,
                      scale: 1.3,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                    }}
                    className="absolute z-20 text-amber-400 text-lg pointer-events-none"
                  >
                    🎂
                  </motion.span>

                  <motion.span
                    initial={{
                      opacity: 1,
                      y: 0,
                      x: 15,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 0,
                      y: -35,
                      x: 25,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.15,
                    }}
                    className="absolute z-20 text-rose-400 text-lg pointer-events-none"
                  >
                    🌸
                  </motion.span>

                  <motion.span
                    initial={{
                      opacity: 1,
                      y: 0,
                      x: -15,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 0,
                      y: -40,
                      x: -25,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.25,
                    }}
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
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="flex items-center gap-1.5"
          >
            <p
              className={`text-sm font-semibold tracking-wide ${
                cakeClicked ? "text-amber-600" : "text-slate-500"
              }`}
            >
              {cakeClicked
                ? "✨ Wish made! May it all come true 🎉"
                : "Tap the cake to make a wish!"}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
