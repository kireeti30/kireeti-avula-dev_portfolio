import { motion } from "framer-motion";
import { Code2, BarChart3, Globe, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Data",
    icon: Code2,
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 90 },
      { name: "PySpark", level: 70 },
      { name: "Databricks", level: 65 },
      { name: "NumPy", level: 80 },
      { name: "Pandas", level: 85 },
    ],
  },
  {
    title: "Visualization & Analytics",
    icon: BarChart3,
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Excel", level: 92 },
      { name: "Dashboard Creation", level: 85 },
      { name: "Data Analysis", level: 88 },
      { name: "ETL", level: 75 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "JavaScript", level: 75 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: [
      { name: "AWS Cloud", level: 60 },
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
            Expertise
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Skills &{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            A well-rounded toolkit spanning data analytics, visualization, web development, and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-secondary/15 flex items-center justify-center group-hover:from-accent/25 group-hover:to-secondary/25 transition-all">
                  <cat.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((s, sIdx) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    delay={catIdx * 0.1 + sIdx * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
