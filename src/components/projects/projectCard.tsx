import Dot from "../dot";

type ProjectCardProps = {
  githubLink: string;
  imageSrc: string; // Image source is a string and should be required
  year: string;
  author: string;
  title: string;
  isHalf?: boolean; // Optional prop for styling adjustments
};

export default function ProjectCard({
  githubLink,
  imageSrc,
  year,
  author,
  title,
  isHalf = false,
}: ProjectCardProps) {
  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full mb-10 group relative flex flex-col gap-6 overflow-hidden rounded-tl-3xl"
    >
      <div className={`w-full ${isHalf ? "h-[25rem]" : "h-[30rem]"} relative`}>
        <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-[104%] rounded-3xl transition-all duration-300" />
      </div>
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <p>{year}</p>
          <Dot />
          <p>{author}</p>
        </div>
        <p className="font-bold font-serif text-3xl">{title}</p>
      </section>
      <section className="absolute top-0 right-0 bg-black -translate-y-20 transition-all duration-300 group-hover:translate-y-0 rounded-bl-3xl">
        <section className="px-10 py-3 w-full h-full flex items-center gap-4 relative">
          <div className="bg-secondary text-primary px-4 rounded-2xl text-xs font-mono py-1">Design</div>
          <div className="bg-secondary text-primary px-4 rounded-2xl text-xs font-mono py-1">Website</div>
          <div className="bg-secondary text-primary px-4 rounded-2xl text-xs font-mono py-1">SEO</div>
          <img src="/images/clip.png" className="w-5 h-5 object-contain absolute -left-5 top-0" alt="Clip Icon" />
          <img src="/images/clip.png" className="w-7 h-7 object-contain absolute right-0 -bottom-7" alt="Clip Icon" />
        </section>
      </section>
    </a>
  );
}
