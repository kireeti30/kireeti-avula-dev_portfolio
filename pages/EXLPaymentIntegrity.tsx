import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

export default function EXLPaymentIntegrity() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </header>

        <main className="container mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            {/* Title */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-xs font-semibold text-green-500">Live Dashboard</span>
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
                US Healthcare Payment Integrity
                <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  CMS Medicare Inpatient Analysis
                </span>
              </h1>
              <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                Analyzed CMS Medicare inpatient billing data to uncover hospital billing gaps, charge ratio outliers,
                and geographic payment patterns — enabling data-driven payment integrity insights.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Power BI", "Python", "Pandas", "CMS", "Healthcare Analytics", "Payment Integrity"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium">
                  {t}
                </span>
              ))}
            </div>

            {/* Embedded Power BI */}
            <div className="rounded-2xl overflow-hidden border border-border/50 bg-card mb-12">
              <div className="p-4 border-b border-border/30 flex items-center justify-between">
                <h2 className="font-semibold text-foreground">Interactive Dashboard</h2>
                <a
                  href="/projects/EXL_Case_Study.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  View Case Study PDF
                </a>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  title="EXL Payment Integrity Dashboard"
                  src="https://app.powerbi.com/view?r=eyJrIjoiMDY4YzVlNTQtOGFmZi00ZWYxLWIwMmMtZWQxYmE4YzUxZDk0IiwidCI6Ijg1ZDBjMTEyLTJjYzAtNDU1ZS04YjMxLTM1NDE1OWQzMDNkNiJ9"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Key Findings */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Records Analyzed", value: "~126K", sub: "rows after cleaning" },
                { label: "Avg Charge Ratio", value: "5.71x", sub: "hospitals bill vs Medicare pays" },
                { label: "Top Outlier Gap", value: "$261K", sub: "Stanford Health Care" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-card border border-border/50 p-6 text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Methodology */}
            <div className="rounded-2xl bg-card border border-border/50 p-8 mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Methodology</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Data Cleaning (Python)</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Loaded 3 datasets into Pandas DataFrames</li>
                    <li>• Standardized hospital IDs, ZIP & FIPS codes</li>
                    <li>• Handled missing values in RUCA and MDC columns</li>
                    <li>• Computed Billing Gap & Charge Ratio metrics</li>
                    <li>• Final dataset: ~126K rows, 56 columns</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Analysis (Power BI)</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Top 20 hospitals by billing gap identification</li>
                    <li>• Charge ratio distribution analysis</li>
                    <li>• Medicare payments by state & MDC</li>
                    <li>• Outlier detection (2σ above national mean)</li>
                    <li>• Geographic payment pattern mapping</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                href="/projects/EXL_Case_Study.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-secondary text-primary-foreground font-semibold hover:shadow-lg transition-all"
              >
                <FileText className="w-4 h-4" />
                Download Case Study
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                All Projects
              </Link>
            </div>
          </motion.div>
        </main>
      </div>
    </PageTransition>
  );
}
