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
          </div>
          <div className="flex flex-col gap-5">
            <SwipeLinkButton
              to="https://www.linkedin.com/in/sadick-achuli-81955b249/"
              text="LinkedIn"
              external
            />
            <SwipeLinkButton
              to="https://x.com/Sadh_ick"
              text="Twitter"
              external
            />
            <SwipeLinkButton
              to="https://www.instagram.com/sadh_ick/"
              text="Instagram"
              external
            />
          </div>
        </aside>
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
        <p>Copyright &copy; 2025. Sadick - All Rights Reserved</p>
      </section>
    </article>
  );
}

type LinkButtonProps = {
  to: string;
  text: string;
  external?: boolean; // Add an optional prop to indicate external links
};

export function SwipeLinkButton({ to, text, external }: LinkButtonProps) {
  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <div className="relative group overflow-hidden text-3xl font-sans">
        <p className="group-hover:bottom-full group-hover:-translate-y-full transition-all duration-200">
          {text}
        </p>
        <p className="text-primary absolute top-full left-0 group-hover:-translate-y-full transition-all duration-200">
          {text}
        </p>
      </div>
    </a>
  ) : (
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
