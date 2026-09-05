import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  type: "dot" | "star" | "sparkle";
  color: string;
}

const colors = [
  "bg-purple-300/90 shadow-[0_0_12px_rgba(216,180,254,1)]",
  "bg-indigo-300/90 shadow-[0_0_12px_rgba(197,198,255,1)]",
  "bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,1)]",
  "bg-pink-300/90 shadow-[0_0_12px_rgba(249,168,212,1)]",
  "bg-purple-200/90 shadow-[0_0_10px_rgba(233,213,255,1)]",
];

const particles: Particle[] = Array.from({ length: 56 }, (_, i) => ({
  id: i,
  left: (i * 19 + 7) % 100,
  top: (i * 31 + 3) % 100,
  size: 2 + (i % 4),
  delay: (i % 11) * 0.25,
  duration: 3.5 + (i % 5),
  type: i % 3 === 0 ? "sparkle" : i % 5 === 0 ? "star" : "dot",
  color: colors[i % colors.length],
}));

export default function ParticleBackground() {
  const reduced = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 35);
      mouseY.set((e.clientY / innerHeight - 0.5) * 35);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute -top-32 -left-32 w-136 h-136 bg-linear-to-tr from-purple-200/60 via-pink-200/40 to-amber-100/30 rounded-full blur-[100px] animate-pulse"
      />
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute top-1/3 -right-32 w-120 h-120 bg-linear-to-br from-indigo-200/50 via-purple-200/40 to-pink-100/30 rounded-full blur-[110px]"
      />
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute -bottom-32 left-1/4 w-136 h-136 bg-linear-to-t from-purple-200/50 via-amber-100/40 to-transparent rounded-full blur-[120px]"
      />

      {!reduced &&
        particles.map((p) => {
          const factor = (p.id % 3) + 1;

          return (
            <motion.div
              key={p.id}
              className="absolute flex items-center justify-center pointer-events-none"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                x: smoothX,
                y: smoothY,
              }}
            >
              <motion.span
                className={`block ${
                  p.type === "dot" ? `${p.color} rounded-full` : "bg-transparent"
                }`}
                style={{
                  width: `${p.size * (p.type !== "dot" ? 4 : 1)}px`,
                  height: `${p.size * (p.type !== "dot" ? 4 : 1)}px`,
                }}
                animate={{
                  y: [-25 * factor, 25 * factor, -25 * factor],
                  x: [-12 * factor, 12 * factor, -12 * factor],
                  opacity: [0.15, 0.95, 0.15],
                  scale: [0.6, p.type !== "dot" ? 1.4 : 1.2, 0.6],
                  rotate: p.type !== "dot" ? [0, 180, 360] : 0,
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {p.type === "sparkle" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full text-purple-400 drop-shadow-[0_0_8px_rgba(216,180,254,0.9)]"
                  >
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                )}

                {p.type === "star" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)]"
                  >
                    <path d="M12 2L14.4 8.6L21.5 9.2L16.1 13.8L17.7 20.8L12 17.2L6.3 20.8L7.9 13.8L2.5 9.2L9.6 8.6L12 2Z" />
                  </svg>
                )}
              </motion.span>
            </motion.div>
          );
        })}
    </div>
  );
}