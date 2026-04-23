import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ParticleField from "@/components/ParticleField";
import MagneticButton from "@/components/MagneticButton";

const contactInfo = [
  { icon: Mail, label: "avulakireeti2001@gmail.com", href: "mailto:avulakireeti2001@gmail.com" },
  { icon: Phone, label: "9949540447", href: "tel:9949540447" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/kireeti-avula-690480245/" },
  { icon: Github, label: "GitHub Profile", href: "https://github.com/kireeti30" },
  { icon: MapPin, label: "Tirupati, India", href: "#" },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_sdqutx7",
      "template_rgpob95",
      { from_name: form.name, reply_to: form.email, message: form.message },
      "GvMZu3XyLSerDe0iZ"
    )
    .then(() => {
      toast({ title: "Message sent successfully 🚀", description: "I will reply to you soon." });
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    })
    .catch(() => {
      toast({ title: "Failed to send ❌", description: "Please try again later." });
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <ParticleField count={30} color="200, 140, 80" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-hero-foreground">
            Got a Project?{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Let's Talk
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left contact info */}
          <div className="space-y-3">
            {contactInfo.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6, borderColor: "hsl(25, 95%, 55%, 0.4)" }}
                className="flex items-center gap-4 p-4 rounded-xl bg-hero-foreground/5 border border-hero-foreground/10 transition-all duration-300"
              >
                <motion.div
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-secondary/15 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <c.icon className="w-5 h-5 text-secondary" />
                </motion.div>
                <span className="text-sm text-hero-muted flex-1">{c.label}</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
              </motion.a>
            ))}
          </div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-hero-foreground/5 border border-hero-foreground/10 backdrop-blur-sm space-y-4"
          >
            <h4 className="font-display text-lg font-bold text-hero-foreground mb-2">
              Send a Message
            </h4>

            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-hero-foreground/5 border-hero-foreground/10 text-hero-foreground placeholder:text-hero-muted/40 focus:border-secondary/50"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-hero-foreground/5 border-hero-foreground/10 text-hero-foreground placeholder:text-hero-muted/40 focus:border-secondary/50"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-hero-foreground/5 border-hero-foreground/10 text-hero-foreground placeholder:text-hero-muted/40 focus:border-secondary/50"
            />

            <MagneticButton className="w-full">
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="bg-gradient-to-r from-secondary to-accent text-primary-foreground w-full gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Send className="w-4 h-4" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
