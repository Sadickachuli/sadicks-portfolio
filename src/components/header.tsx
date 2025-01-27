import { Outlet, useNavigate } from "react-router";
import Logo from "./utils/logo";
import Button from "./utils/button";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const navigate = useNavigate();

  const trigger = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top top",
        end: "200%",
        scrub: 3,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(headerRef.current, {
      background: "#212328",
      borderRadius: 50,
      paddingRight: "5%",
      paddingLeft: "5%",
      width: "60%",
      duration: 2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <article>
      <div className="h-2 z-0" ref={trigger} />
      <section
        className="padd py-8 flex justify-between items-center mx-auto"
        ref={headerRef}
      >
        <Logo />
        <section className="font-mono flex gap-5 items-center md:hidden">
          <HeaderElement name="Home" link="/" />
          <HeaderElement name="About" link="/about" />
          <HeaderElement name="Main Projects" link="/projects-section" />
          <HeaderElement name="Other Projects" link="/projects" banner={7} />          
          <HeaderElement name="Contact" link="/contact" />
        </section>
        <Button text="Start a Project" onclick={() => navigate("/contact")} />
      </section>
      <section>
        <Outlet />
      </section>
    </article>
  );
}

interface HeaderElementProps {
  name: string;
  link: string;
  isAnchor?: boolean;
  banner?: number;
}

function HeaderElement({ name, link, isAnchor, banner }: HeaderElementProps) {
  return isAnchor ? (
    <a href={link} className="flex items-center gap-5 relative">
      <p>{name}</p>
      {banner && (
        <div className="absolute -top-1 -right-3 font-sans h-4 w-4 text-sm text-black grid place-content-center bg-primary rounded-full">
          {banner}
        </div>
      )}
    </a>
  ) : (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `flex items-center gap-5 ${
          isActive ? "text-primary font-serif" : ""
        } relative`
      }
    >
      <p>{name}</p>
      {banner && (
        <div className="absolute -top-1 -right-3 font-sans h-4 w-4 text-sm text-black grid place-content-center bg-primary rounded-full">
          {banner}
        </div>
      )}
    </NavLink>
  );
}
