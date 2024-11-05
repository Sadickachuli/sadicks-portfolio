import AboutSection from "../components/homePage/aboutSection";
import HeroSection from "../components/homePage/hero";
import ProjectsSection from "../components/homePage/projects";

export default function HomePage() {
  return (
    <section>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <div className="h-screen" />
    </section>
  );
}
