import LeftSection from "../components/aboutPage/left";
import MiddleSection from "../components/aboutPage/middle";
import RightSection from "../components/aboutPage/right";
import SkillsSection from "../components/homePage/skills";

export default function AboutPage() {
  return (
    <article>
      <SkillsSection />
      <article className="padd w-full h-[120vh] flex justify-between gap-6 py-12">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </article>
    </article>
  );
}
