import { motion } from "framer-motion";
import { Heart, Check } from "lucide-react";
import type { BirthdayMessage } from "../../data/birthdayMessages";

type Props = {
  item: BirthdayMessage;
  opened: boolean;
  onClick: () => void;
};

export default function BirthdayEnvelope({ item, opened, onClick }: Props) {
  const isAltRotation = item.id % 2 === 0;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02, rotate: isAltRotation ? 1.5 : -1.5 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      aria-label={`Open ${item.title}`}
      className={`group relative flex flex-col items-center justify-between w-full max-w-xs p-6 rounded-2xl cursor-pointer select-none transition-all duration-300 border ${
        opened
          ? "bg-linear-to-b from-purple-50/90 via-purple-50/50 to-slate-50/80 border-purple-200/80 shadow-sm"
          : "bg-white/90 border-slate-200/60 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-900/10 hover:border-purple-200"
      }`}
    >
      <div className="w-full flex justify-between items-center mb-3">
        <span className="text-xs font-black tracking-widest text-purple-600 bg-purple-100/70 px-2.5 py-1 rounded-full border border-purple-200/60">
          #{String(item.id).padStart(2, "0")}
        </span>
        {opened && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80"
          >
            <Check size={12} strokeWidth={2.5} /> Opened
          </motion.span>
        )}
      </div>

      <div className="relative w-28 h-20 my-4 flex items-center justify-center">
        <div className="absolute inset-0 bg-linear-to-tr from-purple-300 to-indigo-200 rounded-lg shadow-inner" />

        <motion.div
          initial={false}
          animate={{
            y: opened ? -18 : 0,
            scale: opened ? 1.05 : 0.95,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-x-2 bottom-2 h-14 bg-white rounded-md shadow-md flex items-center justify-center z-10 border border-purple-100"
        >
          <span className="text-purple-600 text-lg font-bold">
            {opened ? "✨" : "💌"}
          </span>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ rotateX: opened ? 180 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: "top" }}
          className="absolute inset-x-0 top-0 h-10 bg-purple-200 clip-path-triangle z-20 rounded-t-lg shadow-sm"
        />

        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-end">
          <div className="w-full h-11 bg-purple-100/90 backdrop-blur-[1px] rounded-b-lg border-t border-white/60" />
        </div>

        <motion.div
          animate={{
            scale: opened ? 0.85 : 1,
            y: opened ? 10 : 0,
          }}
          className="absolute z-30 flex items-center justify-center w-8 h-8 bg-white text-purple-600 rounded-full shadow-md border border-purple-200"
        >
          <Heart
            size={14}
            className={`transition-colors duration-300 ${
              opened ? "fill-purple-600 text-purple-600" : "text-purple-400"
            }`}
          />
        </motion.div>
      </div>

      <div className="text-center mt-2 w-full space-y-1">
        <strong className="block text-xs font-bold uppercase tracking-wider text-purple-600">
          {item.label}
        </strong>
        <span className="block text-sm font-medium text-slate-700 line-clamp-1">
          {item.title}
        </span>
      </div>
    </motion.button>
  );
}