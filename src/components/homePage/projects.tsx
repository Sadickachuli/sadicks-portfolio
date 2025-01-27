import Dot from "../dot";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ProjectCard from "../projects/projectCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const triggerr = useRef(null);
  const roller = useRef(null);
  const sliderContainer = useRef(null);
  const slider = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerr.current,
        start: "top top",
        pin: true,
        scrub: 1,
      },
    });

    tl.to(roller.current, { width: "100%", duration: 4 }, 0);
    tl.to(slider.current, { x: "-60%", duration: 4 }, 0);
  }, []);

  return (
    <article ref={triggerr} className="flex flex-col gap-10 items-start py-12 w-full h-screen">
      <section className="padd flex items-center w-full">
        <div ref={roller} className="h-1 w-0 bg-primary rounded-full" />
        <section className="flex items-center">
          <Dot />
          <p>Projects</p>
        </section>
      </section>
      <section ref={sliderContainer} className="w-full h-[75vh] overflow-hidden flex-nowrap">
        <div ref={slider} className="w-[250%] h-full flex flex-nowrap gap-20 overflow-auto paddr">
          <ProjectCard
            githubLink="https://www.theshg.com/"
            imageSrc="/images/projects/shg-web.png"
            year="2024"
            author="Sadick"
            title="An Optimised Website For Stone House Group"
          />
          <ProjectCard
            githubLink="https://github.com/Sadickachuli/Homyz.git"
            imageSrc="/images/projects/middle.png"
            year="2023"
            author="Sadick"
            title="Real Estate Website For Homyz"
            isHalf
          />
          <ProjectCard
            githubLink="https://github.com/Sadickachuli/fashion-aura-website.git"
            imageSrc="/images/projects/fashion.png"
            year="2022"
            author="Sadick"
            title="E-commerce Website For Fashion Aura"
          />
          <ProjectCard
            githubLink="https://www.wingsoc.org/"
            imageSrc="/images/projects/wings-of-change.png"
            year="2021"
            author="Sadick"
            title="A Website For My Initiative"
          />
          <ProjectCard
            githubLink="https://sadickachuli.github.io/html_css_contest_-group14-/"
            imageSrc="/images/projects/expc.png"
            year="2020"
            author="Sadick"
            title="Website To Connect And Explore Ghana"
          />
          <ProjectCard
            githubLink="https://github.com/Sadickachuli/Mujera.git"
            imageSrc="/images/projects/mujeera.png"
            year="2024"
            author="Sadick"
            title="A Website For Mujera Finance"
          />
            
        </div>
      </section>
    </article>
  );
}
