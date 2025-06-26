import { useEffect } from "react";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-section";
import ContactSection from "@/components/sections/contact-section";
import CustomCursor from "@/components/ui/custom-cursor";

export default function Home() {
  useEffect(() => {
    document.title = "Punith Sai Reddy Gaddam - Data Science Portfolio";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Data Science Master\'s student specializing in Machine Learning, AI, and Data Analytics. Explore my projects in rocket landing simulation, streaming analytics, and intrusion detection systems.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="bg-slate-900 text-slate-100 overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="bg-slate-800 py-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Punith Sai Reddy Gaddam. Designed with passion for data science and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}
