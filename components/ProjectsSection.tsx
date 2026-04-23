import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, ArrowUpRight, Github, ExternalLink, Globe, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  github: string;
  slug: string;
  hasPage?: boolean;
  liveUrl?: string;
  isLive?: boolean;
}

const analyticsProjects: Project[] = [
  {
    title: "US Healthcare Payment Integrity",
    desc: "CMS Medicare claims analysis — fraud detection dashboards & statistical modeling.",
    tags: ["Power BI", "Python", "Pandas", "Healthcare"],
    github: "https://github.com/kireeti30",
    slug: "exl-payment-integrity",
    hasPage: true,
  },
  {
    title: "Arogya Suraksha – Health Policy AI",
    desc: "RAG-based AI assistant for health insurance queries using LangChain & OpenAI.",
    tags: ["Python", "LangChain", "GenAI", "Streamlit"],
    github: "https://github.com/kireeti30",
    slug: "arogya-suraksha",
    liveUrl: "https://arogya-suraksha-ai-8pvyc5y3h3btvcbzuun7tu.streamlit.app/",
  },
  {
    title: "India Agriculture Crop Analysis",
    desc: "Tableau dashboards analyzing India's crop production trends (1997–2021).",
    tags: ["Tableau", "Data Visualization"],
    github: "https://github.com/kireeti30/India-Agriculture-crop-production-analysis.git",
    slug: "agriculture",
    hasPage: true,
  },
  {
    title: "Retail Customer Retention",
    desc: "Power BI dashboard analyzing churn, loyalty & customer behavior with DAX.",
    tags: ["Power BI", "DAX", "Analytics"],
    github: "https://github.com/kireeti30/IKEA-Customer-Retention-PowerBI.git",
    slug: "retail-customer-retention",
    hasPage: true,
  },
  {
    title: "Logistics Route Optimization",
    desc: "SQL analytics system for e-commerce delivery efficiency & route optimization.",
    tags: ["SQL", "Data Analysis", "ETL"],
    github: "https://github.com/kireeti30/logistics-operations-sql-analysis.git",
    slug: "logistics-optimization",
    hasPage: true,
  },
];

const liveProjects: Project[] = [
  {
    title: "Sripada Residency",
    desc: "Hotel website with room bookings, gallery & contact management.",
    tags: ["Angular", ".NET", "TypeScript"],
    github: "https://github.com/kireeti30",
    slug: "sripada-residency",
    liveUrl: "https://sripadaresidency.netlify.app/",
    isLive: true,
  },
  {
    title: "Garuda Tours & Travels",
    desc: "Modern travel booking site with tour packages & itineraries.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/kireeti30",
    slug: "garuda-tours",
    liveUrl: "https://garudatoursandtravels.netlify.app/",
    isLive: true,
  },
];

const tabs = [
  { key: "analytics", label: "Data & Analytics", icon: Folder },
  { key: "live", label: "Live Projects", icon: Globe },
] as const;

type TabKey = (typeof tabs)[number]["key"];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: i * 0.06 }}
      className="group relative flex items-start gap-5 p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border/40 hover:border-accent/30 hover:bg-card transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
        {p.isLive ? (
          <Globe className="w-5 h-5 text-accent" />
        ) : (
          <Code2 className="w-5 h-5 text-accent" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display text-sm font-bold text-foreground group-hover:text-accent transition-colors truncate">
            {p.title}
          </h3>
          {p.isLive && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 shrink-0">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              <span className="text-[10px] font-semibold text-green-500">Live</span>
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2.5">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full bg-muted/80 text-muted-foreground font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 shrink-0 self-center">
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
        >
          <Github className="w-4 h-4" />
        </a>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground group-hover:text-secondary group-hover:bg-secondary/10 transition-all">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );

  if (p.liveUrl) {
    return (
      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  if (p.hasPage) {
    return <Link to={`/projects/${p.slug}`} className="block">{content}</Link>;
  }

  return content;
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("analytics");
  const projects = activeTab === "analytics" ? analyticsProjects : liveProjects;

  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Featured{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-card border border-border/50">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
