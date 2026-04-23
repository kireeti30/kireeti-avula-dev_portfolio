import { ArrowRight, ChevronDown, Download, BarChart3, Database, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImg from "@/assets/kireeti-portrait.jpeg";
import ParticleField from "@/components/ParticleField";
import MagneticButton from "@/components/MagneticButton";

const stats = [
  { value: "2+", label: "Years Exp." },
  { value: "8+", label: "Projects" },
  { value: "8.02", label: "CGPA" },
];

const floatingIcons = [
  { icon: BarChart3, x: "10%", y: "20%", delay: 0, size: 20 },
  { icon: Database, x: "85%", y: "30%", delay: 1, size: 18 },
  { icon: Code, x: "15%", y: "75%", delay: 2, size: 16 },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <ParticleField count={60} color="100, 160, 255" />

      {/* Animated aurora blobs */}
      <motion.div
        className="absolute top-10 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]"
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[150px]"
        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/10"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: item.delay }}
        >
          <item.icon className="text-accent/60" style={{ width: item.size, height: item.size }} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-center pt-24 pb-16 relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-medium text-accent tracking-wide uppercase">
              Open to opportunities
            </span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-[1.1] mb-4">
            Hello, I'm{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Kireeti Avula
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-accent to-secondary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-hero-muted mb-3 font-display font-medium"
          >
            Data Analyst <span className="text-secondary">•</span> Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-hero-muted/70 mb-8 max-w-lg leading-relaxed"
          >
            Building full-stack web applications with Angular & .NET, and transforming
            data into actionable insights. Delivering enterprise-grade solutions that drive
            real business impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <MagneticButton>
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 px-7 shadow-lg shadow-secondary/20 hover:shadow-secondary/30 transition-all"
              >
                <a href="#projects">
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-7 shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-hero-muted hover:text-hero-foreground hover:bg-hero-foreground/5 gap-2 px-7 transition-all"
              >
                <a href="/Kireeti_Avula_Resume.pdf" download>
                  <Download className="w-4 h-4" /> Resume
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Stats with animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-8"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="text-center group">
                <motion.p
                  className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-b from-hero-foreground to-hero-muted bg-clip-text text-transparent group-hover:from-secondary group-hover:to-accent transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                >
                  {s.value}
                </motion.p>
                <p className="text-xs text-hero-muted/60 mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right – profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Animated outer ring */}
            <motion.div
              className="absolute inset-0 -m-6 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, hsl(220,70%,50%), hsl(25,95%,55%), hsl(220,70%,50%))",
                opacity: 0.15,
                filter: "blur(20px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Profile circle */}
            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-full p-1 bg-gradient-to-br from-accent via-accent/50 to-secondary">
              <div className="w-full h-full rounded-full overflow-hidden bg-hero">
                <img src={profileImg} alt="Kireeti Avula" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-card/95 backdrop-blur-md border border-border/60 px-5 py-3 rounded-xl shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sm font-bold text-foreground">2+ Years Experience</p>
              <p className="text-xs text-muted-foreground">Data Analyst @ EXL Service</p>
            </motion.div>

            {/* Floating tech badge */}
            <motion.div
              className="absolute -top-2 -left-6 md:-top-4 md:-left-8 bg-card/95 backdrop-blur-md border border-border/60 px-4 py-2.5 rounded-xl shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Data Analyst
              </p>
            </motion.div>

            {/* Floating full stack badge */}
            <motion.div
              className="absolute top-1/2 -right-10 md:-right-14 bg-card/95 backdrop-blur-md border border-border/60 px-4 py-2.5 rounded-xl shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Full Stack Dev
              </p>
            </motion.div>

            {/* Orbiting dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/50"
              animate={{
                x: [0, 180, 0, -180, 0],
                y: [-180, 0, 180, 0, -180],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ marginLeft: -6, marginTop: -6 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hero-muted/50 hover:text-secondary transition-colors group"
      >
        <span className="text-xs uppercase tracking-widest group-hover:tracking-[0.2em] transition-all">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </a>
    </section>
  );
}
