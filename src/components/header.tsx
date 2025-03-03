import { Outlet } from "react-router"; 
import Logo from "./utils/logo";
import Button from "./utils/button";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const trigger = useRef(null);
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
        className="padd py-8 flex items-center mx-auto relative"
        ref={headerRef}
      >
        <Logo />
        {/* Mobile/Medium Navigation: Visible on small & medium screens */}
        <div className="relative flex-grow lg:hidden">
          {/* Centered navigation links */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex gap-5 items-center">
              <HeaderElement name="Home" link="/" />
              <HeaderElement name="About" link="/about" />
              <HeaderElement name="Main Projects" link="/projects-section" />
              <HeaderElement name="Other Projects" link="/projects" banner={9} />
              <HeaderElement name="Contact" link="/contact" />
            </div>
          </div>
          {/* Blog Posts button anchored to the right */}
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              text="Blog Posts"
              onclick={() =>
                window.open("https://medium.com/@m.achuli", "_blank")
              }
            />
          </div>
        </div>


        {/* Hamburger Menu: Visible only on large screens */}
<div className="hidden lg:block ml-auto">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-3xl focus:outline-none"
  >
    ☰
  </button>
</div>
      </section>

      {/* Desktop Overlay Menu (triggered by Hamburger) */}
      {menuOpen && (
        <div className="hidden lg:block bg-gray-900 text-white p-4 absolute top-16 left-0 w-full z-50">
          <div className="flex flex-col gap-4">
            <HeaderElement name="Home" link="/" onClick={() => setMenuOpen(false)} />
            <HeaderElement name="About" link="/about" onClick={() => setMenuOpen(false)} />
            <HeaderElement name="Main Projects" link="/projects-section" onClick={() => setMenuOpen(false)} />
            <HeaderElement name="Other Projects" link="/projects" banner={9} onClick={() => setMenuOpen(false)} />
            <HeaderElement name="Contact" link="/contact" onClick={() => setMenuOpen(false)} />
            <Button
              text="Blog Posts"
              onclick={() => {
                window.open("https://medium.com/@m.achuli", "_blank");
                setMenuOpen(false);
              }}
            />
          </div>
        </div>
      )}

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
  onClick?: () => void;
}

function HeaderElement({ name, link, isAnchor, banner, onClick }: HeaderElementProps) {
  return isAnchor ? (
    <a href={link} onClick={onClick} className="flex items-center gap-5 relative">
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
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-5 ${isActive ? "text-primary font-serif" : ""} relative`
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
