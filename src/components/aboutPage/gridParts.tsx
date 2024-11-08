import toast from "react-hot-toast";
import Button from "../utils/button";
import { useState, useEffect } from "react";

export function One() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-third rounded-3xl p-6 flex flex-col gap-6">
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
            <span className="z-10 w-full absolute h-full bg-third/90 top-0 left-0 rounded-2xl blur-sm" />
          </p>
          <p className="text-white font-bold relative rounded-2xl overflow-hidden py-1 px-8 border border-primary/20">
            <p className="z-30 relative">My name is Aristide Isingizwe</p>
            <span className="z-10 w-full absolute h-full bg-third/90 top-0 left-0 rounded-2xl blur-sm" />
          </p>
          <p className="text-white font-bold relative rounded-2xl overflow-hidden py-1 px-8 border border-primary/20">
            <p className="z-30 relative">But you can call me Saint 😇</p>
            <span className="z-10 w-full absolute h-full bg-third/90 top-0 left-0 rounded-2xl blur-sm" />
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
            <span className="z-10 w-full absolute h-full bg-third/90 top-0 left-0 rounded-2xl blur-sm" />
          </p>
        </section>
      </section>
    </article>
  );
}
export function Three() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-third rounded-3xl p-6 flex flex-col gap-6 font-mono">
        <p className="font-serif text-xl">Background</p>
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
      <section className="w-full h-full bg-third rounded-3xl p-6 flex flex-col gap-6">
        <p className="font-serif text-xl">Education</p>
        <section className="flex flex-col gap-6 pb-6">
          {[0, 1, 2].map((_, i) => (
            <article key={i} className="flex gap-12 items-start">
              <p className="font-mono text-white/40 text-sm">2020 - 2022</p>
              <section className="-mt-1 flex flex-col gap-2">
                <p className="font-serif text-lg">Software Engineering major</p>
                <div className="flex text-sm gap-2 text-white/50">
                  <p>Instutution Name</p>
                  <p className="bg-secondary py-px px-4 text-xs rounded-2xl">
                    Location
                  </p>
                </div>
              </section>
            </article>
          ))}
        </section>
      </section>
    </article>
  );
}
export function Five() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-third rounded-3xl p-6 flex flex-col gap-6">
        <p className="font-serif text-xl">Experience</p>
        <section className="flex flex-col gap-6 border-b border-white/30 pb-6">
          {[0, 1, 2, 3, 4, 5].map((_, i) => (
            <article key={i} className="flex gap-12 items-start">
              <p className="font-mono text-white/40 text-sm">2020 - 2022</p>
              <section className="-mt-1 flex flex-col gap-2">
                <p className="font-serif text-lg">Software Developer</p>
                <div className="flex text-sm gap-2 text-white/50">
                  <p>Company Name</p>
                  <p className="bg-secondary py-px px-4 text-xs rounded-2xl">
                    Germany
                  </p>
                </div>
              </section>
            </article>
          ))}
        </section>
        <section className="flex gap-2 justify-between opacity-50">
          <img src="/icons/logo.png" alt="" className="w-8 object-contain" />
          <img src="/icons/logo.png" alt="" className="w-8 object-contain" />
          <img src="/icons/logo.png" alt="" className="w-8 object-contain" />
          <img src="/icons/logo.png" alt="" className="w-8 object-contain" />
          <img src="/icons/logo.png" alt="" className="w-8 object-contain" />
        </section>
      </section>
    </article>
  );
}

export function Six() {
  const images = [
    "/images/one.jpg",
    "/images/two.jpg",
    "/images/three.jpg",
    "/images/four.jpg",
    "/images/five.jpg",
    "/images/six.jpg",
    "/images/seven.jpg",
  ];

  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl relative">
      <section className="w-full bg-black rounded-3xl h-[30rem] relative px-px overflow-hidden">
        <div
          className="w-full h-full object-cover rounded-3xl absolute inset-0 transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
            display: "flex",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="w-full min-w-full h-full object-cover rounded-3xl grayscale object-bottom"
              alt=""
            />
          ))}
        </div>
      </section>

      <div className="w-full absolute bottom-0 left-0 flex items-center justify-center py-6">
        <div className="flex justify-center space-x-2 bg-secondary w-fit py-1 px-6 rounded-2xl">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentImage ? "bg-primary" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export function Seven() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-third rounded-3xl p-6 flex flex-col gap-6">
        <p className="font-serif text-xl">Tool Stack</p>
        <section className="flex flex-wrap gap-4">
          <img src="/icons/figma.png" alt="" className="w-8 object-contain" />
          <img src="/icons/figma.png" alt="" className="w-8 object-contain" />
          <img src="/icons/figma.png" alt="" className="w-8 object-contain" />
          <img src="/icons/figma.png" alt="" className="w-8 object-contain" />
          <img src="/icons/figma.png" alt="" className="w-8 object-contain" />
          <img src="/icons/figma.png" alt="" className="w-8 object-contain" />
          <img src="/icons/figma.png" alt="" className="w-8 object-contain" />
          <img src="/icons/figma.png" alt="" className="w-8 object-contain" />
          <img src="/icons/figma.png" alt="" className="w-8 object-contain" />
          <img src="/icons/figma.png" alt="" className="w-8 object-contain" />
        </section>
        <p className="font-serif text-xl">Skill Stack</p>
        <section className="flex flex-wrap gap-4">
          <img
            src="/icons/typescript.png"
            alt=""
            className="w-8 object-contain"
          />
          <img
            src="/icons/typescript.png"
            alt=""
            className="w-8 object-contain"
          />
          <img
            src="/icons/typescript.png"
            alt=""
            className="w-8 object-contain"
          />
          <img
            src="/icons/typescript.png"
            alt=""
            className="w-8 object-contain"
          />
          <img
            src="/icons/typescript.png"
            alt=""
            className="w-8 object-contain"
          />
          <img
            src="/icons/typescript.png"
            alt=""
            className="w-8 object-contain"
          />
          <img
            src="/icons/typescript.png"
            alt=""
            className="w-8 object-contain"
          />
          <img
            src="/icons/typescript.png"
            alt=""
            className="w-8 object-contain"
          />
          <img
            src="/icons/typescript.png"
            alt=""
            className="w-8 object-contain"
          />
          <img
            src="/icons/typescript.png"
            alt=""
            className="w-8 object-contain"
          />
        </section>
      </section>
    </article>
  );
}
export function Eight() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-third rounded-3xl p-6 flex flex-col gap-6">
        <p className="font-serif text-xl">Fav Jams</p>
        <section className="flex flex-col gap-6">
          {[0, 1, 2].map((_, i) => (
            <article
              key={i}
              className="flex gap-6 items-start bg-secondary/50 p-4 rounded-xl"
            >
              <img
                src="/images/four.jpg"
                className="w-16 h-16 rounded-xl object-cover"
              />
              <section className="flex flex-col gap-1">
                <p className="font-mono text-white/40 text-sm">Song Title</p>
                <p className="font-serif">Artist Name</p>
              </section>
            </article>
          ))}
        </section>
      </section>
    </article>
  );
}
export function Nine() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-third rounded-3xl p-6"></section>
    </article>
  );
}
