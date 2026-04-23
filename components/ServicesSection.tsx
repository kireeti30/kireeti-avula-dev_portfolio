import { motion } from "framer-motion";
import { BarChart3, LayoutDashboard, Database, Cloud, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlowCard from "@/components/GlowCard";
import MagneticButton from "@/components/MagneticButton";

const services = [
  {
    icon: BarChart3,
    title: "Data Analysis & Insights",
    desc: "In-depth data exploration and statistical analysis to uncover actionable business insights.",
    color: "from-accent to-accent/70",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Design",
    desc: "Interactive Power BI and Excel dashboards with compelling visualizations and KPI tracking.",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Database,
    title: ".NET & Angular Web Apps",
    desc: "Full-stack web application development using Angular for frontend and .NET for backend services.",
    color: "from-accent to-secondary",
  },
  {
    icon: Cloud,
    title: "Cloud & Pipelines",
    desc: "Azure cloud solutions and data pipeline architecture for scalable data processing.",
    color: "from-accent/80 to-accent",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-secondary/5 rounded-full blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest mb-4">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What I Can{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Do For You
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-7 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <GlowCard
              key={s.title}
              className="rounded-2xl bg-card/60 backdrop-blur-xl border border-border/40"
              glowColor={i % 2 === 0 ? "hsl(220, 70%, 50%)" : "hsl(25, 95%, 55%)"}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group p-7 overflow-hidden"
              >
                {/* glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-[0.07] transition duration-500`}
                />

                {/* icon */}
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                <h3 className="font-display font-bold text-foreground mb-2 text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            </GlowCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <MagneticButton>
            <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-accent text-primary-foreground px-10 gap-2 shadow-lg hover:shadow-xl transition-shadow">
              <a href="#contact">
                <Send className="w-4 h-4" /> Contact Me
              </a>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
