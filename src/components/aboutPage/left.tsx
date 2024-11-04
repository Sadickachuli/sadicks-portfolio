import Button from "../utils/button";

export default function LeftSection() {
  return (
    <article className="w-full h-full flex flex-col gap-6">
      <section className="w-full h-[20%] rounded-2xl bg-gradient-to-br from-black to-primary/30 p-[2px]">
        <section className="w-full h-full bg-black rounded-2xl p-4 flex flex-col justify-between">
          <p>
            Product Designer with 13 years of experience, focused on creating
            functional and user-centered digital products with visually stunning
            designs.
          </p>
          <div className="self-end">
            <Button text="Download CV" onclick={() => {}} />
          </div>
        </section>
      </section>
      <section className="w-full h-[50%] rounded-2xl bg-gradient-to-br from-black to-primary/30 p-[2px]">
        <section className="w-full h-full bg-black rounded-2xl"></section>
      </section>
      <section className="w-full h-[30%] rounded-2xl bg-gradient-to-br from-black to-primary/30 p-[2px]">
        <section className="w-full h-full bg-black rounded-2xl"></section>
      </section>
    </article>
  );
}
