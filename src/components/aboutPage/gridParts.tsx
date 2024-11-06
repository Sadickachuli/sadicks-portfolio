import toast from "react-hot-toast";
import Button from "../utils/button";

export function One() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-black rounded-3xl p-6 flex flex-col gap-6">
        <p className="font-mono">
          Software Developer with 3 years of hands-on experience in building web
          applications, mobile apps, and websites. I focus on delivering
          functional, efficient, and user-centered digital solutions that stand
          out. Software Developer with 3 years of hands-on experience in
          building web applications, mobile apps, and websites. I focus on
          delivering functional, efficient, and user-centered digital solutions
          that stand out.
        </p>
        <section className="flex justify-between">
          <div className="flex gap-2">
            <div className="p-2 bg-secondary rounded-full group border border-black hover:border-primary/20">
              <img
                src="/icons/mail.png"
                className="w-4 object-cover group-hover:hidden"
              />
              <img
                src="/icons/mailg.png"
                className="w-4 object-cover hidden group-hover:block"
              />
            </div>
            <div className="p-2 bg-secondary rounded-full group border border-black hover:border-primary/20">
              <img
                src="/icons/link.png"
                className="w-4 object-cover group-hover:hidden"
              />
              <img
                src="/icons/linkg.png"
                className="w-4 object-cover hidden group-hover:block"
              />
            </div>
            <div className="p-2 bg-secondary rounded-full group border border-black hover:border-primary/20">
              <img
                src="/icons/twi.png"
                className="w-4 object-cover group-hover:hidden"
              />
              <img
                src="/icons/twig.png"
                className="w-4 object-cover hidden group-hover:block"
              />
            </div>
            <div className="p-2 bg-secondary rounded-full group border border-black hover:border-primary/20">
              <img
                src="/icons/git.png"
                className="w-4 object-cover group-hover:hidden"
              />
              <img
                src="/icons/gitg.png"
                className="w-4 object-cover hidden group-hover:block"
              />
            </div>
          </div>
          <Button text="Resume" onclick={() => {}} />
        </section>
      </section>
    </article>
  );
}
export function Two() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full bg-black rounded-3xl h-[30rem] relative px-px">
        <img
          src="/images/one.jpg"
          className="w-full h-full object-cover rounded-3xl grayscale object-bottom"
          alt=""
        />
        <section className="absolute bottom-0 left-0 flex flex-col gap-1 items-start p-6">
          <p className="text-white font-bold relative rounded-2xl overflow-hidden py-1 px-8 border border-primary/20">
            <p className="z-30 relative">Olla! 👋</p>
            <span className="z-10 w-full absolute h-full bg-secondary/90 top-0 left-0 rounded-2xl blur-sm" />
          </p>
          <p className="text-white font-bold relative rounded-2xl overflow-hidden py-1 px-8 border border-primary/20">
            <p className="z-30 relative">My name is Aristide Isingizwe</p>
            <span className="z-10 w-full absolute h-full bg-secondary/90 top-0 left-0 rounded-2xl blur-sm" />
          </p>
          <p className="text-white font-bold relative rounded-2xl overflow-hidden py-1 px-8 border border-primary/20">
            <p className="z-30 relative">But you can call me Saint 😇</p>
            <span className="z-10 w-full absolute h-full bg-secondary/90 top-0 left-0 rounded-2xl blur-sm" />
          </p>
          <p className="text-white font-bold relative rounded-2xl overflow-hidden py-1 px-8 border border-primary/20">
            <p className="z-30 relative">
              <span
                className="underline text-primary cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText("i.aristide08@gmail.com");
                  toast.success("Email copied to clipboard");
                }}
              >
                Grab
              </span>{" "}
              my email, and get in touch. ✌️
            </p>
            <span className="z-10 w-full absolute h-full bg-secondary/90 top-0 left-0 rounded-2xl blur-sm" />
          </p>
        </section>
      </section>
    </article>
  );
}
export function Three() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-black rounded-3xl p-6 flex flex-col gap-6 font-mono">
        <p className="font-serif text-xl">My Background</p>
        <p>
          Growing up, I developed a love for the arts, particularly in music,
          where I enjoyed playing the piano and guitar, as well as in fine arts.
          This early creative exposure naturally led me into the world of UI/UX
          design, where I discovered the beauty of crafting seamless user
          experiences and visually engaging interfaces.
        </p>
        <p>
          My journey in design sparked a deeper curiosity in technology,
          allowing me to transition smoothly into frontend development and later
          explore the backend. Over the years, I’ve explored various areas of
          tech, from design to development, continuously expanding my skills
          across different sectors.
        </p>
        <p>
          What excites me the most is the ability to blend creativity with
          technical precision. Whether it's designing a clean interface or
          developing a functional app, I strive to create digital experiences
          that not only work well but also leave a lasting impression
        </p>
      </section>
    </article>
  );
}
export function Four() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-black rounded-3xl"></section>
    </article>
  );
}
export function Five() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-black rounded-3xl"></section>
    </article>
  );
}
export function Six() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-black rounded-3xl"></section>
    </article>
  );
}

export function Seven() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-black rounded-3xl"></section>
    </article>
  );
}
export function Eight() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-black rounded-3xl"></section>
    </article>
  );
}
export function Nine() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-black rounded-3xl"></section>
    </article>
  );
}
