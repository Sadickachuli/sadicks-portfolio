import AboutSection from "../components/homePage/aboutSection";
import HeroSection from "../components/homePage/hero";
import SkillsSection from "../components/homePage/skills";

export default function HomePage() {
  return (
    <section>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <div className="h-screen" />
    </section>
  );
}
