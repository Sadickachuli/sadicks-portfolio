import toast from "react-hot-toast";
{/* import Button from "../utils/button"; */}
import { useState, useEffect } from "react";

export function One() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-third rounded-3xl p-6 flex flex-col gap-6">
        <p className="font-mono">
          Machine Learning/AI Engineer with 4+ years of experience in developing web applications, mobile apps, and websites, coupled with 1 year of expertise in designing and implementing machine learning and AI models. Committed to delivering functional, efficient, and user-focused digital solutions that stand out for their innovation and impact.
        </p>
        <section className="flex justify-between">
          <div className="flex gap-2">
            {/* Mail Icon */}
            <a
              href="mailto:m.achuli@alustudent.com"
              className="p-2 bg-secondary rounded-full group border border-black hover:border-primary/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/mail.png"
                className="w-4 object-cover group-hover:hidden"
              />
              <img
                src="/icons/mailg.png"
                className="w-4 object-cover hidden group-hover:block"
              />
            </a>
            
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/sadick-achuli-81955b249/"
              className="p-2 bg-secondary rounded-full group border border-black hover:border-primary/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/link.png"
                className="w-4 object-cover group-hover:hidden"
              />
              <img
                src="/icons/linkg.png"
                className="w-4 object-cover hidden group-hover:block"
              />
            </a>
            
            {/* Twitter Icon */}
            <a
              href="https://x.com/Sadh_ick"
              className="p-2 bg-secondary rounded-full group border border-black hover:border-primary/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/twi.png"
                className="w-4 object-cover group-hover:hidden"
              />
              <img
                src="/icons/twig.png"
                className="w-4 object-cover hidden group-hover:block"
              />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/Sadickachuli"
              className="p-2 bg-secondary rounded-full group border border-black hover:border-primary/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/git.png"
                className="w-4 object-cover group-hover:hidden"
              />
              <img
                src="/icons/gitg.png"
                className="w-4 object-cover hidden group-hover:block"
              />
            </a>
          </div>
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
            <p className="z-30 relative">Hello! </p>
            <span className="z-10 w-full absolute h-full bg-third/90 top-0 left-0 rounded-2xl blur-sm" />
          </p>
          <p className="text-white font-bold relative rounded-2xl overflow-hidden py-1 px-8 border border-primary/20">
            <p className="z-30 relative">My name is Sadick Mustapha</p>
            <span className="z-10 w-full absolute h-full bg-third/90 top-0 left-0 rounded-2xl blur-sm" />
          </p>
          <p className="text-white font-bold relative rounded-2xl overflow-hidden py-1 px-8 border border-primary/20">
            <p className="z-30 relative">You can call me Sadick</p>
            <span className="z-10 w-full absolute h-full bg-third/90 top-0 left-0 rounded-2xl blur-sm" />
          </p>
          <p className="text-white font-bold relative rounded-2xl overflow-hidden py-1 px-8 border border-primary/20">
            <p className="z-30 relative">
              <span
                className="underline text-primary cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText("m.achuli@alustudent.com");
                  toast.success("Email copied to clipboard");
                }}
              >
                Get in touch with me
              </span>{" "}
              through my email
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
        Mustapha, unlike many undergraduates or graduates, boasts about having a mission instead of a major. He is a 
        dedicated social impact leader with a deep passion for community development and global engagement. A student 
        at the African Leadership University in Rwanda, currently in Ghana researching and doing impactful projects in
        underserved communities. He has consistently demonstrated a commitment to fostering sustainable change and is the 
        co-founder of  Wings of Change, an initiative focused on improving educational opportunities and family support for 
        children in underserved areas of Ghana. After successfully completing many projects aimed at projecting the innovative 
        ideas and the youth in Ghana, he  is leading efforts to expand its reach and impact.
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
  const educationData = [
    {
      yearRange: "2022 - 2026",
      major: "Software Engineering major",
      school: "African Leadership University",
      location: "Kigali Rwanda",
    },
    {
      yearRange: "2019 - 2021",
      major: "Honors Science and Mathematics",
      school: "Hickman High School",
      location: "United States",
    },
  ];

  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-third rounded-3xl p-6 flex flex-col gap-6">
        <p className="font-serif text-xl">Education</p>
        <section className="flex flex-col gap-6 pb-6">
          {educationData.map((edu, i) => (
            <article key={i} className="flex gap-12 items-start">
              <p className="font-mono text-white/40 text-sm">{edu.yearRange}</p>
              <section className="-mt-1 flex flex-col gap-2">
                <p className="font-serif text-lg">{edu.major}</p>
                <div className="flex text-sm gap-2 text-white/50">
                  <p>{edu.school}</p>
                  <p className="bg-secondary py-px px-4 text-xs rounded-2xl">
                    {edu.location}
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
  const experienceData = [
    {
      yearRange: "Aug 2023 - Now",
      title: "Software Consultant",
      company: "Stone House Group",
      location: "United States",
    },
    {
      yearRange: "Oct 2024 - Dec 2024",
      title: "Programmer and Mathematician",
      company: "Gentle Earth",
      location: "Dubai UAE",
    },
    {
      yearRange: "Feb 2023 - Jun 2023",
      title: "Software Developer",
      company: "Homyz Real Estate",
      location: "Remote",
    },
    {
      yearRange: "Jan 2024 - Apr 2024",
      title: "AI Software developer",
      company: "Health Track AI",
      location: "Rwanda",
    },
    {
      yearRange: "Jun 2023 - Jul 2023",
      title: "Project Manager",
      company: "Play With Toca Web App",
      location: "Nigeria",
    },
    {
      yearRange: "Jan 2023 - Apr 2023",
      title: "Software developer",
      company: "Ecosheane Africa",
      location: "Rwanda",
    },
    {
      yearRange: "Aug 2024 - Sep 2024",
      title: "Web Developer",
      company: "Fashion Aura",
      location: "Ghana",
    },
  ];

  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-third rounded-3xl p-6 flex flex-col gap-6">
        <p className="font-serif text-xl">Experience</p>
        <section className="flex flex-col gap-6 border-b border-white/30 pb-6">
          {experienceData.map((exp, i) => (
            <article key={i} className="flex gap-12 items-start">
              <p className="font-mono text-white/40 text-sm">{exp.yearRange}</p>
              <section className="-mt-1 flex flex-col gap-2">
                <p className="font-serif text-lg">{exp.title}</p>
                <div className="flex text-sm gap-2 text-white/50">
                  <p>{exp.company}</p>
                  <p className="bg-secondary py-px px-4 text-xs rounded-2xl">
                    {exp.location}
                  </p>
                </div>
              </section>
            </article>
          ))}
        </section>
        <section className="flex gap-2 justify-between opacity-50">
          <img src="/icons/shg.png" alt="" className="w-8 object-contain" />
          <img src="/icons/GEP.jpg" alt="" className="w-8 object-contain" />
          <img src="/icons/htai.png" alt="" className="w-8 object-contain" />
          <img src="/icons/sheane.jpg" alt="" className="w-8 object-contain" />
          <img src="/icons/logo.png" alt="" className="w-8 object-contain" />
        </section>
      </section>
    </article>
  );
}


export function Six() {
  const images = [
    "/images/osu.jpg",
    "/images/sun.jpg",
    "/images/three.jpg",
    "/images/lake.jpg",
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
        <p className="font-serif text-xl">Web Dev Tools</p>
        <section className="flex flex-wrap gap-4">
          {/* Replace the below image paths with your other PNGs */}
          <img src="/icons/figma.png" alt="Figma" className="w-8 object-contain" />
          <img src="/icons/react.js.png" alt="Tool 1" className="w-8 object-contain" />
          <img src="/icons/node-express.png" alt="Tool 2" className="w-8 object-contain" />
          <img src="/icons/docker.jpg" alt="Tool 3" className="w-8 object-contain" />
          <img src="/icons/flask.jpg" alt="Tool 4" className="w-8 object-contain" />
          <img src="/icons/flutter.jpg" alt="Figma" className="w-8 object-contain" />
          <img src="/icons/firebase-firestore.png" alt="Tool 5" className="w-8 object-contain" />
          <img src="/icons/mongodb.png" alt="Tool 6" className="w-8 object-contain" />
          <img src="/icons/mysql-vs-postgresql.png" alt="Figma" className="w-8 object-contain" />
          <img src="/icons/react-native.png" alt="Tool 7" className="w-8 object-contain" />
          <img src="/icons/sqlite.jpg" alt="Tool 7" className="w-8 object-contain" />
        </section>
        
        <p className="font-serif text-xl">Machine Learning Tools</p>
        <section className="flex flex-wrap gap-4">
          {/* Replace the below image paths with your other PNGs for skills */}
          <img src="/icons/python.png" alt="TypeScript" className="w-8 object-contain" />
          <img src="/icons/col.png" alt="Skill 1" className="w-8 object-contain" />
          <img src="/icons/jup.png" alt="Skill 2" className="w-8 object-contain" />
          <img src="/icons/keras.png" alt="Skill 3" className="w-8 object-contain" />
          <img src="/icons/light.png" alt="TypeScript" className="w-8 object-contain" />
          <img src="/icons/mat.png" alt="Skill 4" className="w-8 object-contain" />
          <img src="/icons/numpy.png" alt="TypeScript" className="w-8 object-contain" />
          <img src="/icons/pandas.png" alt="Skill 5" className="w-8 object-contain" />
          <img src="/icons/opencv.png" alt="Skill 6" className="w-8 object-contain" />
          <img src="/icons/pytorch.png" alt="TypeScript" className="w-8 object-contain" />
          <img src="/icons/tf.png" alt="TypeScript" className="w-8 object-contain" />
          <img src="/icons/trans.png" alt="TypeScript" className="w-8 object-contain" />
        </section>
      </section>
    </article>
  );
}

export function Eight() {
  return (
    <article className="w-full mb-6 p-px bg-gradient-to-br from-transparent to-primary break-inside-avoid rounded-3xl">
      <section className="w-full h-full bg-third rounded-3xl p-6 flex flex-col gap-6">
        <p className="font-serif text-xl">Top 3 Jams 🎧</p>
        <section className="flex flex-col gap-6">
          <JamCard
            title="Superstar"
            artist="Wizkid"
            imgSrc="/images/four.jpg"
          />
          <JamCard
            title="One Of Wun"
            artist="Gunna"
            imgSrc="/images/gunna.jpg" 
          />
          <JamCard
            title="Graduation"
            artist="Kanye"
            imgSrc="/images/kanye.jpg" 
          />
        </section>
      </section>
    </article>
  );
}

type JamCardProps = {
  title: string;
  artist: string;
  imgSrc: string;
};

function JamCard({ title, artist, imgSrc }: JamCardProps) {
  return (
    <article className="flex gap-6 items-start bg-secondary/50 p-4 rounded-xl">
      <img
        src={imgSrc}
        className="w-16 h-16 rounded-xl object-cover"
        alt={title}
      />
      <section className="flex flex-col gap-1">
        <p className="font-mono text-white/40 text-sm">{title}</p>
        <p className="font-serif">{artist}</p>
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
