import AboutSection from "../components/homePage/aboutSection";
import HeroSection from "../components/homePage/hero";
import ProjectsSection from "../components/homePage/projects";
import SkillsSection from "../components/homePage/skills";

export default function HomePage() {
  return (
    <section>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <div className="h-screen" />
    </section>
  );
}
