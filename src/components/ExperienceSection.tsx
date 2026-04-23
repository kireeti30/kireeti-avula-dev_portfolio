import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, Building2, MapPin, ChevronRight } from "lucide-react";

const experience = [
  {
    title: "Senior Data Analyst",
    org: "EXL Service",
    period: "Apr 2026 – Present",
    location: "Chennai",
    tags: ["Power BI", "Python", "Pandas", "Healthcare", "CMS Medicare"],
    summary: "US healthcare payment integrity — fraud detection dashboards, claims analysis & statistical modeling.",
  },
  {
    title: "Business Analyst",
    org: "Treebi – Sripada Residency",
    period: "Nov 2025 – Mar 2026",
    location: "India",
    tags: ["Analytics", "Dashboards", "Hotel Operations"],
    summary: "Hotel data management — occupancy & revenue insights, data-driven operational recommendations.",
  },
  {
    title: "Programmer Analyst",
    org: "Ramco Systems",
    period: "Sep 2024 – Oct 2025",
    location: "Chennai",
    tags: ["Angular", ".NET", "SQL Server", "Python", "Power BI"],
    summary: "Enterprise HRP platform — frontend (Angular), backend (.NET), payroll analytics & automation.",
  },
];

const education = [
  {
    title: "B.Tech in CSE (Data Science)",
    org: "VIT Vellore",
    period: "2020 – 2024",
    grade: "8.02 CGPA",
    tags: ["Data Science", "ML", "Data Engineering"],
  },
  {
    title: "Intermediate (12th)",
    org: "Narayana Junior College",
    period: "2018 – 2020",
    grade: "9.42 GPA",
    tags: [],
  },
  {
    title: "10th Class",
    org: "Narayana EM School, Srinivasamangapuram",
    period: "2018 Passout",
    grade: "9.8 GPA",
    tags: [],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, type: "spring" as const, stiffness: 100 },
  }),
};

function TimelineDot({ color }: { color: string }) {
  return (
    <motion.div
      className="absolute left-0 top-6 -translate-x-1/2 z-10"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
    >
      <div className={`w-4 h-4 rounded-full ${color} shadow-lg ring-4 ring-background`} />
      <motion.div
        className={`absolute inset-0 rounded-full ${color}`}
        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden bg-background">
      {/* Curved top separator */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 80V0C240 60 480 80 720 60C960 40 1200 60 1440 0V80H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      {/* Animated background curves */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full border border-accent/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full border border-secondary/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-10 w-[250px] h-[250px] bg-secondary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Experience &{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Work Experience - takes 3 cols */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="w-10 h-10 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring" }}
              >
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-foreground">Work Experience</h3>
            </div>

            <div className="relative ml-6">
              {/* Timeline line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary to-accent/20"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />

              <div className="space-y-6">
                {experience.map((e, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative pl-8 group"
                  >
                    <TimelineDot color={i === 0 ? "bg-secondary" : "bg-accent"} />

                    <motion.div
                      className="p-5 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
                      whileHover={{ x: 6, boxShadow: "0 8px 30px -12px hsl(220, 70%, 50%, 0.15)" }}
                    >
                      {/* Hover gradient sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h4 className="font-display text-base font-bold text-foreground group-hover:text-accent transition-colors">
                              {e.title}
                            </h4>
                            <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5">
                              <Building2 className="w-3.5 h-3.5 shrink-0" /> {e.org}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                              <Calendar className="w-3 h-3" /> {e.period}
                            </span>
                            {e.location && (
                              <span className="text-[11px] text-muted-foreground flex items-center gap-0.5">
                                <MapPin className="w-3 h-3" /> {e.location}
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex items-start gap-1.5">
                          <ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-accent/50" />
                          {e.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {e.tags.map((tag) => (
                            <motion.span
                              key={tag}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-accent/10 text-accent/80 cursor-default"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education - takes 2 cols */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="w-10 h-10 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ type: "spring" }}
              >
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((e, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    className="p-5 rounded-2xl bg-card border border-border/50 hover:border-secondary/30 transition-all duration-500 relative overflow-hidden"
                    whileHover={{ y: -4, boxShadow: "0 8px 30px -12px hsl(25, 95%, 55%, 0.15)" }}
                  >
                    {/* Curved accent */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br from-secondary/10 to-accent/5 group-hover:scale-150 transition-transform duration-700" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="font-display text-sm font-bold text-foreground group-hover:text-secondary transition-colors">
                            {e.title}
                          </h4>
                          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <Building2 className="w-3 h-3 shrink-0" /> {e.org}
                          </p>
                          <span className="text-[11px] text-accent font-medium flex items-center gap-1 mt-1">
                            <Calendar className="w-3 h-3" /> {e.period}
                          </span>
                        </div>
                        <motion.div
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20"
                          whileHover={{ scale: 1.1 }}
                        >
                          <p className="text-sm font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent whitespace-nowrap">
                            {e.grade}
                          </p>
                        </motion.div>
                      </div>

                      {e.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {e.tags.map((f) => (
                            <motion.span
                              key={f}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-secondary/10 text-secondary/70 cursor-default"
                            >
                              {f}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1440 64" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 0V64C360 20 720 0 1080 20C1260 30 1380 50 1440 64V0H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
