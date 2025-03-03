import { useGSAP } from "@gsap/react";
import Dot from "../dot";
import Button from "../utils/button";
import { useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function HeroSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useGSAP(() => {
    gsap.from(ref1.current, { y: "-100%", duration: 2, opacity: 0 });
    gsap.from(ref2.current, { x: -100, duration: 2, opacity: 0 });
    gsap.from(ref3.current, { x: -100, duration: 2, opacity: 0 });
    gsap.from(ref4.current, { x: -100, duration: 2, opacity: 0 });
    gsap.from(ref5.current, { y: "100%", duration: 2, opacity: 0 });
  }, []);

  return (
    <article className="w-full h-[75vh] padd py-10 relative">
      {/* Video for larger screens */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover rounded-3xl bg-white block md:hidden"
      />
      {/* Static image for mobile devices */}
      <img
        src="/hero2.jpeg" 
        alt="Hero section"
        className="w-full h-full object-cover rounded-3xl bg-white hidden md:block"
      />

      <article className="padd w-full absolute top-10 left-0 h-1/2">
        <section className="h-full w-full rounded-3xl flex">
          <div className="bg-black h-1/4 w-1/6 relative md:hidden">
            <img
              src="/images/clip.png"
              className="w-10 h-10 object-contain absolute right-0 -bottom-10"
              alt=""
            />
            <img
              src="/images/clip.png"
              className="w-10 h-10 object-contain absolute left-0 -bottom-10 -rotate-90"
              alt=""
            />
          </div>
          <div className="h-full z-20">
            <div className="w-fit py-1 px-10 bg-black font-normal text-base relative rounded-br-3xl">
              <div ref={ref1} className="flex items-center">
                <Dot />
                <p>Hello! I Am Sadick</p>
              </div>
              <img
                src="/images/clip.png"
                className="w-7 h-7 object-contain absolute -right-7 -rotate-90 top-0"
                alt=""
              />
              <p
                ref={ref2}
                className="w-full py-2 bg-black font-bold text-5xl sm:text-xl md:whitespace-nowrap"
              >
                A Machine Learning/AI engineer,
              </p>
            </div>
            <div className="w-fit py-2 px-10 bg-black font-bold text-5xl md:text-4xl sm:text-2xl relative rounded-br-3xl">
              <p ref={ref3}>Software Developer</p>
              <img
                src="/images/clip.png"
                className="w-7 h-7 object-contain absolute -right-7 -rotate-90 top-0"
                alt=""
              />
            </div>
            <div className="w-fit py-2 px-10 bg-black font-bold text-5xl md:text-4xl sm:text-2xl rounded-br-3xl relative">
              <p ref={ref4}>4+ yrs experience</p>
              <img
                src="/images/clip.png"
                className="w-7 h-7 object-contain absolute -right-7 -rotate-90 top-0"
                alt=""
              />
            </div>
            <div className="text-base w-fit bg-black px-8 py-3 rounded-bl-3xl rounded-br-3xl relative">
              <div ref={ref5}>
                {/* Route to /project-section */}
                <Button text="View My works" onclick={() => navigate("/projects-section")} />
              </div>
              <img
                src="/images/clip.png"
                className="w-7 h-7 object-contain absolute -right-7 -rotate-90 top-0"
                alt=""
              />
            </div>
          </div>
        </section>
      </article>
    </article>
  );
}
