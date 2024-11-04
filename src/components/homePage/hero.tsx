import Button from "../utils/button";

export default function HeroSection() {
  return (
    <article className="w-full h-[70vh] padd py-10 relative">
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover rounded-3xl bg-white"
      />
      <article className="padd w-full absolute top-10 left-0 h-1/2">
        <section className="h-full w-full rounded-3xl flex">
          <div className="bg-black h-1/4 w-1/6 relative md:hidden">
            <img
              src="/images/clip.png"
              className="w-10 h-10 object-contain absolute right-0 -bottom-10"
              alt=""
            />
          </div>
          <div className="h-full z-20">
            <div className="w-fit py-1 px-10 bg-black font-normal text-base relative rounded-br-3xl">
              Holla! I am Aristide 👋
              <img
                src="/images/clip.png"
                className="w-7 h-7 object-contain absolute -right-7 -rotate-90 top-0"
                alt=""
              />
              <p className="w-fit py-2 bg-black font-bold text-5xl md:text-4xl sm:text-2xl whitespace-nowrap">
                A Software Developer and
              </p>
            </div>
            <div className="w-fit py-2 px-10 bg-black font-bold text-5xl md:text-4xl sm:text-2xl relative rounded-br-3xl">
              UI/UX Web Design
              <img
                src="/images/clip.png"
                className="w-7 h-7 object-contain absolute -right-7 -rotate-90 top-0"
                alt=""
              />
            </div>
            <div className="w-fit py-2 px-10 bg-black font-bold text-5xl md:text-4xl sm:text-2xl rounded-br-3xl relative">
              Based in Kigali
              <img
                src="/images/clip.png"
                className="w-7 h-7 object-contain absolute -right-7 -rotate-90 top-0"
                alt=""
              />
            </div>
            <div className="text-base w-fit bg-black px-8 py-3 rounded-bl-3xl rounded-br-3xl relative">
              <Button text="View My works" onclick={() => {}} />
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
