import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({ children, className = "", glowColor = "hsl(220, 70%, 50%)" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setGlow({ x: 50, y: 50, active: false })}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: glow.active
          ? `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, ${glowColor}15, transparent 40%)`
          : undefined,
      }}
    >
      {/* Border glow effect */}
      {glow.active && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, ${glowColor}30, transparent 40%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
