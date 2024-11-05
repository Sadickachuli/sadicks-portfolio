import Dot from "../dot";

export default function SkillsSection() {
  return (
    <article className="padd flex justify-between items-start py-12">
      <section className="flex items-center w-1/3 md:w-full">
        <Dot />
        <p>Skills</p>
      </section>
      <section className="flex w-2/3 md:w-full justify-between gap-6 items-center my-10">
        <div className="h-[40vh] w-full md:px-8 sm:px-4 z-30 md:w-full">
          <iframe
            className="overflow-hidden w-full border-2 border-primary h-full rounded-3xl z-30"
            src="/embed/skills.html"
            title="Embedded HTML"
          />
        </div>
      </section>
    </article>
  );
}
