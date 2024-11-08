import Dot from "../dot";

export default function ProjectCard({ isText }: { isText?: boolean }) {
  return isText ? (
    <section className="w-full flex flex-col gap-4 mb-10">
      <p className="font-serif text-3xl">
        <Quats />
        Shape understands the client's concept & turns ideas into a reality
      </p>
      <div className="flex items-center gap-6">
        <p className="h-12 w-12 rounded-xl bg-primary font-serif text-2xl grid place-content-center text-black">
          AI
        </p>
        <div>
          <p>Aristide Isingizwe</p>
          <p>Aristide Isingizwe</p>
        </div>
      </div>
    </section>
  ) : (
    <article className="break-inside-avoid w-full mb-10">
      <img
        src="/images/test.jpg"
        className="w-full h-[30rem] object-cover group-hover:scale-[104%] rounded-3xl transition-all duration-300"
        alt=""
      />
      <section>
        <div className="flex items-center gap-3">
          <p>2024</p>
          <Dot />
          <p>Aristide Isingizwe</p>
        </div>
        <p className="font-bold font-serif text-3xl">
          Refreshing Gary Neville's digital presence
        </p>
      </section>
      <section className="absolute top-0 right-0 bg-black -translate-y-20 transition-all duration-300 group-hover:translate-y-0 rounded-bl-3xl">
        <section className="px-10 py-3 w-full h-full flex items-center gap-4 relative">
          <div className="bg-secondary text-primary px-4 rounded-2xl text-xs font-mono py-1">
            Design
          </div>
          <div className="bg-secondary text-primary px-4 rounded-2xl text-xs font-mono py-1">
            Website
          </div>
          <div className="bg-secondary text-primary px-4 rounded-2xl text-xs font-mono py-1">
            SEO
          </div>
          <img
            src="/images/clip.png"
            className="w-5 h-5 object-contain absolute -left-5 top-0"
            alt=""
          />
          <img
            src="/images/clip.png"
            className="w-7 h-7 object-contain absolute right-0 -bottom-7"
            alt=""
          />
        </section>
      </section>
    </article>
  );
}

function Quats() {
  return <img src="/icons/quote.png" className="w-6 object-contain" alt="" />;
}
