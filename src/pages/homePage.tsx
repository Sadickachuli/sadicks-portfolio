import AboutGrid from "../components/aboutGrid";
import AboutSection from "../components/homePage/aboutSection";
import HeroSection from "../components/homePage/hero";
import ProjectsSection from "../components/homePage/projects";

export default function HomePage() {
  return (
    <article>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AboutGrid />
      <div className="h-screen" />
    </article>
  );
}
