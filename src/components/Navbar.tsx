import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <a href="#home" className="font-display text-xl font-bold">
          <span className={scrolled ? "text-foreground" : "text-hero-foreground"}>
            Kireeti
          </span>
          <span className="text-secondary">.</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-all hover:bg-secondary/10 hover:text-secondary ${
                scrolled
                  ? "text-foreground"
                  : "text-hero-foreground/80 hover:text-hero-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}

          {/* Resume desktop */}
          <a href="/Kireeti_Avula_Resume.pdf" download target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="ml-3 bg-gradient-to-r from-secondary to-accent text-primary-foreground hover:opacity-90 gap-2 shadow-md shadow-secondary/20"
            >
              <Download className="w-4 h-4" /> Resume
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-hero-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-b border-border"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground font-medium hover:text-secondary hover:bg-secondary/10 rounded-lg px-3 py-2.5 transition-all"
                >
                  {l.label}
                </a>
              ))}

              {/* Resume mobile */}
              <a
                href="/Kireeti_Avula_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                <Button
                  size="sm"
                  className="mt-2 bg-gradient-to-r from-secondary to-accent text-primary-foreground w-fit gap-2"
                >
                  <Download className="w-4 h-4" /> Resume
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
