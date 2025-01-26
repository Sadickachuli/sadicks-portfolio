import Dot from "../dot";
import Button from "../utils/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
    tl.from(leftRef.current, { x: "-100%", duration: 1, opacity: 0 }, 0);
    tl.from(rightRef.current, { x: "100%", duration: 1, opacity: 0 }, 0);
  }, []);

  return (
    <article
      ref={containerRef}
      className="flex justify-between md:flex-col items-start padd py-10"
    >
      <section ref={leftRef} className="flex items-center w-1/3 md:w-full">
        <Dot />
        <p>About Me</p>
      </section>
      <section ref={rightRef} className="w-2/3 md:w-full flex flex-col gap-4 ">
        <p className="font-bold text-4xl md:text-3xl sm:text-sxl">
          <span className="w-12 h-4s padd"></span> Software Engineer passionate about leveraging the transformative potential of technology to solve real-world problems. Currently specializing in Machine Learning and Artificial Intelligence, with strong expertise in software development and a commitment to creating innovative, impactful solutions.
        </p>
        <div className="flex gap-5 items-center ">
          <Button text="About Me" onclick={() => {}} />
          <Button text="Contact" variant="secondary" onclick={() => {}} />
        </div>
      </section>
    </article>
  );
}
