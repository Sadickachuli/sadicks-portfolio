import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  return (
    <article className="bg-secondary/50 padd py-12">
      <section className="text-9xl font-sans pb-10">
        <p>Let's talk</p>
      </section>
      <section className="flex justify-between items-start md:flex-col mb-12">
        <aside className="flex gap-20">
          <div className="flex flex-col gap-5">
            <SwipeLinkButton to="/projects" text="Works" />
            <SwipeLinkButton to="/about" text="About" />
            <SwipeLinkButton to="/contact" text="Contact" />
            <SwipeLinkButton to="/test" text="SomeWhere" />
          </div>
          <div className="flex flex-col gap-5">
            <SwipeLinkButton to="/projects" text="LinkedIn" />
            <SwipeLinkButton to="/about" text="Twitter" />
            <SwipeLinkButton to="/contact" text="Instagram" />
            <SwipeLinkButton to="/test" text="Codewars" />
          </div>
        </aside>
        <section className="flex flex-col gap-6">
          <p className="font-bold text-4xl">
            Leave an email andd i'll get back to you ...
          </p>
          <form className="flex-1 p-1 rounded-full border border-primary flex items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="p-4 px-6 w-full bg-transparent text-lg outline-none"
            />
            <button className="bg-primary text-black py-4 px-10 rounded-full">
              Submit
            </button>
          </form>
        </section>
      </section>
      <section className="flex justify-between text-gray-500 pt-12 border-t border-primary/30">
        <div className="relative group overflow-hidden">
          <p className="group-hover:bottom-full group-hover:-translate-y-full transition-all duration-200">
            Cookies and privacy
          </p>
          <p className="text-primary absolute top-full left-0 group-hover:-translate-y-full transition-all duration-200">
            Cookies and privacy
          </p>
        </div>
        <p>Copyright&copy;2025.AristideIsingizwe.AllRightsReserved</p>
      </section>
    </article>
  );
}

type LinkButtonProps = {
  to: string;
  text: string;
};

export function SwipeLinkButton({ to, text }: LinkButtonProps) {
  return (
    <Link to={to}>
      <div className="relative group overflow-hidden text-3xl font-sans">
        <p className="group-hover:bottom-full group-hover:-translate-y-full transition-all duration-200">
          {text}
        </p>
        <p className="text-primary absolute top-full left-0 group-hover:-translate-y-full transition-all duration-200">
          {text}
        </p>
      </div>
    </Link>
  );
}
