import Dot from "../dot";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Button from "../utils/button";

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
    <article
      ref={triggerr}
      className="flex flex-col gap-10 items-start py-12 w-full h-screen"
    >
      <section className="padd flex items-center w-full">
        <div ref={roller} className="h-1 w-0 bg-primary rounded-full" />
        <section className="flex items-center ">
          <Dot />
          <p>Projects</p>
        </section>
      </section>
      <section
        ref={sliderContainer}
        className="w-full h-[75vh] overflow-hidden flex-nowrap"
      >
        <div
          ref={slider}
          className="w-[250%] h-full flex flex-nowrap gap-20 overflow-auto paddr"
        >
          <ProjectCard />
          <section className="w-full h-full">
            <section className="flex flex-col gap-4 h-1/3">
              <section className="flex items-center w-1/3 md:w-full">
                <Dot />
                <p>My Works</p>
              </section>
              <p className="font-sans text-5xl">
                Take a look at <br /> my projects
              </p>
              <Button text="View All Projects" onclick={() => {}} />
            </section>
            <ProjectCard isHalf />
          </section>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </article>
  );
}

function ProjectCard({ isHalf = false }: { isHalf?: boolean }) {
  return (
    <article
      className={`w-full group relative flex flex-col gap-6 overflow-hidden rounded-tl-3xl ${
        isHalf ? "h-2/3" : ""
      }`}
    >
      <img
        src="/images/test.jpg"
        className="w-full h-5/6 object-cover group-hover:scale-[104%] rounded-3xl transition-all duration-300"
        alt=""
      />
      <section>
        <div className="flex items-center gap-3">
          <p>2024</p>
          <Dot />
          <p>Sadick</p>
        </div>
        <p className="font-bold font-serif text-3xl">
          Refreshing Gary Neville's digital presence
        </p>
      </section>
      <section className="absolute top-0 right-0 bg-black -translate-y-20 transition-all duration-300 group-hover:translate-y-0 rounded-bl-3xl">
        <section className="px-10 py-3 w-full h-full flex items-center gap-4 relative">
          <div className="bg-secondary text-primary px-4 rounded-2xl text-xs font-mono py-1">
            Design
          </div>
          <div className="bg-secondary text-primary px-4 rounded-2xl text-xs font-mono py-1">
            Website
          </div>
          <div className="bg-secondary text-primary px-4 rounded-2xl text-xs font-mono py-1">
            SEO
          </div>
          <img
            src="/images/clip.png"
            className="w-5 h-5 object-contain absolute -left-5 top-0"
            alt=""
          />
          <img
            src="/images/clip.png"
            className="w-7 h-7 object-contain absolute right-0 -bottom-7"
            alt=""
          />
        </section>
      </section>
    </article>
  );
}
