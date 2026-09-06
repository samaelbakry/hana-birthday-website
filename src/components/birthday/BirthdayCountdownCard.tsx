import { motion } from "framer-motion";
import {
  Heart,
  Laugh,
  Moon,
  Sparkles,
  Coffee,
  Camera,
  Cake,
} from "lucide-react";

export default function BirthdayCountdownCard() {
  const moments = [
    {
      title: "Professional Yapper",
      value: "∞",
      description: "Because somehow there's ALWAYS another story 😂",
      icon: Laugh,
      iconStyle: "text-pink-500 bg-pink-50",
    },
    {
      title: "Late Night Energy",
      value: "24/7",
      description: "Sleep? Never heard of her. 🌙",
      icon: Moon,
      iconStyle: "text-indigo-500 bg-indigo-50",
    },
    {
      title: "Bestie Level",
      value: "MAX",
      description: "Officially impossible to replace 💜",
      icon: Heart,
      iconStyle: "text-red-500 bg-red-50",
    },
    {
      title: "Random Adventures",
      value: "∞",
      description: "The best memories were never planned ✨",
      icon: Sparkles,
      iconStyle: "text-purple-500 bg-purple-50",
    },
    {
      title: "Coffee Breaks",
      value: "Too Many",
      description: "Because every problem deserves a coffee ☕",
      icon: Coffee,
      iconStyle: "text-amber-600 bg-amber-50",
    },
    {
      title: "Memories Captured",
      value: "1,000+",
      description: "And somehow we still need more pictures 📸",
      icon: Camera,
      iconStyle: "text-violet-500 bg-violet-50",
    },
  ];

  return (
    <section className="relative px-4 py-20 overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-purple-100 shadow-sm text-purple-600 text-xs font-bold">
            <Cake size={15} />
            <span>A LITTLE HANNON APPRECIATION</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-5xl font-black text-slate-800">
            Things That Make You...
            <span className="block text-purple-500">
              YOU 💜
            </span>
          </h2>

          <p className="mt-4 max-w-lg mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Some completely scientific and definitely accurate facts
            about the birthday girl. No arguments accepted. 😌
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {moments.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  rotate: index % 2 === 0 ? -1 : 1,
                }}
                className="
                  group
                  relative
                  bg-white/90
                  backdrop-blur-sm
                  rounded-4xl
                  p-5 sm:p-7
                  border border-purple-100
                  shadow-lg shadow-purple-900/5
                  transition-shadow
                  hover:shadow-2xl hover:shadow-purple-900/10
                "
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  💜
                </div>

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.iconStyle}`}
                >
                  <Icon size={22} />
                </div>

                <div className="mt-5">
                  <p className="text-2xl sm:text-3xl font-black text-slate-800">
                    {item.value}
                  </p>

                  <h3 className="mt-1 text-sm sm:text-base font-bold text-purple-600">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            And honestly...
          </p>

          <p className="mt-2 text-lg sm:text-xl font-bold text-slate-700">
            These numbers don't even begin to explain
            <span className="text-purple-500"> how amazing you are. 💜</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

