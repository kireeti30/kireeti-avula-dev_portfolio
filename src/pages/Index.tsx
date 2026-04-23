import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (location.hash === "#projects") {
      const el = document.getElementById("projects");
      if (el) {
        window.history.scrollRestoration = "manual";
        setTimeout(() => {
          window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
        }, 50);
      }
    } else {
      window.history.scrollRestoration = "auto";
    }
  }, [location]);

  return (
    <PageTransition>
      {showIntro && <IntroSplash onEnter={() => setShowIntro(false)} />}
      <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
        <Navbar />
        <main className="flex flex-col w-full">
          <HeroSection />
          <ExperienceSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
