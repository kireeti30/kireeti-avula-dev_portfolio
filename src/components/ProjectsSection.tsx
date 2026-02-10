import { motion } from "framer-motion";
import { ExternalLink, Folder, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Logistics Optimization for Delivery Routes",
    date: "Feb 2026",
    desc: "Built SQL-based analytics system to improve e-commerce delivery efficiency, performed data cleaning, and analyzed delays and route optimization.",
    tags: ["SQL", "Data Analysis", "ETL"],
    accent: "from-accent to-accent/60",
    github: "https://github.com/kireeti30/logistics-operations-sql-analysis.git"
  },
  {
    title: "Retail Customer Retention Analytics",
    date: "Jan 2026",
    desc: "Developed Power BI dashboard analyzing churn, loyalty, and customer behavior using Power Query and DAX.",
    tags: ["Power BI", "DAX", "Analytics"],
    accent: "from-secondary to-secondary/60",
    github: "https://github.com/kireeti30/IKEA-Customer-Retention-PowerBI.git"

  },
  {
    title: "Social Media Analytics for Strategic Branding",
    date: "Dec 2025",
    desc: "Built Excel analytics solution linking ad spend with follower growth and campaign success.",
    tags: ["Excel", "Data Analysis", "Marketing"],
    accent: "from-accent to-secondary",
    github: "https://github.com/kireeti30/MyntraProject-Excel.git"
  },
  {
    title: "Ramco HRP Live Project",
    date: "May – Jul 2023",
    desc: "Worked on finance module enhancements, API integrations, and performance optimization in a live enterprise environment.",
    tags: ["SQL", "API", "Enterprise"],
    accent: "from-secondary to-accent",
    github: "https://github.com/kireeti30"
  },
  {
    title: "RAG-based GenAI Knowledge Assistant",
    date: "Research Project",
    desc: "Built end-to-end RAG system using Python, OpenAI APIs, LangChain, and Pinecone with document ingestion pipelines and real-time LLM responses.",
    tags: ["Python", "LangChain", "GenAI", "Pinecone"],
    accent: "from-accent/80 to-accent",
    github: "https://github.com/kireeti30"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
            Real-world projects showcasing data analytics, enterprise solutions, and AI applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.a
  href={p.github}
  target="_blank"
  key={p.title}
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.08 }}
  className="group relative flex flex-col rounded-2xl bg-card border border-border/50 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
>

              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent}`} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Folder className="w-5 h-5 text-accent" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <span className="text-xs font-medium text-secondary mb-2">{p.date}</span>
                <h3 className="font-display font-bold text-foreground mb-2 leading-snug group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium group-hover:bg-accent/10 group-hover:text-accent transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 