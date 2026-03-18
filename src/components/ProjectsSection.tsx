import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, ArrowUpRight, Github, ExternalLink, FileText, Globe } from "lucide-react";
import { Link } from "react-router-dom";

import agricultureCover from "@/assets/projects/agriculture-cover-themed.jpg";
import retailCover from "@/assets/projects/retail-cover-themed.jpg";
import logisticsCover from "@/assets/projects/logistics-cover-themed.jpg";

import sripadaCover from "@/assets/projects/sripada-residency-cover.jpg";
import garudaCover from "@/assets/projects/garuda-tours-cover.jpg";

interface Project {
  title: string;
  date: string;
  desc: string;
  tags: string[];
  accent: string;
  github: string;
  slug: string;
  image?: string;
  hasPage?: boolean;
  liveUrl?: string;
  badge?: string;
  techStack?: string[];
}

const analyticsProjects: Project[] = [
  {
    title: "Arogya Suraksha – Health Policy AI Assistant",
    date: "Live Project",
    desc: "RAG-based AI assistant that answers health insurance policy queries using LangChain, OpenAI, and Streamlit with intelligent document retrieval.",
    tags: ["Python", "LangChain", "GenAI", "Streamlit"],
    accent: "from-emerald-500 to-teal-500",
    github: "https://github.com/kireeti30",
    slug: "arogya-suraksha",
    liveUrl: "https://arogya-suraksha-ai-8pvyc5y3h3btvcbzuun7tu.streamlit.app/",
    badge: "Live",
  },
  {
    title: "India Agriculture Crop Production Analysis",
    date: "Jun 2023",
    desc: "Analyzed India's agricultural crop production (1997–2021) using Tableau dashboards with interactive filters, state-wise comparisons, and crop trend visualizations.",
    tags: ["Tableau", "Data Visualization", "Analytics"],
    accent: "from-blue-500 to-cyan-500",
    github: "https://github.com/kireeti30/India-Agriculture-crop-production-analysis.git",
    slug: "agriculture",
    image: agricultureCover,
    hasPage: true,
  },
  {
    title: "Retail Customer Retention Analytics",
    date: "Jan 2026",
    desc: "Developed Power BI dashboard analyzing churn, loyalty, and customer behavior using Power Query and DAX.",
    tags: ["Power BI", "DAX", "Analytics"],
    accent: "from-secondary to-secondary/60",
    github: "https://github.com/kireeti30/IKEA-Customer-Retention-PowerBI.git",
    slug: "retail-customer-retention",
    image: retailCover,
    hasPage: true,
  },
  {
    title: "Logistics Optimization for Delivery Routes",
    date: "Feb 2026",
    desc: "Built SQL-based analytics system to improve e-commerce delivery efficiency, performed data cleaning, and analyzed delays and route optimization.",
    tags: ["SQL", "Data Analysis", "ETL"],
    accent: "from-accent to-accent/60",
    github: "https://github.com/kireeti30/logistics-operations-sql-analysis.git",
    slug: "logistics-optimization",
    image: logisticsCover,
    hasPage: true,
  },
];

const freelancingProjects: Project[] = [
  {
    title: "Sripada Residency",
    date: "Live Project",
    desc: "A fully functional hotel/residency website built with Angular, featuring room bookings, gallery, and contact management.",
    tags: ["Angular", "TypeScript", "Web Development"],
    accent: "from-amber-500 to-orange-500",
    github: "https://github.com/kireeti30",
    slug: "sripada-residency",
    liveUrl: "https://sripadaresidency.netlify.app/",
    badge: "Live",
    techStack: ["Angular", ".NET", "TypeScript"],
  },
  {
    title: "Garuda Tours & Travels",
    date: "Live Project",
    desc: "A modern tours and travels booking website built with React, featuring tour packages, itineraries, and customer inquiries.",
    tags: ["React", "JavaScript", "Web Development"],
    accent: "from-teal-500 to-cyan-500",
    github: "https://github.com/kireeti30",
    slug: "garuda-tours",
    liveUrl: "https://garudatoursandtravels.netlify.app/",
    badge: "Live",
    techStack: ["React", "JavaScript", "CSS"],
  },
];

const tabs = [
  { key: "analytics", label: "Data & Analytics", icon: Folder },
  { key: "freelancing", label: "Live Projects", icon: Globe },
] as const;

type TabKey = (typeof tabs)[number]["key"];

function LiveProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.div
      key={p.title}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ delay: i * 0.1 }}
      className="group relative rounded-2xl bg-card border border-border/50 hover:border-secondary/50 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 overflow-hidden"
    >
      {/* Gradient accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent}`} />

      <div className="p-8 flex flex-col h-full">
        {/* Header with live pulse */}
        <div className="flex items-center justify-between mb-6">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.accent} flex items-center justify-center shadow-lg`}>
            <Globe className="w-6 h-6 text-white" />
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-green-500">Live</span>
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
          {p.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>

        {/* Tech stack pills */}
        {p.techStack && (
          <div className="flex flex-wrap gap-2 mb-6">
            {p.techStack.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-lg bg-muted/80 text-foreground font-semibold border border-border/30"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/30">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 ml-auto group/btn"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Live Site
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.div
      key={p.title}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ delay: i * 0.08 }}
      className="group relative flex flex-col rounded-2xl bg-card border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 overflow-hidden"
    >
      {p.image ? (
        <div className="aspect-video overflow-hidden border-b border-border/30">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      ) : (
        <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent}`} />
      )}

      {p.badge === "Live" && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-green-500">Live</span>
          </span>
        </div>
      )}
      {p.badge && p.badge !== "Live" && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold">
            <FileText className="w-3 h-3" />
            {p.badge}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Folder className="w-5 h-5 text-accent" />
          </div>
          <span className="text-xs font-medium text-secondary">{p.date}</span>
        </div>

        <h3 className="font-display font-bold text-foreground mb-2 leading-snug group-hover:text-accent transition-colors">
          {p.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium group-hover:bg-accent/10 group-hover:text-accent transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-border/30">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          {p.liveUrl ? (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-secondary to-accent text-primary-foreground text-xs font-semibold hover:shadow-lg transition-all duration-300 ml-auto"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live App
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <Link
              to={`/projects/${p.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-secondary transition-colors ml-auto"
            >
              <ExternalLink className="w-4 h-4" />
              View Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("analytics");
  const projects = activeTab === "analytics" ? analyticsProjects : freelancingProjects;

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Featured{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Real-world projects showcasing data analytics, enterprise solutions, and freelancing work.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-card border border-border/50">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {projects.map((p, i) =>
              activeTab === "freelancing" ? (
                <LiveProjectCard key={p.title} p={p} i={i} />
              ) : (
                <ProjectCard key={p.title} p={p} i={i} />
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
