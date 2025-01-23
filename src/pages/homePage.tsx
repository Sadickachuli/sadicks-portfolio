import AboutSection from "../components/homePage/aboutSection";
import ContactSection from "../components/homePage/contactSection";
import ExpertiseSection from "../components/homePage/expertise";
import HeroSection from "../components/homePage/hero";
import ProjectsSection from "../components/homePage/projects";

export default function HomePage() {
  return (
    <article>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExpertiseSection />
      <ContactSection />
    </article>
  );
}
