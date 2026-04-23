import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl shadow-lg border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-5 sm:px-6 lg:px-10">
        <motion.a
          href="#home"
          className="font-display text-xl md:text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={scrolled ? "text-foreground" : "text-hero-foreground"}>
            Kireeti
          </span>
          <span className="text-secondary">.</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                active === l.href
                  ? "text-secondary"
                  : scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-hero-foreground/70 hover:text-hero-foreground"
              }`}
            >
              {l.label}
              {active === l.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-secondary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}

          <a href="/Kireeti_Avula_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="ml-3 bg-gradient-to-r from-secondary to-accent text-primary-foreground hover:opacity-90 gap-2 shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300"
            >
              <Eye className="w-4 h-4" /> Resume
            </Button>
          </a>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-hero-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-5 gap-1">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className={`font-medium rounded-lg px-3 py-3 transition-all ${
                    active === l.href
                      ? "text-secondary bg-secondary/10"
                      : "text-foreground hover:text-secondary hover:bg-secondary/5"
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="/Kireeti_Avula_Resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-2">
                <Button size="sm" className="bg-gradient-to-r from-secondary to-accent text-primary-foreground gap-2 w-full">
                  <Eye className="w-4 h-4" /> View Resume
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
