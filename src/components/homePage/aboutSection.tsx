import Dot from "../dot";
import Button from "../utils/button";

export default function AboutSection() {
  return (
    <article className="flex justify-between md:flex-col items-start padd py-10">
      <section className="flex items-center w-1/3 md:w-full">
        <Dot />
        <p>About Me</p>
      </section>
      <section className="w-2/3 md:w-full flex flex-col gap-4 ">
        <p className="font-bold text-4xl md:text-3xl sm:text-sxl">
          <span className="w-12 h-4s padd"></span> A passionate
          software developer from Rwanda, specializing in Machine Learning with
          expertise in full-stack development, mobile apps, and design. I
          combine creativity and technical skill to build solutions that make an
          impact.
        </p>
        <div className="flex gap-5 items-center ">
          <Button text="About Me" onclick={() => {}} />
          <Button text="Contact" variant="secondary" onclick={() => {}} />
        </div>
      </section>
    </article>
  );
}
