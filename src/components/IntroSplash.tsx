import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroSplashProps {
  onEnter: () => void;
}

const greetings = [
  { text: "నమస్కారం", lang: "Telugu" },
  { text: "வணக்கம்", lang: "Tamil" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Hello", lang: "English" },
];

export default function IntroSplash({ onEnter }: IntroSplashProps) {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (fading) return;
    if (idx < greetings.length - 1) {
      const t = setTimeout(() => setIdx((i) => i + 1), 650);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setFading(true), 750);
    return () => clearTimeout(t);
  }, [idx, fading]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-hero"
      initial={{ opacity: 1 }}
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={() => {
        if (fading) onEnter();
      }}
      style={{ pointerEvents: fading ? "none" : "auto" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-hero-foreground text-center px-4">
            {greetings[idx].text}
          </h2>
          <span className="text-xs uppercase tracking-[0.4em] text-secondary">
            {greetings[idx].lang}
          </span>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
